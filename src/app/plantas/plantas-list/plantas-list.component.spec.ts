import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasListComponent } from './plantas-list.component';
import { of } from 'rxjs';
import { PlantasService } from '../../services/plantas.service';

class MockPlantasService {
  getAllPlants() {
    return of([
      {
        nombre_comun: 'Rose',
        nombre_cientifico: 'Rosa rubiginosa',
        tipo: 'Exterior',
        altura_maxima: 2,
        clima: 'Templado',
        sustrato_siembra: 'Arcilloso',
      },
      {
        nombre_comun: 'Fern',
        nombre_cientifico: 'Pteridium aquilinum',
        tipo: 'Interior',
        altura_maxima: 0.5,
        clima: 'Húmedo',
        sustrato_siembra: 'Turba',
      },
      {
        nombre_comun: 'Cactus',
        nombre_cientifico: 'Carnegiea gigantea',
        tipo: 'Interior',
        altura_maxima: 12,
        clima: 'Seco',
        sustrato_siembra: 'Arenoso',
      },
    ]);
  }
}

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantasListComponent],
      providers: [{ provide: PlantasService, useClass: MockPlantasService }],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with 3 rows plus the header when 3 plants are loaded', () => {
    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('tr');
    const expected = rows.length - 1; //-1 => removing the footer row
    expect(expected).toEqual(4);
  });
});
