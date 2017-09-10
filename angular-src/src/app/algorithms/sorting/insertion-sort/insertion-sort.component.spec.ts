import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { InsertionSortComponent } from './insertion-sort.component';

describe('InsertionSortComponent', () => {
  let component: InsertionSortComponent;
  let fixture: ComponentFixture<InsertionSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertionSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertionSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use data from the service', () => {
    let fixture = TestBed.createComponent(InsertionSortComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms).toEqual(component.algorithms);

  });

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(InsertionSortComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[1]).toEqual(component.algorithm);

  });

});
