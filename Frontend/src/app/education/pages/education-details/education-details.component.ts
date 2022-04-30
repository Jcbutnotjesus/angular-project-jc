import { EducationFormData } from '../../../core/models/educationFormData';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/core/models/education';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { EducationService } from 'src/app/school/services/education.service';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss'],
})
export class EducationDetailsComponent implements OnInit {
  education$: Observable<Education>;
  displayedColumns: string[] = ['id', 'educationName', 'link', 'keyWords'];

  constructor(
    private _educationService: EducationService,
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
    });
  }

  fetchData(id: number) {
    this.education$ = this._educationService.getById(id);
  }

  // updateEducation(education: Education) {
  //   const educationFormData: EducationFormData = {
  //     isUpdateMode: true,
  //     educationToUpdate: education,
  //   };

  // const dialogRef = this._dialog.open(EducationFormComponent, {
  //   data: educationFormData,
  // });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.fetchData(result);
  //     }
  //   });
  // }

  deleteEducation(id: number) {
    this._educationService.delete(id).subscribe((response) => {
      this._snackBar.open(response, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/education');
    });
  }

  showEdcuDetails(education: Education) {
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
