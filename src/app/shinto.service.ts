import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  puzzles = [
    {question:"What was the year the Roman Empire really ended?",answer:"1453"},
    {question:"What is the answer to the question of life, the universe, and everything?",answer:"42"},
    {question:"What was the name of the last rightly guided caliph?",answer:"Ali"},
    {question:"The imperial regalia of Japan inclides a sword. What is it's name?",answer:"Kusanagi"},
    {question:"What is your quest?",answer:"I seek the holy grail"},
    {question:"Fundamental constant used to define the absolute definition of kilogram",answer:"Planck constant"}

  ];
  coinCount = 0;
  coinVal = 1;
  picket = 5;//starting money?
  transactions = [];
  constructor() { }

  givePuzzle(){
    let i = Math.floor(Math.random()*this.puzzles.length);
    return this.puzzles[i];
  }

  addCoin(amount=1){
    console.log("addingCoins");
    this.coinCount+=amount;
    let log = {id:this.transactions.length,action:"Bought",amount:amount,value:this.coinVal}
    this.transactions.push(log);
    console.log(this.transactions);
  }

  checkCoins(){
    console.log(this.coinCount);
    return {count:this.coinCount,val:this.coinVal};
  }

  spendCoins(amount=1){
    this.coinCount-=amount;
    let log = {id:this.transactions.length,action:"Sold",amount:amount,value:this.coinVal}
    this.transactions.push(log);
    console.log(this.transactions);
  }

  raiseValue(){
    this.coinVal+=1;
    let log = {id:this.transactions.length,action:"Mined",amount:1,value:this.coinVal}
    this.transactions.push(log);
    console.log(this.transactions);
  }
  getLedger(){
    return {ledger:this.transactions};
  }

  getTransaction(id){
    console.log("Fetching transaction");
    console.log("Id is "+id);
    console.log(this.transactions);
    console.log(this.transactions[id]);
    if (id>=this.transactions.length){
      return null;
    }
    return this.transactions[id];
  }
}
