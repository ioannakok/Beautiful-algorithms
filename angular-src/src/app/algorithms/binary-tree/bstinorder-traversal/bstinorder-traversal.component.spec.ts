import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSTInorderTraversalComponent } from './bstinorder-traversal.component';

describe('BSTInorderTraversalComponent', () => {
  let component: BSTInorderTraversalComponent;
  let fixture: ComponentFixture<BSTInorderTraversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSTInorderTraversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSTInorderTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
