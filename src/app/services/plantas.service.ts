import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planta } from '../plantas/models/planta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantasService {
  public baseUrl =
    'https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json';

  constructor(private http: HttpClient) {}

  getAllPlants(): Observable<Planta[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Planta[]>(url);
  }
}
