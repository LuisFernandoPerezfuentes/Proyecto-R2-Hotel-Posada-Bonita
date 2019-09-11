import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { MaterialModule } from './material.module';



// Route
import { RouteModule } from './route/route.component';

//IMPORTS PARA EL LOGIN
import {SignInComponent} from './components/user/sign-in/sign-in.component';
import {SignUpComponent} from './components/user/sign-up/sign-up.component';
import {UserComponent} from './components/user/user.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';import {AuthInterceptor} from './auth/auth.interceptor';
import {UserService} from './services/user.service';

import { AppComponent } from './app.component';
import { UsersComponent} from './components/users/users.component';
import { NavpagesComponent } from './components/navpages/navpages.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SuppliesComponent } from './components/supplies/supplies.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavpagesComponent,
    IndexComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    SuppliesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouteModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
     providers: [{
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptor,
     multi: true
    },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
