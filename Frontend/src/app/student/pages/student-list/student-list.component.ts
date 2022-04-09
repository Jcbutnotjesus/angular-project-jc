import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from '../../services/student.service';

export interface Students {
  firstName: string;
  lastName: string;
  class: string;
  email: string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [StudentService],
})
export class StudentListComponent implements OnInit {
  constructor(private _studentService: StudentService) {}
  students$: Observable<Student[]>;
  displayedColumns: string[] = ['firstName', 'lastName', 'class', 'email'];
  dataSource: Observable<Student[]>;

  ngOnInit(): void {
    this.students$ = this._studentService.getAllStudent();
    this.dataSource = this.students$;
  }
}
