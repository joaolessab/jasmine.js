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

SoccerPlayer.prototype.injuryStatus = function(){
	switch (this.situation){
		case "injured": return true;
		case "healthy": return false;
	};
};

SoccerPlayer.prototype.transferStatus = function(){
	switch (this.name){
		case "Romario": return "loan";
		case "Zico": return "sold";
	};
};

SoccerPlayer.prototype.teamsPlayed = function(){
	switch (this.id){
		case 5: return ["saopaulo", "milan", "juventus", "manchesterunited"];
		case 7: return ["saopaulo", "milan", "juventus", "realmadrid", "manchesterunited"];
		case 9: return ["palmeiras", "milan", "juventus"];
	};
};