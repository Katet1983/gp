class CLanguageCtlPanel {
    constructor(callback){
        var _oFade;
        var _oPanelContainerl;
        var _oBtnFrench;
        var _oBtnEnglish;
        var _oContainerL;
        var _oListener;


        this._init = function(){
            s_oSpriteLibrary.init(this._onImagesLoaded, this.onAllImagesLoaded,this);
            s_oSpriteLibrary.addSprite("but_start", "./sprites/start.png");
            s_oSpriteLibrary.addSprite("but_eng", " ./sprites/english.png");
            s_oSpriteLibrary.addSprite("but_fre", " ./sprites/French_Button.png");
            s_oSpriteLibrary.loadSprites();

            _oFade = new createjs.Shape();
            _oFade.graphics.beginFill("black").drawRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
            _oFade.alpha = 0;
            s_oStage.addChild(_oFade);

            _oPanelContainerl = new createjs.Container();
            s_oStage.addChild(_oPanelContainerl);

            _oContainerL = new createjs.Container();
            s_oStage.addChild(_oContainerL);

            var oSprite= s_oSpriteLibrary.getSprite('but_start');
             var oSpriteEng= s_oSpriteLibrary.getSprite('but_eng');
           var oSpriteFre = s_oSpriteLibrary.getSprite('but_fre');

            // button french
            _oBtnFrench = new CTextButton(2* CANVAS_WIDTH/3, CANVAS_HEIGHT/2, oSpriteFre, " ","Arial", "#000", 50, _oContainerL);
            _oBtnFrench.addEventListener(ON_MOUSE_UP, function(){
                this._onLanguageSelected('fr');
            }.bind(this));
            _oBtnFrench.removeShadow();


            // button english
            _oBtnEnglish = new CTextButton(CANVAS_WIDTH/3, CANVAS_HEIGHT/2, oSpriteEng, " ", "Arial", "#000", 50, _oContainerL);
            _oBtnEnglish.addEventListener(ON_MOUSE_UP, function(){
                this._onLanguageSelected('en');
            }.bind(this));
            _oBtnEnglish.removeShadow();

            this.loadLanguage('en');

        };

        this.applyTranslations = function(){
            var translationVariables= [ ];

            translationVariables.forEach(function(variable){
                if(window[variable] && this [variable]){
                    this[variable].text= window[variable];
                };
            }.bind(this));
        }

        this.loadLanguage = function(language) {
            var script = document.createElement('script');
            script.src= `js/CLang_${language}.js`;
            script.onload = function(){
                this.applyTranslations(window);
            }.bind(this);
            document.head.appendChild(script);
        };

        this._onLanguageSelected = function(language){
            this.unload();
                localStorage.setItem('selected_language', language);
                this.loadLanguage(language);

          
            if(callback){
                callback(language);
            }
        }

        this.unload = function (){
            s_oStage.removeChild(_oFade);
            s_oStage.removeChild(_oPanelContainerl);
            _oFade.off("mousedown", _oListener);
            window.location.reload();
        };
        this._init();

    }
}