import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoInformacionComponent } from './flujo-informacion.component';

describe('FlujoInformacionComponent', () => {
  let component: FlujoInformacionComponent;
  let fixture: ComponentFixture<FlujoInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlujoInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlujoInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
