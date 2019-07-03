import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedmessageComponent } from './feedmessage.component';

describe('FeedmessageComponent', () => {
  let component: FeedmessageComponent;
  let fixture: ComponentFixture<FeedmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
