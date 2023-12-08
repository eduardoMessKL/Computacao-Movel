import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioDados: any;

  constructor(public firebase: FirebaseService, 
    public router: Router, private ngZone: NgZone) { }
}
