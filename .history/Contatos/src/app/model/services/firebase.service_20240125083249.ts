import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Contato } from '../entities/Contato';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH: string = 'contatos'


  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) { }

  read(){
    return this.firestore.collection(this.PATH).snapshotChanges();
  }

  create(contato: Contato){
    return this.firestore.collection(this.PATH).add({
      nome: contato.nome,
      telefone: contato.telefone,
      email: contato.email,
      genero: contato.genero
      });
  }
  
  createWithImage(contato: Contato){
    return this.firestore.collection(this.PATH).add({
      nome: contato.nome,
      telefone: contato.telefone,
      email: contato.email,
      genero: contato.genero,
      downloadURL: contato.downloadURL
      });
  }

  update(contato: Contato, id: string){
    return this.firestore.collection(this.PATH).doc(id).update({
      nome: contato.nome,
      telefone: contato.telefone,
      email: contato.email,
      genero: contato.genero
      });
  
    }
  updateWithImage(contato: Contato, id: string){
    return this.firestore.collection(this.PATH).doc(id).update({
      nome: contato.nome,
      telefone: contato.telefone,
      email: contato.email,
      genero: contato.genero,
      downloadURL: contato.downloadURL
      });
  }
  
  delete(id: string){
    return this.firestore.collection(this.PATH).doc(id).delete();
  }

  uploadImage(imagem: any, contato: Contato){
    const file = imagem.item(0);
    if(file.type.split('/')[0] !== 'image'){
      console.error('Tipo não suportado');
      return;
    }
    const path = `images/${contato.nome}_${file.name}`;
    const fileRef = this.storage.ref(path);
    let task = this.storage.upload(path,file);
    task.snapshotChanges().pipe(
      finalize(() => {
        let uploadedFileURL = fileRef.getDownloadURL();
        uploadedFileURL.subscribe(resp => {
          contato.downloadURL = resp;
          if(!contato.id){
            this.createWithImage(contato)
          }
          else{
            this.updateWithImage(contato, contato.id);
          }
        })
      })
    ).subscribe();
  }
}
