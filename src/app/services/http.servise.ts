import { BehaviorSubject, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  displayNews: any[] = [];
  displayTechNews: any[] = [];
  searchItem: string | undefined;
  search = new BehaviorSubject<string>('');
  urlAllNews: string =
    'https://newsapi.org/v2/top-headlines?country=ua&apiKey=c27589af639e48b99d58747c11cd2445';
  urlTechNews: string =
    'https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=c27589af639e48b99d58747c11cd2445';

  constructor(private httpClient: HttpClient) {}

  getAllNews(): Observable<any[]> {
    return this.httpClient.get<News[]>(this.urlAllNews);
  }

  getTechNews(): Observable<any> {
    return this.httpClient.get<News[]>(this.urlTechNews);
  }
}
