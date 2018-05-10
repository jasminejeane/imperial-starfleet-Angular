import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { AppRoutingModule } from '../app-routing.module'; // replace RouterModule with this import statement

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule 
  ],
  declarations: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ],
  exports: [
    DeathSquareComponent
  ]
})
export class InternalDefensesModule { }
