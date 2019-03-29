import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { DataApiService } from '../../../services/data-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataApi: DataApiService, public afAuth:AngularFireAuth, private router : Router, private authService: AuthService) { }
  
  public email: string =  "";
  public password: string = "";
  ngOnInit() {
  }

  onLoginEmail(): void {
    console.log( 'ESTOY ACA ');
    console.log( 'email', this.email);
    this.authService.LoginEmailUser(this.email, this.password)
    .then( (res) => {
      this.Redirect();
    }).catch( err => console.log('err', err.message ));
  }

  onLoginGoogle(user): void {
    this.authService.LoginGoogleUser()
    .then( (res) => {
      console.log('resUser', res);
      if(this.authService.isAdmin){
        this.router.navigate(['/admi']);
      }else{
        this.Redirect();
      }
    }).catch( err => console.log('err', err));
  }

  Redirect(): void {
    this.router.navigate(['/home']);
  }
  onLogout()  {
    this.authService.LogoutUser();
  }
}

