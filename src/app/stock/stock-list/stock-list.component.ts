import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  public stocks:Stock[];
  constructor(private StockService:StockService) {  }

  ngOnInit() {
    this.stocks = this.StockService.getStocks();
  }

  onToggleFavorite(stock:Stock) {
    console.log('Favorite For Stock',stock,'was Triggred');
    this.StockService.toggleFavorite(stock);
  }

}
