import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  login(){
    this.route.navigateByUrl('/home');
  }

}
