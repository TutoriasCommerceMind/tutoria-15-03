import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaBuscadorComponent } from './clima-buscador.component';

describe('ClimaBuscadorComponent', () => {
  let component: ClimaBuscadorComponent;
  let fixture: ComponentFixture<ClimaBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClimaBuscadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClimaBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
