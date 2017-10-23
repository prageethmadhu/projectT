import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTestimonialComponent } from './tour-testimonial.component';

describe('TourTestimonialComponent', () => {
  let component: TourTestimonialComponent;
  let fixture: ComponentFixture<TourTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
