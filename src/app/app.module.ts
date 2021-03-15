import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockService } from './services/stock.service';
import { MessageService } from './services/message.service';
import { from } from 'rxjs';
import { AuthService } from './services/auth.service';
import { StockAppInterceptor } from './services/stock-app.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    CreateStockComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StockService,
    MessageService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: StockAppInterceptor, 
      multi: true,
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
