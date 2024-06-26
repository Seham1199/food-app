import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmProfileComponent } from './confirm-profile.component';

describe('ConfirmProfileComponent', () => {
  let component: ConfirmProfileComponent;
  let fixture: ComponentFixture<ConfirmProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmProfileComponent]
    });
    fixture = TestBed.createComponent(ConfirmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
