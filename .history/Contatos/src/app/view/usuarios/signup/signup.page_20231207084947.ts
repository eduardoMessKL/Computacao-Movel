import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formLogar!: FormGroup;

  constructor(private alert: AlertService, private router: Router, private formBuilder: FormBuilder) {
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
    this.alert.presentAlert('Olá','Seja bem-vindo!')
    this.router.navigate(['/home']);
  }

}
