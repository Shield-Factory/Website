import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { HomeComponent } from './pages/home/home.component';
import { AvailableVPNComponent } from './pages/available-vpn/available-vpn.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { ProfilManagmentComponent } from './pages/profil-managment/profil-managment.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';


const routes: Routes = [
 {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'availableVPN',
    component: AvailableVPNComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  },
  {
    path: 'profileManagment',
    component: ProfilManagmentComponent
  },
  {
    path: 'editAccount',
    component: EditAccountComponent
  }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
