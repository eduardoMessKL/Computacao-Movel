import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/services/auth.service';
import { AlertService } from 'src/app/model/services/common/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formCadastrar!: FormGroup;

  constructor(private alert: AlertService, private  authService: AuthService ,private router: Router, private formBuilder: FormBuilder) {
    this.formCadastrar = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl(''),
      confSenha: new FormControl('')
    })
  }

  ngOnInit() {
    this.formCadastrar = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      senha: ['',[Validators.required, Validators.minLength(6)]],
      confSenha: ['',[Validators.required, Validators.minLength(6)]]
    })
  }

  get errorControl(){
    return this.formCadastrar.controls;
  }

  submitForm(): Boolean{
    if(!this.formCadastrar.valid){
      this.alert.presentAlert('Erro','Erro ao Preencher')
      return false;
    }else{
      this.cadastrar();
      return true;
    }
  }

  private cadastrar(){
    this.authService.signUpWithEmailPassword(this.formCadastrar.value['email'], this.formCadastrar.value['senha']);

    this.alert.presentAlert('Sucesso','Cadastro realizado!')
    this.router.navigate(['/signin']);
  }

  logarComGoogle(){

  }

}
