// Called when player reach end of leve, give level ID and stars count
function famobi_LevelStars(LevelID, StarsCount)
{
console.log ("Level "+LevelID+" Done, "+StarsCount+" Stars Won");
}

// Check if Famobi is used
function famobi_InUse ()
{
	if (typeof window !== "undefined" && window.famobi)
		{
			Monetisation_IsFamobi = 1;
			Monetisation_PHPpath="https://formulafever.famobi.com/php/"+Game_ID_String+"_";
		}
}


// Get Famobi More games button
function famobi_getMoreGamesButtonImage ()
{
return famobi.getMoreGamesButtonImage();
}

// Famobi More games Link
function famobi_moreGamesLink ()
{
famobi.moreGamesLink();
}

// famobi change
!function(a, b) {

	var self = this;

	self[a] = {

		levelScores: {},
		currentScore: 0,
		storageItemName: 'levelScores',

		init: function() {
			this.levelScores = (scores = window.famobi.localStorage.getItem(this.storageItemName)) ? JSON.parse(scores) : {}
			famobi.log("init", this.levelScores)
		},

		getTotalScore: function(ignoreLevel) {

			var totalScore = 0;
			for(level in this.levelScores) {
				if(ignoreLevel && level == ignoreLevel) continue;
				totalScore += parseInt(this.levelScores[level] || 0);
			}

			return totalScore;
		},

		getLevelScore: function(level) {
			return this.levelScores[level] || 0;
		},

		setLevelScore: function(level, score) {

			if(level) {
				this.levelScores[level] = Math.max(parseInt(this.levelScores[level] || 0), parseInt(score || 0));
				window.famobi.localStorage.setItem(this.storageItemName, JSON.stringify(this.levelScores));
			}
		},

		setCurrentScore: function(score) {
			this.currentScore = score || 0;
		},

		getCurrentScore: function() {
			return this.currentScore;
		},

		clean: function() {
			this.levelScores = {};
			window.famobi.localStorage.removeItem(this.storageItemName);
		}
	};

}('famobi_score', window);
window.famobi_score.init();




