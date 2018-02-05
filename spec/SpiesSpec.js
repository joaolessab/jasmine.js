describe("Spies", function(){
	//Spied can track functions and all of its arguments
	//Can only exists inside describe

	//-------------- First block of testes ----------------
	//--------Watching parameters of a function------------
	var cellphone, battery = null;

	beforeEach(function(){

		cellphone = {
			setBattery: function(value){
				battery = value;
			}
		};

		spyOn(cellphone, 'setBattery');

		cellphone.setBattery(76);
		cellphone.setBattery(81, 'another param');
	});

	it ("Tracks that the spy of setBattery was called", function(){
		expect(cellphone.setBattery).toHaveBeenCalled();
	});

	it("Tracks all the arguments of setBattery", function() {
    	expect(cellphone.setBattery).toHaveBeenCalledWith(76);
    	expect(cellphone.setBattery).toHaveBeenCalledWith(81, 'another param');
  	});

  	it("Testing params not assync (from beginning)", function() {
    	expect(battery).toBeNull();
  	});
});