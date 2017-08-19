import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueFrontComponent } from './queue-front.component';

describe('QueueFrontComponent', () => {
  let component: QueueFrontComponent;
  let fixture: ComponentFixture<QueueFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
