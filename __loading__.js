pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        document.body.style['-webkit-user-select'] = 'none';
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'none';

        var logo = document.createElement('img');
        logo.src = 'https://i.ibb.co/xHwrbWX/Logo.png';
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

        var logo1 = document.createElement('img');
        logo1.src = 'https://i.ibb.co/QJ5hzkW/Logo-base.png';
        splash.appendChild(logo1);
        logo1.onload = function () {
            splash.style.display = 'block';
        };

    };

    var hideSplash = function () {
        document.body.style['-webkit-user-select'] = 'none';
        var splash = document.getElementById('application-splash-wrapper');
        splash.parentElement.removeChild(splash);
    };

    var setProgress = function (value) {
        document.body.style['-webkit-user-select'] = 'none';
        var bar = document.getElementById('progress-bar');
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
    };

    var createCss = function () {
        var css = [
            'body {',
            '    background-color: #FFFFFF;',
            '}',
            '',
            '#application-splash-wrapper {',
            '    position: absolute;',
            '    top: 100;',
            '    left: 0;',
            '    height: 100%;',
            '    width: 100%;',
            // "    background-image: url('https://i.ibb.co/RgRbMxZ/LOGOS-Splash-1.jpg');",
            // "    background-size: cover",
            "    background-color: #FFFFFF",
            '}',
            '',
            '#application-splash {',
            '    position: absolute;',
            '    top: calc(50% - 28px);',
            '    width: 264px;',
            '    left: calc(50% - 132px);',
            '}',
            '',
            '#application-splash img {',
            '    width: 100%;',
            '}',
            '',
            '#progress-bar-container {',
            '    margin: 20px auto 0 auto;',
            '    height: 2px;',
            '    width: 100%;',
            '    background-color: #1d292c;',
            '}',
            '',
            '#progress-bar {',
            '    width: 0%;',
            '    height: 100%;',
            '    background-color: #FFD206;',
            '}',
            '',
            '@media (max-width: 480px) {',
            '    #application-splash {',
            '        width: 170px;',
            '        left: calc(50% - 85px);',
            '    }',
            '}'
        ].join('\n');

        document.body.style['-webkit-user-select'] = 'none';
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
    app.on('start', hideSplash);
});