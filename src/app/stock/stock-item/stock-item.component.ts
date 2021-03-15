import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  @Input() public stock:Stock;
  //@Output() private toggleFavorite: EventEmitter<Stock>;

  constructor(private stockService : StockService) {  }

  ngOnInit(){  }

  onToggleFavorite(event){
    this.stockService.toggleFavorite(this.stock)
    .subscribe((stock) => this.stock.favorite = !this.stock.favorite);
  }

  // changeStockPrice() { 
  //   this.stock.price += 5;
  // }
}
