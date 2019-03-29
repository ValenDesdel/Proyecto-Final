import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  public providerId: string = 'null';

  user: UserInterface = {
    name: '',
    email: '',
    roles: {},
    photoUrl: ''
  };

  ngOnInit() {
    this.authservice.isAuth().subscribe(user => {
      if (user){
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
        console.log('user', this.providerId);
      }
    })
  }

}