import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDicasComponent } from './item-dicas.component';

describe('ItemDicasComponent', () => {
  let component: ItemDicasComponent;
  let fixture: ComponentFixture<ItemDicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
