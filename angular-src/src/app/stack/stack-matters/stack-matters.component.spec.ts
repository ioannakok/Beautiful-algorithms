import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackMattersComponent } from './stack-matters.component';

describe('StackMattersComponent', () => {
  let component: StackMattersComponent;
  let fixture: ComponentFixture<StackMattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackMattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
