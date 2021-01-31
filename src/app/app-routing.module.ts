import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login-form']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['auth']);

const routes: Routes = [
  { path: '', redirectTo: 'login-form', pathMatch: 'full' },  
  {
    path: 'login-form',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
    loadChildren: () =>
      import('./unauth/login/login.module')
        .then((m) => m.LoginModule
      ),
  },
  {
    path: 'forgot-pass',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
    loadChildren: () =>
      import('./unauth/forgot-password/forgot-password.module')
        .then((m) => m.ForgotPasswordModule)
  },
  {
    path: 'register',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
    loadChildren: () =>
      import('./unauth/register/register.module')
        .then((m) => m.RegisterModule)
  },
  {
    path: 'auth',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () =>
      import('./auth/auth.module')
        .then((m) => m.AuthModule)
  },
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
