import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedmessage',
  templateUrl: './feedmessage.component.html',
  styleUrls: ['./feedmessage.component.scss']
})
export class FeedmessageComponent implements OnInit {

  nme;
  mail;
  cellnumber;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.nme = params.name
      console.log(params);//this.nme
      this.mail = params.email
      console.log(params);//this.mail
      this.cellnumber = params.cellnumber
      console.log(params);//this.cellnumber
    })
  }

}
