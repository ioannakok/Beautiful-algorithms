import { Injectable } from '@angular/core';

import { Algorithm } from './algorithm';
import { ALGORITHMS } from './mock-algos';

@Injectable()
export class AlgoService {
	getAlgos(): Promise<Algorithm[]> {
		return Promise.resolve(ALGORITHMS);
	}
}