import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStrankaComponent } from './user-stranka.component';

describe('UserStrankaComponent', () => {
  let component: UserStrankaComponent;
  let fixture: ComponentFixture<UserStrankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStrankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
