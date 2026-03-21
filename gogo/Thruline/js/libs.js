// Font Face Observer v2.0.13
(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}    function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};    function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";    this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}    function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}    function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}    A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=        f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,        g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));        z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());

// Platform.js (https://github.com/bestiejs/platform.js/)
(function(){"use strict";var e={function:!0,object:!0},t=e[typeof window]&&window||this,i=e[typeof exports]&&exports,r=e[typeof module]&&module&&!module.nodeType&&module,n=i&&r&&"object"==typeof global&&global;!n||n.global!==n&&n.window!==n&&n.self!==n||(t=n);var o=Math.pow(2,53)-1,a=/\bOpera/,l=Object.prototype,s=l.hasOwnProperty,b=l.toString;function p(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function c(e){return e=x(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:p(e)}function d(e,t){for(var i in e)s.call(e,i)&&t(e[i],i,e)}function u(e){return null==e?p(e):b.call(e).slice(8,-1)}function f(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function S(e,t){var i=null;return function(e,t){var i=-1,r=e?e.length:0;if("number"==typeof r&&r>-1&&r<=o)for(;++i<r;)t(e[i],i,e);else d(e,t)}(e,(function(r,n){i=t(i,r,n,e)})),i}function x(e){return String(e).replace(/^ +| +$/g,"")}var h=function e(i){var r=t,n=i&&"object"==typeof i&&"String"!=u(i);n&&(r=i,i=null);var o=r.navigator||{},l=o.userAgent||"";i||(i=l);var s,p,h,m,g,O=n?!!o.likeChrome:/\bChrome\b/.test(i)&&!/internal|\n/i.test(b.toString()),y="Object",M=n?y:"ScriptBridgingProxyObject",E=n?y:"Environment",w=n&&r.java?"JavaPackage":u(r.java),v=n?y:"RuntimeObject",P=/\bJava/.test(w)&&r.java,C=P&&u(r.environment)==E,B=P?"a":"α",W=P?"b":"β",k=r.document||{},R=r.operamini||r.opera,A=a.test(A=n&&R?R["[[Class]]"]:u(R))?A:R=null,I=i,F=[],T=null,G=i==l,$=G&&R&&"function"==typeof R.version&&R.version(),X=S([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,t){return e||RegExp("\\b"+(t.pattern||f(t))+"\\b","i").exec(i)&&(t.label||t)})),K=function(e){return S(e,(function(e,t){return e||RegExp("\\b"+(t.pattern||f(t))+"\\b","i").exec(i)&&(t.label||t)}))}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),j=z([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),N=function(e){return S(e,(function(e,t,r){return e||(t[j]||t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(j)]||RegExp("\\b"+f(r)+"(?:\\b|\\w*\\d)","i").exec(i))&&r}))}({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),V=function(e){return S(e,(function(e,t){var r=t.pattern||f(t);return!e&&(e=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(i))&&(e=function(e,t,i){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),c(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,r,t.label||t)),e}))}(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function z(e){return S(e,(function(e,t){var r=t.pattern||f(t);return!e&&(e=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(i)||RegExp("\\b"+r+" *\\w+-[\\w]*","i").exec(i)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(i))&&((e=String(t.label&&!RegExp(r,"i").test(t.label)?t.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),t=t.label||t,e=c(e[0].replace(RegExp(r,"i"),t).replace(RegExp("; *(?:"+t+"[_-])?","i")," ").replace(RegExp("("+t+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}function H(e){return S(e,(function(e,t){return e||(RegExp(t+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(i)||0)[1]||null}))}if(X&&(X=[X]),/\bAndroid\b/.test(V)&&!j&&(s=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(i))&&(j=x(s[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),N&&!j?j=z([N]):N&&j&&(j=j.replace(RegExp("^("+f(N)+")[-_.\\s]","i"),N+" ").replace(RegExp("^("+f(N)+")[-_.]?(\\w)","i"),N+" $2")),(s=/\bGoogle TV\b/.exec(j))&&(j=s[0]),/\bSimulator\b/i.test(i)&&(j=(j?j+" ":"")+"Simulator"),"Opera Mini"==K&&/\bOPiOS\b/.test(i)&&F.push("running in Turbo/Uncompressed mode"),"IE"==K&&/\blike iPhone OS\b/.test(i)?(N=(s=e(i.replace(/like iPhone OS/,""))).manufacturer,j=s.product):/^iP/.test(j)?(K||(K="Safari"),V="iOS"+((s=/ OS ([\d_]+)/i.exec(i))?" "+s[1].replace(/_/g,"."):"")):"Konqueror"==K&&/^Linux\b/i.test(V)?V="Kubuntu":N&&"Google"!=N&&(/Chrome/.test(K)&&!/\bMobile Safari\b/i.test(i)||/\bVita\b/.test(j))||/\bAndroid\b/.test(V)&&/^Chrome/.test(K)&&/\bVersion\//i.test(i)?(K="Android Browser",V=/\bAndroid\b/.test(V)?V:"Android"):"Silk"==K?(/\bMobi/i.test(i)||(V="Android",F.unshift("desktop mode")),/Accelerated *= *true/i.test(i)&&F.unshift("accelerated")):"UC Browser"==K&&/\bUCWEB\b/.test(i)?F.push("speed mode"):"PaleMoon"==K&&(s=/\bFirefox\/([\d.]+)\b/.exec(i))?F.push("identifying as Firefox "+s[1]):"Firefox"==K&&(s=/\b(Mobile|Tablet|TV)\b/i.exec(i))?(V||(V="Firefox OS"),j||(j=s[1])):!K||(s=!/\bMinefield\b/i.test(i)&&/\b(?:Firefox|Safari)\b/.exec(K))?(K&&!j&&/[\/,]|^[^(]+?\)/.test(i.slice(i.indexOf(s+"/")+8))&&(K=null),(s=j||N||V)&&(j||N||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V))&&(K=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V)?V:s)+" Browser")):"Electron"==K&&(s=(/\bChrome\/([\d.]+)\b/.exec(i)||0)[1])&&F.push("Chromium "+s),$||($=H(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",f(K),"(?:Firefox|Minefield|NetFront)"])),(s=("iCab"==X&&parseFloat($)>3?"WebKit":/\bOpera\b/.test(K)&&(/\bOPR\b/.test(i)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(i)&&!/^(?:Trident|EdgeHTML)$/.test(X)&&"WebKit"||!X&&/\bMSIE\b/i.test(i)&&("Mac OS"==V?"Tasman":"Trident")||"WebKit"==X&&/\bPlayStation\b(?! Vita\b)/i.test(K)&&"NetFront")&&(X=[s]),"IE"==K&&(s=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(i)||0)[1])?(K+=" Mobile",V="Windows Phone "+(/\+$/.test(s)?s:s+".x"),F.unshift("desktop mode")):/\bWPDesktop\b/i.test(i)?(K="IE Mobile",V="Windows Phone 8.x",F.unshift("desktop mode"),$||($=(/\brv:([\d.]+)/.exec(i)||0)[1])):"IE"!=K&&"Trident"==X&&(s=/\brv:([\d.]+)/.exec(i))&&(K&&F.push("identifying as "+K+($?" "+$:"")),K="IE",$=s[1]),G){if(m="global",g=null!=(h=r)?typeof h[m]:"number",/^(?:boolean|number|string|undefined)$/.test(g)||"object"==g&&!h[m])u(s=r.runtime)==M?(K="Adobe AIR",V=s.flash.system.Capabilities.os):u(s=r.phantom)==v?(K="PhantomJS",$=(s=s.version||null)&&s.major+"."+s.minor+"."+s.patch):"number"==typeof k.documentMode&&(s=/\bTrident\/(\d+)/i.exec(i))?($=[$,k.documentMode],(s=+s[1]+4)!=$[1]&&(F.push("IE "+$[1]+" mode"),X&&(X[1]=""),$[1]=s),$="IE"==K?String($[1].toFixed(1)):$[0]):"number"==typeof k.documentMode&&/^(?:Chrome|Firefox)\b/.test(K)&&(F.push("masking as "+K+" "+$),K="IE",$="11.0",X=["Trident"],V="Windows");else if(P&&(I=(s=P.lang.System).getProperty("os.arch"),V=V||s.getProperty("os.name")+" "+s.getProperty("os.version")),C){try{$=r.require("ringo/engine").version.join("."),K="RingoJS"}catch(e){(s=r.system)&&s.global.system==r.system&&(K="Narwhal",V||(V=s[0].os||null))}K||(K="Rhino")}else"object"==typeof r.process&&!r.process.browser&&(s=r.process)&&("object"==typeof s.versions&&("string"==typeof s.versions.electron?(F.push("Node "+s.versions.node),K="Electron",$=s.versions.electron):"string"==typeof s.versions.nw&&(F.push("Chromium "+$,"Node "+s.versions.node),K="NW.js",$=s.versions.nw)),K||(K="Node.js",I=s.arch,V=s.platform,$=($=/[\d.]+/.exec(s.version))?$[0]:null));V=V&&c(V)}if($&&(s=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec($)||/(?:alpha|beta)(?: ?\d)?/i.exec(i+";"+(G&&o.appMinorVersion))||/\bMinefield\b/i.test(i)&&"a")&&(T=/b/i.test(s)?"beta":"alpha",$=$.replace(RegExp(s+"\\+?$"),"")+("beta"==T?W:B)+(/\d+\+?/.exec(s)||"")),"Fennec"==K||"Firefox"==K&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(V))K="Firefox Mobile";else if("Maxthon"==K&&$)$=$.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(j))"Xbox 360"==j&&(V=null),"Xbox 360"==j&&/\bIEMobile\b/.test(i)&&F.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(K)&&(!K||j||/Browser|Mobi/.test(K))||"Windows CE"!=V&&!/Mobi/i.test(i))if("IE"==K&&G)try{null===r.external&&F.unshift("platform preview")}catch(e){F.unshift("embedded")}else(/\bBlackBerry\b/.test(j)||/\bBB10\b/.test(i))&&(s=(RegExp(j.replace(/ +/g," *")+"/([.\\d]+)","i").exec(i)||0)[1]||$)?(V=((s=[s,/BB10/.test(i)])[1]?(j=null,N="BlackBerry"):"Device Software")+" "+s[0],$=null):this!=d&&"Wii"!=j&&(G&&R||/Opera/.test(K)&&/\b(?:MSIE|Firefox)\b/i.test(i)||"Firefox"==K&&/\bOS X (?:\d+\.){2,}/.test(V)||"IE"==K&&(V&&!/^Win/.test(V)&&$>5.5||/\bWindows XP\b/.test(V)&&$>8||8==$&&!/\bTrident\b/.test(i)))&&!a.test(s=e.call(d,i.replace(a,"")+";"))&&s.name&&(s="ing as "+s.name+((s=s.version)?" "+s:""),a.test(K)?(/\bIE\b/.test(s)&&"Mac OS"==V&&(V=null),s="identify"+s):(s="mask"+s,K=A?c(A.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(s)&&(V=null),G||($=null)),X=["Presto"],F.push(s));else K+=" Mobile";(s=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(i)||0)[1])&&(s=[parseFloat(s.replace(/\.(\d)$/,".0$1")),s],"Safari"==K&&"+"==s[1].slice(-1)?(K="WebKit Nightly",T="alpha",$=s[1].slice(0,-1)):$!=s[1]&&$!=(s[2]=(/\bSafari\/([\d.]+\+?)/i.exec(i)||0)[1])||($=null),s[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(i)||0)[1],537.36==s[0]&&537.36==s[2]&&parseFloat(s[1])>=28&&"WebKit"==X&&(X=["Blink"]),G&&(O||s[1])?(X&&(X[1]="like Chrome"),s=s[1]||((s=s[0])<530?1:s<532?2:s<532.05?3:s<533?4:s<534.03?5:s<534.07?6:s<534.1?7:s<534.13?8:s<534.16?9:s<534.24?10:s<534.3?11:s<535.01?12:s<535.02?"13+":s<535.07?15:s<535.11?16:s<535.19?17:s<536.05?18:s<536.1?19:s<537.01?20:s<537.11?"21+":s<537.13?23:s<537.18?24:s<537.24?25:s<537.36?26:"Blink"!=X?"27":"28")):(X&&(X[1]="like Safari"),s=(s=s[0])<400?1:s<500?2:s<526?3:s<533?4:s<534?"4+":s<535?5:s<537?6:s<538?7:s<601?8:s<602?9:s<604?10:s<606?11:s<608?12:"12"),X&&(X[1]+=" "+(s+="number"==typeof s?".x":/[.+]/.test(s)?"":"+")),"Safari"==K&&(!$||parseInt($)>45)?$=s:"Chrome"==K&&/\bHeadlessChrome/i.test(i)&&F.unshift("headless")),"Opera"==K&&(s=/\bzbov|zvav$/.exec(V))?(K+=" ",F.unshift("desktop mode"),"zvav"==s?(K+="Mini",$=null):K+="Mobile",V=V.replace(RegExp(" *"+s+"$"),"")):"Safari"==K&&/\bChrome\b/.exec(X&&X[1])?(F.unshift("desktop mode"),K="Chrome Mobile",$=null,/\bOS X\b/.test(V)?(N="Apple",V="iOS 4.3+"):V=null):/\bSRWare Iron\b/.test(K)&&!$&&($=H("Chrome")),$&&0==$.indexOf(s=/[\d.]+$/.exec(V))&&i.indexOf("/"+s+"-")>-1&&(V=x(V.replace(s,""))),V&&-1!=V.indexOf(K)&&!RegExp(K+" OS").test(V)&&(V=V.replace(RegExp(" *"+f(K)+" *"),"")),X&&!/\b(?:Avant|Nook)\b/.test(K)&&(/Browser|Lunascape|Maxthon/.test(K)||"Safari"!=K&&/^iOS/.test(V)&&/\bSafari\b/.test(X[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(K)&&X[1])&&(s=X[X.length-1])&&F.push(s),F.length&&(F=["("+F.join("; ")+")"]),N&&j&&j.indexOf(N)<0&&F.push("on "+N),j&&F.push((/^on /.test(F[F.length-1])?"":"on ")+j),V&&(s=/ ([\d.+]+)$/.exec(V),p=s&&"/"==V.charAt(V.length-s[0].length-1),V={architecture:32,family:s&&!p?V.replace(s[0],""):V,version:s?s[1]:null,toString:function(){var e=this.version;return this.family+(e&&!p?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(s=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I))&&!/\bi686\b/i.test(I)?(V&&(V.architecture=64,V.family=V.family.replace(RegExp(" *"+s),"")),K&&(/\bWOW64\b/i.test(i)||G&&/\w(?:86|32)$/.test(o.cpuClass||o.platform)&&!/\bWin64; x64\b/i.test(i))&&F.unshift("32-bit")):V&&/^OS X/.test(V.family)&&"Chrome"==K&&parseFloat($)>=39&&(V.architecture=64),i||(i=null);var L={};return L.description=i,L.layout=X&&X[0],L.manufacturer=N,L.name=K,L.prerelease=T,L.product=j,L.ua=i,L.version=K&&$,L.os=V||{architecture:null,family:null,version:null,toString:function(){return"null"}},L.parse=e,L.toString=function(){return this.description||""},L.version&&F.unshift($),L.name&&F.unshift(K),V&&K&&(V!=String(V).split(" ")[0]||V!=K.split(" ")[0]&&!j)&&F.push(j?"("+V+")":"on "+V),F.length&&(L.description=F.join(" ")),L}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(t.platform=h,define((function(){return h}))):i&&r?d(h,(function(e,t){i[t]=e})):t.platform=h}).call(this);

// Flatted (JSON.stringify alternative that allows circular JSON) from https://github.com/WebReflection/flatted
self.Flatted=function(n){"use strict";
    /*! (c) 2020 Andrea Giammarchi */var t=JSON.parse,r=JSON.stringify,e=Object.keys,a=String,u="string",f={},i="object",c=function(n,t){return t},l=function(n){return n instanceof a?a(n):n},o=function(n,t){return typeof t===u?new a(t):t},s=function(n,t,r){var e=a(t.push(r)-1);return n.set(r,e),e};return n.parse=function(n,r){var u=t(n,o).map(l),s=u[0],p=r||c,v=typeof s===i&&s?function n(t,r,u,c){for(var l=[],o=e(u),s=o.length,p=0;p<s;p++){var v=o[p],y=u[v];if(y instanceof a){var g=t[y];typeof g!==i||r.has(g)?u[v]=c.call(u,v,g):(r.add(g),u[v]=f,l.push({k:v,a:[t,r,g,c]}))}else u[v]!==f&&(u[v]=c.call(u,v,y))}for(var h=l.length,d=0;d<h;d++){var w=l[d],O=w.k,S=w.a;u[O]=c.call(u,O,n.apply(null,S))}return u}(u,new Set,s,p):s;return p.call({"":v},"",v)},n.stringify=function(n,t,e){for(var a=t&&typeof t===i?function(n,r){return""===n||-1<t.indexOf(n)?r:void 0}:t||c,f=new Map,l=[],o=[],p=+s(f,l,a.call({"":n},"",n)),v=!p;p<l.length;)v=!0,o[p]=r(l[p++],y,e);return"["+o.join(",")+"]";function y(n,t){if(v)return v=!v,t;var r=a.call(this,n,t);switch(typeof r){case i:if(null===r)return r;case u:return f.get(r)||s(f,l,r)}return r}},n}({});

// pixi-filters - v4.1.2 (https://github.com/pixijs/filters/releases)
var __filters=function(e,n,t,r,o,i,l,a){"use strict";var s=function(e,n){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)};function u(e,n){function t(){this.constructor=e}s(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var f=function(){return(f=Object.assign||function(e){for(var n,t=arguments,r=1,o=arguments.length;r<o;r++)for(var i in n=t[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};Object.create;Object.create;var c="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",m=function(e){function n(n){var t=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n")||this;return t.gamma=1,t.saturation=1,t.contrast=1,t.brightness=1,t.red=1,t.green=1,t.blue=1,t.alpha=1,Object.assign(t,n),t}return u(n,e),n.prototype.apply=function(e,n,t,r){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,n,t,r)},n}(n.Filter),p=function(e){function n(n){void 0===n&&(n=.5);var t=e.call(this,c,"\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n")||this;return t.threshold=n,t}return u(n,e),Object.defineProperty(n.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(e){this.uniforms.threshold=e},enumerable:!1,configurable:!0}),n}(n.Filter),d=function(e){function n(n,r,o){void 0===n&&(n=4),void 0===r&&(r=3),void 0===o&&(o=!1);var i=e.call(this,c,o?"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n":"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}")||this;return i._kernels=[],i._blur=4,i._quality=3,i.uniforms.uOffset=new Float32Array(2),i._pixelSize=new t.Point,i.pixelSize=1,i._clamp=o,Array.isArray(n)?i.kernels=n:(i._blur=n,i.quality=r),i}return u(n,e),n.prototype.apply=function(e,n,t,r){var o,i=this._pixelSize.x/n._frame.width,l=this._pixelSize.y/n._frame.height;if(1===this._quality||0===this._blur)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,n,t,r);else{for(var a=e.getFilterTexture(),s=n,u=a,f=void 0,c=this._quality-1,m=0;m<c;m++)o=this._kernels[m]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,s,u,1),f=s,s=u,u=f;o=this._kernels[c]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,s,t,r),e.returnFilterTexture(a)}},n.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce((function(e,n){return e+n+.5}),0))},n.prototype._generateKernels=function(){var e=this._blur,n=this._quality,t=[e];if(e>0)for(var r=e,o=e/n,i=1;i<n;i++)r-=o,t.push(r);this._kernels=t,this._updatePadding()},Object.defineProperty(n.prototype,"kernels",{get:function(){return this._kernels},set:function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof t.Point?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"blur",{get:function(){return this._blur},set:function(e){this._blur=e,this._generateKernels()},enumerable:!1,configurable:!0}),n}(n.Filter),h=function(e){function n(t){var o=e.call(this,c,"uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n")||this;o.bloomScale=1,o.brightness=1,o._resolution=r.settings.FILTER_RESOLUTION,"number"==typeof t&&(t={threshold:t});var i=Object.assign(n.defaults,t);o.bloomScale=i.bloomScale,o.brightness=i.brightness;var l=i.kernels,a=i.blur,s=i.quality,u=i.pixelSize,f=i.resolution;return o._extractFilter=new p(i.threshold),o._extractFilter.resolution=f,o._blurFilter=l?new d(l):new d(a,s),o.pixelSize=u,o.resolution=f,o}return u(n,e),n.prototype.apply=function(e,n,t,r,o){var i=e.getFilterTexture();this._extractFilter.apply(e,n,i,1,o);var l=e.getFilterTexture();this._blurFilter.apply(e,i,l,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=l,e.applyFilter(this,n,t,r),e.returnFilterTexture(l),e.returnFilterTexture(i)},Object.defineProperty(n.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(e){this._extractFilter.threshold=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),n.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:r.settings.FILTER_RESOLUTION},n}(n.Filter),g=function(e){function n(n){void 0===n&&(n=8);var t=e.call(this,c,"varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n")||this;return t.size=n,t}return u(n,e),Object.defineProperty(n.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(e){this.uniforms.pixelSize=e},enumerable:!1,configurable:!0}),n}(n.Filter),v=function(e){function n(n){var t=e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n")||this;return t._thickness=2,t._angle=0,t.uniforms.lightColor=new Float32Array(3),t.uniforms.shadowColor=new Float32Array(3),Object.assign(t,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},n),t.padding=1,t}return u(n,e),n.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(n.prototype,"rotation",{get:function(){return this._angle/t.DEG_TO_RAD},set:function(e){this._angle=e*t.DEG_TO_RAD,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"thickness",{get:function(){return this._thickness},set:function(e){this._thickness=e,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lightColor",{get:function(){return o.rgb2hex(this.uniforms.lightColor)},set:function(e){o.hex2rgb(e,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(e){this.uniforms.lightAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"shadowColor",{get:function(){return o.rgb2hex(this.uniforms.shadowColor)},set:function(e){o.hex2rgb(e,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(e){this.uniforms.shadowAlpha=e},enumerable:!1,configurable:!0}),n}(n.Filter),y=function(e){function n(n,o,s,u){void 0===n&&(n=2),void 0===o&&(o=4),void 0===s&&(s=r.settings.FILTER_RESOLUTION),void 0===u&&(u=5);var f,c,m=e.call(this)||this;return"number"==typeof n?(f=n,c=n):n instanceof t.Point?(f=n.x,c=n.y):Array.isArray(n)&&(f=n[0],c=n[1]),m.blurXFilter=new a.BlurFilterPass(!0,f,o,s,u),m.blurYFilter=new a.BlurFilterPass(!1,c,o,s,u),m.blurYFilter.blendMode=i.BLEND_MODES.SCREEN,m.defaultFilter=new l.AlphaFilter,m}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=e.getFilterTexture();this.defaultFilter.apply(e,n,t,r),this.blurXFilter.apply(e,n,o,1),this.blurYFilter.apply(e,o,t,0),e.returnFilterTexture(o)},Object.defineProperty(n.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=this.blurYFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(e){this.blurYFilter.blur=e},enumerable:!1,configurable:!0}),n}(n.Filter),b=function(e){function n(t){var r=e.call(this,c,"uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n")||this;return r.uniforms.dimensions=new Float32Array(2),Object.assign(r,n.defaults,t),r}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=n.filterFrame,i=o.width,l=o.height;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(e){this.uniforms.strength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"center",{get:function(){return this.uniforms.center},set:function(e){this.uniforms.center=e},enumerable:!1,configurable:!0}),n.defaults={center:[.5,.5],radius:100,strength:1},n}(n.Filter),x=function(e){function t(n,t,r){void 0===t&&(t=!1),void 0===r&&(r=1);var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    vec4 adjusted;\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n        float innerWidth = _size - 1.0;\n        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n        float zSlice1 = min(zSlice0 + 1.0, innerWidth);\n        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n        float s0 = xOffset + (zSlice0 * _sliceSize);\n        float s1 = xOffset + (zSlice1 * _sliceSize);\n        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);\n        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));\n        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));\n        float zOffset = fract(color.b * innerWidth);\n        adjusted = mix(slice0Color, slice1Color, zOffset);\n\n        color.rgb *= color.a;\n    }\n    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);\n\n}")||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=t,o.mix=r,o.colorMap=n,o}return u(t,e),t.prototype.apply=function(e,n,t,r){this.uniforms._mix=this.mix,e.applyFilter(this,n,t,r)},Object.defineProperty(t.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorMap",{get:function(){return this._colorMap},set:function(e){var t;e&&(e instanceof n.Texture||(e=n.Texture.from(e)),(null===(t=e)||void 0===t?void 0:t.baseTexture)&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=i.MIPMAP_MODES.OFF,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nearest",{get:function(){return this._nearest},set:function(e){this._nearest=e,this._scaleMode=e?i.SCALE_MODES.NEAREST:i.SCALE_MODES.LINEAR;var n=this._colorMap;n&&n.baseTexture&&(n.baseTexture._glTextures={},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=i.MIPMAP_MODES.OFF,n._updateID++,n.baseTexture.emit("update",n.baseTexture))},enumerable:!1,configurable:!0}),t.prototype.updateColorMap=function(){var e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)},t.prototype.destroy=function(n){void 0===n&&(n=!1),this._colorMap&&this._colorMap.destroy(n),e.prototype.destroy.call(this)},t}(n.Filter),_=function(e){function n(n,t){void 0===n&&(n=0),void 0===t&&(t=1);var r=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 color;\nuniform float alpha;\n\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);\n}\n")||this;return r._color=0,r._alpha=1,r.uniforms.color=new Float32Array(3),r.color=n,r.alpha=t,r}return u(n,e),Object.defineProperty(n.prototype,"color",{get:function(){return this._color},set:function(e){var n=this.uniforms.color;"number"==typeof e?(o.hex2rgb(e,n),this._color=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._color=o.rgb2hex(n))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"alpha",{get:function(){return this._alpha},set:function(e){this.uniforms.alpha=e,this._alpha=e},enumerable:!1,configurable:!0}),n}(n.Filter),C=function(e){function n(n,t,r){void 0===n&&(n=16711680),void 0===t&&(t=0),void 0===r&&(r=.4);var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n")||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=n,o.newColor=t,o.epsilon=r,o}return u(n,e),Object.defineProperty(n.prototype,"originalColor",{get:function(){return this._originalColor},set:function(e){var n=this.uniforms.originalColor;"number"==typeof e?(o.hex2rgb(e,n),this._originalColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._originalColor=o.rgb2hex(n))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"newColor",{get:function(){return this._newColor},set:function(e){var n=this.uniforms.newColor;"number"==typeof e?(o.hex2rgb(e,n),this._newColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._newColor=o.rgb2hex(n))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(e){this.uniforms.epsilon=e},enumerable:!1,configurable:!0}),n}(n.Filter),S=function(e){function n(n,t,r){void 0===t&&(t=200),void 0===r&&(r=200);var o=e.call(this,c,"precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n")||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),void 0!==n&&(o.matrix=n),o.width=t,o.height=r,o}return u(n,e),Object.defineProperty(n.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(e){var n=this;e.forEach((function(e,t){n.uniforms.matrix[t]=e}))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(e){this.uniforms.texelSize[0]=1/e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(e){this.uniforms.texelSize[1]=1/e},enumerable:!1,configurable:!0}),n}(n.Filter),F=function(e){function n(){return e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")||this}return u(n,e),n}(n.Filter),z=function(e){function n(t){var r=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 dir = vec2(vTextureCoord.xy - vec2(0.5, 0.5)) * filterArea.xy / dimensions;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0)\n    {\n        float _c = curvature > 0. ? curvature : 1.;\n        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n        vec2 uv = dir * k;\n\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n")||this;return r.time=0,r.seed=0,r.uniforms.dimensions=new Float32Array(2),Object.assign(r,n.defaults,t),r}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=n.filterFrame,i=o.width,l=o.height;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(e){this.uniforms.curvature=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(e){this.uniforms.lineWidth=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(e){this.uniforms.lineContrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(e){this.uniforms.verticalLine=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(e){this.uniforms.noise=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(e){this.uniforms.noiseSize=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(e){this.uniforms.vignetting=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(e){this.uniforms.vignettingAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(e){this.uniforms.vignettingBlur=e},enumerable:!1,configurable:!0}),n.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},n}(n.Filter),O=function(e){function n(n,t){void 0===n&&(n=1),void 0===t&&(t=5);var r=e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n")||this;return r.scale=n,r.angle=t,r}return u(n,e),Object.defineProperty(n.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(e){this.uniforms.scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(e){this.uniforms.angle=e},enumerable:!1,configurable:!0}),n}(n.Filter),P=function(e){function i(o){var l=e.call(this)||this;l.angle=45,l._distance=5,l._resolution=r.settings.FILTER_RESOLUTION;var a=o?f(f({},i.defaults),o):i.defaults,s=a.kernels,u=a.blur,m=a.quality,p=a.pixelSize,h=a.resolution;l._tintFilter=new n.Filter(c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}"),l._tintFilter.uniforms.color=new Float32Array(4),l._tintFilter.uniforms.shift=new t.Point,l._tintFilter.resolution=h,l._blurFilter=s?new d(s):new d(u,m),l.pixelSize=p,l.resolution=h;var g=a.shadowOnly,v=a.rotation,y=a.distance,b=a.alpha,x=a.color;return l.shadowOnly=g,l.rotation=v,l.distance=y,l.alpha=b,l.color=x,l._updatePadding(),l}return u(i,e),i.prototype.apply=function(e,n,t,r){var o=e.getFilterTexture();this._tintFilter.apply(e,n,o,1),this._blurFilter.apply(e,o,t,r),!0!==this.shadowOnly&&e.applyFilter(this,n,t,0),e.returnFilterTexture(o)},i.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},i.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(i.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"distance",{get:function(){return this._distance},set:function(e){this._distance=e,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotation",{get:function(){return this.angle/t.DEG_TO_RAD},set:function(e){this.angle=e*t.DEG_TO_RAD,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(e){this._tintFilter.uniforms.alpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"color",{get:function(){return o.rgb2hex(this._tintFilter.uniforms.color)},set:function(e){o.hex2rgb(e,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),i.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:r.settings.FILTER_RESOLUTION},i}(n.Filter),A=function(e){function n(n){void 0===n&&(n=5);var t=e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n")||this;return t.strength=n,t}return u(n,e),Object.defineProperty(n.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(e){this.uniforms.strength=e},enumerable:!1,configurable:!0}),n}(n.Filter),T=function(e){function r(t){var o=e.call(this,c,"// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n")||this;return o.offset=100,o.fillMode=r.TRANSPARENT,o.average=!1,o.seed=0,o.minSize=8,o.sampleSize=512,o._slices=0,o._offsets=new Float32Array(1),o._sizes=new Float32Array(1),o._direction=-1,o.uniforms.dimensions=new Float32Array(2),o._canvas=document.createElement("canvas"),o._canvas.width=4,o._canvas.height=o.sampleSize,o.texture=n.Texture.from(o._canvas,{scaleMode:i.SCALE_MODES.NEAREST}),Object.assign(o,r.defaults,t),o}return u(r,e),r.prototype.apply=function(e,n,t,r){var o=n.filterFrame,i=o.width,l=o.height;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/i,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,n,t,r)},r.prototype._randomizeSizes=function(){var e=this._sizes,n=this._slices-1,t=this.sampleSize,r=Math.min(this.minSize/t,.9/this._slices);if(this.average){for(var o=this._slices,i=1,l=0;l<n;l++){var a=i/(o-l),s=Math.max(a*(1-.6*Math.random()),r);e[l]=s,i-=s}e[n]=i}else{i=1;var u=Math.sqrt(1/this._slices);for(l=0;l<n;l++){s=Math.max(u*i*Math.random(),r);e[l]=s,i-=s}e[n]=i}this.shuffle()},r.prototype.shuffle=function(){for(var e=this._sizes,n=this._slices-1;n>0;n--){var t=Math.random()*n>>0,r=e[n];e[n]=e[t],e[t]=r}},r.prototype._randomizeOffsets=function(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)},r.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},r.prototype.redraw=function(){var e,n=this.sampleSize,t=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,n);for(var o=0,i=0;i<this._slices;i++){e=Math.floor(256*this._offsets[i]);var l=this._sizes[i]*n,a=e>0?e:0,s=e<0?-e:0;r.fillStyle="rgba("+a+", "+s+", 0, 1)",r.fillRect(0,o>>0,n,l+1>>0),o+=l}t.baseTexture.update(),this.uniforms.displacementMap=t},Object.defineProperty(r.prototype,"sizes",{get:function(){return this._sizes},set:function(e){for(var n=Math.min(this._slices,e.length),t=0;t<n;t++)this._sizes[t]=e[t]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offsets",{get:function(){return this._offsets},set:function(e){for(var n=Math.min(this._slices,e.length),t=0;t<n;t++)this._offsets[t]=e[t]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"slices",{get:function(){return this._slices},set:function(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"direction",{get:function(){return this._direction},set:function(e){if(this._direction!==e){this._direction=e;var n=e*t.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosDir=Math.cos(n)}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"red",{get:function(){return this.uniforms.red},set:function(e){this.uniforms.red=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"green",{get:function(){return this.uniforms.green},set:function(e){this.uniforms.green=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(e){this.uniforms.blue=e},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){var e;null===(e=this.texture)||void 0===e||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},r.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},r.TRANSPARENT=0,r.ORIGINAL=1,r.LOOP=2,r.CLAMP=3,r.MIRROR=4,r}(n.Filter),w=function(e){function n(t){var r=this,o=Object.assign({},n.defaults,t),i=o.outerStrength,l=o.innerStrength,a=o.color,s=o.knockout,u=o.quality,f=Math.round(o.distance);return(r=e.call(this,c,"varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float outerStrength;\nuniform float innerStrength;\n\nuniform vec4 glowColor;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform bool knockout;\n\nconst float PI = 3.14159265358979323846264;\n\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);\nconst float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);\n\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\n    float totalAlpha = 0.0;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {\n       direction = vec2(cos(angle), sin(angle)) * px;\n\n       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {\n           displaced = clamp(vTextureCoord + direction * \n                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);\n\n           curColor = texture2D(uSampler, displaced);\n\n           totalAlpha += (DIST - curDistance) * curColor.a;\n       }\n    }\n    \n    curColor = texture2D(uSampler, vTextureCoord);\n\n    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);\n\n    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;\n    float innerGlowStrength = min(1.0, innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);\n    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);\n\n    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;\n    \n    if (knockout) {\n      float resultAlpha = outerGlowAlpha + innerGlowAlpha;\n      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      gl_FragColor = innerColor + outerGlowColor;\n    }\n}\n".replace(/__ANGLE_STEP_SIZE__/gi,""+(1/u/f).toFixed(7)).replace(/__DIST__/gi,f.toFixed(0)+".0"))||this).uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(r,{color:a,outerStrength:i,innerStrength:l,padding:f,knockout:s}),r}return u(n,e),Object.defineProperty(n.prototype,"color",{get:function(){return o.rgb2hex(this.uniforms.glowColor)},set:function(e){o.hex2rgb(e,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(e){this.uniforms.outerStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(e){this.uniforms.innerStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(e){this.uniforms.knockout=e},enumerable:!1,configurable:!0}),n.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},n}(n.Filter),D=function(e){function n(r){var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\nuniform float alpha;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n    // apply user alpha\n    mist *= alpha;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n\n}\n".replace("${perlin}","vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n"))||this;o.parallel=!0,o.time=0,o._angle=0,o.uniforms.dimensions=new Float32Array(2);var i=Object.assign(n.defaults,r);return o._angleLight=new t.Point,o.angle=i.angle,o.gain=i.gain,o.lacunarity=i.lacunarity,o.alpha=i.alpha,o.parallel=i.parallel,o.center=i.center,o.time=i.time,o}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=n.filterFrame,i=o.width,l=o.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/i,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e;var n=e*t.DEG_TO_RAD;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.sin(n)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(e){this.uniforms.gain=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(e){this.uniforms.lacunarity=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(e){this.uniforms.alpha=e},enumerable:!1,configurable:!0}),n.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},n}(n.Filter),j=function(e){function n(n,r,o){void 0===n&&(n=[0,0]),void 0===r&&(r=5),void 0===o&&(o=0);var i=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n")||this;return i.kernelSize=5,i.uniforms.uVelocity=new Float32Array(2),i._velocity=new t.ObservablePoint(i.velocityChanged,i),i.setVelocity(n),i.kernelSize=r,i.offset=o,i}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=this.velocity,i=o.x,l=o.y;this.uniforms.uKernelSize=0!==i||0!==l?this.kernelSize:0,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"velocity",{get:function(){return this._velocity},set:function(e){this.setVelocity(e)},enumerable:!1,configurable:!0}),n.prototype.setVelocity=function(e){if(Array.isArray(e)){var n=e[0],t=e[1];this._velocity.set(n,t)}else this._velocity.copyFrom(e)},n.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=1+(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)},Object.defineProperty(n.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(e){this.uniforms.uOffset=e},enumerable:!1,configurable:!0}),n}(n.Filter),M=function(e){function n(n,t,r){void 0===t&&(t=.05),void 0===r&&(r=n.length);var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n".replace(/%maxColors%/g,r.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=t,o._maxColors=r,o.uniforms.originalColors=new Float32Array(3*r),o.uniforms.targetColors=new Float32Array(3*r),o.replacements=n,o}return u(n,e),Object.defineProperty(n.prototype,"replacements",{get:function(){return this._replacements},set:function(e){var n=this.uniforms.originalColors,t=this.uniforms.targetColors,r=e.length;if(r>this._maxColors)throw new Error("Length of replacements ("+r+") exceeds the maximum colors length ("+this._maxColors+")");n[3*r]=-1;for(var i=0;i<r;i++){var l=e[i],a=l[0];"number"==typeof a?a=o.hex2rgb(a):l[0]=o.rgb2hex(a),n[3*i]=a[0],n[3*i+1]=a[1],n[3*i+2]=a[2];var s=l[1];"number"==typeof s?s=o.hex2rgb(s):l[1]=o.rgb2hex(s),t[3*i]=s[0],t[3*i+1]=s[1],t[3*i+2]=s[2]}this._replacements=e},enumerable:!1,configurable:!0}),n.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(n.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(e){this.uniforms.epsilon=e},enumerable:!1,configurable:!0}),n}(n.Filter),R=function(e){function n(t,r){void 0===r&&(r=0);var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n")||this;return o.seed=0,o.uniforms.dimensions=new Float32Array(2),"number"==typeof t?(o.seed=t,t=void 0):o.seed=r,Object.assign(o,n.defaults,t),o}return u(n,e),n.prototype.apply=function(e,n,t,r){var o,i;this.uniforms.dimensions[0]=null===(o=n.filterFrame)||void 0===o?void 0:o.width,this.uniforms.dimensions[1]=null===(i=n.filterFrame)||void 0===i?void 0:i.height,this.uniforms.seed=this.seed,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(e){this.uniforms.sepia=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(e){this.uniforms.noise=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(e){this.uniforms.noiseSize=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(e){this.uniforms.scratch=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(e){this.uniforms.scratchDensity=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(e){this.uniforms.scratchWidth=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(e){this.uniforms.vignetting=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(e){this.uniforms.vignettingAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(e){this.uniforms.vignettingBlur=e},enumerable:!1,configurable:!0}),n.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},n}(n.Filter),E=function(e){function n(t,r,o){void 0===t&&(t=1),void 0===r&&(r=0),void 0===o&&(o=.1);var i=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n".replace(/\$\{angleStep\}/,n.getAngleStep(o)))||this;return i._thickness=1,i.uniforms.thickness=new Float32Array([0,0]),i.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(i,{thickness:t,color:r,quality:o}),i}return u(n,e),n.getAngleStep=function(e){var t=Math.max(e*n.MAX_SAMPLES,n.MIN_SAMPLES);return(2*Math.PI/t).toFixed(7)},n.prototype.apply=function(e,n,t,r){this.uniforms.thickness[0]=this._thickness/n._frame.width,this.uniforms.thickness[1]=this._thickness/n._frame.height,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"color",{get:function(){return o.rgb2hex(this.uniforms.outlineColor)},set:function(e){o.hex2rgb(e,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"thickness",{get:function(){return this._thickness},set:function(e){this._thickness=e,this.padding=e},enumerable:!1,configurable:!0}),n.MIN_SAMPLES=1,n.MAX_SAMPLES=100,n}(n.Filter),I=function(e){function n(n){void 0===n&&(n=10);var t=e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n")||this;return t.size=n,t}return u(n,e),Object.defineProperty(n.prototype,"size",{get:function(){return this.uniforms.size},set:function(e){"number"==typeof e&&(e=[e,e]),this.uniforms.size=e},enumerable:!1,configurable:!0}),n}(n.Filter),k=function(e){function n(n,t,r,o){void 0===n&&(n=0),void 0===t&&(t=[0,0]),void 0===r&&(r=5),void 0===o&&(o=-1);var i=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n")||this;return i._angle=0,i.angle=n,i.center=t,i.kernelSize=r,i.radius=o,i}return u(n,e),n.prototype.apply=function(e,n,t,r){this.uniforms.uKernelSize=0!==this._angle?this.kernelSize:0,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(e){this.uniforms.uCenter=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},enumerable:!1,configurable:!0}),n}(n.Filter),L=function(e){function n(t){var r=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n")||this;return r.time=0,r.uniforms.amplitude=new Float32Array(2),r.uniforms.waveLength=new Float32Array(2),r.uniforms.alpha=new Float32Array(2),r.uniforms.dimensions=new Float32Array(2),Object.assign(r,n.defaults,t),r}return u(n,e),n.prototype.apply=function(e,n,t,r){var o,i;this.uniforms.dimensions[0]=null===(o=n.filterFrame)||void 0===o?void 0:o.width,this.uniforms.dimensions[1]=null===(i=n.filterFrame)||void 0===i?void 0:i.height,this.uniforms.time=this.time,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(e){this.uniforms.mirror=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(e){this.uniforms.boundary=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},enumerable:!1,configurable:!0}),n.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},n}(n.Filter),N=function(e){function n(n,t,r){void 0===n&&(n=[-10,0]),void 0===t&&(t=[0,10]),void 0===r&&(r=[0,0]);var o=e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n")||this;return o.red=n,o.green=t,o.blue=r,o}return u(n,e),Object.defineProperty(n.prototype,"red",{get:function(){return this.uniforms.red},set:function(e){this.uniforms.red=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"green",{get:function(){return this.uniforms.green},set:function(e){this.uniforms.green=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(e){this.uniforms.blue=e},enumerable:!1,configurable:!0}),n}(n.Filter),X=function(e){function n(t,r,o){void 0===t&&(t=[0,0]),void 0===o&&(o=0);var i=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n")||this;return i.center=t,Object.assign(i,n.defaults,r),i.time=o,i}return u(n,e),n.prototype.apply=function(e,n,t,r){this.uniforms.time=this.time,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"center",{get:function(){return this.uniforms.center},set:function(e){this.uniforms.center=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(e){this.uniforms.amplitude=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(e){this.uniforms.wavelength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(e){this.uniforms.brightness=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(e){this.uniforms.speed=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),n.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},n}(n.Filter),B=function(e){function n(n,t,r){void 0===t&&(t=0),void 0===r&&(r=1);var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n")||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,r]),o.texture=n,o.color=t,o}return u(n,e),n.prototype.apply=function(e,n,t,r){var o,i;this.uniforms.dimensions[0]=null===(o=n.filterFrame)||void 0===o?void 0:o.width,this.uniforms.dimensions[1]=null===(i=n.filterFrame)||void 0===i?void 0:i.height,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(e){this.uniforms.uLightmap=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"color",{get:function(){return this._color},set:function(e){var n=this.uniforms.ambientColor;"number"==typeof e?(o.hex2rgb(e,n),this._color=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],this._color=o.rgb2hex(n))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(e){this.uniforms.ambientColor[3]=e},enumerable:!1,configurable:!0}),n}(n.Filter),G=function(e){function n(n,r,o,i){void 0===n&&(n=100),void 0===r&&(r=600);var l=e.call(this,c,"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n")||this;return l.uniforms.blur=n,l.uniforms.gradientBlur=r,l.uniforms.start=o||new t.Point(0,window.innerHeight/2),l.uniforms.end=i||new t.Point(600,window.innerHeight/2),l.uniforms.delta=new t.Point(30,30),l.uniforms.texSize=new t.Point(window.innerWidth,window.innerHeight),l.updateDelta(),l}return u(n,e),n.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(n.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(e){this.uniforms.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(e){this.uniforms.gradientBlur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"start",{get:function(){return this.uniforms.start},set:function(e){this.uniforms.start=e,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"end",{get:function(){return this.uniforms.end},set:function(e){this.uniforms.end=e,this.updateDelta()},enumerable:!1,configurable:!0}),n}(n.Filter),K=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return u(n,e),n.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,t=Math.sqrt(e*e+n*n);this.uniforms.delta.x=e/t,this.uniforms.delta.y=n/t},n}(G),q=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return u(n,e),n.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,t=Math.sqrt(e*e+n*n);this.uniforms.delta.x=-n/t,this.uniforms.delta.y=e/t},n}(G),W=function(e){function n(n,t,r,o){void 0===n&&(n=100),void 0===t&&(t=600);var i=e.call(this)||this;return i.tiltShiftXFilter=new K(n,t,r,o),i.tiltShiftYFilter=new q(n,t,r,o),i}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=e.getFilterTexture();this.tiltShiftXFilter.apply(e,n,o,1),this.tiltShiftYFilter.apply(e,o,t,r),e.returnFilterTexture(o)},Object.defineProperty(n.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},enumerable:!1,configurable:!0}),n}(n.Filter),Y=function(e){function n(t){var r=e.call(this,c,"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n")||this;return Object.assign(r,n.defaults,t),r}return u(n,e),Object.defineProperty(n.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(e){this.uniforms.offset=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(e){this.uniforms.angle=e},enumerable:!1,configurable:!0}),n.defaults={radius:200,angle:4,padding:20,offset:new t.Point},n}(n.Filter),Z=function(e){function n(t){var r,o=Object.assign(n.defaults,t),i=o.maxKernelSize,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(o,["maxKernelSize"]);return r=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = ${maxKernelSize};\n\n// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float seed) {\n    const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n    return fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = rand(vTextureCoord, 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n".replace("${maxKernelSize}",i.toFixed(1)))||this,Object.assign(r,l),r}return u(n,e),Object.defineProperty(n.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(e){this.uniforms.uCenter=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(e){this.uniforms.uStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(e){this.uniforms.uInnerRadius=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},enumerable:!1,configurable:!0}),n.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},n}(n.Filter);return e.AdjustmentFilter=m,e.AdvancedBloomFilter=h,e.AsciiFilter=g,e.BevelFilter=v,e.BloomFilter=y,e.BulgePinchFilter=b,e.CRTFilter=z,e.ColorMapFilter=x,e.ColorOverlayFilter=_,e.ColorReplaceFilter=C,e.ConvolutionFilter=S,e.CrossHatchFilter=F,e.DotFilter=O,e.DropShadowFilter=P,e.EmbossFilter=A,e.GlitchFilter=T,e.GlowFilter=w,e.GodrayFilter=D,e.KawaseBlurFilter=d,e.MotionBlurFilter=j,e.MultiColorReplaceFilter=M,e.OldFilmFilter=R,e.OutlineFilter=E,e.PixelateFilter=I,e.RGBSplitFilter=N,e.RadialBlurFilter=k,e.ReflectionFilter=L,e.ShockwaveFilter=X,e.SimpleLightmapFilter=B,e.TiltShiftAxisFilter=G,e.TiltShiftFilter=W,e.TiltShiftXFilter=K,e.TiltShiftYFilter=q,e.TwistFilter=Y,e.ZoomBlurFilter=Z,Object.defineProperty(e,"__esModule",{value:!0}),e}({},PIXI,PIXI,PIXI,PIXI.utils,PIXI,PIXI.filters,PIXI.filters);Object.assign(PIXI.filters,__filters);

// pixi-multistyle-text (https://github.com/tleunen/pixi-multistyle-text)
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("pixi.js")):"function"==typeof define&&define.amd?define(["pixi.js"],e):t.MultiStyleText=e(t.PIXI)}(this,function(t){var e=["pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture","mouseover","mouseenter","mousedown","mousemove","mouseup","mousecancel","mouseout","mouseleave","touchover","touchenter","touchdown","touchmove","touchup","touchcancel","touchout","touchleave"],i={bbcode:["[","]"],xml:["<",">"]},s=function(s){function o(t,i){var o=this;s.call(this,t),this.styles=i,e.forEach(function(t){o.on(t,function(t){return o.handleInteraction(t)})})}s&&(o.__proto__=s),(o.prototype=Object.create(s&&s.prototype)).constructor=o;var n={styles:{configurable:!0}};return o.prototype.handleInteraction=function(t){var e=t,i=t.data.getLocalPosition(this),s=this.hitboxes.reduce(function(t,e){return void 0!==t?t:e.hitbox.contains(i.x,i.y)?e:void 0},void 0);e.targetTag=void 0===s?void 0:s.tag},n.styles.set=function(e){for(var i in this.textStyles={},this.textStyles.default=this.assign({},o.DEFAULT_TAG_STYLE),e)"default"===i?this.assign(this.textStyles.default,e[i]):this.textStyles[i]=this.assign({},e[i]);"bbcode"===this.textStyles.default.tagStyle&&(this.textStyles.b=this.assign({},{fontStyle:"bold"}),this.textStyles.i=this.assign({},{fontStyle:"italic"}),this.textStyles.color=this.assign({},{fill:""}),this.textStyles.outline=this.assign({},{stroke:"",strokeThickness:6}),this.textStyles.font=this.assign({},{fontFamily:""}),this.textStyles.shadow=this.assign({},{dropShadowColor:"",dropShadow:!0,dropShadowBlur:3,dropShadowDistance:3,dropShadowAngle:2}),this.textStyles.size=this.assign({},{fontSize:"px"}),this.textStyles.spacing=this.assign({},{letterSpacing:""}),this.textStyles.align=this.assign({},{align:""})),this.withPrivateMembers()._style=new t.TextStyle(this.textStyles.default),this.withPrivateMembers().dirty=!0},o.prototype.setTagStyle=function(e,i){e in this.textStyles?this.assign(this.textStyles[e],i):this.textStyles[e]=this.assign({},i),this.withPrivateMembers()._style=new t.TextStyle(this.textStyles.default),this.withPrivateMembers().dirty=!0},o.prototype.deleteTagStyle=function(e){"default"===e?this.textStyles.default=this.assign({},o.DEFAULT_TAG_STYLE):delete this.textStyles[e],this.withPrivateMembers()._style=new t.TextStyle(this.textStyles.default),this.withPrivateMembers().dirty=!0},o.prototype.getTagRegex=function(t,e){var s=Object.keys(this.textStyles).join("|");s=t?"("+s+")":"(?:"+s+")";var o="bbcode"===this.textStyles.default.tagStyle?"\\"+i.bbcode[0]+s+"(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\"+i.bbcode[1]+"|\\"+i.bbcode[0]+"\\/"+s+"\\s*\\"+i.bbcode[1]:"\\"+i.xml[0]+s+"(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\"+i.xml[1]+"|\\"+i.xml[0]+"\\/"+s+"\\s*\\"+i.xml[1];return e&&(o="("+o+")"),new RegExp(o,"g")},o.prototype.getPropertyRegex=function(){return new RegExp("([A-Za-z0-9_\\-]+)=(?:\"((?:[^\"]+|\\\\\")*)\"|'((?:[^']+|\\\\')*)')","g")},o.prototype.getBBcodePropertyRegex=function(){return new RegExp("[A-Za-z0-9_\\-]+=([A-Za-z0-9_\\-\\#]+)","g")},o.prototype._getTextDataPerLine=function(t){for(var e=[],s=this.getTagRegex(!0,!1),o=[this.assign({},this.textStyles.default)],n=[{name:"default",properties:{}}],r=0;r<t.length;r++){for(var a=[],h=[],l=void 0;l=s.exec(t[r]);)h.push(l);if(0===h.length)a.push(this.createTextData(t[r],o[o.length-1],n[n.length-1]));else{for(var c=0,x=0;x<h.length;x++){if(h[x].index>c&&a.push(this.createTextData(t[r].substring(c,h[x].index),o[o.length-1],n[n.length-1])),"/"===h[x][0][1])o.length>1&&(o.pop(),n.pop());else{for(var d={},g=this.getPropertyRegex(),p=void 0;p=g.exec(h[x][0]);)d[p[1]]=p[2]||p[3];if(n.push({name:h[x][1],properties:d}),"bbcode"===this.textStyles.default.tagStyle&&h[x][0].includes("=")&&this.textStyles[h[x][1]]){var u=this.getBBcodePropertyRegex().exec(h[x][0]),f={};Object.entries(this.textStyles[h[x][1]]).forEach(function(t){f[t[0]]="string"!=typeof t[1]?t[1]:u[1]+t[1]}),o.push(this.assign({},o[o.length-1],f))}else o.push(this.assign({},o[o.length-1],this.textStyles[h[x][1]]))}c=h[x].index+h[x][0].length}if(c<t[r].length){var y=this.createTextData(c?t[r].substring(c):t[r],o[o.length-1],n[n.length-1]);a.push(y)}}e.push(a)}var b=this.textStyles.default.tagStyle;return e[e.length-1].map(function(t){t.text.includes(i[b][0])&&(t.text=t.text.match("bbcode"===b?/^(.*)\[/:/^(.*)\</)[1])}),e},o.prototype.getFontString=function(e){return new t.TextStyle(e).toFontString()},o.prototype.createTextData=function(t,e,i){return{text:t,style:e,width:0,height:0,fontProperties:void 0,tag:i}},o.prototype.getDropShadowPadding=function(){var t=this,e=0,i=0;return Object.keys(this.textStyles).forEach(function(s){var o=t.textStyles[s],n=o.dropShadowBlur;e=Math.max(e,o.dropShadowDistance||0),i=Math.max(i,n||0)}),e+i},o.prototype.withPrivateMembers=function(){return this},o.prototype.updateText=function(){var e=this;if(this.withPrivateMembers().dirty){this.hitboxes=[],this.texture.baseTexture.resolution=this.resolution;var i=this.textStyles,s=this.text;this.withPrivateMembers()._style.wordWrap&&(s=this.wordWrap(this.text));for(var n=s.split(/(?:\r\n|\r|\n)/),r=this._getTextDataPerLine(n),a=[],h=[],l=[],c=0,x=0;x<n.length;x++){for(var d=0,g=0,p=0,u=0;u<r[x].length;u++){var f=r[x][u].style;this.context.font=this.getFontString(f),r[x][u].width=this.context.measureText(r[x][u].text).width,0!==r[x][u].text.length&&(r[x][u].width+=(r[x][u].text.length-1)*f.letterSpacing,u>0&&(d+=f.letterSpacing/2),u<r[x].length-1&&(d+=f.letterSpacing/2)),d+=r[x][u].width,r[x][u].fontProperties=t.TextMetrics.measureFont(this.context.font),r[x][u].height=r[x][u].fontProperties.fontSize,"number"==typeof f.valign?(g=Math.min(g,f.valign-r[x][u].fontProperties.descent),p=Math.max(p,f.valign+r[x][u].fontProperties.ascent)):(g=Math.min(g,-r[x][u].fontProperties.descent),p=Math.max(p,r[x][u].fontProperties.ascent))}a[x]=d,h[x]=g,l[x]=p,c=Math.max(c,d)}var y=Object.keys(i).map(function(t){return i[t]}).reduce(function(t,e){return Math.max(t,e.strokeThickness||0)},0),b=this.getDropShadowPadding(),S=c+2*y+2*b,v=l.reduce(function(t,e){return t+e},0)-h.reduce(function(t,e){return t+e},0)+2*y+2*b;this.canvas.width=S*this.resolution,this.canvas.height=v*this.resolution,this.context.scale(this.resolution,this.resolution),this.context.textBaseline="alphabetic",this.context.lineJoin="round";for(var m=b+y,w=[],T=0;T<r.length;T++){var P=r[T],k=void 0;switch(this.withPrivateMembers()._style.align){case"left":k=b+y;break;case"center":k=b+y+(c-a[T])/2;break;case"right":k=b+y+c-a[T]}for(var _=0;_<P.length;_++){var M=P[_],F=M.style,O=M.text,A=M.fontProperties,E=M.width,D=M.tag,B=m+A.ascent;switch(F.valign){case"top":break;case"baseline":B+=l[T]-A.ascent;break;case"middle":B+=(l[T]-h[T]-A.ascent-A.descent)/2;break;case"bottom":B+=l[T]-h[T]-A.ascent-A.descent;break;default:B+=l[T]-A.ascent-F.valign}if(0===F.letterSpacing)w.push({text:O,style:F,x:k,y:B,width:E,ascent:A.ascent,descent:A.descent,tag:D}),k+=P[_].width;else{this.context.font=this.getFontString(P[_].style);for(var W=0;W<O.length;W++){(W>0||_>0)&&(k+=F.letterSpacing/2);var j=this.context.measureText(O.charAt(W)).width;w.push({text:O.charAt(W),style:F,x:k,y:B,width:j,ascent:A.ascent,descent:A.descent,tag:D}),k+=j,(W<O.length-1||_<P.length-1)&&(k+=F.letterSpacing/2)}}}m+=l[T]-h[T]}this.context.save(),w.forEach(function(i){var s=i.style,o=i.text,n=i.x,r=i.y;if(s.dropShadow){e.context.font=e.getFontString(s);var a=s.dropShadowColor;"number"==typeof a&&(a=t.utils.hex2string(a)),e.context.shadowColor=a,e.context.shadowBlur=s.dropShadowBlur,e.context.shadowOffsetX=Math.cos(s.dropShadowAngle)*s.dropShadowDistance*e.resolution,e.context.shadowOffsetY=Math.sin(s.dropShadowAngle)*s.dropShadowDistance*e.resolution,e.context.fillText(o,n,r)}}),this.context.restore(),w.forEach(function(i){var s=i.style,o=i.text,n=i.x,r=i.y;if(void 0!==s.stroke&&s.strokeThickness){e.context.font=e.getFontString(s);var a=s.stroke;"number"==typeof a&&(a=t.utils.hex2string(a)),e.context.strokeStyle=a,e.context.lineWidth=s.strokeThickness,e.context.strokeText(o,n,r)}}),w.forEach(function(i){var s=i.style,o=i.text,n=i.x,r=i.y;if(void 0!==s.fill){e.context.font=e.getFontString(s);var a=s.fill;if("number"==typeof a)a=t.utils.hex2string(a);else if(Array.isArray(a))for(var h=0;h<a.length;h++){var l=a[h];"number"==typeof l&&(a[h]=t.utils.hex2string(l))}e.context.fillStyle=e._generateFillStyle(new t.TextStyle(s),[o]),e.context.fillText(o,n,r)}}),w.forEach(function(i){var s=i.style,n=i.x,r=i.y,a=i.width,h=i.ascent,l=i.descent,c=i.tag,x=-e.withPrivateMembers()._style.padding-e.getDropShadowPadding();e.hitboxes.push({tag:c,hitbox:new t.Rectangle(n+x,r-h+x,a,h+l)}),(void 0===s.debug?o.debugOptions.spans.enabled:s.debug)&&(e.context.lineWidth=1,o.debugOptions.spans.bounding&&(e.context.fillStyle=o.debugOptions.spans.bounding,e.context.strokeStyle=o.debugOptions.spans.bounding,e.context.beginPath(),e.context.rect(n,r-h,a,h+l),e.context.fill(),e.context.stroke(),e.context.stroke()),o.debugOptions.spans.baseline&&(e.context.strokeStyle=o.debugOptions.spans.baseline,e.context.beginPath(),e.context.moveTo(n,r),e.context.lineTo(n+a,r),e.context.closePath(),e.context.stroke()),o.debugOptions.spans.top&&(e.context.strokeStyle=o.debugOptions.spans.top,e.context.beginPath(),e.context.moveTo(n,r-h),e.context.lineTo(n+a,r-h),e.context.closePath(),e.context.stroke()),o.debugOptions.spans.bottom&&(e.context.strokeStyle=o.debugOptions.spans.bottom,e.context.beginPath(),e.context.moveTo(n,r+l),e.context.lineTo(n+a,r+l),e.context.closePath(),e.context.stroke()),o.debugOptions.spans.text&&(e.context.fillStyle="#ffffff",e.context.strokeStyle="#000000",e.context.lineWidth=2,e.context.font="8px monospace",e.context.strokeText(c.name,n,r-h+8),e.context.fillText(c.name,n,r-h+8),e.context.strokeText(a.toFixed(2)+"x"+(h+l).toFixed(2),n,r-h+16),e.context.fillText(a.toFixed(2)+"x"+(h+l).toFixed(2),n,r-h+16)))}),o.debugOptions.objects.enabled&&(o.debugOptions.objects.bounding&&(this.context.fillStyle=o.debugOptions.objects.bounding,this.context.beginPath(),this.context.rect(0,0,S,v),this.context.fill()),o.debugOptions.objects.text&&(this.context.fillStyle="#ffffff",this.context.strokeStyle="#000000",this.context.lineWidth=2,this.context.font="8px monospace",this.context.strokeText(S.toFixed(2)+"x"+v.toFixed(2),0,8,S),this.context.fillText(S.toFixed(2)+"x"+v.toFixed(2),0,8,S))),this.updateTexture()}},o.prototype.wordWrap=function(t){var e="",i=this.getTagRegex(!0,!0),s=t.split("\n"),o=this.withPrivateMembers()._style.wordWrapWidth,n=[this.assign({},this.textStyles.default)];this.context.font=this.getFontString(this.textStyles.default);for(var r=0;r<s.length;r++){for(var a=o,h=s[r].split(i),l=!0,c=0;c<h.length;c++)if(i.test(h[c]))e+=h[c],"/"===h[c][1]?(c+=2,n.pop()):(n.push(this.assign({},n[n.length-1],this.textStyles[h[++c]])),c++),this.context.font=this.getFontString(n[n.length-1]);else for(var x=h[c].split(" "),d=0;d<x.length;d++){var g=this.context.measureText(x[d]).width;if(this.withPrivateMembers()._style.breakWords&&g>a){var p=x[d].split("");d>0&&(e+=" ",a-=this.context.measureText(" ").width);for(var u=0;u<p.length;u++){var f=this.context.measureText(p[u]).width;f>a?(e+="\n"+p[u],a=o-f):(e+=p[u],a-=f)}}else if(this.withPrivateMembers()._style.breakWords)e+=x[d],a-=g;else{var y=g+(d>0?this.context.measureText(" ").width:0);y>a?(l||(e+="\n"),e+=x[d],a=o-g):(a-=y,d>0&&(e+=" "),e+=x[d])}l=!1}r<s.length-1&&(e+="\n")}return e},o.prototype.updateTexture=function(){var t=this.withPrivateMembers()._texture,e=this.getDropShadowPadding();t.baseTexture.setRealSize(this.canvas.width,this.canvas.height,this.resolution),t.trim.width=t.frame.width=this.canvas.width/this.resolution,t.trim.height=t.frame.height=this.canvas.height/this.resolution,t.trim.x=-this.withPrivateMembers()._style.padding-e,t.trim.y=-this.withPrivateMembers()._style.padding-e,t.orig.width=t.frame.width-2*(this.withPrivateMembers()._style.padding+e),t.orig.height=t.frame.height-2*(this.withPrivateMembers()._style.padding+e),this.withPrivateMembers()._onTextureUpdate(),t.baseTexture.emit("update",t.baseTexture),this.withPrivateMembers().dirty=!1},o.prototype.assign=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];for(var s=0,o=e;s<o.length;s+=1){var n=o[s];for(var r in n)t[r]=n[r]}return t},Object.defineProperties(o.prototype,n),o}(t.Text);return s.DEFAULT_TAG_STYLE={align:"left",breakWords:!1,dropShadow:!1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"#000000",dropShadowDistance:5,fill:"black",fillGradientType:t.TEXT_GRADIENT.LINEAR_VERTICAL,fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",valign:"baseline",wordWrap:!1,wordWrapWidth:100,tagStyle:"xml"},s.debugOptions={spans:{enabled:!1,baseline:"#44BB44",top:"#BB4444",bottom:"#4444BB",bounding:"rgba(255, 255, 255, 0.1)",text:!0},objects:{enabled:!1,bounding:"rgba(255, 255, 255, 0.05)",text:!0}},s});

// pixi-sound - v3.0.5 (https://github.com/pixijs/pixi-sound)
this.PIXI=this.PIXI||{},this.PIXI.sound=function(t,e,n,o){"use strict";var i=function(){function t(t,e){this._output=e,this._input=t}return Object.defineProperty(t.prototype,"destination",{get:function(){return this._input},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filters",{get:function(){return this._filters},set:function(t){var e=this;if(this._filters&&(this._filters.forEach(function(t){t&&t.disconnect()}),this._filters=null,this._input.connect(this._output)),t&&t.length){this._filters=t.slice(0),this._input.disconnect();var n=null;t.forEach(function(t){null===n?e._input.connect(t.destination):n.connect(t.destination),n=t}),n.connect(this._output)}},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.filters=null,this._input=null,this._output=null},t}(),r=function(){function t(t,e){this.init(t,e)}return t.prototype.init=function(t,e){this.destination=t,this.source=e||t},t.prototype.connect=function(t){this.source.connect(t)},t.prototype.disconnect=function(){this.source.disconnect()},t.prototype.destroy=function(){this.disconnect(),this.destination=null,this.source=null},t}(),s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function u(t,e){function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a,c=function(){return(c=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function p(){return a}var h=function(){function t(){}return t.setParamValue=function(t,e){if(t.setValueAtTime){var n=p().context;t.setValueAtTime(e,n.audioContext.currentTime)}else t.value=e;return e},t}(),l=0,f=function(t){function n(e){var n=t.call(this)||this;return n.id=l++,n._media=null,n._paused=!1,n._muted=!1,n._elapsed=0,n.init(e),n}return u(n,t),n.prototype.set=function(t,e){if(void 0===this[t])throw new Error("Property with name "+t+" does not exist.");return this[t]=e,this},n.prototype.stop=function(){this._source&&(this._internalStop(),this.emit("stop"))},Object.defineProperty(n.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=t,this.refresh(),this._update(!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=t,this.refresh()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"muted",{get:function(){return this._muted},set:function(t){this._muted=t,this.refresh()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this.refresh()},enumerable:!0,configurable:!0}),n.prototype.refresh=function(){if(this._source){var t=this._media.context,e=this._media.parent;this._source.loop=this._loop||e.loop;var n=t.volume*(t.muted?0:1),o=e.volume*(e.muted?0:1),i=this._volume*(this._muted?0:1);h.setParamValue(this._gain.gain,i*o*n),h.setParamValue(this._source.playbackRate,this._speed*e.speed*t.speed)}},n.prototype.refreshPaused=function(){var t=this._media.context,e=this._media.parent,n=this._paused||e.paused||t.paused;n!==this._pausedReal&&(this._pausedReal=n,n?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit("pause",n))},n.prototype.play=function(t){var e=t.start,n=t.end,o=t.speed,i=t.loop,r=t.volume,s=t.muted;this._paused=!1;var u=this._media.nodes.cloneBufferSource(),a=u.source,c=u.gain;this._source=a,this._gain=c,this._speed=o,this._volume=r,this._loop=!!i,this._muted=s,this.refresh();var p=this._source.buffer.duration;this._duration=p,this._end=n,this._lastUpdate=this._now(),this._elapsed=e,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=n,this._source.loopStart=e,this._source.start(0,e)):n?this._source.start(0,e,n-e):this._source.start(0,e),this.emit("start"),this._update(!0),this._enabled=!0},n.prototype._toSec=function(t){return t>10&&(t/=1e3),t||0},Object.defineProperty(n.prototype,"_enabled",{set:function(t){e.Ticker.shared.remove(this._updateListener,this),t&&e.Ticker.shared.add(this._updateListener,this)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"progress",{get:function(){return this._progress},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"paused",{get:function(){return this._paused},set:function(t){this._paused=t,this.refreshPaused()},enumerable:!0,configurable:!0}),n.prototype.destroy=function(){this.removeAllListeners(),this._internalStop(),this._gain&&(this._gain.disconnect(),this._gain=null),this._media&&(this._media.context.events.off("refresh",this.refresh,this),this._media.context.events.off("refreshPaused",this.refreshPaused,this),this._media=null),this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1},n.prototype.toString=function(){return"[WebAudioInstance id="+this.id+"]"},n.prototype._now=function(){return this._media.context.audioContext.currentTime},n.prototype._updateListener=function(){this._update()},n.prototype._update=function(t){if(void 0===t&&(t=!1),this._source){var e=this._now(),n=e-this._lastUpdate;if(n>0||t){var o=this._source.playbackRate.value;this._elapsed+=n*o,this._lastUpdate=e;var i=this._duration,r=void 0;if(this._source.loopStart){var s=this._source.loopEnd-this._source.loopStart;r=(this._source.loopStart+this._elapsed%s)/i}else r=this._elapsed%i/i;this._progress=r,this.emit("progress",this._progress,i)}}},n.prototype.init=function(t){this._media=t,t.context.events.on("refresh",this.refresh,this),t.context.events.on("refreshPaused",this.refreshPaused,this)},n.prototype._internalStop=function(){this._source&&(this._enabled=!1,this._source.onended=null,this._source.stop(0),this._source.disconnect(),this._source=null)},n.prototype._onComplete=function(){this._source&&(this._enabled=!1,this._source.onended=null,this._source.disconnect()),this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)},n}(n.EventEmitter),d=function(t){function e(e){var n=this,o=e.audioContext,i=o.createBufferSource(),r=o.createGain(),s=o.createAnalyser();return i.connect(s),s.connect(r),r.connect(e.destination),(n=t.call(this,s,r)||this).context=e,n.bufferSource=i,n.gain=r,n.analyser=s,n}return u(e,t),Object.defineProperty(e.prototype,"script",{get:function(){return this._script||(this._script=this.context.audioContext.createScriptProcessor(e.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null},e.prototype.cloneBufferSource=function(){var t=this.bufferSource,e=this.context.audioContext.createBufferSource();e.buffer=t.buffer,h.setParamValue(e.playbackRate,t.playbackRate.value),e.loop=t.loop;var n=this.context.audioContext.createGain();return e.connect(n),n.connect(this.destination),{source:e,gain:n}},Object.defineProperty(e.prototype,"bufferSize",{get:function(){return this.script.bufferSize},enumerable:!0,configurable:!0}),e.BUFFER_SIZE=0,e}(i),_=function(){function t(){}return t.prototype.init=function(t){this.parent=t,this._nodes=new d(this.context),this._source=this._nodes.bufferSource,this.source=t.options.source},t.prototype.destroy=function(){this.parent=null,this._nodes.destroy(),this._nodes=null,this._source=null,this.source=null},t.prototype.create=function(){return new f(this)},Object.defineProperty(t.prototype,"context",{get:function(){return this.parent.context},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPlayable",{get:function(){return!!this._source&&!!this._source.buffer},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filters",{get:function(){return this._nodes.filters},set:function(t){this._nodes.filters=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this._source.buffer.duration},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"buffer",{get:function(){return this._source.buffer},set:function(t){this._source.buffer=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nodes",{get:function(){return this._nodes},enumerable:!0,configurable:!0}),t.prototype.load=function(t){this.source?this._decode(this.source,t):this.parent.url?this._loadUrl(t):t&&t(new Error("sound.url or sound.source must be set"))},t.prototype._loadUrl=function(t){var e=this,n=new XMLHttpRequest,o=this.parent.url;n.open("GET",o,!0),n.responseType="arraybuffer",n.onload=function(){e.source=n.response,e._decode(n.response,t)},n.send()},t.prototype._decode=function(t,e){var n=this;this.parent.context.decode(t,function(t,o){if(t)e&&e(t);else{n.parent.isLoaded=!0,n.buffer=o;var i=n.parent.autoPlayStart();e&&e(null,n.parent,i)}})},t}(),y=function(t){function e(){var o=this,i=window,r=new e.AudioContext,s=r.createDynamicsCompressor(),u=r.createAnalyser();return u.connect(s),s.connect(r.destination),(o=t.call(this,u,s)||this)._ctx=r,o._offlineCtx=new e.OfflineAudioContext(1,2,i.OfflineAudioContext?r.sampleRate:44100),o._unlocked=!1,o.compressor=s,o.analyser=u,o.events=new n.EventEmitter,o.volume=1,o.speed=1,o.muted=!1,o.paused=!1,"running"!==r.state&&(o._unlock(),o._unlock=o._unlock.bind(o),document.addEventListener("mousedown",o._unlock,!0),document.addEventListener("touchstart",o._unlock,!0),document.addEventListener("touchend",o._unlock,!0)),o}return u(e,t),e.prototype._unlock=function(){this._unlocked||(this.playEmptySound(),"running"===this._ctx.state&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._unlocked=!0))},e.prototype.playEmptySound=function(){var t=this._ctx.createBufferSource();t.buffer=this._ctx.createBuffer(1,1,22050),t.connect(this._ctx.destination),t.start(0,0,0),"suspended"===t.context.state&&t.context.resume()},Object.defineProperty(e,"AudioContext",{get:function(){var t=window;return t.AudioContext||t.webkitAudioContext||null},enumerable:!0,configurable:!0}),Object.defineProperty(e,"OfflineAudioContext",{get:function(){var t=window;return t.OfflineAudioContext||t.webkitOfflineAudioContext||null},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this);var e=this._ctx;void 0!==e.close&&e.close(),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null},Object.defineProperty(e.prototype,"audioContext",{get:function(){return this._ctx},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"offlineContext",{get:function(){return this._offlineCtx},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paused",{get:function(){return this._paused},set:function(t){t&&"running"===this._ctx.state?this._ctx.suspend():t||"suspended"!==this._ctx.state||this._ctx.resume(),this._paused=t},enumerable:!0,configurable:!0}),e.prototype.refresh=function(){this.events.emit("refresh")},e.prototype.refreshPaused=function(){this.events.emit("refreshPaused")},e.prototype.toggleMute=function(){return this.muted=!this.muted,this.refresh(),this.muted},e.prototype.togglePause=function(){return this.paused=!this.paused,this.refreshPaused(),this._paused},e.prototype.decode=function(t,e){this._offlineCtx.decodeAudioData(t,function(t){e(null,t)},function(t){e(new Error(t.message||"Unable to decode file"))})},e}(i),m={WebAudioMedia:_,WebAudioInstance:f,WebAudioNodes:d,WebAudioContext:y,WebAudioUtils:h},g={Filter:r,EqualizerFilter:function(t){function e(n,o,i,r,s,u,a,c,l,f){void 0===n&&(n=0),void 0===o&&(o=0),void 0===i&&(i=0),void 0===r&&(r=0),void 0===s&&(s=0),void 0===u&&(u=0),void 0===a&&(a=0),void 0===c&&(c=0),void 0===l&&(l=0),void 0===f&&(f=0);var d=this;if(!p().useLegacy){var _=[{f:e.F32,type:"lowshelf",gain:n},{f:e.F64,type:"peaking",gain:o},{f:e.F125,type:"peaking",gain:i},{f:e.F250,type:"peaking",gain:r},{f:e.F500,type:"peaking",gain:s},{f:e.F1K,type:"peaking",gain:u},{f:e.F2K,type:"peaking",gain:a},{f:e.F4K,type:"peaking",gain:c},{f:e.F8K,type:"peaking",gain:l},{f:e.F16K,type:"highshelf",gain:f}].map(function(t){var e=p().context.audioContext.createBiquadFilter();return e.type=t.type,h.setParamValue(e.Q,1),e.frequency.value=t.f,h.setParamValue(e.gain,t.gain),e});(d=t.call(this,_[0],_[_.length-1])||this).bands=_,d.bandsMap={};for(var y=0;y<d.bands.length;y++){var m=d.bands[y];y>0&&d.bands[y-1].connect(m),d.bandsMap[m.frequency.value]=m}return d}d=t.call(this,null)||this}return u(e,t),e.prototype.setGain=function(t,e){if(void 0===e&&(e=0),!this.bandsMap[t])throw new Error("No band found for frequency "+t);h.setParamValue(this.bandsMap[t].gain,e)},e.prototype.getGain=function(t){if(!this.bandsMap[t])throw new Error("No band found for frequency "+t);return this.bandsMap[t].gain.value},Object.defineProperty(e.prototype,"f32",{get:function(){return this.getGain(e.F32)},set:function(t){this.setGain(e.F32,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f64",{get:function(){return this.getGain(e.F64)},set:function(t){this.setGain(e.F64,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f125",{get:function(){return this.getGain(e.F125)},set:function(t){this.setGain(e.F125,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f250",{get:function(){return this.getGain(e.F250)},set:function(t){this.setGain(e.F250,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f500",{get:function(){return this.getGain(e.F500)},set:function(t){this.setGain(e.F500,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f1k",{get:function(){return this.getGain(e.F1K)},set:function(t){this.setGain(e.F1K,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f2k",{get:function(){return this.getGain(e.F2K)},set:function(t){this.setGain(e.F2K,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f4k",{get:function(){return this.getGain(e.F4K)},set:function(t){this.setGain(e.F4K,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f8k",{get:function(){return this.getGain(e.F8K)},set:function(t){this.setGain(e.F8K,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"f16k",{get:function(){return this.getGain(e.F16K)},set:function(t){this.setGain(e.F16K,t)},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this.bands.forEach(function(t){h.setParamValue(t.gain,0)})},e.prototype.destroy=function(){this.bands.forEach(function(t){t.disconnect()}),this.bands=null,this.bandsMap=null},e.F32=32,e.F64=64,e.F125=125,e.F250=250,e.F500=500,e.F1K=1e3,e.F2K=2e3,e.F4K=4e3,e.F8K=8e3,e.F16K=16e3,e}(r),DistortionFilter:function(t){function e(e){void 0===e&&(e=0);var n=this;if(!p().useLegacy){var o=p().context.audioContext.createWaveShaper();return(n=t.call(this,o)||this)._distortion=o,n.amount=e,n}n=t.call(this,null)||this}return u(e,t),Object.defineProperty(e.prototype,"amount",{get:function(){return this._amount},set:function(t){t*=1e3,this._amount=t;for(var e,n=new Float32Array(44100),o=Math.PI/180,i=0;i<44100;++i)e=2*i/44100-1,n[i]=(3+t)*e*20*o/(Math.PI+t*Math.abs(e));this._distortion.curve=n,this._distortion.oversample="4x"},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this._distortion=null,t.prototype.destroy.call(this)},e}(r),StereoFilter:function(t){function e(e){void 0===e&&(e=0);var n=this;if(!p().useLegacy){var o,i,r,s=p().context.audioContext;return s.createStereoPanner?r=o=s.createStereoPanner():((i=s.createPanner()).panningModel="equalpower",r=i),(n=t.call(this,r)||this)._stereo=o,n._panner=i,n.pan=e,n}n=t.call(this,null)||this}return u(e,t),Object.defineProperty(e.prototype,"pan",{get:function(){return this._pan},set:function(t){this._pan=t,this._stereo?h.setParamValue(this._stereo.pan,t):this._panner.setPosition(t,0,1-Math.abs(t))},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this),this._stereo=null,this._panner=null},e}(r),ReverbFilter:function(t){function e(e,n,o){void 0===e&&(e=3),void 0===n&&(n=2),void 0===o&&(o=!1);var i=this;if(!p().useLegacy)return(i=t.call(this,null)||this)._seconds=i._clamp(e,1,50),i._decay=i._clamp(n,0,100),i._reverse=o,i._rebuild(),i;i=t.call(this,null)||this}return u(e,t),e.prototype._clamp=function(t,e,n){return Math.min(n,Math.max(e,t))},Object.defineProperty(e.prototype,"seconds",{get:function(){return this._seconds},set:function(t){this._seconds=this._clamp(t,1,50),this._rebuild()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"decay",{get:function(){return this._decay},set:function(t){this._decay=this._clamp(t,0,100),this._rebuild()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reverse",{get:function(){return this._reverse},set:function(t){this._reverse=t,this._rebuild()},enumerable:!0,configurable:!0}),e.prototype._rebuild=function(){for(var t,e=p().context.audioContext,n=e.sampleRate,o=n*this._seconds,i=e.createBuffer(2,o,n),r=i.getChannelData(0),s=i.getChannelData(1),u=0;u<o;u++)t=this._reverse?o-u:u,r[u]=(2*Math.random()-1)*Math.pow(1-t/o,this._decay),s[u]=(2*Math.random()-1)*Math.pow(1-t/o,this._decay);var a=p().context.audioContext.createConvolver();a.buffer=i,this.init(a)},e}(r),MonoFilter:function(t){function e(){var e=this;if(!p().useLegacy){var n=p().context.audioContext,o=n.createChannelSplitter(),i=n.createChannelMerger();return i.connect(o),(e=t.call(this,i,o)||this)._merger=i,e}e=t.call(this,null)||this}return u(e,t),e.prototype.destroy=function(){this._merger.disconnect(),this._merger=null,t.prototype.destroy.call(this)},e}(r),TelephoneFilter:function(t){function e(){if(!p().useLegacy){var e=p().context.audioContext,n=e.createBiquadFilter(),o=e.createBiquadFilter(),i=e.createBiquadFilter(),r=e.createBiquadFilter();return n.type="lowpass",h.setParamValue(n.frequency,2e3),o.type="lowpass",h.setParamValue(o.frequency,2e3),i.type="highpass",h.setParamValue(i.frequency,500),r.type="highpass",h.setParamValue(r.frequency,500),n.connect(o),o.connect(i),i.connect(r),t.call(this,n,r)||this}t.call(this,null)}return u(e,t),e}(r)},b=0,v=function(t){function n(e){var n=t.call(this)||this;return n.id=b++,n.init(e),n}return u(n,t),n.prototype.set=function(t,e){if(void 0===this[t])throw new Error("Property with name "+t+" does not exist.");return this[t]=e,this},Object.defineProperty(n.prototype,"progress",{get:function(){return this._source.currentTime/this._duration},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"paused",{get:function(){return this._paused},set:function(t){this._paused=t,this.refreshPaused()},enumerable:!0,configurable:!0}),n.prototype._onPlay=function(){this._playing=!0},n.prototype._onPause=function(){this._playing=!1},n.prototype.init=function(t){this._playing=!1,this._duration=t.source.duration;var e=this._source=t.source.cloneNode(!1);e.src=t.parent.url,e.onplay=this._onPlay.bind(this),e.onpause=this._onPause.bind(this),t.context.on("refresh",this.refresh,this),t.context.on("refreshPaused",this.refreshPaused,this),this._media=t},n.prototype._internalStop=function(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())},n.prototype.stop=function(){this._internalStop(),this._source&&this.emit("stop")},Object.defineProperty(n.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=t,this.refresh()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=t,this.refresh()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this.refresh()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"muted",{get:function(){return this._muted},set:function(t){this._muted=t,this.refresh()},enumerable:!0,configurable:!0}),n.prototype.refresh=function(){var t=this._media.context,e=this._media.parent;this._source.loop=this._loop||e.loop;var n=t.volume*(t.muted?0:1),o=e.volume*(e.muted?0:1),i=this._volume*(this._muted?0:1);this._source.volume=i*n*o,this._source.playbackRate=this._speed*t.speed*e.speed},n.prototype.refreshPaused=function(){var t=this._media.context,e=this._media.parent,n=this._paused||e.paused||t.paused;n!==this._pausedReal&&(this._pausedReal=n,n?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit("pause",n))},n.prototype.play=function(t){var o=this,i=t.start,r=t.end,s=t.speed,u=t.loop,a=t.volume,c=t.muted;this._speed=s,this._volume=a,this._loop=!!u,this._muted=c,this.refresh(),this.loop&&null!==r&&(this.loop=!1),this._start=i,this._end=r||this._duration,this._start=Math.max(0,this._start-n.PADDING),this._end=Math.min(this._end+n.PADDING,this._duration),this._source.onloadedmetadata=function(){o._source&&(o._source.currentTime=i,o._source.onloadedmetadata=null,o.emit("progress",i,o._duration),e.Ticker.shared.add(o._onUpdate,o))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")},n.prototype._onUpdate=function(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()},n.prototype._onComplete=function(){e.Ticker.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)},n.prototype.destroy=function(){e.Ticker.shared.remove(this._onUpdate,this),this.removeAllListeners();var t=this._source;t&&(t.onended=null,t.onplay=null,t.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&(this._media.context.off("refresh",this.refresh,this),this._media.context.off("refreshPaused",this.refreshPaused,this),this._media=null)},n.prototype.toString=function(){return"[HTMLAudioInstance id="+this.id+"]"},n.PADDING=.1,n}(n.EventEmitter),P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.init=function(t){this.parent=t,this._source=t.options.source||new Audio,t.url&&(this._source.src=t.url)},e.prototype.create=function(){return new v(this)},Object.defineProperty(e.prototype,"isPlayable",{get:function(){return!!this._source&&4===this._source.readyState},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return this._source.duration},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this.parent.context},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filters",{get:function(){return null},set:function(t){},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)},Object.defineProperty(e.prototype,"source",{get:function(){return this._source},enumerable:!0,configurable:!0}),e.prototype.load=function(t){var e=this._source,n=this.parent;if(4!==e.readyState){if(!n.url)return t(new Error("sound.url or sound.source must be set"));e.src=n.url;var o=function(){e.removeEventListener("canplaythrough",i),e.removeEventListener("load",i),e.removeEventListener("abort",r),e.removeEventListener("error",s)},i=function(){o(),n.isLoaded=!0;var e=n.autoPlayStart();t&&t(null,n,e)},r=function(){o(),t&&t(new Error("Sound loading has been aborted"))},s=function(){o();var n="Failed to load audio element (code: "+e.error.code+")";t&&t(new Error(n))};e.addEventListener("canplaythrough",i,!1),e.addEventListener("load",i,!1),e.addEventListener("abort",r,!1),e.addEventListener("error",s,!1),e.load()}else{n.isLoaded=!0;var u=n.autoPlayStart();t&&setTimeout(function(){t(null,n,u)},0)}},e}(n.EventEmitter),x=function(t){function e(){var e=t.call(this)||this;return e.speed=1,e.volume=1,e.muted=!1,e.paused=!1,e}return u(e,t),e.prototype.refresh=function(){this.emit("refresh")},e.prototype.refreshPaused=function(){this.emit("refreshPaused")},Object.defineProperty(e.prototype,"filters",{get:function(){return null},set:function(t){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"audioContext",{get:function(){return null},enumerable:!0,configurable:!0}),e.prototype.toggleMute=function(){return this.muted=!this.muted,this.refresh(),this.muted},e.prototype.togglePause=function(){return this.paused=!this.paused,this.refreshPaused(),this.paused},e.prototype.destroy=function(){this.removeAllListeners()},e}(n.EventEmitter),O={HTMLAudioMedia:P,HTMLAudioInstance:v,HTMLAudioContext:x},j=["mp3","ogg","oga","opus","mpeg","wav","m4a","aiff","wma","mid"];var E,w,A,L,F=(E={m4a:"mp4",oga:"ogg"},w=document.createElement("audio"),A={},L=/^no$/,j.forEach(function(t){var e=E[t]||t,n=w.canPlayType("audio/"+t).replace(L,""),o=w.canPlayType("audio/"+e).replace(L,"");A[t]=!!n||!!o}),Object.freeze(A)),C=/\.(\{([^\}]+)\})(\?.*)?$/;function S(t){var e=C,n="string"==typeof t?t:t.url;if(e.test(n)){for(var o=e.exec(n),i=o[2].split(","),r=i[i.length-1],s=0,u=i.length;s<u;s++){var a=i[s];if(F[a]){r=a;break}}var c=n.replace(o[1],r);return"string"!=typeof t&&(t.extension=r,t.url=c),c}return n}var I=function(){function e(){}return e.add=function(){e.legacy=p().useLegacy},Object.defineProperty(e,"legacy",{set:function(e){var n=j;e?n.forEach(function(e){t.LoaderResource.setExtensionXhrType(e,t.LoaderResource.XHR_RESPONSE_TYPE.DEFAULT),t.LoaderResource.setExtensionLoadType(e,t.LoaderResource.LOAD_TYPE.AUDIO)}):n.forEach(function(e){t.LoaderResource.setExtensionXhrType(e,t.LoaderResource.XHR_RESPONSE_TYPE.BUFFER),t.LoaderResource.setExtensionLoadType(e,t.LoaderResource.LOAD_TYPE.XHR)})},enumerable:!0,configurable:!0}),e.pre=function(t,e){S(t),e()},e.use=function(t,e){t.data&&j.indexOf(t.extension)>-1?t.sound=p().add(t.name,{loaded:e,preload:!0,url:t.url,source:t.data}):e()},e}(),k=function(){function t(t,e){this.parent=t,Object.assign(this,e),this.duration=this.end-this.start}return t.prototype.play=function(t){return this.parent.play({complete:t,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})},t.prototype.destroy=function(){this.parent=null},t}(),M=function(){function t(t,e){this.media=t,this.options=e,this._instances=[],this._sprites={},this.media.init(this);var n=e.complete;this._autoPlayOptions=n?{complete:n}:null,this.isLoaded=!1,this.isPlaying=!1,this.autoPlay=e.autoPlay,this.singleInstance=e.singleInstance,this.preload=e.preload||this.autoPlay,this.url=e.url,this.speed=e.speed,this.volume=e.volume,this.loop=e.loop,e.sprites&&this.addSprites(e.sprites),this.preload&&this._preload(e.loaded)}return t.from=function(e){var n={};return"string"==typeof e?n.url=e:e instanceof ArrayBuffer||e instanceof HTMLAudioElement?n.source=e:n=e,(n=c({autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1},n)).url&&(n.url=S(n.url)),Object.freeze(n),new t(p().useLegacy?new P:new _,n)},Object.defineProperty(t.prototype,"context",{get:function(){return p().context},enumerable:!0,configurable:!0}),t.prototype.pause=function(){return this.isPlaying=!1,this.paused=!0,this},t.prototype.resume=function(){return this.isPlaying=this._instances.length>0,this.paused=!1,this},Object.defineProperty(t.prototype,"paused",{get:function(){return this._paused},set:function(t){this._paused=t,this.refreshPaused()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=t,this.refresh()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filters",{get:function(){return this.media.filters},set:function(t){this.media.filters=t},enumerable:!0,configurable:!0}),t.prototype.addSprites=function(t,e){if("object"==typeof t){var n={};for(var o in t)n[o]=this.addSprites(o,t[o]);return n}if("string"==typeof t){var i=new k(this,e);return this._sprites[t]=i,i}},t.prototype.destroy=function(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null},t.prototype.removeSprites=function(t){if(t){var e=this._sprites[t];void 0!==e&&(e.destroy(),delete this._sprites[t])}else for(var n in this._sprites)this.removeSprites(n);return this},Object.defineProperty(t.prototype,"isPlayable",{get:function(){return this.isLoaded&&this.media&&this.media.isPlayable},enumerable:!0,configurable:!0}),t.prototype.stop=function(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(var t=this._instances.length-1;t>=0;t--)this._instances[t].stop();return this},t.prototype.play=function(t,e){var n,o=this;"string"==typeof t?n={sprite:r=t,loop:this.loop,complete:e}:"function"==typeof t?(n={}).complete=t:n=t;if((n=c({complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1},n||{})).sprite){var i=n.sprite,r=this._sprites[i];n.start=r.start,n.end=r.end,n.speed=r.speed||1,n.loop=r.loop||n.loop,delete n.sprite}if(n.offset&&(n.start=n.offset),!this.isLoaded)return new Promise(function(t,e){o.autoPlay=!0,o._autoPlayOptions=n,o._preload(function(o,i,r){o?e(o):(n.loaded&&n.loaded(o,i,r),t(r))})});this.singleInstance&&this._removeInstances();var s=this._createInstance();return this._instances.push(s),this.isPlaying=!0,s.once("end",function(){n.complete&&n.complete(o),o._onComplete(s)}),s.once("stop",function(){o._onComplete(s)}),s.play(n),s},t.prototype.refresh=function(){for(var t=this._instances.length,e=0;e<t;e++)this._instances[e].refresh()},t.prototype.refreshPaused=function(){for(var t=this._instances.length,e=0;e<t;e++)this._instances[e].refreshPaused()},Object.defineProperty(t.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=t,this.refresh()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"muted",{get:function(){return this._muted},set:function(t){this._muted=t,this.refresh()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this.refresh()},enumerable:!0,configurable:!0}),t.prototype._preload=function(t){this.media.load(t)},Object.defineProperty(t.prototype,"instances",{get:function(){return this._instances},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sprites",{get:function(){return this._sprites},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this.media.duration},enumerable:!0,configurable:!0}),t.prototype.autoPlayStart=function(){var t;return this.autoPlay&&(t=this.play(this._autoPlayOptions)),t},t.prototype._removeInstances=function(){for(var t=this._instances.length-1;t>=0;t--)this._poolInstance(this._instances[t]);this._instances.length=0},t.prototype._onComplete=function(t){if(this._instances){var e=this._instances.indexOf(t);e>-1&&this._instances.splice(e,1),this.isPlaying=this._instances.length>0}this._poolInstance(t)},t.prototype._createInstance=function(){if(t._pool.length>0){var e=t._pool.pop();return e.init(this.media),e}return this.media.create()},t.prototype._poolInstance=function(e){e.destroy(),t._pool.indexOf(e)<0&&t._pool.push(e)},t._pool=[],t}(),T=function(){function t(){this.init()}return t.prototype.init=function(){return this.supported&&(this._webAudioContext=new y),this._htmlAudioContext=new x,this._sounds={},this.useLegacy=!this.supported,this},Object.defineProperty(t.prototype,"context",{get:function(){return this._context},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filtersAll",{get:function(){return this.useLegacy?[]:this._context.filters},set:function(t){this.useLegacy||(this._context.filters=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"supported",{get:function(){return null!==y.AudioContext},enumerable:!0,configurable:!0}),t.prototype.add=function(t,e){if("object"==typeof t){var n={};for(var o in t){var i=this._getOptions(t[o],e);n[o]=this.add(o,i)}return n}if("string"==typeof t){if(e instanceof M)return this._sounds[t]=e,e;i=this._getOptions(e);var r=M.from(i);return this._sounds[t]=r,r}},t.prototype._getOptions=function(t,e){var n;return n="string"==typeof t?{url:t}:t instanceof ArrayBuffer||t instanceof HTMLAudioElement?{source:t}:t,n=c({},n,e||{})},Object.defineProperty(t.prototype,"useLegacy",{get:function(){return this._useLegacy},set:function(t){I.legacy=t,this._useLegacy=t,this._context=!t&&this.supported?this._webAudioContext:this._htmlAudioContext},enumerable:!0,configurable:!0}),t.prototype.remove=function(t){return this.exists(t,!0),this._sounds[t].destroy(),delete this._sounds[t],this},Object.defineProperty(t.prototype,"volumeAll",{get:function(){return this._context.volume},set:function(t){this._context.volume=t,this._context.refresh()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"speedAll",{get:function(){return this._context.speed},set:function(t){this._context.speed=t,this._context.refresh()},enumerable:!0,configurable:!0}),t.prototype.togglePauseAll=function(){return this._context.togglePause()},t.prototype.pauseAll=function(){return this._context.paused=!0,this._context.refreshPaused(),this},t.prototype.resumeAll=function(){return this._context.paused=!1,this._context.refreshPaused(),this},t.prototype.toggleMuteAll=function(){return this._context.toggleMute()},t.prototype.muteAll=function(){return this._context.muted=!0,this._context.refresh(),this},t.prototype.unmuteAll=function(){return this._context.muted=!1,this._context.refresh(),this},t.prototype.removeAll=function(){for(var t in this._sounds)this._sounds[t].destroy(),delete this._sounds[t];return this},t.prototype.stopAll=function(){for(var t in this._sounds)this._sounds[t].stop();return this},t.prototype.exists=function(t,e){return void 0===e&&(e=!1),!!this._sounds[t]},t.prototype.find=function(t){return this.exists(t,!0),this._sounds[t]},t.prototype.play=function(t,e){return this.find(t).play(e)},t.prototype.stop=function(t){return this.find(t).stop()},t.prototype.pause=function(t){return this.find(t).pause()},t.prototype.resume=function(t){return this.find(t).resume()},t.prototype.volume=function(t,e){var n=this.find(t);return void 0!==e&&(n.volume=e),n.volume},t.prototype.speed=function(t,e){var n=this.find(t);return void 0!==e&&(n.speed=e),n.speed},t.prototype.duration=function(t){return this.find(t).duration},t.prototype.close=function(){return this.removeAll(),this._sounds=null,this._webAudioContext&&(this._webAudioContext.destroy(),this._webAudioContext=null),this._htmlAudioContext&&(this._htmlAudioContext.destroy(),this._htmlAudioContext=null),this._context=null,this},t}(),R=0;var G={get PLAY_ID(){return R},playOnce:function(t,e){var n="alias"+R++;return p().add(n,{url:t,preload:!0,autoPlay:!0,loaded:function(t){t&&(p().remove(n),e&&e(t))},complete:function(){p().remove(n),e&&e(null)}}),n},render:function(t,e){var n=document.createElement("canvas");e=c({width:512,height:128,fill:"black"},e||{}),n.width=e.width,n.height=e.height;var i=o.BaseTexture.from(n);if(!(t.media instanceof _))return i;var r=t.media,s=n.getContext("2d");s.fillStyle=e.fill;for(var u=r.buffer.getChannelData(0),a=Math.ceil(u.length/e.width),p=e.height/2,h=0;h<e.width;h++){for(var l=1,f=-1,d=0;d<a;d++){var y=u[h*a+d];y<l&&(l=y),y>f&&(f=y)}s.fillRect(h,(1+l)*p,1,Math.max(1,(f-l)*p))}return i},resolveUrl:S,sineTone:function(t,e){void 0===t&&(t=200),void 0===e&&(e=1);var n=M.from({singleInstance:!0});if(!(n.media instanceof _))return n;for(var o=n.media,i=n.context.audioContext.createBuffer(1,48e3*e,48e3),r=i.getChannelData(0),s=0;s<r.length;s++){var u=t*(s/i.sampleRate)*Math.PI;r[s]=2*Math.sin(u)}return o.buffer=i,n.isLoaded=!0,n},extensions:j,supported:F},K=function(t){return a=t,t}(new T);return t.Loader.registerPlugin(I),Object.defineProperties(K,{Filterable:{get:function(){return i}},filters:{get:function(){return g}},htmlaudio:{get:function(){return O}},Sound:{get:function(){return M}},SoundLibrary:{get:function(){return T}},SoundSprite:{get:function(){return k}},utils:{get:function(){return G}},webaudio:{get:function(){return m}},sound:{get:function(){return K}}}),K}(PIXI,PIXI,PIXI.utils,PIXI);

// pixi-keyboard (https://github.com/Nazariglez/pixi-keyboard)
var keyboard=function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=PIXI},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),o=function(){function e(e,t){this.key=e,this.manager=t,this.isPressed=!1,this.isDown=!1,this.isReleased=!1,this.ctrl=!1,this.shift=!1,this.alt=!1}return e.prototype.update=function(){this.isDown=this.manager.isDown(this.key),this.isPressed=this.manager.isPressed(this.key),this.isReleased=this.manager.isReleased(this.key),this.ctrl=this.manager.isDown(s.default.CTRL),this.shift=this.manager.isDown(s.default.SHIFT),this.alt=this.manager.isDown(s.default.ALT)},e.prototype.remove=function(){this.manager.removeHotKey(this.key)},e}();t.default=o},function(e,t,n){"use strict";var s;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.BACKSPACE=8]="BACKSPACE",e[e.TAB=9]="TAB",e[e.ENTER=13]="ENTER",e[e.SHIFT=16]="SHIFT",e[e.PAUSE=19]="PAUSE",e[e.CTRL=17]="CTRL",e[e.ALT=18]="ALT",e[e.CAPS_LOCK=20]="CAPS_LOCK",e[e.ESCAPE=27]="ESCAPE",e[e.SPACE=32]="SPACE",e[e.PAGE_UP=33]="PAGE_UP",e[e.PAGE_DOWN=34]="PAGE_DOWN",e[e.END=35]="END",e[e.HOME=36]="HOME",e[e.LEFT=37]="LEFT",e[e.UP=38]="UP",e[e.RIGHT=39]="RIGHT",e[e.DOWN=40]="DOWN",e[e.PRINT_SCREEN=44]="PRINT_SCREEN",e[e.INSERT=45]="INSERT",e[e.DELETE=46]="DELETE",e[e._0=48]="_0",e[e._1=49]="_1",e[e._2=50]="_2",e[e._3=51]="_3",e[e._4=52]="_4",e[e._5=53]="_5",e[e._6=54]="_6",e[e._7=55]="_7",e[e._8=56]="_8",e[e._9=57]="_9",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.CMD=91]="CMD",e[e.CMD_RIGHT=93]="CMD_RIGHT",e[e.NUM_0=96]="NUM_0",e[e.NUM_1=97]="NUM_1",e[e.NUM_2=98]="NUM_2",e[e.NUM_3=99]="NUM_3",e[e.NUM_4=100]="NUM_4",e[e.NUM_5=101]="NUM_5",e[e.NUM_6=102]="NUM_6",e[e.NUM_7=103]="NUM_7",e[e.NUM_8=104]="NUM_8",e[e.NUM_9=105]="NUM_9",e[e.MULTIPLY=106]="MULTIPLY",e[e.ADD=107]="ADD",e[e.SUBTRACT=109]="SUBTRACT",e[e.DECIMAL_POINT=110]="DECIMAL_POINT",e[e.DIVIDE=111]="DIVIDE",e[e.F1=112]="F1",e[e.F2=113]="F2",e[e.F3=114]="F3",e[e.F4=115]="F4",e[e.F5=116]="F5",e[e.F6=117]="F6",e[e.F7=118]="F7",e[e.F8=119]="F8",e[e.F9=120]="F9",e[e.F10=121]="F10",e[e.F11=122]="F11",e[e.F12=123]="F12",e[e.NUM_LOCK=144]="NUM_LOCK",e[e.SCROLL_LOCK=145]="SCROLL_LOCK",e[e.SEMI_COLON=186]="SEMI_COLON",e[e.EQUAL=187]="EQUAL",e[e.COMMA=188]="COMMA",e[e.DASH=189]="DASH",e[e.PERIOD=190]="PERIOD",e[e.FORWARD_SLASH=191]="FORWARD_SLASH",e[e.OPEN_BRACKET=219]="OPEN_BRACKET",e[e.BACK_SLASH=220]="BACK_SLASH",e[e.CLOSE_BRACKET=221]="CLOSE_BRACKET",e[e.SINGLE_QUOTE=222]="SINGLE_QUOTE"}(s||(s={})),t.default=s},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),o=n(5),r=n(1),i=n(2),a={KeyboardManager:o.default,Key:i.default,HotKey:r.default},u=s;if(!u.keyboard){var _=new o.default;_.enable(),u.keyboard=a,u.keyboardManager=_}t.default=a},function(e,t,n){"use strict";var s,o=this&&this.__extends||(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(1),a=function(e){function t(){var t=e.call(this)||this;return t.isEnabled=!1,t.pressedKeys=[],t.releasedKeys=[],t.downKeys={},t.hotKeys=[],t.preventDefaultKeys=[],t}return o(t,e),t.prototype.enable=function(){this.isEnabled||(this.isEnabled=!0,this._enableEvents())},t.prototype._enableEvents=function(){window.addEventListener("keydown",this._onKeyDown.bind(this),!0),window.addEventListener("keyup",this._onKeyUp.bind(this),!0)},t.prototype.disable=function(){this.isEnabled&&(this.isEnabled=!1,this._disableEvents())},t.prototype._disableEvents=function(){window.removeEventListener("keydown",this._onKeyDown,!0),window.removeEventListener("keyup",this._onKeyUp,!0)},t.prototype.setPreventDefault=function(e,t){if(void 0===t&&(t=!0),s=e,"[object Array]"===Object.prototype.toString.call(s))for(var n=0;n<e.length;n++)this.preventDefaultKeys[e[n]]=t;else this.preventDefaultKeys[e]=t;var s},t.prototype._onKeyDown=function(e){var t=e.which||e.keyCode;this.preventDefaultKeys[t]&&e.preventDefault(),this.isDown(t)||(this.downKeys[t]=0,this.pressedKeys[t]=!0,this.emit("pressed",t))},t.prototype._onKeyUp=function(e){var t=e.which||e.keyCode;this.preventDefaultKeys[t]&&e.preventDefault(),this.isDown(t)&&(this.pressedKeys[t]=!1,this.releasedKeys[t]=!0,delete this.downKeys[t],this.emit("released",t))},t.prototype.downTime=function(e){return this.downKeys[e]||0},t.prototype.isDown=function(e){return this.downKeys.hasOwnProperty(e)},t.prototype.isPressed=function(e){return!!this.pressedKeys[e]},t.prototype.isReleased=function(e){return!!this.releasedKeys[e]},t.prototype.update=function(e){for(var t in void 0===e&&(e=0),this.hotKeys.forEach((function(e){return e.update()})),this.downKeys)this.downKeys.hasOwnProperty(t)&&(this.downKeys[t]+=e,this.emit("down",t));this.pressedKeys.length=0,this.releasedKeys.length=0},t.prototype.getHotKey=function(e){var t=this.hotKeys[e]||new i.default(e,this);return this.hotKeys[e]=t,t},t.prototype.removeHotKey=function(e){this.hotKeys[e]&&delete this.hotKeys[e]},t}(r.utils.EventEmitter);t.default=a}]);

// current-device v0.10.2 MIT Licensed - https://github.com/matthewhudson/current-device
!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.device=e():n.device=e()}(window,function(){return function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=0)}([function(n,e,o){n.exports=o(1)},function(n,e,o){"use strict";o.r(e);var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r=window.device,i={},a=[];window.device=i;var c=window.document.documentElement,d=window.navigator.userAgent.toLowerCase(),u=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];function l(n,e){return-1!==n.indexOf(e)}function s(n){return l(d,n)}function f(n){return c.className.match(new RegExp(n,"i"))}function b(n){var e=null;f(n)||(e=c.className.replace(/^\s+|\s+$/g,""),c.className=e+" "+n)}function p(n){f(n)&&(c.className=c.className.replace(" "+n,""))}function w(){i.landscape()?(p("portrait"),b("landscape"),y("landscape")):(p("landscape"),b("portrait"),y("portrait")),v()}function y(n){for(var e=0;e<a.length;e++)a[e](n)}i.macos=function(){return s("mac")},i.ios=function(){return i.iphone()||i.ipod()||i.ipad()},i.iphone=function(){return!i.windows()&&s("iphone")},i.ipod=function(){return s("ipod")},i.ipad=function(){var n="MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;return s("ipad")||n},i.android=function(){return!i.windows()&&s("android")},i.androidPhone=function(){return i.android()&&s("mobile")},i.androidTablet=function(){return i.android()&&!s("mobile")},i.blackberry=function(){return s("blackberry")||s("bb10")},i.blackberryPhone=function(){return i.blackberry()&&!s("tablet")},i.blackberryTablet=function(){return i.blackberry()&&s("tablet")},i.windows=function(){return s("windows")},i.windowsPhone=function(){return i.windows()&&s("phone")},i.windowsTablet=function(){return i.windows()&&s("touch")&&!i.windowsPhone()},i.fxos=function(){return(s("(mobile")||s("(tablet"))&&s(" rv:")},i.fxosPhone=function(){return i.fxos()&&s("mobile")},i.fxosTablet=function(){return i.fxos()&&s("tablet")},i.meego=function(){return s("meego")},i.cordova=function(){return window.cordova&&"file:"===location.protocol},i.nodeWebkit=function(){return"object"===t(window.process)},i.mobile=function(){return i.androidPhone()||i.iphone()||i.ipod()||i.windowsPhone()||i.blackberryPhone()||i.fxosPhone()||i.meego()},i.tablet=function(){return i.ipad()||i.androidTablet()||i.blackberryTablet()||i.windowsTablet()||i.fxosTablet()},i.desktop=function(){return!i.tablet()&&!i.mobile()},i.television=function(){for(var n=0;n<u.length;){if(s(u[n]))return!0;n++}return!1},i.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?l(screen.orientation.type,"portrait"):i.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?90!==Math.abs(window.orientation):window.innerHeight/window.innerWidth>1},i.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?l(screen.orientation.type,"landscape"):i.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?90===Math.abs(window.orientation):window.innerHeight/window.innerWidth<1},i.noConflict=function(){return window.device=r,this},i.ios()?i.ipad()?b("ios ipad tablet"):i.iphone()?b("ios iphone mobile"):i.ipod()&&b("ios ipod mobile"):i.macos()?b("macos desktop"):i.android()?i.androidTablet()?b("android tablet"):b("android mobile"):i.blackberry()?i.blackberryTablet()?b("blackberry tablet"):b("blackberry mobile"):i.windows()?i.windowsTablet()?b("windows tablet"):i.windowsPhone()?b("windows mobile"):b("windows desktop"):i.fxos()?i.fxosTablet()?b("fxos tablet"):b("fxos mobile"):i.meego()?b("meego mobile"):i.nodeWebkit()?b("node-webkit"):i.television()?b("television"):i.desktop()&&b("desktop"),i.cordova()&&b("cordova"),i.onChangeOrientation=function(n){"function"==typeof n&&a.push(n)};var m="resize";function h(n){for(var e=0;e<n.length;e++)if(i[n[e]]())return n[e];return"unknown"}function v(){i.orientation=h(["portrait","landscape"])}Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(m="orientationchange"),window.addEventListener?window.addEventListener(m,w,!1):window.attachEvent?window.attachEvent(m,w):window[m]=w,w(),i.type=h(["mobile","tablet","desktop"]),i.os=h(["ios","iphone","ipad","ipod","android","blackberry","macos","windows","fxos","meego","television"]),v(),e.default=i}]).default});

// LZString variant with unsafe characters removed, see https://github.com/pieroxy/lz-string/issues/126
LZString=function(){"use strict";var r=String.fromCharCode,n=null,t=0,u=0;function e(r,e){for(var f=0;e>>=1;f++)t=r>>f&1|t<<1,15==++u&&(u=0,n.push(o(t)),t=0)}function o(n){return r(n+(n>55225?8518:n>8163?70:n>91?68:n>9?35:n>5?34:n>1?33:32))}function f(r){return r-(r>63743?8518:r>8233?70:r>159?68:r>44?35:r>39?34:r>34?33:32)|0}function c(r){return{v:r,d:{}}}return{compress:function(r){return null==r?"":function(r){n=[],t=0,u=0;var f,h=0,l=0,i={},a=!0,d=0,s=c(3),A=3,C=4;if(r.length){for(e(l=(d=r.charCodeAt(0))<256?0:1,C),e(d,l?65536:256),i[d]=s,h=1;h<r.length;h++)d=r.charCodeAt(h),(f=s.d[d])?s=f:(a?a=!1:e(l=s.v,C),null==i[d]&&(++A>=C&&(C<<=1),e(l=d<256?0:1,C),e(d,l?65536:256),i[d]=c(A),a=!0),s.d[d]=c(++A),A>=C&&(C<<=1),s=i[d]);a?a=!1:e(s.v,C),null==i[d]&&(++A>=C&&(C<<=1),e(l=d<256?0:1,C),e(d,256<<l)),++A>=C&&(C<<=1)}return e(2,C),t<<=15-u,n.push(o(t)),n.push(" "),n.join("")}(r)},decompress:function(n){return null==n?"":""==n?null:function(n){for(var t=["","",""],u=4,e=4,o=3,c="",h=[],l=0,i=2,a=0,d="",s=f(n.charCodeAt(0)),A=15,C=1;a!=i;)l+=(s>>--A&1)<<a++,0==A&&(A=15,s=f(n.charCodeAt(C++)));if(2==l)return"";for(i=8*l+8,l=a=0;a!=i;)l+=(s>>--A&1)<<a++,0==A&&(A=15,s=f(n.charCodeAt(C++)));for(d=r(l),t[3]=d,h.push(d);C<=n.length;){for(i=o,l=a=0;a!=i;)l+=(s>>--A&1)<<a++,0==A&&(A=15,s=f(n.charCodeAt(C++)));if(l<2){for(i=8+8*l,l=a=0;a!=i;)l+=(s>>--A&1)<<a++,0==A&&(A=15,s=f(n.charCodeAt(C++)));t[e]=r(l),l=e++,0==--u&&(u=1<<o++)}else if(2==l)return h.join("");if(l>t.length)return null;c=l<t.length?t[l]:d+d.charAt(0),h.push(c),t[e++]=d+c.charAt(0),d=c,0==--u&&(u=1<<o++)}return""}(n)}}}();

// PreloadJS * Visit http://createjs.com/ for documentation, updates and examples. * Copyright (c) 2011-2015 gskinner.com, inc. * Distributed under the terms of the MIT license. * http://www.opensource.org/licenses/mit-license.html * This notice shall be included in all copies or substantial portions of the Software.
this.createjs=this.createjs||{},function(){"use strict";var a=createjs.PreloadJS=createjs.PreloadJS||{};a.version="1.0.0",a.buildDate="Thu, 14 Sep 2017 19:47:47 GMT"}(),this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.deprecate=function(a,b){"use strict";return function(){var c="Deprecated property or method '"+b+"'. See docs for info.";return console&&(console.warn?console.warn(c):console.log(c)),a&&a.apply(this,arguments)}},this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";function Event(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var a=Event.prototype;a.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},a.stopPropagation=function(){this.propagationStopped=!0},a.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},a.remove=function(){this.removed=!0},a.clone=function(){return new Event(this.type,this.bubbles,this.cancelable)},a.set=function(a){for(var b in a)this[b]=a[b];return this},a.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=Event}(),this.createjs=this.createjs||{},function(){"use strict";function ErrorEvent(a,b,c){this.Event_constructor("error"),this.title=a,this.message=b,this.data=c}var a=createjs.extend(ErrorEvent,createjs.Event);a.clone=function(){return new createjs.ErrorEvent(this.title,this.message,this.data)},createjs.ErrorEvent=createjs.promote(ErrorEvent,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function EventDispatcher(){this._listeners=null,this._captureListeners=null}var a=EventDispatcher.prototype;EventDispatcher.initialize=function(b){b.addEventListener=a.addEventListener,b.on=a.on,b.removeEventListener=b.off=a.removeEventListener,b.removeAllEventListeners=a.removeAllEventListeners,b.hasEventListener=a.hasEventListener,b.dispatchEvent=a.dispatchEvent,b._dispatchEvent=a._dispatchEvent,b.willTrigger=a.willTrigger},a.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},a.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},a.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},a.off=a.removeEventListener,a.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},a.dispatchEvent=function(a,b,c){if("string"==typeof a){var d=this._listeners;if(!(b||d&&d[a]))return!0;a=new createjs.Event(a,b,c)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(e){}if(a.bubbles&&this.parent){for(var f=this,g=[f];f.parent;)g.push(f=f.parent);var h,i=g.length;for(h=i-1;h>=0&&!a.propagationStopped;h--)g[h]._dispatchEvent(a,1+(0==h));for(h=1;i>h&&!a.propagationStopped;h++)g[h]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return!a.defaultPrevented},a.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},a.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},a.toString=function(){return"[EventDispatcher]"},a._dispatchEvent=function(a,b){var c,d,e=2>=b?this._captureListeners:this._listeners;if(a&&e&&(d=e[a.type])&&(c=d.length)){try{a.currentTarget=this}catch(f){}try{a.eventPhase=0|b}catch(f){}a.removed=!1,d=d.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=d[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}2===b&&this._dispatchEvent(a,2.1)},createjs.EventDispatcher=EventDispatcher}(),this.createjs=this.createjs||{},function(){"use strict";function ProgressEvent(a,b){this.Event_constructor("progress"),this.loaded=a,this.total=null==b?1:b,this.progress=0==b?0:this.loaded/this.total}var a=createjs.extend(ProgressEvent,createjs.Event);a.clone=function(){return new createjs.ProgressEvent(this.loaded,this.total)},createjs.ProgressEvent=createjs.promote(ProgressEvent,"Event")}(window),function(){function a(b,d){function f(a){if(f[a]!==q)return f[a];var b;if("bug-string-char-index"==a)b="a"!="a"[0];else if("json"==a)b=f("json-stringify")&&f("json-parse");else{var c,e='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==a){var i=d.stringify,k="function"==typeof i&&t;if(k){(c=function(){return 1}).toJSON=c;try{k="0"===i(0)&&"0"===i(new g)&&'""'==i(new h)&&i(s)===q&&i(q)===q&&i()===q&&"1"===i(c)&&"[1]"==i([c])&&"[null]"==i([q])&&"null"==i(null)&&"[null,null,null]"==i([q,s,null])&&i({a:[c,!0,!1,null,"\x00\b\n\f\r	"]})==e&&"1"===i(null,c)&&"[\n 1,\n 2\n]"==i([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==i(new j(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==i(new j(864e13))&&'"-000001-01-01T00:00:00.000Z"'==i(new j(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==i(new j(-1))}catch(l){k=!1}}b=k}if("json-parse"==a){var m=d.parse;if("function"==typeof m)try{if(0===m("0")&&!m(!1)){c=m(e);var n=5==c.a.length&&1===c.a[0];if(n){try{n=!m('"	"')}catch(l){}if(n)try{n=1!==m("01")}catch(l){}if(n)try{n=1!==m("1.")}catch(l){}}}}catch(l){n=!1}b=n}}return f[a]=!!b}b||(b=e.Object()),d||(d=e.Object());var g=b.Number||e.Number,h=b.String||e.String,i=b.Object||e.Object,j=b.Date||e.Date,k=b.SyntaxError||e.SyntaxError,l=b.TypeError||e.TypeError,m=b.Math||e.Math,n=b.JSON||e.JSON;"object"==typeof n&&n&&(d.stringify=n.stringify,d.parse=n.parse);var o,p,q,r=i.prototype,s=r.toString,t=new j(-0xc782b5b800cec);try{t=-109252==t.getUTCFullYear()&&0===t.getUTCMonth()&&1===t.getUTCDate()&&10==t.getUTCHours()&&37==t.getUTCMinutes()&&6==t.getUTCSeconds()&&708==t.getUTCMilliseconds()}catch(u){}if(!f("json")){var v="[object Function]",w="[object Date]",x="[object Number]",y="[object String]",z="[object Array]",A="[object Boolean]",B=f("bug-string-char-index");if(!t)var C=m.floor,D=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,b){return D[b]+365*(a-1970)+C((a-1969+(b=+(b>1)))/4)-C((a-1901+b)/100)+C((a-1601+b)/400)};if((o=r.hasOwnProperty)||(o=function(a){var b,c={};return(c.__proto__=null,c.__proto__={toString:1},c).toString!=s?o=function(a){var b=this.__proto__,c=a in(this.__proto__=null,this);return this.__proto__=b,c}:(b=c.constructor,o=function(a){var c=(this.constructor||b).prototype;return a in this&&!(a in c&&this[a]===c[a])}),c=null,o.call(this,a)}),p=function(a,b){var d,e,f,g=0;(d=function(){this.valueOf=0}).prototype.valueOf=0,e=new d;for(f in e)o.call(e,f)&&g++;return d=e=null,g?p=2==g?function(a,b){var c,d={},e=s.call(a)==v;for(c in a)e&&"prototype"==c||o.call(d,c)||!(d[c]=1)||!o.call(a,c)||b(c)}:function(a,b){var c,d,e=s.call(a)==v;for(c in a)e&&"prototype"==c||!o.call(a,c)||(d="constructor"===c)||b(c);(d||o.call(a,c="constructor"))&&b(c)}:(e=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],p=function(a,b){var d,f,g=s.call(a)==v,h=!g&&"function"!=typeof a.constructor&&c[typeof a.hasOwnProperty]&&a.hasOwnProperty||o;for(d in a)g&&"prototype"==d||!h.call(a,d)||b(d);for(f=e.length;d=e[--f];h.call(a,d)&&b(d));}),p(a,b)},!f("json-stringify")){var F={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},G="000000",H=function(a,b){return(G+(b||0)).slice(-a)},I="\\u00",J=function(a){for(var b='"',c=0,d=a.length,e=!B||d>10,f=e&&(B?a.split(""):a);d>c;c++){var g=a.charCodeAt(c);switch(g){case 8:case 9:case 10:case 12:case 13:case 34:case 92:b+=F[g];break;default:if(32>g){b+=I+H(2,g.toString(16));break}b+=e?f[c]:a.charAt(c)}}return b+'"'},K=function(a,b,c,d,e,f,g){var h,i,j,k,m,n,r,t,u,v,B,D,F,G,I,L;try{h=b[a]}catch(M){}if("object"==typeof h&&h)if(i=s.call(h),i!=w||o.call(h,"toJSON"))"function"==typeof h.toJSON&&(i!=x&&i!=y&&i!=z||o.call(h,"toJSON"))&&(h=h.toJSON(a));else if(h>-1/0&&1/0>h){if(E){for(m=C(h/864e5),j=C(m/365.2425)+1970-1;E(j+1,0)<=m;j++);for(k=C((m-E(j,0))/30.42);E(j,k+1)<=m;k++);m=1+m-E(j,k),n=(h%864e5+864e5)%864e5,r=C(n/36e5)%24,t=C(n/6e4)%60,u=C(n/1e3)%60,v=n%1e3}else j=h.getUTCFullYear(),k=h.getUTCMonth(),m=h.getUTCDate(),r=h.getUTCHours(),t=h.getUTCMinutes(),u=h.getUTCSeconds(),v=h.getUTCMilliseconds();h=(0>=j||j>=1e4?(0>j?"-":"+")+H(6,0>j?-j:j):H(4,j))+"-"+H(2,k+1)+"-"+H(2,m)+"T"+H(2,r)+":"+H(2,t)+":"+H(2,u)+"."+H(3,v)+"Z"}else h=null;if(c&&(h=c.call(b,a,h)),null===h)return"null";if(i=s.call(h),i==A)return""+h;if(i==x)return h>-1/0&&1/0>h?""+h:"null";if(i==y)return J(""+h);if("object"==typeof h){for(G=g.length;G--;)if(g[G]===h)throw l();if(g.push(h),B=[],I=f,f+=e,i==z){for(F=0,G=h.length;G>F;F++)D=K(F,h,c,d,e,f,g),B.push(D===q?"null":D);L=B.length?e?"[\n"+f+B.join(",\n"+f)+"\n"+I+"]":"["+B.join(",")+"]":"[]"}else p(d||h,function(a){var b=K(a,h,c,d,e,f,g);b!==q&&B.push(J(a)+":"+(e?" ":"")+b)}),L=B.length?e?"{\n"+f+B.join(",\n"+f)+"\n"+I+"}":"{"+B.join(",")+"}":"{}";return g.pop(),L}};d.stringify=function(a,b,d){var e,f,g,h;if(c[typeof b]&&b)if((h=s.call(b))==v)f=b;else if(h==z){g={};for(var i,j=0,k=b.length;k>j;i=b[j++],h=s.call(i),(h==y||h==x)&&(g[i]=1));}if(d)if((h=s.call(d))==x){if((d-=d%1)>0)for(e="",d>10&&(d=10);e.length<d;e+=" ");}else h==y&&(e=d.length<=10?d:d.slice(0,10));return K("",(i={},i[""]=a,i),f,g,e,"",[])}}if(!f("json-parse")){var L,M,N=h.fromCharCode,O={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},P=function(){throw L=M=null,k()},Q=function(){for(var a,b,c,d,e,f=M,g=f.length;g>L;)switch(e=f.charCodeAt(L)){case 9:case 10:case 13:case 32:L++;break;case 123:case 125:case 91:case 93:case 58:case 44:return a=B?f.charAt(L):f[L],L++,a;case 34:for(a="@",L++;g>L;)if(e=f.charCodeAt(L),32>e)P();else if(92==e)switch(e=f.charCodeAt(++L)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:a+=O[e],L++;break;case 117:for(b=++L,c=L+4;c>L;L++)e=f.charCodeAt(L),e>=48&&57>=e||e>=97&&102>=e||e>=65&&70>=e||P();a+=N("0x"+f.slice(b,L));break;default:P()}else{if(34==e)break;for(e=f.charCodeAt(L),b=L;e>=32&&92!=e&&34!=e;)e=f.charCodeAt(++L);a+=f.slice(b,L)}if(34==f.charCodeAt(L))return L++,a;P();default:if(b=L,45==e&&(d=!0,e=f.charCodeAt(++L)),e>=48&&57>=e){for(48==e&&(e=f.charCodeAt(L+1),e>=48&&57>=e)&&P(),d=!1;g>L&&(e=f.charCodeAt(L),e>=48&&57>=e);L++);if(46==f.charCodeAt(L)){for(c=++L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}if(e=f.charCodeAt(L),101==e||69==e){for(e=f.charCodeAt(++L),(43==e||45==e)&&L++,c=L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}return+f.slice(b,L)}if(d&&P(),"true"==f.slice(L,L+4))return L+=4,!0;if("false"==f.slice(L,L+5))return L+=5,!1;if("null"==f.slice(L,L+4))return L+=4,null;P()}return"$"},R=function(a){var b,c;if("$"==a&&P(),"string"==typeof a){if("@"==(B?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];a=Q(),"]"!=a;c||(c=!0))c&&(","==a?(a=Q(),"]"==a&&P()):P()),","==a&&P(),b.push(R(a));return b}if("{"==a){for(b={};a=Q(),"}"!=a;c||(c=!0))c&&(","==a?(a=Q(),"}"==a&&P()):P()),(","==a||"string"!=typeof a||"@"!=(B?a.charAt(0):a[0])||":"!=Q())&&P(),b[a.slice(1)]=R(Q());return b}P()}return a},S=function(a,b,c){var d=T(a,b,c);d===q?delete a[b]:a[b]=d},T=function(a,b,c){var d,e=a[b];if("object"==typeof e&&e)if(s.call(e)==z)for(d=e.length;d--;)S(e,d,c);else p(e,function(a){S(e,a,c)});return c.call(a,b,e)};d.parse=function(a,b){var c,d;return L=0,M=""+a,c=R(Q()),"$"!=Q()&&P(),L=M=null,b&&s.call(b)==v?T((d={},d[""]=c,d),"",b):c}}}return d.runInContext=a,d}var b="function"==typeof define&&define.amd,c={"function":!0,object:!0},d=c[typeof exports]&&exports&&!exports.nodeType&&exports,e=c[typeof window]&&window||this,f=d&&c[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!f||f.global!==f&&f.window!==f&&f.self!==f||(e=f),d&&!b)a(e,d);else{var g=e.JSON,h=e.JSON3,i=!1,j=a(e,e.JSON3={noConflict:function(){return i||(i=!0,e.JSON=g,e.JSON3=h,g=h=null),j}});e.JSON={parse:j.parse,stringify:j.stringify}}b&&define(function(){return j})}.call(this),function(){var a={};a.a=function(){return a.el("a")},a.svg=function(){return a.el("svg")},a.object=function(){return a.el("object")},a.image=function(){return a.el("image")},a.img=function(){return a.el("img")},a.style=function(){return a.el("style")},a.link=function(){return a.el("link")},a.script=function(){return a.el("script")},a.audio=function(){return a.el("audio")},a.video=function(){return a.el("video")},a.text=function(a){return document.createTextNode(a)},a.el=function(a){return document.createElement(a)},createjs.Elements=a}(),function(){var a={};a.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i,a.RELATIVE_PATT=/^[.\/]*?\//i,a.EXTENSION_PATT=/\/?[^\/]+\.(\w{1,5})$/i,a.parseURI=function(b){var c={absolute:!1,relative:!1,protocol:null,hostname:null,port:null,pathname:null,search:null,hash:null,host:null};if(null==b)return c;var d=createjs.Elements.a();d.href=b;for(var e in c)e in d&&(c[e]=d[e]);var f=b.indexOf("?");f>-1&&(b=b.substr(0,f));var g;return a.ABSOLUTE_PATT.test(b)?c.absolute=!0:a.RELATIVE_PATT.test(b)&&(c.relative=!0),(g=b.match(a.EXTENSION_PATT))&&(c.extension=g[1].toLowerCase()),c},a.formatQueryString=function(a,b){if(null==a)throw new Error("You must specify data.");var c=[];for(var d in a)c.push(d+"="+escape(a[d]));return b&&(c=c.concat(b)),c.join("&")},a.buildURI=function(a,b){if(null==b)return a;var c=[],d=a.indexOf("?");if(-1!=d){var e=a.slice(d+1);c=c.concat(e.split("&"))}return-1!=d?a.slice(0,d)+"?"+this.formatQueryString(b,c):a+"?"+this.formatQueryString(b,c)},a.isCrossDomain=function(a){var b=createjs.Elements.a();b.href=a.src;var c=createjs.Elements.a();c.href=location.href;var d=""!=b.hostname&&(b.port!=c.port||b.protocol!=c.protocol||b.hostname!=c.hostname);return d},a.isLocal=function(a){var b=createjs.Elements.a();return b.href=a.src,""==b.hostname&&"file:"==b.protocol},createjs.URLUtils=a}(),function(){var a={container:null};a.appendToHead=function(b){a.getHead().appendChild(b)},a.appendToBody=function(b){if(null==a.container){a.container=document.createElement("div"),a.container.id="preloadjs-container";var c=a.container.style;c.visibility="hidden",c.position="absolute",c.width=a.container.style.height="10px",c.overflow="hidden",c.transform=c.msTransform=c.webkitTransform=c.oTransform="translate(-10px, -10px)",a.getBody().appendChild(a.container)}a.container.appendChild(b)},a.getHead=function(){return document.head||document.getElementsByTagName("head")[0]},a.getBody=function(){return document.body||document.getElementsByTagName("body")[0]},a.removeChild=function(a){a.parent&&a.parent.removeChild(a)},a.isImageTag=function(a){return a instanceof HTMLImageElement},a.isAudioTag=function(a){return window.HTMLAudioElement?a instanceof HTMLAudioElement:!1},a.isVideoTag=function(a){return window.HTMLVideoElement?a instanceof HTMLVideoElement:!1},createjs.DomUtils=a}(),function(){var a={};a.parseXML=function(a){var b=null;try{if(window.DOMParser){var c=new DOMParser;b=c.parseFromString(a,"text/xml")}}catch(d){}if(!b)try{b=new ActiveXObject("Microsoft.XMLDOM"),b.async=!1,b.loadXML(a)}catch(d){b=null}return b},a.parseJSON=function(a){if(null==a)return null;try{return JSON.parse(a)}catch(b){throw b}},createjs.DataUtils=a}(),this.createjs=this.createjs||{},function(){var a={};a.BINARY="binary",a.CSS="css",a.FONT="font",a.FONTCSS="fontcss",a.IMAGE="image",a.JAVASCRIPT="javascript",a.JSON="json",a.JSONP="jsonp",a.MANIFEST="manifest",a.SOUND="sound",a.VIDEO="video",a.SPRITESHEET="spritesheet",a.SVG="svg",a.TEXT="text",a.XML="xml",createjs.Types=a}(),this.createjs=this.createjs||{},function(){var a={};a.POST="POST",a.GET="GET",createjs.Methods=a}(),this.createjs=this.createjs||{},function(){"use strict";function LoadItem(){this.src=null,this.type=null,this.id=null,this.maintainOrder=!1,this.callback=null,this.data=null,this.method=createjs.Methods.GET,this.values=null,this.headers=null,this.withCredentials=!1,this.mimeType=null,this.crossOrigin=null,this.loadTimeout=b.LOAD_TIMEOUT_DEFAULT}var a=LoadItem.prototype={},b=LoadItem;b.LOAD_TIMEOUT_DEFAULT=8e3,b.create=function(a){if("string"==typeof a){var c=new LoadItem;return c.src=a,c}if(a instanceof b)return a;if(a instanceof Object&&a.src)return null==a.loadTimeout&&(a.loadTimeout=b.LOAD_TIMEOUT_DEFAULT),a;throw new Error("Type not recognized.")},a.set=function(a){for(var b in a)this[b]=a[b];return this},createjs.LoadItem=b}(),function(){var a={};a.isBinary=function(a){switch(a){case createjs.Types.IMAGE:case createjs.Types.BINARY:return!0;default:return!1}},a.isText=function(a){switch(a){case createjs.Types.TEXT:case createjs.Types.JSON:case createjs.Types.MANIFEST:case createjs.Types.XML:case createjs.Types.CSS:case createjs.Types.SVG:case createjs.Types.JAVASCRIPT:case createjs.Types.SPRITESHEET:return!0;default:return!1}},a.getTypeByExtension=function(a){if(null==a)return createjs.Types.TEXT;switch(a.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.Types.IMAGE;case"ogg":case"mp3":case"webm":return createjs.Types.SOUND;case"mp4":case"webm":case"ts":return createjs.Types.VIDEO;case"json":return createjs.Types.JSON;case"xml":return createjs.Types.XML;case"css":return createjs.Types.CSS;case"js":return createjs.Types.JAVASCRIPT;case"jz":return createjs.Types.JAVASCRIPT;case"svg":return createjs.Types.SVG;default:return createjs.Types.TEXT}},createjs.RequestUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function AbstractLoader(a,b,c){this.EventDispatcher_constructor(),this.loaded=!1,this.canceled=!1,this.progress=0,this.type=c,this.resultFormatter=null,this._item=a?createjs.LoadItem.create(a):null,this._preferXHR=b,this._result=null,this._rawResult=null,this._loadedItems=null,this._tagSrcAttribute=null,this._tag=null}var a=createjs.extend(AbstractLoader,createjs.EventDispatcher),b=AbstractLoader;try{Object.defineProperties(b,{POST:{get:createjs.deprecate(function(){return createjs.Methods.POST},"AbstractLoader.POST")},GET:{get:createjs.deprecate(function(){return createjs.Methods.GET},"AbstractLoader.GET")},BINARY:{get:createjs.deprecate(function(){return createjs.Types.BINARY},"AbstractLoader.BINARY")},CSS:{get:createjs.deprecate(function(){return createjs.Types.CSS},"AbstractLoader.CSS")},FONT:{get:createjs.deprecate(function(){return createjs.Types.FONT},"AbstractLoader.FONT")},FONTCSS:{get:createjs.deprecate(function(){return createjs.Types.FONTCSS},"AbstractLoader.FONTCSS")},IMAGE:{get:createjs.deprecate(function(){return createjs.Types.IMAGE},"AbstractLoader.IMAGE")},JAVASCRIPT:{get:createjs.deprecate(function(){return createjs.Types.JAVASCRIPT},"AbstractLoader.JAVASCRIPT")},JSON:{get:createjs.deprecate(function(){return createjs.Types.JSON},"AbstractLoader.JSON")},JSONP:{get:createjs.deprecate(function(){return createjs.Types.JSONP},"AbstractLoader.JSONP")},MANIFEST:{get:createjs.deprecate(function(){return createjs.Types.MANIFEST},"AbstractLoader.MANIFEST")},SOUND:{get:createjs.deprecate(function(){return createjs.Types.SOUND},"AbstractLoader.SOUND")},VIDEO:{get:createjs.deprecate(function(){return createjs.Types.VIDEO},"AbstractLoader.VIDEO")},SPRITESHEET:{get:createjs.deprecate(function(){return createjs.Types.SPRITESHEET},"AbstractLoader.SPRITESHEET")},SVG:{get:createjs.deprecate(function(){return createjs.Types.SVG},"AbstractLoader.SVG")},TEXT:{get:createjs.deprecate(function(){return createjs.Types.TEXT},"AbstractLoader.TEXT")},XML:{get:createjs.deprecate(function(){return createjs.Types.XML},"AbstractLoader.XML")}})}catch(c){}a.getItem=function(){return this._item},a.getResult=function(a){return a?this._rawResult:this._result},a.getTag=function(){return this._tag},a.setTag=function(a){this._tag=a},a.load=function(){this._createRequest(),this._request.on("complete",this,this),this._request.on("progress",this,this),this._request.on("loadStart",this,this),this._request.on("abort",this,this),this._request.on("timeout",this,this),this._request.on("error",this,this);var a=new createjs.Event("initialize");a.loader=this._request,this.dispatchEvent(a),this._request.load()},a.cancel=function(){this.canceled=!0,this.destroy()},a.destroy=function(){this._request&&(this._request.removeAllEventListeners(),this._request.destroy()),this._request=null,this._item=null,this._rawResult=null,this._result=null,this._loadItems=null,this.removeAllEventListeners()},a.getLoadedItems=function(){return this._loadedItems},a._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.TagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},a._createTag=function(){return null},a._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},a._sendProgress=function(a){if(!this._isCanceled()){var b=null;"number"==typeof a?(this.progress=a,b=new createjs.ProgressEvent(this.progress)):(b=a,this.progress=a.loaded/a.total,b.progress=this.progress,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0)),this.hasEventListener("progress")&&this.dispatchEvent(b)}},a._sendComplete=function(){if(!this._isCanceled()){this.loaded=!0;var a=new createjs.Event("complete");a.rawResult=this._rawResult,null!=this._result&&(a.result=this._result),this.dispatchEvent(a)}},a._sendError=function(a){!this._isCanceled()&&this.hasEventListener("error")&&(null==a&&(a=new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),this.dispatchEvent(a))},a._isCanceled=function(){return null==window.createjs||this.canceled?!0:!1},a.resultFormatter=null,a.handleEvent=function(a){switch(a.type){case"complete":this._rawResult=a.target._response;var b=this.resultFormatter&&this.resultFormatter(this);b instanceof Function?b.call(this,createjs.proxy(this._resultFormatSuccess,this),createjs.proxy(this._resultFormatFailed,this)):(this._result=b||this._rawResult,this._sendComplete());break;case"progress":this._sendProgress(a);break;case"error":this._sendError(a);break;case"loadstart":this._sendLoadStart();break;case"abort":case"timeout":this._isCanceled()||this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_"+a.type.toUpperCase()+"_ERROR"))}},a._resultFormatSuccess=function(a){this._result=a,this._sendComplete()},a._resultFormatFailed=function(a){this._sendError(a)},a.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=createjs.promote(AbstractLoader,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function AbstractMediaLoader(a,b,c){this.AbstractLoader_constructor(a,b,c),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.on("initialize",this._updateXHR,this)}var a=createjs.extend(AbstractMediaLoader,createjs.AbstractLoader);a.load=function(){this._tag||(this._tag=this._createTag(this._item.src)),this._tag.preload="auto",this._tag.load(),this.AbstractLoader_load()},a._createTag=function(){},a._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.MediaTagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},a._updateXHR=function(a){a.loader.setResponseType&&a.loader.setResponseType("blob")},a._formatResult=function(a){if(this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._preferXHR){var b=window.URL||window.webkitURL,c=a.getResult(!0);a.getTag().src=b.createObjectURL(c)}return a.getTag()},createjs.AbstractMediaLoader=createjs.promote(AbstractMediaLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";var AbstractRequest=function(a){this._item=a},a=createjs.extend(AbstractRequest,createjs.EventDispatcher);a.load=function(){},a.destroy=function(){},a.cancel=function(){},createjs.AbstractRequest=createjs.promote(AbstractRequest,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function TagRequest(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this),this._addedToDOM=!1}var a=createjs.extend(TagRequest,createjs.AbstractRequest);a.load=function(){this._tag.onload=createjs.proxy(this._handleTagComplete,this),this._tag.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this),this._tag.onerror=createjs.proxy(this._handleError,this);var a=new createjs.Event("initialize");a.loader=this._tag,this.dispatchEvent(a),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag[this._tagSrcAttribute]=this._item.src,null==this._tag.parentNode&&(createjs.DomUtils.appendToBody(this._tag),this._addedToDOM=!0)},a.destroy=function(){this._clean(),this._tag=null,this.AbstractRequest_destroy()},a._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},a._handleError=function(){this._clean(),this.dispatchEvent("error")},a._handleTagComplete=function(){this._rawResult=this._tag,this._result=this.resultFormatter&&this.resultFormatter(this)||this._rawResult,this._clean(),this.dispatchEvent("complete")},a._handleTimeout=function(){this._clean(),this.dispatchEvent(new createjs.Event("timeout"))},a._clean=function(){this._tag.onload=null,this._tag.onreadystatechange=null,this._tag.onerror=null,this._addedToDOM&&null!=this._tag.parentNode&&this._tag.parentNode.removeChild(this._tag),clearTimeout(this._loadTimeout)},a._handleStalled=function(){},createjs.TagRequest=createjs.promote(TagRequest,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function MediaTagRequest(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this)}var a=createjs.extend(MediaTagRequest,createjs.TagRequest);a.load=function(){var a=createjs.proxy(this._handleStalled,this);this._stalledCallback=a;var b=createjs.proxy(this._handleProgress,this);this._handleProgress=b,this._tag.addEventListener("stalled",a),this._tag.addEventListener("progress",b),this._tag.addEventListener&&this._tag.addEventListener("canplaythrough",this._loadedHandler,!1),this.TagRequest_load()},a._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},a._handleStalled=function(){},a._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},a._clean=function(){this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.removeEventListener("stalled",this._stalledCallback),this._tag.removeEventListener("progress",this._progressCallback),this.TagRequest__clean()},createjs.MediaTagRequest=createjs.promote(MediaTagRequest,"TagRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function XHRRequest(a){this.AbstractRequest_constructor(a),this._request=null,this._loadTimeout=null,this._xhrLevel=1,this._response=null,this._rawResponse=null,this._canceled=!1,this._handleLoadStartProxy=createjs.proxy(this._handleLoadStart,this),this._handleProgressProxy=createjs.proxy(this._handleProgress,this),this._handleAbortProxy=createjs.proxy(this._handleAbort,this),this._handleErrorProxy=createjs.proxy(this._handleError,this),this._handleTimeoutProxy=createjs.proxy(this._handleTimeout,this),this._handleLoadProxy=createjs.proxy(this._handleLoad,this),this._handleReadyStateChangeProxy=createjs.proxy(this._handleReadyStateChange,this),!this._createXHR(a)}var a=createjs.extend(XHRRequest,createjs.AbstractRequest);XHRRequest.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],a.getResult=function(a){return a&&this._rawResponse?this._rawResponse:this._response},a.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},a.load=function(){if(null==this._request)return void this._handleError();null!=this._request.addEventListener?(this._request.addEventListener("loadstart",this._handleLoadStartProxy,!1),this._request.addEventListener("progress",this._handleProgressProxy,!1),this._request.addEventListener("abort",this._handleAbortProxy,!1),this._request.addEventListener("error",this._handleErrorProxy,!1),this._request.addEventListener("timeout",this._handleTimeoutProxy,!1),this._request.addEventListener("load",this._handleLoadProxy,!1),this._request.addEventListener("readystatechange",this._handleReadyStateChangeProxy,!1)):(this._request.onloadstart=this._handleLoadStartProxy,this._request.onprogress=this._handleProgressProxy,this._request.onabort=this._handleAbortProxy,this._request.onerror=this._handleErrorProxy,this._request.ontimeout=this._handleTimeoutProxy,this._request.onload=this._handleLoadProxy,this._request.onreadystatechange=this._handleReadyStateChangeProxy),1==this._xhrLevel&&(this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout));try{this._item.values?this._request.send(createjs.URLUtils.formatQueryString(this._item.values)):this._request.send()}catch(a){this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,a))}},a.setResponseType=function(a){"blob"===a&&(a=window.URL?"blob":"arraybuffer",this._responseType=a),this._request.responseType=a},a.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},a.getResponseHeader=function(a){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(a):null},a._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},a._handleLoadStart=function(){clearTimeout(this._loadTimeout),this.dispatchEvent("loadstart")},a._handleAbort=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,a))},a._handleError=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent(a.message))},a._handleReadyStateChange=function(){4==this._request.readyState&&this._handleLoad()},a._handleLoad=function(){if(!this.loaded){this.loaded=!0;var a=this._checkError();if(a)return void this._handleError(a);if(this._response=this._getResponse(),"arraybuffer"===this._responseType)try{this._response=new Blob([this._response])}catch(b){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===b.name&&window.BlobBuilder){var c=new BlobBuilder;c.append(this._response),this._response=c.getBlob()}}this._clean(),this.dispatchEvent(new createjs.Event("complete"))}},a._handleTimeout=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,a))},a._checkError=function(){var a=parseInt(this._request.status);return a>=400&&599>=a?new Error(a):0==a&&/^https?:/.test(location.protocol)?new Error(0):null},a._getResponse=function(){if(null!=this._response)return this._response;
    if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(a){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(a){}return null},a._createXHR=function(a){var b=createjs.URLUtils.isCrossDomain(a),c={},d=null;if(window.XMLHttpRequest)d=new XMLHttpRequest,b&&void 0===d.withCredentials&&window.XDomainRequest&&(d=new XDomainRequest);else{for(var e=0,f=s.ACTIVEX_VERSIONS.length;f>e;e++){var g=s.ACTIVEX_VERSIONS[e];try{d=new ActiveXObject(g);break}catch(h){}}if(null==d)return!1}null==a.mimeType&&createjs.RequestUtils.isText(a.type)&&(a.mimeType="text/plain; charset=utf-8"),a.mimeType&&d.overrideMimeType&&d.overrideMimeType(a.mimeType),this._xhrLevel="string"==typeof d.responseType?2:1;var i=null;if(i=a.method==createjs.Methods.GET?createjs.URLUtils.buildURI(a.src,a.values):a.src,d.open(a.method||createjs.Methods.GET,i,!0),b&&d instanceof XMLHttpRequest&&1==this._xhrLevel&&(c.Origin=location.origin),a.values&&a.method==createjs.Methods.POST&&(c["Content-Type"]="application/x-www-form-urlencoded"),b||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest"),a.headers)for(var j in a.headers)c[j]=a.headers[j];for(j in c)d.setRequestHeader(j,c[j]);return d instanceof XMLHttpRequest&&void 0!==a.withCredentials&&(d.withCredentials=a.withCredentials),this._request=d,!0},a._clean=function(){clearTimeout(this._loadTimeout),null!=this._request.removeEventListener?(this._request.removeEventListener("loadstart",this._handleLoadStartProxy),this._request.removeEventListener("progress",this._handleProgressProxy),this._request.removeEventListener("abort",this._handleAbortProxy),this._request.removeEventListener("error",this._handleErrorProxy),this._request.removeEventListener("timeout",this._handleTimeoutProxy),this._request.removeEventListener("load",this._handleLoadProxy),this._request.removeEventListener("readystatechange",this._handleReadyStateChangeProxy)):(this._request.onloadstart=null,this._request.onprogress=null,this._request.onabort=null,this._request.onerror=null,this._request.ontimeout=null,this._request.onload=null,this._request.onreadystatechange=null)},a.toString=function(){return"[PreloadJS XHRRequest]"},createjs.XHRRequest=createjs.promote(XHRRequest,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function LoadQueue(a,b,c){this.AbstractLoader_constructor(),this._plugins=[],this._typeCallbacks={},this._extensionCallbacks={},this.next=null,this.maintainScriptOrder=!0,this.stopOnError=!1,this._maxConnections=1,this._availableLoaders=[createjs.FontLoader,createjs.ImageLoader,createjs.JavaScriptLoader,createjs.CSSLoader,createjs.JSONLoader,createjs.JSONPLoader,createjs.SoundLoader,createjs.ManifestLoader,createjs.SpriteSheetLoader,createjs.XMLLoader,createjs.SVGLoader,createjs.BinaryLoader,createjs.VideoLoader,createjs.TextLoader],this._defaultLoaderLength=this._availableLoaders.length,this.init(a,b,c)}var a=createjs.extend(LoadQueue,createjs.AbstractLoader),b=LoadQueue;try{Object.defineProperties(b,{POST:{get:createjs.deprecate(function(){return createjs.Methods.POST},"AbstractLoader.POST")},GET:{get:createjs.deprecate(function(){return createjs.Methods.GET},"AbstractLoader.GET")},BINARY:{get:createjs.deprecate(function(){return createjs.Types.BINARY},"AbstractLoader.BINARY")},CSS:{get:createjs.deprecate(function(){return createjs.Types.CSS},"AbstractLoader.CSS")},FONT:{get:createjs.deprecate(function(){return createjs.Types.FONT},"AbstractLoader.FONT")},FONTCSS:{get:createjs.deprecate(function(){return createjs.Types.FONTCSS},"AbstractLoader.FONTCSS")},IMAGE:{get:createjs.deprecate(function(){return createjs.Types.IMAGE},"AbstractLoader.IMAGE")},JAVASCRIPT:{get:createjs.deprecate(function(){return createjs.Types.JAVASCRIPT},"AbstractLoader.JAVASCRIPT")},JSON:{get:createjs.deprecate(function(){return createjs.Types.JSON},"AbstractLoader.JSON")},JSONP:{get:createjs.deprecate(function(){return createjs.Types.JSONP},"AbstractLoader.JSONP")},MANIFEST:{get:createjs.deprecate(function(){return createjs.Types.MANIFEST},"AbstractLoader.MANIFEST")},SOUND:{get:createjs.deprecate(function(){return createjs.Types.SOUND},"AbstractLoader.SOUND")},VIDEO:{get:createjs.deprecate(function(){return createjs.Types.VIDEO},"AbstractLoader.VIDEO")},SPRITESHEET:{get:createjs.deprecate(function(){return createjs.Types.SPRITESHEET},"AbstractLoader.SPRITESHEET")},SVG:{get:createjs.deprecate(function(){return createjs.Types.SVG},"AbstractLoader.SVG")},TEXT:{get:createjs.deprecate(function(){return createjs.Types.TEXT},"AbstractLoader.TEXT")},XML:{get:createjs.deprecate(function(){return createjs.Types.XML},"AbstractLoader.XML")}})}catch(c){}a.init=function(a,b,c){this.preferXHR=!0,this._preferXHR=!0,this.setPreferXHR(a),this._paused=!1,this._basePath=b,this._crossOrigin=c,this._loadStartWasDispatched=!1,this._currentlyLoadingScript=null,this._currentLoads=[],this._loadQueue=[],this._loadQueueBackup=[],this._loadItemsById={},this._loadItemsBySrc={},this._loadedResults={},this._loadedRawResults={},this._numItems=0,this._numItemsLoaded=0,this._scriptOrder=[],this._loadedScripts=[],this._lastProgress=0/0},a.registerLoader=function(a){if(!a||!a.canLoadItem)throw new Error("loader is of an incorrect type.");if(-1!=this._availableLoaders.indexOf(a))throw new Error("loader already exists.");this._availableLoaders.unshift(a)},a.unregisterLoader=function(a){var b=this._availableLoaders.indexOf(a);-1!=b&&b<this._defaultLoaderLength-1&&this._availableLoaders.splice(b,1)},a.setPreferXHR=function(a){return this.preferXHR=0!=a&&null!=window.XMLHttpRequest,this.preferXHR},a.removeAll=function(){this.remove()},a.remove=function(a){var b=null;if(a&&!Array.isArray(a))b=[a];else if(a)b=a;else if(arguments.length>0)return;var c=!1;if(b){for(;b.length;){var d=b.pop(),e=this.getResult(d);for(f=this._loadQueue.length-1;f>=0;f--)if(g=this._loadQueue[f].getItem(),g.id==d||g.src==d){this._loadQueue.splice(f,1)[0].cancel();break}for(f=this._loadQueueBackup.length-1;f>=0;f--)if(g=this._loadQueueBackup[f].getItem(),g.id==d||g.src==d){this._loadQueueBackup.splice(f,1)[0].cancel();break}if(e)this._disposeItem(this.getItem(d));else for(var f=this._currentLoads.length-1;f>=0;f--){var g=this._currentLoads[f].getItem();if(g.id==d||g.src==d){this._currentLoads.splice(f,1)[0].cancel(),c=!0;break}}}c&&this._loadNext()}else{this.close();for(var h in this._loadItemsById)this._disposeItem(this._loadItemsById[h]);this.init(this.preferXHR,this._basePath)}},a.reset=function(){this.close();for(var a in this._loadItemsById)this._disposeItem(this._loadItemsById[a]);for(var b=[],c=0,d=this._loadQueueBackup.length;d>c;c++)b.push(this._loadQueueBackup[c].getItem());this.loadManifest(b,!1)},a.installPlugin=function(a){if(null!=a&&null!=a.getPreloadHandlers){this._plugins.push(a);var b=a.getPreloadHandlers();if(b.scope=a,null!=b.types)for(var c=0,d=b.types.length;d>c;c++)this._typeCallbacks[b.types[c]]=b;if(null!=b.extensions)for(c=0,d=b.extensions.length;d>c;c++)this._extensionCallbacks[b.extensions[c]]=b}},a.setMaxConnections=function(a){this._maxConnections=a,!this._paused&&this._loadQueue.length>0&&this._loadNext()},a.loadFile=function(a,b,c){if(null==a){var d=new createjs.ErrorEvent("PRELOAD_NO_FILE");return void this._sendError(d)}this._addItem(a,null,c),this.setPaused(b!==!1?!1:!0)},a.loadManifest=function(a,c,d){var e=null,f=null;if(Array.isArray(a)){if(0==a.length){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");return void this._sendError(g)}e=a}else if("string"==typeof a)e=[{src:a,type:b.MANIFEST}];else{if("object"!=typeof a){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");return void this._sendError(g)}if(void 0!==a.src){if(null==a.type)a.type=b.MANIFEST;else if(a.type!=b.MANIFEST){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");this._sendError(g)}e=[a]}else void 0!==a.manifest&&(e=a.manifest,f=a.path)}for(var h=0,i=e.length;i>h;h++)this._addItem(e[h],f,d);this.setPaused(c!==!1?!1:!0)},a.load=function(){this.setPaused(!1)},a.getItem=function(a){return this._loadItemsById[a]||this._loadItemsBySrc[a]},a.getResult=function(a,b){var c=this._loadItemsById[a]||this._loadItemsBySrc[a];if(null==c)return null;var d=c.id;return b&&this._loadedRawResults[d]?this._loadedRawResults[d]:this._loadedResults[d]},a.getItems=function(a){var b=[];for(var c in this._loadItemsById){var d=this._loadItemsById[c],e=this.getResult(c);(a!==!0||null!=e)&&b.push({item:d,result:e,rawResult:this.getResult(c,!0)})}return b},a.setPaused=function(a){this._paused=a,this._paused||this._loadNext()},a.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0,this._loadedScripts.length=0,this.loadStartWasDispatched=!1,this._itemCount=0,this._lastProgress=0/0},a._addItem=function(a,b,c){var d=this._createLoadItem(a,b,c);if(null!=d){var e=this._createLoader(d);null!=e&&("plugins"in e&&(e.plugins=this._plugins),d._loader=e,this._loadQueue.push(e),this._loadQueueBackup.push(e),this._numItems++,this._updateProgress(),(this.maintainScriptOrder&&d.type==createjs.Types.JAVASCRIPT||d.maintainOrder===!0)&&(this._scriptOrder.push(d),this._loadedScripts.push(null)))}},a._createLoadItem=function(a,b,c){var d=createjs.LoadItem.create(a);if(null==d)return null;var e="",f=c||this._basePath;if(d.src instanceof Object){if(!d.type)return null;if(b){e=b;var g=createjs.URLUtils.parseURI(b);null==f||g.absolute||g.relative||(e=f+e)}else null!=f&&(e=f)}else{var h=createjs.URLUtils.parseURI(d.src);h.extension&&(d.ext=h.extension),null==d.type&&(d.type=createjs.RequestUtils.getTypeByExtension(d.ext));var i=d.src;if(!h.absolute&&!h.relative)if(b){e=b;var g=createjs.URLUtils.parseURI(b);i=b+i,null==f||g.absolute||g.relative||(e=f+e)}else null!=f&&(e=f);d.src=e+d.src}d.path=e,(void 0===d.id||null===d.id||""===d.id)&&(d.id=i);var j=this._typeCallbacks[d.type]||this._extensionCallbacks[d.ext];if(j){var k=j.callback.call(j.scope,d,this);if(k===!1)return null;k===!0||null!=k&&(d._loader=k),h=createjs.URLUtils.parseURI(d.src),null!=h.extension&&(d.ext=h.extension)}return this._loadItemsById[d.id]=d,this._loadItemsBySrc[d.src]=d,null==d.crossOrigin&&(d.crossOrigin=this._crossOrigin),d},a._createLoader=function(a){if(null!=a._loader)return a._loader;for(var b=this.preferXHR,c=0;c<this._availableLoaders.length;c++){var d=this._availableLoaders[c];if(d&&d.canLoadItem(a))return new d(a,b)}return null},a._loadNext=function(){if(!this._paused){this._loadStartWasDispatched||(this._sendLoadStart(),this._loadStartWasDispatched=!0),this._numItems==this._numItemsLoaded?(this.loaded=!0,this._sendComplete(),this.next&&this.next.load&&this.next.load()):this.loaded=!1;for(var a=0;a<this._loadQueue.length&&!(this._currentLoads.length>=this._maxConnections);a++){var b=this._loadQueue[a];this._canStartLoad(b)&&(this._loadQueue.splice(a,1),a--,this._loadItem(b))}}},a._loadItem=function(a){a.on("fileload",this._handleFileLoad,this),a.on("progress",this._handleProgress,this),a.on("complete",this._handleFileComplete,this),a.on("error",this._handleError,this),a.on("fileerror",this._handleFileError,this),this._currentLoads.push(a),this._sendFileStart(a.getItem()),a.load()},a._handleFileLoad=function(a){a.target=null,this.dispatchEvent(a)},a._handleFileError=function(a){var b=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,a.item);this._sendError(b)},a._handleError=function(a){var b=a.target;this._numItemsLoaded++,this._finishOrderedItem(b,!0),this._updateProgress();var c=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,b.getItem());this._sendError(c),this.stopOnError?this.setPaused(!0):(this._removeLoadItem(b),this._cleanLoadItem(b),this._loadNext())},a._handleFileComplete=function(a){var b=a.target,c=b.getItem(),d=b.getResult();this._loadedResults[c.id]=d;var e=b.getResult(!0);null!=e&&e!==d&&(this._loadedRawResults[c.id]=e),this._saveLoadedItems(b),this._removeLoadItem(b),this._finishOrderedItem(b)||this._processFinishedLoad(c,b),this._cleanLoadItem(b)},a._saveLoadedItems=function(a){var b=a.getLoadedItems();if(null!==b)for(var c=0;c<b.length;c++){var d=b[c].item;this._loadItemsBySrc[d.src]=d,this._loadItemsById[d.id]=d,this._loadedResults[d.id]=b[c].result,this._loadedRawResults[d.id]=b[c].rawResult}},a._finishOrderedItem=function(a,b){var c=a.getItem();if(this.maintainScriptOrder&&c.type==createjs.Types.JAVASCRIPT||c.maintainOrder){a instanceof createjs.JavaScriptLoader&&(this._currentlyLoadingScript=!1);var d=createjs.indexOf(this._scriptOrder,c);return-1==d?!1:(this._loadedScripts[d]=b===!0?!0:c,this._checkScriptLoadOrder(),!0)}return!1},a._checkScriptLoadOrder=function(){for(var a=this._loadedScripts.length,b=0;a>b;b++){var c=this._loadedScripts[b];if(null===c)break;if(c!==!0){var d=this._loadedResults[c.id];c.type==createjs.Types.JAVASCRIPT&&createjs.DomUtils.appendToHead(d);var e=c._loader;this._processFinishedLoad(c,e),this._loadedScripts[b]=!0}}},a._processFinishedLoad=function(a,b){if(this._numItemsLoaded++,!this.maintainScriptOrder&&a.type==createjs.Types.JAVASCRIPT){var c=b.getTag();createjs.DomUtils.appendToHead(c)}this._updateProgress(),this._sendFileComplete(a,b),this._loadNext()},a._canStartLoad=function(a){if(!this.maintainScriptOrder||a.preferXHR)return!0;var b=a.getItem();if(b.type!=createjs.Types.JAVASCRIPT)return!0;if(this._currentlyLoadingScript)return!1;for(var c=this._scriptOrder.indexOf(b),d=0;c>d;){var e=this._loadedScripts[d];if(null==e)return!1;d++}return this._currentlyLoadingScript=!0,!0},a._removeLoadItem=function(a){for(var b=this._currentLoads.length,c=0;b>c;c++)if(this._currentLoads[c]==a){this._currentLoads.splice(c,1);break}},a._cleanLoadItem=function(a){var b=a.getItem();b&&delete b._loader},a._handleProgress=function(a){var b=a.target;this._sendFileProgress(b.getItem(),b.progress),this._updateProgress()},a._updateProgress=function(){var a=this._numItemsLoaded/this._numItems,b=this._numItems-this._numItemsLoaded;if(b>0){for(var c=0,d=0,e=this._currentLoads.length;e>d;d++)c+=this._currentLoads[d].progress;a+=c/b*(b/this._numItems)}this._lastProgress!=a&&(this._sendProgress(a),this._lastProgress=a)},a._disposeItem=function(a){delete this._loadedResults[a.id],delete this._loadedRawResults[a.id],delete this._loadItemsById[a.id],delete this._loadItemsBySrc[a.src]},a._sendFileProgress=function(a,b){if(!this._isCanceled()&&!this._paused&&this.hasEventListener("fileprogress")){var c=new createjs.Event("fileprogress");c.progress=b,c.loaded=b,c.total=1,c.item=a,this.dispatchEvent(c)}},a._sendFileComplete=function(a,b){if(!this._isCanceled()&&!this._paused){var c=new createjs.Event("fileload");c.loader=b,c.item=a,c.result=this._loadedResults[a.id],c.rawResult=this._loadedRawResults[a.id],a.completeHandler&&a.completeHandler(c),this.hasEventListener("fileload")&&this.dispatchEvent(c)}},a._sendFileStart=function(a){var b=new createjs.Event("filestart");b.item=a,this.hasEventListener("filestart")&&this.dispatchEvent(b)},a.toString=function(){return"[PreloadJS LoadQueue]"},createjs.LoadQueue=createjs.promote(LoadQueue,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function TextLoader(a){this.AbstractLoader_constructor(a,!0,createjs.Types.TEXT)}var a=(createjs.extend(TextLoader,createjs.AbstractLoader),TextLoader);a.canLoadItem=function(a){return a.type==createjs.Types.TEXT},createjs.TextLoader=createjs.promote(TextLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function BinaryLoader(a){this.AbstractLoader_constructor(a,!0,createjs.Types.BINARY),this.on("initialize",this._updateXHR,this)}var a=createjs.extend(BinaryLoader,createjs.AbstractLoader),b=BinaryLoader;b.canLoadItem=function(a){return a.type==createjs.Types.BINARY},a._updateXHR=function(a){a.loader.setResponseType("arraybuffer")},createjs.BinaryLoader=createjs.promote(BinaryLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function CSSLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.Types.CSS),this.resultFormatter=this._formatResult,this._tagSrcAttribute="href",this._tag=b?createjs.Elements.style():createjs.Elements.link(),this._tag.rel="stylesheet",this._tag.type="text/css"}var a=createjs.extend(CSSLoader,createjs.AbstractLoader),b=CSSLoader;b.canLoadItem=function(a){return a.type==createjs.Types.CSS},a._formatResult=function(a){if(this._preferXHR){var b=a.getTag();if(b.styleSheet)b.styleSheet.cssText=a.getResult(!0);else{var c=createjs.Elements.text(a.getResult(!0));b.appendChild(c)}}else b=this._tag;return createjs.DomUtils.appendToHead(b),b},createjs.CSSLoader=createjs.promote(CSSLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function FontLoader(a,b){this.AbstractLoader_constructor(a,b,a.type),this._faces={},this._watched=[],this._count=0,this._watchInterval=null,this._loadTimeout=null,this._injectCSS=void 0===a.injectCSS?!0:a.injectCSS,this.dispatchEvent("initialize")}var a=createjs.extend(FontLoader,createjs.AbstractLoader);FontLoader.canLoadItem=function(a){return a.type==createjs.Types.FONT||a.type==createjs.Types.FONTCSS},FontLoader.sampleText="abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",FontLoader._ctx=document.createElement("canvas").getContext("2d"),FontLoader._referenceFonts=["serif","monospace"],FontLoader.WEIGHT_REGEX=/[- ._]*(thin|normal|book|regular|medium|black|heavy|[1-9]00|(?:extra|ultra|semi|demi)?[- ._]*(?:light|bold))[- ._]*/gi,FontLoader.STYLE_REGEX=/[- ._]*(italic|oblique)[- ._]*/gi,FontLoader.FONT_FORMAT={woff2:"woff2",woff:"woff",ttf:"truetype",otf:"truetype"},FontLoader.FONT_WEIGHT={thin:100,extralight:200,ultralight:200,light:300,semilight:300,demilight:300,book:"normal",regular:"normal",semibold:600,demibold:600,extrabold:800,ultrabold:800,black:900,heavy:900},FontLoader.WATCH_DURATION=10,a.load=function(){if(this.type==createjs.Types.FONTCSS){var a=this._watchCSS();if(!a)return void this.AbstractLoader_load()}else if(this._item.src instanceof Array)this._watchFontArray();else{var b=this._defFromSrc(this._item.src);this._watchFont(b),this._injectStyleTag(this._cssFromDef(b))}this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this.dispatchEvent("loadstart")},a._handleTimeout=function(){this._stopWatching(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT"))},a._createRequest=function(){return this._request},a.handleEvent=function(a){switch(a.type){case"complete":this._rawResult=a.target._response,this._result=!0,this._parseCSS(this._rawResult);break;case"error":this._stopWatching(),this.AbstractLoader_handleEvent(a)}},a._watchCSS=function(){var a=this._item.src;return a instanceof HTMLStyleElement&&(this._injectCSS&&!a.parentNode&&(document.head||document.getElementsByTagName("head")[0]).appendChild(a),this._injectCSS=!1,a="\n"+a.textContent),-1!==a.search(/\n|\r|@font-face/i)?(this._parseCSS(a),!0):(this._request=new createjs.XHRRequest(this._item),!1)},a._parseCSS=function(a){for(var b=/@font-face\s*\{([^}]+)}/g;;){var c=b.exec(a);if(!c)break;this._watchFont(this._parseFontFace(c[1]))}this._injectStyleTag(a)},a._watchFontArray=function(){for(var a,b=this._item.src,c="",d=b.length-1;d>=0;d--){var e=b[d];a="string"==typeof e?this._defFromSrc(e):this._defFromObj(e),this._watchFont(a),c+=this._cssFromDef(a)+"\n"}this._injectStyleTag(c)},a._injectStyleTag=function(a){if(this._injectCSS){var b=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a)),b.appendChild(c)}},a._parseFontFace=function(a){var b=this._getCSSValue(a,"font-family"),c=this._getCSSValue(a,"src");return b&&c?this._defFromObj({family:b,src:c,style:this._getCSSValue(a,"font-style"),weight:this._getCSSValue(a,"font-weight")}):null},a._watchFont=function(a){a&&!this._faces[a.id]&&(this._faces[a.id]=a,this._watched.push(a),this._count++,this._calculateReferenceSizes(a),this._startWatching())},a._startWatching=function(){null==this._watchInterval&&(this._watchInterval=setInterval(createjs.proxy(this._watch,this),FontLoader.WATCH_DURATION))},a._stopWatching=function(){clearInterval(this._watchInterval),clearTimeout(this._loadTimeout),this._watchInterval=null},a._watch=function(){for(var a=this._watched,b=FontLoader._referenceFonts,c=a.length,d=c-1;d>=0;d--)for(var e=a[d],f=e.refs,g=f.length-1;g>=0;g--){var h=this._getTextWidth(e.family+","+b[g],e.weight,e.style);if(h!=f[g]){var i=new createjs.Event("fileload");e.type="font-family",i.item=e,this.dispatchEvent(i),a.splice(d,1);break}}if(c!==a.length){var i=new createjs.ProgressEvent(this._count-a.length,this._count);this.dispatchEvent(i)}0===c&&(this._stopWatching(),this._sendComplete())},a._calculateReferenceSizes=function(a){for(var b=FontLoader._referenceFonts,c=a.refs=[],d=0;d<b.length;d++)c[d]=this._getTextWidth(b[d],a.weight,a.style)},a._defFromSrc=function(a){var b,c=/[- ._]+/g,d=a,e=null;b=d.search(/[?#]/),-1!==b&&(d=d.substr(0,b)),b=d.lastIndexOf("."),-1!==b&&(e=d.substr(b+1),d=d.substr(0,b)),b=d.lastIndexOf("/"),-1!==b&&(d=d.substr(b+1));var f=d,g=f.match(FontLoader.WEIGHT_REGEX);g&&(g=g[0],f=f.replace(g,""),g=g.replace(c,"").toLowerCase());var h=d.match(FontLoader.STYLE_REGEX);h&&(f=f.replace(h[0],""),h="italic"),f=f.replace(c,"");var i="local('"+d.replace(c," ")+"'), url('"+a+"')",j=FontLoader.FONT_FORMAT[e];return j&&(i+=" format('"+j+"')"),this._defFromObj({family:f,weight:FontLoader.FONT_WEIGHT[g]||g,style:h,src:i})},a._defFromObj=function(a){var b={family:a.family,src:a.src,style:a.style||"normal",weight:a.weight||"normal"};return b.id=b.family+";"+b.style+";"+b.weight,b},a._cssFromDef=function(a){return"@font-face {\n	font-family: '"+a.family+"';\n	font-style: "+a.style+";\n	font-weight: "+a.weight+";\n	src: "+a.src+";\n}"},a._getTextWidth=function(a,b,c){var d=FontLoader._ctx;return d.font=c+" "+b+" 72px "+a,d.measureText(FontLoader.sampleText).width},a._getCSSValue=function(a,b){var c=new RegExp(b+":s*([^;}]+?)s*[;}]"),d=c.exec(a);return d&&d[1]?d[1]:null},createjs.FontLoader=createjs.promote(FontLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function ImageLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.Types.IMAGE),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",createjs.DomUtils.isImageTag(a)?this._tag=a:createjs.DomUtils.isImageTag(a.src)?this._tag=a.src:createjs.DomUtils.isImageTag(a.tag)&&(this._tag=a.tag),null!=this._tag?this._preferXHR=!1:this._tag=createjs.Elements.img(),this.on("initialize",this._updateXHR,this)}var a=createjs.extend(ImageLoader,createjs.AbstractLoader),b=ImageLoader;b.canLoadItem=function(a){return a.type==createjs.Types.IMAGE},a.load=function(){if(""!=this._tag.src&&this._tag.complete)return void this._sendComplete();var a=this._item.crossOrigin;1==a&&(a="Anonymous"),null==a||createjs.URLUtils.isLocal(this._item)||(this._tag.crossOrigin=a),this.AbstractLoader_load()},a._updateXHR=function(a){a.loader.mimeType="text/plain; charset=x-user-defined-binary",a.loader.setResponseType&&a.loader.setResponseType("blob")},a._formatResult=function(){return this._formatImage},a._formatImage=function(a,b){var c=this._tag,d=window.URL||window.webkitURL;if(this._preferXHR)if(d){var e=d.createObjectURL(this.getResult(!0));c.src=e,c.addEventListener("load",this._cleanUpURL,!1),c.addEventListener("error",this._cleanUpURL,!1)}else c.src=this._item.src;else;c.complete?a(c):(c.onload=createjs.proxy(function(){a(this._tag),c.onload=c.onerror=null},this),c.onerror=createjs.proxy(function(a){b(new createjs.ErrorEvent("IMAGE_FORMAT",null,a)),c.onload=c.onerror=null},this))},a._cleanUpURL=function(a){var b=window.URL||window.webkitURL;b.revokeObjectURL(a.target.src)},createjs.ImageLoader=createjs.promote(ImageLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function JavaScriptLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.Types.JAVASCRIPT),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.setTag(createjs.Elements.script())}var a=createjs.extend(JavaScriptLoader,createjs.AbstractLoader),b=JavaScriptLoader;b.canLoadItem=function(a){return a.type==createjs.Types.JAVASCRIPT},a._formatResult=function(a){var b=a.getTag();return this._preferXHR&&(b.text=a.getResult(!0)),b},createjs.JavaScriptLoader=createjs.promote(JavaScriptLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function JSONLoader(a){this.AbstractLoader_constructor(a,!0,createjs.Types.JSON),this.resultFormatter=this._formatResult}var a=createjs.extend(JSONLoader,createjs.AbstractLoader),b=JSONLoader;b.canLoadItem=function(a){return a.type==createjs.Types.JSON},a._formatResult=function(a){var b=null;try{b=createjs.DataUtils.parseJSON(a.getResult(!0))}catch(c){var d=new createjs.ErrorEvent("JSON_FORMAT",null,c);return this._sendError(d),c}return b},createjs.JSONLoader=createjs.promote(JSONLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function JSONPLoader(a){this.AbstractLoader_constructor(a,!1,createjs.Types.JSONP),this.setTag(createjs.Elements.script()),this.getTag().type="text/javascript"}var a=createjs.extend(JSONPLoader,createjs.AbstractLoader),b=JSONPLoader;b.canLoadItem=function(a){return a.type==createjs.Types.JSONP},a.cancel=function(){this.AbstractLoader_cancel(),this._dispose()},a.load=function(){if(null==this._item.callback)throw new Error("callback is required for loading JSONP requests.");if(null!=window[this._item.callback])throw new Error("JSONP callback '"+this._item.callback+"' already exists on window. You need to specify a different callback or re-name the current one.");window[this._item.callback]=createjs.proxy(this._handleLoad,this),createjs.DomUtils.appendToBody(this._tag),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag.src=this._item.src},a._handleLoad=function(a){this._result=this._rawResult=a,this._sendComplete(),this._dispose()},a._handleTimeout=function(){this._dispose(),this.dispatchEvent(new createjs.ErrorEvent("timeout"))},a._dispose=function(){createjs.DomUtils.removeChild(this._tag),delete window[this._item.callback],clearTimeout(this._loadTimeout)},createjs.JSONPLoader=createjs.promote(JSONPLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function ManifestLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.Types.MANIFEST),this.plugins=null,this._manifestQueue=null}var a=createjs.extend(ManifestLoader,createjs.AbstractLoader),b=ManifestLoader;b.MANIFEST_PROGRESS=.25,b.canLoadItem=function(a){return a.type==createjs.Types.MANIFEST},a.load=function(){this.AbstractLoader_load()},a._createRequest=function(){var a=this._item.callback;this._request=null!=a?new createjs.JSONPLoader(this._item):new createjs.JSONLoader(this._item)},a.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(b.MANIFEST_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=b.MANIFEST_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},a.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},a._loadManifest=function(a){if(a&&a.manifest){var b=this._manifestQueue=new createjs.LoadQueue(this._preferXHR);b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("complete",this._handleManifestComplete,this,!0),b.on("error",this._handleManifestError,this,!0);for(var c=0,d=this.plugins.length;d>c;c++)b.installPlugin(this.plugins[c]);b.loadManifest(a)}else this._sendComplete()},a._handleManifestFileLoad=function(a){a.target=null,this.dispatchEvent(a)},a._handleManifestComplete=function(){this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},a._handleManifestProgress=function(a){this.progress=a.progress*(1-b.MANIFEST_PROGRESS)+b.MANIFEST_PROGRESS,this._sendProgress(this.progress)},a._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.ManifestLoader=createjs.promote(ManifestLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function SoundLoader(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.Types.SOUND),createjs.DomUtils.isAudioTag(a)?this._tag=a:createjs.DomUtils.isAudioTag(a.src)?this._tag=a:createjs.DomUtils.isAudioTag(a.tag)&&(this._tag=createjs.DomUtils.isAudioTag(a)?a:a.src),null!=this._tag&&(this._preferXHR=!1)}var a=createjs.extend(SoundLoader,createjs.AbstractMediaLoader),b=SoundLoader;b.canLoadItem=function(a){return a.type==createjs.Types.SOUND},a._createTag=function(a){var b=createjs.Elements.audio();return b.autoplay=!1,b.preload="none",b.src=a,b},createjs.SoundLoader=createjs.promote(SoundLoader,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function VideoLoader(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.Types.VIDEO),createjs.DomUtils.isVideoTag(a)||createjs.DomUtils.isVideoTag(a.src)?(this.setTag(createjs.DomUtils.isVideoTag(a)?a:a.src),this._preferXHR=!1):this.setTag(this._createTag())}var a=createjs.extend(VideoLoader,createjs.AbstractMediaLoader),b=VideoLoader;a._createTag=function(){return createjs.Elements.video()},b.canLoadItem=function(a){return a.type==createjs.Types.VIDEO},createjs.VideoLoader=createjs.promote(VideoLoader,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function SpriteSheetLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.Types.SPRITESHEET),this._manifestQueue=null}var a=createjs.extend(SpriteSheetLoader,createjs.AbstractLoader),b=SpriteSheetLoader;b.SPRITESHEET_PROGRESS=.25,b.canLoadItem=function(a){return a.type==createjs.Types.SPRITESHEET},a.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},a._createRequest=function(){var a=this._item.callback;this._request=null!=a?new createjs.JSONPLoader(this._item):new createjs.JSONLoader(this._item)},a.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(b.SPRITESHEET_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=b.SPRITESHEET_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},a._loadManifest=function(a){if(a&&a.images){var b=this._manifestQueue=new createjs.LoadQueue(this._preferXHR,this._item.path,this._item.crossOrigin);b.on("complete",this._handleManifestComplete,this,!0),b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("error",this._handleManifestError,this,!0),b.loadManifest(a.images)}},a._handleManifestFileLoad=function(a){var b=a.result;if(null!=b){var c=this.getResult().images,d=c.indexOf(a.item.src);c[d]=b}},a._handleManifestComplete=function(){this._result=new createjs.SpriteSheet(this._result),this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},a._handleManifestProgress=function(a){this.progress=a.progress*(1-b.SPRITESHEET_PROGRESS)+b.SPRITESHEET_PROGRESS,this._sendProgress(this.progress)},a._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.SpriteSheetLoader=createjs.promote(SpriteSheetLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function SVGLoader(a,b){this.AbstractLoader_constructor(a,b,createjs.Types.SVG),this.resultFormatter=this._formatResult,this._tagSrcAttribute="data",b?this.setTag(createjs.Elements.svg()):(this.setTag(createjs.Elements.object()),this.getTag().type="image/svg+xml")
}var a=createjs.extend(SVGLoader,createjs.AbstractLoader),b=SVGLoader;b.canLoadItem=function(a){return a.type==createjs.Types.SVG},a._formatResult=function(a){var b=createjs.DataUtils.parseXML(a.getResult(!0)),c=a.getTag();if(!this._preferXHR&&document.body.contains(c)&&document.body.removeChild(c),null!=b.documentElement){var d=b.documentElement;return document.importNode&&(d=document.importNode(d,!0)),c.appendChild(d),c}return b},createjs.SVGLoader=createjs.promote(SVGLoader,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function XMLLoader(a){this.AbstractLoader_constructor(a,!0,createjs.Types.XML),this.resultFormatter=this._formatResult}var a=createjs.extend(XMLLoader,createjs.AbstractLoader),b=XMLLoader;b.canLoadItem=function(a){return a.type==createjs.Types.XML},a._formatResult=function(a){return createjs.DataUtils.parseXML(a.getResult(!0))},createjs.XMLLoader=createjs.promote(XMLLoader,"AbstractLoader")}();

/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

// Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
;(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function e(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;
return true}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!(null==n||!n.length)&&-1<v(n,t,0)}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function p(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function _(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function v(n,t,r){if(t===t)n:{--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=_(n,d,r);return n}function g(n,t,r,e){
--r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function d(n){return n!==n}function y(n,t){var r=null==n?0:n.length;return r?m(n,t)/r:F}function b(n){return function(t){return null==t?T:t[n]}}function x(n){return function(t){return null==n?T:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function w(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function m(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==T&&(r=r===T?i:r+i)}return r;
}function A(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function E(n,t){return c(t,function(t){return[t,n[t]]})}function k(n){return function(t){return n(t)}}function S(n,t){return c(t,function(t){return n[t]})}function O(n,t){return n.has(t)}function I(n,t){for(var r=-1,e=n.length;++r<e&&-1<v(t,n[r],0););return r}function R(n,t){for(var r=n.length;r--&&-1<v(t,n[r],0););return r}function z(n){return"\\"+Un[n]}function W(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n];
}),r}function B(n,t){return function(r){return n(t(r))}}function L(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function U(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function C(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function D(n){if(Rn.test(n)){for(var t=On.lastIndex=0;On.test(n);)++t;n=t}else n=Qn(n);return n}function M(n){return Rn.test(n)?n.match(On)||[]:n.split("");
}var T,$=1/0,F=NaN,N=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],P=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,q=/(__e\(.*?\)|\b__t\))\+'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(V.source),H=RegExp(K.source),J=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nn=/^\w*$/,tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/[\\^$.*+?()[\]{}|]/g,en=RegExp(rn.source),un=/^\s+|\s+$/g,on=/^\s+/,fn=/\s+$/,cn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,an=/\{\n\/\* \[wrapped with (.+)\] \*/,ln=/,? & /,sn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hn=/\\(\\)?/g,pn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_n=/\w*$/,vn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,dn=/^\[object .+?Constructor\]$/,yn=/^0o[0-7]+$/i,bn=/^(?:0|[1-9]\d*)$/,xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jn=/($^)/,wn=/['\n\r\u2028\u2029\\]/g,mn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",An="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+mn,En="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",kn=RegExp("['\u2019]","g"),Sn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),On=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+En+mn,"g"),In=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",An].join("|"),"g"),Rn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),zn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wn="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Bn={};
Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=true,Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object Boolean]"]=Bn["[object DataView]"]=Bn["[object Date]"]=Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object WeakMap]"]=false;
var Ln={};Ln["[object Arguments]"]=Ln["[object Array]"]=Ln["[object ArrayBuffer]"]=Ln["[object DataView]"]=Ln["[object Boolean]"]=Ln["[object Date]"]=Ln["[object Float32Array]"]=Ln["[object Float64Array]"]=Ln["[object Int8Array]"]=Ln["[object Int16Array]"]=Ln["[object Int32Array]"]=Ln["[object Map]"]=Ln["[object Number]"]=Ln["[object Object]"]=Ln["[object RegExp]"]=Ln["[object Set]"]=Ln["[object String]"]=Ln["[object Symbol]"]=Ln["[object Uint8Array]"]=Ln["[object Uint8ClampedArray]"]=Ln["[object Uint16Array]"]=Ln["[object Uint32Array]"]=true,
Ln["[object Error]"]=Ln["[object Function]"]=Ln["[object WeakMap]"]=false;var Un={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cn=parseFloat,Dn=parseInt,Mn=typeof global=="object"&&global&&global.Object===Object&&global,Tn=typeof self=="object"&&self&&self.Object===Object&&self,$n=Mn||Tn||Function("return this")(),Fn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Nn=Fn&&typeof module=="object"&&module&&!module.nodeType&&module,Pn=Nn&&Nn.exports===Fn,Zn=Pn&&Mn.process,qn=function(){
try{var n=Nn&&Nn.f&&Nn.f("util").types;return n?n:Zn&&Zn.binding&&Zn.binding("util")}catch(n){}}(),Vn=qn&&qn.isArrayBuffer,Kn=qn&&qn.isDate,Gn=qn&&qn.isMap,Hn=qn&&qn.isRegExp,Jn=qn&&qn.isSet,Yn=qn&&qn.isTypedArray,Qn=b("length"),Xn=x({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I",
"\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C",
"\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i",
"\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r",
"\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij",
"\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"}),nt=x({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),tt=x({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),rt=function x(mn){function An(n){if(yu(n)&&!ff(n)&&!(n instanceof Un)){if(n instanceof On)return n;if(oi.call(n,"__wrapped__"))return Fe(n)}return new On(n)}function En(){}function On(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=T}function Un(n){this.__wrapped__=n,
this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Mn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Fn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Fn;++t<r;)this.add(n[t]);
}function Zn(n){this.size=(this.__data__=new Tn(n)).size}function qn(n,t){var r,e=ff(n),u=!e&&of(n),i=!e&&!u&&af(n),o=!e&&!u&&!i&&_f(n),u=(e=e||u||i||o)?A(n.length,ni):[],f=u.length;for(r in n)!t&&!oi.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Se(r,f))||u.push(r);return u}function Qn(n){var t=n.length;return t?n[ir(0,t-1)]:T}function et(n,t){return De(Ur(n),pt(t,0,n.length))}function ut(n){return De(Ur(n))}function it(n,t,r){(r===T||lu(n[t],r))&&(r!==T||t in n)||st(n,t,r);
}function ot(n,t,r){var e=n[t];oi.call(n,t)&&lu(e,r)&&(r!==T||t in n)||st(n,t,r)}function ft(n,t){for(var r=n.length;r--;)if(lu(n[r][0],t))return r;return-1}function ct(n,t,r,e){return uo(n,function(n,u,i){t(e,n,r(n),i)}),e}function at(n,t){return n&&Cr(t,Wu(t),n)}function lt(n,t){return n&&Cr(t,Bu(t),n)}function st(n,t,r){"__proto__"==t&&Ai?Ai(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function ht(n,t){for(var r=-1,e=t.length,u=Ku(e),i=null==n;++r<e;)u[r]=i?T:Ru(n,t[r]);return u;
}function pt(n,t,r){return n===n&&(r!==T&&(n=n<=r?n:r),t!==T&&(n=n>=t?n:t)),n}function _t(n,t,e,u,i,o){var f,c=1&t,a=2&t,l=4&t;if(e&&(f=i?e(n,u,i,o):e(n)),f!==T)return f;if(!du(n))return n;if(u=ff(n)){if(f=me(n),!c)return Ur(n,f)}else{var s=vo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(af(n))return Ir(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Ae(n),!c)return a?Mr(n,lt(f,n)):Dr(n,at(f,n))}else{if(!Ln[s])return i?n:{};f=Ee(n,s,c)}}if(o||(o=new Zn),
i=o.get(n))return i;o.set(n,f),pf(n)?n.forEach(function(r){f.add(_t(r,t,e,r,n,o))}):sf(n)&&n.forEach(function(r,u){f.set(u,_t(r,t,e,u,n,o))});var a=l?a?ve:_e:a?Bu:Wu,p=u?T:a(n);return r(p||n,function(r,u){p&&(u=r,r=n[u]),ot(f,u,_t(r,t,e,u,n,o))}),f}function vt(n){var t=Wu(n);return function(r){return gt(r,n,t)}}function gt(n,t,r){var e=r.length;if(null==n)return!e;for(n=Qu(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===T&&!(u in n)||!i(o))return false}return true}function dt(n,t,r){if(typeof n!="function")throw new ti("Expected a function");
return bo(function(){n.apply(T,r)},t)}function yt(n,t,r,e){var u=-1,i=o,a=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=c(t,k(r))),e?(i=f,a=false):200<=t.length&&(i=O,a=false,t=new Nn(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function bt(n,t){var r=true;return uo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function xt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===T?o===o&&!wu(o):r(o,f)))var f=o,c=i;
}return c}function jt(n,t){var r=[];return uo(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function wt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=ke),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?wt(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function mt(n,t){return n&&oo(n,t,Wu)}function At(n,t){return n&&fo(n,t,Wu)}function Et(n,t){return i(t,function(t){return _u(n[t])})}function kt(n,t){t=Sr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Me(t[r++])];return r&&r==e?n:T}function St(n,t,r){return t=t(n),
ff(n)?t:a(t,r(n))}function Ot(n){if(null==n)n=n===T?"[object Undefined]":"[object Null]";else if(mi&&mi in Qu(n)){var t=oi.call(n,mi),r=n[mi];try{n[mi]=T;var e=true}catch(n){}var u=ai.call(n);e&&(t?n[mi]=r:delete n[mi]),n=u}else n=ai.call(n);return n}function It(n,t){return n>t}function Rt(n,t){return null!=n&&oi.call(n,t)}function zt(n,t){return null!=n&&t in Qu(n)}function Wt(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=Ku(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,k(t))),s=Ci(p.length,s),
l[a]=!r&&(t||120<=u&&120<=p.length)?new Nn(a&&p):T}var p=n[0],_=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;if(v?!O(v,d):!e(h,d,r)){for(a=i;--a;){var y=l[a];if(y?!O(y,d):!e(n[a],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Bt(n,t,r){var e={};return mt(n,function(n,u,i){t(e,r(n),u,i)}),e}function Lt(t,r,e){return r=Sr(r,t),t=2>r.length?t:kt(t,hr(r,0,-1)),r=null==t?t:t[Me(Ve(r))],null==r?T:n(r,t,e)}function Ut(n){return yu(n)&&"[object Arguments]"==Ot(n)}function Ct(n){
return yu(n)&&"[object ArrayBuffer]"==Ot(n)}function Dt(n){return yu(n)&&"[object Date]"==Ot(n)}function Mt(n,t,r,e,u){if(n===t)t=true;else if(null==n||null==t||!yu(n)&&!yu(t))t=n!==n&&t!==t;else n:{var i=ff(n),o=ff(t),f=i?"[object Array]":vo(n),c=o?"[object Array]":vo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&af(n)){if(!af(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Zn),t=i||_f(n)?se(n,t,r,e,Mt,u):he(n,t,f,r,e,Mt,u);else{
if(!(1&r)&&(i=a&&oi.call(n,"__wrapped__"),f=o&&oi.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Zn),t=Mt(n,t,r,e,u);break n}if(c)t:if(u||(u=new Zn),i=1&r,f=_e(n),o=f.length,c=_e(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:oi.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===T?h!==p&&!Mt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l);
}c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Tt(n){return yu(n)&&"[object Map]"==vo(n)}function $t(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Qu(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===T&&!(c in n))return false;
}else{if(f=new Zn,e)var s=e(a,l,c,n,t,f);if(s===T?!Mt(l,a,3,e,f):!s)return false}}return true}function Ft(n){return!(!du(n)||ci&&ci in n)&&(_u(n)?hi:dn).test(Te(n))}function Nt(n){return yu(n)&&"[object RegExp]"==Ot(n)}function Pt(n){return yu(n)&&"[object Set]"==vo(n)}function Zt(n){return yu(n)&&gu(n.length)&&!!Bn[Ot(n)]}function qt(n){return typeof n=="function"?n:null==n?$u:typeof n=="object"?ff(n)?Jt(n[0],n[1]):Ht(n):Zu(n)}function Vt(n){if(!ze(n))return Li(n);var t,r=[];for(t in Qu(n))oi.call(n,t)&&"constructor"!=t&&r.push(t);
return r}function Kt(n,t){return n<t}function Gt(n,t){var r=-1,e=su(n)?Ku(n.length):[];return uo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ht(n){var t=xe(n);return 1==t.length&&t[0][2]?We(t[0][0],t[0][1]):function(r){return r===n||$t(r,n,t)}}function Jt(n,t){return Ie(n)&&t===t&&!du(t)?We(Me(n),t):function(r){var e=Ru(r,n);return e===T&&e===t?zu(r,n):Mt(t,e,3)}}function Yt(n,t,r,e,u){n!==t&&oo(t,function(i,o){if(u||(u=new Zn),du(i)){var f=u,c=Le(n,o),a=Le(t,o),l=f.get(a);if(l)it(n,o,l);else{
var l=e?e(c,a,o+"",n,t,f):T,s=l===T;if(s){var h=ff(a),p=!h&&af(a),_=!h&&!p&&_f(a),l=a;h||p||_?ff(c)?l=c:hu(c)?l=Ur(c):p?(s=false,l=Ir(a,true)):_?(s=false,l=zr(a,true)):l=[]:xu(a)||of(a)?(l=c,of(c)?l=Ou(c):du(c)&&!_u(c)||(l=Ae(a))):s=false}s&&(f.set(a,l),Yt(l,a,r,e,f),f.delete(a)),it(n,o,l)}}else f=e?e(Le(n,o),i,o+"",n,t,u):T,f===T&&(f=i),it(n,o,f)},Bu)}function Qt(n,t){var r=n.length;if(r)return t+=0>t?r:0,Se(t,r)?n[t]:T}function Xt(n,t,r){var e=-1;return t=c(t.length?t:[$u],k(ye())),n=Gt(n,function(n){return{
a:c(t,function(t){return t(n)}),b:++e,c:n}}),w(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Wr(u[e],i[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);break n}}e=n.b-t.b}return e})}function nr(n,t){return tr(n,t,function(t,r){return zu(n,r)})}function tr(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=kt(n,o);r(f,o)&&lr(i,Sr(o,n),f)}return i}function rr(n){return function(t){return kt(t,n)}}function er(n,t,r,e){var u=e?g:v,i=-1,o=t.length,f=n;for(n===t&&(t=Ur(t)),
r&&(f=c(n,k(r)));++i<o;)for(var a=0,l=t[i],l=r?r(l):l;-1<(a=u(f,l,a,e));)f!==n&&xi.call(f,a,1),xi.call(n,a,1);return n}function ur(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Se(u)?xi.call(n,u,1):xr(n,u)}}}function ir(n,t){return n+Ii(Ti()*(t-n+1))}function or(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=Ii(t/2))&&(n+=n);while(t);return r}function fr(n,t){return xo(Be(n,t,$u),n+"")}function cr(n){return Qn(Uu(n))}function ar(n,t){var r=Uu(n);
return De(r,pt(t,0,r.length))}function lr(n,t,r,e){if(!du(n))return n;t=Sr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=Me(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):T;a===T&&(a=du(l)?l:Se(t[u+1])?[]:{})}ot(f,c,a),f=f[c]}return n}function sr(n){return De(Uu(n))}function hr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Ku(u);++e<u;)r[e]=n[e+t];return r}function pr(n,t){var r;return uo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}
function _r(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!wu(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return vr(n,t,$u,r)}function vr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=wu(t),a=t===T;u<i;){var l=Ii((u+i)/2),s=r(n[l]),h=s!==T,p=null===s,_=s===s,v=wu(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Ci(i,4294967294)}function gr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){
var o=n[r],f=t?t(o):o;if(!r||!lu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function dr(n){return typeof n=="number"?n:wu(n)?F:+n}function yr(n){if(typeof n=="string")return n;if(ff(n))return c(n,yr)+"";if(wu(n))return ro?ro.call(n):"";var t=n+"";return"0"==t&&1/n==-$?"-0":t}function br(n,t,r){var e=-1,u=o,i=n.length,c=true,a=[],l=a;if(r)c=false,u=f;else if(200<=i){if(u=t?null:so(n))return U(u);c=false,u=O,l=new Nn}else l=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(c&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;
t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function xr(n,t){return t=Sr(t,n),n=2>t.length?n:kt(n,hr(t,0,-1)),null==n||delete n[Me(Ve(t))]}function jr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?hr(n,e?0:i,e?i+1:u):hr(n,e?i+1:0,e?u:i)}function wr(n,t){var r=n;return r instanceof Un&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function mr(n,t,r){var e=n.length;if(2>e)return e?br(n[0]):[];for(var u=-1,i=Ku(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=yt(i[u]||o,n[f],t,r));
return br(wt(i,1),t,r)}function Ar(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:T);return o}function Er(n){return hu(n)?n:[]}function kr(n){return typeof n=="function"?n:$u}function Sr(n,t){return ff(n)?n:Ie(n,t)?[n]:jo(Iu(n))}function Or(n,t,r){var e=n.length;return r=r===T?e:r,!t&&r>=e?n:hr(n,t,r)}function Ir(n,t){if(t)return n.slice();var r=n.length,r=gi?gi(r):new n.constructor(r);return n.copy(r),r}function Rr(n){var t=new n.constructor(n.byteLength);return new vi(t).set(new vi(n)),
t}function zr(n,t){return new n.constructor(t?Rr(n.buffer):n.buffer,n.byteOffset,n.length)}function Wr(n,t){if(n!==t){var r=n!==T,e=null===n,u=n===n,i=wu(n),o=t!==T,f=null===t,c=t===t,a=wu(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Br(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Ui(i-o,0),l=Ku(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];
return l}function Lr(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Ui(i-f,0),s=Ku(l+a);for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Ur(n,t){var r=-1,e=n.length;for(t||(t=Ku(e));++r<e;)t[r]=n[r];return t}function Cr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):T;c===T&&(c=n[f]),u?st(r,f,c):ot(r,f,c)}return r}function Dr(n,t){return Cr(n,po(n),t)}function Mr(n,t){return Cr(n,_o(n),t);
}function Tr(n,r){return function(e,u){var i=ff(e)?t:ct,o=r?r():{};return i(e,n,ye(u,2),o)}}function $r(n){return fr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:T,o=2<u?r[2]:T,i=3<n.length&&typeof i=="function"?(u--,i):T;for(o&&Oe(r[0],r[1],o)&&(i=3>u?T:i,u=1),t=Qu(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Fr(n,t){return function(r,e){if(null==r)return r;if(!su(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Qu(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function Nr(n){return function(t,r,e){
var u=-1,i=Qu(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break}return t}}function Pr(n,t,r){function e(){return(this&&this!==$n&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Vr(n);return e}function Zr(n){return function(t){t=Iu(t);var r=Rn.test(t)?M(t):T,e=r?r[0]:t.charAt(0);return t=r?Or(r,1).join(""):t.slice(1),e[n]()+t}}function qr(n){return function(t){return l(Mu(Du(t).replace(kn,"")),n,"")}}function Vr(n){return function(){var t=arguments;switch(t.length){
case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=eo(n.prototype),t=n.apply(r,t);return du(t)?t:r}}function Kr(t,r,e){function u(){for(var o=arguments.length,f=Ku(o),c=o,a=de(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:L(f,a),
o-=c.length,o<e?ue(t,r,Jr,u.placeholder,T,f,c,T,T,e-o):n(this&&this!==$n&&this instanceof u?i:t,this,f)}var i=Vr(t);return u}function Gr(n){return function(t,r,e){var u=Qu(t);if(!su(t)){var i=ye(r,3);t=Wu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:T}}function Hr(n){return pe(function(t){var r=t.length,e=r,u=On.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ti("Expected a function");if(u&&!o&&"wrapper"==ge(i))var o=new On([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=ge(i),f="wrapper"==u?ho(i):T,o=f&&Re(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[ge(f[0])].apply(o,f[3]):1==i.length&&Re(i)?o[u]():o.thru(i);
return function(){var n=arguments,e=n[0];if(o&&1==n.length&&ff(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Jr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Ku(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=de(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Br(y,e,u,_)),i&&(y=Lr(y,i,o,_)),d-=x,_&&d<a)return j=L(y,j),ue(n,t,Jr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Ci(f.length,x),m=Ur(y);w--;){
var A=f[w];y[w]=Se(A,x)?m[A]:T}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==$n&&this instanceof l&&(b=g||Vr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?T:Vr(n);return l}function Yr(n,t){return function(r,e){return Bt(r,n,t(e))}}function Qr(n,t){return function(r,e){var u;if(r===T&&e===T)return t;if(r!==T&&(u=r),e!==T){if(u===T)return e;typeof r=="string"||typeof e=="string"?(r=yr(r),e=yr(e)):(r=dr(r),e=dr(e)),u=n(r,e)}return u}}function Xr(t){return pe(function(r){
return r=c(r,k(ye())),fr(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ne(n,t){t=t===T?" ":yr(t);var r=t.length;return 2>r?r?or(t,n):t:(r=or(t,Oi(n/D(t))),Rn.test(t)?Or(M(r),0,n).join(""):r.slice(0,n))}function te(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=Ku(l+c),h=this&&this!==$n&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];return n(h,o?e:this,s)}var o=1&r,f=Vr(t);return i}function re(n){return function(t,r,e){
e&&typeof e!="number"&&Oe(t,r,e)&&(r=e=T),t=Au(t),r===T?(r=t,t=0):r=Au(r),e=e===T?t<r?1:-1:Au(e);var u=-1;r=Ui(Oi((r-t)/(e||1)),0);for(var i=Ku(r);r--;)i[n?r:++u]=t,t+=e;return i}}function ee(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Su(t),r=Su(r)),n(t,r)}}function ue(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:T;o=l?T:o;var h=l?i:T;return i=l?T:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(T,u),Re(n)&&yo(r,u),r.placeholder=e,Ue(r,n,t)}function ie(n){
var t=Yu[n];return function(n,r){if(n=Su(n),(r=null==r?0:Ci(Eu(r),292))&&Wi(n)){var e=(Iu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Iu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oe(n){return function(t){var r=vo(t);return"[object Map]"==r?W(t):"[object Set]"==r?C(t):E(t,n(t))}}function fe(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ti("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=T),o=o===T?o:Ui(Eu(o),0),f=f===T?f:Eu(f),a-=u?u.length:0,
64&t){var l=e,s=u;e=u=T}var h=c?T:ho(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Br(e,r,h[4]):r,i[4]=e?L(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Lr(e,r,h[6]):r,i[6]=e?L(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Ci(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],
t=i[1],r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===T?c?0:n.length:Ui(i[9]-a,0),!f&&24&t&&(t&=-25),Ue((h?co:yo)(t&&1!=t?8==t||16==t?Kr(n,t,f):32!=t&&33!=t||u.length?Jr.apply(T,i):te(n,t,r,e):Pr(n,t,r),i),n,t)}function ce(n,t,r,e){return n===T||lu(n,ei[r])&&!oi.call(e,r)?t:n}function ae(n,t,r,e,u,i){return du(n)&&du(t)&&(i.set(t,n),Yt(n,t,T,ae,i),i.delete(t)),n}function le(n){return xu(n)?T:n}function se(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;
var c=-1,a=true,l=2&r?new Nn:T;for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],p=t[c];if(e)var _=o?e(p,s,c,t,n,i):e(s,p,c,n,t,i);if(_!==T){if(_)continue;a=false;break}if(l){if(!h(t,function(n,t){if(!O(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==p&&!u(s,p,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function he(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":
if(n.byteLength!=t.byteLength||!i(new vi(n),new vi(t)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return lu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=W;case"[object Set]":if(f||(f=U),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=se(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(to)return to.call(n)==to.call(t)}
return false}function pe(n){return xo(Be(n,T,Ze),n+"")}function _e(n){return St(n,Wu,po)}function ve(n){return St(n,Bu,_o)}function ge(n){for(var t=n.name+"",r=Gi[t],e=oi.call(Gi,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function de(n){return(oi.call(An,"placeholder")?An:n).placeholder}function ye(){var n=An.iteratee||Fu,n=n===Fu?qt:n;return arguments.length?n(arguments[0],arguments[1]):n}function be(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
}function xe(n){for(var t=Wu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!du(u)]}return t}function je(n,t){var r=null==n?T:n[t];return Ft(r)?r:T}function we(n,t,r){t=Sr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=Me(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&gu(u)&&Se(o,u)&&(ff(n)||of(n)))}function me(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&oi.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ae(n){
return typeof n.constructor!="function"||ze(n)?{}:eo(di(n))}function Ee(n,t,r){var e=n.constructor;switch(t){case"[object ArrayBuffer]":return Rr(n);case"[object Boolean]":case"[object Date]":return new e(+n);case"[object DataView]":return t=r?Rr(n.buffer):n.buffer,new n.constructor(t,n.byteOffset,n.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
case"[object Uint16Array]":case"[object Uint32Array]":return zr(n,r);case"[object Map]":return new e;case"[object Number]":case"[object String]":return new e(n);case"[object RegExp]":return t=new n.constructor(n.source,_n.exec(n)),t.lastIndex=n.lastIndex,t;case"[object Set]":return new e;case"[object Symbol]":return to?Qu(to.call(n)):{}}}function ke(n){return ff(n)||of(n)||!!(ji&&n&&n[ji])}function Se(n,t){var r=typeof n;return t=null==t?9007199254740991:t,!!t&&("number"==r||"symbol"!=r&&bn.test(n))&&-1<n&&0==n%1&&n<t;
}function Oe(n,t,r){if(!du(r))return false;var e=typeof t;return!!("number"==e?su(r)&&Se(t,r.length):"string"==e&&t in r)&&lu(r[t],n)}function Ie(n,t){if(ff(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!wu(n))||(nn.test(n)||!X.test(n)||null!=t&&n in Qu(t))}function Re(n){var t=ge(n),r=An[t];return typeof r=="function"&&t in Un.prototype&&(n===r||(t=ho(r),!!t&&n===t[0]))}function ze(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||ei)}function We(n,t){
return function(r){return null!=r&&(r[n]===t&&(t!==T||n in Qu(r)))}}function Be(t,r,e){return r=Ui(r===T?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Ui(u.length-r,0),f=Ku(o);++i<o;)f[i]=u[r+i];for(i=-1,o=Ku(r+1);++i<r;)o[i]=u[i];return o[r]=e(f),n(t,this,o)}}function Le(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}function Ue(n,t,r){var e=t+"";t=xo;var u,i=$e;return u=(u=e.match(an))?u[1].split(ln):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],
r=r.join(2<i?", ":" "),e=e.replace(cn,"{\n/* [wrapped with "+r+"] */\n")),t(n,e)}function Ce(n){var t=0,r=0;return function(){var e=Di(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(T,arguments)}}function De(n,t){var r=-1,e=n.length,u=e-1;for(t=t===T?e:t;++r<t;){var e=ir(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function Me(n){if(typeof n=="string"||wu(n))return n;var t=n+"";return"0"==t&&1/n==-$?"-0":t}function Te(n){if(null!=n){try{return ii.call(n)}catch(n){}
return n+""}return""}function $e(n,t){return r(N,function(r){var e="_."+r[0];t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function Fe(n){if(n instanceof Un)return n.clone();var t=new On(n.__wrapped__,n.__chain__);return t.__actions__=Ur(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ne(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Eu(r),0>r&&(r=Ui(e+r,0)),_(n,ye(t,3),r)):-1}function Pe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==T&&(u=Eu(r),u=0>r?Ui(e+u,0):Ci(u,e-1)),
_(n,ye(t,3),u,true)}function Ze(n){return(null==n?0:n.length)?wt(n,1):[]}function qe(n){return n&&n.length?n[0]:T}function Ve(n){var t=null==n?0:n.length;return t?n[t-1]:T}function Ke(n,t){return n&&n.length&&t&&t.length?er(n,t):n}function Ge(n){return null==n?n:$i.call(n)}function He(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){if(hu(n))return t=Ui(n.length,t),true}),A(t,function(t){return c(n,b(t))})}function Je(t,r){if(!t||!t.length)return[];var e=He(t);return null==r?e:c(e,function(t){
return n(r,T,t)})}function Ye(n){return n=An(n),n.__chain__=true,n}function Qe(n,t){return t(n)}function Xe(){return this}function nu(n,t){return(ff(n)?r:uo)(n,ye(t,3))}function tu(n,t){return(ff(n)?e:io)(n,ye(t,3))}function ru(n,t){return(ff(n)?c:Gt)(n,ye(t,3))}function eu(n,t,r){return t=r?T:t,t=n&&null==t?n.length:t,fe(n,128,T,T,T,T,t)}function uu(n,t){var r;if(typeof t!="function")throw new ti("Expected a function");return n=Eu(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=T),
r}}function iu(n,t,r){return t=r?T:t,n=fe(n,8,T,T,T,T,T,t),n.placeholder=iu.placeholder,n}function ou(n,t,r){return t=r?T:t,n=fe(n,16,T,T,T,T,T,t),n.placeholder=ou.placeholder,n}function fu(n,t,r){function e(t){var r=c,e=a;return c=a=T,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===T||r>=t||0>r||g&&n>=l}function i(){var n=Go();if(u(n))return o(n);var r,e=bo;r=n-_,n=t-(n-p),r=g?Ci(n,l-r):n,h=e(i,r)}function o(n){return h=T,d&&c?e(n):(c=a=T,s)}function f(){var n=Go(),r=u(n);if(c=arguments,
a=this,p=n,r){if(h===T)return _=n=p,h=bo(i,t),v?e(n):s;if(g)return lo(h),h=bo(i,t),e(p)}return h===T&&(h=bo(i,t)),s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ti("Expected a function");return t=Su(t)||0,du(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Ui(Su(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==T&&lo(h),_=0,c=p=a=h=T},f.flush=function(){return h===T?s:o(Go())},f}function cu(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;
return i.has(u)?i.get(u):(e=n.apply(this,e),r.cache=i.set(u,e)||i,e)}if(typeof n!="function"||null!=t&&typeof t!="function")throw new ti("Expected a function");return r.cache=new(cu.Cache||Fn),r}function au(n){if(typeof n!="function")throw new ti("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function lu(n,t){return n===t||n!==n&&t!==t;
}function su(n){return null!=n&&gu(n.length)&&!_u(n)}function hu(n){return yu(n)&&su(n)}function pu(n){if(!yu(n))return false;var t=Ot(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!xu(n)}function _u(n){return!!du(n)&&(n=Ot(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function vu(n){return typeof n=="number"&&n==Eu(n)}function gu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n;
}function du(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function yu(n){return null!=n&&typeof n=="object"}function bu(n){return typeof n=="number"||yu(n)&&"[object Number]"==Ot(n)}function xu(n){return!(!yu(n)||"[object Object]"!=Ot(n))&&(n=di(n),null===n||(n=oi.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&ii.call(n)==li))}function ju(n){return typeof n=="string"||!ff(n)&&yu(n)&&"[object String]"==Ot(n)}function wu(n){return typeof n=="symbol"||yu(n)&&"[object Symbol]"==Ot(n);
}function mu(n){if(!n)return[];if(su(n))return ju(n)?M(n):Ur(n);if(wi&&n[wi]){n=n[wi]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}return t=vo(n),("[object Map]"==t?W:"[object Set]"==t?U:Uu)(n)}function Au(n){return n?(n=Su(n),n===$||n===-$?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function Eu(n){n=Au(n);var t=n%1;return n===n?t?n-t:n:0}function ku(n){return n?pt(Eu(n),0,4294967295):0}function Su(n){if(typeof n=="number")return n;if(wu(n))return F;if(du(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,
n=du(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(un,"");var t=gn.test(n);return t||yn.test(n)?Dn(n.slice(2),t?2:8):vn.test(n)?F:+n}function Ou(n){return Cr(n,Bu(n))}function Iu(n){return null==n?"":yr(n)}function Ru(n,t,r){return n=null==n?T:kt(n,t),n===T?r:n}function zu(n,t){return null!=n&&we(n,t,zt)}function Wu(n){return su(n)?qn(n):Vt(n)}function Bu(n){if(su(n))n=qn(n,true);else if(du(n)){var t,r=ze(n),e=[];for(t in n)("constructor"!=t||!r&&oi.call(n,t))&&e.push(t);n=e}else{if(t=[],
null!=n)for(r in Qu(n))t.push(r);n=t}return n}function Lu(n,t){if(null==n)return{};var r=c(ve(n),function(n){return[n]});return t=ye(t),tr(n,r,function(n,r){return t(n,r[0])})}function Uu(n){return null==n?[]:S(n,Wu(n))}function Cu(n){return $f(Iu(n).toLowerCase())}function Du(n){return(n=Iu(n))&&n.replace(xn,Xn).replace(Sn,"")}function Mu(n,t,r){return n=Iu(n),t=r?T:t,t===T?zn.test(n)?n.match(In)||[]:n.match(sn)||[]:n.match(t)||[]}function Tu(n){return function(){return n}}function $u(n){return n;
}function Fu(n){return qt(typeof n=="function"?n:_t(n,1))}function Nu(n,t,e){var u=Wu(t),i=Et(t,u);null!=e||du(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=Et(t,Wu(t)));var o=!(du(e)&&"chain"in e&&!e.chain),f=_u(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Ur(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Pu(){}
function Zu(n){return Ie(n)?b(Me(n)):rr(n)}function qu(){return[]}function Vu(){return false}mn=null==mn?$n:rt.defaults($n.Object(),mn,rt.pick($n,Wn));var Ku=mn.Array,Gu=mn.Date,Hu=mn.Error,Ju=mn.Function,Yu=mn.Math,Qu=mn.Object,Xu=mn.RegExp,ni=mn.String,ti=mn.TypeError,ri=Ku.prototype,ei=Qu.prototype,ui=mn["__core-js_shared__"],ii=Ju.prototype.toString,oi=ei.hasOwnProperty,fi=0,ci=function(){var n=/[^.]+$/.exec(ui&&ui.keys&&ui.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ai=ei.toString,li=ii.call(Qu),si=$n._,hi=Xu("^"+ii.call(oi).replace(rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pi=Pn?mn.Buffer:T,_i=mn.Symbol,vi=mn.Uint8Array,gi=pi?pi.g:T,di=B(Qu.getPrototypeOf,Qu),yi=Qu.create,bi=ei.propertyIsEnumerable,xi=ri.splice,ji=_i?_i.isConcatSpreadable:T,wi=_i?_i.iterator:T,mi=_i?_i.toStringTag:T,Ai=function(){
try{var n=je(Qu,"defineProperty");return n({},"",{}),n}catch(n){}}(),Ei=mn.clearTimeout!==$n.clearTimeout&&mn.clearTimeout,ki=Gu&&Gu.now!==$n.Date.now&&Gu.now,Si=mn.setTimeout!==$n.setTimeout&&mn.setTimeout,Oi=Yu.ceil,Ii=Yu.floor,Ri=Qu.getOwnPropertySymbols,zi=pi?pi.isBuffer:T,Wi=mn.isFinite,Bi=ri.join,Li=B(Qu.keys,Qu),Ui=Yu.max,Ci=Yu.min,Di=Gu.now,Mi=mn.parseInt,Ti=Yu.random,$i=ri.reverse,Fi=je(mn,"DataView"),Ni=je(mn,"Map"),Pi=je(mn,"Promise"),Zi=je(mn,"Set"),qi=je(mn,"WeakMap"),Vi=je(Qu,"create"),Ki=qi&&new qi,Gi={},Hi=Te(Fi),Ji=Te(Ni),Yi=Te(Pi),Qi=Te(Zi),Xi=Te(qi),no=_i?_i.prototype:T,to=no?no.valueOf:T,ro=no?no.toString:T,eo=function(){
function n(){}return function(t){return du(t)?yi?yi(t):(n.prototype=t,t=new n,n.prototype=T,t):{}}}();An.templateSettings={escape:J,evaluate:Y,interpolate:Q,variable:"",imports:{_:An}},An.prototype=En.prototype,An.prototype.constructor=An,On.prototype=eo(En.prototype),On.prototype.constructor=On,Un.prototype=eo(En.prototype),Un.prototype.constructor=Un,Mn.prototype.clear=function(){this.__data__=Vi?Vi(null):{},this.size=0},Mn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
this.size-=n?1:0,n},Mn.prototype.get=function(n){var t=this.__data__;return Vi?(n=t[n],"__lodash_hash_undefined__"===n?T:n):oi.call(t,n)?t[n]:T},Mn.prototype.has=function(n){var t=this.__data__;return Vi?t[n]!==T:oi.call(t,n)},Mn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Vi&&t===T?"__lodash_hash_undefined__":t,this},Tn.prototype.clear=function(){this.__data__=[],this.size=0},Tn.prototype.delete=function(n){var t=this.__data__;return n=ft(t,n),!(0>n)&&(n==t.length-1?t.pop():xi.call(t,n,1),
--this.size,true)},Tn.prototype.get=function(n){var t=this.__data__;return n=ft(t,n),0>n?T:t[n][1]},Tn.prototype.has=function(n){return-1<ft(this.__data__,n)},Tn.prototype.set=function(n,t){var r=this.__data__,e=ft(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Fn.prototype.clear=function(){this.size=0,this.__data__={hash:new Mn,map:new(Ni||Tn),string:new Mn}},Fn.prototype.delete=function(n){return n=be(this,n).delete(n),this.size-=n?1:0,n},Fn.prototype.get=function(n){return be(this,n).get(n);
},Fn.prototype.has=function(n){return be(this,n).has(n)},Fn.prototype.set=function(n,t){var r=be(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Nn.prototype.add=Nn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},Nn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.clear=function(){this.__data__=new Tn,this.size=0},Zn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Zn.prototype.get=function(n){
return this.__data__.get(n)},Zn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Tn){var e=r.__data__;if(!Ni||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Fn(e)}return r.set(n,t),this.size=r.size,this};var uo=Fr(mt),io=Fr(At,true),oo=Nr(),fo=Nr(true),co=Ki?function(n,t){return Ki.set(n,t),n}:$u,ao=Ai?function(n,t){return Ai(n,"toString",{configurable:true,enumerable:false,value:Tu(t),writable:true})}:$u,lo=Ei||function(n){
return $n.clearTimeout(n)},so=Zi&&1/U(new Zi([,-0]))[1]==$?function(n){return new Zi(n)}:Pu,ho=Ki?function(n){return Ki.get(n)}:Pu,po=Ri?function(n){return null==n?[]:(n=Qu(n),i(Ri(n),function(t){return bi.call(n,t)}))}:qu,_o=Ri?function(n){for(var t=[];n;)a(t,po(n)),n=di(n);return t}:qu,vo=Ot;(Fi&&"[object DataView]"!=vo(new Fi(new ArrayBuffer(1)))||Ni&&"[object Map]"!=vo(new Ni)||Pi&&"[object Promise]"!=vo(Pi.resolve())||Zi&&"[object Set]"!=vo(new Zi)||qi&&"[object WeakMap]"!=vo(new qi))&&(vo=function(n){
var t=Ot(n);if(n=(n="[object Object]"==t?n.constructor:T)?Te(n):"")switch(n){case Hi:return"[object DataView]";case Ji:return"[object Map]";case Yi:return"[object Promise]";case Qi:return"[object Set]";case Xi:return"[object WeakMap]"}return t});var go=ui?_u:Vu,yo=Ce(co),bo=Si||function(n,t){return $n.setTimeout(n,t)},xo=Ce(ao),jo=function(n){n=cu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(tn,function(n,r,e,u){
t.push(e?u.replace(hn,"$1"):r||n)}),t}),wo=fr(function(n,t){return hu(n)?yt(n,wt(t,1,hu,true)):[]}),mo=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),ye(r,2)):[]}),Ao=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),T,r):[]}),Eo=fr(function(n){var t=c(n,Er);return t.length&&t[0]===n[0]?Wt(t):[]}),ko=fr(function(n){var t=Ve(n),r=c(n,Er);return t===Ve(r)?t=T:r.pop(),r.length&&r[0]===n[0]?Wt(r,ye(t,2)):[]}),So=fr(function(n){var t=Ve(n),r=c(n,Er);return(t=typeof t=="function"?t:T)&&r.pop(),
r.length&&r[0]===n[0]?Wt(r,T,t):[]}),Oo=fr(Ke),Io=pe(function(n,t){var r=null==n?0:n.length,e=ht(n,t);return ur(n,c(t,function(n){return Se(n,r)?+n:n}).sort(Wr)),e}),Ro=fr(function(n){return br(wt(n,1,hu,true))}),zo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),br(wt(n,1,hu,true),ye(t,2))}),Wo=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return br(wt(n,1,hu,true),T,t)}),Bo=fr(function(n,t){return hu(n)?yt(n,t):[]}),Lo=fr(function(n){return mr(i(n,hu))}),Uo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),
mr(i(n,hu),ye(t,2))}),Co=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return mr(i(n,hu),T,t)}),Do=fr(He),Mo=fr(function(n){var t=n.length,t=1<t?n[t-1]:T,t=typeof t=="function"?(n.pop(),t):T;return Je(n,t)}),To=pe(function(n){function t(t){return ht(t,n)}var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof Un&&Se(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:Qe,args:[t],thisArg:T}),new On(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(T),
n})):this.thru(t)}),$o=Tr(function(n,t,r){oi.call(n,r)?++n[r]:st(n,r,1)}),Fo=Gr(Ne),No=Gr(Pe),Po=Tr(function(n,t,r){oi.call(n,r)?n[r].push(t):st(n,r,[t])}),Zo=fr(function(t,r,e){var u=-1,i=typeof r=="function",o=su(t)?Ku(t.length):[];return uo(t,function(t){o[++u]=i?n(r,t,e):Lt(t,r,e)}),o}),qo=Tr(function(n,t,r){st(n,r,t)}),Vo=Tr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ko=fr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&Oe(n,t[0],t[1])?t=[]:2<r&&Oe(t[0],t[1],t[2])&&(t=[t[0]]),
Xt(n,wt(t,1),[])}),Go=ki||function(){return $n.Date.now()},Ho=fr(function(n,t,r){var e=1;if(r.length)var u=L(r,de(Ho)),e=32|e;return fe(n,e,t,r,u)}),Jo=fr(function(n,t,r){var e=3;if(r.length)var u=L(r,de(Jo)),e=32|e;return fe(t,e,n,r,u)}),Yo=fr(function(n,t){return dt(n,1,t)}),Qo=fr(function(n,t,r){return dt(n,Su(t)||0,r)});cu.Cache=Fn;var Xo=fr(function(t,r){r=1==r.length&&ff(r[0])?c(r[0],k(ye())):c(wt(r,1),k(ye()));var e=r.length;return fr(function(u){for(var i=-1,o=Ci(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);
return n(t,this,u)})}),nf=fr(function(n,t){return fe(n,32,T,t,L(t,de(nf)))}),tf=fr(function(n,t){return fe(n,64,T,t,L(t,de(tf)))}),rf=pe(function(n,t){return fe(n,256,T,T,T,t)}),ef=ee(It),uf=ee(function(n,t){return n>=t}),of=Ut(function(){return arguments}())?Ut:function(n){return yu(n)&&oi.call(n,"callee")&&!bi.call(n,"callee")},ff=Ku.isArray,cf=Vn?k(Vn):Ct,af=zi||Vu,lf=Kn?k(Kn):Dt,sf=Gn?k(Gn):Tt,hf=Hn?k(Hn):Nt,pf=Jn?k(Jn):Pt,_f=Yn?k(Yn):Zt,vf=ee(Kt),gf=ee(function(n,t){return n<=t}),df=$r(function(n,t){
if(ze(t)||su(t))Cr(t,Wu(t),n);else for(var r in t)oi.call(t,r)&&ot(n,r,t[r])}),yf=$r(function(n,t){Cr(t,Bu(t),n)}),bf=$r(function(n,t,r,e){Cr(t,Bu(t),n,e)}),xf=$r(function(n,t,r,e){Cr(t,Wu(t),n,e)}),jf=pe(ht),wf=fr(function(n,t){n=Qu(n);var r=-1,e=t.length,u=2<e?t[2]:T;for(u&&Oe(t[0],t[1],u)&&(e=1);++r<e;)for(var u=t[r],i=Bu(u),o=-1,f=i.length;++o<f;){var c=i[o],a=n[c];(a===T||lu(a,ei[c])&&!oi.call(n,c))&&(n[c]=u[c])}return n}),mf=fr(function(t){return t.push(T,ae),n(Of,T,t)}),Af=Yr(function(n,t,r){
null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),n[t]=r},Tu($u)),Ef=Yr(function(n,t,r){null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),oi.call(n,t)?n[t].push(r):n[t]=[r]},ye),kf=fr(Lt),Sf=$r(function(n,t,r){Yt(n,t,r)}),Of=$r(function(n,t,r,e){Yt(n,t,r,e)}),If=pe(function(n,t){var r={};if(null==n)return r;var e=false;t=c(t,function(t){return t=Sr(t,n),e||(e=1<t.length),t}),Cr(n,ve(n),r),e&&(r=_t(r,7,le));for(var u=t.length;u--;)xr(r,t[u]);return r}),Rf=pe(function(n,t){return null==n?{}:nr(n,t);
}),zf=oe(Wu),Wf=oe(Bu),Bf=qr(function(n,t,r){return t=t.toLowerCase(),n+(r?Cu(t):t)}),Lf=qr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Uf=qr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Cf=Zr("toLowerCase"),Df=qr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Mf=qr(function(n,t,r){return n+(r?" ":"")+$f(t)}),Tf=qr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),$f=Zr("toUpperCase"),Ff=fr(function(t,r){try{return n(t,T,r)}catch(n){return pu(n)?n:new Hu(n)}}),Nf=pe(function(n,t){
return r(t,function(t){t=Me(t),st(n,t,Ho(n[t],n))}),n}),Pf=Hr(),Zf=Hr(true),qf=fr(function(n,t){return function(r){return Lt(r,n,t)}}),Vf=fr(function(n,t){return function(r){return Lt(n,r,t)}}),Kf=Xr(c),Gf=Xr(u),Hf=Xr(h),Jf=re(),Yf=re(true),Qf=Qr(function(n,t){return n+t},0),Xf=ie("ceil"),nc=Qr(function(n,t){return n/t},1),tc=ie("floor"),rc=Qr(function(n,t){return n*t},1),ec=ie("round"),uc=Qr(function(n,t){return n-t},0);return An.after=function(n,t){if(typeof t!="function")throw new ti("Expected a function");
return n=Eu(n),function(){if(1>--n)return t.apply(this,arguments)}},An.ary=eu,An.assign=df,An.assignIn=yf,An.assignInWith=bf,An.assignWith=xf,An.at=jf,An.before=uu,An.bind=Ho,An.bindAll=Nf,An.bindKey=Jo,An.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return ff(n)?n:[n]},An.chain=Ye,An.chunk=function(n,t,r){if(t=(r?Oe(n,t,r):t===T)?1:Ui(Eu(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Ku(Oi(r/t));e<r;)i[u++]=hr(n,e,e+=t);return i},An.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){
var i=n[t];i&&(u[e++]=i)}return u},An.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Ku(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return a(ff(r)?Ur(r):[r],wt(t,1))},An.cond=function(t){var r=null==t?0:t.length,e=ye();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new ti("Expected a function");return[e(n[0]),n[1]]}):[],fr(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e)}})},An.conforms=function(n){return vt(_t(n,1))},An.constant=Tu,
An.countBy=$o,An.create=function(n,t){var r=eo(n);return null==t?r:at(r,t)},An.curry=iu,An.curryRight=ou,An.debounce=fu,An.defaults=wf,An.defaultsDeep=mf,An.defer=Yo,An.delay=Qo,An.difference=wo,An.differenceBy=mo,An.differenceWith=Ao,An.drop=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Eu(t),hr(n,0>t?0:t,e)):[]},An.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Eu(t),t=e-t,hr(n,0,0>t?0:t)):[]},An.dropRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true,true):[];
},An.dropWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true):[]},An.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&Oe(n,t,r)&&(r=0,e=u),u=n.length,r=Eu(r),0>r&&(r=-r>u?0:u+r),e=e===T||e>u?u:Eu(e),0>e&&(e+=u),e=r>e?0:ku(e);r<e;)n[r++]=t;return n},An.filter=function(n,t){return(ff(n)?i:jt)(n,ye(t,3))},An.flatMap=function(n,t){return wt(ru(n,t),1)},An.flatMapDeep=function(n,t){return wt(ru(n,t),$)},An.flatMapDepth=function(n,t,r){return r=r===T?1:Eu(r),
wt(ru(n,t),r)},An.flatten=Ze,An.flattenDeep=function(n){return(null==n?0:n.length)?wt(n,$):[]},An.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===T?1:Eu(t),wt(n,t)):[]},An.flip=function(n){return fe(n,512)},An.flow=Pf,An.flowRight=Zf,An.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},An.functions=function(n){return null==n?[]:Et(n,Wu(n))},An.functionsIn=function(n){return null==n?[]:Et(n,Bu(n))},An.groupBy=Po,An.initial=function(n){
return(null==n?0:n.length)?hr(n,0,-1):[]},An.intersection=Eo,An.intersectionBy=ko,An.intersectionWith=So,An.invert=Af,An.invertBy=Ef,An.invokeMap=Zo,An.iteratee=Fu,An.keyBy=qo,An.keys=Wu,An.keysIn=Bu,An.map=ru,An.mapKeys=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,t(n,e,u),n)}),r},An.mapValues=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,e,t(n,e,u))}),r},An.matches=function(n){return Ht(_t(n,1))},An.matchesProperty=function(n,t){return Jt(n,_t(t,1))},An.memoize=cu,
An.merge=Sf,An.mergeWith=Of,An.method=qf,An.methodOf=Vf,An.mixin=Nu,An.negate=au,An.nthArg=function(n){return n=Eu(n),fr(function(t){return Qt(t,n)})},An.omit=If,An.omitBy=function(n,t){return Lu(n,au(ye(t)))},An.once=function(n){return uu(2,n)},An.orderBy=function(n,t,r,e){return null==n?[]:(ff(t)||(t=null==t?[]:[t]),r=e?T:r,ff(r)||(r=null==r?[]:[r]),Xt(n,t,r))},An.over=Kf,An.overArgs=Xo,An.overEvery=Gf,An.overSome=Hf,An.partial=nf,An.partialRight=tf,An.partition=Vo,An.pick=Rf,An.pickBy=Lu,An.property=Zu,
An.propertyOf=function(n){return function(t){return null==n?T:kt(n,t)}},An.pull=Oo,An.pullAll=Ke,An.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,ye(r,2)):n},An.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,T,r):n},An.pullAt=Io,An.range=Jf,An.rangeRight=Yf,An.rearg=rf,An.reject=function(n,t){return(ff(n)?i:jt)(n,au(ye(t,3)))},An.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ye(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),
u.push(e))}return ur(n,u),r},An.rest=function(n,t){if(typeof n!="function")throw new ti("Expected a function");return t=t===T?t:Eu(t),fr(n,t)},An.reverse=Ge,An.sampleSize=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:Eu(t),(ff(n)?et:ar)(n,t)},An.set=function(n,t,r){return null==n?n:lr(n,t,r)},An.setWith=function(n,t,r,e){return e=typeof e=="function"?e:T,null==n?n:lr(n,t,r,e)},An.shuffle=function(n){return(ff(n)?ut:sr)(n)},An.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&Oe(n,t,r)?(t=0,
r=e):(t=null==t?0:Eu(t),r=r===T?e:Eu(r)),hr(n,t,r)):[]},An.sortBy=Ko,An.sortedUniq=function(n){return n&&n.length?gr(n):[]},An.sortedUniqBy=function(n,t){return n&&n.length?gr(n,ye(t,2)):[]},An.split=function(n,t,r){return r&&typeof r!="number"&&Oe(n,t,r)&&(t=r=T),r=r===T?4294967295:r>>>0,r?(n=Iu(n))&&(typeof t=="string"||null!=t&&!hf(t))&&(t=yr(t),!t&&Rn.test(n))?Or(M(n),0,r):n.split(t,r):[]},An.spread=function(t,r){if(typeof t!="function")throw new ti("Expected a function");return r=null==r?0:Ui(Eu(r),0),
fr(function(e){var u=e[r];return e=Or(e,0,r),u&&a(e,u),n(t,this,e)})},An.tail=function(n){var t=null==n?0:n.length;return t?hr(n,1,t):[]},An.take=function(n,t,r){return n&&n.length?(t=r||t===T?1:Eu(t),hr(n,0,0>t?0:t)):[]},An.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Eu(t),t=e-t,hr(n,0>t?0:t,e)):[]},An.takeRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),false,true):[]},An.takeWhile=function(n,t){return n&&n.length?jr(n,ye(t,3)):[]},An.tap=function(n,t){return t(n),
n},An.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ti("Expected a function");return du(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),fu(n,t,{leading:e,maxWait:t,trailing:u})},An.thru=Qe,An.toArray=mu,An.toPairs=zf,An.toPairsIn=Wf,An.toPath=function(n){return ff(n)?c(n,Me):wu(n)?[n]:Ur(jo(Iu(n)))},An.toPlainObject=Ou,An.transform=function(n,t,e){var u=ff(n),i=u||af(n)||_f(n);if(t=ye(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:du(n)&&_u(o)?eo(di(n)):{};
}return(i?r:mt)(n,function(n,r,u){return t(e,n,r,u)}),e},An.unary=function(n){return eu(n,1)},An.union=Ro,An.unionBy=zo,An.unionWith=Wo,An.uniq=function(n){return n&&n.length?br(n):[]},An.uniqBy=function(n,t){return n&&n.length?br(n,ye(t,2)):[]},An.uniqWith=function(n,t){return t=typeof t=="function"?t:T,n&&n.length?br(n,T,t):[]},An.unset=function(n,t){return null==n||xr(n,t)},An.unzip=He,An.unzipWith=Je,An.update=function(n,t,r){return null==n?n:lr(n,t,kr(r)(kt(n,t)),void 0)},An.updateWith=function(n,t,r,e){
return e=typeof e=="function"?e:T,null!=n&&(n=lr(n,t,kr(r)(kt(n,t)),e)),n},An.values=Uu,An.valuesIn=function(n){return null==n?[]:S(n,Bu(n))},An.without=Bo,An.words=Mu,An.wrap=function(n,t){return nf(kr(t),n)},An.xor=Lo,An.xorBy=Uo,An.xorWith=Co,An.zip=Do,An.zipObject=function(n,t){return Ar(n||[],t||[],ot)},An.zipObjectDeep=function(n,t){return Ar(n||[],t||[],lr)},An.zipWith=Mo,An.entries=zf,An.entriesIn=Wf,An.extend=yf,An.extendWith=bf,Nu(An,An),An.add=Qf,An.attempt=Ff,An.camelCase=Bf,An.capitalize=Cu,
An.ceil=Xf,An.clamp=function(n,t,r){return r===T&&(r=t,t=T),r!==T&&(r=Su(r),r=r===r?r:0),t!==T&&(t=Su(t),t=t===t?t:0),pt(Su(n),t,r)},An.clone=function(n){return _t(n,4)},An.cloneDeep=function(n){return _t(n,5)},An.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,5,t)},An.cloneWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,4,t)},An.conformsTo=function(n,t){return null==t||gt(n,t,Wu(t))},An.deburr=Du,An.defaultTo=function(n,t){return null==n||n!==n?t:n},An.divide=nc,An.endsWith=function(n,t,r){
n=Iu(n),t=yr(t);var e=n.length,e=r=r===T?e:pt(Eu(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},An.eq=lu,An.escape=function(n){return(n=Iu(n))&&H.test(n)?n.replace(K,nt):n},An.escapeRegExp=function(n){return(n=Iu(n))&&en.test(n)?n.replace(rn,"\\$&"):n},An.every=function(n,t,r){var e=ff(n)?u:bt;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.find=Fo,An.findIndex=Ne,An.findKey=function(n,t){return p(n,ye(t,3),mt)},An.findLast=No,An.findLastIndex=Pe,An.findLastKey=function(n,t){return p(n,ye(t,3),At);
},An.floor=tc,An.forEach=nu,An.forEachRight=tu,An.forIn=function(n,t){return null==n?n:oo(n,ye(t,3),Bu)},An.forInRight=function(n,t){return null==n?n:fo(n,ye(t,3),Bu)},An.forOwn=function(n,t){return n&&mt(n,ye(t,3))},An.forOwnRight=function(n,t){return n&&At(n,ye(t,3))},An.get=Ru,An.gt=ef,An.gte=uf,An.has=function(n,t){return null!=n&&we(n,t,Rt)},An.hasIn=zu,An.head=qe,An.identity=$u,An.includes=function(n,t,r,e){return n=su(n)?n:Uu(n),r=r&&!e?Eu(r):0,e=n.length,0>r&&(r=Ui(e+r,0)),ju(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<v(n,t,r);
},An.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Eu(r),0>r&&(r=Ui(e+r,0)),v(n,t,r)):-1},An.inRange=function(n,t,r){return t=Au(t),r===T?(r=t,t=0):r=Au(r),n=Su(n),n>=Ci(t,r)&&n<Ui(t,r)},An.invoke=kf,An.isArguments=of,An.isArray=ff,An.isArrayBuffer=cf,An.isArrayLike=su,An.isArrayLikeObject=hu,An.isBoolean=function(n){return true===n||false===n||yu(n)&&"[object Boolean]"==Ot(n)},An.isBuffer=af,An.isDate=lf,An.isElement=function(n){return yu(n)&&1===n.nodeType&&!xu(n)},An.isEmpty=function(n){
if(null==n)return true;if(su(n)&&(ff(n)||typeof n=="string"||typeof n.splice=="function"||af(n)||_f(n)||of(n)))return!n.length;var t=vo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(ze(n))return!Vt(n).length;for(var r in n)if(oi.call(n,r))return false;return true},An.isEqual=function(n,t){return Mt(n,t)},An.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:T)?r(n,t):T;return e===T?Mt(n,t,T,r):!!e},An.isError=pu,An.isFinite=function(n){return typeof n=="number"&&Wi(n)},An.isFunction=_u,
An.isInteger=vu,An.isLength=gu,An.isMap=sf,An.isMatch=function(n,t){return n===t||$t(n,t,xe(t))},An.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:T,$t(n,t,xe(t),r)},An.isNaN=function(n){return bu(n)&&n!=+n},An.isNative=function(n){if(go(n))throw new Hu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ft(n)},An.isNil=function(n){return null==n},An.isNull=function(n){return null===n},An.isNumber=bu,An.isObject=du,An.isObjectLike=yu,An.isPlainObject=xu,An.isRegExp=hf,
An.isSafeInteger=function(n){return vu(n)&&-9007199254740991<=n&&9007199254740991>=n},An.isSet=pf,An.isString=ju,An.isSymbol=wu,An.isTypedArray=_f,An.isUndefined=function(n){return n===T},An.isWeakMap=function(n){return yu(n)&&"[object WeakMap]"==vo(n)},An.isWeakSet=function(n){return yu(n)&&"[object WeakSet]"==Ot(n)},An.join=function(n,t){return null==n?"":Bi.call(n,t)},An.kebabCase=Lf,An.last=Ve,An.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==T&&(u=Eu(r),u=0>u?Ui(e+u,0):Ci(u,e-1)),
t===t){for(r=u+1;r--&&n[r]!==t;);n=r}else n=_(n,d,u,true);return n},An.lowerCase=Uf,An.lowerFirst=Cf,An.lt=vf,An.lte=gf,An.max=function(n){return n&&n.length?xt(n,$u,It):T},An.maxBy=function(n,t){return n&&n.length?xt(n,ye(t,2),It):T},An.mean=function(n){return y(n,$u)},An.meanBy=function(n,t){return y(n,ye(t,2))},An.min=function(n){return n&&n.length?xt(n,$u,Kt):T},An.minBy=function(n,t){return n&&n.length?xt(n,ye(t,2),Kt):T},An.stubArray=qu,An.stubFalse=Vu,An.stubObject=function(){return{}},An.stubString=function(){
return""},An.stubTrue=function(){return true},An.multiply=rc,An.nth=function(n,t){return n&&n.length?Qt(n,Eu(t)):T},An.noConflict=function(){return $n._===this&&($n._=si),this},An.noop=Pu,An.now=Go,An.pad=function(n,t,r){n=Iu(n);var e=(t=Eu(t))?D(n):0;return!t||e>=t?n:(t=(t-e)/2,ne(Ii(t),r)+n+ne(Oi(t),r))},An.padEnd=function(n,t,r){n=Iu(n);var e=(t=Eu(t))?D(n):0;return t&&e<t?n+ne(t-e,r):n},An.padStart=function(n,t,r){n=Iu(n);var e=(t=Eu(t))?D(n):0;return t&&e<t?ne(t-e,r)+n:n},An.parseInt=function(n,t,r){
return r||null==t?t=0:t&&(t=+t),Mi(Iu(n).replace(on,""),t||0)},An.random=function(n,t,r){if(r&&typeof r!="boolean"&&Oe(n,t,r)&&(t=r=T),r===T&&(typeof t=="boolean"?(r=t,t=T):typeof n=="boolean"&&(r=n,n=T)),n===T&&t===T?(n=0,t=1):(n=Au(n),t===T?(t=n,n=0):t=Au(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Ti(),Ci(n+r*(t-n+Cn("1e-"+((r+"").length-1))),t)):ir(n,t)},An.reduce=function(n,t,r){var e=ff(n)?l:j,u=3>arguments.length;return e(n,ye(t,4),r,u,uo)},An.reduceRight=function(n,t,r){var e=ff(n)?s:j,u=3>arguments.length;
return e(n,ye(t,4),r,u,io)},An.repeat=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:Eu(t),or(Iu(n),t)},An.replace=function(){var n=arguments,t=Iu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},An.result=function(n,t,r){t=Sr(t,n);var e=-1,u=t.length;for(u||(u=1,n=T);++e<u;){var i=null==n?T:n[Me(t[e])];i===T&&(e=u,i=r),n=_u(i)?i.call(n):i}return n},An.round=ec,An.runInContext=x,An.sample=function(n){return(ff(n)?Qn:cr)(n)},An.size=function(n){if(null==n)return 0;if(su(n))return ju(n)?D(n):n.length;
var t=vo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Vt(n).length},An.snakeCase=Df,An.some=function(n,t,r){var e=ff(n)?h:pr;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.sortedIndex=function(n,t){return _r(n,t)},An.sortedIndexBy=function(n,t,r){return vr(n,t,ye(r,2))},An.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=_r(n,t);if(e<r&&lu(n[e],t))return e}return-1},An.sortedLastIndex=function(n,t){return _r(n,t,true)},An.sortedLastIndexBy=function(n,t,r){return vr(n,t,ye(r,2),true);
},An.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=_r(n,t,true)-1;if(lu(n[r],t))return r}return-1},An.startCase=Mf,An.startsWith=function(n,t,r){return n=Iu(n),r=null==r?0:pt(Eu(r),0,n.length),t=yr(t),n.slice(r,r+t.length)==t},An.subtract=uc,An.sum=function(n){return n&&n.length?m(n,$u):0},An.sumBy=function(n,t){return n&&n.length?m(n,ye(t,2)):0},An.template=function(n,t,r){var e=An.templateSettings;r&&Oe(n,t,r)&&(t=T),n=Iu(n),t=bf({},t,e,ce),r=bf({},t.imports,e.imports,ce);var u,i,o=Wu(r),f=S(r,o),c=0;
r=t.interpolate||jn;var a="__p+='";r=Xu((t.escape||jn).source+"|"+r.source+"|"+(r===Q?pn:jn).source+"|"+(t.evaluate||jn).source+"|$","g");var l=oi.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/[\r\n]/g," ")+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(wn,z),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=oi.call(t,"variable")&&t.variable)||(a="with(obj){"+a+"}"),
a=(i?a.replace(P,""):a).replace(Z,"$1").replace(q,"$1;"),a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Ff(function(){return Ju(o,l+"return "+a).apply(T,f)}),t.source=a,pu(t))throw t;return t},An.times=function(n,t){if(n=Eu(n),1>n||9007199254740991<n)return[];var r=4294967295,e=Ci(n,4294967295);for(t=ye(t),n-=4294967295,e=A(e,t);++r<n;)t(r);return e},An.toFinite=Au,
An.toInteger=Eu,An.toLength=ku,An.toLower=function(n){return Iu(n).toLowerCase()},An.toNumber=Su,An.toSafeInteger=function(n){return n?pt(Eu(n),-9007199254740991,9007199254740991):0===n?n:0},An.toString=Iu,An.toUpper=function(n){return Iu(n).toUpperCase()},An.trim=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(un,""):n&&(t=yr(t))?(n=M(n),r=M(t),t=I(n,r),r=R(n,r)+1,Or(n,t,r).join("")):n},An.trimEnd=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(fn,""):n&&(t=yr(t))?(n=M(n),t=R(n,M(t))+1,
Or(n,0,t).join("")):n},An.trimStart=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(on,""):n&&(t=yr(t))?(n=M(n),t=I(n,M(t)),Or(n,t).join("")):n},An.truncate=function(n,t){var r=30,e="...";if(du(t))var u="separator"in t?t.separator:u,r="length"in t?Eu(t.length):r,e="omission"in t?yr(t.omission):e;n=Iu(n);var i=n.length;if(Rn.test(n))var o=M(n),i=o.length;if(r>=i)return n;if(i=r-D(e),1>i)return e;if(r=o?Or(o,0,i).join(""):n.slice(0,i),u===T)return r+e;if(o&&(i+=r.length-i),hf(u)){if(n.slice(i).search(u)){
var f=r;for(u.global||(u=Xu(u.source,Iu(_n.exec(u))+"g")),u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===T?i:c)}}else n.indexOf(yr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},An.unescape=function(n){return(n=Iu(n))&&G.test(n)?n.replace(V,tt):n},An.uniqueId=function(n){var t=++fi;return Iu(n)+t},An.upperCase=Tf,An.upperFirst=$f,An.each=nu,An.eachRight=tu,An.first=qe,Nu(An,function(){var n={};return mt(An,function(t,r){oi.call(An.prototype,r)||(n[r]=t)}),n}(),{chain:false
}),An.VERSION="4.17.15",r("bind bindKey curry curryRight partial partialRight".split(" "),function(n){An[n].placeholder=An}),r(["drop","take"],function(n,t){Un.prototype[n]=function(r){r=r===T?1:Ui(Eu(r),0);var e=this.__filtered__&&!t?new Un(this):this.clone();return e.__filtered__?e.__takeCount__=Ci(r,e.__takeCount__):e.__views__.push({size:Ci(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Un.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=1==r||3==r;Un.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:ye(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){var r="take"+(t?"Right":"");Un.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Un.prototype[n]=function(){return this.__filtered__?new Un(this):this[r](1)}}),Un.prototype.compact=function(){return this.filter($u)},Un.prototype.find=function(n){
return this.filter(n).head()},Un.prototype.findLast=function(n){return this.reverse().find(n)},Un.prototype.invokeMap=fr(function(n,t){return typeof n=="function"?new Un(this):this.map(function(r){return Lt(r,n,t)})}),Un.prototype.reject=function(n){return this.filter(au(ye(n)))},Un.prototype.slice=function(n,t){n=Eu(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Un(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==T&&(t=Eu(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Un.prototype.takeRightWhile=function(n){
return this.reverse().takeWhile(n).reverse()},Un.prototype.toArray=function(){return this.take(4294967295)},mt(Un.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=An[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(An.prototype[t]=function(){function t(n){return n=u.apply(An,a([n],f)),e&&h?n[0]:n}var o=this.__wrapped__,f=e?[1]:arguments,c=o instanceof Un,l=f[0],s=c||ff(o);s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false);var h=this.__chain__,p=!!this.__actions__.length,l=i&&!h,c=c&&!p;
return!i&&s?(o=c?o:new Un(this),o=n.apply(o,f),o.__actions__.push({func:Qe,args:[t],thisArg:T}),new On(o,h)):l&&c?n.apply(this,f):(o=this.thru(t),l?e?o.value()[0]:o.value():o)})}),r("pop push shift sort splice unshift".split(" "),function(n){var t=ri[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);An.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(ff(u)?u:[],n)}return this[r](function(r){return t.apply(ff(r)?r:[],n)});
}}),mt(Un.prototype,function(n,t){var r=An[t];if(r){var e=r.name+"";oi.call(Gi,e)||(Gi[e]=[]),Gi[e].push({name:t,func:r})}}),Gi[Jr(T,2).name]=[{name:"wrapper",func:T}],Un.prototype.clone=function(){var n=new Un(this.__wrapped__);return n.__actions__=Ur(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Ur(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Ur(this.__views__),n},Un.prototype.reverse=function(){if(this.__filtered__){var n=new Un(this);
n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Un.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=ff(t),u=0>r,i=e?t.length:0;n=i;for(var o=this.__views__,f=0,c=-1,a=o.length;++c<a;){var l=o[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=Ci(n,f+s);break;case"takeRight":f=Ui(f,n-s)}}if(n={start:f,end:n},o=n.start,f=n.end,n=f-o,o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Ci(n,this.__takeCount__),!e||!u&&i==n&&l==n)return wr(t,this.__actions__);
e=[];n:for(;n--&&a<l;){for(o+=r,u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},An.prototype.at=To,An.prototype.chain=function(){return Ye(this)},An.prototype.commit=function(){return new On(this.value(),this.__chain__)},An.prototype.next=function(){this.__values__===T&&(this.__values__=mu(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?T:this.__values__[this.__index__++]}},An.prototype.plant=function(n){
for(var t,r=this;r instanceof En;){var e=Fe(r);e.__index__=0,e.__values__=T,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},An.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Un?(this.__actions__.length&&(n=new Un(this)),n=n.reverse(),n.__actions__.push({func:Qe,args:[Ge],thisArg:T}),new On(n,this.__chain__)):this.thru(Ge)},An.prototype.toJSON=An.prototype.valueOf=An.prototype.value=function(){return wr(this.__wrapped__,this.__actions__)},An.prototype.first=An.prototype.head,
wi&&(An.prototype[wi]=Xe),An}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($n._=rt, define(function(){return rt})):Nn?((Nn.exports=rt)._=rt,Fn._=rt):$n._=rt}).call(this);

/*
// httprequest
// How to use:

// create request with its properties
var request = new httpRequest();
request.method = "GET";
request.url = "https://example.com/api?parameter=value";

// create callback for success containing the response
request.success = function(response) {
    console.log(response);
};

// and a fail callback containing the error
request.fail = function(error) {
    console.log(error);
};

// and finally send it away
request.send();
*/
function httprequest(){var ajax=null,response=null,self=this;this.method=null;this.url=null;this.data=null;this.send=function(){ajax.open(this.method,this.url,true);ajax.send(this.data)};if(window.XMLHttpRequest){ajax=new XMLHttpRequest}else if(window.ActiveXObject){try{ajax=new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){try{ajax=new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(error){self.fail("not supported")}}}if(ajax==null){return false}ajax.onreadystatechange=function(){if(this.readyState==4){if(this.status==200){self.success(this.responseText)}else{self.fail(this.status+" - "+this.statusText)}}}}

// simple vector class
class Vector {
    constructor (x, y) {
        this.x = isNaN(x) ? 0 : x;
        this.y = isNaN(y) ? 0 : y;
    }

    add (v) {
        this.x += isNaN(v) ? v.x : v;
        this.y += isNaN(v) ? v.y : v;
        return this
    }

    sub (v) {
        this.x -= isNaN(v) ? v.x : v;
        this.y -= isNaN(v) ? v.y : v;
        return this
    }

    mul (v) {
        this.x *= isNaN(v) ? v.x : v;
        this.y *= isNaN(v) ? v.y : v;
        return this
    }

    div (v) {
        this.x /= isNaN(v) ? v.x : v;
        this.y /= isNaN(v) ? v.y : v;
        return this
    }

    clone () {
        return new Vector(this.x, this.y);
    }

    dist (v) {
        let dx = this.x - v.x;
        let dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    clamp (min, max) {
        this.x = Math.min(Math.max(this.x, min), max);
        this.y = Math.min(Math.max(this.y, min), max);
        return this
    }

    len() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    lensq() {
        return (this.x * this.x + this.y * this.y);
    }

    normalize () {
        let mag = Math.sqrt(this.x * this.x + this.y * this.y);
        this.x = mag === 0 ? 0 : this.x / mag;
        this.y = mag === 0 ? 0 : this.y / mag;
        return this
    }
}

// pixi-tween - v0.7.1 * Compiled Fri, 16 Feb 2018 10:50:34 UTC * pixi-tween is licensed under the MIT License. http://www.opensource.org/licenses/mit-license
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.__pixiTween = factory());
}(this, (function () { 'use strict';

    if (typeof PIXI === 'undefined') { throw 'PixiJS is required'; }

    /* eslint-disable no-mixed-operators */

    /**
     * @namespace PIXI.tween.Easing
     */
    var Easing = {
        /**
         * linear tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of linear easing function
         */
        linear: function linear() {
            return function linear(t) {
                return t;
            };
        },


        /**
         * inQuad tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inQuad easing function
         */
        inQuad: function inQuad() {
            return function inQuad(t) {
                return t * t;
            };
        },


        /**
         * outQuad tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of outQuad easing function
         */
        outQuad: function outQuad() {
            return function outQuad(t) {
                return t * (2 - t);
            };
        },


        /**
         * inOutQuad tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inOutQuad easing function
         */
        inOutQuad: function inOutQuad() {
            return function inOutQuad(t) {
                t *= 2;
                if (t < 1) return 0.5 * t * t;

                return -0.5 * (--t * (t - 2) - 1);
            };
        },


        /**
         * inCubic tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inCubic easing function
         */
        inCubic: function inCubic() {
            return function inCubic(t) {
                return t * t * t;
            };
        },


        /**
         * outCubic tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of outCubic easing function
         */
        outCubic: function outCubic() {
            return function outCubic(t) {
                return --t * t * t + 1;
            };
        },


        /**
         * inOutCubic tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inOutCubic easing function
         */
        inOutCubic: function inOutCubic() {
            return function inOutCubic(t) {
                t *= 2;
                if (t < 1) return 0.5 * t * t * t;
                t -= 2;

                return 0.5 * (t * t * t + 2);
            };
        },


        /**
         * inQuart tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inQuart easing function
         */
        inQuart: function inQuart() {
            return function inQuart(t) {
                return t * t * t * t;
            };
        },


        /**
         * outQuart tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of outQuart easing function
         */
        outQuart: function outQuart() {
            return function outQuart(t) {
                return 1 - --t * t * t * t;
            };
        },


        /**
         * inOutQuart tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inOutQuart easing function
         */
        inOutQuart: function inOutQuart() {
            return function inOutQuart(t) {
                t *= 2;
                if (t < 1) return 0.5 * t * t * t * t;
                t -= 2;

                return -0.5 * (t * t * t * t - 2);
            };
        },


        /**
         * inQuint tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inQuint easing function
         */
        inQuint: function inQuint() {
            return function inQuint(t) {
                return t * t * t * t * t;
            };
        },


        /**
         * outQuint tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of outQuint easing function
         */
        outQuint: function outQuint() {
            return function outQuint(t) {
                return --t * t * t * t * t + 1;
            };
        },


        /**
         * inOutQuint tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inOutQuint easing function
         */
        inOutQuint: function inOutQuint() {
            return function inOutQuint(t) {
                t *= 2;
                if (t < 1) return 0.5 * t * t * t * t * t;
                t -= 2;

                return 0.5 * (t * t * t * t * t + 2);
            };
        },


        /**
         * inSine tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inSine easing function
         */
        inSine: function inSine() {
            return function inSine(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            };
        },


        /**
         * outSine tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of outSine easing function
         */
        outSine: function outSine() {
            return function outSine(t) {
                return Math.sin(t * Math.PI / 2);
            };
        },


        /**
         * inOutSine tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inOutSine easing function
         */
        inOutSine: function inOutSine() {
            return function inOutSine(t) {
                return 0.5 * (1 - Math.cos(Math.PI * t));
            };
        },


        /**
         * inExpo tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inExpo easing function
         */
        inExpo: function inExpo() {
            return function inExpo(t) {
                return t === 0 ? 0 : Math.pow(1024, t - 1);
            };
        },


        /**
         * outExpo tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of outExpo easing function
         */
        outExpo: function outExpo() {
            return function outExpo(t) {
                return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            };
        },


        /**
         * inOutExpo tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inOutExpo easing function
         */
        inOutExpo: function inOutExpo() {
            return function inOutExpo(t) {
                if (t === 0) return 0;
                if (t === 1) return 1;
                t *= 2;
                if (t < 1) return 0.5 * Math.pow(1024, t - 1);

                return 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
            };
        },


        /**
         * inCirc tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inCirc easing function
         */
        inCirc: function inCirc() {
            return function inCirc(t) {
                return 1 - Math.sqrt(1 - t * t);
            };
        },


        /**
         * outCirc tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of outCirc easing function
         */
        outCirc: function outCirc() {
            return function outCirc(t) {
                return Math.sqrt(1 - --t * t);
            };
        },


        /**
         * inOutCirc tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inOutCirc easing function
         */
        inOutCirc: function inOutCirc() {
            return function inOutCirc(t) {
                t *= 2;
                if (t < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);

                return 0.5 * (Math.sqrt(1 - (t - 2) * (t - 2)) + 1);
            };
        },


        /**
         * inElastic tween
         *
         * @memberof PIXI.tween.Easing
         * @param {number} [a=0.1] - a
         * @param {number} [p=0.4] - p
         * @returns {function} - New instance of inElastic easing function
         */
        inElastic: function inElastic() {
            var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
            var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.4;

            return function inElastic(t) {
                var s = void 0;

                if (t === 0) return 0;
                if (t === 1) return 1;
                if (!a || a < 1) {
                    a = 1;s = p / 4;
                } else {
                    s = p * Math.asin(1 / a) / (2 * Math.PI);
                }

                return -(a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - s) * (2 * Math.PI) / p));
            };
        },


        /**
         * outElastic tween
         *
         * @memberof PIXI.tween.Easing
         * @param {number} [a=0.1] - a
         * @param {number} [p=0.4] - p
         * @returns {function} - New instance of outElastic easing function
         */
        outElastic: function outElastic() {
            var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
            var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;

            return function outElastic(t) {
                var s = void 0;

                if (t === 0) return 0;
                if (t === 1) return 1;
                if (!a || a < 1) {
                    a = 1;s = p / 4;
                } else {
                    s = p * Math.asin(1 / a) / (2 * Math.PI);
                }

                return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
            };
        },


        /**
         * inOutElastic tween
         *
         * @memberof PIXI.tween.Easing
         * @param {number} [a=0.1] - a
         * @param {number} [p=0.4] - p
         * @returns {function} - New instance of inOutElastic easing function
         */
        inOutElastic: function inOutElastic() {
            var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
            var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.4;

            return function inOutElastic(t) {
                var s = void 0;

                if (t === 0) return 0;
                if (t === 1) return 1;
                if (!a || a < 1) {
                    a = 1;s = p / 4;
                } else {
                    s = p * Math.asin(1 / a) / (2 * Math.PI);
                }
                t *= 2;
                if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - s) * (2 * Math.PI) / p));

                return a * Math.pow(2, -10 * (t - 1)) * Math.sin((t - 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
            };
        },


        /**
         * inBack tween
         *
         * @memberof PIXI.tween.Easing
         * @param {number} [v=1.70158] - v
         * @returns {function} - New instance of inBack easing function
         */
        inBack: function inBack() {
            var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.70158;

            return function inBack(t) {
                var s = v;

                return t * t * ((s + 1) * t - s);
            };
        },


        /**
         * outBack tween
         *
         * @memberof PIXI.tween.Easing
         * @param {number} [v=1.70158] - v
         * @returns {function} - New instance of outBack easing function
         */
        outBack: function outBack() {
            var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.70158;

            return function outBack(t) {
                var s = v;

                return --t * t * ((s + 1) * t + s) + 1;
            };
        },


        /**
         * inOutBack tween
         *
         * @memberof PIXI.tween.Easing
         * @param {number} [v=1.70158] - v
         * @returns {function} - New instance of inOutBack easing function
         */
        inOutBack: function inOutBack() {
            var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.70158;

            return function inOutBack(t) {
                var s = v * 1.525;

                t *= 2;
                if (t < 1) return 0.5 * (t * t * ((s + 1) * t - s));

                return 0.5 * ((t - 2) * (t - 2) * ((s + 1) * (t - 2) + s) + 2);
            };
        },


        /**
         * inBounce tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inBounce easing function
         */
        inBounce: function inBounce() {
            return function inBounce(t) {
                return 1 - Easing.outBounce()(1 - t);
            };
        },


        /**
         * outBounce tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of outBounce easing function
         */
        outBounce: function outBounce() {
            return function outBounce(t) {
                if (t < 1 / 2.75) {
                    return 7.5625 * t * t;
                } else if (t < 2 / 2.75) {
                    t = t - 1.5 / 2.75;

                    return 7.5625 * t * t + 0.75;
                } else if (t < 2.5 / 2.75) {
                    t = t - 2.25 / 2.75;

                    return 7.5625 * t * t + 0.9375;
                }
                t -= 2.625 / 2.75;

                return 7.5625 * t * t + 0.984375;
            };
        },


        /**
         * inOutBounce tween
         *
         * @memberof PIXI.tween.Easing
         * @returns {function} - New instance of inOutBounce easing function
         */
        inOutBounce: function inOutBounce() {
            return function inOutBounce(t) {
                if (t < 0.5) return Easing.inBounce()(t * 2) * 0.5;

                return Easing.outBounce()(t * 2 - 1) * 0.5 + 0.5;
            };
        }
    };

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };





    var asyncGenerator = function () {
        function AwaitValue(value) {
            this.value = value;
        }

        function AsyncGenerator(gen) {
            var front, back;

            function send(key, arg) {
                return new Promise(function (resolve, reject) {
                    var request = {
                        key: key,
                        arg: arg,
                        resolve: resolve,
                        reject: reject,
                        next: null
                    };

                    if (back) {
                        back = back.next = request;
                    } else {
                        front = back = request;
                        resume(key, arg);
                    }
                });
            }

            function resume(key, arg) {
                try {
                    var result = gen[key](arg);
                    var value = result.value;

                    if (value instanceof AwaitValue) {
                        Promise.resolve(value.value).then(function (arg) {
                            resume("next", arg);
                        }, function (arg) {
                            resume("throw", arg);
                        });
                    } else {
                        settle(result.done ? "return" : "normal", result.value);
                    }
                } catch (err) {
                    settle("throw", err);
                }
            }

            function settle(type, value) {
                switch (type) {
                    case "return":
                        front.resolve({
                            value: value,
                            done: true
                        });
                        break;

                    case "throw":
                        front.reject(value);
                        break;

                    default:
                        front.resolve({
                            value: value,
                            done: false
                        });
                        break;
                }

                front = front.next;

                if (front) {
                    resume(front.key, front.arg);
                } else {
                    back = null;
                }
            }

            this._invoke = send;

            if (typeof gen.return !== "function") {
                this.return = undefined;
            }
        }

        if (typeof Symbol === "function" && Symbol.asyncIterator) {
            AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
                return this;
            };
        }

        AsyncGenerator.prototype.next = function (arg) {
            return this._invoke("next", arg);
        };

        AsyncGenerator.prototype.throw = function (arg) {
            return this._invoke("throw", arg);
        };

        AsyncGenerator.prototype.return = function (arg) {
            return this._invoke("return", arg);
        };

        return {
            wrap: function (fn) {
                return function () {
                    return new AsyncGenerator(fn.apply(this, arguments));
                };
            },
            await: function (value) {
                return new AwaitValue(value);
            }
        };
    }();





    var classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    var createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();









    var inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };











    var possibleConstructorReturn = function (self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };

    /**
     * Fired when the tween starts. If the tween has a delay, this event fires when the delay time is ended.
     *
     * @event PIXI.tween.Tween#start
     */

    /**
     * Fired when the tween is over. If the .loop option it's true, this event never will be fired.
     * If the tween has an .repeat number, this event will be fired just when all the repeats are done.
     *
     * @event PIXI.tween.Tween#end
     */

    /**
     * Fired at every repeat cycle, if your tween has .repeat=5 this events will be fired 5 times.
     *
     * @event PIXI.tween.Tween#repeat
     * @param {number} repeat - Number of times this tween has repeated
     */

    /**
     * Fired at each frame
     *
     * @event PIXI.tween.Tween#update
     * @param {number} progress - 0-1 decimal value representing proportion of completion.
     * @param {number} elapsedTime - How much time in ms that has passed since the tween started.
     */

    /**
     * Fired only when it's used the .stop() method. It's useful to know when a timer is cancelled.
     *
     * @event PIXI.tween.Tween#stop
     */

    /**
     * If the pingPong option it's true, this events will be fired when the tweens returns back.
     *
     * @event PIXI.tween.Tween#pingpong
     */

    /**
     * Quickly configure a tween via an object / json
     *
     * @typedef {Object} PIXI.tween.Tween#tweenConfig
     * @property {Object} [from]
     * @property {Object} [to]
     * @property {number} [delay]
     * @property {function} [easing]
     * @property {boolean} [expire]
     * @property {boolean} [loop]
     * @property {Object} [path]
     * @property {boolean} [pathReverse]
     * @property {boolean} [pingPong]
     * @property {number} [repeat]
     * @property {number} [time]
     * @property {number} [speed]
     * @property {Object} [on]
     * @property {function} [on.end]
     * @property {function} [on.pingpong]
     * @property {function} [on.repeat]
     * @property {function} [on.start]
     * @property {function} [on.stop]
     * @property {function} [on.update]
     */

    /**
     * Tween class
     *
     * @class
     * @memberof PIXI.tween
     */

    var Tween = function (_PIXI$utils$EventEmit) {
        inherits(Tween, _PIXI$utils$EventEmit);

        /**
         * @param {*} target - Target object to tween
         * @param {PIXI.tween.TweenManager} [manager] - Tween manager to handle this tween
         * @param {PIXI.tween.Tween#tweenConfig} [config] - object to configure the tween
         */
        function Tween(target, manager, config) {
            classCallCheck(this, Tween);

            var _this = possibleConstructorReturn(this, (Tween.__proto__ || Object.getPrototypeOf(Tween)).call(this));

            _this.target = target;
            if (manager) {
                _this.addTo(manager);
            }

            _this.clear();
            if (config) {
                _this.config(config);
            }
            return _this;
        }

        /**
         * Clears all class data, meaning that the tween will now do nothing if start is called
         *
         * @returns {PIXI.tween.Tween} - This tween instance
         */


        createClass(Tween, [{
            key: 'clear',
            value: function clear() {
                /** @member {PIXI.tween.Easing} - Either an easing function from PIXI.tween.Easing or a custom easing */
                this.easing = Easing.linear();

                /** @member {boolean} - Set true if you want to delete this instance when the animation it's done */
                this.expire = false;

                /** @member {number} - Times to repeat this tween */
                this.repeat = 0;

                /** @member {boolean} - Set true if you want to loop this tween forever */
                this.loop = false;

                /** @member {number} - Set a delay time in milliseconds before the tween starts */
                this.delay = 0;

                /** @member {boolean} - Set true to repeat the tween from the end point back to the start point */
                this.pingPong = false;

                /** @member {PIXI.tween.TweenPath} - Set an instance of TweenPath to animate an object along the path */
                this.path = null;

                /** @member {boolean} - Set true to reverse the direction along the path */
                this.pathReverse = false;

                /** @member {number} - How long to animate this tween over */
                this.time = 0;

                /** @member {number} - The speed that the tween will play at. 0 effectively pauses it, 1 is normal speed */
                this.speed = 1;

                this._active = false;
                this._isStarted = false;
                this._isEnded = false;

                this._to = {};
                this._from = {};
                this._resetFromOnStart = false;
                this._delayTime = 0;
                this._elapsedTime = 0;
                this._progress = 0;
                this._repeat = 0;
                this._pingPong = false;

                this._pathFrom = 0;
                this._pathTo = 0;

                this._chainTween = null;
                this._resolvePromise = null;

                return this;
            }

            /**
             * Configures the tween via a config object
             *
             * @param {PIXI.tween.Tween#tweenConfig} config - object to configure the tween
             * @returns {PIXI.tween.Tween} - This tween instance
             */

        }, {
            key: 'config',
            value: function config(_config) {
                if (!_config || (typeof _config === 'undefined' ? 'undefined' : _typeof(_config)) !== 'object') {
                    return this;
                }

                if (_typeof(_config.from) === 'object') {
                    this.from(_config.from);
                }
                if (_config.to && _typeof(_config.to) === 'object') {
                    this.to(_config.to);
                }
                if (typeof _config.delay === 'number') {
                    this.delay = _config.delay;
                }
                if (_config.easing) {
                    if (typeof _config.easing === 'string' && Easing[_config.easing]) {
                        this.easing = Easing[_config.easing]();
                    } else if (typeof _config.easing === 'function') {
                        this.easing = _config.easing;
                    }
                }
                if (typeof _config.expire === 'boolean') {
                    this.expire = _config.expire;
                }
                if (typeof _config.loop === 'boolean') {
                    this.loop = _config.loop;
                }
                if (_typeof(_config.path) === 'object') {
                    this.path = _config.path;
                }
                if (typeof _config.pathReverse === 'boolean') {
                    this.pathReverse = _config.pathReverse;
                }
                if (typeof _config.pingPong === 'boolean') {
                    this.pingPong = _config.pingPong;
                }
                if (typeof _config.repeat === 'number') {
                    this.repeat = _config.repeat;
                }
                if (typeof _config.time === 'number') {
                    this.time = _config.time;
                }
                if (typeof _config.speed === 'number') {
                    this.speed = _config.speed;
                }

                if (_config.on && _typeof(_config.on) === 'object') {
                    if (typeof _config.on.end === 'function') {
                        this.on('end', _config.on.end);
                    }
                    if (typeof _config.on.pingpong === 'function') {
                        this.on('pingpong', _config.on.pingpong);
                    }
                    if (typeof _config.on.repeat === 'function') {
                        this.on('repeat', _config.on.repeat);
                    }
                    if (typeof _config.on.start === 'function') {
                        this.on('start', _config.on.start);
                    }
                    if (typeof _config.on.stop === 'function') {
                        this.on('stop', _config.on.stop);
                    }
                    if (typeof _config.on.update === 'function') {
                        this.on('update', _config.on.update);
                    }
                }

                return this;
            }

            /**
             * True if the tween is running
             *
             * @member {boolean}
             * @readonly
             */

        }, {
            key: 'addTo',


            /**
             * Add the tween to a manager
             *
             * @param {PIXI.tween.TweenManager} manager - Tween manager to handle this tween
             * @returns {PIXI.tween.Tween} - This tween instance
             */
            value: function addTo(manager) {
                this.manager = manager;
                this.manager.addTween(this);

                return this;
            }

            /**
             * Remove the tween from the manager if it has one
             *
             * @returns {PIXI.tween.Tween} - This tween instance
             */

        }, {
            key: 'remove',
            value: function remove() {
                if (!this.manager) {
                    return this;
                }

                this.manager.removeTween(this);

                return this;
            }

            /**
             * Starts the tween
             *
             * @param {Promise} resolve - Promise to resolve when the tween has ended
             * @returns {PIXI.tween.Tween} - This tween instance
             */

        }, {
            key: 'start',
            value: function start(resolve) {
                this._active = true;
                this._isStarted = false;

                if (this._resetFromOnStart) {
                    this._from = {};
                }

                if (!this._resolvePromise && resolve) {
                    this._resolvePromise = resolve;
                }

                return this;
            }

            /**
             * Starts the tween, whilst returning a new promise
             *
             * @returns {Promise} - Promsie that will resolve when the tween has finished
             */

        }, {
            key: 'startPromise',
            value: function startPromise() {
                var _this2 = this;

                if (!Promise) {
                    return this.start();
                }

                if (this._resolvePromise) {
                    return Promise.resolve();
                }

                return new Promise(function (resolve) {
                    _this2.start(resolve);
                });
            }

            /**
             * Stop the tweens progress
             *
             * @fires PIXI.tween.Tween#stop
             *
             * @param {boolean} [end=false] - Force end to be called
             * @returns {PIXI.tween.Tween} - This tween instance
             */

        }, {
            key: 'stop',
            value: function stop() {
                var end = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                this._active = false;
                this.emit('stop');

                if (end) {
                    this._end();
                }

                return this;
            }

            /**
             * Set the end data for the tween
             *
             * @example
             * tween.to({ x:100, y:100 });
             *
             * @param {Object} data - Object containing end point data for the tween
             * @returns {PIXI.tween.Tween} - This tween instance
             */

        }, {
            key: 'to',
            value: function to() {
                var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this._to = data;

                return this;
            }

            /**
             * Set the start point data for the tween.
             * If nothing is set, data is reset so that starting the tween will use the objects current state as the start point
             *
             * @example
             * tween.from({ x:50, y:50 });
             *
             * @param {Object} [data] - Object containing start point data for the tween
             * @returns {PIXI.tween.Tween} - This tween instance
             */

        }, {
            key: 'from',
            value: function from(data) {
                if (!data || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
                    this._resetFromOnStart = true;
                    this._from = {};
                } else {
                    this._resetFromOnStart = false;
                    this._from = data;
                }

                return this;
            }

            /**
             * Chain another tween to play after this tween has ended
             *
             * @param {PIXI.tween.Tween} tween - Tween to chain
             * @returns {PIXI.tween.Tween} - This tween instance
             */

        }, {
            key: 'chain',
            value: function chain(tween) {
                if (!tween) {
                    tween = new Tween(this.target);
                }
                this._chainTween = tween;

                return tween;
            }

            /**
             * Resets the tween to it's default state, but keeping any to and from data, so start can be called to replay the tween
             *
             * @returns {PIXI.tween.Tween} - This tween instance
             */

        }, {
            key: 'reset',
            value: function reset() {
                this._elapsedTime = 0;
                this._progress = 0;
                this._repeat = 0;
                this._delayTime = 0;
                this._isStarted = false;
                this._isEnded = false;

                if (this.pingPong && this._pingPong) {
                    var _to = this._to;
                    var _from = this._from;

                    this._to = _from;
                    this._from = _to;

                    this._pingPong = false;
                }

                return this;
            }

            /**
             * Updating of the tween; usually automatically called by its manager
             *
             * @fires PIXI.tween.Tween#start
             * @fires PIXI.tween.Tween#update
             * @fires PIXI.tween.Tween#pingpong
             * @fires PIXI.tween.Tween#repeat
             *
             * @param {number} deltaMS - Time elapsed in milliseconds from last update to this update.
             */

        }, {
            key: 'update',
            value: function update(deltaMS) {
                if (!this._canUpdate() && (this._to || this.path)) {
                    return;
                }

                deltaMS *= this.speed;

                if (this.delay > this._delayTime) {
                    this._delayTime += deltaMS;

                    return;
                }

                if (!this._isStarted) {
                    this._parseData();
                    this._isStarted = true;
                    this._isEnded = false;
                    this.emit('start');
                }

                var time = this.pingPong ? this.time / 2 : this.time;
                var _to = void 0;
                var _from = void 0;

                if (time >= this._elapsedTime) {
                    var t = this._elapsedTime + deltaMS;
                    var ended = t >= time;

                    this._elapsedTime = ended ? time : t;
                    this._apply(time);

                    var realElapsed = this._pingPong ? time + this._elapsedTime : this._elapsedTime;

                    this._progress = Math.min(realElapsed / this.time, 1);

                    this.emit('update', this._progress, realElapsed);

                    if (ended) {
                        if (this.pingPong && !this._pingPong) {
                            this._pingPong = true;
                            _to = this._to;
                            _from = this._from;
                            this._from = _to;
                            this._to = _from;

                            if (this.path) {
                                _to = this._pathTo;
                                _from = this._pathFrom;
                                this._pathTo = _from;
                                this._pathFrom = _to;
                            }

                            this.emit('pingpong');
                            this._elapsedTime = 0;
                            this._progress = 0.5;

                            return;
                        }

                        if (this.loop || this.repeat > this._repeat || this.repeat == -1) { // fix gue
                            ++this._repeat;
                            this.emit('repeat', this._repeat);
                            this._elapsedTime = 0;
                            this._progress = 0;

                            if (this.pingPong && this._pingPong) {
                                _to = this._to;
                                _from = this._from;
                                this._to = _from;
                                this._from = _to;

                                if (this.path) {
                                    _to = this._pathTo;
                                    _from = this._pathFrom;
                                    this._pathTo = _from;
                                    this._pathFrom = _to;
                                }

                                this._pingPong = false;
                            }

                            return;
                        }

                        this._end();
                    }

                    return;
                }
            }

            /**
             * Called when the tween has finished
             *
             * @fires PIXI.tween.Tween#end
             *
             * @private
             */

        }, {
            key: '_end',
            value: function _end() {
                this._isEnded = true;
                this._active = false;
                this.emit('end');
                this._elapsedTime = 0;

                if (this._chainTween) {
                    if (!this._chainTween.manager) {
                        this._chainTween.addTo(this.manager);
                    }
                    this._chainTween.start(this._resolvePromise);
                    this._resolvePromise = null;
                } else if (this._resolvePromise) {
                    var resolvePromise = this._resolvePromise;

                    this._resolvePromise = null;
                    resolvePromise();
                }
            }

            /**
             * Parses the from and to data to extract details about how the tween should progress
             *
             * @private
             */

        }, {
            key: '_parseData',
            value: function _parseData() {
                if (this._isStarted) {
                    return;
                }

                _parseRecursiveData(this._to, this._from, this.target);

                if (this.path) {
                    var distance = this.path.totalDistance();

                    if (this.pathReverse) {
                        this._pathFrom = distance;
                        this._pathTo = 0;
                    } else {
                        this._pathFrom = 0;
                        this._pathTo = distance;
                    }
                }
            }

            /**
             * Updates the object with the tween settings
             *
             * @param {number} time - Time duration for the tween
             * @private
             */

        }, {
            key: '_apply',
            value: function _apply(time) {
                _recursiveApplyTween(this._to, this._from, this.target, time, this._elapsedTime, this.easing);

                if (this.path) {
                    var _time = this.pingPong ? this.time / 2 : this.time;
                    var b = this._pathFrom;
                    var c = this._pathTo - this._pathFrom;
                    var d = _time;
                    var t = _time ? this._elapsedTime / d : 1;

                    var distance = b + c * this.easing(t);
                    var pos = this.path.getPointAtDistance(distance);

                    this.target.position.set(pos.x, pos.y);
                }
            }

            /**
             * Can this tween be updated (must be active and have a target destination)
             *
             * @returns {boolean} - True if this tween can be updated
             * @private
             */

        }, {
            key: '_canUpdate',
            value: function _canUpdate() {
                return this._active && this.target;
            }
        }, {
            key: 'active',
            get: function get$$1() {
                return this._active;
            }

            /**
             * How much time has passed on an active tween
             *
             * @member {number}
             * @readonly
             */

        }, {
            key: 'elapsedTime',
            get: function get$$1() {
                return this._elapsedTime;
            }

            /**
             * 0-1 decimal value representing proportion of completion
             *
             * @member {number}
             * @readonly
             */

        }, {
            key: 'progress',
            get: function get$$1() {
                return this._progress;
            }

            /**
             * True if the tween has started running
             *
             * @member {boolean}
             * @readonly
             */

        }, {
            key: 'isStarted',
            get: function get$$1() {
                return this._isStarted;
            }

            /**
             * True if a tween has ended running
             *
             * @member {boolean}
             * @readonly
             */

        }, {
            key: 'isEnded',
            get: function get$$1() {
                return this._isEnded;
            }
        }]);
        return Tween;
    }(PIXI.utils.EventEmitter);

    function _recursiveApplyTween(to, from, target, time, elapsedTime, easing) {
        for (var k in to) {
            if (!_isObject(to[k])) {
                var b = from[k];
                var c = to[k] - from[k];
                var d = time;
                var t = time ? elapsedTime / d : 1;

                target[k] = b + c * easing(t);
            } else {
                _recursiveApplyTween(to[k], from[k], target[k], time, elapsedTime, easing);
            }
        }
    }

    function _parseRecursiveData(to, from, target) {
        for (var k in to) {
            if (from[k] !== 0 && !from[k]) {
                if (_isObject(target[k])) {
                    from[k] = {};
                    _parseRecursiveData(to[k], from[k], target[k]);
                } else {
                    from[k] = target[k];
                }
            }
        }
    }

    function _isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }

    /**
     * Tween manager class, that handles updating child Tweens
     *
     * @class
     * @memberof PIXI.tween
     */

    var TweenManager = function () {
        /** */
        function TweenManager() {
            classCallCheck(this, TweenManager);

            /** @member {Array.<PIXI.tween.Tween>} - The array of tweens being manager */
            this.tweens = [];

            this._tweensToDelete = [];
            this._last = 0;
        }

        /**
         * Updating of the tween manager, which will in turn update any active tweens
         *
         * @param {number} [deltaMS] - If not provided, an internal deltaMS will be calculated
         */


        createClass(TweenManager, [{
            key: 'update',
            value: function update(deltaMS) {
                if (!deltaMS && deltaMS !== 0) {
                    deltaMS = this._getDeltaMS();
                }

                for (var i = 0; i < this.tweens.length; ++i) {
                    var tween = this.tweens[i];

                    if (tween.active) {
                        tween.update(deltaMS);
                    }

                    if (tween.isEnded && tween.expire) {
                        tween.remove();
                    }
                }

                if (this._tweensToDelete.length) {
                    for (var _i = 0; _i < this._tweensToDelete.length; ++_i) {
                        this._remove(this._tweensToDelete[_i]);
                    }
                    this._tweensToDelete.length = 0;
                }
            }

            /**
             * Returns an array with all the tweens for the given target.
             *
             * @param {any} target - The target object to check for tweens
             * @returns {Array.<PIXI.tween.Tween>} - Tweens attached to the given target
             */

        }, {
            key: 'getTweensForTarget',
            value: function getTweensForTarget(target) {
                var tweens = [];

                for (var i = 0; i < this.tweens.length; ++i) {
                    if (this.tweens[i].target === target) {
                        tweens.push(this.tweens[i]);
                    }
                }

                return tweens;
            }

            /**
             * Returns a new tween instance that is managed by this tween manager.
             *
             * @param {any} target - The target object to add a tween to
             * @param {PIXI.tween.Tween#tweenConfig} [config] - object to configure the tween
             * @returns {PIXI.tween.Tween} - New tween instance
             */

        }, {
            key: 'createTween',
            value: function createTween(target, config) {
                return new Tween(target, this, config);
            }

            /**
             * Normally you want to use .createTween(target) to create a tween, but, you can also create a tween
             * with new PIXI.Tween(target) and add it in the manager with this method.
             *
             * @param {PIXI.tween.Tween} tween - Tween to add
             */

        }, {
            key: 'addTween',
            value: function addTween(tween) {
                if (tween) {
                    tween.manager = this;
                    this.tweens.push(tween);
                }
            }

            /** fix gue
             * Removes all tweens
             */

        }, {
            key: 'removeAllTweens',
            value: function removeAllTweens() {
                this.tweens = [];
            }

            /**
             * Removes a tween from being managed by this instance
             *
             * @param {PIXI.tween.Tween} tween - Tween to remove
             */

        }, {
            key: 'removeTween',
            value: function removeTween(tween) {
                if (tween) {
                    this._tweensToDelete.push(tween);
                }
            }

            /**
             * Delets the tween from the array of managed tweens
             *
             * @param {PIXI.tween.Tween} tween - Tween to remove
             * @private
             */

        }, {
            key: '_remove',
            value: function _remove(tween) {
                var index = this.tweens.indexOf(tween);

                if (index !== -1) {
                    this.tweens.splice(index, 1);
                }
            }

            /**
             * Returns a new tween instance that is managed by this tween manager.
             *
             * @returns {number} - How much time in ms has passed since update was last called
             * @private
             */

        }, {
            key: '_getDeltaMS',
            value: function _getDeltaMS() {
                if (this._last === 0) {
                    this._last = Date.now();
                }
                var now = Date.now();
                var deltaMS = now - this._last;

                this._last = now;

                return deltaMS;
            }
        }]);
        return TweenManager;
    }();

    /**
     * Class that allows drawing a path using PIXI.Graphics, which can then be followed and used as a tween
     *
     * @class
     * @memberof PIXI.tween
     */
    var TweenPath = function () {
        /** */
        function TweenPath() {
            classCallCheck(this, TweenPath);

            /** @member {PIXI.Polygon} - PIXI object to use as the path */
            this.polygon = new PIXI.Polygon();
            this.polygon.closed = false;

            /** @member {PIXI.GraphicsData} - Current path */
            this.currentPath = null;

            /** @member {Array.<PIXI.GraphicsData>} - Graphics data */
            this.graphicsData = [];

            /**
             * @member {boolean}
             * Used to detect if the graphics object has changed.
             * If this is set to true then the graphics object will be recalculated.
             */
            this.dirty = true;

            this._closed = false;
            this._tmpPoint = new PIXI.Point();
            this._tmpPoint2 = new PIXI.Point();
            this._tmpDistance = [];
        }

        /**
         * Set true to close your path
         *
         * @member {boolean}
         */


        createClass(TweenPath, [{
            key: "moveTo",


            /**
             * Clear the path
             * Moves the current drawing position to x, y.
             * @see https://pixijs.github.io/docs/PIXI.Graphics.html#moveTo
             *
             * @param {number} x - the X coordinate to move to
             * @param {number} y - the Y coordinate to move to
             * @returns {PIXI.tween.TweenPath} - This instance of TweenPath
             */
            value: function moveTo(x, y) {
                PIXI.Graphics.prototype.moveTo.call(this, x, y);
                this.dirty = true;

                return this;
            }

            /**
             * Draws a line using the current line style from the current drawing position to (x, y);
             * The current drawing position is then set to (x, y).
             * @see https://pixijs.github.io/docs/PIXI.Graphics.html#lineTo
             *
             * @param {number} x - the X coordinate to draw to
             * @param {number} y - the Y coordinate to draw to     *
             * @returns {PIXI.tween.TweenPath} - This instance of TweenPath
             */

        }, {
            key: "lineTo",
            value: function lineTo(x, y) {
                PIXI.Graphics.prototype.lineTo.call(this, x, y);
                this.dirty = true;

                return this;
            }

            /**
             * Calculate the points for a quadratic bezier curve and then draws it.
             * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
             * @see https://pixijs.github.io/docs/PIXI.Graphics.html#quadraticCurveTo
             *
             * @param {number} cpX - Control point x
             * @param {number} cpY - Control point y
             * @param {number} toX - Destination point x
             * @param {number} toY - Destination point y
             * @returns {PIXI.tween.TweenPath} - This instance of TweenPath
             */

        }, {
            key: "quadraticCurveTo",
            value: function quadraticCurveTo(cpX, cpY, toX, toY) {
                PIXI.Graphics.prototype.quadraticCurveTo.call(this, cpX, cpY, toX, toY);
                this.dirty = true;

                return this;
            }

            /**
             * Calculate the points for a bezier curve and then draws it.
             * @see https://pixijs.github.io/docs/PIXI.Graphics.html#bezierCurveTo
             *
             * @param {number} cpX - Control point x
             * @param {number} cpY - Control point y
             * @param {number} cpX2 - Second Control point x
             * @param {number} cpY2 - Second Control point y
             * @param {number} toX - Destination point x
             * @param {number} toY - Destination point y     *
             * @returns {PIXI.tween.TweenPath} - This instance of TweenPath
             */

        }, {
            key: "bezierCurveTo",
            value: function bezierCurveTo(cpX, cpY, cpX2, cpY2, toX, toY) {
                PIXI.Graphics.prototype.bezierCurveTo.call(this, cpX, cpY, cpX2, cpY2, toX, toY);
                this.dirty = true;

                return this;
            }

            /**
             * The arcTo() method creates an arc/curve between two tangents on the canvas.
             * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
             * @see https://pixijs.github.io/docs/PIXI.Graphics.html#arcTo
             *
             * @param {number} x1 - The x-coordinate of the beginning of the arc
             * @param {number} y1 - The y-coordinate of the beginning of the arc
             * @param {number} x2 - The x-coordinate of the end of the arc
             * @param {number} y2 - The y-coordinate of the end of the arc
             * @param {number} radius - The radius of the arc
             * @returns {PIXI.tween.TweenPath} - This instance of TweenPath
             */

        }, {
            key: "arcTo",
            value: function arcTo(x1, y1, x2, y2, radius) {
                PIXI.Graphics.prototype.arcTo.call(this, x1, y1, x2, y2, radius);
                this.dirty = true;

                return this;
            }

            /**
             * The arc method creates an arc/curve (used to create circles, or parts of circles).
             * @see https://pixijs.github.io/docs/PIXI.Graphics.html#arc
             *
             * @param {number} cx - The x-coordinate of the center of the circle
             * @param {number} cy - The y-coordinate of the center of the circle
             * @param {number} radius - The radius of the circle
             * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
             *  of the arc's circle)
             * @param {number} endAngle - The ending angle, in radians
             * @param {boolean} [anticlockwise=false] - Specifies whether the drawing should be
             *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
             *  indicates counter-clockwise.
             * @returns {PIXI.tween.TweenPath} - This instance of TweenPath
             */

        }, {
            key: "arc",
            value: function arc(cx, cy, radius, startAngle, endAngle, anticlockwise) {
                PIXI.Graphics.prototype.arc.call(this, cx, cy, radius, startAngle, endAngle, anticlockwise);
                this.dirty = true;

                return this;
            }

            /**
             * Draws the given shape to this TweenPath object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
             *
             * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
             * @returns {PIXI.tween.TweenPath} - This instance of TweenPath
             */

        }, {
            key: "drawShape",
            value: function drawShape(shape) {
                PIXI.Graphics.prototype.drawShape.call(this, shape);
                this.dirty = true;

                return this;
            }

            /**
             * Clear the path
             *
             * @returns {PIXI.tween.TweenPath} - This instance of TweenPath
             */

        }, {
            key: "clear",
            value: function clear() {
                this.graphicsData.length = 0;
                this.currentPath = null;
                this.polygon.points.length = 0;
                this._closed = false;
                this.dirty = false;

                return this;
            }

            /**
             * Parse the list of points from the path
             *
             * @returns {PIXI.tween.TweenPath} - This instance of TweenPath
             */

        }, {
            key: "parsePoints",
            value: function parsePoints() {
                if (!this.dirty) {
                    return this;
                }
                this.dirty = false;
                this.polygon.points.length = 0;
                for (var i = 0; i < this.graphicsData.length; ++i) {
                    var shape = this.graphicsData[i].shape;

                    if (shape && shape.points) {
                        this.polygon.points = this.polygon.points.concat(shape.points);
                    }
                }

                return this;
            }

            /**
             * Finds the nth point along the path
             *
             * @param {PIXI.Point} num - Point
             * @returns {PIXI.Point} - Point co-ordinates
             */

        }, {
            key: "getPoint",
            value: function getPoint(num) {
                this.parsePoints();
                var len = this.closed && num >= this.length - 1 ? 0 : num * 2;

                this._tmpPoint.set(this.polygon.points[len], this.polygon.points[len + 1]);

                return this._tmpPoint;
            }

            /**
             * Finds the nth point along the path
             *
             * @param {PIXI.Point} num - Point
             * @returns {PIXI.Point} - Point co-ordinates
             */

        }, {
            key: "getPointAt",
            value: function getPointAt(num) {
                this.parsePoints();
                if (num > this.length) {
                    return this.getPoint(this.length - 1);
                }

                if (num % 1 === 0) {
                    return this.getPoint(num);
                }
                this._tmpPoint2.set(0, 0);
                var diff = num % 1;

                var _getPoint = this.getPoint(Math.ceil(num)),
                    ceilX = _getPoint.x,
                    ceilY = _getPoint.y;

                var _getPoint2 = this.getPoint(Math.floor(num)),
                    floorX = _getPoint2.x,
                    floorY = _getPoint2.y;

                var xx = -((floorX - ceilX) * diff);
                var yy = -((floorY - ceilY) * diff);

                this._tmpPoint2.set(floorX + xx, floorY + yy);

                return this._tmpPoint2;
            }

            /**
             * Finds the distance between two points
             *
             * @param {PIXI.Point} num1 - First point
             * @param {PIXI.Point} num2 - Second point
             * @returns {number} - Distance in pixels
             */

        }, {
            key: "distanceBetween",
            value: function distanceBetween(num1, num2) {
                this.parsePoints();

                var _getPoint3 = this.getPoint(num1),
                    p1X = _getPoint3.x,
                    p1Y = _getPoint3.y;

                var _getPoint4 = this.getPoint(num2),
                    p2X = _getPoint4.x,
                    p2Y = _getPoint4.y;

                var dx = p2X - p1X;
                var dy = p2Y - p1Y;

                return Math.sqrt(dx * dx + dy * dy);
            }

            /**
             * Calculates the total distance along the entire path
             *
             * @returns {number} - Distance in pixels
             */

        }, {
            key: "totalDistance",
            value: function totalDistance() {
                this.parsePoints();
                this._tmpDistance.length = 0;
                this._tmpDistance.push(0);

                var len = this.length;
                var distance = 0;

                for (var i = 0; i < len - 1; ++i) {
                    distance += this.distanceBetween(i, i + 1);
                    this._tmpDistance.push(distance);
                }

                return distance;
            }

            /**
             * Finds the nearest point for the distance to be travelled
             *
             * @param {number} distance - how far to travel
             * @returns {PIXI.Point} - Point co-ordinates
             */

        }, {
            key: "getPointAtDistance",
            value: function getPointAtDistance(distance) {
                this.parsePoints();
                if (!this._tmpDistance) {
                    this.totalDistance();
                }
                var len = this._tmpDistance.length;
                var n = 0;

                var totalDistance = this._tmpDistance[this._tmpDistance.length - 1];

                if (distance < 0) {
                    distance = totalDistance + distance;
                } else if (distance > totalDistance) {
                    distance = distance - totalDistance;
                }

                for (var i = 0; i < len; ++i) {
                    if (distance >= this._tmpDistance[i]) {
                        n = i;
                    }

                    if (distance < this._tmpDistance[i]) break;
                }

                if (n === this.length - 1) {
                    return this.getPointAt(n);
                }

                var diff1 = distance - this._tmpDistance[n];
                var diff2 = this._tmpDistance[n + 1] - this._tmpDistance[n];

                return this.getPointAt(n + diff1 / diff2);
            }
        }, {
            key: "closed",
            get: function get$$1() {
                return this._closed;
            },
            set: function set$$1(value) {
                // eslint-disable-line require-jsdoc
                if (this._closed === value) {
                    return;
                }
                this.polygon.closed = value;
                this._closed = value;
                this.dirty = true;
            }

            /**
             * The number of points along the path
             *
             * @member {number}
             * @readonly
             */

        }, {
            key: "length",
            get: function get$$1() {
                return this.polygon.points.length ? this.polygon.points.length / 2 + (this._closed ? 1 : 0) : 0;
            }
        }]);
        return TweenPath;
    }();

// extend pixi graphics to draw tweenPaths
    PIXI.Graphics.prototype.drawPath = function drawPath(path) {
        path.parsePoints();
        this.drawShape(path.polygon);

        return this;
    };

    /**
     * @namespace PIXI.tween
     */
    var tween = {
        TweenManager: TweenManager,
        Tween: Tween,
        Easing: Easing,
        TweenPath: TweenPath
    };

    if (!PIXI.tweenManager) {
        PIXI.tweenManager = new TweenManager();

        PIXI.tween = tween;
    }

    return tween;

})));

/*
 * @class Vector
 * @constructor
 * @param x {Number} position of the point
 * @param y {Number} position of the point
 */
PIXI.Vector = function(x, y)
{
    /**
     * @property x
     * @type Number
     * @default 0
     */
    this.x = x || 0;

    /**
     * @property y
     * @type Number
     * @default 0
     */
    this.y = y || 0;
};