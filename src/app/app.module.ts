import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { PayComponent } from './components/pay/pay.component';
import { AdmiComponent } from './components/admi/admi.component';
import { AdmiuserComponent } from './components/admiuser/admiuser.component';
import { AdmiproductComponent } from './components/admiproduct/admiproduct.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';

//otras cuestiones
import { environment } from '../environments/environment';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
//forms
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { OffersComponent } from './components/offers/offers.component';
import { ModalComponent } from './components/modal/modal.component';
import { DepartmentsComponent } from './components/departments/departments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ShopComponent,
    ProductComponent,
    CartComponent,
    PayComponent,
    AdmiComponent,
    AdmiuserComponent,
    AdmiproductComponent,
    Page404Component,
    OffersComponent,
    ModalComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    DepartmentsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,

    //laura barrios
    AppRoutingModule,
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireStorageModule
    
  ],
  providers: [AngularFireAuth, AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
