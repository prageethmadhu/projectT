import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-event',
  templateUrl: './news-event.component.html',
  styleUrls: ['./news-event.component.css'],
  providers: [NewsService]
})
export class NewsEventComponent implements OnInit {
  newsList: News[];
  
  constructor(private newsService: NewsService) { }

  imagePath= environment.imgPath

   getHeroes(): void {
    this.newsService.getNews().then(news => this.newsList = news);
  }
 
  ngOnInit(): void {
    this.getHeroes();
  }
}
