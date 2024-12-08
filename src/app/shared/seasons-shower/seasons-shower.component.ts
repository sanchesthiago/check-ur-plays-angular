import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seasons-shower',
  standalone: true,
  imports: [],
  templateUrl: './seasons-shower.component.html',
  styleUrl: './seasons-shower.component.scss',
})
export class SeasonsShowerComponent {
  private router: Router = inject(Router);
  @Input() season!: string;
  @Input() episodes!: number;
  @Input() link!: string | null;

  sendToEpisodes() {
    this.router.navigate(['destalhes-temporadas']);
  }
}
