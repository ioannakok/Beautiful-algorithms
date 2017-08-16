import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmDetailComponent } from './algorithm-detail.component';

describe('AlgorithmDetailComponent', () => {
  let component: AlgorithmDetailComponent;
  let fixture: ComponentFixture<AlgorithmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
