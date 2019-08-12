import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  Search(){
    this.route.navigateByUrl('/home/GoldenRecord');
  }
}
