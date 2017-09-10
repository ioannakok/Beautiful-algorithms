import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
});
