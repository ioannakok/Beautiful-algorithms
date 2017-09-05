import { Component, OnInit } from '@angular/core';
import { Algorithm } from './algorithm';
import { AlgoService } from './algo.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent  {

  	algorithms = [
      {
        "source": "/sorting",
        "photo": "sorting",
        "name": "Sorting",
        "title": "SORTING"
      }, {
        "source": "/stack",
        "photo": "stack",
        "name": "Stack",
        "title": "STACK"
      } , {
        "source": "/queue",
        "photo": "queue",
        "name": "Queue",
        "title": "QUEUE"
      } , {
        "source": "/linked-list",
        "photo": "linked-list",
        "name": "Linked List",
        "title": "LINKED LIST"
      } , {
        "source": "/binary-tree",
        "photo": "linked-list",
        "name": "Binary Tree",
        "title": "BINARY TREE"
      } , {
        "source": "/graph",
        "photo": "graph",
        "name": "Graph",
        "title": "GRAPH"
      }
    ]



    

  	constructor(
    private router: Router ) { }

  	
}
