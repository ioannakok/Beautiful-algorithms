import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { LinkedListInsertFirstComponent } from './linked-list-insert-first.component';

describe('LinkedListInsertFirstComponent', () => {
  let component: LinkedListInsertFirstComponent;
  let fixture: ComponentFixture<LinkedListInsertFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedListInsertFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedListInsertFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(LinkedListInsertFirstComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[11]).toEqual(component.algorithm);

  });
});
