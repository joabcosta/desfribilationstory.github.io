import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBListaComponent } from './page-b-lista.component';

describe('PageBListaComponent', () => {
  let component: PageBListaComponent;
  let fixture: ComponentFixture<PageBListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
