import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackPeekComponent } from './stack-peek.component';

describe('StackPeekComponent', () => {
  let component: StackPeekComponent;
  let fixture: ComponentFixture<StackPeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackPeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackPeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
