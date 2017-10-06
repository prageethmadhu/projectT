import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tour-testimonial',
  templateUrl: './tour-testimonial.component.html',
  styleUrls: ['./tour-testimonial.component.css']
})
export class TourTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imagePath= environment.imgPath
}
