import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSerAnimComponent } from './agregar-ser-anim.component';

describe('AgregarSerAnimComponent', () => {
  let component: AgregarSerAnimComponent;
  let fixture: ComponentFixture<AgregarSerAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSerAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSerAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
