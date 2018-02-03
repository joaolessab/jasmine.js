//First Spec
describe("Animal", function(){
	//Insect
	it("Should have 6 legs if it's an insect", function(){ // Label of success
		var insect = new Animal();
		insect.kind = "insect";
		expect(insect.numLegs()).toBe(6); //Int
	});

	//Spider
	it("Should have 8 legs if it's a spider", function(){
		var spider = new Animal();
		spider.kind = "spider";
		expect(spider.numLegs()).toBe(8); //Int
	});

	//Millipede
	it("Shouldn't know the number of legs of a millipede", function(){
		var millipede = new Animal();
		millipede.kind = "millipede";
		expect(millipede.numLegs()).toBeUndefined(); //Undefined
	});
});