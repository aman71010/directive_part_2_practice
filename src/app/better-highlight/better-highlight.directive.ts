import { Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string;
  @Input() highlightColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
      //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'lightgreen');
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';


  @HostListener('mouseenter') mouseOver(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'lightgreen');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.highlightColor;
  }

}
