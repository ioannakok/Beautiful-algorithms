import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { BinaryTreeComponent } from './binary-tree.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BinaryTreeComponent', () => {
  let component: BinaryTreeComponent;
  let fixture: ComponentFixture<BinaryTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryTreeComponent, FooterComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
