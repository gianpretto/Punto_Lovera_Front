import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroComprar } from './quiero-comprar';

describe('QuieroComprar', () => {
  let component: QuieroComprar;
  let fixture: ComponentFixture<QuieroComprar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuieroComprar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuieroComprar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
