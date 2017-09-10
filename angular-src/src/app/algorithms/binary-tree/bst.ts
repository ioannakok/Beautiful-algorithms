import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';

/* This code was written with the help of the following sources:
* https://github.com/selbyk/three.ts/blob/master/src/cube.ts,
* https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/4688460?start=0
* Binary Tree implementation in Java for the GC05 "Algorithmics" module in UCL
*/

	export class Node {

		// Properties of a node
		sphere: THREE.Mesh;
		left: Node;
		right: Node;
		parent: Node;
		depth: number;
		height: number;
		radius: number;
		branch: THREE.Mesh;
		
		// Constructor
		constructor(radius, colour) {

			this.sphere = this.createSphere(radius, colour); 
			this.radius = radius;
			this.left = null;
			this.right = null;

		}

		// Method that creates a node/sphere
		createSphere(radius, colour) {

			let geometry = new THREE.SphereGeometry(radius, 24, 24);
        	let material = new THREE.MeshPhongMaterial({color: colour});
        	let sphere = new THREE.Mesh(geometry, material);

        	return sphere;
		}	
		
	}
	

	export class Tree {

		// Properties
		root: Node;
		size: number;
		time = 1000;
		delay = 0;

		constructor() {
			this.root = null;
			this.size = 0;
		}

		// Method that is called to insert a node
		insert(value, colour) {
			let newNode = new Node(value, colour);
			this.addToTree(newNode, this.root);
			this.size += 1;
		}

		// Method that is called to retrieve a node 
		retrieve(radius: number) {
			let node = this.getFromTree(radius, this.root);
			return node;

		}

		// Finds a node
		getFromTree(radius: number, node: Node) {

			if(radius == node.radius) {
				return node;
			} else if (radius < node.radius) {
				return this.getFromTree(radius, node.left);
			} else {
				return this.getFromTree(radius, node.right);
			}
		}

		// Adds a node in the tree
		addToTree(newNode: Node, curNode: Node) {

			// Initialise variables for the branches
			var x = 0;
			var y = 0;
			var rotation = 0;

			// Create root 
			if(curNode == null) {
				newNode.sphere.position.x = 0;
				newNode.sphere.position.y = 24;
				newNode.depth = 0;
				newNode.height = 1;
				this.root = newNode;
			} else {

				// Get radii
				let curRadius = curNode.radius;
				let newRadius = newNode.radius;

				// Compare them
				if(newRadius < curRadius) {

					if(curNode.left == null) {

						// Insert the new node on the left
						curNode.left = newNode;

						// Set the parent
						newNode.parent = curNode;

						// Increase depth and height
						newNode.depth = curNode.depth + 1;
						newNode.height = curNode.height + 1;

						// Position the new node relatively to its parent
						if(curNode.depth == 0) {
							newNode.sphere.position.x = curNode.sphere.position.x - 30;
							newNode.sphere.position.y = curNode.sphere.position.y - 8;
							rotation = - 75 * Math.PI / 180;
            				x = newNode.sphere.position.x + 15; 
            				y = newNode.sphere.position.y + 4;
						} else if(curNode.depth == 1) {
				            newNode.sphere.position.x = curNode.sphere.position.x - 16;
				            newNode.sphere.position.y = curNode.sphere.position.y - 12;
				            rotation = - 55 * Math.PI / 180;
				            x = newNode.sphere.position.x + 8; 
				            y = newNode.sphere.position.y + 6;

				        } else if(curNode.depth == 2) {
				            newNode.sphere.position.x = curNode.sphere.position.x - 8;
				            newNode.sphere.position.y = curNode.sphere.position.y - 20;
				            rotation = - Math.PI / 9;
				            x = newNode.sphere.position.x + 3.5; 
				            y = newNode.sphere.position.y + 10;

				        } else if(curNode.depth == 3) {
				            newNode.sphere.position.x = curNode.sphere.position.x - 8;
				            newNode.sphere.position.y = curNode.sphere.position.y - 20;
				        } 

				        // Position the branch 
						var x1 = curNode.sphere.position.x + curNode.radius * Math.cos(Math.PI / 4);
		        		var y1 = curNode.sphere.position.y + curNode.radius * Math.sin(Math.PI / 4);

		        		var x2 = newNode.sphere.position.x + newNode.radius * Math.cos(Math.PI / 4);
		        		var y2 = newNode.sphere.position.y + newNode.radius * Math.sin(Math.PI / 4);

		        		var height = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

		        		newNode.branch = this.getCylinder(height, x, y, rotation);
						

					} else {
						this.addToTree(newNode, curNode.left);
					}
				} else {

					if(curNode.right == null) {

						// Insert the new node on the right
						curNode.right = newNode;

						// Set the parent
						newNode.parent = curNode;

						// Increase depth and height
						newNode.depth = curNode.depth + 1;
						newNode.height = curNode.height + 1;

						// Position the new node relatively to its parent
						if(curNode.depth == 0) {
							newNode.sphere.position.x = curNode.sphere.position.x + 30;
							newNode.sphere.position.y = curNode.sphere.position.y - 8;
							rotation = 75 * Math.PI / 180;
            				x = newNode.sphere.position.x - 15; 
            				y = newNode.sphere.position.y + 4;
						} else if(curNode.depth == 1) {
				            newNode.sphere.position.x = curNode.sphere.position.x + 16;
				            newNode.sphere.position.y = curNode.sphere.position.y - 12;
				            rotation = 55 * Math.PI / 180;
				            x = newNode.sphere.position.x - 8; 
				            y = newNode.sphere.position.y + 6;

				        } else if(curNode.depth == 2) {
				            newNode.sphere.position.x = curNode.sphere.position.x + 8;
				            newNode.sphere.position.y = curNode.sphere.position.y - 20;
				            rotation = Math.PI / 9;
				            x = newNode.sphere.position.x - 3.5; 
				            y = newNode.sphere.position.y + 10;

				        } else if(curNode.depth == 3) {
				            newNode.sphere.position.x = curNode.sphere.position.x - 8;
				            newNode.sphere.position.y = curNode.sphere.position.y - 20;
				        } 

				        // Position the branch 
						var x1 = curNode.sphere.position.x + curNode.radius * Math.cos(Math.PI / 4);
		        		var y1 = curNode.sphere.position.y + curNode.radius * Math.sin(Math.PI / 4);

		        		var x2 = newNode.sphere.position.x + newNode.radius * Math.cos(Math.PI / 4);
		        		var y2 = newNode.sphere.position.y + newNode.radius * Math.sin(Math.PI / 4);

		        		var height = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

		        		newNode.branch = this.getCylinder(height, x, y, rotation);

					} else {
						this.addToTree(newNode, curNode.right);
					}
				}
			}
		}
		
		// Creates the branches of the tree
		getCylinder(height, x, y, rotation) {

        	var material = new THREE.MeshPhongMaterial({color: 0x9c1abc});
        	var geometry = new THREE.CylinderGeometry(0.5, 0.5, height);
        
        	var cylinder = new THREE.Mesh( geometry, material );

        	cylinder.position.x = x;
        	cylinder.position.y = y;
        	cylinder.rotation.z = rotation;
        
        	return cylinder;
    	}

	}


