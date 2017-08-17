import { Component, OnInit } from '@angular/core';
import { Algorithm } from './algorithm';
import { AlgoService } from './algo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  	algorithms: Algorithm[];

  	constructor(
    private algoService: AlgoService,
    private router: Router ) { }

  	getAlgos(): void {
  		this.algoService.getAlgos().then(algorithms => this.algorithms = algorithms);
  	}

  	ngOnInit(): void {
  		this.getAlgos();
  	}

}
