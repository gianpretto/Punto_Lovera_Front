import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoParticipar } from './como-participar';

describe('ComoParticipar', () => {
  let component: ComoParticipar;
  let fixture: ComponentFixture<ComoParticipar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoParticipar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoParticipar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
