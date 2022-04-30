import { Education } from '../../../core/models/education';
import { max, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EducationFormData } from 'src/app/core/models/educationFormData';
import { EducationService } from 'src/app/school/services/education.service';
import { EducationFormComponent } from '../../components/school-form/education-form.component';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss'],
})
export class EducationListComponent implements OnInit {
  education$: Observable<Education[]>;
  displayedColumns: string[] = ['id', 'educationName', 'link'];

  //Bidouille
  ids: number[] = [];

  constructor(
    private _educationService: EducationService,
    private _router: Router,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.education$ = this._educationService.get();
  }

  showEducationDetails(education: Education) {
    this._router.navigateByUrl('/education/' + education.id);
  }

  createEducation() {
    const educationFormData: EducationFormData = {
      isUpdateMode: false,
      idToCreate: Math.max(...this.ids) + 1,
    };

    const dialogRef = this._dialog.open(EducationFormComponent, {
      data: educationFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchData();
    });
  }

  setId(id: number) {
    //Bidouille
    this.ids.push(id);
  }
}
