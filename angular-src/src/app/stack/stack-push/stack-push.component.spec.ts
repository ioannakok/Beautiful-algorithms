import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackPushComponent } from './stack-push.component';

describe('StackPushComponent', () => {
  let component: StackPushComponent;
  let fixture: ComponentFixture<StackPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
