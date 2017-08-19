import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueMattersComponent } from './queue-matters.component';

describe('QueueMattersComponent', () => {
  let component: QueueMattersComponent;
  let fixture: ComponentFixture<QueueMattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueMattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
