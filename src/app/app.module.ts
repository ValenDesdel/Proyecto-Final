import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PayComponent } from './pay/pay.component';
import { AdmiComponent } from './admi/admi.component';
import { AdmiuserComponent } from './admiuser/admiuser.component';
import { AdmiproductComponent } from './admiproduct/admiproduct.component';

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
    AdmiproductComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
