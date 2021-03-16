import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/model/stock';
import { AuthService } from 'src/app/services/auth.service';
import { StockService } from 'src/app/services/stock.service';
import { share } from 'rxjs/operators';
import { UserStoreService } from 'src/app/services/user-store.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  public stocks$:Observable<Stock[]>;
  public searchString : '';
  constructor(private stockService:StockService,
              private userStore:UserStoreService,
              private route: ActivatedRoute) {  }

  ngOnInit(){
    console.log('Page No. :', 
                this.route.snapshot.queryParamMap.get('page'));
    this.stocks$ = this.stockService.getStocks();
    //this.fetchStocks();
  }

  // search() {
  //   this.stocks$ = this.stockService.getStocks(this.searchString).pipe(share());
  // }
  // fetchStocks(){
  //   this.stocks$ = this.stockService.getStocks();
  // }

  // setAuthToken(){
  //   this.authService.authToken = 'Testing';
  // }

  // resetAuthToken(){
  //   this.authService.authToken = null;
  // }
  // makeFailingCall(){
  //   this.stockService.makeFailingCall().subscribe(
  //     (res) => console.log('Successfully made failing call', res),
  //     (err) => console.error('Error making failing call', err));
  // }
  // ngOnInit() {
  //   this.stocks$ = this.stockService.getStocks(); 
  //   this.stockService.getStocksAsResponse()
  //     .subscribe((response) => {
  //      console.log('OBSERVE "response" RESPONSE is ', response);
  //     });
  //   this.stockService.getStocksAsEvents() 
  //     .subscribe((response) => {
  //     console.log('OBSERVE "events" RESPONSE is ', response);
  //     });
  //   this.stockService.getStocksAsString() 
  //     .subscribe((response) => {
  //     console.log('Response Type "text" RESPONSE is ', response);
  //     });
  //   this.stockService.getStocksAsBlob() 
  //     .subscribe((response) => {
  //     console.log('Response Type "blob" RESPONSE is ', response);
  //     });
  // }

  // onToggleFavorite(stock: Stock) {
  //   this.stockService.toggleFavorite(stock);
  // }

}

  


