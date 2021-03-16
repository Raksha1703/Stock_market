import { Injectable } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { Observable, of as ObservableOf, throwError as ObservableThrow} from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { UserStoreService } from './user-store.service';

//import { HttpEvent } from '@angular/common/http/src/response';
@Injectable()
export class StockService {

  //private stocks: Stock[];
  constructor(private http : HttpClient,
              private userStore:UserStoreService) {  }

  getStocks() : Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock');
  }

  getStock(code: string): Observable<Stock>{
    return this.http.get<Stock>('/api/stock'+ code);
  }

  createStock(stock:Stock): Observable<any>{
    return this.http.post('/api/stock', stock);
  }

  toggleFavorite(stock:Stock): Observable<Stock>{
    return this.http.patch<Stock>('/api/stock' + stock.code,
          {
            favorite: !stock.favorite
          });
  }

  // getStocksAsResponse(): Observable<HttpResponse<Stock[]>> {
  //   return this.http.get<Stock[]>('/api/stock', {
  //     observe: 'response'
  //   });
  // }

  // getStocksAsEvents(): Observable<HttpEvent<any>> {
  //   return this.http.get('/api/stock', {
  //     observe: 'events'
  //   });
  // }

  // getStocksAsString(): Observable<string> {
  //   return this.http.get('/api/stock', {
  //     responseType: 'text'
  //   });
  // }

  // getStocksAsBlob(): Observable<Blob> {
  //   return this.http.get('/api/stock', {
  //     responseType: 'blob'
  //   });
  // }
  

  // makeFailingCall(){
  //   return this.http.get('/api/fail');
  // }  
}
