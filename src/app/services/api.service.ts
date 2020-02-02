import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'http://localhost:8787';

  constructor(
    private http: HttpClient
  ) { }

  saveData(data) {
      return this.http.post(this.URL + '/post', data);
  }
}
