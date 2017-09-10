import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
});
