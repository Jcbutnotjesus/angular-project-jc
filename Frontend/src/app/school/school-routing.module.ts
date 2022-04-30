import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationListComponent } from './pages/education-list/education-list.component';
import { SchoolDetailsComponent } from './pages/school-details/school-details.component';
import { SchoolListComponent } from './pages/school-list/school-list.component';
import { SchoolComponent } from './school.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolComponent,
    children: [
      {
        path: '',
        component: SchoolListComponent,
      },
      {
        path: ':id',
        component: SchoolDetailsComponent,
      },
      {
        path: ':id/education',
        component: SchoolDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolRoutingModule {}
