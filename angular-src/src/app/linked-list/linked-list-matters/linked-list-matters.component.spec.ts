import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedListMattersComponent } from './linked-list-matters.component';

describe('LinkedListMattersComponent', () => {
  let component: LinkedListMattersComponent;
  let fixture: ComponentFixture<LinkedListMattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedListMattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedListMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
