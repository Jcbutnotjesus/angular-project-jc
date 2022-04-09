<<<<<<< Updated upstream:src/app/student/pages/student-details/student-details.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
=======
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

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss'],
})
export class SchoolDetailsComponent implements OnInit {
  school$: Observable<School>;
  constructor(
    private _schoolService: SchoolService,
    private _activatedRoute: ActivatedRoute,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.fetchData(params['id']);
    });
  }

  fetchData(id: number) {
    this.school$ = this._schoolService.getById(id);
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
>>>>>>> Stashed changes:src/app/school/pages/school-details/school-details.component.ts
  }

}
