function Animal(){} //Constructor

Animal.prototype.numLegs = function(){
	if (this.kind == "insect"){
		return 6;
	}
	else if (this.kind == "spider"){
		return 8;
	}
};