import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioDados: any;

  constructor(public firebase: FirebaseService, 
    private fireAuth: AngularFireAuth,
    public router: Router, 
    private ngZone: NgZone) {
      this.fireAuth.authState.subscribe(user=>{
        if(user){
          this.usuarioDados = user;
          localStorage.setItem('user', JSON.stringify(this.usuarioDados));
        }else{
          localStorage.setItem('user', 'null')
          }
        }
      );
     }

     public signIn(email: string, password: string){

     }

     public signUpWithEmailPassword(email: string, password: string){

     }

     public recoverPassword(email: string){

     }

     public signOut(){}
}
