import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaMainPageComponent } from './clima-main-page.component';

describe('ClimaMainPageComponent', () => {
  let component: ClimaMainPageComponent;
  let fixture: ComponentFixture<ClimaMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClimaMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClimaMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
