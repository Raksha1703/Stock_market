import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/do';
import { tap } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';

@Injectable()

export class StockAppInterceptor implements HttpInterceptor {
  
    constructor(private authService:AuthService) {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpEvent<any>> {
        if (this.authService.authToken) {
            const authReq = req.clone({ 
                headers: req.headers.set(
                'Authorization',
            this.authService.authToken )
            });
            console.log('Making an authorized request');
            req = authReq;
            }
        return next.handle(req)
        .pipe(tap(event => this.handleResponse(req, event), 
        error => this.handleError(req, error)));
    }
    //.pipe(v1,v2,v3)
    handleResponse(req: HttpRequest<any>, event) { 
        console.log('Handling response for ', req.url, event); 
        if (event instanceof HttpResponse) {
            console.log('Request for ', req.url,
            ' Response Status ', event.status,
            ' With body ', event.body);
        } 
    }

    handleError(req: HttpRequest<any>, event) {
        console.error('Request for ', req.url,
              ' Response Status ', event.status,
              ' With error ', event.error);
    }

}
