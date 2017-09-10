import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSTDeleteNodeNoChildComponent } from './bstdelete-node-no-child.component';

describe('BSTDeleteNodeNoChildComponent', () => {
  let component: BSTDeleteNodeNoChildComponent;
  let fixture: ComponentFixture<BSTDeleteNodeNoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSTDeleteNodeNoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSTDeleteNodeNoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
