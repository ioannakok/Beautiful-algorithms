import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
});
