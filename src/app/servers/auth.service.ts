import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';   
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(){
    const params = new HttpParams().set('code', environment.apiKey);
    return this.http.get(this.baseUrl, { params });
  }
  
}