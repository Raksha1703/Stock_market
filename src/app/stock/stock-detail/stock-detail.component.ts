import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  public stock:Stock;

  constructor(private stockService:StockService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const stockCode = this.route.snapshot.paramMap.get('code');
    this.stockService.getStock(stockCode)
      .subscribe(stock => this.stock = stock);    
  }

}
