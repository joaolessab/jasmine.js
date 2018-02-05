function Car(){}

Car.prototype.isNewer = function(){
	switch (this.model){
		case "dynamic": return 2017;
		case "expression": return 2010;
	};
};

//Returns a function
Car.prototype.multimediaError = function(){
	if (this.action == "turnonbluetooth")
		return function(){
			throw 'failed';
		}
};

Car.prototype.airReduction = function(){
	if (this.air == 18){
		return function(){
			throw new TypeError("air can't be reduced");
		}
	}
};