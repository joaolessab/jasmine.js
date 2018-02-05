describe("Car", function(){
	//Year of the car 
	it("Car has to be newer than 2012", function(){
		var car = new Car();
		car.model = "dynamic";

		expect(car.isNewer()).toBeGreaterThan(2012);
	});

	//Turn bluetooth 
	it("Car bluetooth has to fail", function(){
		var car = new Car();
		car.action = "turnonbluetooth";

		expect(car.multimediaError()).toThrow('failed');
	});

	//Air reduction
	it("Air can't be less than 18", function(){
		var car = new Car();
		car.air = 18;

		expect(car.airReduction()).toThrowError();
	});
});