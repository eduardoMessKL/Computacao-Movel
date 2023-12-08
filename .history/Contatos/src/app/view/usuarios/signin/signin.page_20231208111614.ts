import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/services/auth.service';
import { AlertService } from 'src/app/model/services/common/alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  formLogar!: FormGroup;

  constructor(private alert: AlertService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.formLogar = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    })
  }

  ngOnInit() {
    this.formLogar = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      senha: ['',[Validators.required, Validators.minLength(6)]]
    })
  }

  get errorControl(){
    return this.formLogar.controls;
  }

  submitForm(): Boolean{
    if(!this.formLogar.valid){
      this.alert.presentAlert('Erro','Erro ao Preencher')
      return false;
    }else{
      this.logar();
      return true;
    }
  }

  private logar(){
    this.authService.signIn(this.formLogar.value['email'], this.formLogar.value['senha'])
    .then((res) =>{
    this.alert.presentAlert('Sucesso','Login realizado!')
    this.router.navigate(['/home']);
    })
    .catch((error) =>{
      this.alert.presentAlert('Erro', 'Erro ao realizar login!');
      console.log(error.message);
    })
  }

  logarComGoogle(){

  }

  irParaSignup(){
    this.router.navigate(['/signup']);
  }


}
