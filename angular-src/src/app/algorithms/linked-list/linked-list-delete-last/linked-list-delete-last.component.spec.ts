import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmsService } from '../../algorithms.service';
import { LinkedListDeleteLastComponent } from './linked-list-delete-last.component';

describe('LinkedListDeleteLastComponent', () => {
  let component: LinkedListDeleteLastComponent;
  let fixture: ComponentFixture<LinkedListDeleteLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedListDeleteLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedListDeleteLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use the algorithm object from the service', () => {
    let fixture = TestBed.createComponent(LinkedListDeleteLastComponent);
    let component = fixture.debugElement.componentInstance;
    let algorithmsService = fixture.debugElement.injector.get(AlgorithmsService);
    fixture.detectChanges();
    expect(algorithmsService.algorithms[15]).toEqual(component.algorithm);

  });
});
