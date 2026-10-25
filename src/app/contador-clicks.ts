import { Directive,ElementRef,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appContadorClicks]',
})
export class ContadorClicks {
  textoElemento: string = "";
  contador: number = 0;
  constructor(private el: ElementRef) {
    this.textoElemento = this.el.nativeElement.textContent;
    console.log('Directiva creada');
  }
  @HostListener('click', ['$event'])
    alHacerClick(event: MouseEvent) {
      console.log('¡La directiva ha detectado el clic!');
      this.contador++;
      console.log(event.clientX + ' ' + event.clientY);
    }
    @HostBinding('attr.title') get titulo(): string {
      return `Clics realizados: ${this.contador}`;
    }
    @HostBinding('class.muy-pulsado') get esMuyPulsado(): boolean {
      return this.contador >= 5;
    }
    @HostListener('document:keydown.escape') reiniciarContador() {
      this.contador = 0;
    }
}
