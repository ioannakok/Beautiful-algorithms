import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

	title = 'GRAPH';

	menu = [
		{
			"link": "/",
			"title": "Home"
		}, {
			"link": "graph-breadth-first",
			"title": "Breadth First Traversal"
		},
		{
			"link": "graph-depth-first",
			"title": "Depth First Traversal"
		}
	];

  constructor() { }

  ngOnInit() {
  }

}
