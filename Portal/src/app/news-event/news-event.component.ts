import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { News } from '../news';
import { NewsService } from '../news.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-news-event',
  templateUrl: './news-event.component.html',
  styleUrls: ['./news-event.component.css'],
  providers: [NewsService]
})
export class NewsEventComponent implements OnInit {
  newsList: News[];
  results:any;
  constructor(private newsService: NewsService,private http: HttpClient) { }

  imagePath= environment.imgPath

   getHeroes(): void {
    this.newsService.getNews().then(news => this.newsList = news);
  }
 
  ngOnInit(): void {
    this.getHeroes();

    this.http.get('http://localhost:3000/tasks').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
    });
  }
}
