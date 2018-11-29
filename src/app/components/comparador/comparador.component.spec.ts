import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorComponent } from './comparador.component';

describe('ComparadorComponent', () => {
  let component: ComparadorComponent;
  let fixture: ComponentFixture<ComparadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
