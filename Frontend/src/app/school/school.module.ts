import { SchoolService } from './services/school.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SchoolComponent } from './school.component';
import { SchoolListComponent } from './pages/school-list/school-list.component';
import { SchoolDetailsComponent } from './pages/school-details/school-details.component';
import { SchoolFormComponent } from './components/school-form/school-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    SchoolComponent,
    SchoolListComponent,
    SchoolDetailsComponent,
    SchoolFormComponent,
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [SchoolService, MatDatepickerModule, MatNativeDateModule],
})
export class SchoolModule {}
