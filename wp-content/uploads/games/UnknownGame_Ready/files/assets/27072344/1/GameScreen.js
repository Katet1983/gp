var GameScreen = pc.createScript('gameScreen');

GameScreen.attributes.add('timeEntity', { type: 'entity' });

pc.extend(GameScreen.prototype, {

    initialize: function() {
        this.app.on('GameManager:time', this.setTime, this);
    },  

    setTime: function(totalSeconds) {
        totalSeconds %= 3600;
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = Math.floor(totalSeconds % 60);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        this.timeEntity.element.text = minutes + ":" + seconds;
    },
});
