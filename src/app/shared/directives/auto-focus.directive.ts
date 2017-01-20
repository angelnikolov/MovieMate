import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';
@Directive({
  selector: '[autoFocus]'
})
export class AutoFocusDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement, 'focus', []);
  }
  ngOnDestroy() {
  }

}
