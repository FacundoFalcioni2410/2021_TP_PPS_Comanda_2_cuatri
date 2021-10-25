import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaClienteDeshabilitadosPage } from './lista-cliente-deshabilitados.page';

describe('ListaClienteDeshabilitadosPage', () => {
  let component: ListaClienteDeshabilitadosPage;
  let fixture: ComponentFixture<ListaClienteDeshabilitadosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaClienteDeshabilitadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaClienteDeshabilitadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
