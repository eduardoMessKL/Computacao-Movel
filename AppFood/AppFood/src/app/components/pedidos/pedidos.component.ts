import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent  implements OnInit {
  @Input() pedido: any
  constructor() { }

  ngOnInit() {}

}
