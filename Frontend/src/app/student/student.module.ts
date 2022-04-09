import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentFormComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [StudentService],
})
export class StudentModule {}
