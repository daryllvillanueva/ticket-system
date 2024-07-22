import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>()

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement> 

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); 

  ngAfterContentInit() {
    //...
  }

  constructor() {
    afterRender(() => {
      console.log("After Render")
    });
    
    afterNextRender(() => {
      console.log("After Next Render")
    });
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.control());
  }
  
}
