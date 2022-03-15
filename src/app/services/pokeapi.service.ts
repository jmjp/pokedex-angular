import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  baseUrl: String = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) { }
  get<T>(path: string)
  {
    return this.httpClient.get<T>(`${this.baseUrl}/${path}`);
  }
  post<T>(path: string, body: Map<String,any>){
    return this.httpClient.post<T>(`${this.baseUrl}/${path}`, body);
  }
  put<T>(path: string, body: Map<String,any>){
    return this.httpClient.put<T>(`${this.baseUrl}/${path}`, body);
  }
  delete<T>(path: string){
    return this.httpClient.delete<T>(`${this.baseUrl}/${path}`);
  }
}
