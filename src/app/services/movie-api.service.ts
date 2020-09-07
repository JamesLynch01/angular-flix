import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private readonly URL = 'https://api.themoviedb.org/3/';
  private readonly API_KEY = '5a470fd8928415f9a6a9d110a9d0e490';
  constructor(private httpClient: HttpClient) { }

  get(path: string): Promise<any[]>{
    const params: HttpParams = new HttpParams()
    .append('api_key', this.API_KEY);
    
    return this.httpClient.get<any[]>(`${this.URL}${path}`, {params}).toPromise();
  }
}
