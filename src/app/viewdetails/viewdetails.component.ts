import { Component, OnInit } from '@angular/core';
import { View } from '../view';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

 
  view:View;
  newView:View;
  degree: string;
  marks: number;
  stream: string;
  college: string;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
   // this.view = this.svc.views[parseInt(this.route.snapshot.paramMap.get('id'))-1];
  }
  viewdetails() {
    this.newView = new View (this.degree, this.marks, this.stream, this.college);
    console.log(this.newView);
   // this.svc.create(this.newView);
    this.reset();
   
    // this.svc.views[this.svc.adds.indexOf(this.view)] = this.view;
    //  console.log(this.route.snapshot.firstChild);
    //  console.log(this.route.snapshot.data);
    //  console.log(this.route.snapshot.paramMap.keys);
   }
   reset() {
    this.degree = "";
    this.marks=0;
    this.stream = "";
    this.college= "";
  }
}
