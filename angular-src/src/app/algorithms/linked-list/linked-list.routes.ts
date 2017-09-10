import { Routes } from '@angular/router';

import { LinkedListInsertFirstComponent } from './linked-list-insert-first/linked-list-insert-first.component';
import { LinkedListInsertLastComponent } from './linked-list-insert-last/linked-list-insert-last.component';
import { LinkedListInsertAtIndexComponent } from './linked-list-insert-at-index/linked-list-insert-at-index.component';
import { LinkedListDeleteFirstComponent } from './linked-list-delete-first/linked-list-delete-first.component';
import { LinkedListDeleteLastComponent } from './linked-list-delete-last/linked-list-delete-last.component';
import { LinkedListDeleteAtIndexComponent } from './linked-list-delete-at-index/linked-list-delete-at-index.component';

export const LINKED_LIST_ROUTES: Routes = [
	{ path: '', redirectTo: 'insert-first', pathMatch: 'full'},
	{ path: 'insert-first', component: LinkedListInsertFirstComponent },
	{ path: 'insert-last', component: LinkedListInsertLastComponent },
	{ path: 'insert-at-index', component: LinkedListInsertAtIndexComponent },
	{ path: 'delete-first', component: LinkedListDeleteFirstComponent },
	{ path: 'delete-last', component: LinkedListDeleteLastComponent },
	{ path: 'delete-at-index', component: LinkedListDeleteAtIndexComponent }
];