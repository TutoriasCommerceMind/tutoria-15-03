import { Component } from '@angular/core';

@Component({
  selector: 'app-clima-buscador',
  templateUrl: './clima-buscador.component.html',
  styleUrl: './clima-buscador.component.css',
})
export class ClimaBuscadorComponent {
  busqueda: string = '';
}
