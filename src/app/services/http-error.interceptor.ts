import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable} from 'rxjs';
import * as alertify from 'alertifyjs';
import {of, throwError } from 'rxjs';
import { catchError, concatMap, retry, retryWhen } from 'rxjs/operators';
import { ErrorCode } from '../enums/enums';

@Injectable({
  providedIn:'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request)
            .pipe(
                retryWhen(error => this.retryRequest(error,10)),
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = this.setError(error);
                    console.log(error);
                    alertify.error(errorMessage);
                    return throwError(errorMessage);
                })
            );
  }
  retryRequest(error: Observable<any>, retryCount: number): Observable<any>
  {
      return error.pipe(
          concatMap((checkErr: HttpErrorResponse, count: number) => {

              if(count <= retryCount)
              {
                  switch(checkErr.status)
                  {
                  case ErrorCode.serverDown :
                      return of(checkErr);
                  }
              }
              return throwError(checkErr);
          })
      );
  }
  setError(error: HttpErrorResponse): string {
    let errorMessage = 'Unknown error occured';
    if(error.error instanceof ErrorEvent) {
        // Client side error
        errorMessage = error.error.message;
    } else {
        // server side error
        if(error.status===401)
        {
            console.log(error)
            return 'Please login before posting';
        }

        if (error.error.errorMessage && error.status!==0) {
            {errorMessage = error.error.errorMessage;}
        }

        if (!error.error.errorMessage && error.error && error.status!==0) {
            {errorMessage = error.error;}
        }
    }
    return errorMessage;
    }
}
