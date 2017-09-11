import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { BubbleSortComponent } from './bubble-sort.component';

describe('BubbleSortComponent', () => {
  let component: BubbleSortComponent;
  let fixture: ComponentFixture<BubbleSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(BubbleSortComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[0]).toEqual(component.algorithm);

  });

});
