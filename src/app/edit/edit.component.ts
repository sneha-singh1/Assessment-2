import { Component, OnInit } from '@angular/core';
import { Add } from '../add';
import { View } from '../view';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  add:Add;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.add = this.svc.adds[parseInt(this.route.snapshot.paramMap.get('id')) - 1];
  }

  edit() {
   this.svc.adds[this.svc.adds.indexOf(this.add)] = this.add;
    console.log(this.route.snapshot.firstChild);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.paramMap.keys);
  }

}
