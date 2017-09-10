import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSTDeleteNodeTwoChildrenComponent } from './bstdelete-node-two-children.component';

describe('BSTDeleteNodeTwoChildrenComponent', () => {
  let component: BSTDeleteNodeTwoChildrenComponent;
  let fixture: ComponentFixture<BSTDeleteNodeTwoChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSTDeleteNodeTwoChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSTDeleteNodeTwoChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
