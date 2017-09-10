import { Routes } from '@angular/router';

import { GraphBreadthFirstComponent } from './graph-breadth-first/graph-breadth-first.component';
import { GraphDepthFirstComponent } from './graph-depth-first/graph-depth-first.component';


export const GRAPH_ROUTES: Routes = [
	{ path: '', redirectTo: 'graph-breadth-first', pathMatch: 'full'},
	{ path: 'graph-breadth-first', component: GraphBreadthFirstComponent },
	{ path: 'graph-depth-first', component: GraphDepthFirstComponent }
];