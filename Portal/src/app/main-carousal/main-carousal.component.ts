import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-main-carousal',
  templateUrl: './main-carousal.component.html',
  styleUrls: ['./main-carousal.component.css']
})
export class MainCarousalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imagePath= environment.imgPath
}
