var EventTrackButton = pc.createScript('eventTrackButton');

EventTrackButton.attributes.add('eventName', { type: 'string', enum: [ { PAUSE: 'EVENT_PAUSE' }, { RESUME: 'EVENT_RESUME' }, { QUIT: 'EVENT_LEVELFAIL' }] });
EventTrackButton.attributes.add('pauseScreen', { type: 'entity' });

pc.extend(EventTrackButton.prototype, {

    initialize: function() {
        // mouse events
        this.entity.script.switchUibutton.deactivate();
        this.entity.script.switchUibutton.on('click', this._onClick, this);
    },

    _onClick: function() {
        // this.app.fire('UIManager:showUI', 'Pause Screen');
        // this.app.fire('UIManager:hideUI', 'In-Game Screen');
        this.app.fire('Audio:sfx', 'sfx_button_click.mp3');
        this.pauseScreen.script.pauseScreen.onEventButtonPress(this.eventName, this._onEvent, this);
    },

    _onEvent: function() {
        this.fire('click');

        this.entity.script.switchUibutton.changeUIEntities();
    },
});
