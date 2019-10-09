import { Injectable } from '@angular/core';
import { Add } from './add';
import { View } from './view';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 adds:Add[] = [] 
 id : number=1;
  views: import("c:/Users/ssingh722/Documents/Angular/Assesment2/src/app/view").View[];
   constructor() { }

   create(b:Add){
     b.id=this.id;
     ++this.id;
     this.adds.push(b);
     
   }
}
