import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

	title = 'SORTING';

	menu = [

		{
			"link": "/",
			"title": "Home"
		}, {
			"link": "bubble-sort",
			"title": "Bubble Sort"
		}, {
			"link": "insertion-sort",
			"title": "Insertion Sort"
		}, {
			"link": "selection-sort",
			"title": "Selection Sort"
		}, {
			"link": "quick-sort",
			"title": "Quick Sort"
		},

	]

  constructor() { }

  ngOnInit() {
  }

}
