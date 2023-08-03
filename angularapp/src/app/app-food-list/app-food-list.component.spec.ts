import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFoodListComponent } from './app-food-list.component';

describe('AppFoodListComponent', () => {
  let component: AppFoodListComponent;
  let fixture: ComponentFixture<AppFoodListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppFoodListComponent]
    });
    fixture = TestBed.createComponent(AppFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
