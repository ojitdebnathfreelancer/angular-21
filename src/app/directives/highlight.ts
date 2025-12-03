import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor(private eleRef: ElementRef) {
    console.log('highlight');
  }
  @HostListener('mouseenter')
  onHover() {
    this.eleRef.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave')
  onHoverLeft() {
    this.eleRef.nativeElement.style.color = '';
  }
}
