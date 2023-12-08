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
      return this.fireAuth.signInWithEmailAndPassword(email, password);
     }

     public signUpWithEmailPassword(email: string, password: string){
      return this.fireAuth.createUserWithEmailAndPassword(email, password);
     }

     public recoverPassword(email: string){
      return this.fireAuth.sendPasswordResetEmail(email);
     }


     // Métodos gerais
     public signOut(){
      return this.fireAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['signin']);
      })
     }

     public isLoggedIn(): boolean{
      const user = JSON.parse(localStorage.getItem('user') || 'null');
      return (user !== null) ? true : false;
     }

     public getUserLogged(){
      const user = JSON.parse(localStorage.getItem('user') || 'null');
      return (user !== null) ? user : null;
     }
}
