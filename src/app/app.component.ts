import { Component,OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from './services/stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stock Market App';

  public stocks: Stock;
  private counter: number=1;
  ngOnInit(): void {
    this.stocks = new Stock('Test Stock Company'+ this.counter++, 'TSC', 85, 80,'ABC');
  }
  constructor(private StockService:StockService) { }
  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered'); 
    this.stocks.favorite = !this.stocks.favorite;
    }

  changeStockObject() {
    this.stocks = new Stock('Test Stock Company'+ this.counter++, 'TSC', 85, 80,'ABC');
    }

  changeStockPrice(){
    this.stocks.price += 10;
  }
  testMethod() {
    console.log('Test method in AppComponent triggered');
}
}
