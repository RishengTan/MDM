import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { GetDataService } from 'src/app/@core/service/get-data.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith, map } from 'rxjs/operators';
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
  private searchTerms = new Subject<string>();


  constructor(
    private route: Router,
    private service: GetDataService,
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.service.getLexisNexis().subscribe(
      res => this.LexisNexisData = res
    );
    /*this.LexisNexisDataLastName$ = this.searchTerms.pipe(
      debounceTime(0),
      distinctUntilChanged(),
      switchMap((term: string) => this.service.getLexisNexisByLastName(term),
      ),
    );*/

    this.LexisNexisDataLastName$ = this.LastName.valueChanges.pipe(
      distinctUntilChanged(),
      switchMap(res=>this.service.getLexisNexisByLastName(res)),
    );
  }

  Search() {
    this.route.navigateByUrl('/home/GoldenRecord/' + this.NPI.value);
  }

}
