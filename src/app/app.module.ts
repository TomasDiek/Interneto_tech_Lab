import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { RentPageComponent } from './pages/rent-page/rent-page.component';
import { CreateOrEditPageComponent } from './pages/create-or-edit-page/create-or-edit-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { NotFounPageComponent } from './pages/not-foun-page/not-foun-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BuyPageComponent,
    RentPageComponent,
    CreateOrEditPageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    ViewPageComponent,
    NotFounPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
