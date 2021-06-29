import { Component, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() buyEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Output() notInterestedEvent: EventEmitter<string> = new EventEmitter<string>(); 


  constructor() { }
  

  ngOnInit(): void {
  }

  onBuy(){
    this.buyEvent.emit(this.product);
  }

  onNoInterested(){
    this.notInterestedEvent.emit('No estoy interesad@.')
  }

}
