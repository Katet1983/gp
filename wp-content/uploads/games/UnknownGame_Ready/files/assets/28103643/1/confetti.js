var Confetti = pc.createScript('confetti');

Confetti.attributes.add('confettiParticles', {type: 'entity', array: true});

pc.extend(Confetti.prototype, {
    initialize: function() {
        pc.confetti = this;
        for(var i = 0; i < this.confettiParticles.length; i++) {
            var ps = this.confettiParticles[i].particlesystem;
            ps.reset();
        }
        this.app.on('GameManager:reset', this.stop, this);
    },
    
    play: function() {
        for(var i = 0; i < this.confettiParticles.length; i++) {
            var ps = this.confettiParticles[i].particlesystem;
            ps.reset();
            ps.play();
        }
    },
    
    pause: function() {
        for(var i = 0; i < this.confettiParticles.length; i++) {
            var ps = this.confettiParticles[i].particlesystem;
            ps.pause();
        }
    },
    
    stop: function() {
        for(var i = 0; i < this.confettiParticles.length; i++) {
            var ps = this.confettiParticles[i].particlesystem;
            ps.reset();
            ps.stop();

        }
    },
    
    startLoop: function(loopTime, amount) {
        this.forceStop = false;
        this.doLoop(loopTime, amount);        
    },
    
    stopLoop: function() {
        this.stop();
        this.forceStop = true;
    },
    
    doLoop: function(loopTime, amount) {
        if (amount < 1 || this.forceStop) {
            return;
        }
        
        this.play();
        setTimeout(function(){
            this.doLoop(loopTime, amount-1);
        }.bind(this), loopTime);
    }
});



// swap method called for script hot-reloading
// inherit your script state here
// Confetti.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/