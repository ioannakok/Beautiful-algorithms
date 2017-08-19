import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashingComponent } from './hashing.component';

describe('HashingComponent', () => {
  let component: HashingComponent;
  let fixture: ComponentFixture<HashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
