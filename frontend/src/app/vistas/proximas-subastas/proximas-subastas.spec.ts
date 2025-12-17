import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasSubastas } from './proximas-subastas';

describe('ProximasSubastas', () => {
  let component: ProximasSubastas;
  let fixture: ComponentFixture<ProximasSubastas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximasSubastas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximasSubastas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
