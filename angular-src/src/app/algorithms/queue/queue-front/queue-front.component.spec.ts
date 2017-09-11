import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
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

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(QueueFrontComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[9]).toEqual(component.algorithm);

  });
});
