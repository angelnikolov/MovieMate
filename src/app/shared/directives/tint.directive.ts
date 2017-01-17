import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[mmTint]'
})
export class TintDirective implements OnInit {
  private mouseOutSubscription: Subscription;
  private mouseMovesSubscription: Subscription;
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {

    const shine: HTMLElement = this.renderer.createElement(this.elementRef.nativeElement, "div");
    shine.classList.add('card__shine');
    this.renderer.projectNodes(this.elementRef.nativeElement, [shine])

    this.mouseOutSubscription = Observable.fromEvent(this.elementRef.nativeElement, 'mouseout')
      .subscribe((e: MouseEvent) => {
        this.renderer.setElementStyle(this.elementRef.nativeElement, "transform", 'scale(1) translateY(0px) rotateX(0deg) rotateY(0deg)');
        this.renderer.setElementStyle(this.elementRef.nativeElement.querySelector('.card__shine'), "background", 'none');
      });
    this.mouseMovesSubscription =
      Observable.fromEvent(this.elementRef.nativeElement, 'mousemove')
        .map((e: MouseEvent) => {
          let mouseX = (e.clientX - this.elementRef.nativeElement.getBoundingClientRect().left),
            mouseY = (e.clientY - this.elementRef.nativeElement.getBoundingClientRect().top),
            elementWidth = this.elementRef.nativeElement.offsetWidth,
            elementHeight = this.elementRef.nativeElement.offsetHeight,
            dx = mouseX - elementWidth / 2,
            dy = mouseY - elementHeight / 2,
            theta = Math.atan2(dy, dx);
          var angle: number = angle < 0 ? (theta * 180 / Math.PI) + 360 : (theta * 180 / Math.PI)
          return {
            offsetX: 0.5 - mouseX / elementWidth, /* where e.pageX is our cursor X coordinate */
            offsetY: 0.5 - mouseY / elementHeight,
            offsetPoster: 4,
            angle: angle,
            gradientOpacity: (e.clientY / elementHeight)
          }
        })
        .subscribe(({ offsetX, offsetY, offsetPoster, angle, gradientOpacity}) => {
          this.renderer.setElementStyle(this.elementRef.nativeElement, "transform", `scale(1.05) translateY(${-offsetX * offsetPoster}px) rotateX(${-offsetY * offsetPoster}deg) rotateY(${offsetX * offsetPoster * 2}deg)`);
          this.renderer.setElementStyle(this.elementRef.nativeElement.querySelector('.card__shine'), "background", 'linear-gradient(' + (angle - 90) + 'deg, rgba(255,255,255,' + gradientOpacity + ') 0%,rgba(255,255,255,0) 70%)');
        });
  }
  ngOnDestroy() {
    this.mouseOutSubscription.unsubscribe();
    this.mouseMovesSubscription.unsubscribe();
  }

}
