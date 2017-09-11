import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { BSTLevelorderTraversalComponent } from './bstlevelorder-traversal.component';

describe('BSTLevelorderTraversalComponent', () => {
  let component: BSTLevelorderTraversalComponent;
  let fixture: ComponentFixture<BSTLevelorderTraversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSTLevelorderTraversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSTLevelorderTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(BSTLevelorderTraversalComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[20]).toEqual(component.algorithm);

  });
});
