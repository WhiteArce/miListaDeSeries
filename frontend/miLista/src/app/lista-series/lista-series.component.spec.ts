import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSeriesComponent } from './lista-series.component';

describe('ListaSeriesComponent', () => {
  let component: ListaSeriesComponent;
  let fixture: ComponentFixture<ListaSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
