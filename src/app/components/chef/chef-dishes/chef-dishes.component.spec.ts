import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDishesComponent } from './chef-dishes.component';

describe('ChefDishesComponent', () => {
  let component: ChefDishesComponent;
  let fixture: ComponentFixture<ChefDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
