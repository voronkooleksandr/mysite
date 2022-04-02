import { Component } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { News } from '../models/news';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  displayTechNews: any[] = [];
  displayNews: any[] = [];
  searchItem: string | undefined;
  search = new BehaviorSubject<string>("");
  urlAllNews: string = "https://newsapi.org/v2/top-headlines?country=ua&apiKey=c27589af639e48b99d58747c11cd2445";
  urlTechNews: string = "https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=c27589af639e48b99d58747c11cd2445";


  constructor(private httpClient: HttpClient) { }


  getAllNews(): Observable<any[]> {
    return this.httpClient.get<News[]>(this.urlAllNews);
  }

  getTechNews(): Observable<any[]> {
    return this.httpClient.get<News[]>(this.urlTechNews);
  }



  // getTechNews(): Observable<News[]> {
  //   return this.httpClient.get(`${this.urlTechNews}`).pipe(
  //     map((data: any) => {

  //       let newsList = data;
  //       console.log(newsList);
  //       return newsList.map(function (news: any): News {
  //         console.log(newsList);
  //         return new News(
  //           news.author,
  //           news.content,
  //           news.description,
  //           news.publishedAt,
  //           news.source,
  //           news.title,
  //           news.url,
  //           news.urlToImage
  //         );
  //       });
  //     })
  //     );

  // }

  getDetailedNews(author: string): Observable<any> {
    return this.httpClient.get<News>(`${this.urlTechNews}/author/${author}`);
  }

    // getTechNews(): Observable<News[]> {
  //   return this.httpClient.get(this.urlTechNews).pipe(
  //     map((data: any) => {
  //       let newsList: any[] = [];
  //       for (const id in data) {
  //         if(data.hasOwnProperty(id)) {
  //           newsList[2].push(data[id]);
  //         }
  //       }
  //       console.log(newsList[2]);
  //       return newsList;

  //     })
  //     );
  // }

}

