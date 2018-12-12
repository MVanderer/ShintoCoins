import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShintoService } from '../shinto.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
transactId:number;
tData:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _coin:ShintoService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.transactId=params['id'];
      this.tData=this._coin.getTransaction(this.transactId);
      
      console.log(this.tData);
      
    });
  }
}
