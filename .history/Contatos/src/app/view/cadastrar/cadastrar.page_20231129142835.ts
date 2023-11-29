import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contato';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome :string;
  public telefone : number;
  public imagem : any;

  constructor(private alertController: AlertController,
    private router : Router,
    private firebase: FirebaseService)  { }

  ngOnInit() {
  }

<<<<<<< HEAD
  public uploadFile(imagem: any){
    this.imagem = imagem.files;
  }
=======
 public uploadFile(imagem: any){
  this.imagem = imagem.files;
 }
>>>>>>> 2d127f3fe7dd0bae410002cb9e3cc7cd13fd279d

  cadastrar(){
    if(this.nome && this.telefone){
      let novo : Contato = new Contato(this.nome, this.telefone);
      if(this.imagem){
        this.firebase.uploadImage(this.imagem, novo);
<<<<<<< HEAD
      } else{
        this.firebase.create(novo);
      }
      this.firebase.create(novo);
=======
      }else{
        this.firebase.create(novo);
      }
>>>>>>> 2d127f3fe7dd0bae410002cb9e3cc7cd13fd279d
      this.presentAlert("Sucesso", "Contato Salvo!");
      this.router.navigate(["/home"]);
    }else{
     this.presentAlert("Erro", "Campos Obrigatórios!");
    }
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
