import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SortingComponent } from './algorithms/sorting/sorting.component';
import { StackComponent } from './algorithms/stack/stack.component';
import { QueueComponent } from './algorithms/queue/queue.component';
import { LinkedListComponent } from './algorithms/linked-list/linked-list.component';
import { BinaryTreeComponent } from './algorithms/binary-tree/binary-tree.component';
import { GraphComponent } from './algorithms/graph/graph.component';

import { SORTING_ROUTES } from './algorithms/sorting/sorting.routes';
import { STACK_ROUTES } from './algorithms/stack/stack.routes';
import { QUEUE_ROUTES } from './algorithms/queue/queue.routes';
import { LINKED_LIST_ROUTES } from './algorithms/linked-list/linked-list.routes';
import { BST_ROUTES } from './algorithms/binary-tree/binary-tree.routes';
import { GRAPH_ROUTES } from './algorithms/graph/graph.routes';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sorting', component: SortingComponent, children: SORTING_ROUTES },
  {path: 'stack', component: StackComponent, children: STACK_ROUTES },
  {path: 'queue', component: QueueComponent, children: QUEUE_ROUTES },
  {path: 'linked-list', component: LinkedListComponent, children: LINKED_LIST_ROUTES },
  {path: 'binary-tree', component: BinaryTreeComponent, children: BST_ROUTES },
  {path: 'graph', component: GraphComponent, children: GRAPH_ROUTES}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }