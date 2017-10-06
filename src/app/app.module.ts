import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { MainCarousalComponent } from './main-carousal/main-carousal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SubCarouselComponent } from './sub-carousel/sub-carousel.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { RouterModule }   from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { TourTestimonialComponent } from './tour-testimonial/tour-testimonial.component';
import { FreequentlyAskQuestionsComponent } from './freequently-ask-questions/freequently-ask-questions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    MainCarousalComponent,
    SubCarouselComponent,
    TourDetailComponent,
    AboutUsComponent,
    NewsEventComponent,
    TourTestimonialComponent,
    FreequentlyAskQuestionsComponent,
    ContactUsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    NgbModule.forRoot(),RouterModule.forRoot([
      {
        path: 'contact',
        component: ContactUsComponent
      },
      {
        path: 'faq',
        component: FreequentlyAskQuestionsComponent
      },
      {
        path: 'news-events',
        component: NewsEventComponent
      },
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path: 'testimonials',
        component: TourTestimonialComponent
      }
      ,{
        path: 'tour',
        component: TourDetailComponent
      },
      {
        path: '',
        redirectTo: '/tour',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
