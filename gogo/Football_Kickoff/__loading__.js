// More information on creating custom loading screens can be found here
// http://developer.playcanvas.com/en/user-manual/designer/loading-screen/

pc.script.createLoadingScreen(function (app) {

    var css = [
        'body {',
        '    background-color: #283538;',
        '}',

        '#application-splash-wrapper {',
        '    position: absolute;',
        '    top: 0;',
        '    left: 0;',
        '    height: 100%;',
        '    width: 100%;',
        '    background-color: #283538;',
        '}',

        '#application-splash {',
        '    position: absolute;',
        '    top: calc(50% - 132px);',
        '    width: 264px;',
        '    left: calc(50% - 132px);',
        '}',

        '#application-splash img {',
        '    width: 100%;',
        '}',

        '#progress-bar-container {',
        '    margin: 20px auto 0 auto;',
        '    height: 2px;',
        '    width: 100%;',
        '    background-color: #1d292c;',
        '}',

        '#progress-bar {',
        '    width: 0%;',
        '    height: 100%;',
        '    background-color: #f60;',
        '}',
        '@media (max-width: 480px) {',
        '    #application-splash {',
        '        width: 170px;',
        '        left: calc(50% - 85px);',
        '    }',
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
    
    var wrapper = document.createElement('div');
    wrapper.id = 'application-splash-wrapper';
    document.body.appendChild(wrapper);

    var splash = document.createElement('div');
    splash.id = 'application-splash';
    wrapper.appendChild(splash);
    splash.style.display = 'none';

    var container = document.createElement('div');
    container.id = 'progress-bar-container';
    splash.appendChild(container);

    var bar = document.createElement('div');
    bar.id = 'progress-bar';
    container.appendChild(bar);
    
    // on start preload, set icon
    app.on('preload:start', function() {
        var splash = document.getElementById('application-splash');
        
        var logoAsset = app.assets.find('logo.jpg');
        
        if (logoAsset) {
            var logo = document.createElement('img');    
            logo.src = logoAsset.getFileUrl();

            // Insert DOM before the progress bar
            if (splash.childNodes.length > 0) {
                splash.insertBefore(logo, splash.childNodes[0]);
            } else {
                splash.appendChild(logo);
            }
            
            logo.onload = function () {
                splash.style.display = 'block';
            };
        }
    });
        
    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    
    // on add progress
    app.on('preload:progress', function (value) {
        var bar = document.getElementById('progress-bar');
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
    });
    
    // on hide splash
    app.on('start', function() {
        var splash = document.getElementById('application-splash-wrapper');
        splash.parentElement.removeChild(splash);
    });
});