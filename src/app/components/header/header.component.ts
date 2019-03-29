import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public IsLogged: boolean = false;
  constructor(private dataApi: DataApiService, private route: ActivatedRoute, private authservece: AuthService, private afsAuth: AngularFireAuth, private storage: AngularFireStorageModule) { }
  
  private products: ProductInterface[];
  public num="";

  ngOnInit() {
    this.getCurrentUser();
  }

  getNum(num){
    return num;
  }

  onLogout(){
    this.afsAuth.auth.signOut();
  }

  getCurrentUser(){
    this.authservece.isAuth().subscribe( auth => {
      if (auth){
        console.log('AQUI SI FUNCIONA');
        this.IsLogged = true;
      }else {
        console.log('NOT user logged');
        this.IsLogged = false;
      }
    });
  }

}