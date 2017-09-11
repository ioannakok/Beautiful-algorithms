import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { StackPopComponent } from './stack-pop.component';

describe('StackPopComponent', () => {
  let component: StackPopComponent;
  let fixture: ComponentFixture<StackPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(StackPopComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[5]).toEqual(component.algorithm);

  });
});
