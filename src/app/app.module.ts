import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenComponentComponent } from './men-component/men-component.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './shared/filter.pipe'

import {MatIconModule} from '@angular/material/icon'
import { materialize } from 'rxjs';
import { AddtocartComponent } from './addtocart/addtocart.component';
// import { MyserviceService } from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    MenComponentComponent,
    HomeComponent,
    RegisterComponent,
    CartComponent,
    FilterPipe,
    AddtocartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    // HttpHeaders,
    // MyserviceService,
    routes,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent },
      {path: 'men', component: MenComponentComponent },
      {path: 'register', component: RegisterComponent }
      
    ]),
    BrowserAnimationsModule
  ],
  exports: [
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule {

 }
