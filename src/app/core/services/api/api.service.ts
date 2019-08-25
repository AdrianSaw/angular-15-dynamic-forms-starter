import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.api_url;
  }

  delete(path: string, options?: any): Observable<any> {
    return this.request(path, 'delete', options);
  }

  get(path: string, options?: any): Observable<any> {
    return this.request(path, 'get', options);
  }

  post(path: string, options?: any): Observable<any> {
    return this.request(path, 'post', options);
  }

  put(path: string, options: any): Observable<any> {
    return this.request(path, 'put', options);
  }

  patch(path: string, options: any): Observable<any> {
    return this.request(path, 'patch', options);
  }

  private request(path: string, method: string, options?: any): Observable<any> {
    options = options || {};
    const headers = null;
    const requestOptions = Object.assign(options, {headers});
    return this.http.request(method, `${this.baseUrl}${path}`, requestOptions);
  }
}
