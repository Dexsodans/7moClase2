import { Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
colorFondo = signal<string>('#117187');
tamano = signal<number>(150);
tieneLentes = signal<boolean>(false);
tipoExpresion = signal<number>(1);

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

}
