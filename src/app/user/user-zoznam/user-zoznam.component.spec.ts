import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserZoznamComponent } from './user-zoznam.component';

describe('UserZoznamComponent', () => {
  let component: UserZoznamComponent;
  let fixture: ComponentFixture<UserZoznamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserZoznamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
