import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSaudeComponent } from './page-saude.component';

describe('PageSaudeComponent', () => {
  let component: PageSaudeComponent;
  let fixture: ComponentFixture<PageSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSaudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
