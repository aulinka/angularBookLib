import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStrankaComponent } from './book-stranka.component';

describe('BookStrankaComponent', () => {
  let component: BookStrankaComponent;
  let fixture: ComponentFixture<BookStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
