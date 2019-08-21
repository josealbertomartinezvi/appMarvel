import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComicsComponent } from './my-comics.component';

describe('MyComicsComponent', () => {
  let component: MyComicsComponent;
  let fixture: ComponentFixture<MyComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
