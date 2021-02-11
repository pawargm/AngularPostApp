import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormDemoComponent } from './react-form-demo.component';

describe('ReactFormDemoComponent', () => {
  let component: ReactFormDemoComponent;
  let fixture: ComponentFixture<ReactFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactFormDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
