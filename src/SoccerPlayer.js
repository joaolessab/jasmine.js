function SoccerPlayer(){}

SoccerPlayer.prototype.isGoalKeeper = function(){
	if (this.position == "goalkeeper")
		return true;
};

SoccerPlayer.prototype.shirtNumber = function(){
	if (this.position == "goalkeeper")
		return 12;
};