import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/@core/service/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderData } from 'src/app/@core/mock/provider-data';

@Component({
  selector: 'app-goldenrecord-bylastname',
  templateUrl: './goldenrecord-bylastname.component.html',
  styleUrls: ['./goldenrecord-bylastname.component.sass']
})
export class GoldenrecordBylastnameComponent implements OnInit {
  LexisNexisData:ProviderData[];

  constructor(
    private service: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.getLexisNexisDatabyLastName();
  }

  edit(NPI){
    const LastName = this.route.snapshot.paramMap.get('LastName');
    this.router.navigateByUrl(`/home/GoldenRecord/${NPI}/edit`);
  }
  getLexisNexisDatabyLastName(): void {
    const LastName = this.route.snapshot.paramMap.get('LastName');
    this.service.getLexisNexisByLastName(LastName.toString())
      .subscribe(RES => this.LexisNexisData = RES);
  }
}
