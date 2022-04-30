import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationListComponent } from './pages/education-list/education-list.component';
import { EducationDetailsComponent } from './pages/education-details/education-details.component';
import { EducationListComponent } from './pages/education-list/education-list.component';
import { EducationComponent } from './education.component';

const routes: Routes = [
  {
    path: '',
    component: EducationComponent,
    children: [
      {
        path: '',
        component: EducationListComponent,
      },
      {
        path: ':id',
        component: EducationDetailsComponent,
      },
      {
        path: ':id/education',
        component: EducationDetailsComponent,
      },
      {
        path: '/education',
        component: EducationListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationRoutingModule {}
