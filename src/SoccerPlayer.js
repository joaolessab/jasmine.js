function SoccerPlayer(){}

SoccerPlayer.prototype.isGoalKeeper = function(){
	if (this.position == "goalkeeper")
		return true;
};