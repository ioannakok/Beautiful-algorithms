import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueRearComponent } from './queue-rear.component';

describe('QueueRearComponent', () => {
  let component: QueueRearComponent;
  let fixture: ComponentFixture<QueueRearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueRearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueRearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
