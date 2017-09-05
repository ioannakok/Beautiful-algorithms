import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.css']
})
export class LinkedListComponent implements OnInit {

	title = 'LINKED LIST';

	menu = [

		{
			"link": "insert-first",
			"title": "Linked List Insert First"
		},
		{
			"link": "insert-last",
			"title": "Linked List Insert Last"
		},
		{
			"link": "insert-at-index",
			"title": "Linked List Insert At Index"
		}, {
			"link": "delete-first",
			"title": "Linked List Delete First"
		}, {
			"link": "delete-last",
			"title": "Linked List Delete First"
		}, {
			"link": "delete-at-index",
			"title": "Linked List Delete At Index"
		}

	];

  constructor() { }

  ngOnInit() {
  }

}
