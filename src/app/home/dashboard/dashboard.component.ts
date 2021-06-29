import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
preSoldProducts!: IProduct[];

  constructor() { }

  ngOnInit(): void {
    this.preSoldProducts = [
     {
      title: 'X-Box Lego Movie',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/product1.png'
     },
     {
      title: 'X-Box Lego NinjaGo',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/product2.png'
     },
     {
      title: 'X-Box Dragon Ball Z',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/product3.png'
     },
     {
      title: 'Nintendo Switch Animal Crossing',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/product4.png'
     },
     {
      title: 'Nintendo Switch Super Mario 3D Stars',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/product5.png'
     },
     {
      title: 'X-Box Lego Movie',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/demo.png'
     },
     {
      title: 'X-Box Lego NinjaGo',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/demo.png'
     },
     {
      title: 'Dragon Ball Z',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/demo.png'
     },
     {
      title: 'Nintendo Switch Animal Crossing',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/demo.png'
     },
     {
      title: 'Nintendo Switch Super Mario 3D Stars',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/demo.png'
     },
     {
      title: 'Nintendo Switch Super Mario 3D Stars',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/demo.png'
     },
     {
      title: 'Nintendo Switch Super Mario 3D Stars',
      description: 'Un descripción breve del videojuego que se encuentr en preventa, marca y lanzamiento',
      image: '../../../assets/images/products/demo.png'
     },

    ];
  }
  onBuyEvent(event: IProduct){
    console.log('Comprar: ', event);
    
  }

  onNoInterestedEvent(event: string){
    console.log('No estoy interesad@: ', event);
    
  }

}
