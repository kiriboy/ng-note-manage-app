import { Directive, ElementRef, HostListener, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // get element ref to access host element
  private el = inject(ElementRef);

  // use renderer to safe use 
  private renderer = inject(Renderer2)

  
  // get input property
  @Input('appHighlight') appHighlight:string = ''
  @Input('defaultColor') defaultColor:string = ''

  // add host listener for mouse events
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight || this.defaultColor || 'red')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
  }



  private highlight(color:string){
      this.renderer.setStyle(this.el.nativeElement,'background-color', color)
  }

  constructor() {
    // this.renderer.setStyle(this.el.nativeElement,'background-color', 'yellow')
   }

}
