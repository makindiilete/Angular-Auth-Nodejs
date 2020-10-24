import { Component, OnInit } from '@angular/core';
import { Events } from '../../Models/event';
import { EventsService } from '../../Services/events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css'],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = [];
  unAuthorized: boolean;

  constructor(
    private _eventsService: EventsService,
    private _router: Router,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this._eventsService.getSpecialEvents().subscribe(
      (data) => (this.specialEvents = data),
      (error) => {
        //if we get an error, we check if its 401 auth error, we redirect to login page
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this._router.navigate(['/login']);
          }
          if (error.status === 500) {
            this._toastr.error('An Error Occurred!', 'Oops!');
            this._router.navigateByUrl('/login');
          }
        }
      }
    );
  }
}
