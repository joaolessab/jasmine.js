function SoccerPlayer(){}

SoccerPlayer.prototype.isGoalKeeper = function(){
	if (this.position == "goalkeeper")
		return true;
};

SoccerPlayer.prototype.shirtNumber = function(){
	if (this.position == "goalkeeper")
		return 12;
};

SoccerPlayer.prototype.starName = function(){
	switch (this.countryStar){
		case "portugal": return "Cristiano Ronaldo";
		case "argentina": return "Lionel Messi";
		case "brazil": return "Neymar Júnior";
		case "france": return "Paul Pogba";
	};
};