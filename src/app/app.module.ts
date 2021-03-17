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
import { AppRoutesModule } from './app-routes.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserStoreService } from './services/user-store.service';
import { UserService } from './services/user.service';
import { StockDetailComponent } from './stock/stock-detail/stock-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateStockDeactivateGuard } from './guards/create-stock-deactivate.guard';
@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    CreateStockComponent,
    StockListComponent,
    LoginComponent,
    RegisterComponent,
    StockDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    StockService,
    MessageService,
    UserStoreService,
    UserService,
    AuthGuard,
    CreateStockDeactivateGuard,
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
