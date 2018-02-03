//First Spec
describe("Animal", function(){
	//Insect
	it("Should have 6 legs if it's an insect", function(){ // Label of success
		var insect = new Animal();
		insect.kind = "insect";
		expect(insect.numLegs()).toBe(6); //Expects are the tests, toBe is native
	});

	//Spider
	it("Should have 8 legs if it's a spider", function(){
		var insect = new Animal();
		insect.kind = "spider";
		expect(insect.numLegs()).toBe(8);
	});

	//Millipede
	it("Shouldn't know the number of legs of a millipede", function(){
		var insect = new Animal();
		insect.kind = "millipede";
		expect(insect.numLegs()).toBeUndefined();
	});
});