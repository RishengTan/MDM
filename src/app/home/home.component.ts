import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Route, Router } from '@angular/router';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] =
  [
    {
      name: 'History Log',
      children: [
        {
          name: 'User A',
        }, {
          name: 'User B',
        }, {
          name: 'User C',
          children: [
            { name: 'June' },
            { name: 'July' },
          ]
        },
      ]
    },
    {
      name: 'Search'
    },
  ]

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  title = 'MDMfront';
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;
  opened: boolean = true;
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

  constructor(private route: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  Logout() {
    this.route.navigateByUrl('/login');
  }
  log() {
    this.route.navigateByUrl('/home/log');
  }
  goSearch(){
    this.route.navigateByUrl('/home');
  }
}

