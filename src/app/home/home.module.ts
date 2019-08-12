import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { GoldenRecordComponent } from './golden-record/golden-record.component';
import { SearchComponent } from './search/search.component';
import { LogComponent } from './log/log.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryLexisNexisDataService } from '../@core/service/in-memory-LexisNexisdata.service';
import { InMemoryNPPESDataService } from '../@core/service/in-memory-NPPESdata.service';
import { InMemoryEchoDataService } from '../@core/service/in-memory-echo-data.service';
import { InMemoryQNXTDataService } from '../@core/service/in-memory-qnxtdata.service';



@NgModule({
  declarations: [HomeComponent, GoldenRecordComponent, SearchComponent, LogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatTreeModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryLexisNexisDataService, { dataEncapsulation: false }
    )
  ]
})
export class HomeModule { }