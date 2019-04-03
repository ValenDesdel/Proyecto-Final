import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from '../../models/product';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../models/user';

@Component({
  selector: 'app-admiuser',
  templateUrl: './admiuser.component.html',
  styleUrls: ['./admiuser.component.css']
})
export class AdmiuserComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private products: ProductInterface[];
  public isAdmin: any = null;
  public userID: string = null;
  public users = [];
  public user = "";

  ngOnInit() {
    this.dataApi.getAllUsers().subscribe(users =>{
    console.log("USERS", users);
    this.users = users;
    })
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

  toDeleteUsers(idUsers: string): void {
    //console.log('eliminas?', idProduct)
    const secure = confirm('¿Desea eliminar el usuario?');
    if (secure) {
      this.dataApi.deleteProduct(idUsers);
    }
  }




}


