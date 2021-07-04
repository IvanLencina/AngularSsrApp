import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

const routes = [
  {
    path: '',
    component: MapComponent
  }
]


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MapModule { }
