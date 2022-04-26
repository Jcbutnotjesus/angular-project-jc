import { environment } from '../../../environments/environment';
import { Education } from '../../core/models/education';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { max, Observable } from 'rxjs';

@Injectable()
export class SchoolService {
  private readonly educationPath: string = '/education';

  constructor(private _http: HttpClient) {}

  get(): Observable<Education[]> {
    return this._http.get<Education[]>(
      `${environment.apiBaseUrl}${this.educationPath}`
    );
  }

  getById(id: number): Observable<Education> {
    return this._http.get<Education>(
      `${environment.apiBaseUrl}${this.educationPath}/${id}`
    );
  }

  create(education: Education): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.educationPath}`,
      education
    );
  }

  update(education: Education): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.educationPath}/${education.id}`,
      education
    );
  }

  delete(id: number): Observable<string> {
    return this._http.delete<string>(
      `${environment.apiBaseUrl}${this.educationPath}/${id}`
    );
  }
}
