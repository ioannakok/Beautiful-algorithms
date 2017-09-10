import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { StackComponent } from './stack.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StackComponent', () => {
  let component: StackComponent;
  let fixture: ComponentFixture<StackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackComponent, FooterComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
