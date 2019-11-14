import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    constructor(private el: ElementRef) { }

    @HostListener('document:click', ['$event'])
    public click() {
        /**
         * we are looking at 2 conditions one of the native element the click should not be inside native element
         * and click should not be inside menu id element,to close the side br
         */
        if (!this.el.nativeElement.contains(event.target) && !((event.target as Element).id=='menu')) {
            if (this.el.nativeElement.style.width == "100px" ) {
                this.el.nativeElement.style.width = "0px";
            }
        }
    
    }

}