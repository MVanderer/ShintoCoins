import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  puzzle:any;
  puzzleAnswer:string;
  prevAnswer:string;
  wrong:boolean;
  constructor(
    public _coin:ShintoService,
    private _route: ActivatedRoute,
    private _router: Router

    ) { }

  ngOnInit() {
    this.puzzleAnswer='';
    this.prevAnswer=''
    this.getPuzzle();
  }

  getPuzzle() {
    this.puzzle=this._coin.givePuzzle();
  }

  submitAnswer(){
    if (this.puzzle.answer.toLowerCase() == this.puzzleAnswer.toLowerCase()){
      console.log("right");
      this._coin.checkCoins();
      this.wrong=false;
      this.prevAnswer='';
      this._coin.raiseValue();
      this.puzzleAnswer='';
      this.getPuzzle();
    }
    else {
      console.log("wrong");
      this.prevAnswer=this.puzzleAnswer;
      this.puzzleAnswer='';
      this.wrong=true;
    }
  }
  tryAgain(){
    console.log("WHAT THE FUCK");
    this.getPuzzle();
    this._router.navigate(['/mine']);
  }
}
