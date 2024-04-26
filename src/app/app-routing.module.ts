import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantasListComponent } from './plantas/plantas-list/plantas-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'plantas', pathMatch: 'full' },
  { path: 'plantas', component: PlantasListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
