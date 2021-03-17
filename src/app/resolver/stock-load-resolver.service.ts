import { Injectable } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Stock } from 'src/app/model/stock';
import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class StockLoadResolverService implements Resolve<Stock>{

  constructor(private stockService:StockService) { }
   
  resolve(route:ActivatedRouteSnapshot,
          state:RouterStateSnapshot):
          Stock | Observable<Stock> | Promise<Stock> {
            const stockCode =route.paramMap.get('code');
            return this.stockService.getStock(stockCode);
          }
}
