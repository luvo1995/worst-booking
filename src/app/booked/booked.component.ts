import { Component, OnInit } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.scss']
})
export class BookedComponent implements OnInit {

  din;
  dout;
  rum;
  adlt;
  chld;

  constructor(private route: ActivatedRoute) { } 
  
 
  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.din = params.datein
      console.log(params);//this.din
      this.dout = params.dateout
      console.log(params);//this.dout
      this.rum = params.room
      console.log(params);//this.rum
      this.adlt = params.adult
      console.log(params);//this.adlt
      this.chld= params.child
      console.log(params)//this.chld
    })
  }
  
 }
