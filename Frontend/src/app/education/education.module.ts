import { EducationService } from './services/education.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EducationComponent } from './education.component';
import { EducationListComponent } from './pages/education-list/education-list.component';
import { EducationDetailsComponent } from './pages/education-details/education-details.component';
import { EducationFormComponent } from './components/education-form/education-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { EducationListComponent } from './pages/education-list/education-list.component';

@NgModule({
  declarations: [
    EducationComponent,
    EducationListComponent,
    EducationDetailsComponent,
    EducationFormComponent,
    EducationListComponent,
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  providers: [EducationService, MatDatepickerModule, MatNativeDateModule],
})
export class EducationModule {}
