import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.page.html',
  styleUrls: ['./itens.page.scss'],
})
export class ItensPage implements OnInit {

  restaurants = [
    {
      uid: 'dh1',
      cover: 'assets/img/LogoDomHenrique.jpeg',
      name: 'Dom Henrique 1',
      address: 'Guarapuava',
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

  categories: any[] = [
    {
      id: "e00",
      name: "Italiana",
      uid: "dh1"
    },
    {
      id: "e01",
      name: "Mexicana",
      uid: "dh1"
    }
  ]

  allItems = [
    {
      category_id: "e00",
      cover: "assets/img/pizza.jpeg",
      desc: "Pizza de Calabreza",
      id: "i1",
      name: "Pizza",
      price: 80,
      rating: 0,
      status: true,
      uid: "dh1",
      variation: false,
      veg: false
    },
    {
      category_id: "e00",
      cover: "assets/img/salada.jpeg",
      desc: "Salada Especial",
      id: "i2",
      name: "Salada",
      price: 40,
      rating: 0,
      status: true,
      uid: "dh1",
      variation: false,
      veg: true
    },
    {
      category_id: "e01",
      cover: "assets/img/carne.jpeg",
      desc: "Medalhão de Mignon",
      id: "i3",
      name: "Carne",
      price: 120,
      rating: 0,
      status: true,
      uid: "dh1",
      variation: false,
      veg: false
    }
  ]

  data: any = {};
  cartData: any = {};
  storeData: any = {};
  items: any[] = [];
  id: any;
  veg: boolean = false;

  constructor(private route : ActivatedRoute, private navCtrl : NavController, private router: Router) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('restaurantId')){
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('restaurantId')
      this.getItems()
    })
  }

  getItems(){
    this.data = {};
    let data : any = this.restaurants.filter(x => x.uid === this.id)
    this.data = data[0]
    this.items = this.allItems.filter(x => x.uid === this.id)
    this.categories = this.categories.filter(x => x.uid === this.id)    //oq exatamente fazem essas funções
    this.cartData = {}

    this.storeData = {}
    let cart : any = this.getCart()
    if(cart?.value){
      this.storeData = JSON.parse(cart.value)
      if(this.id == this.storeData.restaurant.uid && this.allItems.length > 0){
        this.allItems.forEach((element: any)=>{
          this.storeData.items.forEach(ele =>{
            if(element.id !!= ele.id) return
            element.quantity = ele.quantity
          })
        })
      }
    }
    this.cartData.totalItem = this.storeData.totalItem
    this.cartData.totalPrice = this.storeData.totalPrice
  }

  quantityPlus(item, index){
    try{
      if(!this.items[index].quantity || this.items[index].quantity == 0){  //oq significa o ! antes de this.items
        this.items[index].quantity = 1
        this.calculate()
      }else{
        this.items[index].quantity += 1
        this.calculate()
      }
    }
    catch(e){
      console.log(e)
    }
  }

  quantityMinus(item, index) {
    if(this.items[index].quantity !== 0){
      this.items[index].quantity -= 1
    }else{
      this.items[index].quantity = 0
    }
    this.calculate();
  }

  calculate(){
    this.cartData.items = [];
    let item = this.items.filter(x => x.quantity > 0)
    this.cartData.items = item
    console.log(this.items)

    this.cartData.totalPrice = 0
    this.cartData.totalItem = 0

    //Para cada item no carrinho, soma a quantidade e o preço. Define 2 digitos tambem
    item.forEach(element =>{
      this.cartData.totalItem += element.quantity  
      this.cartData.totalPrice += (parseFloat(element.price) * (parseFloat(element.quantity))) 
    })
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice).toFixed(2)  

    
    if(this.cartData.totalItem == 0){
      this.cartData.totalPrice = 0
      this.cartData.totalItem = 0
    }
    this.saveToCart()
  }

  getCuisine(cuisine){
    return cuisine.join(', ')
  }

  vegOnly(event){
    this.items = []
    if(event.detail.checked == true){
      this.items = this.allItems.filter(x => x.veg === true)
    }
    else{
      this.items = this.allItems
    }
  }

  async saveToCart(){
    try{
      this.cartData.restaurant = {}
      this.cartData.restaurant = this.data
      await Preferences.set({
        key: 'cart',
        value: JSON.stringify(this.cartData)
      })
    }
    catch(e){
      console.log(e)
    }
  }

  async viewCart(){
    if(this.cartData.items && this.cartData.items.length > 0){
      await this.saveToCart()
    }
    this.router.navigate([this.router.url + '/cart'])
  }

  getCart(){
    return Preferences.get({key: 'cart'})
  }

}
