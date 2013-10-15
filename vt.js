// Actors are actors connected by joints and rods. Actors have abilities, default state and a formal grammar of states. 
// Ability is a subset of states

// base class for vt sysytem

function vtPrime( name ){
	this.name = name;
}

function vtElement(){
	vtElement.superclass.constructor.apply(this,name);
}

vtElement.prototype.link = function( vte1, vte2 ){
	var t1 = vte1.constructor == vtJoint;
	var t2 = vte2.constructor == vtjoint;
}

// aid - server id; sid - scene id (id in client, connected with DOM somehow), name 
function vtActor(aid,sid,name){
	this.aid = aid;
	vtActor.superclass.constructor.apply(this, name);
}

function vtJoint( rods ){
	this.rods = rods;
}

extend(vtElement, vtPrime);
extend(vtJoint, vtElement);
extend(vtActor, vtPrime);

// different stuff 
function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}


var actor1 = new vtActor(1,2,'actor1');
//console.log("actor1");
