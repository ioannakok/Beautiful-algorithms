import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSortComponent } from './quick-sort.component';

describe('QuickSortComponent', () => {
  let component: QuickSortComponent;
  let fixture: ComponentFixture<QuickSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
