import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

	title = 'QUEUE';

	menu = [
		{
			"link": "enqueue",
			"title": "Queue Enqueue"
		}, {
			"link": "dequeue",
			"title": "Queue Dequeue"
		}, {
			"link": "front",
			"title": "Queue Front"
		}, {
			"link": "rear",
			"title": "Queue Rear"
		},
	];

  constructor() { }

  ngOnInit() {
  }

}
