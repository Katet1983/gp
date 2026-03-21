window._createLoadingScreen = window._createLoadingScreen || function () {

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
            splash.appendChild(logo);
            logo.onload = function () {
                splash.style.display = 'block';
            };

            var container = document.createElement('div');
            container.id = 'progress-bar-container';
            splash.appendChild(container);

            var bar = document.createElement('div');
            bar.id = 'progress-bar';
            container.appendChild(bar);


            // image Top corner
            var gameLogo = document.createElement('img');
            gameLogo.id = 'game-logo';
            gameLogo.src = 'data:image/webp;base64,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';
            wrapper.appendChild(gameLogo);
            gameLogo.onload = function () {
                gameLogo.style.display = 'block';
            };

        };

        var hideSplash = function () {
            var splash = document.getElementById('application-splash-wrapper');
            splash.parentElement.removeChild(splash);

            APIMediator.sendPreloadProgress(100);
            APIMediator.initCallbacks();
            APIMediator.reportGameReady();
        };

        var setProgress = function (value) {

            var bar = document.getElementById('progress-bar');
            if (bar) {
                value = Math.min(1, Math.max(0, value));
                bar.style.width = value * 99 + '%';
            }

            value = Math.min(1, Math.max(0, value));
            APIMediator.sendPreloadProgress(value * 99);
        };

        var createCss = function () {
            var css = [
                'body {',
                '    background-color: #FFFFFF;',
                '}',
                '',
                '#application-splash-wrapper {',
                '    position: absolute;',
                '    top: 0;',
                '    left: 0;',
                '    height: 100%;',
                '    width: 100%;',
                '    background-color: #FFFFFF;',
                '}',
                '',
                '#application-splash {',
                '    position: absolute;',
                '    top: calc(50% - 28px);',
                '    width: 264px;',
                '    left: calc(50% - 132px);',
                '}',
                '#game-logo {',
                '    position: absolute;',
                '    top: calc(50% - 237px);',
                '    width: 310px;',
                '    left: calc(50% - 155px);',
                '}',
                '',
                '#application-splash img {',
                '    width: 100%;',
                '}',
                '',
                '#progress-bar-container {',
                '    margin: 20px auto 0 auto;',
                '    height: 10px;',
                '    width: 100%;',
                '    background-color: #bbbbbb;',
                '    border-radius: 5px;',
                '}',
                '',
                '#progress-bar {',
                '    width: 0%;',
                '    height: 100%;',
                '    background-color: #35B2FF;',
                '    border-radius: 5px;',
                '}',
                '',
                '@media (max-width: 480px) {',
                '    #application-splash {',
                '        width: 170px;',
                '        left: calc(50% - 85px);',
                '    }',
                '    #game-logo {',
                '        top: calc(50% - 125px);',
                '        width: 200px;',
                '        left: calc(50% - 100px);',
                '    }',
                '}',
                `@media (max-height: 480px) {
                    #application-splash {
                        top: calc(50% + 50px);
                        width: 264px;
                        left: calc(50% - 132px);
                    }
                    #game-logo {
                        top: calc(50% - 130px);
                        width: 310px;
                        left: calc(50% - 155px);
                    }
                }`
            ].join('\n');

            var style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            document.head.appendChild(style);
        };

        createCss();
        showSplash();
        app.on('preload:end', function () {
            app.off('preload:progress');
        });
        app.on('preload:progress', setProgress);
        app.on('start', () => {
            const inputBlocker = app.root.findByName('InputBlocker');
            inputBlocker.element.enabled = true;
            app.once('OnLevelLoaded', () => {
                inputBlocker.element.enabled = false;
                hideSplash();
            });
        });
    });
};

if (APIMediator.isPlaycanvasEnvironment() && typeof GameInterface === 'undefined') {

    const gameInterfaceScript = document.createElement('script');
    gameInterfaceScript.setAttribute('src', 'https://api.h5games.com/v/game-interface.js');
    document.head.appendChild(gameInterfaceScript);

    gameInterfaceScript.onload = () => {
        window.GameInterface.init([], {
            "features": {
                "rewarded": true,
                "audio": true,
                "tutorial": true,
                "copyright": true,
                "credits": true,
                "privacy": true,
                "pause": true,
                "score": true,
                "progress": true,
                "visibilitychange": false
            }
        }).then(() => {
            window._createLoadingScreen();
        });
    };
} else {
    window._createLoadingScreen();
}
