import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnimesComponent } from './lista-animes.component';

describe('ListaAnimesComponent', () => {
  let component: ListaAnimesComponent;
  let fixture: ComponentFixture<ListaAnimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAnimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
