describe("SoccerPlayer", function(){
	//Testing position
	it("Should be a Goalkeeper", function(){
		var player = new SoccerPlayer();
		player.position = "goalkeeper";
		expect(player.isGoalKeeper()).toBe(true); //Boolean
	});

	//Testing number of the shirt
	it("Goalkeeper should has the shirt number 12", function(){
		var player = new SoccerPlayer();
		player.position = "goalkeeper";
		expect(player.shirtNumber()).toEqual(12); //To Equal (could use toBe)
	});

	//Testing country star - Cristiano Ronaldo
	it("Name of the country star passed regular expression", function(){
		var player = new SoccerPlayer();
		player.countryStar = "portugal";
		expect(player.starName()).toMatch("naldo"); //Regular Expressions
		expect(player.starName()).toMatch(/naldo/); //Regular Expressions
	});

	//Different players
	it("Only one player is able to play", function(){
		var playerOne = new SoccerPlayer();
		playerOne.situation = "injured";

		var playerTwo = new SoccerPlayer();
		playerTwo.situation = "healthy";

		expect(playerOne.injuryStatus()).toBeTruthy(); //Truthy (Coulde use Falsy)
		expect(playerTwo.injuryStatus()).not.toBeTruthy(); //Not Truthy (Coulde use Not Falsy)
	});
});