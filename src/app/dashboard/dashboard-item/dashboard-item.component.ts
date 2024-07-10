import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // @Input({required: true}) image!: {src: string; alt: string;};
  // @Input({required: true}) title!: string;

  image = input.required<{src: string; alt: string;}>() //only available on Angular 17.1 or later
  title = input.required<string>()
}
