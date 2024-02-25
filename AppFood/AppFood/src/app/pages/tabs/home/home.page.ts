import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides]
  banners: any[] = []
  restaurants: any[] = []
  isLoading: boolean = false

  constructor() { }

  ngOnInit() {
    this.isLoading = true
    setTimeout(()=>{

      this.banners = [
        {banner: 'assets/img/img1.jpeg'},
        {banner: 'assets/img/img2.jpeg'},
        {banner: 'assets/img/img3.jpeg'}
      ]
      this.restaurants = [
        {
          uid: 'dh1',
          cover: 'assets/img/LogoDomHenrique.jpeg',
          name: 'Dom Henrique 1',
          short_name: 'domhenrique1',
          cuisines:[
            'Almoço',
            'Café',
            'Hamburguer'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        },
        {
          uid: 'dh2',
          cover: '',
          name: 'Dom Henrique 2',
          short_name: 'domhenrique2',
          cuisines:[
            'Almoço',
            'Café',
            'Hamburguer'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        },
        {
          uid: 'dh3',
          cover: 'assets/img/img3.jpeg',
          name: 'Dom Henrique 3',
          short_name: 'domhenrique3',
          cuisines:[
            'Almoço',
            'Café',
            'Hamburguer'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        },
      ]
      this.isLoading = false
    }, 1000)

  }

}
