import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
<<<<<<< Updated upstream
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  {
    path: 'students',
    loadChildren: () =>
      import('./student/student.module').then((e) => e.StudentModule),
=======
  {
    path: '',
    redirectTo: 'school',
    pathMatch: 'full',
  },
  {
    path: 'school',
    loadChildren: () =>
      import('./school/school.module').then((m) => m.SchoolModule),
>>>>>>> Stashed changes
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
