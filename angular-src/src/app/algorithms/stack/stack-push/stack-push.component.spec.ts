import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { StackPushComponent } from './stack-push.component';

describe('StackPushComponent', () => {
  let component: StackPushComponent;
  let fixture: ComponentFixture<StackPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(StackPushComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[4]).toEqual(component.algorithm);

  });
});
