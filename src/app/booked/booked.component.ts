import { Component, OnInit } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.scss']
})
export class BookedComponent implements OnInit {

  constructor(private booked: Router) {} 
  
  submit() { 

    this.booked.navigateByUrl("booked");
  }
  ngOnInit() {
  
  }

}
