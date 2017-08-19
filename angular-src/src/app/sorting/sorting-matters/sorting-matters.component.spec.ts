import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingMattersComponent } from './sorting-matters.component';

describe('SortingMattersComponent', () => {
  let component: SortingMattersComponent;
  let fixture: ComponentFixture<SortingMattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingMattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
