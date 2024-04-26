import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasListComponent } from './plantas-list.component';

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
