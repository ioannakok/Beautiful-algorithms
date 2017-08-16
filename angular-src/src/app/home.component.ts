import { Component, OnInit } from '@angular/core';
import { Algorithm } from './algorithm';
import { AlgoService } from './algo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	
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
