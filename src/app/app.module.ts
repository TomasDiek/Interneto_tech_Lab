import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { RentPageComponent } from './pages/rent-page/rent-page.component';
import { CreateOrEditPageComponent } from './pages/create-or-edit-page/create-or-edit-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { NotFoundPageComponent } from './pages/notFoundPage/not-foun-page.component';
import { PasswordResetPageComponent } from './pages/password-reset-page/password-reset-page.component';
// Components
import { PasswordResetComponentComponent } from './components/password-reset-component/password-reset-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { BuyComponentComponent } from './components/property-list-component/buy-component.component';
import { RentComponentComponent } from './components/rent-component/rent-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { ViewComponentComponent } from './components/view-component/view-component.component';
import { SignUpComponentComponent } from './components/sign-up-component/sign-up-component.component';
import { EntryPageComponentComponent } from './pages/entry-page-component/entry-page-component.component';
import { HeaderComponent } from './components/header/header.component';
// Menu
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { PropertyComponent } from './components/property/property.component';

import { HttpClientModule } from '@angular/common/http';
import { PropertyService } from './services/property.service';
import { CreateListingComponent } from './components/create-listing/create-listing.component';


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
    NotFoundPageComponent,
    PasswordResetPageComponent,
    PasswordResetComponentComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    BuyComponentComponent,
    RentComponentComponent,
    NotFoundComponentComponent,
    ViewComponentComponent,
    SignUpComponentComponent,
    EntryPageComponentComponent,
    HeaderComponent,
    PropertyComponent,
    CreateListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TabMenuModule,
    DropdownModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
