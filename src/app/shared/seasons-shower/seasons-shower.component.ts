import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seasons-shower',
  standalone: true,
  imports: [],
  templateUrl: './seasons-shower.component.html',
  styleUrl: './seasons-shower.component.scss',
})
export class SeasonsShowerComponent {
  @Input() season!: number;
  @Input() episodes!: number;
  @Input() link!: string;
}
