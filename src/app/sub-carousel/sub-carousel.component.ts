import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sub-carousel',
  templateUrl: './sub-carousel.component.html',
  styleUrls: ['./sub-carousel.component.css']
})
export class SubCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imagePath= environment.imgPath
}
