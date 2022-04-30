import { Education } from '../../../core/models/education';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducationFormData } from 'src/app/core/models/educationFormData';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EducationService } from 'src/app/school/services/education.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss'],
})
export class EducationFormComponent implements OnInit {
  isUpdateMode: boolean;
  educationForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _educationService: EducationService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EducationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EducationFormData
  ) {
    this.isUpdateMode = this.data.isUpdateMode;
  }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  initFormBuilder() {
    this.educationForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.educationToUpdate.id
          : this.data.idToCreate,
        Validators.required,
      ],
      educationName: [
        this.data.isUpdateMode ? this.data.educationToUpdate.educationName : '',
        Validators.required,
      ],
      link: [
        this.data.isUpdateMode ? this.data.educationToUpdate.link : '',
        Validators.required,
      ],
      keyWords: [
        this.data.isUpdateMode ? this.data.educationToUpdate.keyWords : '',
        Validators.required,
      ],
      schoolId: [
        this.data.isUpdateMode ? this.data.educationToUpdate.schoolId : '',
        Validators.required,
      ],
    });
  }

  closeForm(id?: number) {
    this.educationForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(education: Education) {
    if (this.educationForm.valid) {
      if (this.data.isUpdateMode) {
        // update
        this._educationService.update(education).subscribe((response) => {
          this.closeForm(education.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        // create
        this._educationService.create(education).subscribe((response) => {
          this.closeForm(education.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
    }
  }
}
