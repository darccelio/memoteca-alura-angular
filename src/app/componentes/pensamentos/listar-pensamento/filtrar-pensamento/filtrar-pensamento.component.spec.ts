import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarPensamentoComponent } from './filtrar-pensamento.component';

describe('FiltrarPensamentoComponent', () => {
  let component: FiltrarPensamentoComponent;
  let fixture: ComponentFixture<FiltrarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
