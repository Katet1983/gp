/* jshint esversion: 6 */
pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'block';
        
        var logo = document.createElement('img');
        logo.src = 'data:image/png;base64,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';
        logo.id = 'logo';
        splash.appendChild(logo);
        
        var loaderBack = document.createElement('div');
        loaderBack.id = 'loaderBack';
        splash.appendChild(loaderBack);
        
        var loaderBar = document.createElement('div');
        loaderBar.id = 'loaderBar';
        splash.querySelector('#loaderBack').appendChild(loaderBar);
        
        var loadingText = document.createElement('span');
        loadingText.innerHTML = '0%';
        loadingText.id = 'loadingText';
        splash.querySelector('#loaderBack').appendChild(loadingText);
    };

    var hideSplash = function () {
        if(window.debugOutput) {
            console.warn('©IFGD, ©Famobi 2020');
        }
        var splash = document.getElementById('application-splash-wrapper');
        if(splash && splash.parentElement) {
            splash.parentElement.removeChild(splash);
        }
        var transitionScreen = TransitionScreen.app.root.findByName("TransitionScreen");
        transitionScreen.hidePreloader(() => {});
        TransitionScreen.app.fire(EventTypes.PRELOADER_FINISHED);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('loaderBar');
        var loadingText = document.getElementById('loadingText');
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            const displayValue = value;
            bar.style.width = displayValue * 99 + '%';
            loadingText.innerHTML = Math.round(displayValue * 99) + '%';
        }
        const loadingProgressValue = value * 99; 
        if(typeof famobi !== "undefined" && famobi.setPreloadProgress) {
            famobi.setPreloadProgress(Math.floor(loadingProgressValue));
        }
    };

    var createCss = function () {
        var css = [
            
            'body {',
            '    background-color: #1D1D15;',
            '}',
            
            'html {',
            '    background-color: #1D1D15;',
            '}',
            
            '.hide {',
            '   opacity: 0 !important;',
            '   transition: opacity 0.35s;',
            '}',
            
            '#logo {',
            '   position: absolute;',
            '   top: calc(50% - 155px);',
            '   left: calc(50% - 150px);',
            '}',
    
            '#application-splash-wrapper {',
            '    position: absolute;',
            '    top: 0;',
            '    left: 0;',
            '    height: 100%;',
            '    width: 100%;',
            '    background-color: #1D1D15;',
            '}',

            '#application-splash {',
            '    position: absolute;',
            '    width: 300px;',
            '    top: calc(50% + 15px);',
            '    left: calc(50% - 150px);',
            '}',

            '#application-splash img {',
            '    width: 100%;',
            '}',
            
             '#loaderBack {',
            '    height: 33px;',
            '    width: 100%;',
            '    position: absolute;',
            "    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfwAAAA4CAYAAAAYXEoFAAAEAklEQVR4nO3dz27UZhSG8fcc25N4klDBQPkjkMoGlbJoVfUC2HYJUq4yEtNLoKteAK1AUaW2KkpYkE0HZeIZ+ztdhKRhmjRAM3EYP7/V+LM9OrtHju2J6QOsS2VTloNIqd9k2aUsojjcGVHKvf8h3wcAAE6Wmmbq7n+9u5h2zH03G493NqTx+36XnXbAulROer277n6DoAMAcIGktJtSetWbTH47Lf4nBv+hlF8uigcqijvH7Q8ptwg/spSFlH/cxAAAYFZIyaXpO4tmk2MPnk7/zKfTzZPCf2zwH0mDtLT0nWdZIUlJMo9YjoilkApzL447DwAAzJ+lVIc0NbO9ZLbnUkj7twAy91+ejMcv/3XO7MLjsrwdZt+83cwipbWQls3dZ48FAAAXQEpjuY9MqiVJTbM5rKrNo4dkRzeOxj5FXJLZFZkVZnbqvX4AANASs0LSSkSYmVVyH3yV57vP6/rwgb/D4H8vXfIs+zbc80jpmrmXrQwNAAA+ipn1IqVlM6tkdv3udPrqV6mSpMM/0y+X5QNlWU8pXeUePQAAnyZzL1JK10LKe8vLXx+su7T/kJ7MBsQeAIBPn7l7pHTZ3T97XJa3pbfBb/r9uxGxRuwBAFgM5l5ExFpIdyTJ16XSpJsRsdL2cAAA4OxExIrMPl+Xyrwpy4FFrIrX7gAAWCjm7ilipSnLgUddD7i6BwBgQUX0o64HeZNlV5yrewAAFpK5eyNdcTe70fYwAABgftzshltEr+1BAADA/FhEzzXz87oAAGDhZB7u/EtbAAAWWLjnPKwHAEAHEHwAADqA4AMA0AEEHwCADiD4AAB0AMEHAKADCD4AAB1A8AEA6ACCDwBABxB8AAA6gOADANABBB8AgA4g+AAAdADBBwCgAwg+AAAdQPABAOgAgg8AQAcQfAAAOoDgAwDQAQQfAIAOIPgAAHQAwQcAoAMIPgAAHeAW8brtIQAAwPxYxGuX2aTtQQAAwByZTTyk7bbnAAAA8xPStlvTjNoeBAAAzI81zcjzqtpqexAAADA/eVVt+Yb0xiSiDwDAAjJpa0N6s/9aXtNstjwPAACYh7eNd0kaVtUmr+cBALBgIkbDqvon+JJkZj+1NxEAADhrbvb04HN28OH5dPrmfp73ZHa9lakAAMCZsYhnw/H4+cF2dnTni7p+eT/LVmV29fxHAwAAZ6Jpfv9hb+/Ho0vZ7DEv6vqPL4tCkm6d11wAAOBsWMSz2dhLkp10wuN+/2aKeCiztfmOBgAA/reIkZs9fbK7e+wv6J4Y/AOPlpbuKcvuBVf8AABcPBEja5pnw8nk5/867NTgH1iXVute74swu2Xuq8F9fgAAzl/ESCntWMSWJpPtobTzPqf9DZ5VKKZBCrkaAAAAAElFTkSuQmCC');",
            '    background-repeat: no-repeat;',
            '    background-position: left center;',
            '    background-size: 300px 100%;',
            '}',
            
            '#loaderBar {',
            '    width: 0%;',
            '    height: 100%;',
            '    position: absolute;',
            "    background-image: url('data:image/png;base64,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');",
            "    background-repeat: no-repeat;",
            "    background-size: 300px 100%;",
            '}',
            
            '#loadingText {',
            '    color: white;',
            '    font-size: 26px;',
            '    font-weight: bold;',
            '    line-height: 33px;',
            '    left: 0;',
            '    right: 0;',
            '    top: 0;',
            '    bottom: 0;',
            '    margin: auto;',
            '    position: absolute;',
            '    text-align: center;',
            '    z-index: 100;',
            '}',
                        
            '@media (max-width: 480px) {',
            '   #application-splash {',
                '   width: 180px;',
                '   left: calc(50% - 90px);',
                '   top: calc(50% - 15px);',
                '}',

                '#loaderBack {',
                '    margin: 20px auto 0 auto;',
                '    height: 20px;',
                '    background-size: 180px 100%;',
                '}',
            
                '#loaderBar {',
                "    background-size: 180px 100%;",
                '}',
            
                '#loadingText {',
                '    font-size: 16px;',
                '    line-height: 20px;',
                '    top: 0;',
                '}',
            
                '#logo {',
                '   position: absolute;',
                '   top: calc(50% - 70px);',
                '   left: calc(50% - 89px);',
                '}',
            '}'
        ].join("\n");

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };
    
     var injectForcedModeProperties = function() {
        console.warn('Injecting forced mode properties...');
        const forcedModePproperties = getForcedModeProperties();
        
        if(forcedModePproperties.state.level) {
            GameplayController.currentLevel = +forcedModePproperties.state.level;
        }
    };
        
    var doAPIHandshake = function(startGameCallback) {   
        if(isExternalStart()) {
            app.timeScale = 0;
            famobi.onRequest("startGame", function() {
                app.timeScale = 1.0;                               
                if(startGameCallback) startGameCallback();
            });
        } else {
            if(startGameCallback) startGameCallback();
        }
        
        /* game ready report */
        famobi.gameReady();
    };
    
    
    var startLevelDirectly = function() {
        
        WindowManager.startGameplay();
        app.fire(EventTypes.PLAY_PRESSED);
        
         /* timeout is a must to let the game properly initialize level */
        setTimeout(() => doAPIHandshake(() => {
            app.fire('startGameRequested');
            famobi.log('Handshake completed, skip_title mode');
        }), 0);
    };


    createCss();

    showSplash();
        
    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', function() {
        famobi.log('application is starting...');
    });
    app.on('postinitialize', function() {
        /* inject forced mode properties if needed */
        if(isForcedMode()) {
            injectForcedModeProperties();
        }
    });
    app.once('preloader:hide', () => {
        
        /* game is loaded, send final progress to Famobi API. */
        famobi.setPreloadProgress(100);
       
        /* hide preloader */
        hideSplash();
        
        /* if running into MonkeyGames container, start the gameplay/level screen directly */
        if(skipTitleScreen()) {
             startLevelDirectly();                
        } else {
             /* timeout is a must to let the game properly initialize a level */
             setTimeout(() => doAPIHandshake(() => {
                 app.fire('startGameRequested');
                 famobi.log('Handshake completed in normal gameplay mode');
             }), 0);
        }    
    });
    app.once('startGameRequested', () => famobi.playerReady());
});