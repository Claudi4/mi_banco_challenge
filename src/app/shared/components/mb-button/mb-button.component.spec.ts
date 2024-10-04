import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbButtonComponent } from './mb-button.component';

describe('MbButtonComponent', () => {
  let component: MbButtonComponent;
  let fixture: ComponentFixture<MbButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MbButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
