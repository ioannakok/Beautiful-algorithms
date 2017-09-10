import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
	
	title = 'STACK';

	menu = [ 

		{
			"link" : "/",
			"title": "Home"
		}, {
			"link" : "push",
			"title": "Stack Push"
		}, {
			"link" : "pop",
			"title": "Stack Pop"
		}, {
			"link" : "peek",
			"title": "Stack Peek"
		} 

	];

  constructor() { }

  ngOnInit() {
  }

}
