import { Component, OnInit } from '@angular/core';
import { Add } from '../add';
import { DataService } from '../data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
 
  id: number = 0;
  name: string;
  DOB: Date;
  homeaddress: string;
  phone: number;
  newAdd : Add;
 
  constructor(private svc: DataService) { }
  

  ngOnInit() {
  }
  EnterDetails() {
    ++this.id;
    this.newAdd = new Add (this.id ,this.name, this.DOB, this.homeaddress, this.phone);
    console.log(this.newAdd);
    this.svc.create(this.newAdd);
    this.reset();
  }
  reset() {
    this.name = "";
    this.DOB;
    this.homeaddress = "";
    this.phone = 0;
  }

}
