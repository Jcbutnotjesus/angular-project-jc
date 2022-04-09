import { environment } from '../../../environments/environment';
import { School } from '../../core/models/school';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { max, Observable } from 'rxjs';

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
