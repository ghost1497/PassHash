import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  title = 'PassHash';
  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log("Home Page loaded");
  }

  enterProgram() {
    this.router.navigate(['program']);
  }
}
