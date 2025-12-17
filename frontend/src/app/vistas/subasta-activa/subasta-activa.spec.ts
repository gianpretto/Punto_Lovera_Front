import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastaActiva } from './subasta-activa';

describe('SubastaActiva', () => {
  let component: SubastaActiva;
  let fixture: ComponentFixture<SubastaActiva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubastaActiva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubastaActiva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
