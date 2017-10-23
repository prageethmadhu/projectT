import { Injectable } from '@angular/core';

import { News } from './news';
import { NewsList } from './mock-news';

@Injectable()
export class NewsService {
  getNews(): Promise<News[]> {
    return Promise.resolve(NewsList);
  }
}