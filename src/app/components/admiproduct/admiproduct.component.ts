    
import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from '../../models/product';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../models/user';

@Component({
  selector: 'app-admiproduct',
  templateUrl: './admiproduct.component.html',
  styleUrls: ['./admiproduct.component.css']
})
export class AdmiproductComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private products: ProductInterface[];
  public isAdmin: any = null;
  public userID: string = null;


  ngOnInit() {
    this.listProduct();
    this.getUser();
  }

  getUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userID = auth.uid;
        this.authService.isAdmin(this.userID).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admi');
          // this.isAdmin = true;
        })
      }
    })
  }

  listProduct() {
    this.dataApi.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  toDeleteProduct(idProduct: string): void {
    //console.log('eliminas?', idProduct)
    const secure = confirm('¿Desea eliminar el product?');
    if (secure) {
      this.dataApi.deleteProduct(idProduct);
    }
  }
  
  toUpdateProduct(product: ProductInterface) {
    console.log('VEAMOS QUE PASA', product )
    this.dataApi.chosenPoduct = Object.assign({}, product);
  }
}

