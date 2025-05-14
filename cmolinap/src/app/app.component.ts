import { Component } from '@angular/core';
import {Pais} from './pais/pais'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cmolinap';
  selected?: Pais;
  onSelect(p: Pais): void {
    this.selected = p;
  }
}
