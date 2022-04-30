import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  private _location: Location;
  private _router: Router;

  constructor() {}

  ngOnInit(): void {}

  goBack() {
    this._router.navigateByUrl('/school');
  }
}
