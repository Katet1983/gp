var TweenScale = pc.createScript('tweenScale');

TweenScale.attributes.add('initFrom', { type: 'vec3', default: [0, 0, 0], title: 'From' });
TweenScale.attributes.add('initTo', { type: 'vec3', default: [0, 0, 0], title: 'To' });
TweenScale.attributes.add('playStyle', {
    type: 'number',
    enum: [
        { 'Once': 0 },
        { 'Loop': 1 },
        { 'PingPong': 2 }
    ],
    title: 'Play Style'
});

TweenScale.attributes.add('duration', { type: 'number', default: 1, title: 'duration' });
TweenScale.attributes.add('curve', { type: 'curve', title: 'Animation Curve' });
TweenScale.attributes.add('ignoreTimeScale', { type: 'boolean', default: true, title: 'Ignore Time Scale' });
TweenScale.attributes.add('startDelay', { type: 'number', default: 0, title: 'Start Delay' });
TweenScale.attributes.add('debug', { type: 'boolean', default: false, title: 'Show Debug' });
TweenScale.attributes.add('startOnEnable', { type: 'boolean', default: true, title: 'Start on Enable'});
TweenScale.attributes.add('startOnInit', { type: 'boolean', default: true, title: 'Start on Initialize'});

pc.extend(TweenScale.prototype, {
    initialize: function() {
        this._time = this.startAtEnable ? 0 : this.duration + this.startDelay + 1;
        this._oldTime = this.app._time || 0;

        this._from = this.initFrom;
        this._to = this.initTo;
        this._temp = new pc.Vec3(0,0,0);
        this._newScale = new pc.Vec3(0, 0, 0);
    },

    postInitialize: function() {
        this._initScale = this.entity.getLocalScale().clone();

        this.on('state', function(enabled) {
            if (enabled && this.startOnEnable) {
                this.startTween();
            }
        });

        if (this.startOnInit) {
            this.startTween();
        }
    },

    update: function(dt) {
        // Only execute code if this.time is between 0 and this.duration + this.startDelay
        if (this._time >= 0 && this._time <= this.duration + this.startDelay) {
            // Update time
            this._updateTime(dt);

            // Only update opacity after the start delay.
            if (this._time > this.startDelay) {
                // Formula: newScale = (from - (from - to) * curve) * initscale
                this._newScale
                    .set(this._from.x, this._from.y, this._from.z)
                    .sub(this._to)
                    .scale(this.curve.value((this._time - this.startDelay) / this.duration))
                    .sub2(this._from, this._newScale)
                    .mul(this._initScale);

                if (this.debug) {
                    console.log(this._time, newScale.toString());
                }

                this.entity.setLocalScale(this._newScale.x, this._newScale.y, this._newScale.z);
            }  

            // Set new old time
            this._oldTime = this.app._time;
        }

        // Execute if this.time is higher than duration
        if (this._time >= this.duration + this.startDelay || this._time <= 0) {
            switch (this.playStyle) {
                case 0: break;
                case 1: this._time = 0;
                    break;
                case 2: this._time = 0;
                    this._temp.set(this._from.x, this._from.y, this._from.z);
                    this._from.set(this._to.x, this._to.y, this._to.z);
                    this._to.set(this._temp.x, this._temp.y, this._temp.z);
                    break;
            }
        }
    },

    /*
     * Update the time with the game time or the unscaled time
     */
    _updateTime: function(dt) {
        this._time += this.ignoreTimeScale ? (this.app._time - this._oldTime) / 1000 : dt;
    },


    /*
     * Set the correct value for starting a tween
     * This method can also be called to start a new tween
     */
    startTween: function() {
        if (!this._initScale) return;
        this._time = 0;
        this._from.set(this.initFrom.x, this.initFrom.y, this.initFrom.z);
        this._to.set(this.initTo.x, this.initTo.y, this.initTo.z);
        this.entity.setLocalScale(this._from.x * this._initScale.x, this._from.y * this._initScale.y, this._from.z * this._initScale.z);
        this._oldTime = this.app._time;
    },
});
