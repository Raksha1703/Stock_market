import { Component,OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stock Market App';

  public stock: Stock;
  private counter: number=1;
  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company'+ this.counter++, 'TSC', 85, 80);
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered'); 
    this.stock.favorite = !this.stock.favorite;
    }

  changeStockObject() {
    this.stock = new Stock('Test Stock Company'+ this.counter++, 'TSC', 85, 80);
    }

  changeStockPrice(){
    this.stock.price += 10;
  }
  testMethod() {
    console.log('Test method in AppComponent triggered');
}
}