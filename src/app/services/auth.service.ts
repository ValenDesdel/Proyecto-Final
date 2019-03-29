import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators'; 
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }
  
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData),
            this.dataUser(userData.user)
        }).catch(err => console.log(reject(err)))
    });
  }

  LoginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(credential => this.dataUser(credential.user))
  }

  LoginEmailUser(email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData), 
      err => reject (err));
    });
  }

  LogoutUser(){
    return this.afsAuth.auth.signOut();
  }

  isAuth () {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
  
  private dataUser (user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        admi: true
      }
    }
    return userRef.set(data, { merge: true })
  }


  isAdmin(user) {
    return this.afs.doc<UserInterface>(`users/${user}`).valueChanges();
  }
}
