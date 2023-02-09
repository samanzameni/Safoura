import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from 'src/app/feature/layouts';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/introduction', pathMatch: 'full' },
      {
        path: 'introduction',
        loadChildren: () =>
          import('src/app/feature/modules/introduction.module').then(
            (module) => module.IntroductionModule
          ),
      },
      {
        path: 'about-me',
        loadChildren: () =>
          import('src/app/feature/modules/about-me.module').then(
            (module) => module.AboutMeModule
          ),
      },
      {
        path: 'reach-me',
        loadChildren: () =>
          import('src/app/feature/modules/reach-me.module').then(
            (module) => module.ReachMeModule
          ),
      },
      {
        path: 'service',
        loadChildren: () =>
          import('src/app/feature/modules/service.module').then(
            (module) => module.ServiceModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
