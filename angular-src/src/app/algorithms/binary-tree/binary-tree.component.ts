import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.css']
})
export class BinaryTreeComponent implements OnInit {

	title = 'BINARY SEARCH TREE';

	menu = [

		{
			"link": "/",
			"title": "Home"
		}, {
			"link": "inorder-traversal",
			"title": "Inorder Traversal"
		}, {
			"link": "preorder-traversal",
			"title": "Preorder Traversal"
		}, {
			"link": "postorder-traversal",
			"title": "Postorder Traversal"
		}, {
			"link": "levelorder-traversal",
			"title": "Level Order Traversal"
		}, {
			"link": "insert-node",
			"title": "Insert Node"
		}, {
			"link": "delete-node-no-child",
			"title": "Delete Node With No Children"
		}, {
			"link": "delete-node-one-child",
			"title": "Delete Node With One Child"
		}, {
			"link": "delete-node-two-children",
			"title": "Delete Node With Two Children"
		}


	];

  constructor() { }

  ngOnInit() {
  }

}
