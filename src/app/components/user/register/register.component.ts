import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor( private router: Router, private authService: AuthService, private storage: AngularFireStorage) { }
 
    @ViewChild('imgUser') imageUser: ElementRef;
 
  public email: string = "";
  public password: string = "";
  //STORAGE
  toUploadPercent: Observable<number>;
  urlImg: Observable<string>;

  ngOnInit() {
  }

  toUpload(img){
    const id  = Math.random().toString(36).substring(2);
   // console.log('subir', img);
    const pathFile = `uploads/img_${id}`;
    const file = img.target.files[0];
    const ref = this.storage.ref(pathFile);
    const task = this.storage.upload( pathFile, file);
    this.toUploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize ( () => this.urlImg = ref.getDownloadURL())).subscribe();
  }

  newUser() {
    //console.log('SI ESTA ENTRANDO ACA');
    this.authService.registerUser( this.email, this.password)
    .then( (res) => {
      this.authService.isAuth().subscribe(user => {
        if(user){
          user.updateProfile({
            displayName: "",
            photoURL: this.imageUser.nativeElement.value
          }) .then(function(){
            console.log('user');
            //this.Redirect();
          }) .catch(function(err){
            console.log('err', err);
          })
        }
      })
      this.Redirect();
    }).catch( err => console.log('err', err.message ));
  }

  onLoginGoogle(): void {
    this.authService.LoginGoogleUser()
    .then( (res) => {
      console.log('resUser', res);
      this.Redirect();
    }).catch( err => console.log('err', err));
  }

  Redirect(): void {
    this.router.navigate(['/home']);
  }
}

