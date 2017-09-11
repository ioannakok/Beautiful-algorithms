import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { StackPeekComponent } from './stack-peek.component';

describe('StackPeekComponent', () => {
  let component: StackPeekComponent;
  let fixture: ComponentFixture<StackPeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackPeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackPeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(StackPeekComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[6]).toEqual(component.algorithm);

  });
});
