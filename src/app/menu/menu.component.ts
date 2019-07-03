import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  datein
  dateout
  room
  adult
  child
  name
  email
  message

  
  constructor(private router: Router) { }

     Home(){this.router.navigateByUrl("")};
     About(){this.router.navigateByUrl("About")};
     Contact(){this.router.navigateByUrl("Contact")};
     Feedback(){this.router.navigateByUrl("Feedback")};
     booked(){this.router.navigateByUrl("booked")}
     feedmessage(){this.router.navigateByUrl("feedmessage")}
  ngOnInit() {
  }
    onSubmit() {
      {
        this.router.navigate(['/booked'], {queryParams: {datein: this.datein, dateout: this.dateout, room: this.room, adult: this.adult, child: this.child}});
   
      }  
      
  }
  onClick() {
    {
      this.router.navigate(['/feedmessage'], {queryParams: {name: this.name, email: this.email, message: this.message,}});
 
    }  
  }
}
