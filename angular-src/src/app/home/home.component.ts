import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
	
  	intro:String = "3D animations of some of the most important algorithms and data structures our computers use in order to work!";

  	constructor(
    
    private router: Router ) { }

  	
}
