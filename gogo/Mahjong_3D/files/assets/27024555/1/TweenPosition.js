var TweenPosition = pc.createScript('tweenPosition');

TweenPosition.attributes.add('initFrom',        { type: 'vec3', default: [0, 0, 0], title: 'From' });
TweenPosition.attributes.add('initTo',          { type: 'vec3', default: [0, 0, 0], title: 'To' });
TweenPosition.attributes.add('playStyle', {
    type: 'number',
    enum: [
        { 'Once': 0 },
        { 'Loop': 1 },
        { 'PingPong': 2 }
    ],
    title: 'Play Style'
});

TweenPosition.attributes.add('duration',        { type: 'number', default: 1, title: 'duration' });
TweenPosition.attributes.add('curve',           { type: 'curve', title: 'Animation Curve' });
TweenPosition.attributes.add('ignoreTimeScale', { type: 'boolean', default: true, title: 'Ignore Time Scale' });
TweenPosition.attributes.add('startDelay',      { type: 'number', default: 0, title: 'Start Delay' });
TweenPosition.attributes.add('debug',           { type: 'boolean', default: false, title: 'Show Debug' });
TweenPosition.attributes.add('startAtEnable',   { type: 'boolean', default: true, title: 'Start on Initialize' });
TweenPosition.attributes.add('startOnEnable',   { type: 'boolean', default: true, title: 'Start on Enable'});


pc.extend(TweenPosition.prototype, {
    initialize: function() {
        this._time = this.startAtEnable ? 0 : -1;
        this._oldTime = this.app._time || 0;

        this._from = this.initFrom.clone();
        this._to = this.initTo.clone();
    },

    reset: function() {
        this._time = this.startAtEnable ? 0 : -1;
        this._oldTime = this.app._time || 0;

        this._from = this.initFrom.clone();
        this._to = this.initTo.clone();

        this._initPosition = this.entity.getLocalPosition().clone();

        this._newPosition = new pc.Vec3(0, 0, 0);
    },

    postInitialize: function() {
        this._initPosition = this.entity.getLocalPosition().clone();

        this._newPosition = new pc.Vec3(0, 0, 0);

        this.on('state', function(enabled) {
            if (enabled && this.startOnEnable) {
                //this.startTween();
            }
        });

        if (this.startAtEnable) {
            //this.startTween();
        }
    },

    update: function(dt) {
        // Only execute code if this.time is between 0 and this.duration + this.startDelay
        if (this._time >= 0 && this._time <= this.duration + this.startDelay) {
            // Update time
            this.updateTime(dt);

            // Only update opacity after the start delay.
            if (this._time > this.startDelay) {
                // Formula: position = initPosition + (from - (from - to) * curve)
                this._newPosition
                    .set(this._from.x, this._from.y, this._from.z)
                    .sub(this._to)
                    .scale(this.curve.value((this._time - this.startDelay) / this.duration))
                    .sub2(this._from, this._newPosition)
                    .add(this._initPosition);

                if (this.debug) {
                    console.log(this._time, this._newPosition.toString());
                }

                this.entity.setLocalPosition(this._newPosition);
            }
            // Set new old time 
            this._oldTime = this.app._time;
        }

        // Execute if this.time is higher than this.duration + this.startDelay
        if (this._time >= this.duration + this.startDelay) {
            switch (this.playStyle) {
                case 0: break;
                case 1: this._time = 0;
                    break;
                case 2: this._time = 0; 
                    var temp = this._from;
                    this._from = this._to;
                    this._to = temp;
                    break;
            }
        }
    },

    setPosition: function(start, end) {
        this.initFrom = start.clone();
        this.initTo = end.clone();
    },

    /*
     * Update the time with the game time or the unscaled time
     */
    updateTime: function(dt) {
        this._time += this.ignoreTimeScale ? (this.app._time - this._oldTime) / 1000 : dt;
    },

    /*
     * Use this method to start a tween where the init position is resetted to the current position of the entity.
     */
    moveTo: function(from, to) {
        this._time = 0;

        this._from.set(0, 0, 0);
        this._to.set(0, 0, 0);
        this._to.sub(from);
        this._initPosition.set(from.x, from.y, from.z);
        this.oldTime = this.app._time;
    },

    /*
     * Set the correct value for starting a tween
     * This method can also be called to start a new tween
     */
    startTween: function() {
        this._time = 0;
        this._from.set(this.initFrom.x, this.initFrom.y, this.initFrom.z);
        this._to.set(this.initTo.x, this.initTo.y, this.initTo.z);
        this.entity.setLocalPosition(this._from.x + this._initPosition.x, this._from.y + this._initPosition.y, this._from.z + this._initPosition.z);
        this.oldTime = this.app._time;
    }, 

    stopTween: function() {
        this._time = -1;  
    },
});



