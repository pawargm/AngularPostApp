import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAlertComponent } from './post-alert.component';

describe('PostAlertComponent', () => {
  let component: PostAlertComponent;
  let fixture: ComponentFixture<PostAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
