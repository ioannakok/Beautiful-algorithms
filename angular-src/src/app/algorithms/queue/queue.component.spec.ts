import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { QueueComponent } from './queue.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('QueueComponent', () => {
  let component: QueueComponent;
  let fixture: ComponentFixture<QueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueComponent, FooterComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
