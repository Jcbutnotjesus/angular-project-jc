import { School } from '../../../core/models/school';
import { max, Observable, of } from 'rxjs';
import { SchoolService } from '../../services/school.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SchoolFormComponent } from '../../components/school-form/school-form.component';
import { SchoolFormData } from 'src/app/core/models/schoolFormData';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss'],
})
export class SchoolListComponent implements OnInit {
  school$: Observable<School[]>;
  displayedColumns: string[] = ['id', 'schoolName', 'link'];

  //Bidouille
  ids: number[] = [];

  constructor(
    private _schoolService: SchoolService,
    private _router: Router,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.school$ = this._schoolService.get();
  }

  showSchoolDetails(school: School) {
    this._router.navigateByUrl('/school/' + school.id);
  }

  createSchool() {
    const schoolFormData: SchoolFormData = {
      isUpdateMode: false,
      idToCreate: Math.max(...this.ids) + 1,
    };

    const dialogRef = this._dialog.open(SchoolFormComponent, {
      data: schoolFormData,
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
