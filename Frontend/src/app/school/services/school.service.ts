import { environment } from '../../../environments/environment';
import { School } from '../../core/models/school';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { max, Observable } from 'rxjs';
import { Education } from 'src/app/core/models/education';

@Injectable()
export class SchoolService {
  private readonly schoolPath: string = '/school';

  constructor(private _http: HttpClient) {}

  get(): Observable<School[]> {
    return this._http.get<School[]>(
      `${environment.apiBaseUrl}${this.schoolPath}`
    );
  }

  getById(id: number): Observable<School> {
    return this._http.get<School>(
      `${environment.apiBaseUrl}${this.schoolPath}/${id}`
    );
  }

  getEducationBySchool(id: number): Observable<Education[]> {
    return this._http.get<Education[]>(
      `${environment.apiBaseUrl}${this.schoolPath}/${id}/education`
    );
  }

  create(school: School): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.schoolPath}`,
      school
    );
  }

  update(school: School): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.schoolPath}/${school.id}`,
      school
    );
  }

  delete(id: number): Observable<string> {
    return this._http.delete<string>(
      `${environment.apiBaseUrl}${this.schoolPath}/${id}`
    );
  }
}
