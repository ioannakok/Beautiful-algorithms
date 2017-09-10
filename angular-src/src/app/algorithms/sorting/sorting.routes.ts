import { Routes } from '@angular/router';

import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';

export const SORTING_ROUTES: Routes = [
	{ path: '', redirectTo: 'bubble-sort', pathMatch: 'full'},
	{ path: 'bubble-sort', component: BubbleSortComponent },
	{ path: 'insertion-sort', component: InsertionSortComponent },
	{ path: 'selection-sort', component: SelectionSortComponent },
	{ path: 'merge-sort', component: MergeSortComponent },
	{ path: 'quick-sort', component: QuickSortComponent }
];