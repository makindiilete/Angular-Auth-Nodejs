import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { Events } from '../Models/event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private _eventsUrl = 'http://localhost:3000/api/events';
  private _specialEvents = 'http://localhost:3000/api/special';
  constructor(private _http: HttpClient) {}

  getEvents() {
    return this._http.get<any>(this._eventsUrl);
  }

  getSpecialEvents() {
    return this._http.get<any>(this._specialEvents);
  }
}
