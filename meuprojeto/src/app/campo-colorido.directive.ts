import {
    Directive,
    ElementRef,
    Renderer2,
    HostListener,
	HostBinding,
	Input
} from '@angular/core';

@Directive({
    selector: '[appCampoColorido]'
    //   selector: 'input'
})
export class CampoColoridoDirective {

	@Input('appCampoColorido') cor = 'gray';

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
        this.corDeFundo = this.cor;
    }

    @HostListener('blur') aoPerderFoco() {
		this.corDeFundo = 'transparent';
    }

}
