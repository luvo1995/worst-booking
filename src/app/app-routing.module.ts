import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BookedComponent } from './booked/booked.component';
import { FeedmessageComponent } from './feedmessage/feedmessage.component';

const routes: Routes = [{path: "", component:MenuComponent, children:[
{path: "", component:HomeComponent},  
  {path: "about", component:AboutComponent}, 
  {path: "contact", component:ContactComponent},
  {path: "feedback", component:FeedbackComponent},
  {path: "rooms", component:RoomsComponent},
]},{path: "booked", component:BookedComponent},
   {path: "feedmessage", component:FeedmessageComponent}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
