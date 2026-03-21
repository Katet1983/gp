/*
    FAMOBI LOADING SCREEN
    ++++ Feel free to change ++++

    Purpose: This loading screen functions as a placeholder or 
    default loading screen, it has the logic for reporting loading 
    progress to our api implemented, therefore, if you with to 
    change the loading screen, feel free to do so, but copy or 
    keep the snippet marked inside the setProgress function 
    in line 121 and following

    >> 
        This script contains the following famobi api calls:
        - window.famobi.setPreloadProgress(pProgress);
        - window.famobi.gameReady();
    <<
*/

pc.script.createLoadingScreen(function (app) {
    var ctx,offset,gradient,animation = undefined;
    var canvas = document.createElement('canvas');
    var progress = 0;

    var showSplash = function () {
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        wrapper.innerHTML = `
            <div class="fam_bgr">
                <div class="splash_wrapper">
                    <div class="logo_wrapper">
                    <span class="square blue row_1 col_1 order_0"></span>
                    <span class="square blue row_1 col_2  order_1 ani_shiftright"></span>
                    <span class="square orange row_2 col_1 order_1 ani_shiftdown"></span>
                    <span class="triangle row_2 col_2 order_1 ani_shiftright ani_delay_long ani_speed_fast"></span>
                    <span class="square grey row_3 col_1 order_2 ani_shiftdown ani_delay_long ani_speed_fast"></span>
                    </div>
                    <div class='title_wrapper ani_title'>
                    <svg width="100%" height="100%" viewBox="0 0 125 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                        <g transform="matrix(1,0,0,1,-52.25,-46.5)">
                            <path d="M65.7,65.4L58,65.4L58,77.6L53.3,77.6L53.3,50.6L68.7,50.6L68.7,54.7L58,54.7L58,61.2L65.7,61.2L65.7,65.4Z" style="fill:rgb(51,51,51);fill-rule:nonzero;"/>
                            <path d="M82,77.6L81.7,75L81.5,75C80.8,75.9 79.8,76.7 78.5,77.2C77.2,77.8 75.9,78 74.6,78C72.9,78 71.5,77.5 70.6,76.5C69.6,75.5 69.1,74.2 69.1,72.6C69.1,71.5 69.3,70.5 69.8,69.6C70.3,68.7 71,68 71.9,67.4C72.8,66.8 73.9,66.3 75.1,66C76.4,65.7 77.8,65.5 79.3,65.5L81.1,65.5L81.1,64.9C81.1,63.8 80.8,63.1 80.1,62.6C79.4,62.1 78.3,61.9 76.8,61.9C74.8,61.9 73,62.3 71.4,63.2L70.5,59.8C72.3,58.7 74.5,58.2 77.1,58.2C79.8,58.2 81.9,58.8 83.3,59.9C84,60.4 84.5,61.1 84.9,61.9C85.3,62.7 85.5,63.7 85.5,64.8L85.5,77.6L82,77.6ZM76.4,74.5C77.3,74.5 78.1,74.3 79,73.9C79.9,73.5 80.6,72.9 81.1,72.2L81.1,68.5L80.3,68.5C78.1,68.5 76.4,68.8 75.4,69.4C74.4,70 73.9,70.9 73.9,72.1C74,73.7 74.8,74.5 76.4,74.5Z" style="fill:rgb(51,51,51);fill-rule:nonzero;"/>
                            <path d="M103.2,77.6L103.2,65.2C103.2,63 102.3,61.9 100.5,61.9C100.1,61.9 99.6,62 99.1,62.1C98.6,62.3 98.1,62.5 97.6,62.8C97.1,63.1 96.7,63.5 96.3,64C95.9,64.5 95.6,65 95.5,65.6L95.5,77.6L91,77.6L91,58.8L94.5,58.8L94.7,61.6L94.9,61.6C95.4,60.5 96.3,59.6 97.5,59C98.7,58.4 99.9,58.2 101.3,58.2C102.6,58.2 103.7,58.5 104.8,59C105.8,59.5 106.6,60.4 107.1,61.6C107.6,60.5 108.5,59.6 109.7,59.1C110.9,58.5 112.1,58.3 113.5,58.3C114.4,58.3 115.2,58.4 116,58.6C116.8,58.8 117.5,59.2 118,59.7C118.6,60.2 119,60.9 119.4,61.7C119.7,62.5 119.9,63.6 119.9,64.8L119.9,77.6L115.4,77.6L115.4,65.2C115.4,63 114.5,61.9 112.7,61.9C112.3,61.9 111.8,62 111.3,62.1C110.8,62.3 110.3,62.5 109.8,62.8C109.3,63.1 108.9,63.5 108.5,64C108.1,64.5 107.8,65 107.7,65.6L107.7,77.6L103.2,77.6Z" style="fill:rgb(51,51,51);fill-rule:nonzero;"/>
                            <path d="M133.5,58.2C135.2,58.2 136.6,58.5 137.8,59C139,59.6 140,60.3 140.8,61.2C141.6,62.1 142.1,63.2 142.5,64.4C142.9,65.6 143.1,66.9 143.1,68.2C143.1,69.5 142.9,70.8 142.5,72C142.1,73.2 141.6,74.2 140.8,75.1C140,76 139,76.7 137.9,77.2C136.7,77.7 135.3,78 133.7,78C132,78 130.6,77.7 129.4,77.2C128.2,76.7 127.2,75.9 126.4,75C125.6,74.1 125,73 124.6,71.8C124.2,70.6 124,69.3 124,68C124,66.7 124.2,65.4 124.6,64.2C125,63 125.6,62 126.3,61C127.1,60.1 128.1,59.4 129.3,58.8C130.5,58.5 131.9,58.2 133.5,58.2ZM133.6,74.7C134.4,74.7 135.1,74.5 135.7,74.2C136.3,73.9 136.8,73.4 137.2,72.8C137.6,72.2 137.9,71.5 138,70.8C138.2,70 138.3,69.2 138.3,68.4C138.3,67.5 138.2,66.7 138,65.9C137.8,65.1 137.5,64.4 137.1,63.8C136.7,63.2 136.2,62.7 135.6,62.3C135,61.9 134.3,61.7 133.4,61.7C132.6,61.7 131.9,61.9 131.4,62.2C130.8,62.5 130.4,63 130,63.6C129.6,64.2 129.4,64.8 129.2,65.6C129,66.4 128.9,67.2 128.9,68C128.9,68.9 129,69.7 129.2,70.5C129.4,71.3 129.7,72 130.1,72.6C130.5,73.2 131,73.7 131.6,74.1C132.1,74.5 132.8,74.7 133.6,74.7Z" style="fill:rgb(51,51,51);fill-rule:nonzero;"/>
                            <path d="M157.9,78.1C156.4,78.1 155.2,77.8 154.2,77.2C153.2,76.6 152.4,75.9 151.6,75L151.4,75L151.1,77.6L147.5,77.6L147.5,47.4L152,47.4L152,60.7C152.6,59.9 153.5,59.3 154.5,58.9C155.5,58.5 156.7,58.2 158,58.2C159.4,58.2 160.7,58.5 161.7,59C162.8,59.5 163.6,60.3 164.4,61.2C165.1,62.1 165.6,63.1 166,64.3C166.3,65.5 166.5,66.7 166.5,68C166.5,69.4 166.3,70.8 165.9,72C165.5,73.2 164.9,74.3 164.2,75.2C163.5,76.1 162.5,76.8 161.5,77.3C160.4,77.8 159.2,78.1 157.9,78.1ZM157.3,74.7C158.1,74.7 158.8,74.5 159.4,74.1C160,73.7 160.5,73.2 160.9,72.6C161.3,72 161.6,71.3 161.8,70.5C162,69.7 162.1,68.9 162.1,68.1C162.1,67.3 162,66.4 161.8,65.7C161.6,64.9 161.3,64.2 160.9,63.6C160.5,63 159.9,62.5 159.3,62.2C158.7,61.9 157.9,61.7 157.1,61.7C156.3,61.7 155.5,61.9 154.7,62.3C153.9,62.7 153,63.4 152.2,64.4L152.2,72.2C152.5,72.6 152.9,73 153.3,73.3C153.7,73.6 154.2,73.9 154.7,74.1C155.2,74.3 155.7,74.5 156.2,74.6C156.7,74.7 156.9,74.7 157.3,74.7Z" style="fill:rgb(51,51,51);fill-rule:nonzero;"/>
                            <path d="M170.4,52.8C170.4,52.4 170.5,52.1 170.6,51.7C170.7,51.3 171,51 171.2,50.7C171.5,50.4 171.8,50.2 172.1,50C172.4,49.8 172.8,49.8 173.2,49.8C173.6,49.8 173.9,49.9 174.3,50C174.7,50.2 175,50.4 175.3,50.7C175.6,51 175.8,51.3 176,51.7C176.2,52.1 176.2,52.4 176.2,52.8C176.2,53.2 176.1,53.6 176,53.9C175.8,54.2 175.6,54.5 175.3,54.8C175,55.1 174.7,55.3 174.3,55.4C173.9,55.5 173.6,55.6 173.2,55.6C172.4,55.6 171.7,55.3 171.2,54.7C170.6,54.3 170.4,53.6 170.4,52.8ZM175.5,77.6L171,77.6L171,58.8L175.5,58.8L175.5,77.6Z" style="fill:rgb(51,51,51);fill-rule:nonzero;"/>
                        </g>
                    </svg>
                    </div>
                    <div id="progress_bar"></div>
                </div>
            </div>
        `;
        document.body.appendChild(wrapper);

        var bar = document.getElementById('progress_bar');

        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        
        canvas.width = screenWidth / 3;
        canvas.height = canvas.width;
        ctx = canvas.getContext('2d');

        offset = canvas.width/10;

        gradient=ctx.createLinearGradient(0,0,canvas.width,0);
        gradient.addColorStop("0","#cce7ff");
        gradient.addColorStop("0.5","#005095");
        gradient.addColorStop("1","#cce7ff");
        ctx.strokeStyle = gradient;
        bar.appendChild(canvas);

    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        splash.parentElement.removeChild(splash);
    };

    var getCoordinate = function (pAngle) {
        pAngle -= 90;
        var x = (canvas.width/2-offset) * Math.cos(pAngle * Math.PI/180) + canvas.width/2;
        var y = (canvas.width/2-offset) * Math.sin(pAngle * Math.PI/180) + canvas.width/2;
        
        return {x:x, y:y};
    };

    var drawProgress = function (pProgress) {
        if(!ctx) return;
        if(animation)clearInterval(animation);
        let step = (pProgress-progress)/10;
        animation = setInterval(()=>{
            if(progress < pProgress)progress += step; 
            else clearInterval(animation);
            var angle = 360/100 * progress;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.beginPath();
            
            ctx.lineWidth = 10;
            
            var startPoint = getCoordinate(0);
            ctx.moveTo(startPoint.x, startPoint.y);
            ctx.strokeStyle = gradient;
            for(var i = 0; i < angle; i++)
            {
                var nextPoint = getCoordinate(i);
                ctx.lineTo(nextPoint.x, nextPoint.y);
            }
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = "#c9c9c9";
            for(var j = angle; j < 360; j++)
            {
                var whitePoint = getCoordinate(j);
                ctx.lineTo(whitePoint.x, whitePoint.y);
            }
            ctx.stroke();
        },50);
    };

    var setProgress = function (value) {
        value = Math.min(1, Math.max(0, value));
        // >> KEEP THE FOLLOWING LINES IN CASE YOU CHANGE THE LOADING SCREEN
        if(window && window.famobi && window.famobi.setPreloadProgress) {
            window.famobi.setPreloadProgress(value*100);
            if(value === 1) {
                window.famobi.gameReady();
            }
        }
        // << 
        drawProgress(value*100);
    };

    var createCss = function () {
        var css = `
            .fam_bgr {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: 0;
            background-color: #fff;
            }

            #progress_bar {
            position: absolute;
            margin-top: 2rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 0;
            }

            .splash_wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            }

            .logo_wrapper {
            width: 12rem;
            height: 18rem;
            margin-left: 1.813rem;
            perspective: 5.625rem;
            filter: drop-shadow(0.625rem 0.625rem 0.5rem #a3a3a3);
            }

            .title_wrapper {
            position: absolute;
            width: 15.625rem;
            height: 4.375rem;
            z-index: 1;
            }

            span {
            margin: 0.188rem;
            position: absolute;
            }  

            .row_1 {
            top: 0;
            }

            .row_2 {
            top: 6rem;
            }

            .row_3 {
            top: 12rem;
            }

            .col_1 {
            left: 0;
            }

            .col_2 {
            left: 6rem;
            }

            .order_0 {
            z-index: 3;
            }

            .order_1 {
            z-index: 2;
            }

            .order_2 {
            z-index: 1;
            }

            .square {
            width: 5.625rem;
            height: 5.625rem;
            }

            .triangle {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 2.813rem 0 2.813rem 3.75rem;
            border-color: transparent transparent transparent #F07E00;
            }

            .blue {
            background-color: #0194C6;
            }

            .orange {
            background-color: #F07E00;
            }

            .grey {
            background-color: #3D3D3B;
            }

            .ani_shiftright {
            opacity: 0;
            animation-name: shift-right;
            animation-duration: 0.5s; 
            animation-timing-function: ease-out; 
            animation-fill-mode: forwards;
            }

            .ani_shiftdown {
            opacity: 0;
            animation-name: shift-down;
            animation-duration: 0.5s;
            animation-timing-function: ease-out; 
            animation-fill-mode: forwards;
            }

            .ani_title {
            opacity: 0;
            animation-name: title;
            animation-duration: 1.7s;
            animation-delay: 1.5s;
            animation-timing-function: ease-out; 
            animation-fill-mode: forwards;
            }

            .ani_delay {
            animation-duration: 0.5s;
            animation-delay: 0.5s;
            }

            .ani_delay_long {
            animation-duration: 0.5s;
            animation-delay: 0.7s;
            }

            .ani_speed_fast {
            animation-duration: 0.2s;
            }

            .ani_speed_medium {
            animation-duration: 0.5s;
            }

            .ani_speed_slow {
            animation-duration: 0.7s;
            }

            @keyframes shift-right { 
            0% {
                opacity: 0;
                margin-left: -5.625rem;
            }
            100% {
                opacity: 1;
                margin-left: 0.188rem;
            }
            }

            @keyframes shift-down { 
            0% {
                opacity: 0;
                margin-top: -5.625rem;
            }
            100% {
                opacity: 1;
                margin-top: 0.188rem;
            }
            }

            @keyframes title { 
            0% {
                opacity: 0;
                margin-top: -5.625rem;
            }
            100% {
                opacity: 1;
                margin-top: 0.188rem;
            }
            }
        `;

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