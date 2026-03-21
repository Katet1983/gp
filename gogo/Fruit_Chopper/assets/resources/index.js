System.register("chunks:///_virtual/en.ts",["cc"],(function(){var e;return{setters:[function(n){e=n.cclegacy}],execute:function(){e._RF.push({},"8212123tMNE+YZxNV6WXWzm","en",void 0),window.languages||(window.languages={}),window.languages.en||(window.languages.en={choose:{tips:"Wave your palm to play"}}),e._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./en.ts","./zh.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/zh.ts",["cc"],(function(){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"4cb81AyWylI6JbESWqIjhgF","zh",void 0),window.languages||(window.languages={}),window.languages.zh||(window.languages.zh={choose:{tips:"请划动水果进行游戏哈"}}),n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});