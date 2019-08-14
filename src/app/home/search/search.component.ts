import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { GetDataService } from 'src/app/@core/service/get-data.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  NPI = new FormControl('');
  LexisNexisData;
  private searchTerms = new Subject<string>();

  constructor(
    private route: Router,
    private service: GetDataService,
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.LexisNexisData = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.service.searchbyNPI(term)),
    );
  }
  Search() {
    this.route.navigateByUrl('/home/GoldenRecord/' + this.NPI.value);
  }
}
