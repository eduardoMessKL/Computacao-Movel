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
    private ngZone: NgZone) { }
}
