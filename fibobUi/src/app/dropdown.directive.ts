import { Directive,HostListener,HostBinding } from '@angular/core';
/**
 * a new dropdown directive is created since default one was not working
 */
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen=false;

  @HostListener('mouseover') toggleOpen(){
    this.isOpen=!this.isOpen;
  }

  @HostListener('mouseout') toggleClose(){
    this.isOpen=!this.isOpen;
  }
  constructor() { }
}
