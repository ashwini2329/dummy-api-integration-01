import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private _http: HttpClient) { }

  getAbout() {
    return "HI About section !"
  }

  getDummyData(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  getRandomQuotes(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '407a7ddedemshdeb4d18de269363p1eff57jsn18d39901c5dc',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    })

    const animeUrl = "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/comm"
    return this._http.get(animeUrl, { headers: headers });
  }
}
