import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { GetDataService } from 'src/app/@core/service/get-data.service';

declare var $: any;

interface FoodNode {
  name: string;
  children?: FoodNode[];
}


interface Provider {
  Source: string;
  LastName: string;
  MiddleName: string;
  FirstName: string;
  NPI: string;
  DOB: string;
  BillingAddress: string;
  Specialty: string;
  ZipCode: number;
}
interface Lexis {
  Source: string;
  LastName: string;
  MiddleName: string;
  FirstName: string;
  NPI: string;
  DOB: string;
  BillingAddress: string;
  Specialty: string;
  ZipCode: number;
}

const LexisNexis: Lexis[] = [
  {
    Source: 'LexisNexis',
    LastName: 'Lu',
    MiddleName: 'Null',
    FirstName: 'Kay',
    NPI: '779693442',
    DOB: '07/07/1996',
    BillingAddress: '123 Boston',
    Specialty: 'Brain Surgeon',
    ZipCode: 11212
  }]
const SourceProvider: Provider[] = [
  {
    Source: 'Echo',
    LastName: 'Lu',
    MiddleName: 'Null',
    FirstName: 'Kay',
    NPI: '779693442',
    DOB: '07/07/1996',
    BillingAddress: '123 Boston',
    Specialty: 'Brain Surgeon, Heart Surgeon',
    ZipCode: 11222
  },
  {
    Source: 'QNXT',
    LastName: 'T',
    MiddleName: 'Null',
    FirstName: 'Kay',
    NPI: '779693442',
    DOB: '07/07/1996',
    BillingAddress: '123 NEW YORK',
    Specialty: 'Brain Surgeon, Heart Surgeon',
    ZipCode: 11112
  },
  {
    Source: 'NPPES',
    LastName: 'X',
    MiddleName: 'Tan',
    FirstName: 'Kay',
    NPI: '779693442',
    DOB: '07/07/1996',
    BillingAddress: '321 NEW YORK',
    Specialty: 'Lung Disease',
    ZipCode: 12112
  },
]




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
  Source = new FormControl('', Validators.required);
  LastName = new FormControl('Lu', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  MiddleName = new FormControl('Null', Validators.required);
  FirstName = new FormControl('Kay', Validators.required);
  NPI = new FormControl('779693442', Validators.required);
  DOB = new FormControl('07/07/1996', Validators.required);
  BillingAddress = new FormControl('123 Boston', Validators.required);
  Specialty = new FormControl('Brain Surgeon', Validators.required);
  ZipCode = new FormControl('11212', [Validators.required, Validators.pattern('[0-9]*')]);


  LastNameSource = new FormControl('LexisNexis', [Validators.required]);
  MiddleNameSource = new FormControl('LexisNexis', Validators.required);
  FirstNameSource = new FormControl('LexisNexis', Validators.required);
  NPISource = new FormControl('LexisNexis', Validators.required);
  DOBSource = new FormControl('LexisNexis', Validators.required);
  BillingAddressSource = new FormControl('LexisNexis', Validators.required);
  SpecialtySource = new FormControl('LexisNexis', Validators.required);
  ZipCodeSource = new FormControl('LexisNexis', [Validators.required]);

  title = 'MDMfront';

  SourceProviderData;
  LexisNexisData: Lexis[];
  opened: boolean = true;
  NLNPI;
  NLLastName;
  NLMiddleName;
  NLFirstName;
  NLDOB;
  NLBillingAddress;
  NLSpecialty;
  NLZipCode;


  constructor(private route: Router, private Service: GetDataService) {
    this.dataSource.data = TREE_DATA;
    this.LexisNexisData = LexisNexis;
    this.SourceProviderData = SourceProvider;
  }


  ngOnInit() {
    //seems like the in-memory-Db can only create one database so use the interface for now.
    /*this.Service.getLexisNexis().subscribe(
      res=>{
        this.SourceProviderData = res;
      }
    );*/

    //for static purpose only, needs improvement when comes to practice.
    for (let NL of LexisNexis) { this.NLNPI = NL.NPI; this.NLLastName = NL.LastName; this.NLMiddleName = NL.MiddleName; this.NLFirstName = NL.FirstName; this.NLDOB = NL.DOB; this.NLBillingAddress = NL.BillingAddress; this.NLSpecialty = NL.Specialty; this.NLZipCode = NL.ZipCode; }

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
  IsChecked() {
    for (var i = 0; i < this.SourceProviderData.length; i++) {
      if (this.BillingAddress.value) {
        this.BillingAddress.setValue(this.SourceProviderData[i].BillingAddress)
      }
    }
  }

  Logout() {
    this.route.navigateByUrl('/login');
  }

  uncheck() {
    $(':radio').mousedown(function (e) {
      var $self = $(this);
      if ($self.is(':checked')) {
        var uncheck = function () {
          setTimeout(function () { $self.removeAttr('checked'); }, 0);
        };
        var unbind = function () {
          $self.unbind('mouseup', up);
        };
        var up = function () {
          uncheck();
          unbind();
        };
        $self.bind('mouseup', up);
        $self.one('mouseout', unbind);
      }
    });
  }

  updateMiddleName(middlename, Source) {
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
  }
}


