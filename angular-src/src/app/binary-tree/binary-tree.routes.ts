import { Routes } from '@angular/router';

import { BSTInorderTraversalComponent } from './bstinorder-traversal/bstinorder-traversal.component';
import { BSTLevelorderTraversalComponent } from './bstlevelorder-traversal/bstlevelorder-traversal.component';
import { BSTPreorderTraversalComponent } from './bstpreorder-traversal/bstpreorder-traversal.component';
import { BSTPostorderTraversalComponent } from './bstpostorder-traversal/bstpostorder-traversal.component';
import { BSTInsertNodeComponent } from './bstinsert-node/bstinsert-node.component';
import { BSTDeleteNodeNoChildComponent } from './bstdelete-node-no-child/bstdelete-node-no-child.component';
import { BSTDeleteNodeOneChildComponent } from './bstdelete-node-one-child/bstdelete-node-one-child.component';
import { BSTDeleteNodeTwoChildrenComponent } from './bstdelete-node-two-children/bstdelete-node-two-children.component';
import { BSTMattersComponent } from './bstmatters/bstmatters.component';


export const BST_ROUTES: Routes = [
	{ path: '', redirectTo: 'why-it-matters', pathMatch: 'full'},
	{ path: 'why-it-matters', component: BSTMattersComponent },
	{ path: 'inorder-traversal', component: BSTInorderTraversalComponent },
	{ path: 'preorder-traversal', component: BSTPreorderTraversalComponent },
	{ path: 'postorder-traversal', component: BSTPostorderTraversalComponent },
	{ path: 'levelorder-traversal', component: BSTLevelorderTraversalComponent },
	{ path: 'insert-node', component: BSTInsertNodeComponent },
	{ path: 'delete-node-no-child', component: BSTDeleteNodeNoChildComponent },
	{ path: 'delete-node-one-child', component: BSTDeleteNodeOneChildComponent },
	{ path: 'delete-node-two-children', component: BSTDeleteNodeTwoChildrenComponent },
];
