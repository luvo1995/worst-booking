import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  datein: DataCue;
  dateout: DataView;
  Room: string;
  Adult: string;
  Child: string;
  
  
  constructor(private route: ActivatedRoute) { }

     //Home(){this.router.navigateByUrl("")};
     //About(){this.router.navigateByUrl("About")};
     //Contact(){this.router.navigateByUrl("Contact")};
     //Feedback(){this.router.navigateByUrl("Feedback")};
     //booked(){this.router.navigateByUrl("booked")}
  
  ngOnInit() {
  }
  onSubmit() {
    this.route.queryParams.subscribe(params => {
      this.datein = params.datein;
      this.dateout = params.dateout;
      this.Room = params.Rooms;
      this.Adult = params.Adult;
      this.Child = params.Child;
    
      console.log(this.datein);
      console.log(this.dateout);
      console.log(this.Room);
      console.log(this.Adult);
      console.log(this.Child);
    
    });
  }
}
