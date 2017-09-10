import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueEnqueueComponent } from './queue-enqueue.component';

describe('QueueEnqueueComponent', () => {
  let component: QueueEnqueueComponent;
  let fixture: ComponentFixture<QueueEnqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueEnqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueEnqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
