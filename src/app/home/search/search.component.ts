import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { GetDataService } from 'src/app/@core/service/get-data.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith, map, concatMap } from 'rxjs/operators';
import { ProviderData } from 'src/app/@core/mock/provider-data';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  NPI = new FormControl('');
  LastName = new FormControl('');
  LexisNexisData: ProviderData[] = [];
  LexisNexisDataLastName$: Observable<ProviderData[]>;


  constructor(
    private route: Router,
    private service: GetDataService,
  ) { }

  ngOnInit() {
    this.service.getLexisNexis().subscribe(
      res => this.LexisNexisData = res
    );

    this.LexisNexisDataLastName$ = this.LastName.valueChanges.pipe(
      distinctUntilChanged(),
      concatMap(res => this.service.getLexisNexisByLastName(res)),
    );
  }

  Search() {
    if (this.NPI.value !== '') {
      this.route.navigateByUrl('/home/GoldenRecord/NPI/' + this.NPI.value);
    } else if (this.NPI.value === '' && this.LastName.value !== '') {
      this.route.navigateByUrl('/home/GoldenRecord/LastName/' + this.LastName.value);
    }
  }
}
