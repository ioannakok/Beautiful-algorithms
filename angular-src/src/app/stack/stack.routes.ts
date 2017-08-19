import { Routes } from '@angular/router';

import { StackMattersComponent } from './stack-matters/stack-matters.component';
import { StackPushComponent } from './stack-push/stack-push.component';
import { StackPopComponent } from './stack-pop/stack-pop.component';
import { StackPeekComponent } from './stack-peek/stack-peek.component';

export const STACK_ROUTES: Routes = [
	{ path: '', redirectTo: 'why-it-matters', pathMatch: 'full'},
	{ path: 'why-it-matters', component: StackMattersComponent },
	{ path: 'push', component: StackPushComponent },
	{ path: 'pop', component: StackPopComponent },
	{ path: 'peek', component: StackPeekComponent }
];
