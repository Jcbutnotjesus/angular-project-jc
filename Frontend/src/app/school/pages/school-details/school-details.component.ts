import { SchoolFormData } from '../../../core/models/schoolFormData';
import { SchoolFormComponent } from '../../components/school-form/school-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from '../../services/school.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from 'src/app/core/models/school';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Education } from 'src/app/core/models/education';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss'],
})
export class SchoolDetailsComponent implements OnInit {
  school$: Observable<School>;
  education$: Observable<Education[]>;
  displayedColumns: string[] = ['id', 'educationName', 'link', 'keyWords'];

  constructor(
    private _schoolService: SchoolService,
    private _activatedRoute: ActivatedRoute,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _location: Location
  ) {}

  ids: number[] = [];

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.fetchData(params['id']);
      this.fetchDataEducation(params['id']);
    });
  }

  fetchData(id: number) {
    this.school$ = this._schoolService.getById(id);
  }

  fetchDataEducation(id: number) {
    this.education$ = this._schoolService.getEducationBySchool(id);
  }

  updateSchool(school: School) {
    const schoolFormData: SchoolFormData = {
      isUpdateMode: true,
      schoolToUpdate: school,
    };

    const dialogRef = this._dialog.open(SchoolFormComponent, {
      data: schoolFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchData(result);
      }
    });
  }

  deleteSchool(id: number) {
    this._schoolService.delete(id).subscribe((response) => {
      this._snackBar.open(response, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/school');
    });
  }

  deleteEducation(id: number) {
    this._schoolService.delete(id).subscribe((response) => {
      this._snackBar.open(response, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/school');
    });
  }

  showEducationDetails(education: Education) {
    this._router.navigateByUrl('/education/' + education.id);
  }

  setId(id: number) {
    //Bidouille
    this.ids.push(id);
  }

  goBack() {
    this._location.back();
  }
}
