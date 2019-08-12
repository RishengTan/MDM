import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { GoldenRecordComponent } from './golden-record/golden-record.component';
import { SearchComponent } from './search/search.component';
import { LogComponent } from './log/log.component';


const routes: Routes = [
  {path:'home', 
   component: HomeComponent,
   children:[
       {
        path:'',
        component:SearchComponent
    },
       {
        path:'log',
        component:LogComponent
    },
       {
        path:'GoldenRecord',
        component:GoldenRecordComponent
    }
   ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }