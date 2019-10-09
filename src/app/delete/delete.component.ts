import { Component, OnInit } from '@angular/core';
import { Add } from '../add';
import { View } from '../view';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  add:Add;
  constructor(private svc:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.add = this.svc.adds[parseInt(this.route.snapshot.paramMap.get('id')) - 1];
  }

  deleteBook(){
    this.svc.adds.splice(this.svc.adds.indexOf(this.add), 1);
  }

}