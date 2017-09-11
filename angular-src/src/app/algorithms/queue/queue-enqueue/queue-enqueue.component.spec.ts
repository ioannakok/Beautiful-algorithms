import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
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

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(QueueEnqueueComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[7]).toEqual(component.algorithm);

  });
});
