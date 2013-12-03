// Actors are actors connected by joints and rods. Actors have abilities, default state and a formal grammar of states. 
// Ability is a subset of states

// base class for vt sysytem
// 1. There are 2 modes in the whole system: edit and show. 
//    Submodes for edit mode: - edit actor ( actions to be handled: load actor, save actor, add or remove rods and joints, scale, rotate )
//                            - add movement 
//							  - play movements
//    Submodes for show       - choose Show
//							  - control playback
// 2. System levels: - virtual actors representation level (abstract 3d coordinates) v* classes
// 					 - projection level(screen 2d coordinates) s* classes
//					 - representation level (graph engine) 


var clientid = 1;
function nextid(){
	return clientid++;
}

// coord space for virtual data
function vtCspace(){
	var lh = {x:0,y:0,z:0};
	var rb = {x:10,y:10,z:10};
}

function vtPrime( name ){
	this.name = name;
	this.id = nextid();
}

// example of static attr
//vtPrime.prototype.clientid = 1;
//vtPrime.prototype.nextclientid = function(){ return vtPrime.prototype.clientid++;};

// aid - server id; sid - scene id (id in client, connected with DOM somehow), name 
function vtActor(name){
	vtActor.superclass.constructor.apply(this, [name]);
}

function vtJoint( name ){
	vtJoint.superclass.constructor.apply(this, [name]);
}

function vtRod( name ){
	vtRod.superclass.constructor.apply(this, [name]);
}

function vtElement( name ){
	vtElement.superclass.constructor.apply(this,[name]);
};

extend(vtElement, vtPrime);
extend(vtActor, vtElement);
extend(vtJoint, vtElement);
extend(vtRod, vtElement);

// class for window description
function stWindow(width,height){
	this.width = width;
	this.height = height;
};

stWindow.prototype = {
	drawline: function(){
			//TODO: make CAAT call
	}
};


// converts relative Actor orientation into Window coords
function stProjector(curwindow,vtspace){
	this.curwindow = curwindow;
	this.vtspace = vtspace;
	function projection(x,y){
		return { x: this.curwindow.width * x / (this.vtspace.rb[x] - this.vtspace.lt[x]),
				 y: this.curwindow.height * y / (this.vtspace.rb[y] - this.vtspace.lt[y]) 
		};
	}
}

// object for drawing actor in window space 
function stActor( vtactor, stprojector, stwindow ){
	this.vtactor = vtactor;
	this.stprojector = stprojector;
	this.stwindow = stwindow;
}

stActor.prototype = {
	getRods: function(){
		return 1;
	},
	draw: function(){
	//TODO: make stWindow call	
	}	
};


/*
 No ideas what is it for
vtElement.prototype.link = function( vte1, vte2 ){
	var t1 = vte1.constructor == vtJoint;
	var t2 = vte2.constructor == vtjoint;
};
*/


//function Fabrick

var actor1 = new vtActor('actor1');
var actor2 = new vtActor('actor2');

console.log(actor1);
console.log(actor2);


// different stuff 
function extend(Child, Parent) {
    var F = function() { };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}


