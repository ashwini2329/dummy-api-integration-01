import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private _http: HttpClient) { }

  getDummyData(): Observable<any> {
    return this._http.get(this.apiUrl);
  }
}
