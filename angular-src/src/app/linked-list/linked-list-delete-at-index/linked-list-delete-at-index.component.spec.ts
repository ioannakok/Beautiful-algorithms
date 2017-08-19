import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedListDeleteAtIndexComponent } from './linked-list-delete-at-index.component';

describe('LinkedListDeleteAtIndexComponent', () => {
  let component: LinkedListDeleteAtIndexComponent;
  let fixture: ComponentFixture<LinkedListDeleteAtIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedListDeleteAtIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedListDeleteAtIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
