var HamburgerMenu = pc.createScript('hamburgerMenu');

HamburgerMenu.attributes.add('menuButton', { type: 'entity' });
HamburgerMenu.attributes.add('content', { type: 'entity', array: true });
HamburgerMenu.attributes.add('unfoldDirectionType', { type: 'number', enum: [
    { 'top':    0 },
    { 'bottom': 1 },
    { 'left':   2 },
    { 'right':  3 }
]});
HamburgerMenu.attributes.add('unfoldDistance', { type: 'number', default: 10});
HamburgerMenu.attributes.add('unfoldDuration', { type: 'number', default: 1});
HamburgerMenu.attributes.add('autoCloseTimer', { type: 'number'});

pc.extend(HamburgerMenu.prototype, {
    initialize: function() {  
        this.directionTranslate = [new pc.Vec2(0, 1), new pc.Vec2(0, -1), new pc.Vec2(-1, 0), new pc.Vec2(1, 0)];
        this.unfoldDirection = this.directionTranslate[this.unfoldDirectionType];

        this.countdown = false;
        this.counter = 0;
        this.isOpen = false;

        this.menuButton.element.on('mousedown', this._onPress, this);
        this.menuButton.element.on('touchstart', this._onPress, this);
    },
    
    postInitialize: function() {
        window.famobi_HamburgerButtons = this.content;
        
        //Famobi Hide Buttons
        if(window.famobi.audio != undefined && !window.famobi.audio.hasControls()) {
            this.entity.enabled = false;
        }
    },

    update: function(dt) {
        if (this.countdown) {
            this.counter -= dt;
            
            if (this.counter <= 0) {
                this.countdown = false;
                this.counter = 0;
                this.toggleMenu(false, false);
            }
        }
    },

    _onPress: function() {
        this.toggleMenu();
        this.app.fire('Audio:playSFX', 'button.mp3');
    },

    /*
     * Open or close hamburger menu
     * par isIntant: use tween to open content or not
     * par isOpen: force to certain position, leave undefined to toggle
     */
    toggleMenu: function(isInstant, isOpen) {
        if (isOpen === undefined) {
            this.isOpen = !this.isOpen;
        } else {
            this.isOpen = isOpen;
        }
        
        if (this.isOpen && this.autoCloseTimer && this.autoCloseTimer !== 0) {
            this.countdown = true;
            this.counter = this.autoCloseTimer;
        }

        for (var i = 0; i < this.content.length; i += 1) {
            this._setItemPosition(this.content[i], this.isOpen ? this.unfoldDirection.clone().scale(this.unfoldDistance * (i + 1) ): new pc.Vec2(0, 0), isInstant);
        }
    },

    _setItemPosition: function(item, position, isInstant) {
        if (isInstant) {
            item.setLocalPosition(position.x, position.y, 0);
        } else {
            var pos = new pc.Vec3(position.x, position.y, 0);
            item.tween(item.getLocalPosition()).to(pos, this.unfoldDuration, pc.SineOut).start();
        }
    }
});