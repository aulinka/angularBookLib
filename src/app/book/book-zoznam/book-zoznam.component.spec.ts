import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookZoznamComponent } from './book-zoznam.component';

describe('BookZoznamComponent', () => {
  let component: BookZoznamComponent;
  let fixture: ComponentFixture<BookZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
