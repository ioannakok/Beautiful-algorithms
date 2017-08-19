import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SortingComponent } from './sorting/sorting.component';
import { StackComponent } from './stack/stack.component';
import { QueueComponent } from './queue/queue.component';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';
import { HeapComponent } from './heap/heap.component';
import { HashingComponent } from './hashing/hashing.component';
import { GraphComponent } from './graph/graph.component';

import { SORTING_ROUTES } from './sorting/sorting.routes';
import { STACK_ROUTES } from './stack/stack.routes';
import { QUEUE_ROUTES } from './queue/queue.routes';
import { LINKED_LIST_ROUTES } from './linked-list/linked-list.routes';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sorting', component: SortingComponent, children: SORTING_ROUTES },
  {path: 'stack', component: StackComponent, children: STACK_ROUTES },
  {path: 'queue', component: QueueComponent, children: QUEUE_ROUTES },
  {path: 'linked-list', component: LinkedListComponent, children: LINKED_LIST_ROUTES },
  {path: 'binary-tree', component: BinaryTreeComponent},
  {path: 'heap', component: HeapComponent},
  {path: 'hashing', component: HashingComponent},
  {path: 'graph', component: GraphComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }