import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Add } from '../add';
import { View } from '../view';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  adds: Add[]=[];
  views: View[]=[];
  constructor(private svc:DataService) { }

  ngOnInit() {
    this.adds =  this.svc.adds;
    this.views =  this.svc.views;
  }

}
