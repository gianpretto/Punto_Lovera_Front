import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroVender } from './quiero-vender';

describe('QuieroVender', () => {
  let component: QuieroVender;
  let fixture: ComponentFixture<QuieroVender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuieroVender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuieroVender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
