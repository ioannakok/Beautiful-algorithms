import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { BSTPreorderTraversalComponent } from './bstpreorder-traversal.component';

describe('BSTPreorderTraversalComponent', () => {
  let component: BSTPreorderTraversalComponent;
  let fixture: ComponentFixture<BSTPreorderTraversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSTPreorderTraversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSTPreorderTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(BSTPreorderTraversalComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[18]).toEqual(component.algorithm);

  });
});
