import { Component, OnInit } from '@angular/core';
import { Planta } from '../models/planta.model';
import { PlantasService } from '../../services/plantas.service';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrl: './plantas-list.component.css',
})
export class PlantasListComponent implements OnInit {
  plantas?: Planta[] = [];
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(private plantaService: PlantasService) {}

  ngOnInit(): void {
    this.loadPlants();
  }

  loadPlants(): void {
    this.plantaService.getAllPlants().subscribe({
      next: (data) => {
        this.plantas = data;
        this.calculateTotals();
      },
      error: (error) => {
        console.error('Error fetching plants', error);
      },
    });
  }

  calculateTotals(): void {
    this.totalInterior =
      this.plantas?.filter((planta) => planta.tipo === 'Interior').length || 0;
    this.totalExterior =
      this.plantas?.filter((planta) => planta.tipo === 'Exterior').length || 0;
  }
}
