import { Routes } from '@angular/router';

import { BSTInorderTraversalComponent } from './bstinorder-traversal/bstinorder-traversal.component';
import { BSTLevelorderTraversalComponent } from './bstlevelorder-traversal/bstlevelorder-traversal.component';
import { BSTPreorderTraversalComponent } from './bstpreorder-traversal/bstpreorder-traversal.component';
import { BSTPostorderTraversalComponent } from './bstpostorder-traversal/bstpostorder-traversal.component';



export const BST_ROUTES: Routes = [
	{ path: '', redirectTo: 'inorder-traversal', pathMatch: 'full'},
	{ path: 'inorder-traversal', component: BSTInorderTraversalComponent },
	{ path: 'preorder-traversal', component: BSTPreorderTraversalComponent },
	{ path: 'postorder-traversal', component: BSTPostorderTraversalComponent },
	{ path: 'levelorder-traversal', component: BSTLevelorderTraversalComponent }
	
];
