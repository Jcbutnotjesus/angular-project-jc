import { SchoolService } from '../../services/school.service';
import { School } from '../../../core/models/school';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolFormData } from 'src/app/core/models/schoolFormData';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss'],
})
export class SchoolFormComponent implements OnInit {
  isUpdateMode: boolean;
  schoolForm: FormGroup;

  classes: string[] = ['LP-DIM-APP', 'LP-DIM-FI'];
  constructor(
    private _formBuilder: FormBuilder,
    private _schoolService: SchoolService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<SchoolFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SchoolFormData
  ) {
    this.isUpdateMode = this.data.isUpdateMode;
  }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  initFormBuilder() {
    this.schoolForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.schoolToUpdate.id
          : this.data.idToCreate,
        Validators.required,
      ],
      schoolName: [
        this.data.isUpdateMode ? this.data.schoolToUpdate.schoolName : '',
        Validators.required,
      ],
      link: [
        this.data.isUpdateMode ? this.data.schoolToUpdate.link : '',
        Validators.required,
      ],
    });
  }

  closeForm(id?: number) {
    this.schoolForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(school: School) {
    if (this.schoolForm.valid) {
      if (this.data.isUpdateMode) {
        // update
        this._schoolService.update(school).subscribe((response) => {
          this.closeForm(school.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        // create
        this._schoolService.create(school).subscribe((response) => {
          this.closeForm(school.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
    }
  }
}
