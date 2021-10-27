import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./pages/registro/registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'registro-producto',
    loadChildren: () => import('./pages/registro/registro-producto/registro-producto.module').then( m => m.RegistroProductoPageModule)
  },
  {
    path: 'registro-mesa',
    loadChildren: () => import('./pages/registro/registro-mesa/registro-mesa.module').then( m => m.RegistroMesaPageModule)
  },
  {
    path: 'registro-empleado',
    loadChildren: () => import('./pages/registro/registro-empleado/registro-empleado.module').then( m => m.RegistroEmpleadoPageModule)
  },
  {
    path: 'registro-supervisor',
    loadChildren: () => import('./pages/registro/registro-supervisor/registro-supervisor.module').then( m => m.RegistroSupervisorPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/encuestas/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'supervisores',
    loadChildren: () => import('./pages/encuestas/supervisor/supervisor.module').then( m => m.SupervisorPageModule)
  },
  {
    path: 'ingreso-local',
    loadChildren: () => import('./pages/ingreso-local/ingreso-local.module').then( m => m.IngresoLocalPageModule)
  }, 
  {
    path: 'ahorcado',
    loadChildren: () => import('./pages/juegos/ahorcado/ahorcado.module').then( m => m.AhorcadoPageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },  {
    path: 'lista-cliente-deshabilitados',
    loadChildren: () => import('./pages/lista-cliente-deshabilitados/lista-cliente-deshabilitados.module').then( m => m.ListaClienteDeshabilitadosPageModule)
  },
  {
    path: 'realizar-pedido',
    loadChildren: () => import('./pages/realizar-pedido/realizar-pedido.module').then( m => m.RealizarPedidoPageModule)
  },
  {
    path: 'lista-espera',
    loadChildren: () => import('./pages/lista-espera/lista-espera.module').then( m => m.ListaEsperaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
