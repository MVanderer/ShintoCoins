import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ShintoService } from './shinto.service';
import { RouterModule } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      MineComponent,
      BuyComponent,
      SellComponent,
      LedgerComponent,
      PageNotFoundComponent,
      TransactionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      RouterModule
   ],
   providers: [
       ShintoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
