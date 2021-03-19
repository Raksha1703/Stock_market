import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/model/stock';
import { MessageService } from './services/message.service';
import { StockService } from './services/stock.service';
import { UserStoreService } from './services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stock Market App';

  //public stocks: Stock;
  //private counter: number=1;
  ngOnInit(): void {
    this.messageService.message = 'Hello Message Service!';
    //this.stocks = new Stock('Test Stock Company'+ this.counter++, 'TSC', 85, 80,'ABC');
  }
  constructor(public messageService : MessageService,
              private router:Router,
              private userStore: UserStoreService) { }

  logout(){
    this.userStore.token=null;
    this.router.navigate(['login']);
  }

//   onToggleFavorite(stock: Stock) {
//     console.log('Favorite for stock ', stock, ' was triggered'); 
//     this.stocks.favorite = !this.stocks.favorite;
//     }

//   changeStockObject() {
//     this.stocks = new Stock('Test Stock Company'+ this.counter++, 'TSC', 85, 80,'ABC');
//     }

//   changeStockPrice(){
//     this.stocks.price += 10;
//   }
//   testMethod() {
//     console.log('Test method in AppComponent triggered');
// }
}
