import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReachMeComponent } from 'src/app/feature/pages';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ReachMeComponent,
  },
];

@NgModule({
  declarations: [
    ReachMeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReachMeModule { }
