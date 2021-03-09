import { Injectable } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Injectable()
export class StockService {

  private stocks: Stock[];
  constructor() { 
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80), 
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ];
  }

  getStocks() : Stock[] {
    return this.stocks;
  }

  createStock(stock:Stock){
    let foundStock = this.stocks.find(each => each.code === stock.code);
    console.log(foundStock);
    if(foundStock){
      return false;
    }
    this.stocks.push(stock);
    return true;
  }

  toggleFavorite(stock:Stock){
    let foundStock = this.stocks.find(each => each.code === stock.code);
    foundStock.favorite = !foundStock.favorite;
  }
}
