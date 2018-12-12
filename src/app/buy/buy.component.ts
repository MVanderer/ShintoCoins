import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  coinCount:number;
  coinVal:number;
  buyQty=0;
  constructor(public _coin:ShintoService) { }

  ngOnInit() {
    this.check();
  }
  
  buyCoins(){
    if (this.buyQty<0){
      this.buyQty=0;
    }
    this._coin.addCoin(this.buyQty);
    this.buyQty=0;
    this.check();
  }
  
  check(){
    let observe = this._coin.checkCoins();
    this.coinCount=observe.count;
    this.coinVal=observe.val;
  }

}
