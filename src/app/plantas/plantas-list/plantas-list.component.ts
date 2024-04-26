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

  constructor(private plantaService: PlantasService) {}

  ngOnInit(): void {
    this.loadPlants();
  }

  loadPlants(): void {
    this.plantaService.getAllPlants().subscribe({
      next: (data) => {
        this.plantas = data;
      },
      error: (error) => {
        console.error('Error fetching plants', error);
      },
    });
  }
}
