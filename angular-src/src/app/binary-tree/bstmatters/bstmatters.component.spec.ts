import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSTMattersComponent } from './bstmatters.component';

describe('BSTMattersComponent', () => {
  let component: BSTMattersComponent;
  let fixture: ComponentFixture<BSTMattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSTMattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSTMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
