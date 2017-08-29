import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSTDeleteNodeOneChildComponent } from './bstdelete-node-one-child.component';

describe('BSTDeleteNodeOneChildComponent', () => {
  let component: BSTDeleteNodeOneChildComponent;
  let fixture: ComponentFixture<BSTDeleteNodeOneChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSTDeleteNodeOneChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSTDeleteNodeOneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
