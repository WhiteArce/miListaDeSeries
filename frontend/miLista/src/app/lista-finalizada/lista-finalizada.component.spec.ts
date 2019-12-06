import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFinalizadaComponent } from './lista-finalizada.component';

describe('ListaFinalizadaComponent', () => {
  let component: ListaFinalizadaComponent;
  let fixture: ComponentFixture<ListaFinalizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFinalizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFinalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
