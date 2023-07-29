import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThougthComponent } from './thougth.component';

describe('ThougthComponent', () => {
  let component: ThougthComponent;
  let fixture: ComponentFixture<ThougthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThougthComponent]
    });
    fixture = TestBed.createComponent(ThougthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
