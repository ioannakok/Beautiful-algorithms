import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueDequeueComponent } from './queue-dequeue.component';

describe('QueueDequeueComponent', () => {
  let component: QueueDequeueComponent;
  let fixture: ComponentFixture<QueueDequeueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueDequeueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueDequeueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
