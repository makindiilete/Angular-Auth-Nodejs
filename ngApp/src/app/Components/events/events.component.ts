import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../Services/events.service';
import { Events } from '../../Models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  eventsData: Events;
  constructor(private _eventsService: EventsService) {}

  ngOnInit(): void {
    this._eventsService.getEvents().subscribe(
      (data) => (this.eventsData = data),
      (error) => console.log('Error ', error)
    );
  }
}
