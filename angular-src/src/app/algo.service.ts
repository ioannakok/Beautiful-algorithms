import { Injectable } from '@angular/core';

import { Algorithm } from './algorithm';
import { ALGORITHMS } from './mock-algos';


@Injectable()
export class AlgoService {
	
	
	getAlgos(): Promise<Algorithm[]> {
		return Promise.resolve(ALGORITHMS);
	}

	getAlgo(id: number): Promise<Algorithm> {
		return this.getAlgos().then(algorithms => algorithms.find(algorithm => algorithm.id === id));
 	}

}