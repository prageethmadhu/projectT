import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreequentlyAskQuestionsComponent } from './freequently-ask-questions.component';

describe('FreequentlyAskQuestionsComponent', () => {
  let component: FreequentlyAskQuestionsComponent;
  let fixture: ComponentFixture<FreequentlyAskQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreequentlyAskQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreequentlyAskQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
