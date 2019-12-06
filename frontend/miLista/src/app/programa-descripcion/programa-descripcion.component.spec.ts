import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDescripcionComponent } from './programa-descripcion.component';

describe('ProgramaDescripcionComponent', () => {
  let component: ProgramaDescripcionComponent;
  let fixture: ComponentFixture<ProgramaDescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaDescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
