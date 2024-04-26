import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PlantasService } from './plantas.service';
import { Planta } from '../plantas/models/planta.model';

describe('PlantasService', () => {
  let service: PlantasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantasService],
    });
    service = TestBed.inject(PlantasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding http calls
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all plants from the API via GET', () => {
    const dummyPlants: Planta[] = [
      {
        nombre_comun: 'Rose',
        nombre_cientifico: 'Rosa rubiginosa',
        tipo: 'Shrub',
        altura_maxima: 2,
        clima: 'Temperate',
        sustrato_siembra: 'Loam',
      },
      {
        nombre_comun: 'Lily',
        nombre_cientifico: 'Lilium',
        tipo: 'Flower',
        altura_maxima: 1.5,
        clima: 'Moderate',
        sustrato_siembra: 'Sandy',
      },
    ];

    service.getAllPlants().subscribe((plants) => {
      expect(plants.length).toBe(2);
      expect(plants).toEqual(dummyPlants);
    });

    const request = httpMock.expectOne(service.baseUrl);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPlants);
  });
});
