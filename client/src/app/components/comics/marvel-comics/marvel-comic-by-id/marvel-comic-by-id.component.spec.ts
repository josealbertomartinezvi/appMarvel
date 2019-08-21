import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelComicByIdComponent } from './marvel-comic-by-id.component';

describe('MarvelComicByIdComponent', () => {
  let component: MarvelComicByIdComponent;
  let fixture: ComponentFixture<MarvelComicByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelComicByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelComicByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
