import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateStockComponent } from '../stock/create-stock/create-stock.component';

@Injectable({
  providedIn: 'root'
})
export class CreateStockDeactivateGuard implements CanDeactivate<CreateStockComponent> {
  
  constructor(){}

  canDeactivate(component: CreateStockComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): 
                boolean | Observable<boolean>  | Promise<boolean> {
    return window.confirm('Do you want to navigate away from this page');
  }
  
}
