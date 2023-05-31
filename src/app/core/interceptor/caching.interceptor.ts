import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, of, tap} from 'rxjs';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  responseCache = new Map()

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cache = this.responseCache.get(request.urlWithParams)
    if (cache) {
      return of(cache)
    }
    return next.handle(request).pipe(tap(response => {
      this.responseCache.set(request.urlWithParams, response)
    }));
  }
}
