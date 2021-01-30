import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-form', pathMatch: 'full' },  
  {
    path: 'login-form',
    loadChildren: () =>
      import('./unauth/login/login.module')
        .then((m) => m.LoginModule
      ),
  },
  {
    path: 'forgot-pass',
    loadChildren: () =>
      import('./unauth/forgot-password/forgot-password.module')
        .then((m) => m.ForgotPasswordModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./unauth/register/register.module')
        .then((m) => m.RegisterModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
