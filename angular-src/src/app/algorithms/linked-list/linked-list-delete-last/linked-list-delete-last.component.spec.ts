import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
});
