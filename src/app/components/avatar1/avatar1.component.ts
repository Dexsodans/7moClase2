import { CommonModule } from '@angular/common';
import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-avatar1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar1.component.html',
  styleUrl: './avatar1.component.scss'
})
export class Avatar1Component {
colorFondo = signal<string>('#117187');
tamano = signal<number>(150);
tieneLentes = signal<boolean>(false);
tipoExpresion = signal<number>(1);
nombre = signal<string>('');
girando = signal<boolean>(false);
girando2 = signal<boolean>(false);

cambiarTamano(event: Event){
const input = event.target as HTMLInputElement;
this.tamano.set(parseInt(input.value));
};

cambiarColor(event: Event){
const input = event.target as HTMLInputElement;
this.colorFondo.set(input.value);
};

toggleLentes(event: Event){
this.tieneLentes.update(flag => !flag);
};

cambiarExpresion(tipo: number){
this.tipoExpresion.set(tipo);
};

cambiarNombre(nombre: string){
this.nombre.set(nombre);
};


toggleGirar(event: Event){
this.girando.update(flag => !flag);
};
toggleGirar2(event: Event){
this.girando2.update(flag => !flag);
};

}
