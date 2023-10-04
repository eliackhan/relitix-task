import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyTabComponent } from './privacy-policy-tab.component';

describe('PrivacyPolicyTabComponent', () => {
  let component: PrivacyPolicyTabComponent;
  let fixture: ComponentFixture<PrivacyPolicyTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyPolicyTabComponent]
    });
    fixture = TestBed.createComponent(PrivacyPolicyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
