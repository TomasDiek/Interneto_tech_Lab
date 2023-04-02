import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntryPageComponentComponent } from './pages/entry-page-component/entry-page-component.component';
import { AuthGuard } from './authGuard/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PasswordResetPageComponent } from './pages/password-reset-page/password-reset-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RentPageComponent } from './pages/rent-page/rent-page.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { NotFoundPageComponent } from './pages/notFoundPage/not-foun-page.component';
import { CreateOrEditPageComponent } from './pages/create-or-edit-page/create-or-edit-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';

const routes: Routes = [

  {path:'',redirectTo:'entry/login',pathMatch:'full'},
  // canActivate:[AuthGuard]
  {path:'entry',component:EntryPageComponentComponent,children:
  [
    {path: 'reset-password',component: PasswordResetPageComponent},
    {path:'login',component:LoginPageComponent},
    {path:'signUp',component:SignUpPageComponent},
    // {path:'home',component:HomePageComponent},
    {path:'rent',component:RentPageComponent},
    {path:'buy',component:BuyPageComponent},
    {path:'createOrEdit',component:CreateOrEditPageComponent},
    {path:'detailView/:id',component:ViewPageComponent}
  ]},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
