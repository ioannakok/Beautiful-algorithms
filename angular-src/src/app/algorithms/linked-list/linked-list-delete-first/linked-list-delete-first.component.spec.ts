import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedListDeleteFirstComponent } from './linked-list-delete-first.component';

describe('LinkedListDeleteFirstComponent', () => {
  let component: LinkedListDeleteFirstComponent;
  let fixture: ComponentFixture<LinkedListDeleteFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedListDeleteFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedListDeleteFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
