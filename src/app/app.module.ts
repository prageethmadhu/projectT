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


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    MainCarousalComponent,
    SubCarouselComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
