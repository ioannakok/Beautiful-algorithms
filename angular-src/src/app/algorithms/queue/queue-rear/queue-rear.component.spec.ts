import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
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

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(QueueRearComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[10]).toEqual(component.algorithm);

  });
});
