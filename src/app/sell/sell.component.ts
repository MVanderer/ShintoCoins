import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  coinCount:number;
  coinVal:number;
  sellQty=0;
  constructor(public _coin:ShintoService) { }

  ngOnInit() {
    this.check();
  }

  sellCoins(){
    if (this.sellQty<0){
      this.sellQty=0;
    }
    if (this.sellQty<=this.coinCount){
      this._coin.spendCoins(this.sellQty);
    }
    else {
      this._coin.spendCoins(this.coinCount);
    }
    this.check();
  }

  check(){
    let observe = this._coin.checkCoins();
    this.coinCount=observe.count;
    this.coinVal=observe.val;
  }

}
