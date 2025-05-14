/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaisListarComponent } from './pais-listar.component';

describe('PaisListarComponent', () => {
  let component: PaisListarComponent;
  let fixture: ComponentFixture<PaisListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
