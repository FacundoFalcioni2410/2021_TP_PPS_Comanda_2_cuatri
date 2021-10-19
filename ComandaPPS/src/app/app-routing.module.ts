import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'registro-cliente',
    loadChildren: () => import('./pages/registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'registro-producto',
    loadChildren: () => import('./pages/registro-producto/registro-producto.module').then( m => m.RegistroProductoPageModule)
  },
  {
    path: 'registro-mesa',
    loadChildren: () => import('./pages/registro-mesa/registro-mesa.module').then( m => m.RegistroMesaPageModule)
  },
  {
    path: 'registro-empleado',
    loadChildren: () => import('./pages/registro-empleado/registro-empleado.module').then( m => m.RegistroEmpleadoPageModule)
  },
  {
    path: 'registro-supervisor',
    loadChildren: () => import('./pages/registro-supervisor/registro-supervisor.module').then( m => m.RegistroSupervisorPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/encuestas/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'supervisor',
    loadChildren: () => import('./pages/encuestas/supervisor/supervisor.module').then( m => m.SupervisorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
