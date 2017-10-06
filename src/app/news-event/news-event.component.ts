import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-news-event',
  templateUrl: './news-event.component.html',
  styleUrls: ['./news-event.component.css']
})
export class NewsEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imagePath= environment.imgPath
}
