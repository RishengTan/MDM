import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { Route, Router,ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/@core/service/get-data.service';
import { ProviderData } from 'src/app/@core/mock/provider-data';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}







const TREE_DATA: FoodNode[] = [
  {
    name: 'History Log',
    children: [
      {
        name: 'Individual',
        children: [
          { name: 'NPI' },
          { name: 'DOB' },
          { name: 'Specialty' },
        ]
      }, {
        name: 'Organization',
        children: [
          {
            name: 'NY',
            children: [
              { name: 'Montefiore' },
              { name: 'NYU' },
            ]
          }, {
            name: 'NJ',
            children: [
              { name: 'St.John' },
              { name: 'Mount Sainai' },
            ]
          },
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'GoldenRecord',
  templateUrl: './golden-record.component.html',
  styleUrls: ['./golden-record.component.sass']
})
export class GoldenRecordComponent implements OnInit {
  BusinessKey = new FormControl('',/* [Validators.required]*/);
  provid = new FormControl('',/* [Validators.required]*/);
  EchoDrid = new FormControl('',/* [Validators.required]*/);
  FirstName = new FormControl('', [Validators.required]);
  LastName = new FormControl('', [Validators.required]);
  MiddleName = new FormControl('',/* [Validators.required]*/);
  ProviderFullName = new FormControl('',/* [Validators.required]*/);
  Provtype = new FormControl('',/* [Validators.required]*/);
  ProviderTypeDesc = new FormControl('',/* [Validators.required]*/);
  Claimtype = new FormControl('',/* [Validators.required]*/);
  Obs_claimtype = new FormControl('',/* [Validators.required]*/);
  LicenseNumber = new FormControl('',/* [Validators.required]*/);
  DOB = new FormControl('',/* [Validators.required]*/);
  SSN = new FormControl('',/* [Validators.required]*/);
  NPI = new FormControl('', [Validators.required]);
  EmploymentCode = new FormControl('',/* [Validators.required]*/);
  Specialtycode = new FormControl('',/* [Validators.required]*/);
  SpecialtyDescription = new FormControl('',/* [Validators.required]*/);
  Profdesig = new FormControl('',/* [Validators.required]*/);
  PracAddressType = new FormControl('',/* [Validators.required]*/);
  PracAddressTypeDesc = new FormControl('',/* [Validators.required]*/);
  Addr = new FormControl('',/* [Validators.required]*/);
  Addr2 = new FormControl('',/* [Validators.required]*/);
  City = new FormControl('',/* [Validators.required]*/);
  State = new FormControl('',/* [Validators.required]*/);
  Zip = new FormControl('',/* [Validators.required]*/);
  Phone = new FormControl('',/* [Validators.required]*/);
  Fax = new FormControl('',/* [Validators.required]*/);
  EffDate = new FormControl('',/* [Validators.required]*/);
  TermDate = new FormControl('',/* [Validators.required]*/);
  BillAddressType = new FormControl('',/* [Validators.required]*/);
  BillAddressTypeDesc = new FormControl('',/* [Validators.required]*/);
  BillAddr = new FormControl('',/* [Validators.required]*/);
  Billaddr2 = new FormControl('',/* [Validators.required]*/);
  BillCity = new FormControl('',/* [Validators.required]*/);
  Billstate = new FormControl('',/* [Validators.required]*/);
  Billzip = new FormControl('',/* [Validators.required]*/);
  Billphone = new FormControl('',/* [Validators.required]*/);
  Billfax = new FormControl('',/* [Validators.required]*/);
  BillEffdate = new FormControl('',/* [Validators.required]*/);
  BillTermdate = new FormControl('',/* [Validators.required]*/);
  TaxID = new FormControl('',/* [Validators.required]*/);
  QNXTID = new FormControl('',/* [Validators.required]*/);
  Source = new FormControl('',/* [Validators.required]*/);
  echoid = new FormControl('',/* [Validators.required]*/);
  status = new FormControl('',/* [Validators.required]*/);
  EchoIPAStatusCode = new FormControl('',/* [Validators.required]*/);
  EchoIPAStatusDescr = new FormControl('',/* [Validators.required]*/);
  EchoHospStatusCode = new FormControl('',/* [Validators.required]*/);
  EchoHOSPStatusDescr = new FormControl('',/* [Validators.required]*/);
  Echo_ACO_Active = new FormControl('',/* [Validators.required]*/);
  EchoIPAStatus = new FormControl('',/* [Validators.required]*/);
  EchoHOSPStatus = new FormControl('',/* [Validators.required]*/);
  Level1 = new FormControl('',/* [Validators.required]*/);
  Level2 = new FormControl('',/* [Validators.required]*/);
  Level3 = new FormControl('',/* [Validators.required]*/);
  Email = new FormControl('',/* [Validators.required]*/);
  TaxonomyCode = new FormControl('',/* [Validators.required]*/);
  spectype = new FormControl('',/* [Validators.required]*/);
  OrgName= new FormControl('',/* [Validators.required]*/);


  LastNameSource = new FormControl('LexisNexis',/* [Validators.required]*/);
  MiddleNameSource = new FormControl('LexisNexis',/* Validators.required*/);
  FirstNameSource = new FormControl('LexisNexis',/* Validators.required*/);
  NPISource = new FormControl('LexisNexis', /*Validators.required*/);
  DOBSource = new FormControl('LexisNexis',/* Validators.required*/);
  BillingAddressSource = new FormControl('LexisNexis',/* Validators.required*/);
  SpecialtySource = new FormControl('LexisNexis', /*Validators.required*/);
  ZipCodeSource = new FormControl('LexisNexis',/*[Validators.required]*/);


  //SourceProviderData=[{LastName:'1346300860'},{LastName:'1346300860'}];
  LexisNexisData;
  opened: boolean = true;


  constructor(private router: Router, private service: GetDataService,private route: ActivatedRoute) {}


  ngOnInit() {
    this.dataSource.data = TREE_DATA;
    this.getLexisNexisData();
   
  }

  
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  getLexisNexisData(): void {
    const NPI = this.route.snapshot.paramMap.get('NPI');
    this.service.searchbyNPI(NPI.toString())
      .subscribe(RES => this.LexisNexisData=RES);
  }
  Logout() {
    this.router.navigateByUrl('/login');
  }

  /*updateMiddleName(middlename, Source) {
    this.MiddleName.setValue(middlename);
    this.MiddleNameSource.setValue(Source);
  }
  updateFirstName(middlename, Source) {
    this.FirstName.setValue(middlename);
    this.FirstNameSource.setValue(Source);
  }
  updateNPI(middlename, Source) {
    this.NPI.setValue(middlename);
    this.NPISource.setValue(Source);
  }
  updateDOB(middlename, Source) {
    this.DOB.setValue(middlename);
    this.DOBSource.setValue(Source);
  }
  updateSpecialty(middlename, Source) {
    this.Specialty.setValue(middlename);
    this.SpecialtySource.setValue(Source);
  }
  updateZipCode(middlename, Source) {
    this.ZipCode.setValue(middlename);
    this.ZipCodeSource.setValue(Source);
  }
  updateBillingAddress(middlename, Source) {
    this.BillingAddress.setValue(middlename);
    this.BillingAddressSource.setValue(Source);
  }
  updateLastName(middlename, Source) {
    this.LastName.setValue(middlename);
    this.LastNameSource.setValue(Source);
  }*/

  //updateBusinessKey(middlename, Source) {
  //  this.BusinessKey.setValue('middlename');
    //this.LastNameSource.setValue(Source);
//}

}
