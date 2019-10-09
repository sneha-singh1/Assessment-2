import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PersonalComponent } from './personal/personal.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [
{path:'', pathMatch:'full', component:HomeComponent},
{path:'add', component:PersonalComponent},
{path:'list',component:ListComponent},
{path:'list/edit/:id', component:EditComponent},
{path:'list/delete/:id', component:DeleteComponent},
{path:'list/viewdetails/:id' , component:ViewdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
