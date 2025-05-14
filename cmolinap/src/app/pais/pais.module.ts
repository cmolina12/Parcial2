import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pais.component';
import { PaisListarComponent } from './pais-listar/pais-listar.component';
import { PaisDetalleComponent } from './pais-detalle/pais-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaisListarComponent, PaisDetalleComponent],
    exports: [PaisListarComponent, PaisDetalleComponent
    
   ]
})
export class PaisModule { }
