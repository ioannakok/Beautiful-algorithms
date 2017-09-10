import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from '../footer/footer.component';
import { AlgorithmsComponent } from './algorithms.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlgorithmsComponent', () => {
  let component: AlgorithmsComponent;
  let fixture: ComponentFixture<AlgorithmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmsComponent,
                      FooterComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
