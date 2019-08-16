import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/@core/service/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderData } from 'src/app/@core/mock/provider-data';

@Component({
  selector: 'app-goldenrecord-detail',
  templateUrl: './goldenrecord-detail.component.html',
  styleUrls: ['./goldenrecord-detail.component.sass']
})
export class GoldenrecordDetailComponent implements OnInit {
  LexisNexisData:ProviderData[];

  constructor(
    private service: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.getLexisNexisDatabyNPI();
  }

  edit(){
    const NPI = this.route.snapshot.paramMap.get('NPI');
    this.router.navigateByUrl('/home/GoldenRecord/' + NPI + '/edit');
  }
  getLexisNexisDatabyNPI(): void {
    const NPI = this.route.snapshot.paramMap.get('NPI');
    this.service.searchbyNPI(NPI.toString())
      .subscribe(RES => this.LexisNexisData = RES);
  }
}
