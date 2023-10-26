import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor : string = '0';
  operacao! : number;
  valor1! : number;
  valor2! : number;

  constructor() {}

  adicionarNumero(valor : string){
    if((this.visor.length === 1) && (this.visor === '0')){
      this.visor = valor;
    } else {
      this.visor += valor;
    }
  }

  adicionarOperacao(valor : number){
    this.operacao = valor;
    this.valor1 = +this.visor;
    this.zerar();
    console.log(this.valor1);
  }

  calcular(){
    this.valor2 = +this.visor;
    switch(this.operacao){
      case 0 : { 
        this.visor = "" + (this.valor1 + this.valor2); 
      break;
    }
      case 1 : { 
        this.visor = "" + (this.valor1 - this.valor2); 
      break;
    }
      case 2 : { 
        this.visor = "" + (this.valor1 * this.valor2); 
      break;
    }
      case 3 : { 
        this.visor = "" + (this.valor1 /  this.valor2); 
      break;
    }
      case 4 : { 
        this.visor = "" + (this.valor1 / 100); 
      break;
    }
      case 5 : { 
        this.visor = "" + ( - this.valor1); 
      break;
    }
    }
  }

  zerar(){
    this.visor = '0';
  }
}
