import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { SortingComponent } from './sorting.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SortingComponent', () => {
  let component: SortingComponent;
  let fixture: ComponentFixture<SortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingComponent, FooterComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
