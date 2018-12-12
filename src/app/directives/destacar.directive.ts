import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[destacar]'
})
export class DestacarDirective {

  @Input() destacar:string;

  constructor(private element: ElementRef) {
    console.trace('DestacarDirective constructor');
  }

  @HostListener('mouseenter')
  publiconMouseEnter(){
    this.element.nativeElement.style.backgroundColor = this.destacar;
  }
 
  @HostListener('mouseleave')
  publiconMouseLeave(){
    this.element.nativeElement.style.backgroundColor = "";
  }
}
