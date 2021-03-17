import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component'; 
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockDetailComponent } from './stock/stock-detail/stock-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateStockDeactivateGuard } from './guards/create-stock-deactivate.guard';
import { StockLoadResolverService } from './resolver/stock-load-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks/list', component: StockListComponent,
    canActivate: [AuthGuard]  },
  { path: 'stocks/create', component: CreateStockComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CreateStockDeactivateGuard]  },
  { path: 'stock/:code', component: StockDetailComponent,
    canActivate: [AuthGuard],
    resolve: { stock: StockLoadResolverService }  },
  { path: '**', redirectTo: '/register'}
  ];
  
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
