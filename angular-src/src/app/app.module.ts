import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AlgorithmDetailComponent } from './algorithms/algorithm-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlgoService } from './algorithms/algo.service';
import { AlgorithmsComponent } from './algorithms/algorithms.component';

// Algorithms components
import { SortingComponent } from './sorting/sorting.component';
import { StackComponent } from './stack/stack.component';
import { QueueComponent } from './queue/queue.component';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';
import { HeapComponent } from './heap/heap.component';
import { HashingComponent } from './hashing/hashing.component';
import { GraphComponent } from './graph/graph.component';

// Sorting components
import { SortingMattersComponent } from './sorting/sorting-matters/sorting-matters.component';
import { BubbleSortComponent } from './sorting/bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './sorting/insertion-sort/insertion-sort.component';
import { SelectionSortComponent } from './sorting/selection-sort/selection-sort.component';
import { MergeSortComponent } from './sorting/merge-sort/merge-sort.component';
import { QuickSortComponent } from './sorting/quick-sort/quick-sort.component';

// Stack components
import { StackMattersComponent } from './stack/stack-matters/stack-matters.component';
import { StackPushComponent } from './stack/stack-push/stack-push.component';
import { StackPopComponent } from './stack/stack-pop/stack-pop.component';
import { StackPeekComponent } from './stack/stack-peek/stack-peek.component';

// Queue components
import { QueueEnqueueComponent } from './queue/queue-enqueue/queue-enqueue.component';
import { QueueDequeueComponent } from './queue/queue-dequeue/queue-dequeue.component';
import { QueueFrontComponent } from './queue/queue-front/queue-front.component';
import { QueueRearComponent } from './queue/queue-rear/queue-rear.component';
import { QueueMattersComponent } from './queue/queue-matters/queue-matters.component';

// Linked List components
import { LinkedListMattersComponent } from './linked-list/linked-list-matters/linked-list-matters.component';
import { LinkedListInsertFirstComponent } from './linked-list/linked-list-insert-first/linked-list-insert-first.component';
import { LinkedListInsertLastComponent } from './linked-list/linked-list-insert-last/linked-list-insert-last.component';
import { LinkedListInsertAtIndexComponent } from './linked-list/linked-list-insert-at-index/linked-list-insert-at-index.component';
import { LinkedListDeleteFirstComponent } from './linked-list/linked-list-delete-first/linked-list-delete-first.component';
import { LinkedListDeleteLastComponent } from './linked-list/linked-list-delete-last/linked-list-delete-last.component';
import { LinkedListDeleteAtIndexComponent } from './linked-list/linked-list-delete-at-index/linked-list-delete-at-index.component';

// Binary Tree components
import { BSTInorderTraversalComponent } from './binary-tree/bstinorder-traversal/bstinorder-traversal.component';
import { BSTLevelorderTraversalComponent } from './binary-tree/bstlevelorder-traversal/bstlevelorder-traversal.component';
import { BSTPreorderTraversalComponent } from './binary-tree/bstpreorder-traversal/bstpreorder-traversal.component';
import { BSTPostorderTraversalComponent } from './binary-tree/bstpostorder-traversal/bstpostorder-traversal.component';
import { BSTInsertNodeComponent } from './binary-tree/bstinsert-node/bstinsert-node.component';
import { BSTDeleteNodeNoChildComponent } from './binary-tree/bstdelete-node-no-child/bstdelete-node-no-child.component';
import { BSTDeleteNodeOneChildComponent } from './binary-tree/bstdelete-node-one-child/bstdelete-node-one-child.component';
import { BSTDeleteNodeTwoChildrenComponent } from './binary-tree/bstdelete-node-two-children/bstdelete-node-two-children.component';
import { BSTMattersComponent } from './binary-tree/bstmatters/bstmatters.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlgorithmDetailComponent,
    NavbarComponent,
    AlgorithmsComponent,
    SortingComponent,
    StackComponent,
    QueueComponent,
    LinkedListComponent,
    BinaryTreeComponent,
    HeapComponent,
    HashingComponent,
    GraphComponent,
    SortingMattersComponent,
    BubbleSortComponent,
    InsertionSortComponent,
    SelectionSortComponent,
    MergeSortComponent,
    QuickSortComponent,
    StackMattersComponent,
    StackPushComponent,
    StackPopComponent,
    StackPeekComponent,
    QueueEnqueueComponent,
    QueueDequeueComponent,
    QueueFrontComponent,
    QueueRearComponent,
    QueueMattersComponent,
    LinkedListMattersComponent,
    LinkedListInsertFirstComponent,
    LinkedListInsertLastComponent,
    LinkedListInsertAtIndexComponent,
    LinkedListDeleteFirstComponent,
    LinkedListDeleteLastComponent,
    LinkedListDeleteAtIndexComponent,
    BSTInorderTraversalComponent,
    BSTLevelorderTraversalComponent,
    BSTPreorderTraversalComponent,
    BSTPostorderTraversalComponent,
    BSTInsertNodeComponent,
    BSTDeleteNodeNoChildComponent,
    BSTDeleteNodeOneChildComponent,
    BSTDeleteNodeTwoChildrenComponent,
    BSTMattersComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [AlgoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
