import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisService } from '../pais.service';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-listar',
  standalone: false,
  templateUrl: './pais-listar.component.html',
  styleUrls: ['./pais-listar.component.css']
})
export class PaisListarComponent implements OnInit {
  paises: Pais[] = [];
  @Output() select = new EventEmitter<Pais>();
  paisMasAntiguo?: Pais;
  constructor(private servicio: PaisService) { }

    
  ngOnInit(): void {
    this.servicio.getAll().subscribe(paises => {
      this.paises = paises;
          this.paisMasAntiguo = this.paises.reduce((a, b) =>
        a.formation_year < b.formation_year ? a : b
      )
    });
  }

  verDetalle(pais: Pais): void {
    this.select.emit(pais);
  }



}
