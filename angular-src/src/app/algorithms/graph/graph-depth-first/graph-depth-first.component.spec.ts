import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { GraphDepthFirstComponent } from './graph-depth-first.component';

describe('GraphDepthFirstComponent', () => {
  let component: GraphDepthFirstComponent;
  let fixture: ComponentFixture<GraphDepthFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDepthFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDepthFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(GraphDepthFirstComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[22]).toEqual(component.algorithm);

  });
});
