import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AlgorithmsService } from './algorithms/algorithms.service';
import { AlgorithmsComponent } from './algorithms/algorithms.component';

// Algorithms components
import { SortingComponent } from './algorithms/sorting/sorting.component';
import { StackComponent } from './algorithms/stack/stack.component';
import { QueueComponent } from './algorithms/queue/queue.component';
import { LinkedListComponent } from './algorithms/linked-list/linked-list.component';
import { BinaryTreeComponent } from './algorithms/binary-tree/binary-tree.component';
import { GraphComponent } from './algorithms/graph/graph.component';

// Sorting components
import { BubbleSortComponent } from './algorithms/sorting/bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './algorithms/sorting/insertion-sort/insertion-sort.component';
import { SelectionSortComponent } from './algorithms/sorting/selection-sort/selection-sort.component';
import { QuickSortComponent } from './algorithms/sorting/quick-sort/quick-sort.component';

// Stack components
import { StackPushComponent } from './algorithms/stack/stack-push/stack-push.component';
import { StackPopComponent } from './algorithms/stack/stack-pop/stack-pop.component';
import { StackPeekComponent } from './algorithms/stack/stack-peek/stack-peek.component';

// Queue components
import { QueueEnqueueComponent } from './algorithms/queue/queue-enqueue/queue-enqueue.component';
import { QueueDequeueComponent } from './algorithms/queue/queue-dequeue/queue-dequeue.component';
import { QueueFrontComponent } from './algorithms/queue/queue-front/queue-front.component';
import { QueueRearComponent } from './algorithms/queue/queue-rear/queue-rear.component';

// Linked List components
import { LinkedListInsertFirstComponent } from './algorithms/linked-list/linked-list-insert-first/linked-list-insert-first.component';
import { LinkedListInsertLastComponent } from './algorithms/linked-list/linked-list-insert-last/linked-list-insert-last.component';
import { LinkedListInsertAtIndexComponent } from './algorithms/linked-list/linked-list-insert-at-index/linked-list-insert-at-index.component';
import { LinkedListDeleteFirstComponent } from './algorithms/linked-list/linked-list-delete-first/linked-list-delete-first.component';
import { LinkedListDeleteLastComponent } from './algorithms/linked-list/linked-list-delete-last/linked-list-delete-last.component';
import { LinkedListDeleteAtIndexComponent } from './algorithms/linked-list/linked-list-delete-at-index/linked-list-delete-at-index.component';

// Binary Tree components
import { BSTInorderTraversalComponent } from './algorithms/binary-tree/bstinorder-traversal/bstinorder-traversal.component';
import { BSTLevelorderTraversalComponent } from './algorithms/binary-tree/bstlevelorder-traversal/bstlevelorder-traversal.component';
import { BSTPreorderTraversalComponent } from './algorithms/binary-tree/bstpreorder-traversal/bstpreorder-traversal.component';
import { BSTPostorderTraversalComponent } from './algorithms/binary-tree/bstpostorder-traversal/bstpostorder-traversal.component';


// Graph components
import { GraphBreadthFirstComponent } from './algorithms/graph/graph-breadth-first/graph-breadth-first.component';
import { GraphDepthFirstComponent } from './algorithms/graph/graph-depth-first/graph-depth-first.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlgorithmsComponent,
    SortingComponent,
    StackComponent,
    QueueComponent,
    LinkedListComponent,
    BinaryTreeComponent,
    GraphComponent,
    BubbleSortComponent,
    InsertionSortComponent,
    SelectionSortComponent,
    QuickSortComponent,
    StackPushComponent,
    StackPopComponent,
    StackPeekComponent,
    QueueEnqueueComponent,
    QueueDequeueComponent,
    QueueFrontComponent,
    QueueRearComponent,
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
    FooterComponent,
    GraphBreadthFirstComponent,
    GraphDepthFirstComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [AlgorithmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
