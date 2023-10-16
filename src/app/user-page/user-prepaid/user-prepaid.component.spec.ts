import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrepaidComponent } from './user-prepaid.component';

describe('UserPrepaidComponent', () => {
  let component: UserPrepaidComponent;
  let fixture: ComponentFixture<UserPrepaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPrepaidComponent]
    });
    fixture = TestBed.createComponent(UserPrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
