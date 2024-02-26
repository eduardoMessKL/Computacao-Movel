import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  isLoading: boolean = false   //Cria váriavel para animação de carregar a tela inicializada como false

  model: any = {
    icon:'pizza-outline',
    title: 'Você ainda não realizou nenhum pedido!'
  }

  pedidos: any[] = []         //Vetor responsável por armazenar os nossos pedidos

  constructor() { }

  ngOnInit() {

    this.isLoading = true       //assim que é iniciado o component, altera o valor para true

    setTimeout(()=>{
      this.pedidos = [
        {
          name: 'Dom Henrique 1',
          address: 'Guarapuava',
          price: '290',
          items: 'Arroz, Picanha',
          date: 'Janeiro 29, 2024 - 19:42'
        },
        {
          name: 'Dom Henrique 1',
          address: 'Guarapuava',
          price: '290',
          items: 'Arroz, Picanha',
          date: 'Janeiro 29, 2024 - 19:42'
        },
        {
          name: 'Dom Henrique 1',
          address: 'Guarapuava',
          price: '290',
          items: 'Arroz, Picanha',
          date: 'Janeiro 29, 2024 - 19:42'
        }
      ]
      this.isLoading = false
    }, 1000)
  }

}
