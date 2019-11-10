import {
    Directive,
    ElementRef,
    Renderer2,
    HostListener,
	HostBinding
} from '@angular/core';

@Directive({
    selector: '[appCampoColorido]'
    //   selector: 'input'
})
export class CampoColoridoDirective {

    @HostBinding('style.backgroundColor') corDeFundo: string;

    // constructor(
    //     private elementRef: ElementRef,
    //     private renderer: Renderer2
    // ) {
        //   console.log(this.elementRef.nativeElement);

        //   this.renderer.setStyle(this.elementRef.nativeElement,
        //   'background-color', 'yellow');
    // }

    @HostListener('focus') aoGanharFoco() {
        this.corDeFundo = 'green';
    }

    @HostListener('blur') aoPerderFoco() {
		this.corDeFundo = 'transparent';
    }

}
