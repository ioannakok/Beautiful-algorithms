import { Routes } from '@angular/router';

import { StackPushComponent } from './stack-push/stack-push.component';
import { StackPopComponent } from './stack-pop/stack-pop.component';
import { StackPeekComponent } from './stack-peek/stack-peek.component';

export const STACK_ROUTES: Routes = [
	{ path: '', redirectTo: 'push', pathMatch: 'full'},
	{ path: 'push', component: StackPushComponent },
	{ path: 'pop', component: StackPopComponent },
	{ path: 'peek', component: StackPeekComponent }
];
