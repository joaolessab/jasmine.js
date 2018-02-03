describe("SoccerPlayer", function(){
	//Goalkeeper
	it("Should be a Goalkeeper", function(){
		var player = new SoccerPlayer();
		player.position = "goalkeeper";
		expect(player.isGoalKeeper()).toBe(true); //Boolean
	});

	it("Goalkeeper should has the shirt number 12", function(){
		var player = new SoccerPlayer();
		player.position = "goalkeeper";
		expect(player.shirtNumber()).toEqual(12); //To Equal (could use toBe)
	});
});