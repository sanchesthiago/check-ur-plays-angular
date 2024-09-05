import { CommonModule, ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import { data } from '../../../assets/data';

@Component({
  selector: 'app-cast-movies',
  standalone: true,
  imports: [DragScrollComponent, DragScrollItemDirective, CommonModule],
  templateUrl: './cast-movies.component.html',
  styleUrl: './cast-movies.component.scss',
})
export class CastMoviesComponent implements OnInit {
  scroll: ViewportScroller = inject(ViewportScroller);
  productList: Product[] = new Array<Product>();
  jsonData = data as Array<any>;
  direction = '';
  public isCollapsed = false;
  isNavCollapse = false;
  @HostListener('window:scroll', []) onScroll() {
    if (this.scroll.getScrollPosition()[1] > 70) {
      this.isNavCollapse = true;
    } else {
      this.isNavCollapse = false;
    }
  }
  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      let product = new Product(this.jsonData[i]);
      this.productList.push(product);
    }
  }
  onWheel(event: WheelEvent): void {
    if (event.deltaY > 0) this.scrollToRight();
    else this.scrollToLeft();
  }

  scrollToLeft(): void {
    document.getElementById('scroll-1')!.scrollLeft -= 400;
  }

  scrollToRight(): void {
    document.getElementById('scroll-1')!.scrollLeft += 400;
  }

  // @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  // moveLeft() {
  //   this.ds.moveLeft();
  // }

  // moveRight() {
  //   this.ds.moveRight();
  // }

  // // moveTo(index: number) {
  // //   this.ds.moveTo(index);
  // // }
  // ngAfterViewInit() {
  //   // Starting ngx-drag-scroll from specified index(3)
  //   setTimeout(() => {
  //     this.ds.moveTo(3);
  //   }, 0);
  // }
}
class Product {
  title: string;
  type: string;
  description: string;
  price: number;
  rating: number;
  image: string;

  constructor(product: any = {}) {
    this.title = product.title;
    this.type = product.type;
    this.description = product.description;
    this.price = product.price;
    this.rating = product.rating;
    this.image =
      'https://alcodesbase.blob.core.windows.net/generic/sections-default-image.png';
  }
}
