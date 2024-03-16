import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaBuscadorReactiveComponent } from './clima-buscador-reactive.component';

describe('ClimaBuscadorReactiveComponent', () => {
  let component: ClimaBuscadorReactiveComponent;
  let fixture: ComponentFixture<ClimaBuscadorReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClimaBuscadorReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClimaBuscadorReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
