import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoDetalleComponent } from './videojuego-detalle.component';

describe('VideojuegoDetalleComponent', () => {
  let component: VideojuegoDetalleComponent;
  let fixture: ComponentFixture<VideojuegoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
