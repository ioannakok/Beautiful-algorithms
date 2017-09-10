import { Component, OnInit } from '@angular/core';
import { Algorithm } from './algorithm.model';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AlgorithmsService } from './algorithms.service';
import { NgModule }      from '@angular/core';


@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css'],
  providers: [AlgorithmsService]
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
        "photo": "binary-tree",
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
