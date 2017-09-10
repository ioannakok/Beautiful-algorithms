import { Routes } from '@angular/router';

import { QueueEnqueueComponent } from './queue-enqueue/queue-enqueue.component';
import { QueueDequeueComponent } from './queue-dequeue/queue-dequeue.component';
import { QueueFrontComponent } from './queue-front/queue-front.component';
import { QueueRearComponent } from './queue-rear/queue-rear.component';

export const QUEUE_ROUTES: Routes = [
	{ path: '', redirectTo: 'enqueue', pathMatch: 'full'},
	{ path: 'enqueue', component: QueueEnqueueComponent },
	{ path: 'dequeue', component: QueueDequeueComponent },
	{ path: 'front', component: QueueFrontComponent },
	{ path: 'rear', component: QueueRearComponent }
];
