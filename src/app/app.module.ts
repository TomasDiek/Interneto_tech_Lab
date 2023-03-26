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
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { BuyComponentComponent } from './components/property-list-component/buy-component.component';
import { RentComponentComponent } from './components/rent-component/rent-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { ViewComponentComponent } from './components/view-component/view-component.component';
import { EntryPageComponentComponent } from './pages/entry-page-component/entry-page-component.component';
import { HeaderComponent } from './components/header/header.component';
// User
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
// Menu
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { PropertyComponent } from './components/property/property.component';
//forms
import{FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PropertyService } from './services/property.service';
import { CreateListingComponent } from './components/create-listing/create-listing.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
    HomeComponentComponent,
    BuyComponentComponent,
    RentComponentComponent,
    NotFoundComponentComponent,
    ViewComponentComponent,
    EntryPageComponentComponent,
    HeaderComponent,
    PropertyComponent,
    CreateListingComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TabMenuModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    
  ],
  providers: [PropertyService,UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
