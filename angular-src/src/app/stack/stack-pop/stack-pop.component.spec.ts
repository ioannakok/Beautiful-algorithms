import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackPopComponent } from './stack-pop.component';

describe('StackPopComponent', () => {
  let component: StackPopComponent;
  let fixture: ComponentFixture<StackPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
