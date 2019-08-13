import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/@core/service/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-goldenrecord-detail',
  templateUrl: './goldenrecord-detail.component.html',
  styleUrls: ['./goldenrecord-detail.component.sass']
})
export class GoldenrecordDetailComponent implements OnInit {
  LexisNexisData;

  constructor(
    private service: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.getLexisNexisData();
  }

  edit(){
    const NPI = this.route.snapshot.paramMap.get('NPI');
    this.router.navigateByUrl('/home/GoldenRecord/' + NPI + '/edit');
  }
  getLexisNexisData(): void {
    const NPI = this.route.snapshot.paramMap.get('NPI');
    this.service.searchbyNPI(NPI.toString())
      .subscribe(RES => this.LexisNexisData = RES);
  }
}
