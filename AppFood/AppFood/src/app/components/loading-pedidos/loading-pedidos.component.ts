import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-pedidos',
  templateUrl: './loading-pedidos.component.html',
  styleUrls: ['./loading-pedidos.component.scss'],
})
export class LoadingPedidosComponent  implements OnInit {
  dummy = Array(10)

  constructor() { }

  ngOnInit() {}

}
