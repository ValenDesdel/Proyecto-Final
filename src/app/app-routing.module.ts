import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { OffersComponent } from './components/offers/offers.component';
import { ModalComponent } from './components/modal/modal.component';
import { Page404Component } from './components/page404/page404.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { AdmiproductComponent } from './components/admiproduct/admiproduct.component';
import { AdmiuserComponent } from './components/admiuser/admiuser.component';
import { AdmiComponent } from './components/admi/admi.component';
import { PayComponent } from './components/pay/pay.component';
import { AuthGuard } from './guards/auth.guard';
import { DepartmentsComponent } from './components/departments/departments.component';
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]}, 
  {path: 'product/:id', component: ShopComponent},
  {path: 'admiproduct', component: AdmiproductComponent},
  {path: 'admiuser', component: AdmiuserComponent},
  {path: 'admi', component: AdmiComponent},
  {path: 'pay', component: PayComponent, canActivate:[AuthGuard]},
  {path: 'departments', component: DepartmentsComponent}, 
  {path: 'offer', component: OffersComponent}, 
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


