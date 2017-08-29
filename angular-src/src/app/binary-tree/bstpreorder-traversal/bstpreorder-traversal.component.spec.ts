import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSTPreorderTraversalComponent } from './bstpreorder-traversal.component';

describe('BSTPreorderTraversalComponent', () => {
  let component: BSTPreorderTraversalComponent;
  let fixture: ComponentFixture<BSTPreorderTraversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSTPreorderTraversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSTPreorderTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
