/* Sources used for the code for graph:
	GC05 - Algorithmics module
	https://github.com/CodingTrain/Rainbow-Code/tree/master/CodingChallenges/CC_68_BFS_kevin_bacon
*/

import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';

export class Graph {
	
	vertices = [];
	graph = {};
	start: Vertex;
	end: Vertex;

	addVertex(v: Vertex) {
		this.vertices.push(v);
		var radius = v.radius;
		this.graph[radius] = v;
	}

}


export class Vertex {
	
	sphere: THREE.Mesh;
	next: Vertex;
	radius: number;
	edges = [];
	visited = false; 
	parent = null;
	
	constructor(radius: number) {

		this.sphere = this.createSphere(radius); 
		this.radius = radius;
		
	}

	// Method that creates a vertex/sphere
	createSphere(radius: number) {

		let geometry = new THREE.SphereGeometry(radius, 24, 24);
        let material = new THREE.MeshPhongMaterial({color: 0xe60000});
        let sphere = new THREE.Mesh(geometry, material);

        return sphere;
	}

	// Adds edge on both directions
	addEdge(neighbour: Vertex) {

		this.edges.push(neighbour);
		neighbour.edges.push(this);
	}

}

