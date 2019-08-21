import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComicByIdComponent } from './my-comic-by-id.component';

describe('MyComicByIdComponent', () => {
  let component: MyComicByIdComponent;
  let fixture: ComponentFixture<MyComicByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComicByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComicByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
