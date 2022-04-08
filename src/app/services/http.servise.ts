import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../models/news';
import { Fotos } from '../models/fotos';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  displayNews: any[] = [];
  // displayTechNews: any[] = [];
  searchItem: string | undefined;
  search = new BehaviorSubject<string>('');


  urlAllNews: string =
    'https://newsapi.org/v2/top-headlines?country=ua&apiKey=c27589af639e48b99d58747c11cd2445';
  urlFotos: string =
    'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<any[]> {
    return this.http.get<News[]>(this.urlAllNews);
  }

  getFotos(start: number): Observable<Fotos[]> {
    return this.http.get<Fotos[]>(`${this.urlFotos}/?_start=` + start + '&_limit=20');
  }

  getFotosId(id: number) {
    return this.http.get(`${this.urlFotos}/${id}`);
  }


  // getTechNews(): Observable <News[]>{
  //   return this.httpClient.get(this.urlTechNews    ).pipe(
  //     map((data: any) => {
  //       let newsList = data.articles;
  //       //console.log(this.newsList)
  //       return newsList.map((news: any): News => {
  //         return new News(
  //           news.author,
  //           news.description,
  //           news.url,
  //           news.urlToImage
  //         );
  //       });
  //     })
  //   );
  // }
}
