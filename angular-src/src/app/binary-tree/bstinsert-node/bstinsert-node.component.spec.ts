import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSTInsertNodeComponent } from './bstinsert-node.component';

describe('BSTInsertNodeComponent', () => {
  let component: BSTInsertNodeComponent;
  let fixture: ComponentFixture<BSTInsertNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSTInsertNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSTInsertNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
