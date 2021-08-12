import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexiaLoginComponent } from './conexia-login.component';

describe('ConexiaLoginComponent', () => {
  let component: ConexiaLoginComponent;
  let fixture: ComponentFixture<ConexiaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexiaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexiaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
