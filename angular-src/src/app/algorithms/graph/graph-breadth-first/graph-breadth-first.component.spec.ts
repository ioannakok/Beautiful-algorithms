import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { GraphBreadthFirstComponent } from './graph-breadth-first.component';

describe('GraphBreadthFirstComponent', () => {
  let component: GraphBreadthFirstComponent;
  let fixture: ComponentFixture<GraphBreadthFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphBreadthFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphBreadthFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(GraphBreadthFirstComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[21]).toEqual(component.algorithm);

  });
});
