import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-freequently-ask-questions',
  templateUrl: './freequently-ask-questions.component.html',
  styleUrls: ['./freequently-ask-questions.component.css']
})
export class FreequentlyAskQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imagePath= environment.imgPath
}
