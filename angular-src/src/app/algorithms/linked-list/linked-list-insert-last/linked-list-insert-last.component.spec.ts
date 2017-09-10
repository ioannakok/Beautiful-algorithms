import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedListInsertLastComponent } from './linked-list-insert-last.component';

describe('LinkedListInsertLastComponent', () => {
  let component: LinkedListInsertLastComponent;
  let fixture: ComponentFixture<LinkedListInsertLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedListInsertLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedListInsertLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
