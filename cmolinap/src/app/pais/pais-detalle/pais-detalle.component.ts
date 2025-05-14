import { Component, Input } from '@angular/core';
import {Pais} from '../pais';
@Component({
  selector: 'app-pais-detalle',
  standalone: false,
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent {

  @Input() pais?:Pais;

}
