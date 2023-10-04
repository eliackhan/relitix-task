import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelitixMessageComponent } from './relitix-message.component';

describe('RelitixMessageComponent', () => {
  let component: RelitixMessageComponent;
  let fixture: ComponentFixture<RelitixMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelitixMessageComponent]
    });
    fixture = TestBed.createComponent(RelitixMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
