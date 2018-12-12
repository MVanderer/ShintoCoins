import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  ledger:Array<any>;
  constructor(public _coin:ShintoService) { }

  ngOnInit() {
    this.getLedger();
  }

  getLedger(){
    this.ledger=this._coin.getLedger().ledger;
  }
}
