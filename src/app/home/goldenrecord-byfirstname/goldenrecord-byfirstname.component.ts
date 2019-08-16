import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/@core/service/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderData } from 'src/app/@core/mock/provider-data';

@Component({
  selector: 'app-goldenrecord-byfirstname',
  templateUrl: './goldenrecord-byfirstname.component.html',
  styleUrls: ['./goldenrecord-byfirstname.component.sass']
})
export class GoldenrecordByfirstnameComponent implements OnInit {
  LexisNexisData:ProviderData[];

  constructor(
    private service: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.getLexisNexisDatabyFirstName();
  }

  edit(){
    const FirstName = this.route.snapshot.paramMap.get('FirstName');
    this.router.navigateByUrl('/home/GoldenRecord/' + FirstName + '/edit');
  }
  getLexisNexisDatabyFirstName(): void {
    const FirstName = this.route.snapshot.paramMap.get('FirstName');
    this.service.getLexisNexisByFirstName(FirstName.toString())
      .subscribe(RES => this.LexisNexisData = RES);
  }
}
