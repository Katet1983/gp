/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,i){var s,r,n=t.cycle;for(s in n)r=n[s],t[s]="function"==typeof r?r.call(e[i],i):r[i%r.length];delete t.cycle},n=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=n.prototype.render},a=1e-10,o=i._internals,l=o.isSelector,h=o.isArray,_=n.prototype=i.to({},.1,{}),u=[];n.version="1.18.0",_.constructor=n,_.kill()._gc=!1,n.killTweensOf=n.killDelayedCallsTo=i.killTweensOf,n.getTweensOf=i.getTweensOf,n.lagSmoothing=i.lagSmoothing,n.ticker=i.ticker,n.render=i.render,_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},_.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,l=1/(1-r),h=this._firstPT;h;)o=h.s+h.c,h.c*=l,h.s=o-h.c,h=h._next}return this},_.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,n,l,h,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._time,m=this._totalTime,d=this._cycle,g=this._duration,v=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===g&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>v||v===a)&&v!==t&&(i=!0,v>a&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||v===t?t:a)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&v>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===g&&(this._initted||!this.vars.lazy||i)&&(v>=0&&(i=!0),this._rawPrevTime=c=!e||t||v===t?t:a)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(l=g+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(h=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&h>=.5)&&(h=1-h),3===_&&(h*=2),1===u?h*=h:2===u?h*=h*h:3===u?h*=h*h*h:4===u&&(h*=h*h*h*h),this.ratio=1===_?1-h:2===_?h:.5>this._time/g?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/g)),p===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=p,this._totalTime=m,this._rawPrevTime=v,this._cycle=d,o.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===m&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===g&&this._rawPrevTime===a&&c!==a&&(this._rawPrevTime=0))},n.to=function(t,e,i){return new n(t,e,i)},n.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new n(t,e,i)},n.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new n(t,e,s)},n.staggerTo=n.allTo=function(t,e,a,o,_,c,f){o=o||0;var p,m,d,g,v=a.delay||0,y=[],T=function(){a.onComplete&&a.onComplete.apply(a.onCompleteScope||this,arguments),_.apply(f||a.callbackScope||this,c||u)},x=a.cycle,w=a.startAt&&a.startAt.cycle;for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),l(t)&&(t=s(t))),t=t||[],0>o&&(t=s(t),t.reverse(),o*=-1),p=t.length-1,d=0;p>=d;d++){m={};for(g in a)m[g]=a[g];if(x&&r(m,t,d),w){w=m.startAt={};for(g in a.startAt)w[g]=a.startAt[g];r(m.startAt,t,d)}m.delay=v,d===p&&_&&(m.onComplete=T),y[d]=new n(t[d],e,m),v+=o}return y},n.staggerFrom=n.allFrom=function(t,e,i,s,r,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,n.staggerTo(t,e,i,s,r,a,o)},n.staggerFromTo=n.allFromTo=function(t,e,i,s,r,a,o,l){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,n.staggerTo(t,e,s,r,a,o,l)},n.delayedCall=function(t,e,i,s,r){return new n(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:r,overwrite:0})},n.set=function(t,e){return new n(t,0,e)},n.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var c=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(c(n,e)),r=s.length),n=n._next;return s},f=n.getAllTweens=function(e){return c(t._rootTimeline,e).concat(c(t._rootFramesTimeline,e))};n.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,l=f(0!=r),h=l.length,_=i&&s&&r;for(o=0;h>o;o++)a=l[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},n.killChildTweensOf=function(t,e){if(null!=t){var r,a,_,u,c,f=o.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),l(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)n.killChildTweensOf(t[u],e);else{r=[];for(_ in f)for(a=f[_].target.parentNode;a;)a===t&&(r=r.concat(f[_].tweens)),a=a.parentNode;for(c=r.length,u=0;c>u;u++)e&&r[u].totalTime(r[u].totalDuration()),r[u]._enabled(!1,!1)}}};var p=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=f(r),l=i&&s&&r,h=o.length;--h>-1;)a=o[h],(l||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return n.pauseAll=function(t,e,i){p(!0,t,e,i)},n.resumeAll=function(t,e,i){p(!1,t,e,i)},n.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||a,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},_.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},_.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},_.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},n},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],l(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));l(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,l=n.isArray,h=n.lazyTweens,_=n.lazyRender,u=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},f=function(t,e,i){var s,r,n=t.cycle;for(s in n)r=n[s],t[s]="function"==typeof r?r.call(e[i],i):r[i%r.length];delete t.cycle},p=a.pauseCallback=function(){},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.18.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=d._hasPause=!1,d.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,l,h,_){var u,p,d=new s({onComplete:l,onCompleteParams:h,callbackScope:_,smoothChildTiming:this.smoothChildTiming}),g=r.cycle;for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),p=0;t.length>p;p++)u=c(r),u.startAt&&(u.startAt=c(u.startAt),u.startAt.cycle&&f(u.startAt,t,p)),g&&f(u,t,p),d.to(t[p],e,u,p*n);return this.add(d,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,l){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,l)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var h,_,u,c,f,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&l(r)){for(a=a||"normal",o=o||0,h=n,_=r.length,u=0;_>u;u++)l(c=r[u])&&(c=new s({tweens:c})),this.add(c,h),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?h=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),h+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,p=f.rawTime()>r._startTime;f._timeline;)p&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},d.remove=function(e){if(e instanceof t){this._remove(e,!1);var i=e._timeline=e.vars.useFrames?t._rootFramesTimeline:t._rootTimeline;return e._startTime=(e._paused?e._pauseTime:i._time)-(e._reversed?e.totalDuration()-e._totalTime:e._totalTime)/e._timeScale,this}if(e instanceof Array||e&&e.push&&l(e)){for(var s=e.length;--s>-1;)this.remove(e[s]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,s,r||this);return n.vars.onComplete=n.vars.onReverseComplete=e,n.data="isPause",this._hasPause=!0,this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&l(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,l,u,c=this._dirty?this.totalDuration():this._totalDuration,f=this._time,p=this._startTime,m=this._timeScale,d=this._paused;if(t>=c)this._totalTime=this._time=c,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",l=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=c+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(l=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(l=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!e){if(t>=f)for(s=this._first;s&&t>=s._startTime&&!u;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(u=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!u;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(u=s),s=s._prev;u&&(this._time=t=u._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=t}if(this._time!==f&&this._first||i||l||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(u===s&&this.pause(),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);){if(s._active||f>=s._startTime&&!s._paused&&!s._gc){if(u===s){for(u=s._prev;u&&u.endTime()>this._time;)u.render(u._reversed?u.totalDuration()-(t-u._startTime)*u._timeScale:(t-u._startTime)*u._timeScale,e,i),u=u._prev;u=null,this.pause()}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=a}this._onUpdate&&(e||(h.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(p===this._startTime||m!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(h.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=e._internals,a=n.lazyTweens,o=n.lazyRender,l=new i(null,null,1,0),h=s.prototype=new t;return h.constructor=s,h.kill()._gc=!1,s.version="1.18.0",h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},h.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},h.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},h.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},h.tweenTo=function(t,i){i=i||{};var s,r,n,a={ease:l,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)a[r]=i[r];return a.time=this._parseTimeOrLabel(t),s=Math.abs(Number(a.time)-this._time)/this._timeScale||.001,n=new e(this,s,a),a.onStart=function(){n.target.paused(!0),n.vars.time!==n.target.time()&&s===n.duration()&&n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale),i.onStart&&n._callback("onStart")},n},h.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},h.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,l,h,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,m=this._time,d=this._totalTime,g=this._startTime,v=this._timeScale,y=this._rawPrevTime,T=this._paused,x=this._cycle;if(t>=f)this._locked||(this._totalTime=f,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,h="onComplete",_=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(_=!0,y>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=p,t=p+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==m||0===p&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(h="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(_=n=!0,h="onReverseComplete"):y>=0&&this._first&&(_=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=p||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(_=!0)}else if(0===p&&0>y&&(_=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(u=p+this._repeatDelay,this._cycle=this._totalTime/u>>0,0!==this._cycle&&this._cycle===this._totalTime/u&&this._cycle--,this._time=this._totalTime-this._cycle*u,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,t=p+1e-4):0>this._time?this._time=t=0:t=this._time)),this._hasPause&&!this._forcingPlayhead&&!e){if(t=this._time,t>=m)for(s=this._first;s&&t>=s._startTime&&!c;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(c=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!c;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(c=s),s=s._prev;c&&(this._time=t=c._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==x&&!this._locked){var w=this._yoyo&&0!==(1&x),b=w===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,k=this._cycle,S=this._rawPrevTime,R=this._time;if(this._totalTime=x*p,x>this._cycle?w=!w:this._totalTime+=p,this._time=m,this._rawPrevTime=0===p?y-1e-4:y,this._cycle=x,this._locked=!0,m=w?0:p,this.render(m,e,0===p),e||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),b&&(m=w?p+1e-4:-1e-4,this.render(m,!0,!1)),this._locked=!1,this._paused&&!T)return;this._time=R,this._totalTime=P,this._cycle=k,this._rawPrevTime=S}if(!(this._time!==m&&this._first||i||_||c))return d!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this._callback("onStart")),this._time>=m)for(s=this._first;s&&(l=s._next,!this._paused||T);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(c===s&&this.pause(),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,!this._paused||T);){if(s._active||m>=s._startTime&&!s._paused&&!s._gc){if(c===s){for(c=s._prev;c&&c.endTime()>this._time;)c.render(c._reversed?c.totalDuration()-(t-c._startTime)*c._timeScale:(t-c._startTime)*c._timeScale,e,i),c=c._prev;c=null,this.pause()}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=l}this._onUpdate&&(e||(a.length&&o(),this._callback("onUpdate"))),h&&(this._locked||this._gc||(g===this._startTime||v!==this._timeScale)&&(0===this._time||f>=this.totalDuration())&&(n&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this._callback(h)))},h.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,l=a.length;for(s=0;l>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},h.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},h.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},h.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},h.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},h.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},h.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},h.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},h.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},h.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},h.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},h.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",l=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},l=(t+e)/2,h=(e+i)/2,_=(i+s)/2,u=(l+h)/2,c=(h+_)/2,f=(c-u)/8;return r.b=l+(t-l)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+c)/2,a.b=c-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,o){var h,_,u,c,f,p,m,d,g,v,y,T,x,w=t.length-1,b=0,P=t[0].a;for(h=0;w>h;h++)f=t[b],_=f.a,u=f.d,c=t[b+1].d,o?(y=e[h],T=i[h],x=.25*(T+y)*r/(a?.5:s[h]||.5),p=u-(u-_)*(a?.5*r:0!==y?x/y:0),m=u+(c-u)*(a?.5*r:0!==T?x/T:0),d=u-(p+((m-p)*(3*y/(y+T)+.5)/4||0))):(p=u-.5*(u-_)*r,m=u+.5*(c-u)*r,d=u-(p+m)/2),p+=d,m+=d,f.c=g=p,f.b=0!==h?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=l(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=l(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,l,h,_,u,c,f=[];if(n)for(t=[n].concat(t),l=t.length;--l>-1;)"string"==typeof(c=t[l][s])&&"="===c.charAt(1)&&(t[l][s]=n[s]+Number(c.charAt(0)+c.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),f;for(l=0;o>l;l++)h=t[l][s],_=t[l+1][s],f[l]=new a(h,0,0,_),r&&(u=t[l+2][s],e[l]=(e[l]||0)+(_-h)*(_-h),i[l]=(i[l]||0)+(u-_)*(u-_));return f[l]=new a(t[l][s],0,0,t[l+1][s]),f},u=function(t,n,a,l,u,c){var f,p,m,d,g,v,y,T,x={},w=[],b=c||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(p in t[0])w.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,f=w.length;--f>-1;)if(p=w[f],Math.abs(b[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),c&&t.unshift(c),t.push(t[1]),c=t[t.length-3])}for(e.length=i.length=s.length=0,f=w.length;--f>-1;)p=w[f],r[p]=-1!==u.indexOf(","+p+","),x[p]=_(t,p,r[p],c);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!l){for(f=w.length;--f>-1;)if(r[p])for(m=x[w[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(f=s.length;--f>-1;)s[f]=Math.sqrt(s[f])}for(f=w.length,d=a?4:1;--f>-1;)p=w[f],m=x[p],h(m,n,a,l,r[p]),y&&(m.splice(0,d),m.splice(m.length-d,d));return x},c=function(t,e,i){e=e||"soft";var s,r,n,o,l,h,_,u,c,f,p,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(c in t[0])v.push(c);for(h=v.length;--h>-1;){for(c=v[h],m[c]=l=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][c]:"string"==typeof(p=t[_][c])&&"="===p.charAt(1)?i[c]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&_>1&&u-1>_&&(l[f++]=(s+l[f-2])/2),l[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=l[_],r=l[_+1],n=l[_+2],o=2===d?0:l[_+3],l[f++]=p=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);l.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,l,h,_,u,c,f,p=1/i,m=t.length;--m>-1;)for(c=t[m],n=c.a,a=c.d-n,o=c.c-n,l=c.b-n,s=r=0,_=1;i>=_;_++)h=p*_,u=1-h,s=r-(r=(h*h*a+3*u*(h*o+u*l))*h),f=m*i+_-1,e[f]=(e[f]||0)+s*s},p=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],l=0,h=0,_=e-1,u=[],c=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)l+=Math.sqrt(a[s]),n=s%e,c[n]=l,n===_&&(h+=l,n=s/e>>0,u[n]=c,o[n]=h,l=0,c=[]);return{length:h,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,l=e.values||[],h={},_=l[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;
for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],h[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||h[s]!==l[0][s]&&(o=h);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(l,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):c(l,e.type,h),this._segCount=this._beziers[s].length,this._timeRes){var m=p(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,l,h,_,u,c=this._segCount,f=this._func,p=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&c-1>r){for(h=c-1;h>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(h=u.length-1;h>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?c-1:c*e>>0,o=(e-i*(1/c))*c;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],l=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(l=Math.round(l)),f[n]?p[n](l):p[n]=l;if(this._autoRotate){var d,g,v,y,T,x,w,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],x=b[r][3]||0,w=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,l=m?Math.atan2(T-v,y-g)*w+x:this._initialRotations[r],f[n]?p[n](l):p[n]=l)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=l,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,l){e instanceof Array&&(e={values:e}),l=new m;var h,_,u,c=e.values,f=c.length-1,p=[],d={};if(0>f)return o;for(h=0;f>=h;h++)u=i(t,c[h],a,o,l,f!==h),p[h]=u.end;for(_ in e)d[_]=e[_];return d.values=p,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=l,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(h=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",h,!1]]:null!=u.end.x?[["x","y","rotation",h,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),l._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,l={},h=a.prototype=new t("css");h.constructor=a,a.version="1.18.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var _,u,c,f,p,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,k=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,O=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,F=180/Math.PI,I={},E=document,N=function(t){return E.createElementNS?E.createElementNS("http://www.w3.org/1999/xhtml",t):E.createElement(t)},L=N("div"),X=N("img"),B=a._internals={_specialProps:l},j=navigator.userAgent,Y=function(){var t=j.indexOf("Android"),e=N("a");return c=-1!==j.indexOf("Safari")&&-1===j.indexOf("Chrome")&&(-1===t||Number(j.substr(t+8,1))>3),p=c&&6>Number(j.substr(j.indexOf("Version/")+8,1)),f=-1!==j.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),U=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=E.defaultView?E.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return Y||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(k,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},$=B.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,l,h,_=A.test(i),u=t,c=L.style,f=0>s;if(f&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild&&"v"!==r.charAt(0)&&"rem"!==r)c[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||E.body,l=u._gsCache,h=e.ticker.frame,l&&_&&l.time===h)return l.width*s/100;c[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(l=u._gsCache=u._gsCache||{},l.time=h,l.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return f?-o:o},H=B.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r,n={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r=e[i],(-1===r.indexOf("-transform")||ke===r)&&(n[r.replace(S,O)]=e.getPropertyValue(r));else for(i in e)(-1===i.indexOf("Transform")||Pe===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(S,O)]=e[i]);return Y||(n.opacity=U(t)),s=Ne(t,e,!1),n.rotation=s.rotation,n.skewX=s.skewX,n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.x=s.x,n.y=s.y,Re&&(n.z=s.z,n.rotationX=s.rotationX,n.rotationY=s.rotationY,n.scaleZ=s.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,s,r){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==h[a]&&(o=new pe(h,a,h[a],o)));if(s)for(a in s)"className"!==a&&(l[a]=s[a]);return{difs:l,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";(null==t||""===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="center"===s?"50%":"0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+r+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,"")),e.v=t),e||t},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,l,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),l="="===t.charAt(1),a=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:F)-(l?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},le=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},he=a.parseColor=function(t,e){var i,s,r,n,a,o,l,h,_,u,c;if(t)if("number"==typeof t)i=[t>>16,255&t>>8,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t])i=oe[t];else if("#"===t.charAt(0))4===t.length&&(s=t.charAt(1),r=t.charAt(2),n=t.charAt(3),t="#"+s+s+r+r+n+n),t=parseInt(t.substr(1),16),i=[t>>16,255&t>>8,255&t];else if("hsl"===t.substr(0,3))if(i=c=t.match(d),e){if(-1!==t.indexOf("="))return t.match(g)}else a=Number(i[0])%360/360,o=Number(i[1])/100,l=Number(i[2])/100,r=.5>=l?l*(o+1):l+o-l*o,s=2*l-r,i.length>3&&(i[3]=Number(t[3])),i[0]=le(a+1/3,s,r),i[1]=le(a,s,r),i[2]=le(a-1/3,s,r);else i=t.match(d)||oe.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),i.length>3&&(i[3]=Number(i[3]))}else i=oe.black;return e&&!c&&(s=i[0]/255,r=i[1]/255,n=i[2]/255,h=Math.max(s,r,n),_=Math.min(s,r,n),l=(h+_)/2,h===_?a=o=0:(u=h-_,o=l>.5?u/(2-h-_):u/(h+_),a=h===s?(r-n)/u+(n>r?6:0):h===r?(n-s)/u+2:(s-r)/u+4,a*=60),i[0]=0|a+.5,i[1]=0|100*o+.5,i[2]=0|100*l+.5),i},_e=function(t,e){var i,s,r,n=t.match(ue)||[],a=0,o=n.length?"":t;for(i=0;n.length>i;i++)s=n[i],r=t.substr(a,t.indexOf(s,a)-a),a+=r.length+s.length,s=he(s,e),3===s.length&&s.push(1),o+=r+(e?"hsla("+s[0]+","+s[1]+"%,"+s[2]+"%,"+s[3]:"rgba("+s.join(","))+")";return o},ue="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in oe)ue+="|"+h+"\\b";ue=RegExp(ue+")","gi"),a.colorStringFilter=function(t){var e,i=t[0]+t[1];ue.lastIndex=0,ue.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=_e(t[0],e),t[1]=_e(t[1],e))},e.defaultStringFilter||(e.defaultStringFilter=a.colorStringFilter);var ce=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(ue)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,c,f,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(p=t.replace(M,"|").split("|"),f=0;p.length>f;f++)p[f]=r(p[f]);return p.join(",")}if(e=(t.match(ue)||[n])[0],c=t.split(e).join("").match(v)||[],f=c.length,_>f--)for(;_>++f;)c[f]=i?c[0|(f-1)/2]:a[f];return o+c.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),c=0;n.length>c;c++)n[c]=r(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,_>c--)for(;_>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(h)+l}:function(t){return t}},fe=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return r.parse(e,o,n,a)}},pe=(B._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),me=(B._parseToProxy=function(t,e,i,s,r,n){var a,o,l,h,_,u=s,c={},f={},p=i._transform,m=I;for(i._transform=null,I=e,s=_=i.parse(t,e,s,r),I=m,n&&(i._transform=p,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,c[o]=s.s,n||(h=new pe(s,"s",o,h,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)l="xn"+a,o=s.p+"_"+l,f[o]=s.data[l],c[o]=s[l],n||(h=new pe(s,l,o,h,s.rxp[l]));s=s._next}return{proxy:c,end:f,firstMPT:h,pt:_}},B.CSSPropTween=function(t,e,s,r,a,o,l,h,_,u,c){this.t=t,this.p=e,this.s=s,this.c=r,this.n=l||e,t instanceof me||n.push(this.n),this.r=h,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===c?s+r:c,a&&(this._next=a,a._prev=this)}),de=function(t,e,i,s,r,n){var a=new me(t,e,i,s-i,r,-1,n);return a.b=i,a.e=a.xs0=s,a},ge=a.parseComplex=function(t,e,i,s,r,n,a,o,l,h){i=i||n||"",a=new me(t,e,0,0,a,h?2:1,null,!1,o,i,s),s+="";var u,c,f,p,m,v,y,T,x,w,b,P,k,S=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),O=S.length,A=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(S=S.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),O=S.length),O!==R.length&&(S=(n||"").split(" "),O=S.length),a.plugin=l,a.setRatio=h,ue.lastIndex=0,u=0;O>u;u++)if(p=S[u],m=R[u],T=parseFloat(p),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),A&&-1!==m.indexOf("px"),!0);else if(r&&ue.test(p))P=","===m.charAt(m.length-1)?"),":")",k=-1!==m.indexOf("hsl")&&Y,p=he(p,k),m=he(m,k),x=p.length+m.length>6,x&&!Y&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(Y||(x=!1),k?a.appendXtra(x?"hsla(":"hsl(",p[0],re(m[0],p[0]),",",!1,!0).appendXtra("",p[1],re(m[1],p[1]),"%,",!1).appendXtra("",p[2],re(m[2],p[2]),x?"%,":"%"+P,!1):a.appendXtra(x?"rgba(":"rgb(",p[0],m[0]-p[0],",",!0,!0).appendXtra("",p[1],m[1]-p[1],",",!0).appendXtra("",p[2],m[2]-p[2],x?",":P,!0),x&&(p=4>p.length?1:p[3],a.appendXtra("",p,(4>m.length?1:m[3])-p,P,!1))),ue.lastIndex=0;else if(v=p.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(f=0,c=0;v.length>c;c++)b=v[c],w=p.indexOf(b,f),a.appendXtra(p.substr(f,w-f),Number(b),re(y[c],b),"",A&&"px"===p.substr(w+b.length,2),0===c),f=w+b.length;a["xs"+a.l]+=p.substr(f)}else a["xs"+a.l]+=a.l?" "+p:p;if(-1!==s.indexOf("=")&&a.data){for(P=a.xs0+a.data.s,u=1;a.l>u;u++)P+=a["xs"+u]+a.data["xn"+u];a.e=P+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ve=9;for(h=me.prototype,h.l=h.pr=0;--ve>0;)h["xn"+ve]=0,h["xs"+ve]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new me(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ye=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||ce(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},Te=B._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ye(n[s],e)},xe=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";Te(t,{parser:function(t,i,s,r,n,a,h){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),l[s].parse(t,i,s,r,n,a,h)):(q("Error: "+e+" js file not loaded."),n)}})}};h=ye.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,l,h,_,u,c=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),l=i.replace(M,"|").split("|")):c&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,c&&(_=e.indexOf(c),u=i.indexOf(c),_!==u&&(-1===u?o[a]=o[a].split(c).join(""):-1===_&&(o[a]+=" "+c)));e=o.join(", "),i=l.join(", ")}return ge(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){Te(t,{parser:function(t,s,r,n,a,o){var l=new me(t,r,0,0,a,2,r,!1,i);return l.plugin=o,l.setRatio=e(t,s,n._tween,r),l},priority:i})},a.useSVGTransformAttr=c||f;var we,be="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Pe=W("transform"),ke=V+"transform",Se=W("transformOrigin"),Re=null!==W("perspective"),Oe=B.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Re?a.defaultForce3D||"auto":!1},Ae=window.SVGElement,Ce=function(t,e,i){var s,r=E.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},De=E.documentElement,Me=function(){var t,e,i,s=m||/Android/i.test(j)&&!window.chrome;return E.createElementNS&&!s&&(t=Ce("svg",De),e=Ce("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[Se]="50% 50%",e.style[Pe]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(f&&Re),De.removeChild(t)),s}(),ze=function(t,e,i,s,r){var n,o,l,h,_,u,c,f,p,m,d,g,v,y,T=t._gsTransform,x=Ee(t,!0);T&&(v=T.xOrigin,y=T.yOrigin),(!s||2>(n=s.split(" ")).length)&&(c=t.getBBox(),e=se(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=h=parseFloat(n[0]),i.yOrigin=_=parseFloat(n[1]),s&&x!==Ie&&(u=x[0],c=x[1],f=x[2],p=x[3],m=x[4],d=x[5],g=u*p-c*f,o=h*(p/g)+_*(-f/g)+(f*d-p*m)/g,l=h*(-c/g)+_*(u/g)-(u*d-c*m)/g,h=i.xOrigin=n[0]=o,_=i.yOrigin=n[1]=l),T&&(r||r!==!1&&a.defaultSmoothOrigin!==!1?(o=h-v,l=_-y,T.xOffset+=o*x[0]+l*x[2]-o,T.yOffset+=o*x[1]+l*x[3]-l):T.xOffset=T.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},Fe=function(t){return!!(Ae&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Ie=[1,0,0,1,0,0],Ee=function(t,e){var i,s,r,n,a,o=t._gsTransform||new Oe,l=1e5;if(Pe?s=Q(t,ke,null,!0):t.currentStyle&&(s=t.currentStyle.filter.match(C),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),o.x||0,o.y||0].join(","):""),i=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,(o.svg||t.getBBox&&Fe(t))&&(i&&-1!==(t.style[Pe]+"").indexOf("matrix")&&(s=t.style[Pe],i=0),r=t.getAttribute("transform"),i&&r&&(-1!==r.indexOf("matrix")?(s=r,i=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Ie;for(r=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ve=r.length;--ve>-1;)n=Number(r[ve]),r[ve]=(a=n-(n|=0))?(0|a*l+(0>a?-.5:.5))/l+n:n;return e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r},Ne=B.getTransform=function(t,i,s,n){if(t._gsTransform&&s&&!n)return t._gsTransform;var o,l,h,_,u,c,f=s?t._gsTransform||new Oe:new Oe,p=0>f.scaleX,m=2e-5,d=1e5,g=Re?parseFloat(Q(t,Se,i,!1,"0 0 0").split(" ")[2])||f.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(f.svg=!(!t.getBBox||!Fe(t)),f.svg&&(ze(t,Q(t,Se,r,!1,"50% 50%")+"",f,t.getAttribute("data-svg-origin")),we=a.useSVGTransformAttr||Me),o=Ee(t),o!==Ie){if(16===o.length){var y,T,x,w,b,P=o[0],k=o[1],S=o[2],R=o[3],O=o[4],A=o[5],C=o[6],D=o[7],M=o[8],z=o[9],I=o[10],E=o[12],N=o[13],L=o[14],X=o[11],B=Math.atan2(C,I);f.zOrigin&&(L=-f.zOrigin,E=M*L-o[12],N=z*L-o[13],L=I*L+f.zOrigin-o[14]),f.rotationX=B*F,B&&(w=Math.cos(-B),b=Math.sin(-B),y=O*w+M*b,T=A*w+z*b,x=C*w+I*b,M=O*-b+M*w,z=A*-b+z*w,I=C*-b+I*w,X=D*-b+X*w,O=y,A=T,C=x),B=Math.atan2(M,I),f.rotationY=B*F,B&&(w=Math.cos(-B),b=Math.sin(-B),y=P*w-M*b,T=k*w-z*b,x=S*w-I*b,z=k*b+z*w,I=S*b+I*w,X=R*b+X*w,P=y,k=T,S=x),B=Math.atan2(k,P),f.rotation=B*F,B&&(w=Math.cos(-B),b=Math.sin(-B),P=P*w+O*b,T=k*w+A*b,A=k*-b+A*w,C=S*-b+C*w,k=T),f.rotationX&&Math.abs(f.rotationX)+Math.abs(f.rotation)>359.9&&(f.rotationX=f.rotation=0,f.rotationY+=180),f.scaleX=(0|Math.sqrt(P*P+k*k)*d+.5)/d,f.scaleY=(0|Math.sqrt(A*A+z*z)*d+.5)/d,f.scaleZ=(0|Math.sqrt(C*C+I*I)*d+.5)/d,f.skewX=0,f.perspective=X?1/(0>X?-X:X):0,f.x=E,f.y=N,f.z=L,f.svg&&(f.x-=f.xOrigin-(f.xOrigin*P-f.yOrigin*O),f.y-=f.yOrigin-(f.yOrigin*k-f.xOrigin*A))}else if(!(Re&&!n&&o.length&&f.x===o[4]&&f.y===o[5]&&(f.rotationX||f.rotationY)||void 0!==f.x&&"none"===Q(t,"display",i))){var j=o.length>=6,Y=j?o[0]:1,U=o[1]||0,q=o[2]||0,V=j?o[3]:1;f.x=o[4]||0,f.y=o[5]||0,h=Math.sqrt(Y*Y+U*U),_=Math.sqrt(V*V+q*q),u=Y||U?Math.atan2(U,Y)*F:f.rotation||0,c=q||V?Math.atan2(q,V)*F+u:f.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(p?(h*=-1,c+=0>=u?180:-180,u+=0>=u?180:-180):(_*=-1,c+=0>=c?180:-180)),f.scaleX=h,f.scaleY=_,f.rotation=u,f.skewX=c,Re&&(f.rotationX=f.rotationY=f.z=0,f.perspective=v,f.scaleZ=1),f.svg&&(f.x-=f.xOrigin-(f.xOrigin*Y+f.yOrigin*q),f.y-=f.yOrigin-(f.xOrigin*U+f.yOrigin*V))}f.zOrigin=g;for(l in f)m>f[l]&&f[l]>-m&&(f[l]=0)}return s&&(t._gsTransform=f,f.svg&&(we&&t.style[Pe]?e.delayedCall(.001,function(){je(t.style,Pe)}):!we&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),f},Le=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,l=(0|Math.sin(r)*s.scaleX*a)/a,h=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,c=this.t.currentStyle;if(c){i=l,l=-h,h=-i,e=c.filter,u.filter="";var f,p,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+_,w=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,p=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+p*l),b+=p-(f*h+p*_)),v?(f=d/2,p=g/2,y+=", Dx="+(f-(f*o+p*l)+w)+", Dy="+(p-(f*h+p*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,k,S,R=8>m?1:-1;for(f=s.ieOffsetX||0,p=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>l?-l:l)*g))/2+w),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>h?-h:h)*d))/2+b),ve=0;4>ve;ve++)k=ee[ve],P=c[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(T,""))||0,S=i!==s[k]?2>ve?-s.ieOffsetX:-s.ieOffsetY:2>ve?f-s.ieOffsetX:p-s.ieOffsetY,u[k]=(s[k]=Math.round(i-S*(0===ve||2===ve?1:R)))+"px"}}},Xe=B.set3DTransformRatio=B.setTransformRatio=function(t){var e,i,s,r,n,a,o,l,h,_,u,c,p,m,d,g,v,y,T,x,w,b,P,k=this.data,S=this.t.style,R=k.rotation,O=k.rotationX,A=k.rotationY,C=k.scaleX,D=k.scaleY,M=k.scaleZ,F=k.x,I=k.y,E=k.z,N=k.svg,L=k.perspective,X=k.force3D;if(!(((1!==t&&0!==t||"auto"!==X||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&X||E||L||A||O)&&(!we||!N)&&Re))return R||k.skewX||N?(R*=z,b=k.skewX*z,P=1e5,e=Math.cos(R)*C,r=Math.sin(R)*C,i=Math.sin(R-b)*-D,n=Math.cos(R-b)*D,b&&"simple"===k.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,k.skewY&&(e*=v,r*=v)),N&&(F+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,I+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset,we&&(k.xPercent||k.yPercent)&&(m=this.t.getBBox(),F+=.01*k.xPercent*m.width,I+=.01*k.yPercent*m.height),m=1e-6,m>F&&F>-m&&(F=0),m>I&&I>-m&&(I=0)),T=(0|e*P)/P+","+(0|r*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+F+","+I+")",N&&we?this.t.setAttribute("transform","matrix("+T):S[Pe]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+T):S[Pe]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+C+",0,0,"+D+","+F+","+I+")",void 0;if(f&&(m=1e-4,m>C&&C>-m&&(C=M=2e-5),m>D&&D>-m&&(D=M=2e-5),!L||k.z||k.rotationX||k.rotationY||(L=0)),R||k.skewX)R*=z,d=e=Math.cos(R),g=r=Math.sin(R),k.skewX&&(R-=k.skewX*z,d=Math.cos(R),g=Math.sin(R),"simple"===k.skewType&&(v=Math.tan(k.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v,k.skewY&&(e*=v,r*=v))),i=-g,n=d;else{if(!(A||O||1!==M||L||N))return S[Pe]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) translate3d(":"translate3d(")+F+"px,"+I+"px,"+E+"px)"+(1!==C||1!==D?" scale("+C+","+D+")":""),void 0;e=n=1,i=r=0}h=1,s=a=o=l=_=u=0,c=L?-1/L:0,p=k.zOrigin,m=1e-6,x=",",w="0",R=A*z,R&&(d=Math.cos(R),g=Math.sin(R),o=-g,_=c*-g,s=e*g,a=r*g,h=d,c*=d,e*=d,r*=d),R=O*z,R&&(d=Math.cos(R),g=Math.sin(R),v=i*d+s*g,y=n*d+a*g,l=h*g,u=c*g,s=i*-g+s*d,a=n*-g+a*d,h*=d,c*=d,i=v,n=y),1!==M&&(s*=M,a*=M,h*=M,c*=M),1!==D&&(i*=D,n*=D,l*=D,u*=D),1!==C&&(e*=C,r*=C,o*=C,_*=C),(p||N)&&(p&&(F+=s*-p,I+=a*-p,E+=h*-p+p),N&&(F+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,I+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset),m>F&&F>-m&&(F=w),m>I&&I>-m&&(I=w),m>E&&E>-m&&(E=0)),T=k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?w:e)+x+(m>r&&r>-m?w:r)+x+(m>o&&o>-m?w:o),T+=x+(m>_&&_>-m?w:_)+x+(m>i&&i>-m?w:i)+x+(m>n&&n>-m?w:n),O||A?(T+=x+(m>l&&l>-m?w:l)+x+(m>u&&u>-m?w:u)+x+(m>s&&s>-m?w:s),T+=x+(m>a&&a>-m?w:a)+x+(m>h&&h>-m?w:h)+x+(m>c&&c>-m?w:c)+x):T+=",0,0,0,0,1,0,",T+=F+x+I+x+E+x+(L?1+-E/L:1)+")",S[Pe]=T};h=Oe.prototype,h.x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=h.xOffset=h.yOffset=0,h.scaleX=h.scaleY=h.scaleZ=1,Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,s,n,o,l){if(s._lastParsedTransform===l)return n;s._lastParsedTransform=l;var h,_,u,c,f,p,m,d,g,v,y=t._gsTransform,T=t.style,x=1e-6,w=be.length,b=l,P={},k="transformOrigin";if(l.display?(c=Q(t,"display"),T.display="block",h=Ne(t,r,!0,l.parseTransform),T.display=c):h=Ne(t,r,!0,l.parseTransform),s._transform=h,"string"==typeof b.transform&&Pe)c=L.style,c[Pe]=b.transform,c.display="block",c.position="absolute",E.body.appendChild(L),_=Ne(L,null,!1),E.body.removeChild(L),_.perspective||(_.perspective=h.perspective),null!=b.xPercent&&(_.xPercent=ne(b.xPercent,h.xPercent)),null!=b.yPercent&&(_.yPercent=ne(b.yPercent,h.yPercent));else if("object"==typeof b){if(_={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,h.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,h.scaleY),scaleZ:ne(b.scaleZ,h.scaleZ),x:ne(b.x,h.x),y:ne(b.y,h.y),z:ne(b.z,h.z),xPercent:ne(b.xPercent,h.xPercent),yPercent:ne(b.yPercent,h.yPercent),perspective:ne(b.transformPerspective,h.perspective)},d=b.directionalRotation,null!=d)if("object"==typeof d)for(c in d)b[c]=d[c];else b.rotation=d;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(_.x=0,_.xPercent=ne(b.x,h.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(_.y=0,_.yPercent=ne(b.y,h.yPercent)),_.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:h.rotation,h.rotation,"rotation",P),Re&&(_.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":h.rotationX||0,h.rotationX,"rotationX",P),_.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":h.rotationY||0,h.rotationY,"rotationY",P)),_.skewX=null==b.skewX?h.skewX:ae(b.skewX,h.skewX),_.skewY=null==b.skewY?h.skewY:ae(b.skewY,h.skewY),(u=_.skewY-h.skewY)&&(_.skewX+=u,_.rotation+=u)}for(Re&&null!=b.force3D&&(h.force3D=b.force3D,m=!0),h.skewType=b.skewType||h.skewType||a.defaultSkewType,p=h.force3D||h.z||h.rotationX||h.rotationY||_.z||_.rotationX||_.rotationY||_.perspective,p||null==b.scale||(_.scaleZ=1);--w>-1;)i=be[w],f=_[i]-h[i],(f>x||-x>f||null!=b[i]||null!=I[i])&&(m=!0,n=new me(h,i,h[i],f,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return f=b.transformOrigin,h.svg&&(f||b.svgOrigin)&&(g=h.xOffset,v=h.yOffset,ze(t,se(f),_,b.svgOrigin,b.smoothOrigin),n=de(h,"xOrigin",(y?h:_).xOrigin,_.xOrigin,n,k),n=de(h,"yOrigin",(y?h:_).yOrigin,_.yOrigin,n,k),(g!==h.xOffset||v!==h.yOffset)&&(n=de(h,"xOffset",y?g:h.xOffset,h.xOffset,n,k),n=de(h,"yOffset",y?v:h.yOffset,h.yOffset,n,k)),f=we?null:"0px 0px"),(f||Re&&p&&h.zOrigin)&&(Pe?(m=!0,i=Se,f=(f||Q(t,i,r,!1,"50% 50%"))+"",n=new me(T,i,0,0,n,-1,k),n.b=T[i],n.plugin=o,Re?(c=h.zOrigin,f=f.split(" "),h.zOrigin=(f.length>2&&(0===c||"0px"!==f[2])?parseFloat(f[2]):c)||0,n.xs0=n.e=f[0]+" "+(f[1]||"50%")+" 0px",n=new me(h,"zOrigin",0,0,n,-1,n.n),n.b=c,n.xs0=n.e=h.zOrigin):n.xs0=n.e=f):se(f+"",h)),m&&(s._transformType=h.svg&&we||!p&&3!==this._transformType?2:3),n},prefix:!0}),Te("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Te("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,_,u,c,f,p,m,d,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=W(b[l])),u=_=Q(t,b[l],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),c=h=o[l],f=parseFloat(u),v=u.substr((f+"").length),y="="===c.charAt(1),y?(p=parseInt(c.charAt(0)+"1",10),c=c.substr(2),p*=parseFloat(c),g=c.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(c),g=c.substr((p+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),x=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(x/d)+"%"):"em"===g?(w=$(t,"borderLeft",1,"em"),u=T/w+"em",_=x/w+"em"):(u=T+"px",_=x+"px"),y&&(c=parseFloat(u)+p+g,h=parseFloat(_)+p+g)),a=ge(P,b[l],u+" "+_,c+" "+h,!1,"0px",a);return a},prefix:!0,formatter:ce("0px 0px 0px 0px",!1,!0)}),Te("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,l,h,_,u,c,f="background-position",p=r||Z(t,null),d=this.format((p?m?p.getPropertyValue(f+"-x")+" "+p.getPropertyValue(f+"-y"):p.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);
if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(R,""),c&&"none"!==c)){for(o=d.split(" "),l=g.split(" "),X.setAttribute("src",c),h=2;--h>-1;)d=o[h],_=-1!==d.indexOf("%"),_!==(-1!==l[h].indexOf("%"))&&(u=0===h?t.offsetWidth-X.width:t.offsetHeight-X.height,o[h]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),Te("backgroundSize",{defaultValue:"0 0",formatter:se}),Te("perspective",{defaultValue:"0px",prefix:!0}),Te("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Te("transformStyle",{prefix:!0}),Te("backfaceVisibility",{prefix:!0}),Te("userSelect",{prefix:!0}),Te("margin",{parser:fe("marginTop,marginRight,marginBottom,marginLeft")}),Te("padding",{parser:fe("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Te("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,l,h;return 9>m?(l=t.currentStyle,h=8>m?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),Te("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Te("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),Te("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(ue)||["#000"])[0]}}),Te("borderWidth",{parser:fe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Te("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new me(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Be=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(x,"opacity="+r))};Te("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),Y?n=new me(l,"opacity",o,e-o,n):(n=new me(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Be),h&&(n=new me(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var je=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(k,"-$1").toLowerCase())):t.removeAttribute(e))},Ye=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:je(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};Te("className",{parser:function(t,e,s,n,a,o,l){var h,_,u,c,f,p=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new me(t,s,0,0,a,2),a.setRatio=Ye,a.pr=-11,i=!0,a.b=p,_=K(t,r),u=t._gsClassPT){for(c={},f=u.data;f;)c[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),h=J(t,_,K(t),l,c),t.setAttribute("class",p),a.data=h.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,h.difs,a,o)}});var Ue=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n,a=this.t.style,o=l.transform.parse;if("all"===this.e)a.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],l[i]&&(l[i].parse===o?r=!0:i="transformOrigin"===i?Se:l[i].p),je(a,i);r&&(je(a,Pe),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(Te("clearProps",{parser:function(t,e,s,r,n){return n=new me(t,s,0,0,n,2),n.setRatio=Ue,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ve=h.length;ve--;)xe(h[ve]);h=a.prototype,h._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var h,f,m,d,g,v,y,T,x,b=t.style;if(u&&""===b.zIndex&&(h=Q(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(d=b.cssText,h=K(t,r),b.cssText=d+";"+e,h=J(t,h,K(t)).difs,!Y&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,b.cssText=d),this._firstPT=f=e.className?l.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(x=3===this._transformType,Pe?c&&(u=!0,""===b.zIndex&&(y=Q(t,"zIndex",r),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),p&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):b.zoom=1,m=f;m&&m._next;)m=m._next;T=new me(t,"transform",0,0,null,2),this._linkCSSP(T,null,m),T.setRatio=Pe?Xe:Le,T.data=this._transform||Ne(t,r,!0),T.tween=o,T.pr=-1,n.pop()}if(i){for(;f;){for(v=f._next,m=d;m&&m.pr>f.pr;)m=m._next;(f._prev=m?m._prev:g)?f._prev._next=f:d=f,(f._next=m)?m._prev=f:g=f,f=v}this._firstPT=d}return!0},h.parse=function(t,e,i,n){var a,o,h,u,c,f,p,m,d,g,v=t.style;for(a in e)f=e[a],o=l[a],o?i=o.parse(t,f,a,this,i,n,e):(c=Q(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(f)?(d||(f=he(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=ge(v,a,c,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(h=parseFloat(c),p=h||0===h?c.substr((h+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(h=ie(t,a,r),p="px"):"left"===a||"top"===a?(h=H(t,a,r),p="px"):(h="opacity"!==a?0:1,p="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(T,"")):(u=parseFloat(f),m=d?f.replace(T,""):""),""===m&&(m=a in s?s[a]:p),f=u||0===u?(g?u+h:u)+m:e[a],p!==m&&""!==m&&(u||0===u)&&h&&(h=$(t,a,h,p),"%"===m?(h/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(c=h+"%")):"em"===m||"rem"===m?h/=$(t,a,1,m):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+h+m)),g&&(u+=h),!h&&0!==h||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new me(v,a,u||h||0,0,i,-1,a,!1,0,c,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:c):q("invalid "+a+" tween value: "+e[a]):(i=new me(v,a,h,u-h,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,c,f),i.xs0=m)):i=ge(v,a,c,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;){if(2!==r.type)if(r.r&&-1!==r.type)if(e=Math.round(r.s+r.c),r.type){if(1===r.type){for(s=r.l,i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}}else r.t[r.p]=e+r.xs0;else r.t[r.p]=r.e;else r.setRatio(t);r=r._next}},h._enableTransforms=function(t){this._transform=this._transform||Ne(this._target,r,!0),this._transformType=this._transform.svg&&we||!t&&3!==this._transformType?2:3};var qe=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var s=this._firstPT=new me(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=qe,s.data=this},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Ve=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Ve(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Ve(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o,l=e.to(t,i,s),h=[l],_=[],u=[],c=[],f=e._internals.reservedProps;for(t=l._targets||l.target,Ve(t,_,c),l.render(i,!0,!0),Ve(t,u),l.render(0,!0,!0),l._enabled(!0),r=c.length;--r>-1;)if(n=J(c[r],_[r],u[r]),n.firstMPT){n=n.difs;for(a in s)f[a]&&(n[a]=s[a]);o={};for(a in n)o[a]=_[r][a];h.push(e.fromTo(c[r],i,o,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=function(t){for(;t;)t.f||t.blob||(t.r=1),t=t._next},i=t.prototype;i._onInitAllProps=function(){for(var t,i,s,r=this._tween,n=r.vars.roundProps.join?r.vars.roundProps:r.vars.roundProps.split(","),a=n.length,o={},l=r._propLookup.roundProps;--a>-1;)o[n[a]]=1;for(a=n.length;--a>-1;)for(t=n[a],i=r._firstPT;i;)s=i._next,i.pg?i.t._roundProps(o,!0):i.n===t&&(2===i.f&&i.t?e(i.t._firstPT):(this._add(i.t,t,i.s,i.c),s&&(s._prev=i._prev),i._prev?i._prev._next=s:r._firstPT===i&&(r._firstPT=s),i._next=i._prev=null,r._propLookup[t]=l)),i=s;return!1},i._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(t,e){var i;if("function"!=typeof t.setAttribute)return!1;for(i in e)this._addTween(t,"setAttribute",t.getAttribute(i)+"",e[i]+"",i,!1,i),this._overwriteProps.push(i);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,l=e.useRadians===!0?2*Math.PI:360,h=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=l,a!==a%(l/2)&&(a=0>a?a+l:a-l)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*l)%l-(0|a/l)*l:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*l)%l-(0|a/l)*l)),(a>h||-h>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,l=n._class,h=function(e,i){var s=l("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=l("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=l("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=l("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=l("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=l("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,l=e.taper||"none",h=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===l?r=g:"out"===l?(n=1-i,r=n*n*g):"in"===l?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),h[_++]={x:i,y:s};for(h.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=h[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",h("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),h("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),h("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",h("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),h("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),h("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=l("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",h("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),h("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),h("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",h("SineOut",function(t){return Math.sin(t*o)}),h("SineIn",function(t){return-Math.cos(t*o)+1}),h("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),l("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,l=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},c=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),p={},m=function(s,r,n,a){this.sc=p[s]?p[s].sc:[],p[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(h){for(var _,u,c,f,d,g=r.length,v=g;--g>-1;)(_=p[r[g]]||new m(r[g],[])).gsClass?(o[g]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&n)for(u=("com.greensock."+s).split("."),c=u.pop(),f=l(u.join("."))[c]=this.gsClass=n.apply(n,o),a&&(i[c]=f,d="undefined"!=typeof module&&module.exports,!d&&"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&d&&(module.exports=f)),g=0;this.sc.length>g;g++)this.sc[g].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),x=T.map={},w=T.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?g("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],x[n+"."+o]=x[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,w(new T(null,null,1,r),n,"easeOut",!0),w(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),w(new T(null,null,3,r),n,"easeInOut");x.linear=h.easing.Linear.easeIn,x.swing=h.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)n=h[l],n.c===e&&n.s===i?h.splice(l,1):0===_&&r>n.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,k=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},R=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],k=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,l,h=this,u=S(),f=e!==!1&&P,p=500,m=33,d="tick",g=function(t){var e,a,o=S()-R;o>p&&(u+=o-m),R+=o,h.time=(R-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&h.dispatchEvent(d)};b.call(h),h.time=h.frame=0,h.tick=function(){g(!0)},h.lagSmoothing=function(t,e){p=t||1/_,m=Math.min(e,p,0)},h.sleep=function(){null!=r&&(f&&k?k(r):clearTimeout(r),s=c,r=null,h===a&&(o=!1))},h.wake=function(){null!==r?h.sleep():h.frame>10&&(R=S()-p+5),s=0===i?c:f&&P?P:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),g(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),l=this.time+n,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,h.fps(i),void 0):f},h.fps(t),setTimeout(function(){f&&5>h.frame&&h.useRAF(!1)},1500)}),n=h.Ticker.prototype=new h.events.EventDispatcher,n.constructor=h.Ticker;var O=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,W){o||a.wake();var i=this.vars.useFrames?G:W;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=O.ticker=new h.Ticker,n=O.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var A=function(){o&&S()-R>2e3&&a.wake(),setTimeout(A,2e3)};A(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||y)},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(F.length&&Q(),this.render(t,e,!1),F.length&&Q())}return this},n.progress=n.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&(e=s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){O.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new O,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(O.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?V[D.defaultOverwrite]:"number"==typeof l?l>>0:V[l],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=$(n,this,!1),1===l&&this._siblings[r].length>1&&K(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=$(e,this,!1),1===l&&this._siblings.length>1&&K(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!j[i]||j[i]&&j[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new O,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.18.0",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=120,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var F=[],I={},E=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},L=function(t,e,i,s){var r,n,a,o,l,h,_,u=[t,e],c=0,f="",p=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,r=t.match(E)||[],n=e.match(E)||[],s&&(s._next=null,s.blob=1,u._firstPT=s),l=n.length,o=0;l>o;o++)_=n[o],h=e.substr(c,e.indexOf(_,c)-c),f+=h||!o?h:",",c+=h.length,p?p=(p+1)%5:"rgba("===h.substr(-5)&&(p=1),_===r[o]||o>=r.length?f+=_:(f&&(u.push(f),f=""),a=parseFloat(r[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*parseFloat(_.substr(2)):parseFloat(_)-a)||0,f:0,r:p&&4>p}),c+=_.length;return f+=e.substr(c),f&&u.push(f),u.setRatio=N,u},X=function(t,e,i,s,r,n,a,o){var l,h,_="get"===i?t[e]:i,u=typeof t[e],c="string"==typeof s&&"="===s.charAt(1),f={t:t,p:e,s:_,f:"function"===u,pg:0,n:r||e,r:n,pr:0,c:c?parseInt(s.charAt(0)+"1",10)*parseFloat(s.substr(2)):parseFloat(s)-_||0};return"number"!==u&&("function"===u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),f.s=_=a?t[h](a):t[h]()),"string"==typeof _&&(a||isNaN(_))?(f.fp=a,l=L(_,s,o||D.defaultStringFilter,f),f={t:l,p:"setRatio",s:0,c:1,f:2,pg:0,n:r||e,pr:0}):c||(f.c=parseFloat(s)-parseFloat(_)||0)),f.c?((f._next=this._firstPT)&&(f._next._prev=f),this._firstPT=f,f):void 0},B=D._internals={isArray:f,isSelector:M,lazyTweens:F,blobDif:L},j=D._plugins={},Y=B.tweenLookup={},U=0,q=B.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=O._rootFramesTimeline=new C,W=O._rootTimeline=new C,Z=30,Q=B.lazyRender=function(){var t,e=F.length;for(I={};--e>-1;)t=F[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);F.length=0};W._startTime=a.time,G._startTime=a.frame,W._active=G._active=!0,setTimeout(Q,1),O._updateRoot=D.render=function(){var t,e,i;if(F.length&&Q(),W.render((a.time-W._startTime)*W._timeScale,!1,!1),G.render((a.frame-G._startTime)*G._timeScale,!1,!1),F.length&&Q(),a.frame>=Z){Z=a.frame+(parseInt(D.autoSleep,10)||120);
for(i in Y){for(e=Y[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete Y[i]}if(i=W._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",O._updateRoot);var $=function(t,e,i){var s,r,n=t._gsTweenID;if(Y[n||(t._gsTweenID=n="t"+U++)]||(Y[n]={target:t,tweens:[]}),e&&(s=Y[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return Y[n].tweens},H=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},K=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,c=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||J(e,0,p),0===J(o,h,p)&&(c[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(c[f++]=o)));for(n=f;--n>-1;)if(o=c[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!H(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},J=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)q[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=D.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof T?h:"function"==typeof h?new T(h,n.easeParams):x[h]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;I[e._gsTweenID]&&Q(),this.vars.css||e.style&&e!==t&&e.nodeType&&j.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars)if(_=this.vars[n],q[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(j[n]&&(l=new j[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else i[n]=X.call(this,e,n,"get",_,n,0,null,this.vars.stringFilter);return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&K(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(I[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_&&"isPause"!==this.data)&&h!==t&&(i=!0,h>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,c=this._easeType,f=this._easePower;(1===c||3===c&&u>=.5)&&(u=1-u),3===c&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===c?1-u:2===c?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,F.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,l,h,_,u,c=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((f(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!H(this,i,e,u))return!1}for(n in h)(a=o[n])&&(c&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],O.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=$(s[i],this,!0);else this._siblings=$(this.target,this,!0)}return O.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((f(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=$(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var te=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=te.prototype},!0);if(n=te.prototype,te.version="1.18.0",te.API=2,n._firstPT=null,n._addTween=X,n.setRatio=N,n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},te.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===te.API&&(j[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){te.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new te(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,te.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in p)p[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 *  howler.js v2.1.1
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Pool of unlocked HTML5 Audio objects.
      self._html5AudioPool = [];
      self.html5PoolSize = 10;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto audio unlocker.
      self.autoUnlock = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function() {
      var self = this || Howler;

      // Only run this on certain browsers/devices.
      var shouldUnlock = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome|Safari/i.test(self._navigator && self._navigator.userAgent);
      if (self._audioUnlocked || !self.ctx || !shouldUnlock) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        for (var i=0; i<self.html5PoolSize; i++) {
          var audioNode = new Audio();

          // Mark this Audio object as unlocked to ensure it can get returned
          // to the unlocked pool when released.
          audioNode._unlocked = true;

          // Add the audio node to the pool.
          self._releaseHtml5Audio(audioNode);
        }

        // Loop through any assigned audio nodes and unlock them.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and unlock the audio nodes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;
                sound._node.load();
              }
            }
          }
        }

        // Fix Android can not play in suspend state.
        self._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._audioUnlocked = true;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true);

          // Let all sounds know that audio has been unlocked.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);

      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function() {
      var self = this || Howler;

      // Return the next object from the pool if one exists.
      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      }

      //.Check if the audio is locked and throw a warning.
      var testPlay = new Audio().play();
      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay.catch(function() {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function(audio) {
      var self = this || Howler;

      // Don't add audio to the pool if we don't know if it has been unlocked.
      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';
        self.ctx.suspend().then(function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        });
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhrWithCredentials = o.xhrWithCredentials || false;

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload) {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended. 
        // If there is, play that sound. If not, continue as usual.  
        if (!self._playLock) {
          var num = 0;
          for (var i=0; i<self._sounds.length; i++) {
            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
              num++;
              id = self._sounds[i]._id;
            }
          }

          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Mark this sound as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      var loop = !!(sound._loop || self._sprite[sprite][2]);
      sound._sprite = sprite;

      // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.
      sound._ended = false;

      // Update the parameters of the sound.
      var setParams = function() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = loop;
      };

      // End the sound instantly if seek is at the end.
      if (seek >= stop) {
        self._ended(sound);
        return;
      }

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._playLock = false;
          setParams();
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running') {
          playWebAudio();
        } else {
          self._playLock = true;

          // Wait for the audio context to resume before playing.
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Some browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Set param values immediately.
              setParams();

              // Releases the lock and executes queued actions.
              play
                .then(function() {
                  self._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self._emit('play', sound._id);
                    self._loadQueue();
                  }
                })
                .catch(function() {
                  self._playLock = false;
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                    'on mobile devices and Chrome where playback was not within a user interaction.');

                  // Reset the ended and paused values.
                  sound._ended = true;
                  sound._paused = true;
                });
            } else if (!internal) {
              self._playLock = false;
              setParams();
              self._emit('play', sound._id);
              self._loadQueue();
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices and Chrome where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;

          var listener = function() {
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded'|| self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Make sure the to/from/len values are numbers.
      from = parseFloat(from);
      to = parseFloat(to);
      len = parseFloat(len);

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Make sure the volume is in the right bounds.
        vol = Math.max(0, vol);
        vol = Math.min(1, vol);

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          }

          // Seek and emit when ready.
          var seekAndEmit = function() {
            self._emit('seek', id);

            // Restart the playback if the sound was playing.
            if (playing) {
              self.play(id, true);
            }
          };

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
          if (!checkIE) {
            sounds[i]._node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
          }

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);

          // Release the Audio object back to the pool.
          Howler._releaseHtml5Audio(sounds[i]._node);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        if (isIOS) {
          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
        }
      }
      node.bufferSource = null;

      return self;
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = 'auto';
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.withCredentials = self._xhrWithCredentials;
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    var success = function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    };

    // Decode the buffer into an audio source.
    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  }

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    }

    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // If the audio context creation still failed, set using web audio to false.
    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    });
  }

  // Add support for CommonJS libraries such as browserify.
  if (typeof exports !== 'undefined') {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Define globally in case AMD is not available or unused.
  if (typeof window !== 'undefined') {
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.1.1
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();


(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PIXI=f()}})(function(){var define,module,exports;return(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var EMPTY_ARRAY_BUFFER=new ArrayBuffer(0);var Buffer=function(gl,type,data,drawType)
{this.gl=gl;this.buffer=gl.createBuffer();this.type=type||gl.ARRAY_BUFFER;this.drawType=drawType||gl.STATIC_DRAW;this.data=EMPTY_ARRAY_BUFFER;if(data)
{this.upload(data);}
this._updateID=0;};Buffer.prototype.upload=function(data,offset,dontBind)
{if(!dontBind)this.bind();var gl=this.gl;data=data||this.data;offset=offset||0;if(this.data.byteLength>=data.byteLength)
{gl.bufferSubData(this.type,offset,data);}
else
{gl.bufferData(this.type,data,this.drawType);}
this.data=data;};Buffer.prototype.bind=function()
{var gl=this.gl;gl.bindBuffer(this.type,this.buffer);};Buffer.createVertexBuffer=function(gl,data,drawType)
{return new Buffer(gl,gl.ARRAY_BUFFER,data,drawType);};Buffer.createIndexBuffer=function(gl,data,drawType)
{return new Buffer(gl,gl.ELEMENT_ARRAY_BUFFER,data,drawType);};Buffer.create=function(gl,type,data,drawType)
{return new Buffer(gl,type,data,drawType);};Buffer.prototype.destroy=function(){this.gl.deleteBuffer(this.buffer);};module.exports=Buffer;},{}],2:[function(require,module,exports){var Texture=require('./GLTexture');var Framebuffer=function(gl,width,height)
{this.gl=gl;this.framebuffer=gl.createFramebuffer();this.stencil=null;this.texture=null;this.width=width||100;this.height=height||100;};Framebuffer.prototype.enableTexture=function(texture)
{var gl=this.gl;this.texture=texture||new Texture(gl);this.texture.bind();this.bind();gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.texture.texture,0);};Framebuffer.prototype.enableStencil=function()
{if(this.stencil)return;var gl=this.gl;this.stencil=gl.createRenderbuffer();gl.bindRenderbuffer(gl.RENDERBUFFER,this.stencil);gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_STENCIL_ATTACHMENT,gl.RENDERBUFFER,this.stencil);gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_STENCIL,this.width,this.height);};Framebuffer.prototype.clear=function(r,g,b,a)
{this.bind();var gl=this.gl;gl.clearColor(r,g,b,a);gl.clear(gl.COLOR_BUFFER_BIT);};Framebuffer.prototype.bind=function()
{var gl=this.gl;if(this.texture)
{this.texture.unbind();}
gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer);};Framebuffer.prototype.unbind=function()
{var gl=this.gl;gl.bindFramebuffer(gl.FRAMEBUFFER,null);};Framebuffer.prototype.resize=function(width,height)
{var gl=this.gl;this.width=width;this.height=height;if(this.texture)
{this.texture.uploadData(null,width,height);}
if(this.stencil)
{gl.bindRenderbuffer(gl.RENDERBUFFER,this.stencil);gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_STENCIL,width,height);}};Framebuffer.prototype.destroy=function()
{var gl=this.gl;if(this.texture)
{this.texture.destroy();}
gl.deleteFramebuffer(this.framebuffer);this.gl=null;this.stencil=null;this.texture=null;};Framebuffer.createRGBA=function(gl,width,height,data)
{var texture=Texture.fromData(gl,null,width,height);texture.enableNearestScaling();texture.enableWrapClamp();var fbo=new Framebuffer(gl,width,height);fbo.enableTexture(texture);fbo.unbind();return fbo;};Framebuffer.createFloat32=function(gl,width,height,data)
{var texture=new Texture.fromData(gl,data,width,height);texture.enableNearestScaling();texture.enableWrapClamp();var fbo=new Framebuffer(gl,width,height);fbo.enableTexture(texture);fbo.unbind();return fbo;};module.exports=Framebuffer;},{"./GLTexture":4}],3:[function(require,module,exports){var compileProgram=require('./shader/compileProgram'),extractAttributes=require('./shader/extractAttributes'),extractUniforms=require('./shader/extractUniforms'),generateUniformAccessObject=require('./shader/generateUniformAccessObject');var Shader=function(gl,vertexSrc,fragmentSrc,attributeLocations)
{this.gl=gl;this.program=compileProgram(gl,vertexSrc,fragmentSrc,attributeLocations);this.attributes=extractAttributes(gl,this.program);var uniformData=extractUniforms(gl,this.program);this.uniforms=generateUniformAccessObject(gl,uniformData);};Shader.prototype.bind=function()
{this.gl.useProgram(this.program);};Shader.prototype.destroy=function()
{};module.exports=Shader;},{"./shader/compileProgram":9,"./shader/extractAttributes":11,"./shader/extractUniforms":12,"./shader/generateUniformAccessObject":13}],4:[function(require,module,exports){var Texture=function(gl,width,height,format,type)
{this.gl=gl;this.texture=gl.createTexture();this.mipmap=false;this.premultiplyAlpha=false;this.width=width||-1;this.height=height||-1;this.format=format||gl.RGBA;this.type=type||gl.UNSIGNED_BYTE;};Texture.prototype.upload=function(source)
{this.bind();var gl=this.gl;gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha);var newWidth=source.videoWidth||source.width;var newHeight=source.videoHeight||source.height;if(newHeight!==this.height||newWidth!==this.width)
{gl.texImage2D(gl.TEXTURE_2D,0,this.format,this.format,this.type,source);}
else
{gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,this.format,this.type,source);}
this.width=newWidth;this.height=newHeight;};var FLOATING_POINT_AVAILABLE=false;Texture.prototype.uploadData=function(data,width,height)
{this.bind();var gl=this.gl;if(data instanceof Float32Array)
{if(!FLOATING_POINT_AVAILABLE)
{var ext=gl.getExtension("OES_texture_float");if(ext)
{FLOATING_POINT_AVAILABLE=true;}
else
{throw new Error('floating point textures not available');}}
this.type=gl.FLOAT;}
else
{this.type=gl.UNSIGNED_BYTE;}
gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha);if(width!==this.width||height!==this.height)
{gl.texImage2D(gl.TEXTURE_2D,0,this.format,width,height,0,this.format,this.type,data||null);}
else
{gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,width,height,this.format,this.type,data||null);}
this.width=width;this.height=height;};Texture.prototype.bind=function(location)
{var gl=this.gl;if(location!==undefined)
{gl.activeTexture(gl.TEXTURE0+location);}
gl.bindTexture(gl.TEXTURE_2D,this.texture);};Texture.prototype.unbind=function()
{var gl=this.gl;gl.bindTexture(gl.TEXTURE_2D,null);};Texture.prototype.minFilter=function(linear)
{var gl=this.gl;this.bind();if(this.mipmap)
{gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,linear?gl.LINEAR_MIPMAP_LINEAR:gl.NEAREST_MIPMAP_NEAREST);}
else
{gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,linear?gl.LINEAR:gl.NEAREST);}};Texture.prototype.magFilter=function(linear)
{var gl=this.gl;this.bind();gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,linear?gl.LINEAR:gl.NEAREST);};Texture.prototype.enableMipmap=function()
{var gl=this.gl;this.bind();this.mipmap=true;gl.generateMipmap(gl.TEXTURE_2D);};Texture.prototype.enableLinearScaling=function()
{this.minFilter(true);this.magFilter(true);};Texture.prototype.enableNearestScaling=function()
{this.minFilter(false);this.magFilter(false);};Texture.prototype.enableWrapClamp=function()
{var gl=this.gl;this.bind();gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);};Texture.prototype.enableWrapRepeat=function()
{var gl=this.gl;this.bind();gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.REPEAT);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.REPEAT);};Texture.prototype.enableWrapMirrorRepeat=function()
{var gl=this.gl;this.bind();gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.MIRRORED_REPEAT);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.MIRRORED_REPEAT);};Texture.prototype.destroy=function()
{var gl=this.gl;gl.deleteTexture(this.texture);};Texture.fromSource=function(gl,source,premultiplyAlpha)
{var texture=new Texture(gl);texture.premultiplyAlpha=premultiplyAlpha||false;texture.upload(source);return texture;};Texture.fromData=function(gl,data,width,height)
{var texture=new Texture(gl);texture.uploadData(data,width,height);return texture;};module.exports=Texture;},{}],5:[function(require,module,exports){var setVertexAttribArrays=require('./setVertexAttribArrays');function VertexArrayObject(gl,state)
{this.nativeVaoExtension=null;if(!VertexArrayObject.FORCE_NATIVE)
{this.nativeVaoExtension=gl.getExtension('OES_vertex_array_object')||gl.getExtension('MOZ_OES_vertex_array_object')||gl.getExtension('WEBKIT_OES_vertex_array_object');}
this.nativeState=state;if(this.nativeVaoExtension)
{this.nativeVao=this.nativeVaoExtension.createVertexArrayOES();var maxAttribs=gl.getParameter(gl.MAX_VERTEX_ATTRIBS);this.nativeState={tempAttribState:new Array(maxAttribs),attribState:new Array(maxAttribs)};}
this.gl=gl;this.attributes=[];this.indexBuffer=null;this.dirty=false;}
VertexArrayObject.prototype.constructor=VertexArrayObject;module.exports=VertexArrayObject;VertexArrayObject.FORCE_NATIVE=true;VertexArrayObject.prototype.bind=function()
{if(this.nativeVao)
{this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);if(this.dirty)
{this.dirty=false;this.activate();}}
else
{this.activate();}
return this;};VertexArrayObject.prototype.unbind=function()
{if(this.nativeVao)
{this.nativeVaoExtension.bindVertexArrayOES(null);}
return this;};VertexArrayObject.prototype.activate=function()
{var gl=this.gl;var lastBuffer=null;for(var i=0;i<this.attributes.length;i++)
{var attrib=this.attributes[i];if(lastBuffer!==attrib.buffer)
{attrib.buffer.bind();lastBuffer=attrib.buffer;}
gl.vertexAttribPointer(attrib.attribute.location,attrib.attribute.size,attrib.type||gl.FLOAT,attrib.normalized||false,attrib.stride||0,attrib.start||0);}
setVertexAttribArrays(gl,this.attributes,this.nativeState);this.indexBuffer.bind();return this;};VertexArrayObject.prototype.addAttribute=function(buffer,attribute,type,normalized,stride,start)
{this.attributes.push({buffer:buffer,attribute:attribute,location:attribute.location,type:type||this.gl.FLOAT,normalized:normalized||false,stride:stride||0,start:start||0});this.dirty=true;return this;};VertexArrayObject.prototype.addIndex=function(buffer)
{this.indexBuffer=buffer;this.dirty=true;return this;};VertexArrayObject.prototype.clear=function()
{if(this.nativeVao)
{this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);}
this.attributes.length=0;this.indexBuffer=null;return this;};VertexArrayObject.prototype.draw=function(type,size,start)
{var gl=this.gl;gl.drawElements(type,size||this.indexBuffer.data.length,gl.UNSIGNED_SHORT,start||0);return this;};VertexArrayObject.prototype.destroy=function()
{this.gl=null;this.indexBuffer=null;this.attributes=null;this.nativeState=null;if(this.nativeVao)
{this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao);}
this.nativeVaoExtension=null;this.nativeVao=null;};},{"./setVertexAttribArrays":8}],6:[function(require,module,exports){var createContext=function(canvas,options)
{var gl=canvas.getContext('webgl',options)||canvas.getContext('experimental-webgl',options);if(!gl)
{throw new Error('This browser does not support webGL. Try using the canvas renderer');}
return gl;};module.exports=createContext;},{}],7:[function(require,module,exports){var gl={createContext:require('./createContext'),setVertexAttribArrays:require('./setVertexAttribArrays'),GLBuffer:require('./GLBuffer'),GLFramebuffer:require('./GLFramebuffer'),GLShader:require('./GLShader'),GLTexture:require('./GLTexture'),VertexArrayObject:require('./VertexArrayObject'),shader:require('./shader')};if(typeof module!=='undefined'&&module.exports)
{module.exports=gl;}
if(typeof window!=='undefined')
{window.PIXI=window.PIXI||{};window.PIXI.glCore=gl;}},{"./GLBuffer":1,"./GLFramebuffer":2,"./GLShader":3,"./GLTexture":4,"./VertexArrayObject":5,"./createContext":6,"./setVertexAttribArrays":8,"./shader":14}],8:[function(require,module,exports){var setVertexAttribArrays=function(gl,attribs,state)
{var i;if(state)
{var tempAttribState=state.tempAttribState,attribState=state.attribState;for(i=0;i<tempAttribState.length;i++)
{tempAttribState[i]=false;}
for(i=0;i<attribs.length;i++)
{tempAttribState[attribs[i].attribute.location]=true;}
for(i=0;i<attribState.length;i++)
{if(attribState[i]!==tempAttribState[i])
{attribState[i]=tempAttribState[i];if(state.attribState[i])
{gl.enableVertexAttribArray(i);}
else
{gl.disableVertexAttribArray(i);}}}}
else
{for(i=0;i<attribs.length;i++)
{var attrib=attribs[i];gl.enableVertexAttribArray(attrib.attribute.location);}}};module.exports=setVertexAttribArrays;},{}],9:[function(require,module,exports){var compileProgram=function(gl,vertexSrc,fragmentSrc,attributeLocations)
{var glVertShader=compileShader(gl,gl.VERTEX_SHADER,vertexSrc);var glFragShader=compileShader(gl,gl.FRAGMENT_SHADER,fragmentSrc);var program=gl.createProgram();gl.attachShader(program,glVertShader);gl.attachShader(program,glFragShader);if(attributeLocations)
{for(var i in attributeLocations)
{gl.bindAttribLocation(program,attributeLocations[i],i)}}
gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))
{console.error('Pixi.js Error: Could not initialize shader.');console.error('gl.VALIDATE_STATUS',gl.getProgramParameter(program,gl.VALIDATE_STATUS));console.error('gl.getError()',gl.getError());if(gl.getProgramInfoLog(program)!=='')
{console.warn('Pixi.js Warning: gl.getProgramInfoLog()',gl.getProgramInfoLog(program));}
gl.deleteProgram(program);program=null;}
gl.deleteShader(glVertShader);gl.deleteShader(glFragShader);return program;};var compileShader=function(gl,type,src)
{var shader=gl.createShader(type);gl.shaderSource(shader,src);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))
{return null;}
return shader;};module.exports=compileProgram;},{}],10:[function(require,module,exports){var defaultValue=function(type,size)
{switch(type)
{case'float':return 0;case'vec2':return new Float32Array(2*size);case'vec3':return new Float32Array(3*size);case'vec4':return new Float32Array(4*size);case'int':case'sampler2D':return 0;case'ivec2':return new Int32Array(2*size);case'ivec3':return new Int32Array(3*size);case'ivec4':return new Int32Array(4*size);case'bool':return false;case'bvec2':return booleanArray(2*size);case'bvec3':return booleanArray(3*size);case'bvec4':return booleanArray(4*size);case'mat2':return new Float32Array([1,0,0,1]);case'mat3':return new Float32Array([1,0,0,0,1,0,0,0,1]);case'mat4':return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);}};var booleanArray=function(size)
{var array=new Array(size);for(var i=0;i<array.length;i++)
{array[i]=false;}
return array;};module.exports=defaultValue;},{}],11:[function(require,module,exports){var mapType=require('./mapType');var mapSize=require('./mapSize');var extractAttributes=function(gl,program)
{var attributes={};var totalAttributes=gl.getProgramParameter(program,gl.ACTIVE_ATTRIBUTES);for(var i=0;i<totalAttributes;i++)
{var attribData=gl.getActiveAttrib(program,i);var type=mapType(gl,attribData.type);attributes[attribData.name]={type:type,size:mapSize(type),location:gl.getAttribLocation(program,attribData.name),pointer:pointer};}
return attributes;};var pointer=function(type,normalized,stride,start){gl.vertexAttribPointer(this.location,this.size,type||gl.FLOAT,normalized||false,stride||0,start||0);};module.exports=extractAttributes;},{"./mapSize":15,"./mapType":16}],12:[function(require,module,exports){var mapType=require('./mapType');var defaultValue=require('./defaultValue');var extractUniforms=function(gl,program)
{var uniforms={};var totalUniforms=gl.getProgramParameter(program,gl.ACTIVE_UNIFORMS);for(var i=0;i<totalUniforms;i++)
{var uniformData=gl.getActiveUniform(program,i);var name=uniformData.name.replace(/\[.*?\]/,"");var type=mapType(gl,uniformData.type);uniforms[name]={type:type,size:uniformData.size,location:gl.getUniformLocation(program,name),value:defaultValue(type,uniformData.size)};}
return uniforms;};module.exports=extractUniforms;},{"./defaultValue":10,"./mapType":16}],13:[function(require,module,exports){var generateUniformAccessObject=function(gl,uniformData)
{var uniforms={data:{}};uniforms.gl=gl;var uniformKeys=Object.keys(uniformData);for(var i=0;i<uniformKeys.length;i++)
{var fullName=uniformKeys[i];var nameTokens=fullName.split('.');var name=nameTokens[nameTokens.length-1];var uniformGroup=getUniformGroup(nameTokens,uniforms);var uniform=uniformData[fullName];uniformGroup.data[name]=uniform;uniformGroup.gl=gl;Object.defineProperty(uniformGroup,name,{get:generateGetter(name),set:generateSetter(name,uniform)});}
return uniforms;};var generateGetter=function(name)
{var template=getterTemplate.replace('%%',name);return new Function(template);};var generateSetter=function(name,uniform)
{var template=setterTemplate.replace(/%%/g,name);var setTemplate;if(uniform.size===1)
{setTemplate=GLSL_TO_SINGLE_SETTERS[uniform.type];}
else
{setTemplate=GLSL_TO_ARRAY_SETTERS[uniform.type];}
if(setTemplate)
{template+="\nthis.gl."+setTemplate+";";}
return new Function('value',template);};var getUniformGroup=function(nameTokens,uniform)
{var cur=uniform;for(var i=0;i<nameTokens.length-1;i++)
{var o=cur[nameTokens[i]]||{data:{}};cur[nameTokens[i]]=o;cur=o;}
return cur;};var getterTemplate=['return this.data.%%.value;',].join('\n');var setterTemplate=['this.data.%%.value = value;','var location = this.data.%%.location;'].join('\n');var GLSL_TO_SINGLE_SETTERS={'float':'uniform1f(location, value)','vec2':'uniform2f(location, value[0], value[1])','vec3':'uniform3f(location, value[0], value[1], value[2])','vec4':'uniform4f(location, value[0], value[1], value[2], value[3])','int':'uniform1i(location, value)','ivec2':'uniform2i(location, value[0], value[1])','ivec3':'uniform3i(location, value[0], value[1], value[2])','ivec4':'uniform4i(location, value[0], value[1], value[2], value[3])','bool':'uniform1i(location, value)','bvec2':'uniform2i(location, value[0], value[1])','bvec3':'uniform3i(location, value[0], value[1], value[2])','bvec4':'uniform4i(location, value[0], value[1], value[2], value[3])','mat2':'uniformMatrix2fv(location, false, value)','mat3':'uniformMatrix3fv(location, false, value)','mat4':'uniformMatrix4fv(location, false, value)','sampler2D':'uniform1i(location, value)'};var GLSL_TO_ARRAY_SETTERS={'float':'uniform1fv(location, value)','vec2':'uniform2fv(location, value)','vec3':'uniform3fv(location, value)','vec4':'uniform4fv(location, value)','int':'uniform1iv(location, value)','ivec2':'uniform2iv(location, value)','ivec3':'uniform3iv(location, value)','ivec4':'uniform4iv(location, value)','bool':'uniform1iv(location, value)','bvec2':'uniform2iv(location, value)','bvec3':'uniform3iv(location, value)','bvec4':'uniform4iv(location, value)','sampler2D':'uniform1iv(location, value)'};module.exports=generateUniformAccessObject;},{}],14:[function(require,module,exports){module.exports={compileProgram:require('./compileProgram'),defaultValue:require('./defaultValue'),extractAttributes:require('./extractAttributes'),extractUniforms:require('./extractUniforms'),generateUniformAccessObject:require('./generateUniformAccessObject'),mapSize:require('./mapSize'),mapType:require('./mapType')};},{"./compileProgram":9,"./defaultValue":10,"./extractAttributes":11,"./extractUniforms":12,"./generateUniformAccessObject":13,"./mapSize":15,"./mapType":16}],15:[function(require,module,exports){var mapSize=function(type)
{return GLSL_TO_SIZE[type];};var GLSL_TO_SIZE={'float':1,'vec2':2,'vec3':3,'vec4':4,'int':1,'ivec2':2,'ivec3':3,'ivec4':4,'bool':1,'bvec2':2,'bvec3':3,'bvec4':4,'mat2':4,'mat3':9,'mat4':16,'sampler2D':1};module.exports=mapSize;},{}],16:[function(require,module,exports){var mapSize=function(gl,type)
{if(!GL_TABLE)
{var typeNames=Object.keys(GL_TO_GLSL_TYPES);GL_TABLE={};for(var i=0;i<typeNames.length;++i)
{var tn=typeNames[i];GL_TABLE[gl[tn]]=GL_TO_GLSL_TYPES[tn];}}
return GL_TABLE[type];};var GL_TABLE=null;var GL_TO_GLSL_TYPES={'FLOAT':'float','FLOAT_VEC2':'vec2','FLOAT_VEC3':'vec3','FLOAT_VEC4':'vec4','INT':'int','INT_VEC2':'ivec2','INT_VEC3':'ivec3','INT_VEC4':'ivec4','BOOL':'bool','BOOL_VEC2':'bvec2','BOOL_VEC3':'bvec3','BOOL_VEC4':'bvec4','FLOAT_MAT2':'mat2','FLOAT_MAT3':'mat3','FLOAT_MAT4':'mat4','SAMPLER_2D':'sampler2D'};module.exports=mapSize;},{}],17:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=eachLimit;var _eachOfLimit=require('./internal/eachOfLimit');var _eachOfLimit2=_interopRequireDefault(_eachOfLimit);var _withoutIndex=require('./internal/withoutIndex');var _withoutIndex2=_interopRequireDefault(_withoutIndex);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function eachLimit(coll,limit,iteratee,callback){(0,_eachOfLimit2.default)(limit)(coll,(0,_withoutIndex2.default)(iteratee),callback);}
module.exports=exports['default'];},{"./internal/eachOfLimit":21,"./internal/withoutIndex":28}],18:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _eachLimit=require('./eachLimit');var _eachLimit2=_interopRequireDefault(_eachLimit);var _doLimit=require('./internal/doLimit');var _doLimit2=_interopRequireDefault(_doLimit);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default=(0,_doLimit2.default)(_eachLimit2.default,1);module.exports=exports['default'];},{"./eachLimit":17,"./internal/doLimit":20}],19:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=DLL;function DLL(){this.head=this.tail=null;this.length=0;}
function setInitial(dll,node){dll.length=1;dll.head=dll.tail=node;}
DLL.prototype.removeLink=function(node){if(node.prev)node.prev.next=node.next;else this.head=node.next;if(node.next)node.next.prev=node.prev;else this.tail=node.prev;node.prev=node.next=null;this.length-=1;return node;};DLL.prototype.empty=DLL;DLL.prototype.insertAfter=function(node,newNode){newNode.prev=node;newNode.next=node.next;if(node.next)node.next.prev=newNode;else this.tail=newNode;node.next=newNode;this.length+=1;};DLL.prototype.insertBefore=function(node,newNode){newNode.prev=node.prev;newNode.next=node;if(node.prev)node.prev.next=newNode;else this.head=newNode;node.prev=newNode;this.length+=1;};DLL.prototype.unshift=function(node){if(this.head)this.insertBefore(this.head,node);else setInitial(this,node);};DLL.prototype.push=function(node){if(this.tail)this.insertAfter(this.tail,node);else setInitial(this,node);};DLL.prototype.shift=function(){return this.head&&this.removeLink(this.head);};DLL.prototype.pop=function(){return this.tail&&this.removeLink(this.tail);};module.exports=exports['default'];},{}],20:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=doLimit;function doLimit(fn,limit){return function(iterable,iteratee,callback){return fn(iterable,limit,iteratee,callback);};}
module.exports=exports['default'];},{}],21:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=_eachOfLimit;var _noop=require('lodash/noop');var _noop2=_interopRequireDefault(_noop);var _once=require('./once');var _once2=_interopRequireDefault(_once);var _iterator=require('./iterator');var _iterator2=_interopRequireDefault(_iterator);var _onlyOnce=require('./onlyOnce');var _onlyOnce2=_interopRequireDefault(_onlyOnce);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function _eachOfLimit(limit){return function(obj,iteratee,callback){callback=(0,_once2.default)(callback||_noop2.default);if(limit<=0||!obj){return callback(null);}
var nextElem=(0,_iterator2.default)(obj);var done=false;var running=0;function iterateeCallback(err){running-=1;if(err){done=true;callback(err);}else if(done&&running<=0){return callback(null);}else{replenish();}}
function replenish(){while(running<limit&&!done){var elem=nextElem();if(elem===null){done=true;if(running<=0){callback(null);}
return;}
running+=1;iteratee(elem.value,elem.key,(0,_onlyOnce2.default)(iterateeCallback));}}
replenish();};}
module.exports=exports['default'];},{"./iterator":23,"./once":24,"./onlyOnce":25,"lodash/noop":54}],22:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(coll){return iteratorSymbol&&coll[iteratorSymbol]&&coll[iteratorSymbol]();};var iteratorSymbol=typeof Symbol==='function'&&Symbol.iterator;module.exports=exports['default'];},{}],23:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=iterator;var _isArrayLike=require('lodash/isArrayLike');var _isArrayLike2=_interopRequireDefault(_isArrayLike);var _getIterator=require('./getIterator');var _getIterator2=_interopRequireDefault(_getIterator);var _keys=require('lodash/keys');var _keys2=_interopRequireDefault(_keys);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function createArrayIterator(coll){var i=-1;var len=coll.length;return function next(){return++i<len?{value:coll[i],key:i}:null;};}
function createES2015Iterator(iterator){var i=-1;return function next(){var item=iterator.next();if(item.done)return null;i++;return{value:item.value,key:i};};}
function createObjectIterator(obj){var okeys=(0,_keys2.default)(obj);var i=-1;var len=okeys.length;return function next(){var key=okeys[++i];return i<len?{value:obj[key],key:key}:null;};}
function iterator(coll){if((0,_isArrayLike2.default)(coll)){return createArrayIterator(coll);}
var iterator=(0,_getIterator2.default)(coll);return iterator?createES2015Iterator(iterator):createObjectIterator(coll);}
module.exports=exports['default'];},{"./getIterator":22,"lodash/isArrayLike":46,"lodash/keys":53}],24:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=once;function once(fn){return function(){if(fn===null)return;var callFn=fn;fn=null;callFn.apply(this,arguments);};}
module.exports=exports['default'];},{}],25:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=onlyOnce;function onlyOnce(fn){return function(){if(fn===null)throw new Error("Callback was already called.");var callFn=fn;fn=null;callFn.apply(this,arguments);};}
module.exports=exports['default'];},{}],26:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=queue;var _arrayEach=require('lodash/_arrayEach');var _arrayEach2=_interopRequireDefault(_arrayEach);var _isArray=require('lodash/isArray');var _isArray2=_interopRequireDefault(_isArray);var _noop=require('lodash/noop');var _noop2=_interopRequireDefault(_noop);var _rest=require('lodash/rest');var _rest2=_interopRequireDefault(_rest);var _onlyOnce=require('./onlyOnce');var _onlyOnce2=_interopRequireDefault(_onlyOnce);var _setImmediate=require('./setImmediate');var _setImmediate2=_interopRequireDefault(_setImmediate);var _DoublyLinkedList=require('./DoublyLinkedList');var _DoublyLinkedList2=_interopRequireDefault(_DoublyLinkedList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function queue(worker,concurrency,payload){if(concurrency==null){concurrency=1;}else if(concurrency===0){throw new Error('Concurrency must not be zero');}
function _insert(data,insertAtFront,callback){if(callback!=null&&typeof callback!=='function'){throw new Error('task callback must be a function');}
q.started=true;if(!(0,_isArray2.default)(data)){data=[data];}
if(data.length===0&&q.idle()){return(0,_setImmediate2.default)(function(){q.drain();});}
(0,_arrayEach2.default)(data,function(task){var item={data:task,callback:callback||_noop2.default};if(insertAtFront){q._tasks.unshift(item);}else{q._tasks.push(item);}});(0,_setImmediate2.default)(q.process);}
function _next(tasks){return(0,_rest2.default)(function(args){workers-=1;(0,_arrayEach2.default)(tasks,function(task){(0,_arrayEach2.default)(workersList,function(worker,index){if(worker===task){workersList.splice(index,1);return false;}});task.callback.apply(task,args);if(args[0]!=null){q.error(args[0],task.data);}});if(workers<=q.concurrency-q.buffer){q.unsaturated();}
if(q.idle()){q.drain();}
q.process();});}
var workers=0;var workersList=[];var q={_tasks:new _DoublyLinkedList2.default(),concurrency:concurrency,payload:payload,saturated:_noop2.default,unsaturated:_noop2.default,buffer:concurrency/4,empty:_noop2.default,drain:_noop2.default,error:_noop2.default,started:false,paused:false,push:function(data,callback){_insert(data,false,callback);},kill:function(){q.drain=_noop2.default;q._tasks.empty();},unshift:function(data,callback){_insert(data,true,callback);},process:function(){while(!q.paused&&workers<q.concurrency&&q._tasks.length){var tasks=[],data=[];var l=q._tasks.length;if(q.payload)l=Math.min(l,q.payload);for(var i=0;i<l;i++){var node=q._tasks.shift();tasks.push(node);data.push(node.data);}
if(q._tasks.length===0){q.empty();}
workers+=1;workersList.push(tasks[0]);if(workers===q.concurrency){q.saturated();}
var cb=(0,_onlyOnce2.default)(_next(tasks));worker(data,cb);}},length:function(){return q._tasks.length;},running:function(){return workers;},workersList:function(){return workersList;},idle:function(){return q._tasks.length+workers===0;},pause:function(){q.paused=true;},resume:function(){if(q.paused===false){return;}
q.paused=false;var resumeCount=Math.min(q.concurrency,q._tasks.length);for(var w=1;w<=resumeCount;w++){(0,_setImmediate2.default)(q.process);}}};return q;}
module.exports=exports['default'];},{"./DoublyLinkedList":19,"./onlyOnce":25,"./setImmediate":27,"lodash/_arrayEach":35,"lodash/isArray":45,"lodash/noop":54,"lodash/rest":55}],27:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.hasNextTick=exports.hasSetImmediate=undefined;exports.fallback=fallback;exports.wrap=wrap;var _rest=require('lodash/rest');var _rest2=_interopRequireDefault(_rest);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var hasSetImmediate=exports.hasSetImmediate=typeof setImmediate==='function'&&setImmediate;var hasNextTick=exports.hasNextTick=typeof process==='object'&&typeof process.nextTick==='function';function fallback(fn){setTimeout(fn,0);}
function wrap(defer){return(0,_rest2.default)(function(fn,args){defer(function(){fn.apply(null,args);});});}
var _defer;if(hasSetImmediate){_defer=setImmediate;}else if(hasNextTick){_defer=process.nextTick;}else{_defer=fallback;}
exports.default=wrap(_defer);}).call(this,require('_process'))},{"_process":61,"lodash/rest":55}],28:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=_withoutIndex;function _withoutIndex(iteratee){return function(value,index,callback){return iteratee(value,callback);};}
module.exports=exports['default'];},{}],29:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(worker,concurrency){return(0,_queue2.default)(function(items,cb){worker(items[0],cb);},concurrency,1);};var _queue=require('./internal/queue');var _queue2=_interopRequireDefault(_queue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
module.exports=exports['default'];},{"./internal/queue":26}],30:[function(require,module,exports){"use strict";"use restrict";var INT_BITS=32;exports.INT_BITS=INT_BITS;exports.INT_MAX=0x7fffffff;exports.INT_MIN=-1<<(INT_BITS-1);exports.sign=function(v){return(v>0)-(v<0);}
exports.abs=function(v){var mask=v>>(INT_BITS-1);return(v^mask)-mask;}
exports.min=function(x,y){return y^((x^y)&-(x<y));}
exports.max=function(x,y){return x^((x^y)&-(x<y));}
exports.isPow2=function(v){return!(v&(v-1))&&(!!v);}
exports.log2=function(v){var r,shift;r=(v>0xFFFF)<<4;v>>>=r;shift=(v>0xFF)<<3;v>>>=shift;r|=shift;shift=(v>0xF)<<2;v>>>=shift;r|=shift;shift=(v>0x3)<<1;v>>>=shift;r|=shift;return r|(v>>1);}
exports.log10=function(v){return(v>=1000000000)?9:(v>=100000000)?8:(v>=10000000)?7:(v>=1000000)?6:(v>=100000)?5:(v>=10000)?4:(v>=1000)?3:(v>=100)?2:(v>=10)?1:0;}
exports.popCount=function(v){v=v-((v>>>1)&0x55555555);v=(v&0x33333333)+((v>>>2)&0x33333333);return((v+(v>>>4)&0xF0F0F0F)*0x1010101)>>>24;}
function countTrailingZeros(v){var c=32;v&=-v;if(v)c--;if(v&0x0000FFFF)c-=16;if(v&0x00FF00FF)c-=8;if(v&0x0F0F0F0F)c-=4;if(v&0x33333333)c-=2;if(v&0x55555555)c-=1;return c;}
exports.countTrailingZeros=countTrailingZeros;exports.nextPow2=function(v){v+=v===0;--v;v|=v>>>1;v|=v>>>2;v|=v>>>4;v|=v>>>8;v|=v>>>16;return v+1;}
exports.prevPow2=function(v){v|=v>>>1;v|=v>>>2;v|=v>>>4;v|=v>>>8;v|=v>>>16;return v-(v>>>1);}
exports.parity=function(v){v^=v>>>16;v^=v>>>8;v^=v>>>4;v&=0xf;return(0x6996>>>v)&1;}
var REVERSE_TABLE=new Array(256);(function(tab){for(var i=0;i<256;++i){var v=i,r=i,s=7;for(v>>>=1;v;v>>>=1){r<<=1;r|=v&1;--s;}
tab[i]=(r<<s)&0xff;}})(REVERSE_TABLE);exports.reverse=function(v){return(REVERSE_TABLE[v&0xff]<<24)|(REVERSE_TABLE[(v>>>8)&0xff]<<16)|(REVERSE_TABLE[(v>>>16)&0xff]<<8)|REVERSE_TABLE[(v>>>24)&0xff];}
exports.interleave2=function(x,y){x&=0xFFFF;x=(x|(x<<8))&0x00FF00FF;x=(x|(x<<4))&0x0F0F0F0F;x=(x|(x<<2))&0x33333333;x=(x|(x<<1))&0x55555555;y&=0xFFFF;y=(y|(y<<8))&0x00FF00FF;y=(y|(y<<4))&0x0F0F0F0F;y=(y|(y<<2))&0x33333333;y=(y|(y<<1))&0x55555555;return x|(y<<1);}
exports.deinterleave2=function(v,n){v=(v>>>n)&0x55555555;v=(v|(v>>>1))&0x33333333;v=(v|(v>>>2))&0x0F0F0F0F;v=(v|(v>>>4))&0x00FF00FF;v=(v|(v>>>16))&0x000FFFF;return(v<<16)>>16;}
exports.interleave3=function(x,y,z){x&=0x3FF;x=(x|(x<<16))&4278190335;x=(x|(x<<8))&251719695;x=(x|(x<<4))&3272356035;x=(x|(x<<2))&1227133513;y&=0x3FF;y=(y|(y<<16))&4278190335;y=(y|(y<<8))&251719695;y=(y|(y<<4))&3272356035;y=(y|(y<<2))&1227133513;x|=(y<<1);z&=0x3FF;z=(z|(z<<16))&4278190335;z=(z|(z<<8))&251719695;z=(z|(z<<4))&3272356035;z=(z|(z<<2))&1227133513;return x|(z<<2);}
exports.deinterleave3=function(v,n){v=(v>>>n)&1227133513;v=(v|(v>>>2))&3272356035;v=(v|(v>>>4))&251719695;v=(v|(v>>>8))&4278190335;v=(v|(v>>>16))&0x3FF;return(v<<22)>>22;}
exports.nextCombination=function(v){var t=v|(v-1);return(t+1)|(((~t&-~t)-1)>>>(countTrailingZeros(v)+1));}},{}],31:[function(require,module,exports){'use strict';module.exports=earcut;function earcut(data,holeIndices,dim){dim=dim||2;var hasHoles=holeIndices&&holeIndices.length,outerLen=hasHoles?holeIndices[0]*dim:data.length,outerNode=linkedList(data,0,outerLen,dim,true),triangles=[];if(!outerNode)return triangles;var minX,minY,maxX,maxY,x,y,size;if(hasHoles)outerNode=eliminateHoles(data,holeIndices,outerNode,dim);if(data.length>80*dim){minX=maxX=data[0];minY=maxY=data[1];for(var i=dim;i<outerLen;i+=dim){x=data[i];y=data[i+1];if(x<minX)minX=x;if(y<minY)minY=y;if(x>maxX)maxX=x;if(y>maxY)maxY=y;}
size=Math.max(maxX-minX,maxY-minY);}
earcutLinked(outerNode,triangles,dim,minX,minY,size);return triangles;}
function linkedList(data,start,end,dim,clockwise){var i,last;if(clockwise===(signedArea(data,start,end,dim)>0)){for(i=start;i<end;i+=dim)last=insertNode(i,data[i],data[i+1],last);}else{for(i=end-dim;i>=start;i-=dim)last=insertNode(i,data[i],data[i+1],last);}
if(last&&equals(last,last.next)){removeNode(last);last=last.next;}
return last;}
function filterPoints(start,end){if(!start)return start;if(!end)end=start;var p=start,again;do{again=false;if(!p.steiner&&(equals(p,p.next)||area(p.prev,p,p.next)===0)){removeNode(p);p=end=p.prev;if(p===p.next)return null;again=true;}else{p=p.next;}}while(again||p!==end);return end;}
function earcutLinked(ear,triangles,dim,minX,minY,size,pass){if(!ear)return;if(!pass&&size)indexCurve(ear,minX,minY,size);var stop=ear,prev,next;while(ear.prev!==ear.next){prev=ear.prev;next=ear.next;if(size?isEarHashed(ear,minX,minY,size):isEar(ear)){triangles.push(prev.i/dim);triangles.push(ear.i/dim);triangles.push(next.i/dim);removeNode(ear);ear=next.next;stop=next.next;continue;}
ear=next;if(ear===stop){if(!pass){earcutLinked(filterPoints(ear),triangles,dim,minX,minY,size,1);}else if(pass===1){ear=cureLocalIntersections(ear,triangles,dim);earcutLinked(ear,triangles,dim,minX,minY,size,2);}else if(pass===2){splitEarcut(ear,triangles,dim,minX,minY,size);}
break;}}}
function isEar(ear){var a=ear.prev,b=ear,c=ear.next;if(area(a,b,c)>=0)return false;var p=ear.next.next;while(p!==ear.prev){if(pointInTriangle(a.x,a.y,b.x,b.y,c.x,c.y,p.x,p.y)&&area(p.prev,p,p.next)>=0)return false;p=p.next;}
return true;}
function isEarHashed(ear,minX,minY,size){var a=ear.prev,b=ear,c=ear.next;if(area(a,b,c)>=0)return false;var minTX=a.x<b.x?(a.x<c.x?a.x:c.x):(b.x<c.x?b.x:c.x),minTY=a.y<b.y?(a.y<c.y?a.y:c.y):(b.y<c.y?b.y:c.y),maxTX=a.x>b.x?(a.x>c.x?a.x:c.x):(b.x>c.x?b.x:c.x),maxTY=a.y>b.y?(a.y>c.y?a.y:c.y):(b.y>c.y?b.y:c.y);var minZ=zOrder(minTX,minTY,minX,minY,size),maxZ=zOrder(maxTX,maxTY,minX,minY,size);var p=ear.nextZ;while(p&&p.z<=maxZ){if(p!==ear.prev&&p!==ear.next&&pointInTriangle(a.x,a.y,b.x,b.y,c.x,c.y,p.x,p.y)&&area(p.prev,p,p.next)>=0)return false;p=p.nextZ;}
p=ear.prevZ;while(p&&p.z>=minZ){if(p!==ear.prev&&p!==ear.next&&pointInTriangle(a.x,a.y,b.x,b.y,c.x,c.y,p.x,p.y)&&area(p.prev,p,p.next)>=0)return false;p=p.prevZ;}
return true;}
function cureLocalIntersections(start,triangles,dim){var p=start;do{var a=p.prev,b=p.next.next;if(!equals(a,b)&&intersects(a,p,p.next,b)&&locallyInside(a,b)&&locallyInside(b,a)){triangles.push(a.i/dim);triangles.push(p.i/dim);triangles.push(b.i/dim);removeNode(p);removeNode(p.next);p=start=b;}
p=p.next;}while(p!==start);return p;}
function splitEarcut(start,triangles,dim,minX,minY,size){var a=start;do{var b=a.next.next;while(b!==a.prev){if(a.i!==b.i&&isValidDiagonal(a,b)){var c=splitPolygon(a,b);a=filterPoints(a,a.next);c=filterPoints(c,c.next);earcutLinked(a,triangles,dim,minX,minY,size);earcutLinked(c,triangles,dim,minX,minY,size);return;}
b=b.next;}
a=a.next;}while(a!==start);}
function eliminateHoles(data,holeIndices,outerNode,dim){var queue=[],i,len,start,end,list;for(i=0,len=holeIndices.length;i<len;i++){start=holeIndices[i]*dim;end=i<len-1?holeIndices[i+1]*dim:data.length;list=linkedList(data,start,end,dim,false);if(list===list.next)list.steiner=true;queue.push(getLeftmost(list));}
queue.sort(compareX);for(i=0;i<queue.length;i++){eliminateHole(queue[i],outerNode);outerNode=filterPoints(outerNode,outerNode.next);}
return outerNode;}
function compareX(a,b){return a.x-b.x;}
function eliminateHole(hole,outerNode){outerNode=findHoleBridge(hole,outerNode);if(outerNode){var b=splitPolygon(outerNode,hole);filterPoints(b,b.next);}}
function findHoleBridge(hole,outerNode){var p=outerNode,hx=hole.x,hy=hole.y,qx=-Infinity,m;do{if(hy<=p.y&&hy>=p.next.y){var x=p.x+(hy-p.y)*(p.next.x-p.x)/(p.next.y-p.y);if(x<=hx&&x>qx){qx=x;if(x===hx){if(hy===p.y)return p;if(hy===p.next.y)return p.next;}
m=p.x<p.next.x?p:p.next;}}
p=p.next;}while(p!==outerNode);if(!m)return null;if(hx===qx)return m.prev;var stop=m,mx=m.x,my=m.y,tanMin=Infinity,tan;p=m.next;while(p!==stop){if(hx>=p.x&&p.x>=mx&&pointInTriangle(hy<my?hx:qx,hy,mx,my,hy<my?qx:hx,hy,p.x,p.y)){tan=Math.abs(hy-p.y)/(hx-p.x);if((tan<tanMin||(tan===tanMin&&p.x>m.x))&&locallyInside(p,hole)){m=p;tanMin=tan;}}
p=p.next;}
return m;}
function indexCurve(start,minX,minY,size){var p=start;do{if(p.z===null)p.z=zOrder(p.x,p.y,minX,minY,size);p.prevZ=p.prev;p.nextZ=p.next;p=p.next;}while(p!==start);p.prevZ.nextZ=null;p.prevZ=null;sortLinked(p);}
function sortLinked(list){var i,p,q,e,tail,numMerges,pSize,qSize,inSize=1;do{p=list;list=null;tail=null;numMerges=0;while(p){numMerges++;q=p;pSize=0;for(i=0;i<inSize;i++){pSize++;q=q.nextZ;if(!q)break;}
qSize=inSize;while(pSize>0||(qSize>0&&q)){if(pSize===0){e=q;q=q.nextZ;qSize--;}else if(qSize===0||!q){e=p;p=p.nextZ;pSize--;}else if(p.z<=q.z){e=p;p=p.nextZ;pSize--;}else{e=q;q=q.nextZ;qSize--;}
if(tail)tail.nextZ=e;else list=e;e.prevZ=tail;tail=e;}
p=q;}
tail.nextZ=null;inSize*=2;}while(numMerges>1);return list;}
function zOrder(x,y,minX,minY,size){x=32767*(x-minX)/size;y=32767*(y-minY)/size;x=(x|(x<<8))&0x00FF00FF;x=(x|(x<<4))&0x0F0F0F0F;x=(x|(x<<2))&0x33333333;x=(x|(x<<1))&0x55555555;y=(y|(y<<8))&0x00FF00FF;y=(y|(y<<4))&0x0F0F0F0F;y=(y|(y<<2))&0x33333333;y=(y|(y<<1))&0x55555555;return x|(y<<1);}
function getLeftmost(start){var p=start,leftmost=start;do{if(p.x<leftmost.x)leftmost=p;p=p.next;}while(p!==start);return leftmost;}
function pointInTriangle(ax,ay,bx,by,cx,cy,px,py){return(cx-px)*(ay-py)-(ax-px)*(cy-py)>=0&&(ax-px)*(by-py)-(bx-px)*(ay-py)>=0&&(bx-px)*(cy-py)-(cx-px)*(by-py)>=0;}
function isValidDiagonal(a,b){return a.next.i!==b.i&&a.prev.i!==b.i&&!intersectsPolygon(a,b)&&locallyInside(a,b)&&locallyInside(b,a)&&middleInside(a,b);}
function area(p,q,r){return(q.y-p.y)*(r.x-q.x)-(q.x-p.x)*(r.y-q.y);}
function equals(p1,p2){return p1.x===p2.x&&p1.y===p2.y;}
function intersects(p1,q1,p2,q2){if((equals(p1,q1)&&equals(p2,q2))||(equals(p1,q2)&&equals(p2,q1)))return true;return area(p1,q1,p2)>0!==area(p1,q1,q2)>0&&area(p2,q2,p1)>0!==area(p2,q2,q1)>0;}
function intersectsPolygon(a,b){var p=a;do{if(p.i!==a.i&&p.next.i!==a.i&&p.i!==b.i&&p.next.i!==b.i&&intersects(p,p.next,a,b))return true;p=p.next;}while(p!==a);return false;}
function locallyInside(a,b){return area(a.prev,a,a.next)<0?area(a,b,a.next)>=0&&area(a,a.prev,b)>=0:area(a,b,a.prev)<0||area(a,a.next,b)<0;}
function middleInside(a,b){var p=a,inside=false,px=(a.x+b.x)/2,py=(a.y+b.y)/2;do{if(((p.y>py)!==(p.next.y>py))&&(px<(p.next.x-p.x)*(py-p.y)/(p.next.y-p.y)+p.x))
inside=!inside;p=p.next;}while(p!==a);return inside;}
function splitPolygon(a,b){var a2=new Node(a.i,a.x,a.y),b2=new Node(b.i,b.x,b.y),an=a.next,bp=b.prev;a.next=b;b.prev=a;a2.next=an;an.prev=a2;b2.next=a2;a2.prev=b2;bp.next=b2;b2.prev=bp;return b2;}
function insertNode(i,x,y,last){var p=new Node(i,x,y);if(!last){p.prev=p;p.next=p;}else{p.next=last.next;p.prev=last;last.next.prev=p;last.next=p;}
return p;}
function removeNode(p){p.next.prev=p.prev;p.prev.next=p.next;if(p.prevZ)p.prevZ.nextZ=p.nextZ;if(p.nextZ)p.nextZ.prevZ=p.prevZ;}
function Node(i,x,y){this.i=i;this.x=x;this.y=y;this.prev=null;this.next=null;this.z=null;this.prevZ=null;this.nextZ=null;this.steiner=false;}
earcut.deviation=function(data,holeIndices,dim,triangles){var hasHoles=holeIndices&&holeIndices.length;var outerLen=hasHoles?holeIndices[0]*dim:data.length;var polygonArea=Math.abs(signedArea(data,0,outerLen,dim));if(hasHoles){for(var i=0,len=holeIndices.length;i<len;i++){var start=holeIndices[i]*dim;var end=i<len-1?holeIndices[i+1]*dim:data.length;polygonArea-=Math.abs(signedArea(data,start,end,dim));}}
var trianglesArea=0;for(i=0;i<triangles.length;i+=3){var a=triangles[i]*dim;var b=triangles[i+1]*dim;var c=triangles[i+2]*dim;trianglesArea+=Math.abs((data[a]-data[c])*(data[b+1]-data[a+1])-
(data[a]-data[b])*(data[c+1]-data[a+1]));}
return polygonArea===0&&trianglesArea===0?0:Math.abs((trianglesArea-polygonArea)/polygonArea);};function signedArea(data,start,end,dim){var sum=0;for(var i=start,j=end-dim;i<end;i+=dim){sum+=(data[j]-data[i])*(data[i+1]+data[j+1]);j=i;}
return sum;}
earcut.flatten=function(data){var dim=data[0][0].length,result={vertices:[],holes:[],dimensions:dim},holeIndex=0;for(var i=0;i<data.length;i++){for(var j=0;j<data[i].length;j++){for(var d=0;d<dim;d++)result.vertices.push(data[i][j][d]);}
if(i>0){holeIndex+=data[i-1].length;result.holes.push(holeIndex);}}
return result;};},{}],32:[function(require,module,exports){'use strict';var has=Object.prototype.hasOwnProperty;var prefix=typeof Object.create!=='function'?'~':false;function EE(fn,context,once){this.fn=fn;this.context=context;this.once=once||false;}
function EventEmitter(){}
EventEmitter.prototype._events=undefined;EventEmitter.prototype.eventNames=function eventNames(){var events=this._events,names=[],name;if(!events)return names;for(name in events){if(has.call(events,name))names.push(prefix?name.slice(1):name);}
if(Object.getOwnPropertySymbols){return names.concat(Object.getOwnPropertySymbols(events));}
return names;};EventEmitter.prototype.listeners=function listeners(event,exists){var evt=prefix?prefix+event:event,available=this._events&&this._events[evt];if(exists)return!!available;if(!available)return[];if(available.fn)return[available.fn];for(var i=0,l=available.length,ee=new Array(l);i<l;i++){ee[i]=available[i].fn;}
return ee;};EventEmitter.prototype.emit=function emit(event,a1,a2,a3,a4,a5){var evt=prefix?prefix+event:event;if(!this._events||!this._events[evt])return false;var listeners=this._events[evt],len=arguments.length,args,i;if('function'===typeof listeners.fn){if(listeners.once)this.removeListener(event,listeners.fn,undefined,true);switch(len){case 1:return listeners.fn.call(listeners.context),true;case 2:return listeners.fn.call(listeners.context,a1),true;case 3:return listeners.fn.call(listeners.context,a1,a2),true;case 4:return listeners.fn.call(listeners.context,a1,a2,a3),true;case 5:return listeners.fn.call(listeners.context,a1,a2,a3,a4),true;case 6:return listeners.fn.call(listeners.context,a1,a2,a3,a4,a5),true;}
for(i=1,args=new Array(len-1);i<len;i++){args[i-1]=arguments[i];}
listeners.fn.apply(listeners.context,args);}else{var length=listeners.length,j;for(i=0;i<length;i++){if(listeners[i].once)this.removeListener(event,listeners[i].fn,undefined,true);switch(len){case 1:listeners[i].fn.call(listeners[i].context);break;case 2:listeners[i].fn.call(listeners[i].context,a1);break;case 3:listeners[i].fn.call(listeners[i].context,a1,a2);break;default:if(!args)for(j=1,args=new Array(len-1);j<len;j++){args[j-1]=arguments[j];}
listeners[i].fn.apply(listeners[i].context,args);}}}
return true;};EventEmitter.prototype.on=function on(event,fn,context){var listener=new EE(fn,context||this),evt=prefix?prefix+event:event;if(!this._events)this._events=prefix?{}:Object.create(null);if(!this._events[evt])this._events[evt]=listener;else{if(!this._events[evt].fn)this._events[evt].push(listener);else this._events[evt]=[this._events[evt],listener];}
return this;};EventEmitter.prototype.once=function once(event,fn,context){var listener=new EE(fn,context||this,true),evt=prefix?prefix+event:event;if(!this._events)this._events=prefix?{}:Object.create(null);if(!this._events[evt])this._events[evt]=listener;else{if(!this._events[evt].fn)this._events[evt].push(listener);else this._events[evt]=[this._events[evt],listener];}
return this;};EventEmitter.prototype.removeListener=function removeListener(event,fn,context,once){var evt=prefix?prefix+event:event;if(!this._events||!this._events[evt])return this;var listeners=this._events[evt],events=[];if(fn){if(listeners.fn){if(listeners.fn!==fn||(once&&!listeners.once)||(context&&listeners.context!==context)){events.push(listeners);}}else{for(var i=0,length=listeners.length;i<length;i++){if(listeners[i].fn!==fn||(once&&!listeners[i].once)||(context&&listeners[i].context!==context)){events.push(listeners[i]);}}}}
if(events.length){this._events[evt]=events.length===1?events[0]:events;}else{delete this._events[evt];}
return this;};EventEmitter.prototype.removeAllListeners=function removeAllListeners(event){if(!this._events)return this;if(event)delete this._events[prefix?prefix+event:event];else this._events=prefix?{}:Object.create(null);return this;};EventEmitter.prototype.off=EventEmitter.prototype.removeListener;EventEmitter.prototype.addListener=EventEmitter.prototype.on;EventEmitter.prototype.setMaxListeners=function setMaxListeners(){return this;};EventEmitter.prefixed=prefix;if('undefined'!==typeof module){module.exports=EventEmitter;}},{}],33:[function(require,module,exports){(function(global){var apple_phone=/iPhone/i,apple_ipod=/iPod/i,apple_tablet=/iPad/i,android_phone=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,android_tablet=/Android/i,amazon_phone=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,amazon_tablet=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,windows_phone=/IEMobile/i,windows_tablet=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,other_blackberry=/BlackBerry/i,other_blackberry_10=/BB10/i,other_opera=/Opera Mini/i,other_chrome=/(CriOS|Chrome)(?=.*\bMobile\b)/i,other_firefox=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,seven_inch=new RegExp('(?:'+'Nexus 7'+'|'+'BNTV250'+'|'+'Kindle Fire'+'|'+'Silk'+'|'+'GT-P1000'+')','i');var match=function(regex,userAgent){return regex.test(userAgent);};var IsMobileClass=function(userAgent){var ua=userAgent||navigator.userAgent;var tmp=ua.split('[FBAN');if(typeof tmp[1]!=='undefined'){ua=tmp[0];}
tmp=ua.split('Twitter');if(typeof tmp[1]!=='undefined'){ua=tmp[0];}
this.apple={phone:match(apple_phone,ua),ipod:match(apple_ipod,ua),tablet:!match(apple_phone,ua)&&match(apple_tablet,ua),device:match(apple_phone,ua)||match(apple_ipod,ua)||match(apple_tablet,ua)};this.amazon={phone:match(amazon_phone,ua),tablet:!match(amazon_phone,ua)&&match(amazon_tablet,ua),device:match(amazon_phone,ua)||match(amazon_tablet,ua)};this.android={phone:match(amazon_phone,ua)||match(android_phone,ua),tablet:!match(amazon_phone,ua)&&!match(android_phone,ua)&&(match(amazon_tablet,ua)||match(android_tablet,ua)),device:match(amazon_phone,ua)||match(amazon_tablet,ua)||match(android_phone,ua)||match(android_tablet,ua)};this.windows={phone:match(windows_phone,ua),tablet:match(windows_tablet,ua),device:match(windows_phone,ua)||match(windows_tablet,ua)};this.other={blackberry:match(other_blackberry,ua),blackberry10:match(other_blackberry_10,ua),opera:match(other_opera,ua),firefox:match(other_firefox,ua),chrome:match(other_chrome,ua),device:match(other_blackberry,ua)||match(other_blackberry_10,ua)||match(other_opera,ua)||match(other_firefox,ua)||match(other_chrome,ua)};this.seven_inch=match(seven_inch,ua);this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch;this.phone=this.apple.phone||this.android.phone||this.windows.phone;this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet;if(typeof window==='undefined'){return this;}};var instantiate=function(){var IM=new IsMobileClass();IM.Class=IsMobileClass;return IM;};if(typeof module!=='undefined'&&module.exports&&typeof window==='undefined'){module.exports=IsMobileClass;}else if(typeof module!=='undefined'&&module.exports&&typeof window!=='undefined'){module.exports=instantiate();}else if(typeof define==='function'&&define.amd){define('isMobile',[],global.isMobile=instantiate());}else{global.isMobile=instantiate();}})(this);},{}],34:[function(require,module,exports){function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}
return func.apply(thisArg,args);}
module.exports=apply;},{}],35:[function(require,module,exports){function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}
return array;}
module.exports=arrayEach;},{}],36:[function(require,module,exports){var baseTimes=require('./_baseTimes'),isArguments=require('./isArguments'),isArray=require('./isArray'),isIndex=require('./_isIndex');var objectProto=Object.prototype;var hasOwnProperty=objectProto.hasOwnProperty;function arrayLikeKeys(value,inherited){var result=(isArray(value)||isArguments(value))?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}
return result;}
module.exports=arrayLikeKeys;},{"./_baseTimes":39,"./_isIndex":40,"./isArguments":44,"./isArray":45}],37:[function(require,module,exports){var isPrototype=require('./_isPrototype'),nativeKeys=require('./_nativeKeys');var objectProto=Object.prototype;var hasOwnProperty=objectProto.hasOwnProperty;function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}
var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}
return result;}
module.exports=baseKeys;},{"./_isPrototype":41,"./_nativeKeys":42}],38:[function(require,module,exports){var apply=require('./_apply');var nativeMax=Math.max;function baseRest(func,start){start=nativeMax(start===undefined?(func.length-1):start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}
index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}
otherArgs[start]=array;return apply(func,this,otherArgs);};}
module.exports=baseRest;},{"./_apply":34}],39:[function(require,module,exports){function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}
return result;}
module.exports=baseTimes;},{}],40:[function(require,module,exports){var MAX_SAFE_INTEGER=9007199254740991;var reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&(value>-1&&value%1==0&&value<length);}
module.exports=isIndex;},{}],41:[function(require,module,exports){var objectProto=Object.prototype;function isPrototype(value){var Ctor=value&&value.constructor,proto=(typeof Ctor=='function'&&Ctor.prototype)||objectProto;return value===proto;}
module.exports=isPrototype;},{}],42:[function(require,module,exports){var overArg=require('./_overArg');var nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;},{"./_overArg":43}],43:[function(require,module,exports){function overArg(func,transform){return function(arg){return func(transform(arg));};}
module.exports=overArg;},{}],44:[function(require,module,exports){var isArrayLikeObject=require('./isArrayLikeObject');var argsTag='[object Arguments]';var objectProto=Object.prototype;var hasOwnProperty=objectProto.hasOwnProperty;var objectToString=objectProto.toString;var propertyIsEnumerable=objectProto.propertyIsEnumerable;function isArguments(value){return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}
module.exports=isArguments;},{"./isArrayLikeObject":47}],45:[function(require,module,exports){var isArray=Array.isArray;module.exports=isArray;},{}],46:[function(require,module,exports){var isFunction=require('./isFunction'),isLength=require('./isLength');function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}
module.exports=isArrayLike;},{"./isFunction":48,"./isLength":49}],47:[function(require,module,exports){var isArrayLike=require('./isArrayLike'),isObjectLike=require('./isObjectLike');function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}
module.exports=isArrayLikeObject;},{"./isArrayLike":46,"./isObjectLike":51}],48:[function(require,module,exports){var isObject=require('./isObject');var funcTag='[object Function]',genTag='[object GeneratorFunction]';var objectProto=Object.prototype;var objectToString=objectProto.toString;function isFunction(value){var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}
module.exports=isFunction;},{"./isObject":50}],49:[function(require,module,exports){var MAX_SAFE_INTEGER=9007199254740991;function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}
module.exports=isLength;},{}],50:[function(require,module,exports){function isObject(value){var type=typeof value;return!!value&&(type=='object'||type=='function');}
module.exports=isObject;},{}],51:[function(require,module,exports){function isObjectLike(value){return!!value&&typeof value=='object';}
module.exports=isObjectLike;},{}],52:[function(require,module,exports){var isObjectLike=require('./isObjectLike');var symbolTag='[object Symbol]';var objectProto=Object.prototype;var objectToString=objectProto.toString;function isSymbol(value){return typeof value=='symbol'||(isObjectLike(value)&&objectToString.call(value)==symbolTag);}
module.exports=isSymbol;},{"./isObjectLike":51}],53:[function(require,module,exports){var arrayLikeKeys=require('./_arrayLikeKeys'),baseKeys=require('./_baseKeys'),isArrayLike=require('./isArrayLike');function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}
module.exports=keys;},{"./_arrayLikeKeys":36,"./_baseKeys":37,"./isArrayLike":46}],54:[function(require,module,exports){function noop(){}
module.exports=noop;},{}],55:[function(require,module,exports){var baseRest=require('./_baseRest'),toInteger=require('./toInteger');var FUNC_ERROR_TEXT='Expected a function';function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}
start=start===undefined?start:toInteger(start);return baseRest(func,start);}
module.exports=rest;},{"./_baseRest":38,"./toInteger":57}],56:[function(require,module,exports){var toNumber=require('./toNumber');var INFINITY=1/0,MAX_INTEGER=1.7976931348623157e+308;function toFinite(value){if(!value){return value===0?value:0;}
value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=(value<0?-1:1);return sign*MAX_INTEGER;}
return value===value?value:0;}
module.exports=toFinite;},{"./toNumber":58}],57:[function(require,module,exports){var toFinite=require('./toFinite');function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?(remainder?result-remainder:result):0;}
module.exports=toInteger;},{"./toFinite":56}],58:[function(require,module,exports){var isObject=require('./isObject'),isSymbol=require('./isSymbol');var NAN=0/0;var reTrim=/^\s+|\s+$/g;var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;var reIsBinary=/^0b[01]+$/i;var reIsOctal=/^0o[0-7]+$/i;var freeParseInt=parseInt;function toNumber(value){if(typeof value=='number'){return value;}
if(isSymbol(value)){return NAN;}
if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?(other+''):other;}
if(typeof value!='string'){return value===0?value:+value;}
value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return(isBinary||reIsOctal.test(value))?freeParseInt(value.slice(2),isBinary?2:8):(reIsBadHex.test(value)?NAN:+value);}
module.exports=toNumber;},{"./isObject":50,"./isSymbol":52}],59:[function(require,module,exports){'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}
return Object(val);}
function shouldUseNative(){try{if(!Object.assign){return false;}
var test1=new String('abc');test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}
var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}
var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}
var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}
return true;}catch(e){return false;}}
module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}
if(Object.getOwnPropertySymbols){symbols=Object.getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}
return to;};},{}],60:[function(require,module,exports){(function(process){function normalizeArray(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==='.'){parts.splice(i,1);}else if(last==='..'){parts.splice(i,1);up++;}else if(up){parts.splice(i,1);up--;}}
if(allowAboveRoot){for(;up--;up){parts.unshift('..');}}
return parts;}
var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;var splitPath=function(filename){return splitPathRe.exec(filename).slice(1);};exports.resolve=function(){var resolvedPath='',resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=(i>=0)?arguments[i]:process.cwd();if(typeof path!=='string'){throw new TypeError('Arguments to path.resolve must be strings');}else if(!path){continue;}
resolvedPath=path+'/'+resolvedPath;resolvedAbsolute=path.charAt(0)==='/';}
resolvedPath=normalizeArray(filter(resolvedPath.split('/'),function(p){return!!p;}),!resolvedAbsolute).join('/');return((resolvedAbsolute?'/':'')+resolvedPath)||'.';};exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==='/';path=normalizeArray(filter(path.split('/'),function(p){return!!p;}),!isAbsolute).join('/');if(!path&&!isAbsolute){path='.';}
if(path&&trailingSlash){path+='/';}
return(isAbsolute?'/':'')+path;};exports.isAbsolute=function(path){return path.charAt(0)==='/';};exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=='string'){throw new TypeError('Arguments to path.join must be strings');}
return p;}).join('/'));};exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=='')break;}
var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=='')break;}
if(start>end)return[];return arr.slice(start,end-start+1);}
var fromParts=trim(from.split('/'));var toParts=trim(to.split('/'));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break;}}
var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push('..');}
outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join('/');};exports.sep='/';exports.delimiter=':';exports.dirname=function(path){var result=splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return'.';}
if(dir){dir=dir.substr(0,dir.length-1);}
return root+dir;};exports.basename=function(path,ext){var f=splitPath(path)[2];if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length);}
return f;};exports.extname=function(path){return splitPath(path)[3];};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i]);}
return res;}
var substr='ab'.substr(-1)==='b'?function(str,start,len){return str.substr(start,len)}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len);};}).call(this,require('_process'))},{"_process":61}],61:[function(require,module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}
function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}
(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}
try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}}())
function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0);}
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}
try{return cachedSetTimeout(fun,0);}catch(e){try{return cachedSetTimeout.call(null,fun,0);}catch(e){return cachedSetTimeout.call(this,fun,0);}}}
function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker);}
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}
try{return cachedClearTimeout(marker);}catch(e){try{return cachedClearTimeout.call(null,marker);}catch(e){return cachedClearTimeout.call(this,marker);}}}
var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}
draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}
if(queue.length){drainQueue();}}
function drainQueue(){if(draining){return;}
var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}
queueIndex=-1;len=queue.length;}
currentQueue=null;draining=false;runClearTimeout(timeout);}
process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}
queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};function Item(fun,array){this.fun=fun;this.array=array;}
Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';process.versions={};function noop(){}
process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/'};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],62:[function(require,module,exports){(function(global){;(function(root){var freeExports=typeof exports=='object'&&exports&&!exports.nodeType&&exports;var freeModule=typeof module=='object'&&module&&!module.nodeType&&module;var freeGlobal=typeof global=='object'&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal||freeGlobal.self===freeGlobal){root=freeGlobal;}
var punycode,maxInt=2147483647,base=36,tMin=1,tMax=26,skew=38,damp=700,initialBias=72,initialN=128,delimiter='-',regexPunycode=/^xn--/,regexNonASCII=/[^\x20-\x7E]/,regexSeparators=/[\x2E\u3002\uFF0E\uFF61]/g,errors={'overflow':'Overflow: input needs wider integers to process','not-basic':'Illegal input >= 0x80 (not a basic code point)','invalid-input':'Invalid input'},baseMinusTMin=base-tMin,floor=Math.floor,stringFromCharCode=String.fromCharCode,key;function error(type){throw new RangeError(errors[type]);}
function map(array,fn){var length=array.length;var result=[];while(length--){result[length]=fn(array[length]);}
return result;}
function mapDomain(string,fn){var parts=string.split('@');var result='';if(parts.length>1){result=parts[0]+'@';string=parts[1];}
string=string.replace(regexSeparators,'\x2E');var labels=string.split('.');var encoded=map(labels,fn).join('.');return result+encoded;}
function ucs2decode(string){var output=[],counter=0,length=string.length,value,extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=0xD800&&value<=0xDBFF&&counter<length){extra=string.charCodeAt(counter++);if((extra&0xFC00)==0xDC00){output.push(((value&0x3FF)<<10)+(extra&0x3FF)+0x10000);}else{output.push(value);counter--;}}else{output.push(value);}}
return output;}
function ucs2encode(array){return map(array,function(value){var output='';if(value>0xFFFF){value-=0x10000;output+=stringFromCharCode(value>>>10&0x3FF|0xD800);value=0xDC00|value&0x3FF;}
output+=stringFromCharCode(value);return output;}).join('');}
function basicToDigit(codePoint){if(codePoint-48<10){return codePoint-22;}
if(codePoint-65<26){return codePoint-65;}
if(codePoint-97<26){return codePoint-97;}
return base;}
function digitToBasic(digit,flag){return digit+22+75*(digit<26)-((flag!=0)<<5);}
function adapt(delta,numPoints,firstTime){var k=0;delta=firstTime?floor(delta/damp):delta>>1;delta+=floor(delta/numPoints);for(;delta>baseMinusTMin*tMax>>1;k+=base){delta=floor(delta/baseMinusTMin);}
return floor(k+(baseMinusTMin+1)*delta/(delta+skew));}
function decode(input){var output=[],inputLength=input.length,out,i=0,n=initialN,bias=initialBias,basic,j,index,oldi,w,k,digit,t,baseMinusT;basic=input.lastIndexOf(delimiter);if(basic<0){basic=0;}
for(j=0;j<basic;++j){if(input.charCodeAt(j)>=0x80){error('not-basic');}
output.push(input.charCodeAt(j));}
for(index=basic>0?basic+1:0;index<inputLength;){for(oldi=i,w=1,k=base;;k+=base){if(index>=inputLength){error('invalid-input');}
digit=basicToDigit(input.charCodeAt(index++));if(digit>=base||digit>floor((maxInt-i)/w)){error('overflow');}
i+=digit*w;t=k<=bias?tMin:(k>=bias+tMax?tMax:k-bias);if(digit<t){break;}
baseMinusT=base-t;if(w>floor(maxInt/baseMinusT)){error('overflow');}
w*=baseMinusT;}
out=output.length+1;bias=adapt(i-oldi,out,oldi==0);if(floor(i/out)>maxInt-n){error('overflow');}
n+=floor(i/out);i%=out;output.splice(i++,0,n);}
return ucs2encode(output);}
function encode(input){var n,delta,handledCPCount,basicLength,bias,j,m,q,k,t,currentValue,output=[],inputLength,handledCPCountPlusOne,baseMinusT,qMinusT;input=ucs2decode(input);inputLength=input.length;n=initialN;delta=0;bias=initialBias;for(j=0;j<inputLength;++j){currentValue=input[j];if(currentValue<0x80){output.push(stringFromCharCode(currentValue));}}
handledCPCount=basicLength=output.length;if(basicLength){output.push(delimiter);}
while(handledCPCount<inputLength){for(m=maxInt,j=0;j<inputLength;++j){currentValue=input[j];if(currentValue>=n&&currentValue<m){m=currentValue;}}
handledCPCountPlusOne=handledCPCount+1;if(m-n>floor((maxInt-delta)/handledCPCountPlusOne)){error('overflow');}
delta+=(m-n)*handledCPCountPlusOne;n=m;for(j=0;j<inputLength;++j){currentValue=input[j];if(currentValue<n&&++delta>maxInt){error('overflow');}
if(currentValue==n){for(q=delta,k=base;;k+=base){t=k<=bias?tMin:(k>=bias+tMax?tMax:k-bias);if(q<t){break;}
qMinusT=q-t;baseMinusT=base-t;output.push(stringFromCharCode(digitToBasic(t+qMinusT%baseMinusT,0)));q=floor(qMinusT/baseMinusT);}
output.push(stringFromCharCode(digitToBasic(q,0)));bias=adapt(delta,handledCPCountPlusOne,handledCPCount==basicLength);delta=0;++handledCPCount;}}
++delta;++n;}
return output.join('');}
function toUnicode(input){return mapDomain(input,function(string){return regexPunycode.test(string)?decode(string.slice(4).toLowerCase()):string;});}
function toASCII(input){return mapDomain(input,function(string){return regexNonASCII.test(string)?'xn--'+encode(string):string;});}
punycode={'version':'1.4.1','ucs2':{'decode':ucs2decode,'encode':ucs2encode},'decode':decode,'encode':encode,'toASCII':toASCII,'toUnicode':toUnicode};if(typeof define=='function'&&typeof define.amd=='object'&&define.amd){define('punycode',function(){return punycode;});}else if(freeExports&&freeModule){if(module.exports==freeExports){freeModule.exports=punycode;}else{for(key in punycode){punycode.hasOwnProperty(key)&&(freeExports[key]=punycode[key]);}}}else{root.punycode=punycode;}}(this));}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],63:[function(require,module,exports){'use strict';function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}
module.exports=function(qs,sep,eq,options){sep=sep||'&';eq=eq||'=';var obj={};if(typeof qs!=='string'||qs.length===0){return obj;}
var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1000;if(options&&typeof options.maxKeys==='number'){maxKeys=options.maxKeys;}
var len=qs.length;if(maxKeys>0&&len>maxKeys){len=maxKeys;}
for(var i=0;i<len;++i){var x=qs[i].replace(regexp,'%20'),idx=x.indexOf(eq),kstr,vstr,k,v;if(idx>=0){kstr=x.substr(0,idx);vstr=x.substr(idx+1);}else{kstr=x;vstr='';}
k=decodeURIComponent(kstr);v=decodeURIComponent(vstr);if(!hasOwnProperty(obj,k)){obj[k]=v;}else if(isArray(obj[k])){obj[k].push(v);}else{obj[k]=[obj[k],v];}}
return obj;};var isArray=Array.isArray||function(xs){return Object.prototype.toString.call(xs)==='[object Array]';};},{}],64:[function(require,module,exports){'use strict';var stringifyPrimitive=function(v){switch(typeof v){case'string':return v;case'boolean':return v?'true':'false';case'number':return isFinite(v)?v:'';default:return'';}};module.exports=function(obj,sep,eq,name){sep=sep||'&';eq=eq||'=';if(obj===null){obj=undefined;}
if(typeof obj==='object'){return map(objectKeys(obj),function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;if(isArray(obj[k])){return map(obj[k],function(v){return ks+encodeURIComponent(stringifyPrimitive(v));}).join(sep);}else{return ks+encodeURIComponent(stringifyPrimitive(obj[k]));}}).join(sep);}
if(!name)return'';return encodeURIComponent(stringifyPrimitive(name))+eq+
encodeURIComponent(stringifyPrimitive(obj));};var isArray=Array.isArray||function(xs){return Object.prototype.toString.call(xs)==='[object Array]';};function map(xs,f){if(xs.map)return xs.map(f);var res=[];for(var i=0;i<xs.length;i++){res.push(f(xs[i],i));}
return res;}
var objectKeys=Object.keys||function(obj){var res=[];for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))res.push(key);}
return res;};},{}],65:[function(require,module,exports){'use strict';exports.decode=exports.parse=require('./decode');exports.encode=exports.stringify=require('./encode');},{"./decode":63,"./encode":64}],66:[function(require,module,exports){'use strict';var asyncQueue=require('async/queue');var asyncEachSeries=require('async/eachSeries');var urlParser=require('url');var Resource=require('./Resource');var EventEmitter=require('eventemitter3');var DEFAULT_CONCURRENCY=10;var MAX_PROGRESS=100;function Loader(baseUrl,concurrency){EventEmitter.call(this);concurrency=concurrency||DEFAULT_CONCURRENCY;this.baseUrl=baseUrl||'';this.progress=0;this.loading=false;this._progressChunk=0;this._beforeMiddleware=[];this._afterMiddleware=[];this._boundLoadResource=this._loadResource.bind(this);this._buffer=[];this._numToLoad=0;this._queue=asyncQueue(this._boundLoadResource,concurrency);this.resources={};}
Loader.prototype=Object.create(EventEmitter.prototype);Loader.prototype.constructor=Loader;module.exports=Loader;Loader.prototype.add=Loader.prototype.enqueue=function(name,url,options,cb){if(Array.isArray(name)){for(var i=0;i<name.length;++i){this.add(name[i]);}
return this;}
if(typeof name==='object'){cb=url||name.callback||name.onComplete;options=name;url=name.url;name=name.name||name.key||name.url;}
if(typeof url!=='string'){cb=options;options=url;url=name;}
if(typeof url!=='string'){throw new Error('No url passed to add resource to loader.');}
if(typeof options==='function'){cb=options;options=null;}
if(this.resources[name]){throw new Error('Resource with name "'+name+'" already exists.');}
url=this._prepareUrl(url);this.resources[name]=new Resource(name,url,options);if(typeof cb==='function'){this.resources[name].once('afterMiddleware',cb);}
this._numToLoad++;if(this._queue.started){this._queue.push(this.resources[name]);this._progressChunk=(MAX_PROGRESS-this.progress)/(this._queue.length()+this._queue.running());}
else{this._buffer.push(this.resources[name]);this._progressChunk=MAX_PROGRESS/this._buffer.length;}
return this;};Loader.prototype.before=Loader.prototype.pre=function(fn){this._beforeMiddleware.push(fn);return this;};Loader.prototype.after=Loader.prototype.use=function(fn){this._afterMiddleware.push(fn);return this;};Loader.prototype.reset=function(){this.progress=0;this.loading=false;this._progressChunk=0;this._buffer.length=0;this._numToLoad=0;this._queue.kill();this._queue.started=false;for(var k in this.resources){var res=this.resources[k];res.off('complete',this._onLoad,this);if(res.isLoading){res.abort();}}
this.resources={};return this;};Loader.prototype.load=function(cb){if(typeof cb==='function'){this.once('complete',cb);}
if(this._queue.started){return this;}
this.emit('start',this);this.loading=true;for(var i=0;i<this._buffer.length;++i){this._queue.push(this._buffer[i]);}
this._buffer.length=0;return this;};Loader.prototype._prepareUrl=function(url){var parsedUrl=urlParser.parse(url);if(parsedUrl.protocol||!parsedUrl.pathname||parsedUrl.pathname.indexOf('//')===0){return url;}
if(this.baseUrl.length&&this.baseUrl.lastIndexOf('/')!==this.baseUrl.length-1&&url.charAt(0)!=='/'){return this.baseUrl+'/'+url;}
return this.baseUrl+url;};Loader.prototype._loadResource=function(resource,dequeue){var self=this;resource._dequeue=dequeue;asyncEachSeries(this._beforeMiddleware,function(fn,next){fn.call(self,resource,function(){next(resource.isComplete?{}:null);});},function(){if(resource.isComplete){self._onLoad(resource);}
else{resource.once('complete',self._onLoad,self);resource.load();}});};Loader.prototype._onComplete=function(){this.loading=false;this.emit('complete',this,this.resources);};Loader.prototype._onLoad=function(resource){var self=this;asyncEachSeries(this._afterMiddleware,function(fn,next){fn.call(self,resource,next);},function(){resource.emit('afterMiddleware',resource);self._numToLoad--;self.progress+=self._progressChunk;self.emit('progress',self,resource);if(resource.error){self.emit('error',resource.error,self,resource);}
else{self.emit('load',self,resource);}
if(self._numToLoad===0){self.progress=100;self._onComplete();}});resource._dequeue();};Loader.LOAD_TYPE=Resource.LOAD_TYPE;Loader.XHR_RESPONSE_TYPE=Resource.XHR_RESPONSE_TYPE;},{"./Resource":67,"async/eachSeries":18,"async/queue":29,"eventemitter3":32,"url":72}],67:[function(require,module,exports){'use strict';var EventEmitter=require('eventemitter3');var _url=require('url');var useXdr=!!(window.XDomainRequest&&!('withCredentials'in(new XMLHttpRequest())));var tempAnchor=null;var STATUS_NONE=0;var STATUS_OK=200;var STATUS_EMPTY=204;function Resource(name,url,options){EventEmitter.call(this);options=options||{};if(typeof name!=='string'||typeof url!=='string'){throw new Error('Both name and url are required for constructing a resource.');}
this.name=name;this.url=url;this.isDataUrl=this.url.indexOf('data:')===0;this.data=null;this.crossOrigin=options.crossOrigin===true?'anonymous':options.crossOrigin;this.loadType=options.loadType||this._determineLoadType();this.xhrType=options.xhrType;this.metadata=options.metadata||{};this.error=null;this.xhr=null;this.isJson=false;this.isXml=false;this.isImage=false;this.isAudio=false;this.isVideo=false;this.isComplete=false;this.isLoading=false;this._dequeue=null;this._boundComplete=this.complete.bind(this);this._boundOnError=this._onError.bind(this);this._boundOnProgress=this._onProgress.bind(this);this._boundXhrOnError=this._xhrOnError.bind(this);this._boundXhrOnAbort=this._xhrOnAbort.bind(this);this._boundXhrOnLoad=this._xhrOnLoad.bind(this);this._boundXdrOnTimeout=this._xdrOnTimeout.bind(this);}
Resource.prototype=Object.create(EventEmitter.prototype);Resource.prototype.constructor=Resource;module.exports=Resource;Resource.prototype.complete=function(){if(this.data&&this.data.removeEventListener){this.data.removeEventListener('error',this._boundOnError,false);this.data.removeEventListener('load',this._boundComplete,false);this.data.removeEventListener('progress',this._boundOnProgress,false);this.data.removeEventListener('canplaythrough',this._boundComplete,false);}
if(this.xhr){if(this.xhr.removeEventListener){this.xhr.removeEventListener('error',this._boundXhrOnError,false);this.xhr.removeEventListener('abort',this._boundXhrOnAbort,false);this.xhr.removeEventListener('progress',this._boundOnProgress,false);this.xhr.removeEventListener('load',this._boundXhrOnLoad,false);}
else{this.xhr.onerror=null;this.xhr.ontimeout=null;this.xhr.onprogress=null;this.xhr.onload=null;}}
if(this.isComplete){throw new Error('Complete called again for an already completed resource.');}
this.isComplete=true;this.isLoading=false;this.emit('complete',this);};Resource.prototype.abort=function(message){if(this.error){return;}
this.error=new Error(message);if(this.xhr){this.xhr.abort();}
else if(this.xdr){this.xdr.abort();}
else if(this.data){if(typeof this.data.src!=='undefined'){this.data.src='';}
else{while(this.data.firstChild){this.data.removeChild(this.data.firstChild);}}}
this.complete();};Resource.prototype.load=function(cb){if(this.isLoading){return;}
if(this.isComplete){if(cb){var self=this;setTimeout(function(){cb(self);},1);}
return;}
else if(cb){this.once('complete',cb);}
this.isLoading=true;this.emit('start',this);if(this.crossOrigin===false||typeof this.crossOrigin!=='string'){this.crossOrigin=this._determineCrossOrigin(this.url);}
switch(this.loadType){case Resource.LOAD_TYPE.IMAGE:this._loadElement('image');break;case Resource.LOAD_TYPE.AUDIO:this._loadSourceElement('audio');break;case Resource.LOAD_TYPE.VIDEO:this._loadSourceElement('video');break;case Resource.LOAD_TYPE.XHR:default:if(useXdr&&this.crossOrigin){this._loadXdr();}
else{this._loadXhr();}
break;}};Resource.prototype._loadElement=function(type){if(this.metadata.loadElement){this.data=this.metadata.loadElement;}
else if(type==='image'&&typeof window.Image!=='undefined'){this.data=new Image();}
else{this.data=document.createElement(type);}
if(this.crossOrigin){this.data.crossOrigin=this.crossOrigin;}
if(!this.metadata.skipSource){this.data.src=this.url;}
var typeName='is'+type[0].toUpperCase()+type.substring(1);if(this[typeName]===false){this[typeName]=true;}
this.data.addEventListener('error',this._boundOnError,false);this.data.addEventListener('load',this._boundComplete,false);this.data.addEventListener('progress',this._boundOnProgress,false);};Resource.prototype._loadSourceElement=function(type){if(this.metadata.loadElement){this.data=this.metadata.loadElement;}
else if(type==='audio'&&typeof window.Audio!=='undefined'){this.data=new Audio();}
else{this.data=document.createElement(type);}
if(this.data===null){this.abort('Unsupported element '+type);return;}
if(!this.metadata.skipSource){if(navigator.isCocoonJS){this.data.src=Array.isArray(this.url)?this.url[0]:this.url;}
else if(Array.isArray(this.url)){for(var i=0;i<this.url.length;++i){this.data.appendChild(this._createSource(type,this.url[i]));}}
else{this.data.appendChild(this._createSource(type,this.url));}}
this['is'+type[0].toUpperCase()+type.substring(1)]=true;this.data.addEventListener('error',this._boundOnError,false);this.data.addEventListener('load',this._boundComplete,false);this.data.addEventListener('progress',this._boundOnProgress,false);this.data.addEventListener('canplaythrough',this._boundComplete,false);this.data.load();};Resource.prototype._loadXhr=function(){if(typeof this.xhrType!=='string'){this.xhrType=this._determineXhrType();}
var xhr=this.xhr=new XMLHttpRequest();xhr.open('GET',this.url,true);if(this.xhrType===Resource.XHR_RESPONSE_TYPE.JSON||this.xhrType===Resource.XHR_RESPONSE_TYPE.DOCUMENT){xhr.responseType=Resource.XHR_RESPONSE_TYPE.TEXT;}
else{xhr.responseType=this.xhrType;}
xhr.addEventListener('error',this._boundXhrOnError,false);xhr.addEventListener('abort',this._boundXhrOnAbort,false);xhr.addEventListener('progress',this._boundOnProgress,false);xhr.addEventListener('load',this._boundXhrOnLoad,false);xhr.send();};Resource.prototype._loadXdr=function(){if(typeof this.xhrType!=='string'){this.xhrType=this._determineXhrType();}
var xdr=this.xhr=new XDomainRequest();xdr.timeout=5000;xdr.onerror=this._boundXhrOnError;xdr.ontimeout=this._boundXdrOnTimeout;xdr.onprogress=this._boundOnProgress;xdr.onload=this._boundXhrOnLoad;xdr.open('GET',this.url,true);setTimeout(function(){xdr.send();},0);};Resource.prototype._createSource=function(type,url,mime){if(!mime){mime=type+'/'+url.substr(url.lastIndexOf('.')+1);}
var source=document.createElement('source');source.src=url;source.type=mime;return source;};Resource.prototype._onError=function(event){this.abort('Failed to load element using '+event.target.nodeName);};Resource.prototype._onProgress=function(event){if(event&&event.lengthComputable){this.emit('progress',this,event.loaded/event.total);}};Resource.prototype._xhrOnError=function(){var xhr=this.xhr;this.abort(reqType(xhr)+' Request failed. Status: '+xhr.status+', text: "'+xhr.statusText+'"');};Resource.prototype._xhrOnAbort=function(){this.abort(reqType(this.xhr)+' Request was aborted by the user.');};Resource.prototype._xdrOnTimeout=function(){this.abort(reqType(this.xhr)+' Request timed out.');};Resource.prototype._xhrOnLoad=function(){var xhr=this.xhr;var status=typeof xhr.status==='undefined'?xhr.status:STATUS_OK;if(status===STATUS_OK||status===STATUS_EMPTY||(status===STATUS_NONE&&xhr.responseText.length>0)){if(this.xhrType===Resource.XHR_RESPONSE_TYPE.TEXT){this.data=xhr.responseText;}
else if(this.xhrType===Resource.XHR_RESPONSE_TYPE.JSON){try{this.data=JSON.parse(xhr.responseText);this.isJson=true;}
catch(e){this.abort('Error trying to parse loaded json:',e);return;}}
else if(this.xhrType===Resource.XHR_RESPONSE_TYPE.DOCUMENT){try{if(window.DOMParser){var domparser=new DOMParser();this.data=domparser.parseFromString(xhr.responseText,'text/xml');}
else{var div=document.createElement('div');div.innerHTML=xhr.responseText;this.data=div;}
this.isXml=true;}
catch(e){this.abort('Error trying to parse loaded xml:',e);return;}}
else{this.data=xhr.response||xhr.responseText;}}
else{this.abort('['+xhr.status+']'+xhr.statusText+':'+xhr.responseURL);return;}
this.complete();};Resource.prototype._determineCrossOrigin=function(url,loc){if(url.indexOf('data:')===0){return'';}
loc=loc||window.location;if(!tempAnchor){tempAnchor=document.createElement('a');}
tempAnchor.href=url;url=_url.parse(tempAnchor.href);var samePort=(!url.port&&loc.port==='')||(url.port===loc.port);if(url.hostname!==loc.hostname||!samePort||url.protocol!==loc.protocol){return'anonymous';}
return'';};Resource.prototype._determineXhrType=function(){return Resource._xhrTypeMap[this._getExtension()]||Resource.XHR_RESPONSE_TYPE.TEXT;};Resource.prototype._determineLoadType=function(){return Resource._loadTypeMap[this._getExtension()]||Resource.LOAD_TYPE.XHR;};Resource.prototype._getExtension=function(){var url=this.url;var ext='';if(this.isDataUrl){var slashIndex=url.indexOf('/');ext=url.substring(slashIndex+1,url.indexOf(';',slashIndex));}
else{var queryStart=url.indexOf('?');if(queryStart!==-1){url=url.substring(0,queryStart);}
ext=url.substring(url.lastIndexOf('.')+1);}
return ext.toLowerCase();};Resource.prototype._getMimeFromXhrType=function(type){switch(type){case Resource.XHR_RESPONSE_TYPE.BUFFER:return'application/octet-binary';case Resource.XHR_RESPONSE_TYPE.BLOB:return'application/blob';case Resource.XHR_RESPONSE_TYPE.DOCUMENT:return'application/xml';case Resource.XHR_RESPONSE_TYPE.JSON:return'application/json';case Resource.XHR_RESPONSE_TYPE.DEFAULT:case Resource.XHR_RESPONSE_TYPE.TEXT:default:return'text/plain';}};function reqType(xhr){return xhr.toString().replace('object ','');}
Resource.LOAD_TYPE={XHR:1,IMAGE:2,AUDIO:3,VIDEO:4};Resource.XHR_RESPONSE_TYPE={DEFAULT:'text',BUFFER:'arraybuffer',BLOB:'blob',DOCUMENT:'document',JSON:'json',TEXT:'text'};Resource._loadTypeMap={gif:Resource.LOAD_TYPE.IMAGE,png:Resource.LOAD_TYPE.IMAGE,bmp:Resource.LOAD_TYPE.IMAGE,jpg:Resource.LOAD_TYPE.IMAGE,jpeg:Resource.LOAD_TYPE.IMAGE,tif:Resource.LOAD_TYPE.IMAGE,tiff:Resource.LOAD_TYPE.IMAGE,webp:Resource.LOAD_TYPE.IMAGE,tga:Resource.LOAD_TYPE.IMAGE,'svg+xml':Resource.LOAD_TYPE.IMAGE};Resource._xhrTypeMap={xhtml:Resource.XHR_RESPONSE_TYPE.DOCUMENT,html:Resource.XHR_RESPONSE_TYPE.DOCUMENT,htm:Resource.XHR_RESPONSE_TYPE.DOCUMENT,xml:Resource.XHR_RESPONSE_TYPE.DOCUMENT,tmx:Resource.XHR_RESPONSE_TYPE.DOCUMENT,tsx:Resource.XHR_RESPONSE_TYPE.DOCUMENT,svg:Resource.XHR_RESPONSE_TYPE.DOCUMENT,gif:Resource.XHR_RESPONSE_TYPE.BLOB,png:Resource.XHR_RESPONSE_TYPE.BLOB,bmp:Resource.XHR_RESPONSE_TYPE.BLOB,jpg:Resource.XHR_RESPONSE_TYPE.BLOB,jpeg:Resource.XHR_RESPONSE_TYPE.BLOB,tif:Resource.XHR_RESPONSE_TYPE.BLOB,tiff:Resource.XHR_RESPONSE_TYPE.BLOB,webp:Resource.XHR_RESPONSE_TYPE.BLOB,tga:Resource.XHR_RESPONSE_TYPE.BLOB,json:Resource.XHR_RESPONSE_TYPE.JSON,text:Resource.XHR_RESPONSE_TYPE.TEXT,txt:Resource.XHR_RESPONSE_TYPE.TEXT};Resource.setExtensionLoadType=function(extname,loadType){setExtMap(Resource._loadTypeMap,extname,loadType);};Resource.setExtensionXhrType=function(extname,xhrType){setExtMap(Resource._xhrTypeMap,extname,xhrType);};function setExtMap(map,extname,val){if(extname&&extname.indexOf('.')===0){extname=extname.substring(1);}
if(!extname){return;}
map[extname]=val;}},{"eventemitter3":32,"url":72}],68:[function(require,module,exports){'use strict';module.exports={_keyStr:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',encodeBinary:function(input){var output='';var bytebuffer;var encodedCharIndexes=new Array(4);var inx=0;var jnx=0;var paddingBytes=0;while(inx<input.length){bytebuffer=new Array(3);for(jnx=0;jnx<bytebuffer.length;jnx++){if(inx<input.length){bytebuffer[jnx]=input.charCodeAt(inx++)&0xff;}
else{bytebuffer[jnx]=0;}}
encodedCharIndexes[0]=bytebuffer[0]>>2;encodedCharIndexes[1]=((bytebuffer[0]&0x3)<<4)|(bytebuffer[1]>>4);encodedCharIndexes[2]=((bytebuffer[1]&0x0f)<<2)|(bytebuffer[2]>>6);encodedCharIndexes[3]=bytebuffer[2]&0x3f;paddingBytes=inx-(input.length-1);switch(paddingBytes){case 2:encodedCharIndexes[3]=64;encodedCharIndexes[2]=64;break;case 1:encodedCharIndexes[3]=64;break;default:break;}
for(jnx=0;jnx<encodedCharIndexes.length;jnx++){output+=this._keyStr.charAt(encodedCharIndexes[jnx]);}}
return output;}};},{}],69:[function(require,module,exports){'use strict';module.exports=require('./Loader');module.exports.Resource=require('./Resource');module.exports.middleware={caching:{memory:require('./middlewares/caching/memory')},parsing:{blob:require('./middlewares/parsing/blob')}};},{"./Loader":66,"./Resource":67,"./middlewares/caching/memory":70,"./middlewares/parsing/blob":71}],70:[function(require,module,exports){'use strict';var cache={};module.exports=function(){return function(resource,next){if(cache[resource.url]){resource.data=cache[resource.url];resource.complete();}
else{resource.once('complete',function(){cache[this.url]=this.data;});}
next();};};},{}],71:[function(require,module,exports){'use strict';var Resource=require('../../Resource');var b64=require('../../b64');var Url=window.URL||window.webkitURL;module.exports=function(){return function(resource,next){if(!resource.data){next();return;}
if(resource.xhr&&resource.xhrType===Resource.XHR_RESPONSE_TYPE.BLOB){if(!window.Blob||typeof resource.data==='string'){var type=resource.xhr.getResponseHeader('content-type');if(type&&type.indexOf('image')===0){resource.data=new Image();resource.data.src='data:'+type+';base64,'+b64.encodeBinary(resource.xhr.responseText);resource.isImage=true;resource.data.onload=function(){resource.data.onload=null;next();};return;}}
else if(resource.data.type.indexOf('image')===0){var src=Url.createObjectURL(resource.data);resource.blob=resource.data;resource.data=new Image();resource.data.src=src;resource.isImage=true;resource.data.onload=function(){Url.revokeObjectURL(src);resource.data.onload=null;next();};return;}}
next();};};},{"../../Resource":67,"../../b64":68}],72:[function(require,module,exports){'use strict';var punycode=require('punycode');var util=require('./util');exports.parse=urlParse;exports.resolve=urlResolve;exports.resolveObject=urlResolveObject;exports.format=urlFormat;exports.Url=Url;function Url(){this.protocol=null;this.slashes=null;this.auth=null;this.host=null;this.port=null;this.hostname=null;this.hash=null;this.search=null;this.query=null;this.pathname=null;this.path=null;this.href=null;}
var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,simplePathPattern=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,delims=['<','>','"','`',' ','\r','\n','\t'],unwise=['{','}','|','\\','^','`'].concat(delims),autoEscape=['\''].concat(unwise),nonHostChars=['%','/','?',';','#'].concat(autoEscape),hostEndingChars=['/','?','#'],hostnameMaxLen=255,hostnamePartPattern=/^[+a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,unsafeProtocol={'javascript':true,'javascript:':true},hostlessProtocol={'javascript':true,'javascript:':true},slashedProtocol={'http':true,'https':true,'ftp':true,'gopher':true,'file':true,'http:':true,'https:':true,'ftp:':true,'gopher:':true,'file:':true},querystring=require('querystring');function urlParse(url,parseQueryString,slashesDenoteHost){if(url&&util.isObject(url)&&url instanceof Url)return url;var u=new Url;u.parse(url,parseQueryString,slashesDenoteHost);return u;}
Url.prototype.parse=function(url,parseQueryString,slashesDenoteHost){if(!util.isString(url)){throw new TypeError("Parameter 'url' must be a string, not "+typeof url);}
var queryIndex=url.indexOf('?'),splitter=(queryIndex!==-1&&queryIndex<url.indexOf('#'))?'?':'#',uSplit=url.split(splitter),slashRegex=/\\/g;uSplit[0]=uSplit[0].replace(slashRegex,'/');url=uSplit.join(splitter);var rest=url;rest=rest.trim();if(!slashesDenoteHost&&url.split('#').length===1){var simplePath=simplePathPattern.exec(rest);if(simplePath){this.path=rest;this.href=rest;this.pathname=simplePath[1];if(simplePath[2]){this.search=simplePath[2];if(parseQueryString){this.query=querystring.parse(this.search.substr(1));}else{this.query=this.search.substr(1);}}else if(parseQueryString){this.search='';this.query={};}
return this;}}
var proto=protocolPattern.exec(rest);if(proto){proto=proto[0];var lowerProto=proto.toLowerCase();this.protocol=lowerProto;rest=rest.substr(proto.length);}
if(slashesDenoteHost||proto||rest.match(/^\/\/[^@\/]+@[^@\/]+/)){var slashes=rest.substr(0,2)==='//';if(slashes&&!(proto&&hostlessProtocol[proto])){rest=rest.substr(2);this.slashes=true;}}
if(!hostlessProtocol[proto]&&(slashes||(proto&&!slashedProtocol[proto]))){var hostEnd=-1;for(var i=0;i<hostEndingChars.length;i++){var hec=rest.indexOf(hostEndingChars[i]);if(hec!==-1&&(hostEnd===-1||hec<hostEnd))
hostEnd=hec;}
var auth,atSign;if(hostEnd===-1){atSign=rest.lastIndexOf('@');}else{atSign=rest.lastIndexOf('@',hostEnd);}
if(atSign!==-1){auth=rest.slice(0,atSign);rest=rest.slice(atSign+1);this.auth=decodeURIComponent(auth);}
hostEnd=-1;for(var i=0;i<nonHostChars.length;i++){var hec=rest.indexOf(nonHostChars[i]);if(hec!==-1&&(hostEnd===-1||hec<hostEnd))
hostEnd=hec;}
if(hostEnd===-1)
hostEnd=rest.length;this.host=rest.slice(0,hostEnd);rest=rest.slice(hostEnd);this.parseHost();this.hostname=this.hostname||'';var ipv6Hostname=this.hostname[0]==='['&&this.hostname[this.hostname.length-1]===']';if(!ipv6Hostname){var hostparts=this.hostname.split(/\./);for(var i=0,l=hostparts.length;i<l;i++){var part=hostparts[i];if(!part)continue;if(!part.match(hostnamePartPattern)){var newpart='';for(var j=0,k=part.length;j<k;j++){if(part.charCodeAt(j)>127){newpart+='x';}else{newpart+=part[j];}}
if(!newpart.match(hostnamePartPattern)){var validParts=hostparts.slice(0,i);var notHost=hostparts.slice(i+1);var bit=part.match(hostnamePartStart);if(bit){validParts.push(bit[1]);notHost.unshift(bit[2]);}
if(notHost.length){rest='/'+notHost.join('.')+rest;}
this.hostname=validParts.join('.');break;}}}}
if(this.hostname.length>hostnameMaxLen){this.hostname='';}else{this.hostname=this.hostname.toLowerCase();}
if(!ipv6Hostname){this.hostname=punycode.toASCII(this.hostname);}
var p=this.port?':'+this.port:'';var h=this.hostname||'';this.host=h+p;this.href+=this.host;if(ipv6Hostname){this.hostname=this.hostname.substr(1,this.hostname.length-2);if(rest[0]!=='/'){rest='/'+rest;}}}
if(!unsafeProtocol[lowerProto]){for(var i=0,l=autoEscape.length;i<l;i++){var ae=autoEscape[i];if(rest.indexOf(ae)===-1)
continue;var esc=encodeURIComponent(ae);if(esc===ae){esc=escape(ae);}
rest=rest.split(ae).join(esc);}}
var hash=rest.indexOf('#');if(hash!==-1){this.hash=rest.substr(hash);rest=rest.slice(0,hash);}
var qm=rest.indexOf('?');if(qm!==-1){this.search=rest.substr(qm);this.query=rest.substr(qm+1);if(parseQueryString){this.query=querystring.parse(this.query);}
rest=rest.slice(0,qm);}else if(parseQueryString){this.search='';this.query={};}
if(rest)this.pathname=rest;if(slashedProtocol[lowerProto]&&this.hostname&&!this.pathname){this.pathname='/';}
if(this.pathname||this.search){var p=this.pathname||'';var s=this.search||'';this.path=p+s;}
this.href=this.format();return this;};function urlFormat(obj){if(util.isString(obj))obj=urlParse(obj);if(!(obj instanceof Url))return Url.prototype.format.call(obj);return obj.format();}
Url.prototype.format=function(){var auth=this.auth||'';if(auth){auth=encodeURIComponent(auth);auth=auth.replace(/%3A/i,':');auth+='@';}
var protocol=this.protocol||'',pathname=this.pathname||'',hash=this.hash||'',host=false,query='';if(this.host){host=auth+this.host;}else if(this.hostname){host=auth+(this.hostname.indexOf(':')===-1?this.hostname:'['+this.hostname+']');if(this.port){host+=':'+this.port;}}
if(this.query&&util.isObject(this.query)&&Object.keys(this.query).length){query=querystring.stringify(this.query);}
var search=this.search||(query&&('?'+query))||'';if(protocol&&protocol.substr(-1)!==':')protocol+=':';if(this.slashes||(!protocol||slashedProtocol[protocol])&&host!==false){host='//'+(host||'');if(pathname&&pathname.charAt(0)!=='/')pathname='/'+pathname;}else if(!host){host='';}
if(hash&&hash.charAt(0)!=='#')hash='#'+hash;if(search&&search.charAt(0)!=='?')search='?'+search;pathname=pathname.replace(/[?#]/g,function(match){return encodeURIComponent(match);});search=search.replace('#','%23');return protocol+host+pathname+search+hash;};function urlResolve(source,relative){return urlParse(source,false,true).resolve(relative);}
Url.prototype.resolve=function(relative){return this.resolveObject(urlParse(relative,false,true)).format();};function urlResolveObject(source,relative){if(!source)return relative;return urlParse(source,false,true).resolveObject(relative);}
Url.prototype.resolveObject=function(relative){if(util.isString(relative)){var rel=new Url();rel.parse(relative,false,true);relative=rel;}
var result=new Url();var tkeys=Object.keys(this);for(var tk=0;tk<tkeys.length;tk++){var tkey=tkeys[tk];result[tkey]=this[tkey];}
result.hash=relative.hash;if(relative.href===''){result.href=result.format();return result;}
if(relative.slashes&&!relative.protocol){var rkeys=Object.keys(relative);for(var rk=0;rk<rkeys.length;rk++){var rkey=rkeys[rk];if(rkey!=='protocol')
result[rkey]=relative[rkey];}
if(slashedProtocol[result.protocol]&&result.hostname&&!result.pathname){result.path=result.pathname='/';}
result.href=result.format();return result;}
if(relative.protocol&&relative.protocol!==result.protocol){if(!slashedProtocol[relative.protocol]){var keys=Object.keys(relative);for(var v=0;v<keys.length;v++){var k=keys[v];result[k]=relative[k];}
result.href=result.format();return result;}
result.protocol=relative.protocol;if(!relative.host&&!hostlessProtocol[relative.protocol]){var relPath=(relative.pathname||'').split('/');while(relPath.length&&!(relative.host=relPath.shift()));if(!relative.host)relative.host='';if(!relative.hostname)relative.hostname='';if(relPath[0]!=='')relPath.unshift('');if(relPath.length<2)relPath.unshift('');result.pathname=relPath.join('/');}else{result.pathname=relative.pathname;}
result.search=relative.search;result.query=relative.query;result.host=relative.host||'';result.auth=relative.auth;result.hostname=relative.hostname||relative.host;result.port=relative.port;if(result.pathname||result.search){var p=result.pathname||'';var s=result.search||'';result.path=p+s;}
result.slashes=result.slashes||relative.slashes;result.href=result.format();return result;}
var isSourceAbs=(result.pathname&&result.pathname.charAt(0)==='/'),isRelAbs=(relative.host||relative.pathname&&relative.pathname.charAt(0)==='/'),mustEndAbs=(isRelAbs||isSourceAbs||(result.host&&relative.pathname)),removeAllDots=mustEndAbs,srcPath=result.pathname&&result.pathname.split('/')||[],relPath=relative.pathname&&relative.pathname.split('/')||[],psychotic=result.protocol&&!slashedProtocol[result.protocol];if(psychotic){result.hostname='';result.port=null;if(result.host){if(srcPath[0]==='')srcPath[0]=result.host;else srcPath.unshift(result.host);}
result.host='';if(relative.protocol){relative.hostname=null;relative.port=null;if(relative.host){if(relPath[0]==='')relPath[0]=relative.host;else relPath.unshift(relative.host);}
relative.host=null;}
mustEndAbs=mustEndAbs&&(relPath[0]===''||srcPath[0]==='');}
if(isRelAbs){result.host=(relative.host||relative.host==='')?relative.host:result.host;result.hostname=(relative.hostname||relative.hostname==='')?relative.hostname:result.hostname;result.search=relative.search;result.query=relative.query;srcPath=relPath;}else if(relPath.length){if(!srcPath)srcPath=[];srcPath.pop();srcPath=srcPath.concat(relPath);result.search=relative.search;result.query=relative.query;}else if(!util.isNullOrUndefined(relative.search)){if(psychotic){result.hostname=result.host=srcPath.shift();var authInHost=result.host&&result.host.indexOf('@')>0?result.host.split('@'):false;if(authInHost){result.auth=authInHost.shift();result.host=result.hostname=authInHost.shift();}}
result.search=relative.search;result.query=relative.query;if(!util.isNull(result.pathname)||!util.isNull(result.search)){result.path=(result.pathname?result.pathname:'')+
(result.search?result.search:'');}
result.href=result.format();return result;}
if(!srcPath.length){result.pathname=null;if(result.search){result.path='/'+result.search;}else{result.path=null;}
result.href=result.format();return result;}
var last=srcPath.slice(-1)[0];var hasTrailingSlash=((result.host||relative.host||srcPath.length>1)&&(last==='.'||last==='..')||last==='');var up=0;for(var i=srcPath.length;i>=0;i--){last=srcPath[i];if(last==='.'){srcPath.splice(i,1);}else if(last==='..'){srcPath.splice(i,1);up++;}else if(up){srcPath.splice(i,1);up--;}}
if(!mustEndAbs&&!removeAllDots){for(;up--;up){srcPath.unshift('..');}}
if(mustEndAbs&&srcPath[0]!==''&&(!srcPath[0]||srcPath[0].charAt(0)!=='/')){srcPath.unshift('');}
if(hasTrailingSlash&&(srcPath.join('/').substr(-1)!=='/')){srcPath.push('');}
var isAbsolute=srcPath[0]===''||(srcPath[0]&&srcPath[0].charAt(0)==='/');if(psychotic){result.hostname=result.host=isAbsolute?'':srcPath.length?srcPath.shift():'';var authInHost=result.host&&result.host.indexOf('@')>0?result.host.split('@'):false;if(authInHost){result.auth=authInHost.shift();result.host=result.hostname=authInHost.shift();}}
mustEndAbs=mustEndAbs||(result.host&&srcPath.length);if(mustEndAbs&&!isAbsolute){srcPath.unshift('');}
if(!srcPath.length){result.pathname=null;result.path=null;}else{result.pathname=srcPath.join('/');}
if(!util.isNull(result.pathname)||!util.isNull(result.search)){result.path=(result.pathname?result.pathname:'')+
(result.search?result.search:'');}
result.auth=relative.auth||result.auth;result.slashes=result.slashes||relative.slashes;result.href=result.format();return result;};Url.prototype.parseHost=function(){var host=this.host;var port=portPattern.exec(host);if(port){port=port[0];if(port!==':'){this.port=port.substr(1);}
host=host.substr(0,host.length-port.length);}
if(host)this.hostname=host;};},{"./util":73,"punycode":62,"querystring":65}],73:[function(require,module,exports){'use strict';module.exports={isString:function(arg){return typeof(arg)==='string';},isObject:function(arg){return typeof(arg)==='object'&&arg!==null;},isNull:function(arg){return arg===null;},isNullOrUndefined:function(arg){return arg==null;}};},{}],74:[function(require,module,exports){var core=require('../core');var Device=require('ismobilejs');Object.assign(core.DisplayObject.prototype,require('./accessibleTarget'));function AccessibilityManager(renderer)
{if((Device.tablet||Device.phone)&&!navigator.isCocoonJS)
{this.createTouchHook();}
var div=document.createElement('div');div.style.width=100+'px';div.style.height=100+'px';div.style.position='absolute';div.style.top=0;div.style.left=0;div.style.zIndex=2;this.div=div;this.pool=[];this.renderId=0;this.debug=false;this.renderer=renderer;this.children=[];this._onKeyDown=this._onKeyDown.bind(this);this._onMouseMove=this._onMouseMove.bind(this);this.isActive=false;this.isMobileAccessabillity=false;window.addEventListener('keydown',this._onKeyDown,false);}
AccessibilityManager.prototype.constructor=AccessibilityManager;module.exports=AccessibilityManager;AccessibilityManager.prototype.createTouchHook=function()
{var hookDiv=document.createElement('button');hookDiv.style.width=1+'px';hookDiv.style.height=1+'px';hookDiv.style.position='absolute';hookDiv.style.top=-1000+'px';hookDiv.style.left=-1000+'px';hookDiv.style.zIndex=2;hookDiv.style.backgroundColor='#FF0000';hookDiv.title='HOOK DIV';hookDiv.addEventListener('focus',function(){this.isMobileAccessabillity=true;this.activate();document.body.removeChild(hookDiv);}.bind(this));document.body.appendChild(hookDiv);};AccessibilityManager.prototype.activate=function()
{if(this.isActive)
{return;}
this.isActive=true;window.document.addEventListener('mousemove',this._onMouseMove,true);window.removeEventListener('keydown',this._onKeyDown,false);this.renderer.on('postrender',this.update,this);if(this.renderer.view.parentNode)
{this.renderer.view.parentNode.appendChild(this.div);}};AccessibilityManager.prototype.deactivate=function()
{if(!this.isActive||this.isMobileAccessabillity)
{return;}
this.isActive=false;window.document.removeEventListener('mousemove',this._onMouseMove);window.addEventListener('keydown',this._onKeyDown,false);this.renderer.off('postrender',this.update);if(this.div.parentNode)
{this.div.parentNode.removeChild(this.div);}};AccessibilityManager.prototype.updateAccessibleObjects=function(displayObject)
{if(!displayObject.visible)
{return;}
if(displayObject.accessible&&displayObject.interactive)
{if(!displayObject._accessibleActive)
{this.addChild(displayObject);}
displayObject.renderId=this.renderId;}
var children=displayObject.children;for(var i=children.length-1;i>=0;i--){this.updateAccessibleObjects(children[i]);}};AccessibilityManager.prototype.update=function()
{if(!this.renderer.renderingToScreen){return;}
this.updateAccessibleObjects(this.renderer._lastObjectRendered);var rect=this.renderer.view.getBoundingClientRect();var sx=rect.width/this.renderer.width;var sy=rect.height/this.renderer.height;var div=this.div;div.style.left=rect.left+'px';div.style.top=rect.top+'px';div.style.width=this.renderer.width+'px';div.style.height=this.renderer.height+'px';for(var i=0;i<this.children.length;i++)
{var child=this.children[i];if(child.renderId!==this.renderId)
{child._accessibleActive=false;core.utils.removeItems(this.children,i,1);this.div.removeChild(child._accessibleDiv);this.pool.push(child._accessibleDiv);child._accessibleDiv=null;i--;if(this.children.length===0)
{this.deactivate();}}
else
{div=child._accessibleDiv;var hitArea=child.hitArea;var wt=child.worldTransform;if(child.hitArea)
{div.style.left=((wt.tx+(hitArea.x*wt.a))*sx)+'px';div.style.top=((wt.ty+(hitArea.y*wt.d))*sy)+'px';div.style.width=(hitArea.width*wt.a*sx)+'px';div.style.height=(hitArea.height*wt.d*sy)+'px';}
else
{hitArea=child.getBounds();this.capHitArea(hitArea);div.style.left=(hitArea.x*sx)+'px';div.style.top=(hitArea.y*sy)+'px';div.style.width=(hitArea.width*sx)+'px';div.style.height=(hitArea.height*sy)+'px';}}}
this.renderId++;};AccessibilityManager.prototype.capHitArea=function(hitArea)
{if(hitArea.x<0)
{hitArea.width+=hitArea.x;hitArea.x=0;}
if(hitArea.y<0)
{hitArea.height+=hitArea.y;hitArea.y=0;}
if(hitArea.x+hitArea.width>this.renderer.width)
{hitArea.width=this.renderer.width-hitArea.x;}
if(hitArea.y+hitArea.height>this.renderer.height)
{hitArea.height=this.renderer.height-hitArea.y;}};AccessibilityManager.prototype.addChild=function(displayObject)
{var div=this.pool.pop();if(!div)
{div=document.createElement('button');div.style.width=100+'px';div.style.height=100+'px';div.style.backgroundColor=this.debug?'rgba(255,0,0,0.5)':'transparent';div.style.position='absolute';div.style.zIndex=2;div.style.borderStyle='none';div.addEventListener('click',this._onClick.bind(this));div.addEventListener('focus',this._onFocus.bind(this));div.addEventListener('focusout',this._onFocusOut.bind(this));}
if(displayObject.accessibleTitle)
{div.title=displayObject.accessibleTitle;}
else if(!displayObject.accessibleTitle&&!displayObject.accessibleHint)
{div.title='displayObject '+this.tabIndex;}
if(displayObject.accessibleHint)
{div.setAttribute('aria-label',displayObject.accessibleHint);}
displayObject._accessibleActive=true;displayObject._accessibleDiv=div;div.displayObject=displayObject;this.children.push(displayObject);this.div.appendChild(displayObject._accessibleDiv);displayObject._accessibleDiv.tabIndex=displayObject.tabIndex;};AccessibilityManager.prototype._onClick=function(e)
{var interactionManager=this.renderer.plugins.interaction;interactionManager.dispatchEvent(e.target.displayObject,'click',interactionManager.eventData);};AccessibilityManager.prototype._onFocus=function(e)
{var interactionManager=this.renderer.plugins.interaction;interactionManager.dispatchEvent(e.target.displayObject,'mouseover',interactionManager.eventData);};AccessibilityManager.prototype._onFocusOut=function(e)
{var interactionManager=this.renderer.plugins.interaction;interactionManager.dispatchEvent(e.target.displayObject,'mouseout',interactionManager.eventData);};AccessibilityManager.prototype._onKeyDown=function(e)
{if(e.keyCode!==9)
{return;}
this.activate();};AccessibilityManager.prototype._onMouseMove=function()
{this.deactivate();};AccessibilityManager.prototype.destroy=function()
{this.div=null;for(var i=0;i<this.children.length;i++)
{this.children[i].div=null;}
window.document.removeEventListener('mousemove',this._onMouseMove);window.removeEventListener('keydown',this._onKeyDown);this.pool=null;this.children=null;this.renderer=null;};core.WebGLRenderer.registerPlugin('accessibility',AccessibilityManager);core.CanvasRenderer.registerPlugin('accessibility',AccessibilityManager);},{"../core":97,"./accessibleTarget":75,"ismobilejs":33}],75:[function(require,module,exports){var accessibleTarget={accessible:false,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:false,_accessibleDiv:false};module.exports=accessibleTarget;},{}],76:[function(require,module,exports){module.exports={accessibleTarget:require('./accessibleTarget'),AccessibilityManager:require('./AccessibilityManager')};},{"./AccessibilityManager":74,"./accessibleTarget":75}],77:[function(require,module,exports){var GLShader=require('pixi-gl-core').GLShader;var Const=require('./const');function checkPrecision(src){if(src instanceof Array){if(src[0].substring(0,9)!=='precision'){var copy=src.slice(0);copy.unshift('precision '+Const.PRECISION.DEFAULT+' float;');return copy;}}else{if(src.substring(0,9)!=='precision'){return'precision '+Const.PRECISION.DEFAULT+' float;\n'+src;}}
return src;}
var Shader=function(gl,vertexSrc,fragmentSrc,attributeLocations){GLShader.call(this,gl,checkPrecision(vertexSrc),checkPrecision(fragmentSrc),attributeLocations);};Shader.prototype=Object.create(GLShader.prototype);Shader.prototype.constructor=Shader;module.exports=Shader;},{"./const":78,"pixi-gl-core":7}],78:[function(require,module,exports){var CONST={VERSION:'4.0.2',PI_2:Math.PI*2,RAD_TO_DEG:180/Math.PI,DEG_TO_RAD:Math.PI/180,TARGET_FPMS:0.06,RENDERER_TYPE:{UNKNOWN:0,WEBGL:1,CANVAS:2},BLEND_MODES:{NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},DRAW_MODES:{POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},SCALE_MODES:{DEFAULT:0,LINEAR:0,NEAREST:1},WRAP_MODES:{DEFAULT:0,CLAMP:0,REPEAT:1,MIRRORED_REPEAT:2},GC_MODES:{DEFAULT:0,AUTO:0,MANUAL:1,},MIPMAP_TEXTURES:true,RETINA_PREFIX:/@(.+)x/,RESOLUTION:1,FILTER_RESOLUTION:1,DEFAULT_RENDER_OPTIONS:{view:null,resolution:1,antialias:false,forceFXAA:false,autoResize:false,transparent:false,backgroundColor:0x000000,clearBeforeRender:true,preserveDrawingBuffer:false,roundPixels:false},SHAPES:{POLY:0,RECT:1,CIRC:2,ELIP:3,RREC:4},PRECISION:{DEFAULT:'mediump',LOW:'lowp',MEDIUM:'mediump',HIGH:'highp'},TRANSFORM_MODE:{DEFAULT:0,STATIC:0,DYNAMIC:1},TEXT_GRADIENT:{LINEAR_VERTICAL:0,LINEAR_HORIZONTAL:1},SPRITE_BATCH_SIZE:4096,SPRITE_MAX_TEXTURES:require('./utils/maxRecommendedTextures')(32)};module.exports=CONST;},{"./utils/maxRecommendedTextures":152}],79:[function(require,module,exports){var math=require('../math'),Rectangle=math.Rectangle;function Bounds()
{this.minX=Infinity;this.minY=Infinity;this.maxX=-Infinity;this.maxY=-Infinity;this.rect=null;}
Bounds.prototype.constructor=Bounds;module.exports=Bounds;Bounds.prototype.isEmpty=function()
{return this.minX>this.maxX||this.minY>this.maxY;};Bounds.prototype.clear=function()
{this.updateID++;this.minX=Infinity;this.minY=Infinity;this.maxX=-Infinity;this.maxY=-Infinity;};Bounds.prototype.getRectangle=function(rect)
{if(this.minX>this.maxX||this.minY>this.maxY){return Rectangle.EMPTY;}
rect=rect||new Rectangle(0,0,1,1);rect.x=this.minX;rect.y=this.minY;rect.width=this.maxX-this.minX;rect.height=this.maxY-this.minY;return rect;};Bounds.prototype.addPoint=function(point)
{this.minX=Math.min(this.minX,point.x);this.maxX=Math.max(this.maxX,point.x);this.minY=Math.min(this.minY,point.y);this.maxY=Math.max(this.maxY,point.y);};Bounds.prototype.addQuad=function(vertices)
{var minX=this.minX,minY=this.minY,maxX=this.maxX,maxY=this.maxY;var x=vertices[0];var y=vertices[1];minX=x<minX?x:minX;minY=y<minY?y:minY;maxX=x>maxX?x:maxX;maxY=y>maxY?y:maxY;x=vertices[2];y=vertices[3];minX=x<minX?x:minX;minY=y<minY?y:minY;maxX=x>maxX?x:maxX;maxY=y>maxY?y:maxY;x=vertices[4];y=vertices[5];minX=x<minX?x:minX;minY=y<minY?y:minY;maxX=x>maxX?x:maxX;maxY=y>maxY?y:maxY;x=vertices[6];y=vertices[7];minX=x<minX?x:minX;minY=y<minY?y:minY;maxX=x>maxX?x:maxX;maxY=y>maxY?y:maxY;this.minX=minX;this.minY=minY;this.maxX=maxX;this.maxY=maxY;};Bounds.prototype.addFrame=function(transform,x0,y0,x1,y1)
{var matrix=transform.worldTransform;var a=matrix.a,b=matrix.b,c=matrix.c,d=matrix.d,tx=matrix.tx,ty=matrix.ty;var minX=this.minX,minY=this.minY,maxX=this.maxX,maxY=this.maxY;var x=a*x0+c*y0+tx;var y=b*x0+d*y0+ty;minX=x<minX?x:minX;minY=y<minY?y:minY;maxX=x>maxX?x:maxX;maxY=y>maxY?y:maxY;x=a*x1+c*y0+tx;y=b*x1+d*y0+ty;minX=x<minX?x:minX;minY=y<minY?y:minY;maxX=x>maxX?x:maxX;maxY=y>maxY?y:maxY;x=a*x0+c*y1+tx;y=b*x0+d*y1+ty;minX=x<minX?x:minX;minY=y<minY?y:minY;maxX=x>maxX?x:maxX;maxY=y>maxY?y:maxY;x=a*x1+c*y1+tx;y=b*x1+d*y1+ty;minX=x<minX?x:minX;minY=y<minY?y:minY;maxX=x>maxX?x:maxX;maxY=y>maxY?y:maxY;this.minX=minX;this.minY=minY;this.maxX=maxX;this.maxY=maxY;};Bounds.prototype.addVertices=function(transform,vertices,beginOffset,endOffset)
{var matrix=transform.worldTransform;var a=matrix.a,b=matrix.b,c=matrix.c,d=matrix.d,tx=matrix.tx,ty=matrix.ty;var minX=this.minX,minY=this.minY,maxX=this.maxX,maxY=this.maxY;for(var i=beginOffset;i<endOffset;i+=2)
{var rawX=vertices[i],rawY=vertices[i+1];var x=(a*rawX)+(c*rawY)+tx;var y=(d*rawY)+(b*rawX)+ty;minX=x<minX?x:minX;minY=y<minY?y:minY;maxX=x>maxX?x:maxX;maxY=y>maxY?y:maxY;}
this.minX=minX;this.minY=minY;this.maxX=maxX;this.maxY=maxY;};Bounds.prototype.addBounds=function(bounds)
{var minX=this.minX,minY=this.minY,maxX=this.maxX,maxY=this.maxY;this.minX=bounds.minX<minX?bounds.minX:minX;this.minY=bounds.minY<minY?bounds.minY:minY;this.maxX=bounds.maxX>maxX?bounds.maxX:maxX;this.maxY=bounds.maxY>maxY?bounds.maxY:maxY;};},{"../math":102}],80:[function(require,module,exports){var utils=require('../utils'),DisplayObject=require('./DisplayObject');function Container()
{DisplayObject.call(this);this.children=[];}
Container.prototype=Object.create(DisplayObject.prototype);Container.prototype.constructor=Container;module.exports=Container;Object.defineProperties(Container.prototype,{width:{get:function()
{return this.scale.x*this.getLocalBounds().width;},set:function(value)
{var width=this.getLocalBounds().width;if(width!==0)
{this.scale.x=value/width;}
else
{this.scale.x=1;}
this._width=value;}},height:{get:function()
{return this.scale.y*this.getLocalBounds().height;},set:function(value)
{var height=this.getLocalBounds().height;if(height!==0)
{this.scale.y=value/height;}
else
{this.scale.y=1;}
this._height=value;}}});Container.prototype.onChildrenChange=function(){};Container.prototype.addChild=function(child)
{var argumentsLength=arguments.length;if(argumentsLength>1)
{for(var i=0;i<argumentsLength;i++)
{this.addChild(arguments[i]);}}
else
{if(child.parent)
{child.parent.removeChild(child);}
child.parent=this;this.transform._parentID=-1;this.children.push(child);this.onChildrenChange(this.children.length-1);child.emit('added',this);}
return child;};Container.prototype.addChildAt=function(child,index)
{if(index>=0&&index<=this.children.length)
{if(child.parent)
{child.parent.removeChild(child);}
child.parent=this;this.children.splice(index,0,child);this.onChildrenChange(index);child.emit('added',this);return child;}
else
{throw new Error(child+'addChildAt: The index '+index+' supplied is out of bounds '+this.children.length);}};Container.prototype.swapChildren=function(child,child2)
{if(child===child2)
{return;}
var index1=this.getChildIndex(child);var index2=this.getChildIndex(child2);if(index1<0||index2<0)
{throw new Error('swapChildren: Both the supplied DisplayObjects must be children of the caller.');}
this.children[index1]=child2;this.children[index2]=child;this.onChildrenChange(index1<index2?index1:index2);};Container.prototype.getChildIndex=function(child)
{var index=this.children.indexOf(child);if(index===-1)
{throw new Error('The supplied DisplayObject must be a child of the caller');}
return index;};Container.prototype.setChildIndex=function(child,index)
{if(index<0||index>=this.children.length)
{throw new Error('The supplied index is out of bounds');}
var currentIndex=this.getChildIndex(child);utils.removeItems(this.children,currentIndex,1);this.children.splice(index,0,child);this.onChildrenChange(index);};Container.prototype.getChildAt=function(index)
{if(index<0||index>=this.children.length)
{throw new Error('getChildAt: Supplied index '+index+' does not exist in the child list, or the supplied DisplayObject is not a child of the caller');}
return this.children[index];};Container.prototype.removeChild=function(child)
{var argumentsLength=arguments.length;if(argumentsLength>1)
{for(var i=0;i<argumentsLength;i++)
{this.removeChild(arguments[i]);}}
else
{var index=this.children.indexOf(child);if(index===-1)
{return;}
child.parent=null;utils.removeItems(this.children,index,1);this.onChildrenChange(index);child.emit('removed',this);}
return child;};Container.prototype.removeChildAt=function(index)
{var child=this.getChildAt(index);child.parent=null;utils.removeItems(this.children,index,1);this.onChildrenChange(index);child.emit('removed',this);return child;};Container.prototype.removeChildren=function(beginIndex,endIndex)
{var begin=beginIndex||0;var end=typeof endIndex==='number'?endIndex:this.children.length;var range=end-begin;var removed,i;if(range>0&&range<=end)
{removed=this.children.splice(begin,range);for(i=0;i<removed.length;++i)
{removed[i].parent=null;}
this.onChildrenChange(beginIndex);for(i=0;i<removed.length;++i)
{removed[i].emit('removed',this);}
return removed;}
else if(range===0&&this.children.length===0)
{return[];}
else
{throw new RangeError('removeChildren: numeric values are outside the acceptable range.');}};Container.prototype.updateTransform=function()
{this._boundsID++;if(!this.visible)
{return;}
this.transform.updateTransform(this.parent.transform);this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var i=0,j=this.children.length;i<j;++i)
{this.children[i].updateTransform();}};Container.prototype.containerUpdateTransform=Container.prototype.updateTransform;Container.prototype.calculateBounds=function()
{this._bounds.clear();if(!this.visible)
{return;}
this._calculateBounds();for(var i=0;i<this.children.length;i++)
{var child=this.children[i];child.calculateBounds();this._bounds.addBounds(child._bounds);}
this._boundsID=this._lastBoundsID;};Container.prototype._calculateBounds=function()
{};Container.prototype.renderWebGL=function(renderer)
{if(!this.visible||this.worldAlpha<=0||!this.renderable)
{return;}
if(this._mask||this._filters)
{this.renderAdvancedWebGL(renderer);}
else
{this._renderWebGL(renderer);for(var i=0,j=this.children.length;i<j;++i)
{this.children[i].renderWebGL(renderer);}}};Container.prototype.renderAdvancedWebGL=function(renderer)
{renderer.currentRenderer.flush();var filters=this._filters;var mask=this._mask;var i,j;if(filters)
{if(!this._enabledFilters)
{this._enabledFilters=[];}
this._enabledFilters.length=0;for(i=0;i<filters.length;i++)
{if(filters[i].enabled)
{this._enabledFilters.push(filters[i]);}}
if(this._enabledFilters.length)
{renderer.filterManager.pushFilter(this,this._enabledFilters);}}
if(mask)
{renderer.maskManager.pushMask(this,this._mask);}
renderer.currentRenderer.start();this._renderWebGL(renderer);for(i=0,j=this.children.length;i<j;i++)
{this.children[i].renderWebGL(renderer);}
renderer.currentRenderer.flush();if(mask)
{renderer.maskManager.popMask(this,this._mask);}
if(filters&&this._enabledFilters&&this._enabledFilters.length)
{renderer.filterManager.popFilter();}
renderer.currentRenderer.start();};Container.prototype._renderWebGL=function(renderer)
{};Container.prototype._renderCanvas=function(renderer)
{};Container.prototype.renderCanvas=function(renderer)
{if(!this.visible||this.alpha<=0||!this.renderable)
{return;}
if(this._mask)
{renderer.maskManager.pushMask(this._mask);}
this._renderCanvas(renderer);for(var i=0,j=this.children.length;i<j;++i)
{this.children[i].renderCanvas(renderer);}
if(this._mask)
{renderer.maskManager.popMask(renderer);}};Container.prototype.destroy=function(options)
{DisplayObject.prototype.destroy.call(this);var destroyChildren=typeof options==='boolean'?options:options&&options.children;var oldChildren=this.children;this.children=null;if(destroyChildren)
{for(var i=oldChildren.length-1;i>=0;i--)
{var child=oldChildren[i];child.parent=null;child.destroy(options);}}};},{"../utils":151,"./DisplayObject":81}],81:[function(require,module,exports){var EventEmitter=require('eventemitter3'),CONST=require('../const'),TransformStatic=require('./TransformStatic'),Transform=require('./Transform'),Bounds=require('./Bounds'),math=require('../math'),_tempDisplayObjectParent=new DisplayObject();function DisplayObject()
{EventEmitter.call(this);var TransformClass=CONST.TRANSFORM_MODE.DEFAULT===CONST.TRANSFORM_MODE.STATIC?TransformStatic:Transform;this.transform=new TransformClass();this.alpha=1;this.visible=true;this.renderable=true;this.parent=null;this.worldAlpha=1;this.filterArea=null;this._filters=null;this._enabledFilters=null;this._bounds=new Bounds();this._boundsID=0;this._lastBoundsID=-1;this._boundsRect=null;this._localBoundsRect=null;this._mask=null;}
DisplayObject.prototype=Object.create(EventEmitter.prototype);DisplayObject.prototype.constructor=DisplayObject;module.exports=DisplayObject;Object.defineProperties(DisplayObject.prototype,{x:{get:function()
{return this.position.x;},set:function(value)
{this.transform.position.x=value;}},y:{get:function()
{return this.position.y;},set:function(value)
{this.transform.position.y=value;}},worldTransform:{get:function()
{return this.transform.worldTransform;}},localTransform:{get:function()
{return this.transform.localTransform;}},position:{get:function()
{return this.transform.position;},set:function(value){this.transform.position.copy(value);}},scale:{get:function(){return this.transform.scale;},set:function(value){this.transform.scale.copy(value);}},pivot:{get:function(){return this.transform.pivot;},set:function(value){this.transform.pivot.copy(value);}},skew:{get:function(){return this.transform.skew;},set:function(value){this.transform.skew.copy(value);}},rotation:{get:function()
{return this.transform.rotation;},set:function(value)
{this.transform.rotation=value;}},worldVisible:{get:function()
{var item=this;do{if(!item.visible)
{return false;}
item=item.parent;}while(item);return true;}},mask:{get:function()
{return this._mask;},set:function(value)
{if(this._mask)
{this._mask.renderable=true;}
this._mask=value;if(this._mask)
{this._mask.renderable=false;}}},filters:{get:function()
{return this._filters&&this._filters.slice();},set:function(value)
{this._filters=value&&value.slice();}}});DisplayObject.prototype.updateTransform=function()
{this.transform.updateTransform(this.parent.transform);this.worldAlpha=this.alpha*this.parent.worldAlpha;this._bounds.updateID++;};DisplayObject.prototype.displayObjectUpdateTransform=DisplayObject.prototype.updateTransform;DisplayObject.prototype._recursivePostUpdateTransform=function()
{if(this.parent)
{this.parent._recursivePostUpdateTransform();this.transform.updateTransform(this.parent.transform);}
else
{this.transform.updateTransform(_tempDisplayObjectParent.transform);}};DisplayObject.prototype.getBounds=function(skipUpdate,rect)
{if(!skipUpdate)
{if(!this.parent)
{this.parent=_tempDisplayObjectParent;this.parent.transform._worldID++;this.updateTransform();this.parent=null;}
else
{this._recursivePostUpdateTransform();this.updateTransform();}}
if(this._boundsID!==this._lastBoundsID)
{this.calculateBounds();}
if(!rect)
{if(!this._boundsRect)
{this._boundsRect=new math.Rectangle();}
rect=this._boundsRect;}
return this._bounds.getRectangle(rect);};DisplayObject.prototype.getLocalBounds=function(rect)
{var transformRef=this.transform;var parentRef=this.parent;this.parent=null;this.transform=_tempDisplayObjectParent.transform;if(!rect)
{if(!this._localBoundsRect)
{this._localBoundsRect=new math.Rectangle();}
rect=this._localBoundsRect;}
var bounds=this.getBounds(false,rect);this.parent=parentRef;this.transform=transformRef;return bounds;};DisplayObject.prototype.toGlobal=function(position,point,skipUpdate)
{if(!skipUpdate)
{this._recursivePostUpdateTransform();if(!this.parent)
{this.parent=_tempDisplayObjectParent;this.displayObjectUpdateTransform();this.parent=null;}
else
{this.displayObjectUpdateTransform();}}
return this.worldTransform.apply(position,point);};DisplayObject.prototype.toLocal=function(position,from,point,skipUpdate)
{if(from)
{position=from.toGlobal(position,point,skipUpdate);}
if(!skipUpdate)
{this._recursivePostUpdateTransform();if(!this.parent)
{this.parent=_tempDisplayObjectParent;this.displayObjectUpdateTransform();this.parent=null;}
else
{this.displayObjectUpdateTransform();}}
return this.worldTransform.applyInverse(position,point);};DisplayObject.prototype.renderWebGL=function(renderer)
{};DisplayObject.prototype.renderCanvas=function(renderer)
{};DisplayObject.prototype.setParent=function(container)
{if(!container||!container.addChild)
{throw new Error('setParent: Argument must be a Container');}
container.addChild(this);return container;};DisplayObject.prototype.setTransform=function(x,y,scaleX,scaleY,rotation,skewX,skewY,pivotX,pivotY)
{this.position.x=x||0;this.position.y=y||0;this.scale.x=!scaleX?1:scaleX;this.scale.y=!scaleY?1:scaleY;this.rotation=rotation||0;this.skew.x=skewX||0;this.skew.y=skewY||0;this.pivot.x=pivotX||0;this.pivot.y=pivotY||0;return this;};DisplayObject.prototype.destroy=function()
{this.removeAllListeners();if(this.parent)
{this.parent.removeChild(this);}
this.transform=null;this.parent=null;this._bounds=null;this._currentBounds=null;this._mask=null;this.filterArea=null;this.interactive=false;this.interactiveChildren=false;};},{"../const":78,"../math":102,"./Bounds":79,"./Transform":82,"./TransformStatic":84,"eventemitter3":32}],82:[function(require,module,exports){var math=require('../math'),TransformBase=require('./TransformBase');function Transform()
{TransformBase.call(this);this.position=new math.Point(0,0);this.scale=new math.Point(1,1);this.skew=new math.ObservablePoint(this.updateSkew,this,0,0);this.pivot=new math.Point(0,0);this._rotation=0;this._sr=Math.sin(0);this._cr=Math.cos(0);this._cy=Math.cos(0);this._sy=Math.sin(0);this._nsx=Math.sin(0);this._cx=Math.cos(0);}
Transform.prototype=Object.create(TransformBase.prototype);Transform.prototype.constructor=Transform;Transform.prototype.updateSkew=function()
{this._cy=Math.cos(this.skew.y);this._sy=Math.sin(this.skew.y);this._nsx=Math.sin(this.skew.x);this._cx=Math.cos(this.skew.x);};Transform.prototype.updateLocalTransform=function(){var lt=this.localTransform;var a,b,c,d;a=this._cr*this.scale.x;b=this._sr*this.scale.x;c=-this._sr*this.scale.y;d=this._cr*this.scale.y;lt.a=this._cy*a+this._sy*c;lt.b=this._cy*b+this._sy*d;lt.c=this._nsx*a+this._cx*c;lt.d=this._nsx*b+this._cx*d;};Transform.prototype.updateTransform=function(parentTransform)
{var pt=parentTransform.worldTransform;var wt=this.worldTransform;var lt=this.localTransform;var a,b,c,d;a=this._cr*this.scale.x;b=this._sr*this.scale.x;c=-this._sr*this.scale.y;d=this._cr*this.scale.y;lt.a=this._cy*a+this._sy*c;lt.b=this._cy*b+this._sy*d;lt.c=this._nsx*a+this._cx*c;lt.d=this._nsx*b+this._cx*d;lt.tx=this.position.x-(this.pivot.x*lt.a+this.pivot.y*lt.c);lt.ty=this.position.y-(this.pivot.x*lt.b+this.pivot.y*lt.d);wt.a=lt.a*pt.a+lt.b*pt.c;wt.b=lt.a*pt.b+lt.b*pt.d;wt.c=lt.c*pt.a+lt.d*pt.c;wt.d=lt.c*pt.b+lt.d*pt.d;wt.tx=lt.tx*pt.a+lt.ty*pt.c+pt.tx;wt.ty=lt.tx*pt.b+lt.ty*pt.d+pt.ty;this._worldID++;};Transform.prototype.setFromMatrix=function(matrix)
{matrix.decompose(this);};Object.defineProperties(Transform.prototype,{rotation:{get:function(){return this._rotation;},set:function(value){this._rotation=value;this._sr=Math.sin(value);this._cr=Math.cos(value);}}});module.exports=Transform;},{"../math":102,"./TransformBase":83}],83:[function(require,module,exports){var math=require('../math');function TransformBase()
{this.worldTransform=new math.Matrix();this.localTransform=new math.Matrix();this._worldID=0;}
TransformBase.prototype.constructor=TransformBase;TransformBase.prototype.updateLocalTransform=function(){};TransformBase.prototype.updateTransform=function(parentTransform)
{var pt=parentTransform.worldTransform;var wt=this.worldTransform;var lt=this.localTransform;wt.a=lt.a*pt.a+lt.b*pt.c;wt.b=lt.a*pt.b+lt.b*pt.d;wt.c=lt.c*pt.a+lt.d*pt.c;wt.d=lt.c*pt.b+lt.d*pt.d;wt.tx=lt.tx*pt.a+lt.ty*pt.c+pt.tx;wt.ty=lt.tx*pt.b+lt.ty*pt.d+pt.ty;this._worldID++;};TransformBase.prototype.updateWorldTransform=TransformBase.prototype.updateTransform;TransformBase.IDENTITY=new TransformBase();module.exports=TransformBase;},{"../math":102}],84:[function(require,module,exports){var math=require('../math'),TransformBase=require('./TransformBase');function TransformStatic()
{TransformBase.call(this);this.position=new math.ObservablePoint(this.onChange,this,0,0);this.scale=new math.ObservablePoint(this.onChange,this,1,1);this.pivot=new math.ObservablePoint(this.onChange,this,0,0);this.skew=new math.ObservablePoint(this.updateSkew,this,0,0);this._rotation=0;this._sr=Math.sin(0);this._cr=Math.cos(0);this._cy=Math.cos(0);this._sy=Math.sin(0);this._nsx=Math.sin(0);this._cx=Math.cos(0);this._localID=0;this._currentLocalID=0;}
TransformStatic.prototype=Object.create(TransformBase.prototype);TransformStatic.prototype.constructor=TransformStatic;TransformStatic.prototype.onChange=function()
{this._localID++;};TransformStatic.prototype.updateSkew=function()
{this._cy=Math.cos(this.skew._y);this._sy=Math.sin(this.skew._y);this._nsx=Math.sin(this.skew._x);this._cx=Math.cos(this.skew._x);this._localID++;};TransformStatic.prototype.updateLocalTransform=function(){var lt=this.localTransform;if(this._localID!==this._currentLocalID)
{var a,b,c,d;a=this._cr*this.scale._x;b=this._sr*this.scale._x;c=-this._sr*this.scale._y;d=this._cr*this.scale._y;lt.a=this._cy*a+this._sy*c;lt.b=this._cy*b+this._sy*d;lt.c=this._nsx*a+this._cx*c;lt.d=this._nsx*b+this._cx*d;lt.tx=this.position._x-(this.pivot._x*lt.a+this.pivot._y*lt.c);lt.ty=this.position._y-(this.pivot._x*lt.b+this.pivot._y*lt.d);this._currentLocalID=this._localID;this._parentID=-1;}};TransformStatic.prototype.updateTransform=function(parentTransform)
{var pt=parentTransform.worldTransform;var wt=this.worldTransform;var lt=this.localTransform;if(this._localID!==this._currentLocalID)
{var a,b,c,d;a=this._cr*this.scale._x;b=this._sr*this.scale._x;c=-this._sr*this.scale._y;d=this._cr*this.scale._y;lt.a=this._cy*a+this._sy*c;lt.b=this._cy*b+this._sy*d;lt.c=this._nsx*a+this._cx*c;lt.d=this._nsx*b+this._cx*d;lt.tx=this.position._x-(this.pivot._x*lt.a+this.pivot._y*lt.c);lt.ty=this.position._y-(this.pivot._x*lt.b+this.pivot._y*lt.d);this._currentLocalID=this._localID;this._parentID=-1;}
if(this._parentID!==parentTransform._worldID)
{wt.a=lt.a*pt.a+lt.b*pt.c;wt.b=lt.a*pt.b+lt.b*pt.d;wt.c=lt.c*pt.a+lt.d*pt.c;wt.d=lt.c*pt.b+lt.d*pt.d;wt.tx=lt.tx*pt.a+lt.ty*pt.c+pt.tx;wt.ty=lt.tx*pt.b+lt.ty*pt.d+pt.ty;this._parentID=parentTransform._worldID;this._worldID++;}};TransformStatic.prototype.setFromMatrix=function(matrix)
{matrix.decompose(this);this._localID++;};Object.defineProperties(TransformStatic.prototype,{rotation:{get:function(){return this._rotation;},set:function(value){this._rotation=value;this._sr=Math.sin(value);this._cr=Math.cos(value);this._localID++;}}});module.exports=TransformStatic;},{"../math":102,"./TransformBase":83}],85:[function(require,module,exports){var Container=require('../display/Container'),RenderTexture=require('../textures/RenderTexture'),Texture=require('../textures/Texture'),GraphicsData=require('./GraphicsData'),Sprite=require('../sprites/Sprite'),math=require('../math'),CONST=require('../const'),utils=require('../utils'),Bounds=require('../display/Bounds'),bezierCurveTo=require('./utils/bezierCurveTo'),CanvasRenderer=require('../renderers/canvas/CanvasRenderer'),canvasRenderer,tempMatrix=new math.Matrix(),tempPoint=new math.Point(),tempColor1=new Float32Array(4),tempColor2=new Float32Array(4);function Graphics()
{Container.call(this);this.fillAlpha=1;this.lineWidth=0;this.lineColor=0;this.graphicsData=[];this.tint=0xFFFFFF;this._prevTint=0xFFFFFF;this.blendMode=CONST.BLEND_MODES.NORMAL;this.currentPath=null;this._webGL={};this.isMask=false;this.boundsPadding=0;this._localBounds=new Bounds();this.dirty=0;this.fastRectDirty=-1;this.clearDirty=0;this.boundsDirty=-1;this.cachedSpriteDirty=false;this._spriteRect=null;this._fastRect=false;}
Graphics._SPRITE_TEXTURE=null;Graphics.prototype=Object.create(Container.prototype);Graphics.prototype.constructor=Graphics;module.exports=Graphics;Graphics.prototype.clone=function()
{var clone=new Graphics();clone.renderable=this.renderable;clone.fillAlpha=this.fillAlpha;clone.lineWidth=this.lineWidth;clone.lineColor=this.lineColor;clone.tint=this.tint;clone.blendMode=this.blendMode;clone.isMask=this.isMask;clone.boundsPadding=this.boundsPadding;clone.dirty=0;clone.cachedSpriteDirty=this.cachedSpriteDirty;for(var i=0;i<this.graphicsData.length;++i)
{clone.graphicsData.push(this.graphicsData[i].clone());}
clone.currentPath=clone.graphicsData[clone.graphicsData.length-1];clone.updateLocalBounds();return clone;};Graphics.prototype.lineStyle=function(lineWidth,color,alpha)
{this.lineWidth=lineWidth||0;this.lineColor=color||0;this.lineAlpha=(alpha===undefined)?1:alpha;if(this.currentPath)
{if(this.currentPath.shape.points.length)
{var shape=new math.Polygon(this.currentPath.shape.points.slice(-2));shape.closed=false;this.drawShape(shape);}
else
{this.currentPath.lineWidth=this.lineWidth;this.currentPath.lineColor=this.lineColor;this.currentPath.lineAlpha=this.lineAlpha;}}
return this;};Graphics.prototype.moveTo=function(x,y)
{var shape=new math.Polygon([x,y]);shape.closed=false;this.drawShape(shape);return this;};Graphics.prototype.lineTo=function(x,y)
{this.currentPath.shape.points.push(x,y);this.dirty++;return this;};Graphics.prototype.quadraticCurveTo=function(cpX,cpY,toX,toY)
{if(this.currentPath)
{if(this.currentPath.shape.points.length===0)
{this.currentPath.shape.points=[0,0];}}
else
{this.moveTo(0,0);}
var xa,ya,n=20,points=this.currentPath.shape.points;if(points.length===0)
{this.moveTo(0,0);}
var fromX=points[points.length-2];var fromY=points[points.length-1];var j=0;for(var i=1;i<=n;++i)
{j=i/n;xa=fromX+((cpX-fromX)*j);ya=fromY+((cpY-fromY)*j);points.push(xa+(((cpX+((toX-cpX)*j))-xa)*j),ya+(((cpY+((toY-cpY)*j))-ya)*j));}
this.dirty++;return this;};Graphics.prototype.bezierCurveTo=function(cpX,cpY,cpX2,cpY2,toX,toY)
{if(this.currentPath)
{if(this.currentPath.shape.points.length===0)
{this.currentPath.shape.points=[0,0];}}
else
{this.moveTo(0,0);}
var points=this.currentPath.shape.points;var fromX=points[points.length-2];var fromY=points[points.length-1];points.length-=2;bezierCurveTo(fromX,fromY,cpX,cpY,cpX2,cpY2,toX,toY,points);this.dirty++;return this;};Graphics.prototype.arcTo=function(x1,y1,x2,y2,radius)
{if(this.currentPath)
{if(this.currentPath.shape.points.length===0)
{this.currentPath.shape.points.push(x1,y1);}}
else
{this.moveTo(x1,y1);}
var points=this.currentPath.shape.points,fromX=points[points.length-2],fromY=points[points.length-1],a1=fromY-y1,b1=fromX-x1,a2=y2-y1,b2=x2-x1,mm=Math.abs(a1*b2-b1*a2);if(mm<1.0e-8||radius===0)
{if(points[points.length-2]!==x1||points[points.length-1]!==y1)
{points.push(x1,y1);}}
else
{var dd=a1*a1+b1*b1,cc=a2*a2+b2*b2,tt=a1*a2+b1*b2,k1=radius*Math.sqrt(dd)/mm,k2=radius*Math.sqrt(cc)/mm,j1=k1*tt/dd,j2=k2*tt/cc,cx=k1*b2+k2*b1,cy=k1*a2+k2*a1,px=b1*(k2+j1),py=a1*(k2+j1),qx=b2*(k1+j2),qy=a2*(k1+j2),startAngle=Math.atan2(py-cy,px-cx),endAngle=Math.atan2(qy-cy,qx-cx);this.arc(cx+x1,cy+y1,radius,startAngle,endAngle,b1*a2>b2*a1);}
this.dirty++;return this;};Graphics.prototype.arc=function(cx,cy,radius,startAngle,endAngle,anticlockwise)
{anticlockwise=anticlockwise||false;if(startAngle===endAngle)
{return this;}
if(!anticlockwise&&endAngle<=startAngle)
{endAngle+=Math.PI*2;}
else if(anticlockwise&&startAngle<=endAngle)
{startAngle+=Math.PI*2;}
var sweep=anticlockwise?(startAngle-endAngle)*-1:(endAngle-startAngle);var segs=Math.ceil(Math.abs(sweep)/(Math.PI*2))*40;if(sweep===0)
{return this;}
var startX=cx+Math.cos(startAngle)*radius;var startY=cy+Math.sin(startAngle)*radius;if(this.currentPath)
{this.currentPath.shape.points.push(startX,startY);}
else
{this.moveTo(startX,startY);}
var points=this.currentPath.shape.points;var theta=sweep/(segs*2);var theta2=theta*2;var cTheta=Math.cos(theta);var sTheta=Math.sin(theta);var segMinus=segs-1;var remainder=(segMinus%1)/segMinus;for(var i=0;i<=segMinus;i++)
{var real=i+remainder*i;var angle=((theta)+startAngle+(theta2*real));var c=Math.cos(angle);var s=-Math.sin(angle);points.push(((cTheta*c)+(sTheta*s))*radius+cx,((cTheta*-s)+(sTheta*c))*radius+cy);}
this.dirty++;return this;};Graphics.prototype.beginFill=function(color,alpha)
{this.filling=true;this.fillColor=color||0;this.fillAlpha=(alpha===undefined)?1:alpha;if(this.currentPath)
{if(this.currentPath.shape.points.length<=2)
{this.currentPath.fill=this.filling;this.currentPath.fillColor=this.fillColor;this.currentPath.fillAlpha=this.fillAlpha;}}
return this;};Graphics.prototype.endFill=function()
{this.filling=false;this.fillColor=null;this.fillAlpha=1;return this;};Graphics.prototype.drawRect=function(x,y,width,height)
{this.drawShape(new math.Rectangle(x,y,width,height));return this;};Graphics.prototype.drawRoundedRect=function(x,y,width,height,radius)
{this.drawShape(new math.RoundedRectangle(x,y,width,height,radius));return this;};Graphics.prototype.drawCircle=function(x,y,radius)
{this.drawShape(new math.Circle(x,y,radius));return this;};Graphics.prototype.drawEllipse=function(x,y,width,height)
{this.drawShape(new math.Ellipse(x,y,width,height));return this;};Graphics.prototype.drawPolygon=function(path)
{var points=path;var closed=true;if(points instanceof math.Polygon)
{closed=points.closed;points=points.points;}
if(!Array.isArray(points))
{points=new Array(arguments.length);for(var i=0;i<points.length;++i)
{points[i]=arguments[i];}}
var shape=new math.Polygon(points);shape.closed=closed;this.drawShape(shape);return this;};Graphics.prototype.clear=function()
{this.lineWidth=0;this.filling=false;this.dirty++;this.clearDirty++;this.graphicsData=[];return this;};Graphics.prototype.isFastRect=function(){return this.graphicsData.length===1&&this.graphicsData[0].shape.type===CONST.SHAPES.RECT&&!this.graphicsData[0].lineWidth;};Graphics.prototype._renderWebGL=function(renderer)
{if(this.dirty!==this.fastRectDirty)
{this.fastRectDirty=this.dirty;this._fastRect=this.isFastRect();}
if(this._fastRect)
{this._renderSpriteRect(renderer);}
else
{renderer.setObjectRenderer(renderer.plugins.graphics);renderer.plugins.graphics.render(this);}};Graphics.prototype._renderSpriteRect=function(renderer)
{var rect=this.graphicsData[0].shape;if(!this._spriteRect)
{if(!Graphics._SPRITE_TEXTURE)
{var canvas=document.createElement('canvas');canvas.width=10;canvas.height=10;var context=canvas.getContext('2d');context.fillStyle='white';context.fillRect(0,0,10,10);Graphics._SPRITE_TEXTURE=Texture.fromCanvas(canvas);}
this._spriteRect=new Sprite(Graphics._SPRITE_TEXTURE);}
if(this.tint===0xffffff){this._spriteRect.tint=this.graphicsData[0].fillColor;}else{var t1=tempColor1;var t2=tempColor2;utils.hex2rgb(this.graphicsData[0].fillColor,t1);utils.hex2rgb(this.tint,t2);t1[0]*=t2[0];t1[1]*=t2[1];t1[2]*=t2[2];this._spriteRect.tint=utils.rgb2hex(t1);}
this._spriteRect.alpha=this.graphicsData[0].fillAlpha;this._spriteRect.worldAlpha=this.worldAlpha*this._spriteRect.alpha;Graphics._SPRITE_TEXTURE._frame.width=rect.width;Graphics._SPRITE_TEXTURE._frame.height=rect.height;this._spriteRect.transform.worldTransform=this.transform.worldTransform;this._spriteRect.anchor.set(-rect.x/rect.width,-rect.y/rect.height);this._spriteRect.onAnchorUpdate();this._spriteRect._renderWebGL(renderer);};Graphics.prototype._renderCanvas=function(renderer)
{if(this.isMask===true)
{return;}
renderer.plugins.graphics.render(this);};Graphics.prototype._calculateBounds=function()
{if(!this.renderable)
{return;}
if(this.boundsDirty!==this.dirty)
{this.boundsDirty=this.dirty;this.updateLocalBounds();this.dirty++;this.cachedSpriteDirty=true;}
var lb=this._localBounds;this._bounds.addFrame(this.transform,lb.minX,lb.minY,lb.maxX,lb.maxY);};Graphics.prototype.containsPoint=function(point)
{this.worldTransform.applyInverse(point,tempPoint);var graphicsData=this.graphicsData;for(var i=0;i<graphicsData.length;i++)
{var data=graphicsData[i];if(!data.fill)
{continue;}
if(data.shape)
{if(data.shape.contains(tempPoint.x,tempPoint.y))
{return true;}}}
return false;};Graphics.prototype.updateLocalBounds=function()
{var minX=Infinity;var maxX=-Infinity;var minY=Infinity;var maxY=-Infinity;if(this.graphicsData.length)
{var shape,points,x,y,w,h;for(var i=0;i<this.graphicsData.length;i++)
{var data=this.graphicsData[i];var type=data.type;var lineWidth=data.lineWidth;shape=data.shape;if(type===CONST.SHAPES.RECT||type===CONST.SHAPES.RREC)
{x=shape.x-lineWidth/2;y=shape.y-lineWidth/2;w=shape.width+lineWidth;h=shape.height+lineWidth;minX=x<minX?x:minX;maxX=x+w>maxX?x+w:maxX;minY=y<minY?y:minY;maxY=y+h>maxY?y+h:maxY;}
else if(type===CONST.SHAPES.CIRC)
{x=shape.x;y=shape.y;w=shape.radius+lineWidth/2;h=shape.radius+lineWidth/2;minX=x-w<minX?x-w:minX;maxX=x+w>maxX?x+w:maxX;minY=y-h<minY?y-h:minY;maxY=y+h>maxY?y+h:maxY;}
else if(type===CONST.SHAPES.ELIP)
{x=shape.x;y=shape.y;w=shape.width+lineWidth/2;h=shape.height+lineWidth/2;minX=x-w<minX?x-w:minX;maxX=x+w>maxX?x+w:maxX;minY=y-h<minY?y-h:minY;maxY=y+h>maxY?y+h:maxY;}
else
{points=shape.points;for(var j=0;j<points.length;j+=2)
{x=points[j];y=points[j+1];minX=x-lineWidth<minX?x-lineWidth:minX;maxX=x+lineWidth>maxX?x+lineWidth:maxX;minY=y-lineWidth<minY?y-lineWidth:minY;maxY=y+lineWidth>maxY?y+lineWidth:maxY;}}}}
else
{minX=0;maxX=0;minY=0;maxY=0;}
var padding=this.boundsPadding;this._localBounds.minX=minX-padding;this._localBounds.maxX=maxX+padding*2;this._localBounds.minY=minY-padding;this._localBounds.maxY=maxY+padding*2;};Graphics.prototype.drawShape=function(shape)
{if(this.currentPath)
{if(this.currentPath.shape.points.length<=2)
{this.graphicsData.pop();}}
this.currentPath=null;var data=new GraphicsData(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,shape);this.graphicsData.push(data);if(data.type===CONST.SHAPES.POLY)
{data.shape.closed=data.shape.closed||this.filling;this.currentPath=data;}
this.dirty++;return data;};Graphics.prototype.generateCanvasTexture=function(scaleMode,resolution)
{resolution=resolution||1;var bounds=this.getLocalBounds();var canvasBuffer=new RenderTexture.create(bounds.width*resolution,bounds.height*resolution);if(!canvasRenderer)
{canvasRenderer=new CanvasRenderer();}
tempMatrix.tx=-bounds.x;tempMatrix.ty=-bounds.y;canvasRenderer.render(this,canvasBuffer,false,tempMatrix);var texture=Texture.fromCanvas(canvasBuffer.baseTexture._canvasRenderTarget.canvas,scaleMode);texture.baseTexture.resolution=resolution;return texture;};Graphics.prototype.closePath=function()
{var currentPath=this.currentPath;if(currentPath&&currentPath.shape)
{currentPath.shape.close();}
return this;};Graphics.prototype.addHole=function()
{var hole=this.graphicsData.pop();this.currentPath=this.graphicsData[this.graphicsData.length-1];this.currentPath.addHole(hole.shape);this.currentPath=null;return this;};Graphics.prototype.destroy=function()
{Container.prototype.destroy.apply(this,arguments);for(var i=0;i<this.graphicsData.length;++i){this.graphicsData[i].destroy();}
for(var id in this._webgl){for(var j=0;j<this._webgl[id].data.length;++j){this._webgl[id].data[j].destroy();}}
if(this._spriteRect)
{this._spriteRect.destroy();}
this.graphicsData=null;this.currentPath=null;this._webgl=null;this._localBounds=null;};},{"../const":78,"../display/Bounds":79,"../display/Container":80,"../math":102,"../renderers/canvas/CanvasRenderer":109,"../sprites/Sprite":133,"../textures/RenderTexture":143,"../textures/Texture":144,"../utils":151,"./GraphicsData":86,"./utils/bezierCurveTo":88}],86:[function(require,module,exports){function GraphicsData(lineWidth,lineColor,lineAlpha,fillColor,fillAlpha,fill,shape)
{this.lineWidth=lineWidth;this.lineColor=lineColor;this.lineAlpha=lineAlpha;this._lineTint=lineColor;this.fillColor=fillColor;this.fillAlpha=fillAlpha;this._fillTint=fillColor;this.fill=fill;this.holes=[];this.shape=shape;this.type=shape.type;}
GraphicsData.prototype.constructor=GraphicsData;module.exports=GraphicsData;GraphicsData.prototype.clone=function()
{return new GraphicsData(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape);};GraphicsData.prototype.addHole=function(shape)
{this.holes.push(shape);};GraphicsData.prototype.destroy=function(){this.shape=null;this.holes=null;};},{}],87:[function(require,module,exports){var CanvasRenderer=require('../../renderers/canvas/CanvasRenderer'),CONST=require('../../const');function CanvasGraphicsRenderer(renderer)
{this.renderer=renderer;}
CanvasGraphicsRenderer.prototype.constructor=CanvasGraphicsRenderer;module.exports=CanvasGraphicsRenderer;CanvasRenderer.registerPlugin('graphics',CanvasGraphicsRenderer);CanvasGraphicsRenderer.prototype.render=function(graphics)
{var renderer=this.renderer;var context=renderer.context;var worldAlpha=graphics.worldAlpha;var transform=graphics.transform.worldTransform;var resolution=renderer.resolution;if(this._prevTint!==this.tint){this.dirty=true;}
context.setTransform(transform.a*resolution,transform.b*resolution,transform.c*resolution,transform.d*resolution,transform.tx*resolution,transform.ty*resolution);if(graphics.dirty)
{this.updateGraphicsTint(graphics);graphics.dirty=false;}
renderer.setBlendMode(graphics.blendMode);for(var i=0;i<graphics.graphicsData.length;i++)
{var data=graphics.graphicsData[i];var shape=data.shape;var fillColor=data._fillTint;var lineColor=data._lineTint;context.lineWidth=data.lineWidth;if(data.type===CONST.SHAPES.POLY)
{context.beginPath();this.renderPolygon(shape.points,shape.closed,context);for(var j=0;j<data.holes.length;j++)
{var hole=data.holes[j];this.renderPolygon(hole.points,true,context);}
if(data.fill)
{context.globalAlpha=data.fillAlpha*worldAlpha;context.fillStyle='#'+('00000'+(fillColor|0).toString(16)).substr(-6);context.fill();}
if(data.lineWidth)
{context.globalAlpha=data.lineAlpha*worldAlpha;context.strokeStyle='#'+('00000'+(lineColor|0).toString(16)).substr(-6);context.stroke();}}
else if(data.type===CONST.SHAPES.RECT)
{if(data.fillColor||data.fillColor===0)
{context.globalAlpha=data.fillAlpha*worldAlpha;context.fillStyle='#'+('00000'+(fillColor|0).toString(16)).substr(-6);context.fillRect(shape.x,shape.y,shape.width,shape.height);}
if(data.lineWidth)
{context.globalAlpha=data.lineAlpha*worldAlpha;context.strokeStyle='#'+('00000'+(lineColor|0).toString(16)).substr(-6);context.strokeRect(shape.x,shape.y,shape.width,shape.height);}}
else if(data.type===CONST.SHAPES.CIRC)
{context.beginPath();context.arc(shape.x,shape.y,shape.radius,0,2*Math.PI);context.closePath();if(data.fill)
{context.globalAlpha=data.fillAlpha*worldAlpha;context.fillStyle='#'+('00000'+(fillColor|0).toString(16)).substr(-6);context.fill();}
if(data.lineWidth)
{context.globalAlpha=data.lineAlpha*worldAlpha;context.strokeStyle='#'+('00000'+(lineColor|0).toString(16)).substr(-6);context.stroke();}}
else if(data.type===CONST.SHAPES.ELIP)
{var w=shape.width*2;var h=shape.height*2;var x=shape.x-w/2;var y=shape.y-h/2;context.beginPath();var kappa=0.5522848,ox=(w/2)*kappa,oy=(h/2)*kappa,xe=x+w,ye=y+h,xm=x+w/2,ym=y+h/2;context.moveTo(x,ym);context.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y);context.bezierCurveTo(xm+ox,y,xe,ym-oy,xe,ym);context.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye);context.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym);context.closePath();if(data.fill)
{context.globalAlpha=data.fillAlpha*worldAlpha;context.fillStyle='#'+('00000'+(fillColor|0).toString(16)).substr(-6);context.fill();}
if(data.lineWidth)
{context.globalAlpha=data.lineAlpha*worldAlpha;context.strokeStyle='#'+('00000'+(lineColor|0).toString(16)).substr(-6);context.stroke();}}
else if(data.type===CONST.SHAPES.RREC)
{var rx=shape.x;var ry=shape.y;var width=shape.width;var height=shape.height;var radius=shape.radius;var maxRadius=Math.min(width,height)/2|0;radius=radius>maxRadius?maxRadius:radius;context.beginPath();context.moveTo(rx,ry+radius);context.lineTo(rx,ry+height-radius);context.quadraticCurveTo(rx,ry+height,rx+radius,ry+height);context.lineTo(rx+width-radius,ry+height);context.quadraticCurveTo(rx+width,ry+height,rx+width,ry+height-radius);context.lineTo(rx+width,ry+radius);context.quadraticCurveTo(rx+width,ry,rx+width-radius,ry);context.lineTo(rx+radius,ry);context.quadraticCurveTo(rx,ry,rx,ry+radius);context.closePath();if(data.fillColor||data.fillColor===0)
{context.globalAlpha=data.fillAlpha*worldAlpha;context.fillStyle='#'+('00000'+(fillColor|0).toString(16)).substr(-6);context.fill();}
if(data.lineWidth)
{context.globalAlpha=data.lineAlpha*worldAlpha;context.strokeStyle='#'+('00000'+(lineColor|0).toString(16)).substr(-6);context.stroke();}}}};CanvasGraphicsRenderer.prototype.updateGraphicsTint=function(graphics)
{graphics._prevTint=graphics.tint;var tintR=(graphics.tint>>16&0xFF)/255;var tintG=(graphics.tint>>8&0xFF)/255;var tintB=(graphics.tint&0xFF)/255;for(var i=0;i<graphics.graphicsData.length;i++)
{var data=graphics.graphicsData[i];var fillColor=data.fillColor|0;var lineColor=data.lineColor|0;data._fillTint=(((fillColor>>16&0xFF)/255*tintR*255<<16)+((fillColor>>8&0xFF)/255*tintG*255<<8)+(fillColor&0xFF)/255*tintB*255);data._lineTint=(((lineColor>>16&0xFF)/255*tintR*255<<16)+((lineColor>>8&0xFF)/255*tintG*255<<8)+(lineColor&0xFF)/255*tintB*255);}};CanvasGraphicsRenderer.prototype.renderPolygon=function(points,close,context)
{context.moveTo(points[0],points[1]);for(var j=1;j<points.length/2;j++)
{context.lineTo(points[j*2],points[j*2+1]);}
if(close)
{context.closePath();}};CanvasGraphicsRenderer.prototype.destroy=function()
{this.renderer=null;};},{"../../const":78,"../../renderers/canvas/CanvasRenderer":109}],88:[function(require,module,exports){var bezierCurveTo=function(fromX,fromY,cpX,cpY,cpX2,cpY2,toX,toY,path)
{path=path||[];var n=20,dt,dt2,dt3,t2,t3;path.push(fromX,fromY);var j=0;for(var i=1;i<=n;++i)
{j=i/n;dt=(1-j);dt2=dt*dt;dt3=dt2*dt;t2=j*j;t3=t2*j;path.push(dt3*fromX+3*dt2*j*cpX+3*dt*t2*cpX2+t3*toX,dt3*fromY+3*dt2*j*cpY+3*dt*t2*cpY2+t3*toY);}
return path;};module.exports=bezierCurveTo;},{}],89:[function(require,module,exports){var utils=require('../../utils'),CONST=require('../../const'),ObjectRenderer=require('../../renderers/webgl/utils/ObjectRenderer'),WebGLRenderer=require('../../renderers/webgl/WebGLRenderer'),WebGLGraphicsData=require('./WebGLGraphicsData'),PrimitiveShader=require('./shaders/PrimitiveShader'),buildPoly=require('./utils/buildPoly'),buildRectangle=require('./utils/buildRectangle'),buildRoundedRectangle=require('./utils/buildRoundedRectangle'),buildCircle=require('./utils/buildCircle');function GraphicsRenderer(renderer)
{ObjectRenderer.call(this,renderer);this.graphicsDataPool=[];this.primitiveShader=null;this.gl=renderer.gl;this.CONTEXT_UID=0;}
GraphicsRenderer.prototype=Object.create(ObjectRenderer.prototype);GraphicsRenderer.prototype.constructor=GraphicsRenderer;module.exports=GraphicsRenderer;WebGLRenderer.registerPlugin('graphics',GraphicsRenderer);GraphicsRenderer.prototype.onContextChange=function()
{this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID;this.primitiveShader=new PrimitiveShader(this.gl);};GraphicsRenderer.prototype.destroy=function()
{ObjectRenderer.prototype.destroy.call(this);for(var i=0;i<this.graphicsDataPool.length;++i){this.graphicsDataPool[i].destroy();}
this.graphicsDataPool=null;};GraphicsRenderer.prototype.render=function(graphics)
{var renderer=this.renderer;var gl=renderer.gl;var webGLData;var webGL=graphics._webGL[this.CONTEXT_UID];if(!webGL||graphics.dirty!==webGL.dirty)
{this.updateGraphics(graphics);webGL=graphics._webGL[this.CONTEXT_UID];}
var shader=this.primitiveShader;renderer.bindShader(shader);renderer.state.setBlendMode(graphics.blendMode);for(var i=0,n=webGL.data.length;i<n;i++)
{webGLData=webGL.data[i];var shaderTemp=webGLData.shader;renderer.bindShader(shaderTemp);shaderTemp.uniforms.translationMatrix=graphics.transform.worldTransform.toArray(true);shaderTemp.uniforms.tint=utils.hex2rgb(graphics.tint);shaderTemp.uniforms.alpha=graphics.worldAlpha;webGLData.vao.bind().draw(gl.TRIANGLE_STRIP,webGLData.indices.length).unbind();}};GraphicsRenderer.prototype.updateGraphics=function(graphics)
{var gl=this.renderer.gl;var webGL=graphics._webGL[this.CONTEXT_UID];if(!webGL)
{webGL=graphics._webGL[this.CONTEXT_UID]={lastIndex:0,data:[],gl:gl,clearDirty:-1,dirty:-1};}
webGL.dirty=graphics.dirty;var i;if(graphics.clearDirty!==webGL.clearDirty)
{webGL.clearDirty=graphics.clearDirty;for(i=0;i<webGL.data.length;i++)
{var graphicsData=webGL.data[i];this.graphicsDataPool.push(graphicsData);}
webGL.data=[];webGL.lastIndex=0;}
var webGLData;for(i=webGL.lastIndex;i<graphics.graphicsData.length;i++)
{var data=graphics.graphicsData[i];webGLData=this.getWebGLData(webGL,0);if(data.type===CONST.SHAPES.POLY)
{buildPoly(data,webGLData);}
if(data.type===CONST.SHAPES.RECT)
{buildRectangle(data,webGLData);}
else if(data.type===CONST.SHAPES.CIRC||data.type===CONST.SHAPES.ELIP)
{buildCircle(data,webGLData);}
else if(data.type===CONST.SHAPES.RREC)
{buildRoundedRectangle(data,webGLData);}
webGL.lastIndex++;}
for(i=0;i<webGL.data.length;i++)
{webGLData=webGL.data[i];if(webGLData.dirty)
{webGLData.upload();}}};GraphicsRenderer.prototype.getWebGLData=function(webGL,type)
{var webGLData=webGL.data[webGL.data.length-1];if(!webGLData||webGLData.points.length>320000)
{webGLData=this.graphicsDataPool.pop()||new WebGLGraphicsData(this.renderer.gl,this.primitiveShader,this.renderer.state.attribsState);webGLData.reset(type);webGL.data.push(webGLData);}
webGLData.dirty=true;return webGLData;};},{"../../const":78,"../../renderers/webgl/WebGLRenderer":116,"../../renderers/webgl/utils/ObjectRenderer":126,"../../utils":151,"./WebGLGraphicsData":90,"./shaders/PrimitiveShader":91,"./utils/buildCircle":92,"./utils/buildPoly":94,"./utils/buildRectangle":95,"./utils/buildRoundedRectangle":96}],90:[function(require,module,exports){var glCore=require('pixi-gl-core');function WebGLGraphicsData(gl,shader,attribsState)
{this.gl=gl;this.color=[0,0,0];this.points=[];this.indices=[];this.buffer=glCore.GLBuffer.createVertexBuffer(gl);this.indexBuffer=glCore.GLBuffer.createIndexBuffer(gl);this.dirty=true;this.glPoints=null;this.glIndices=null;this.shader=shader;this.vao=new glCore.VertexArrayObject(gl,attribsState).addIndex(this.indexBuffer).addAttribute(this.buffer,shader.attributes.aVertexPosition,gl.FLOAT,false,4*6,0).addAttribute(this.buffer,shader.attributes.aColor,gl.FLOAT,false,4*6,2*4);}
WebGLGraphicsData.prototype.constructor=WebGLGraphicsData;module.exports=WebGLGraphicsData;WebGLGraphicsData.prototype.reset=function()
{this.points.length=0;this.indices.length=0;};WebGLGraphicsData.prototype.upload=function()
{this.glPoints=new Float32Array(this.points);this.buffer.upload(this.glPoints);this.glIndices=new Uint16Array(this.indices);this.indexBuffer.upload(this.glIndices);this.dirty=false;};WebGLGraphicsData.prototype.destroy=function()
{this.color=null;this.points=null;this.indices=null;this.vao.destroy();this.buffer.destroy();this.indexBuffer.destroy();this.gl=null;this.buffer=null;this.indexBuffer=null;this.glPoints=null;this.glIndices=null;};},{"pixi-gl-core":7}],91:[function(require,module,exports){var Shader=require('../../../Shader');function PrimitiveShader(gl)
{Shader.call(this,gl,['attribute vec2 aVertexPosition;','attribute vec4 aColor;','uniform mat3 translationMatrix;','uniform mat3 projectionMatrix;','uniform float alpha;','uniform vec3 tint;','varying vec4 vColor;','void main(void){','   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);','   vColor = aColor * vec4(tint * alpha, alpha);','}'].join('\n'),['varying vec4 vColor;','void main(void){','   gl_FragColor = vColor;','}'].join('\n'));}
PrimitiveShader.prototype=Object.create(Shader.prototype);PrimitiveShader.prototype.constructor=PrimitiveShader;module.exports=PrimitiveShader;},{"../../../Shader":77}],92:[function(require,module,exports){var buildLine=require('./buildLine'),CONST=require('../../../const'),utils=require('../../../utils');var buildCircle=function(graphicsData,webGLData)
{var circleData=graphicsData.shape;var x=circleData.x;var y=circleData.y;var width;var height;if(graphicsData.type===CONST.SHAPES.CIRC)
{width=circleData.radius;height=circleData.radius;}
else
{width=circleData.width;height=circleData.height;}
var totalSegs=Math.floor(30*Math.sqrt(circleData.radius))||Math.floor(15*Math.sqrt(circleData.width+circleData.height));var seg=(Math.PI*2)/totalSegs;var i=0;if(graphicsData.fill)
{var color=utils.hex2rgb(graphicsData.fillColor);var alpha=graphicsData.fillAlpha;var r=color[0]*alpha;var g=color[1]*alpha;var b=color[2]*alpha;var verts=webGLData.points;var indices=webGLData.indices;var vecPos=verts.length/6;indices.push(vecPos);for(i=0;i<totalSegs+1;i++)
{verts.push(x,y,r,g,b,alpha);verts.push(x+Math.sin(seg*i)*width,y+Math.cos(seg*i)*height,r,g,b,alpha);indices.push(vecPos++,vecPos++);}
indices.push(vecPos-1);}
if(graphicsData.lineWidth)
{var tempPoints=graphicsData.points;graphicsData.points=[];for(i=0;i<totalSegs+1;i++)
{graphicsData.points.push(x+Math.sin(seg*i)*width,y+Math.cos(seg*i)*height);}
buildLine(graphicsData,webGLData);graphicsData.points=tempPoints;}};module.exports=buildCircle;},{"../../../const":78,"../../../utils":151,"./buildLine":93}],93:[function(require,module,exports){var math=require('../../../math'),utils=require('../../../utils');var buildLine=function(graphicsData,webGLData)
{var i=0;var points=graphicsData.points;if(points.length===0)
{return;}
var firstPoint=new math.Point(points[0],points[1]);var lastPoint=new math.Point(points[points.length-2],points[points.length-1]);if(firstPoint.x===lastPoint.x&&firstPoint.y===lastPoint.y)
{points=points.slice();points.pop();points.pop();lastPoint=new math.Point(points[points.length-2],points[points.length-1]);var midPointX=lastPoint.x+(firstPoint.x-lastPoint.x)*0.5;var midPointY=lastPoint.y+(firstPoint.y-lastPoint.y)*0.5;points.unshift(midPointX,midPointY);points.push(midPointX,midPointY);}
var verts=webGLData.points;var indices=webGLData.indices;var length=points.length/2;var indexCount=points.length;var indexStart=verts.length/6;var width=graphicsData.lineWidth/2;var color=utils.hex2rgb(graphicsData.lineColor);var alpha=graphicsData.lineAlpha;var r=color[0]*alpha;var g=color[1]*alpha;var b=color[2]*alpha;var px,py,p1x,p1y,p2x,p2y,p3x,p3y;var perpx,perpy,perp2x,perp2y,perp3x,perp3y;var a1,b1,c1,a2,b2,c2;var denom,pdist,dist;p1x=points[0];p1y=points[1];p2x=points[2];p2y=points[3];perpx=-(p1y-p2y);perpy=p1x-p2x;dist=Math.sqrt(perpx*perpx+perpy*perpy);perpx/=dist;perpy/=dist;perpx*=width;perpy*=width;verts.push(p1x-perpx,p1y-perpy,r,g,b,alpha);verts.push(p1x+perpx,p1y+perpy,r,g,b,alpha);for(i=1;i<length-1;i++)
{p1x=points[(i-1)*2];p1y=points[(i-1)*2+1];p2x=points[(i)*2];p2y=points[(i)*2+1];p3x=points[(i+1)*2];p3y=points[(i+1)*2+1];perpx=-(p1y-p2y);perpy=p1x-p2x;dist=Math.sqrt(perpx*perpx+perpy*perpy);perpx/=dist;perpy/=dist;perpx*=width;perpy*=width;perp2x=-(p2y-p3y);perp2y=p2x-p3x;dist=Math.sqrt(perp2x*perp2x+perp2y*perp2y);perp2x/=dist;perp2y/=dist;perp2x*=width;perp2y*=width;a1=(-perpy+p1y)-(-perpy+p2y);b1=(-perpx+p2x)-(-perpx+p1x);c1=(-perpx+p1x)*(-perpy+p2y)-(-perpx+p2x)*(-perpy+p1y);a2=(-perp2y+p3y)-(-perp2y+p2y);b2=(-perp2x+p2x)-(-perp2x+p3x);c2=(-perp2x+p3x)*(-perp2y+p2y)-(-perp2x+p2x)*(-perp2y+p3y);denom=a1*b2-a2*b1;if(Math.abs(denom)<0.1)
{denom+=10.1;verts.push(p2x-perpx,p2y-perpy,r,g,b,alpha);verts.push(p2x+perpx,p2y+perpy,r,g,b,alpha);continue;}
px=(b1*c2-b2*c1)/denom;py=(a2*c1-a1*c2)/denom;pdist=(px-p2x)*(px-p2x)+(py-p2y)*(py-p2y);if(pdist>140*140)
{perp3x=perpx-perp2x;perp3y=perpy-perp2y;dist=Math.sqrt(perp3x*perp3x+perp3y*perp3y);perp3x/=dist;perp3y/=dist;perp3x*=width;perp3y*=width;verts.push(p2x-perp3x,p2y-perp3y);verts.push(r,g,b,alpha);verts.push(p2x+perp3x,p2y+perp3y);verts.push(r,g,b,alpha);verts.push(p2x-perp3x,p2y-perp3y);verts.push(r,g,b,alpha);indexCount++;}
else
{verts.push(px,py);verts.push(r,g,b,alpha);verts.push(p2x-(px-p2x),p2y-(py-p2y));verts.push(r,g,b,alpha);}}
p1x=points[(length-2)*2];p1y=points[(length-2)*2+1];p2x=points[(length-1)*2];p2y=points[(length-1)*2+1];perpx=-(p1y-p2y);perpy=p1x-p2x;dist=Math.sqrt(perpx*perpx+perpy*perpy);perpx/=dist;perpy/=dist;perpx*=width;perpy*=width;verts.push(p2x-perpx,p2y-perpy);verts.push(r,g,b,alpha);verts.push(p2x+perpx,p2y+perpy);verts.push(r,g,b,alpha);indices.push(indexStart);for(i=0;i<indexCount;i++)
{indices.push(indexStart++);}
indices.push(indexStart-1);};module.exports=buildLine;},{"../../../math":102,"../../../utils":151}],94:[function(require,module,exports){var buildLine=require('./buildLine'),utils=require('../../../utils'),earcut=require('earcut');var buildPoly=function(graphicsData,webGLData)
{graphicsData.points=graphicsData.shape.points.slice();var points=graphicsData.points;if(graphicsData.fill&&points.length>=6)
{var holeArray=[];var holes=graphicsData.holes;for(var i=0;i<holes.length;i++){var hole=holes[i];holeArray.push(points.length/2);points=points.concat(hole.points);}
var verts=webGLData.points;var indices=webGLData.indices;var length=points.length/2;var color=utils.hex2rgb(graphicsData.fillColor);var alpha=graphicsData.fillAlpha;var r=color[0]*alpha;var g=color[1]*alpha;var b=color[2]*alpha;var triangles=earcut(points,holeArray,2);if(!triangles){return;}
var vertPos=verts.length/6;for(i=0;i<triangles.length;i+=3)
{indices.push(triangles[i]+vertPos);indices.push(triangles[i]+vertPos);indices.push(triangles[i+1]+vertPos);indices.push(triangles[i+2]+vertPos);indices.push(triangles[i+2]+vertPos);}
for(i=0;i<length;i++)
{verts.push(points[i*2],points[i*2+1],r,g,b,alpha);}}
if(graphicsData.lineWidth>0)
{buildLine(graphicsData,webGLData);}};module.exports=buildPoly;},{"../../../utils":151,"./buildLine":93,"earcut":31}],95:[function(require,module,exports){var buildLine=require('./buildLine'),utils=require('../../../utils');var buildRectangle=function(graphicsData,webGLData)
{var rectData=graphicsData.shape;var x=rectData.x;var y=rectData.y;var width=rectData.width;var height=rectData.height;if(graphicsData.fill)
{var color=utils.hex2rgb(graphicsData.fillColor);var alpha=graphicsData.fillAlpha;var r=color[0]*alpha;var g=color[1]*alpha;var b=color[2]*alpha;var verts=webGLData.points;var indices=webGLData.indices;var vertPos=verts.length/6;verts.push(x,y);verts.push(r,g,b,alpha);verts.push(x+width,y);verts.push(r,g,b,alpha);verts.push(x,y+height);verts.push(r,g,b,alpha);verts.push(x+width,y+height);verts.push(r,g,b,alpha);indices.push(vertPos,vertPos,vertPos+1,vertPos+2,vertPos+3,vertPos+3);}
if(graphicsData.lineWidth)
{var tempPoints=graphicsData.points;graphicsData.points=[x,y,x+width,y,x+width,y+height,x,y+height,x,y];buildLine(graphicsData,webGLData);graphicsData.points=tempPoints;}};module.exports=buildRectangle;},{"../../../utils":151,"./buildLine":93}],96:[function(require,module,exports){var earcut=require('earcut'),buildLine=require('./buildLine'),utils=require('../../../utils');var buildRoundedRectangle=function(graphicsData,webGLData)
{var rrectData=graphicsData.shape;var x=rrectData.x;var y=rrectData.y;var width=rrectData.width;var height=rrectData.height;var radius=rrectData.radius;var recPoints=[];recPoints.push(x,y+radius);quadraticBezierCurve(x,y+height-radius,x,y+height,x+radius,y+height,recPoints);quadraticBezierCurve(x+width-radius,y+height,x+width,y+height,x+width,y+height-radius,recPoints);quadraticBezierCurve(x+width,y+radius,x+width,y,x+width-radius,y,recPoints);quadraticBezierCurve(x+radius,y,x,y,x,y+radius+0.0000000001,recPoints);if(graphicsData.fill)
{var color=utils.hex2rgb(graphicsData.fillColor);var alpha=graphicsData.fillAlpha;var r=color[0]*alpha;var g=color[1]*alpha;var b=color[2]*alpha;var verts=webGLData.points;var indices=webGLData.indices;var vecPos=verts.length/6;var triangles=earcut(recPoints,null,2);var i=0;for(i=0;i<triangles.length;i+=3)
{indices.push(triangles[i]+vecPos);indices.push(triangles[i]+vecPos);indices.push(triangles[i+1]+vecPos);indices.push(triangles[i+2]+vecPos);indices.push(triangles[i+2]+vecPos);}
for(i=0;i<recPoints.length;i++)
{verts.push(recPoints[i],recPoints[++i],r,g,b,alpha);}}
if(graphicsData.lineWidth)
{var tempPoints=graphicsData.points;graphicsData.points=recPoints;buildLine(graphicsData,webGLData);graphicsData.points=tempPoints;}};var quadraticBezierCurve=function(fromX,fromY,cpX,cpY,toX,toY,out)
{var xa,ya,xb,yb,x,y,n=20,points=out||[];function getPt(n1,n2,perc){var diff=n2-n1;return n1+(diff*perc);}
var j=0;for(var i=0;i<=n;i++){j=i/n;xa=getPt(fromX,cpX,j);ya=getPt(fromY,cpY,j);xb=getPt(cpX,toX,j);yb=getPt(cpY,toY,j);x=getPt(xa,xb,j);y=getPt(ya,yb,j);points.push(x,y);}
return points;};module.exports=buildRoundedRectangle;},{"../../../utils":151,"./buildLine":93,"earcut":31}],97:[function(require,module,exports){var core=module.exports=Object.assign(require('./const'),require('./math'),{utils:require('./utils'),ticker:require('./ticker'),DisplayObject:require('./display/DisplayObject'),Container:require('./display/Container'),Transform:require('./display/Transform'),TransformStatic:require('./display/TransformStatic'),TransformBase:require('./display/TransformBase'),Sprite:require('./sprites/Sprite'),CanvasSpriteRenderer:require('./sprites/canvas/CanvasSpriteRenderer'),CanvasTinter:require('./sprites/canvas/CanvasTinter'),SpriteRenderer:require('./sprites/webgl/SpriteRenderer'),Text:require('./text/Text'),TextStyle:require('./text/TextStyle'),Graphics:require('./graphics/Graphics'),GraphicsData:require('./graphics/GraphicsData'),GraphicsRenderer:require('./graphics/webgl/GraphicsRenderer'),CanvasGraphicsRenderer:require('./graphics/canvas/CanvasGraphicsRenderer'),Texture:require('./textures/Texture'),BaseTexture:require('./textures/BaseTexture'),RenderTexture:require('./textures/RenderTexture'),BaseRenderTexture:require('./textures/BaseRenderTexture'),VideoBaseTexture:require('./textures/VideoBaseTexture'),TextureUvs:require('./textures/TextureUvs'),CanvasRenderer:require('./renderers/canvas/CanvasRenderer'),CanvasRenderTarget:require('./renderers/canvas/utils/CanvasRenderTarget'),Shader:require('./Shader'),WebGLRenderer:require('./renderers/webgl/WebGLRenderer'),WebGLManager:require('./renderers/webgl/managers/WebGLManager'),ObjectRenderer:require('./renderers/webgl/utils/ObjectRenderer'),RenderTarget:require('./renderers/webgl/utils/RenderTarget'),Quad:require('./renderers/webgl/utils/Quad'),SpriteMaskFilter:require('./renderers/webgl/filters/spriteMask/SpriteMaskFilter'),Filter:require('./renderers/webgl/filters/Filter'),glCore:require('pixi-gl-core'),autoDetectRenderer:function(width,height,options,noWebGL)
{width=width||800;height=height||600;if(!noWebGL&&core.utils.isWebGLSupported())
{return new core.WebGLRenderer(width,height,options);}
return new core.CanvasRenderer(width,height,options);}});},{"./Shader":77,"./const":78,"./display/Container":80,"./display/DisplayObject":81,"./display/Transform":82,"./display/TransformBase":83,"./display/TransformStatic":84,"./graphics/Graphics":85,"./graphics/GraphicsData":86,"./graphics/canvas/CanvasGraphicsRenderer":87,"./graphics/webgl/GraphicsRenderer":89,"./math":102,"./renderers/canvas/CanvasRenderer":109,"./renderers/canvas/utils/CanvasRenderTarget":111,"./renderers/webgl/WebGLRenderer":116,"./renderers/webgl/filters/Filter":118,"./renderers/webgl/filters/spriteMask/SpriteMaskFilter":121,"./renderers/webgl/managers/WebGLManager":125,"./renderers/webgl/utils/ObjectRenderer":126,"./renderers/webgl/utils/Quad":127,"./renderers/webgl/utils/RenderTarget":128,"./sprites/Sprite":133,"./sprites/canvas/CanvasSpriteRenderer":134,"./sprites/canvas/CanvasTinter":135,"./sprites/webgl/SpriteRenderer":137,"./text/Text":139,"./text/TextStyle":140,"./textures/BaseRenderTexture":141,"./textures/BaseTexture":142,"./textures/RenderTexture":143,"./textures/Texture":144,"./textures/TextureUvs":145,"./textures/VideoBaseTexture":146,"./ticker":148,"./utils":151,"pixi-gl-core":7}],98:[function(require,module,exports){var ux=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1];var uy=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1];var vx=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1];var vy=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1];var tempMatrices=[];var Matrix=require('./Matrix');var mul=[];function signum(x){if(x<0){return-1;}
if(x>0){return 1;}
return 0;}
function init(){for(var i=0;i<16;i++){var row=[];mul.push(row);for(var j=0;j<16;j++){var _ux=signum(ux[i]*ux[j]+vx[i]*uy[j]);var _uy=signum(uy[i]*ux[j]+vy[i]*uy[j]);var _vx=signum(ux[i]*vx[j]+vx[i]*vy[j]);var _vy=signum(uy[i]*vx[j]+vy[i]*vy[j]);for(var k=0;k<16;k++){if(ux[k]===_ux&&uy[k]===_uy&&vx[k]===_vx&&vy[k]===_vy){row.push(k);break;}}}}
for(i=0;i<16;i++){var mat=new Matrix();mat.set(ux[i],uy[i],vx[i],vy[i],0,0);tempMatrices.push(mat);}}
init();var GroupD8={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MIRROR_HORIZONTAL:12,uX:function(ind){return ux[ind];},uY:function(ind){return uy[ind];},vX:function(ind){return vx[ind];},vY:function(ind){return vy[ind];},inv:function(rotation){if(rotation&8){return rotation&15;}
return(-rotation)&7;},add:function(rotationSecond,rotationFirst){return mul[rotationSecond][rotationFirst];},sub:function(rotationSecond,rotationFirst){return mul[rotationSecond][GroupD8.inv(rotationFirst)];},rotate180:function(rotation){return rotation^4;},isSwapWidthHeight:function(rotation){return(rotation&3)===2;},byDirection:function(dx,dy){if(Math.abs(dx)*2<=Math.abs(dy)){if(dy>=0){return GroupD8.S;}
else{return GroupD8.N;}}else if(Math.abs(dy)*2<=Math.abs(dx)){if(dx>0){return GroupD8.E;}
else{return GroupD8.W;}}else{if(dy>0){if(dx>0){return GroupD8.SE;}
else{return GroupD8.SW;}}
else if(dx>0){return GroupD8.NE;}
else{return GroupD8.NW;}}},matrixAppendRotationInv:function(matrix,rotation,tx,ty){var mat=tempMatrices[GroupD8.inv(rotation)];tx=tx||0;ty=ty||0;mat.tx=tx;mat.ty=ty;matrix.append(mat);}};module.exports=GroupD8;},{"./Matrix":99}],99:[function(require,module,exports){var Point=require('./Point');function Matrix()
{this.a=1;this.b=0;this.c=0;this.d=1;this.tx=0;this.ty=0;this.array=null;}
Matrix.prototype.constructor=Matrix;module.exports=Matrix;Matrix.prototype.fromArray=function(array)
{this.a=array[0];this.b=array[1];this.c=array[3];this.d=array[4];this.tx=array[2];this.ty=array[5];};Matrix.prototype.set=function(a,b,c,d,tx,ty)
{this.a=a;this.b=b;this.c=c;this.d=d;this.tx=tx;this.ty=ty;return this;};Matrix.prototype.toArray=function(transpose,out)
{if(!this.array)
{this.array=new Float32Array(9);}
var array=out||this.array;if(transpose)
{array[0]=this.a;array[1]=this.b;array[2]=0;array[3]=this.c;array[4]=this.d;array[5]=0;array[6]=this.tx;array[7]=this.ty;array[8]=1;}
else
{array[0]=this.a;array[1]=this.c;array[2]=this.tx;array[3]=this.b;array[4]=this.d;array[5]=this.ty;array[6]=0;array[7]=0;array[8]=1;}
return array;};Matrix.prototype.apply=function(pos,newPos)
{newPos=newPos||new Point();var x=pos.x;var y=pos.y;newPos.x=this.a*x+this.c*y+this.tx;newPos.y=this.b*x+this.d*y+this.ty;return newPos;};Matrix.prototype.applyInverse=function(pos,newPos)
{newPos=newPos||new Point();var id=1/(this.a*this.d+this.c*-this.b);var x=pos.x;var y=pos.y;newPos.x=this.d*id*x+-this.c*id*y+(this.ty*this.c-this.tx*this.d)*id;newPos.y=this.a*id*y+-this.b*id*x+(-this.ty*this.a+this.tx*this.b)*id;return newPos;};Matrix.prototype.translate=function(x,y)
{this.tx+=x;this.ty+=y;return this;};Matrix.prototype.scale=function(x,y)
{this.a*=x;this.d*=y;this.c*=x;this.b*=y;this.tx*=x;this.ty*=y;return this;};Matrix.prototype.rotate=function(angle)
{var cos=Math.cos(angle);var sin=Math.sin(angle);var a1=this.a;var c1=this.c;var tx1=this.tx;this.a=a1*cos-this.b*sin;this.b=a1*sin+this.b*cos;this.c=c1*cos-this.d*sin;this.d=c1*sin+this.d*cos;this.tx=tx1*cos-this.ty*sin;this.ty=tx1*sin+this.ty*cos;return this;};Matrix.prototype.append=function(matrix)
{var a1=this.a;var b1=this.b;var c1=this.c;var d1=this.d;this.a=matrix.a*a1+matrix.b*c1;this.b=matrix.a*b1+matrix.b*d1;this.c=matrix.c*a1+matrix.d*c1;this.d=matrix.c*b1+matrix.d*d1;this.tx=matrix.tx*a1+matrix.ty*c1+this.tx;this.ty=matrix.tx*b1+matrix.ty*d1+this.ty;return this;};Matrix.prototype.setTransform=function(x,y,pivotX,pivotY,scaleX,scaleY,rotation,skewX,skewY)
{var a,b,c,d,sr,cr,cy,sy,nsx,cx;sr=Math.sin(rotation);cr=Math.cos(rotation);cy=Math.cos(skewY);sy=Math.sin(skewY);nsx=-Math.sin(skewX);cx=Math.cos(skewX);a=cr*scaleX;b=sr*scaleX;c=-sr*scaleY;d=cr*scaleY;this.a=cy*a+sy*c;this.b=cy*b+sy*d;this.c=nsx*a+cx*c;this.d=nsx*b+cx*d;this.tx=x+(pivotX*a+pivotY*c);this.ty=y+(pivotX*b+pivotY*d);return this;};Matrix.prototype.prepend=function(matrix)
{var tx1=this.tx;if(matrix.a!==1||matrix.b!==0||matrix.c!==0||matrix.d!==1)
{var a1=this.a;var c1=this.c;this.a=a1*matrix.a+this.b*matrix.c;this.b=a1*matrix.b+this.b*matrix.d;this.c=c1*matrix.a+this.d*matrix.c;this.d=c1*matrix.b+this.d*matrix.d;}
this.tx=tx1*matrix.a+this.ty*matrix.c+matrix.tx;this.ty=tx1*matrix.b+this.ty*matrix.d+matrix.ty;return this;};Matrix.prototype.decompose=function(transform)
{var a=this.a,b=this.b,c=this.c,d=this.d;var skewX=Math.atan2(-c,d);var skewY=Math.atan2(b,a);var delta=Math.abs(1-skewX/skewY);if(delta<0.00001)
{transform.rotation=skewY;if(a<0&&d>=0)
{transform.rotation+=(transform.rotation<=0)?Math.PI:-Math.PI;}
transform.skew.x=transform.skew.y=0;}
else
{transform.skew.x=skewX;transform.skew.y=skewY;}
transform.scale.x=Math.sqrt(a*a+b*b);transform.scale.y=Math.sqrt(c*c+d*d);transform.position.x=this.tx;transform.position.y=this.ty;return transform;};Matrix.prototype.invert=function()
{var a1=this.a;var b1=this.b;var c1=this.c;var d1=this.d;var tx1=this.tx;var n=a1*d1-b1*c1;this.a=d1/n;this.b=-b1/n;this.c=-c1/n;this.d=a1/n;this.tx=(c1*this.ty-d1*tx1)/n;this.ty=-(a1*this.ty-b1*tx1)/n;return this;};Matrix.prototype.identity=function()
{this.a=1;this.b=0;this.c=0;this.d=1;this.tx=0;this.ty=0;return this;};Matrix.prototype.clone=function()
{var matrix=new Matrix();matrix.a=this.a;matrix.b=this.b;matrix.c=this.c;matrix.d=this.d;matrix.tx=this.tx;matrix.ty=this.ty;return matrix;};Matrix.prototype.copy=function(matrix)
{matrix.a=this.a;matrix.b=this.b;matrix.c=this.c;matrix.d=this.d;matrix.tx=this.tx;matrix.ty=this.ty;return matrix;};Matrix.IDENTITY=new Matrix();Matrix.TEMP_MATRIX=new Matrix();},{"./Point":101}],100:[function(require,module,exports){function ObservablePoint(cb,scope,x,y)
{this._x=x||0;this._y=y||0;this.cb=cb;this.scope=scope;}
ObservablePoint.prototype.constructor=ObservablePoint;module.exports=ObservablePoint;Object.defineProperties(ObservablePoint.prototype,{x:{get:function()
{return this._x;},set:function(value)
{if(this._x!==value){this._x=value;this.cb.call(this.scope);}}},y:{get:function()
{return this._y;},set:function(value)
{if(this._y!==value){this._y=value;this.cb.call(this.scope);}}}});ObservablePoint.prototype.set=function(x,y)
{var _x=x||0;var _y=y||((y!==0)?_x:0);if(this._x!==_x||this._y!==_y)
{this._x=_x;this._y=_y;this.cb.call(this.scope);}};ObservablePoint.prototype.copy=function(point)
{if(this._x!==point.x||this._y!==point.y)
{this._x=point.x;this._y=point.y;this.cb.call(this.scope);}};},{}],101:[function(require,module,exports){function Point(x,y)
{this.x=x||0;this.y=y||0;}
Point.prototype.constructor=Point;module.exports=Point;Point.prototype.clone=function()
{return new Point(this.x,this.y);};Point.prototype.copy=function(p){this.set(p.x,p.y);};Point.prototype.equals=function(p){return(p.x===this.x)&&(p.y===this.y);};Point.prototype.set=function(x,y)
{this.x=x||0;this.y=y||((y!==0)?this.x:0);};},{}],102:[function(require,module,exports){module.exports={Point:require('./Point'),ObservablePoint:require('./ObservablePoint'),Matrix:require('./Matrix'),GroupD8:require('./GroupD8'),Circle:require('./shapes/Circle'),Ellipse:require('./shapes/Ellipse'),Polygon:require('./shapes/Polygon'),Rectangle:require('./shapes/Rectangle'),RoundedRectangle:require('./shapes/RoundedRectangle')};},{"./GroupD8":98,"./Matrix":99,"./ObservablePoint":100,"./Point":101,"./shapes/Circle":103,"./shapes/Ellipse":104,"./shapes/Polygon":105,"./shapes/Rectangle":106,"./shapes/RoundedRectangle":107}],103:[function(require,module,exports){var Rectangle=require('./Rectangle'),CONST=require('../../const');function Circle(x,y,radius)
{this.x=x||0;this.y=y||0;this.radius=radius||0;this.type=CONST.SHAPES.CIRC;}
Circle.prototype.constructor=Circle;module.exports=Circle;Circle.prototype.clone=function()
{return new Circle(this.x,this.y,this.radius);};Circle.prototype.contains=function(x,y)
{if(this.radius<=0)
{return false;}
var dx=(this.x-x),dy=(this.y-y),r2=this.radius*this.radius;dx*=dx;dy*=dy;return(dx+dy<=r2);};Circle.prototype.getBounds=function()
{return new Rectangle(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);};},{"../../const":78,"./Rectangle":106}],104:[function(require,module,exports){var Rectangle=require('./Rectangle'),CONST=require('../../const');function Ellipse(x,y,width,height)
{this.x=x||0;this.y=y||0;this.width=width||0;this.height=height||0;this.type=CONST.SHAPES.ELIP;}
Ellipse.prototype.constructor=Ellipse;module.exports=Ellipse;Ellipse.prototype.clone=function()
{return new Ellipse(this.x,this.y,this.width,this.height);};Ellipse.prototype.contains=function(x,y)
{if(this.width<=0||this.height<=0)
{return false;}
var normx=((x-this.x)/this.width),normy=((y-this.y)/this.height);normx*=normx;normy*=normy;return(normx+normy<=1);};Ellipse.prototype.getBounds=function()
{return new Rectangle(this.x-this.width,this.y-this.height,this.width,this.height);};},{"../../const":78,"./Rectangle":106}],105:[function(require,module,exports){var Point=require('../Point'),CONST=require('../../const');function Polygon(points_)
{var points=points_;if(!Array.isArray(points))
{points=new Array(arguments.length);for(var a=0;a<points.length;++a){points[a]=arguments[a];}}
if(points[0]instanceof Point)
{var p=[];for(var i=0,il=points.length;i<il;i++)
{p.push(points[i].x,points[i].y);}
points=p;}
this.closed=true;this.points=points;this.type=CONST.SHAPES.POLY;}
Polygon.prototype.constructor=Polygon;module.exports=Polygon;Polygon.prototype.clone=function()
{return new Polygon(this.points.slice());};Polygon.prototype.close=function()
{var points=this.points;if(points[0]!==points[points.length-2]||points[1]!==points[points.length-1])
{points.push(points[0],points[1]);}};Polygon.prototype.contains=function(x,y)
{var inside=false;var length=this.points.length/2;for(var i=0,j=length-1;i<length;j=i++)
{var xi=this.points[i*2],yi=this.points[i*2+1],xj=this.points[j*2],yj=this.points[j*2+1],intersect=((yi>y)!==(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi);if(intersect)
{inside=!inside;}}
return inside;};},{"../../const":78,"../Point":101}],106:[function(require,module,exports){var CONST=require('../../const');function Rectangle(x,y,width,height)
{this.x=x||0;this.y=y||0;this.width=width||0;this.height=height||0;this.type=CONST.SHAPES.RECT;}
Rectangle.prototype.constructor=Rectangle;module.exports=Rectangle;Object.defineProperties(Rectangle.prototype,{left:{get:function()
{return this.x;}},right:{get:function()
{return this.x+this.width;}},top:{get:function()
{return this.y;}},bottom:{get:function()
{return this.y+this.height;}}});Rectangle.EMPTY=new Rectangle(0,0,0,0);Rectangle.prototype.clone=function()
{return new Rectangle(this.x,this.y,this.width,this.height);};Rectangle.prototype.copy=function(rectangle)
{this.x=rectangle.x;this.y=rectangle.y;this.width=rectangle.width;this.height=rectangle.height;return this;};Rectangle.prototype.contains=function(x,y)
{if(this.width<=0||this.height<=0)
{return false;}
if(x>=this.x&&x<this.x+this.width)
{if(y>=this.y&&y<this.y+this.height)
{return true;}}
return false;};Rectangle.prototype.pad=function(paddingX,paddingY)
{paddingX=paddingX||0;paddingY=paddingY||((paddingY!==0)?paddingX:0);this.x-=paddingX;this.y-=paddingY;this.width+=paddingX*2;this.height+=paddingY*2;};Rectangle.prototype.fit=function(rectangle)
{if(this.x<rectangle.x)
{this.width+=this.x;if(this.width<0){this.width=0;}
this.x=rectangle.x;}
if(this.y<rectangle.y)
{this.height+=this.y;if(this.height<0){this.height=0;}
this.y=rectangle.y;}
if(this.x+this.width>rectangle.x+rectangle.width)
{this.width=rectangle.width-this.x;if(this.width<0){this.width=0;}}
if(this.y+this.height>rectangle.y+rectangle.height)
{this.height=rectangle.height-this.y;if(this.height<0){this.height=0;}}};Rectangle.prototype.enlarge=function(rect)
{if(rect===Rectangle.EMPTY)
{return;}
var x1=Math.min(this.x,rect.x);var x2=Math.max(this.x+this.width,rect.x+rect.width);var y1=Math.min(this.y,rect.y);var y2=Math.max(this.y+this.height,rect.y+rect.height);this.x=x1;this.width=x2-x1;this.y=y1;this.height=y2-y1;};},{"../../const":78}],107:[function(require,module,exports){var CONST=require('../../const');function RoundedRectangle(x,y,width,height,radius)
{this.x=x||0;this.y=y||0;this.width=width||0;this.height=height||0;this.radius=radius||20;this.type=CONST.SHAPES.RREC;}
RoundedRectangle.prototype.constructor=RoundedRectangle;module.exports=RoundedRectangle;RoundedRectangle.prototype.clone=function()
{return new RoundedRectangle(this.x,this.y,this.width,this.height,this.radius);};RoundedRectangle.prototype.contains=function(x,y)
{if(this.width<=0||this.height<=0)
{return false;}
if(x>=this.x&&x<=this.x+this.width)
{if(y>=this.y&&y<=this.y+this.height)
{return true;}}
return false;};},{"../../const":78}],108:[function(require,module,exports){var utils=require('../utils'),math=require('../math'),CONST=require('../const'),Container=require('../display/Container'),RenderTexture=require('../textures/RenderTexture'),EventEmitter=require('eventemitter3'),tempMatrix=new math.Matrix();function SystemRenderer(system,width,height,options)
{EventEmitter.call(this);utils.sayHello(system);if(options)
{for(var i in CONST.DEFAULT_RENDER_OPTIONS)
{if(typeof options[i]==='undefined')
{options[i]=CONST.DEFAULT_RENDER_OPTIONS[i];}}}
else
{options=CONST.DEFAULT_RENDER_OPTIONS;}
this.type=CONST.RENDERER_TYPE.UNKNOWN;this.width=width||800;this.height=height||600;this.view=options.view||document.createElement('canvas');this.resolution=options.resolution;this.transparent=options.transparent;this.autoResize=options.autoResize||false;this.blendModes=null;this.preserveDrawingBuffer=options.preserveDrawingBuffer;this.clearBeforeRender=options.clearBeforeRender;this.roundPixels=options.roundPixels;this._backgroundColor=0x000000;this._backgroundColorRgba=[0,0,0,0];this._backgroundColorString='#000000';this.backgroundColor=options.backgroundColor||this._backgroundColor;this._tempDisplayObjectParent=new Container();this._lastObjectRendered=this._tempDisplayObjectParent;}
SystemRenderer.prototype=Object.create(EventEmitter.prototype);SystemRenderer.prototype.constructor=SystemRenderer;module.exports=SystemRenderer;Object.defineProperties(SystemRenderer.prototype,{backgroundColor:{get:function()
{return this._backgroundColor;},set:function(val)
{this._backgroundColor=val;this._backgroundColorString=utils.hex2string(val);utils.hex2rgb(val,this._backgroundColorRgba);}}});SystemRenderer.prototype.resize=function(width,height){this.width=width*this.resolution;this.height=height*this.resolution;this.view.width=this.width;this.view.height=this.height;if(this.autoResize)
{this.view.style.width=this.width/this.resolution+'px';this.view.style.height=this.height/this.resolution+'px';}};SystemRenderer.prototype.generateTexture=function(displayObject,scaleMode,resolution){var bounds=displayObject.getLocalBounds();var renderTexture=RenderTexture.create(bounds.width|0,bounds.height|0,scaleMode,resolution);tempMatrix.tx=-bounds.x;tempMatrix.ty=-bounds.y;this.render(displayObject,renderTexture,false,tempMatrix,true);return renderTexture;};SystemRenderer.prototype.destroy=function(removeView){if(removeView&&this.view.parentNode)
{this.view.parentNode.removeChild(this.view);}
this.type=CONST.RENDERER_TYPE.UNKNOWN;this.width=0;this.height=0;this.view=null;this.resolution=0;this.transparent=false;this.autoResize=false;this.blendModes=null;this.preserveDrawingBuffer=false;this.clearBeforeRender=false;this.roundPixels=false;this._backgroundColor=0;this._backgroundColorRgba=null;this._backgroundColorString=null;this.backgroundColor=0;this._tempDisplayObjectParent=null;this._lastObjectRendered=null;};},{"../const":78,"../display/Container":80,"../math":102,"../textures/RenderTexture":143,"../utils":151,"eventemitter3":32}],109:[function(require,module,exports){var SystemRenderer=require('../SystemRenderer'),CanvasMaskManager=require('./utils/CanvasMaskManager'),CanvasRenderTarget=require('./utils/CanvasRenderTarget'),mapCanvasBlendModesToPixi=require('./utils/mapCanvasBlendModesToPixi'),utils=require('../../utils'),CONST=require('../../const');function CanvasRenderer(width,height,options)
{options=options||{};SystemRenderer.call(this,'Canvas',width,height,options);this.type=CONST.RENDERER_TYPE.CANVAS;this.rootContext=this.view.getContext('2d',{alpha:this.transparent});this.rootResolution=this.resolution;this.refresh=true;this.maskManager=new CanvasMaskManager(this);this.smoothProperty='imageSmoothingEnabled';if(!this.rootContext.imageSmoothingEnabled)
{if(this.rootContext.webkitImageSmoothingEnabled)
{this.smoothProperty='webkitImageSmoothingEnabled';}
else if(this.rootContext.mozImageSmoothingEnabled)
{this.smoothProperty='mozImageSmoothingEnabled';}
else if(this.rootContext.oImageSmoothingEnabled)
{this.smoothProperty='oImageSmoothingEnabled';}
else if(this.rootContext.msImageSmoothingEnabled)
{this.smoothProperty='msImageSmoothingEnabled';}}
this.initPlugins();this.blendModes=mapCanvasBlendModesToPixi();this._activeBlendMode=null;this.context=null;this.renderingToScreen=false;this.resize(width,height);}
CanvasRenderer.prototype=Object.create(SystemRenderer.prototype);CanvasRenderer.prototype.constructor=CanvasRenderer;module.exports=CanvasRenderer;utils.pluginTarget.mixin(CanvasRenderer);CanvasRenderer.prototype.render=function(displayObject,renderTexture,clear,transform,skipUpdateTransform)
{if(!this.view){return;}
this.renderingToScreen=!renderTexture;this.emit('prerender');if(renderTexture)
{renderTexture=renderTexture.baseTexture||renderTexture;if(!renderTexture._canvasRenderTarget)
{renderTexture._canvasRenderTarget=new CanvasRenderTarget(renderTexture.width,renderTexture.height,renderTexture.resolution);renderTexture.source=renderTexture._canvasRenderTarget.canvas;renderTexture.valid=true;}
this.context=renderTexture._canvasRenderTarget.context;this.resolution=renderTexture._canvasRenderTarget.resolution;}
else
{this.context=this.rootContext;this.resolution=this.rootResolution;}
var context=this.context;if(!renderTexture)
{this._lastObjectRendered=displayObject;}
if(!skipUpdateTransform)
{var cacheParent=displayObject.parent;var tempWt=this._tempDisplayObjectParent.transform.worldTransform;if(transform)
{transform.copy(tempWt);}
else
{tempWt.identity();}
displayObject.parent=this._tempDisplayObjectParent;displayObject.updateTransform();displayObject.parent=cacheParent;}
context.setTransform(1,0,0,1,0,0);context.globalAlpha=1;context.globalCompositeOperation=this.blendModes[CONST.BLEND_MODES.NORMAL];if(navigator.isCocoonJS&&this.view.screencanvas)
{context.fillStyle='black';context.clear();}
if(clear!==undefined?clear:this.clearBeforeRender)
{if(this.renderingToScreen){if(this.transparent){context.clearRect(0,0,this.width,this.height);}
else{context.fillStyle=this._backgroundColorString;context.fillRect(0,0,this.width,this.height);}}}
var tempContext=this.context;this.context=context;displayObject.renderCanvas(this);this.context=tempContext;this.emit('postrender');};CanvasRenderer.prototype.setBlendMode=function(blendMode)
{if(this._activeBlendMode===blendMode){return;}
this.context.globalCompositeOperation=this.blendModes[blendMode];};CanvasRenderer.prototype.destroy=function(removeView)
{this.destroyPlugins();SystemRenderer.prototype.destroy.call(this,removeView);this.context=null;this.refresh=true;this.maskManager.destroy();this.maskManager=null;this.smoothProperty=null;};CanvasRenderer.prototype.resize=function(width,height)
{SystemRenderer.prototype.resize.call(this,width,height);if(this.smoothProperty)
{this.rootContext[this.smoothProperty]=(CONST.SCALE_MODES.DEFAULT===CONST.SCALE_MODES.LINEAR);}};},{"../../const":78,"../../utils":151,"../SystemRenderer":108,"./utils/CanvasMaskManager":110,"./utils/CanvasRenderTarget":111,"./utils/mapCanvasBlendModesToPixi":113}],110:[function(require,module,exports){var CONST=require('../../../const');function CanvasMaskManager(renderer)
{this.renderer=renderer;}
CanvasMaskManager.prototype.constructor=CanvasMaskManager;module.exports=CanvasMaskManager;CanvasMaskManager.prototype.pushMask=function(maskData)
{var renderer=this.renderer;renderer.context.save();var cacheAlpha=maskData.alpha;var transform=maskData.transform.worldTransform;var resolution=renderer.resolution;renderer.context.setTransform(transform.a*resolution,transform.b*resolution,transform.c*resolution,transform.d*resolution,transform.tx*resolution,transform.ty*resolution);if(!maskData._texture)
{this.renderGraphicsShape(maskData);renderer.context.clip();}
maskData.worldAlpha=cacheAlpha;};CanvasMaskManager.prototype.renderGraphicsShape=function(graphics)
{var context=this.renderer.context;var len=graphics.graphicsData.length;if(len===0)
{return;}
context.beginPath();for(var i=0;i<len;i++)
{var data=graphics.graphicsData[i];var shape=data.shape;if(data.type===CONST.SHAPES.POLY)
{var points=shape.points;context.moveTo(points[0],points[1]);for(var j=1;j<points.length/2;j++)
{context.lineTo(points[j*2],points[j*2+1]);}
if(points[0]===points[points.length-2]&&points[1]===points[points.length-1])
{context.closePath();}}
else if(data.type===CONST.SHAPES.RECT)
{context.rect(shape.x,shape.y,shape.width,shape.height);context.closePath();}
else if(data.type===CONST.SHAPES.CIRC)
{context.arc(shape.x,shape.y,shape.radius,0,2*Math.PI);context.closePath();}
else if(data.type===CONST.SHAPES.ELIP)
{var w=shape.width*2;var h=shape.height*2;var x=shape.x-w/2;var y=shape.y-h/2;var kappa=0.5522848,ox=(w/2)*kappa,oy=(h/2)*kappa,xe=x+w,ye=y+h,xm=x+w/2,ym=y+h/2;context.moveTo(x,ym);context.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y);context.bezierCurveTo(xm+ox,y,xe,ym-oy,xe,ym);context.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye);context.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym);context.closePath();}
else if(data.type===CONST.SHAPES.RREC)
{var rx=shape.x;var ry=shape.y;var width=shape.width;var height=shape.height;var radius=shape.radius;var maxRadius=Math.min(width,height)/2|0;radius=radius>maxRadius?maxRadius:radius;context.moveTo(rx,ry+radius);context.lineTo(rx,ry+height-radius);context.quadraticCurveTo(rx,ry+height,rx+radius,ry+height);context.lineTo(rx+width-radius,ry+height);context.quadraticCurveTo(rx+width,ry+height,rx+width,ry+height-radius);context.lineTo(rx+width,ry+radius);context.quadraticCurveTo(rx+width,ry,rx+width-radius,ry);context.lineTo(rx+radius,ry);context.quadraticCurveTo(rx,ry,rx,ry+radius);context.closePath();}}};CanvasMaskManager.prototype.popMask=function(renderer)
{renderer.context.restore();};CanvasMaskManager.prototype.destroy=function(){};},{"../../../const":78}],111:[function(require,module,exports){var CONST=require('../../../const');function CanvasRenderTarget(width,height,resolution)
{this.canvas=document.createElement('canvas');this.context=this.canvas.getContext('2d');this.resolution=resolution||CONST.RESOLUTION;this.resize(width,height);}
CanvasRenderTarget.prototype.constructor=CanvasRenderTarget;module.exports=CanvasRenderTarget;Object.defineProperties(CanvasRenderTarget.prototype,{width:{get:function()
{return this.canvas.width;},set:function(val)
{this.canvas.width=val;}},height:{get:function()
{return this.canvas.height;},set:function(val)
{this.canvas.height=val;}}});CanvasRenderTarget.prototype.clear=function()
{this.context.setTransform(1,0,0,1,0,0);this.context.clearRect(0,0,this.canvas.width,this.canvas.height);};CanvasRenderTarget.prototype.resize=function(width,height)
{this.canvas.width=width*this.resolution;this.canvas.height=height*this.resolution;};CanvasRenderTarget.prototype.destroy=function()
{this.context=null;this.canvas=null;};},{"../../../const":78}],112:[function(require,module,exports){var createColoredCanvas=function(color)
{var canvas=document.createElement('canvas');canvas.width=6;canvas.height=1;var context=canvas.getContext('2d');context.fillStyle=color;context.fillRect(0,0,6,1);return canvas;};var canUseNewCanvasBlendModes=function()
{if(typeof document==='undefined')
{return false;}
var magenta=createColoredCanvas('#ff00ff');var yellow=createColoredCanvas('#ffff00');var canvas=document.createElement('canvas');canvas.width=6;canvas.height=1;var context=canvas.getContext('2d');context.globalCompositeOperation='multiply';context.drawImage(magenta,0,0);context.drawImage(yellow,2,0);var imageData=context.getImageData(2,0,1,1);if(!imageData)
{return false;}
var data=imageData.data;return(data[0]===255&&data[1]===0&&data[2]===0);};module.exports=canUseNewCanvasBlendModes;},{}],113:[function(require,module,exports){var CONST=require('../../../const'),canUseNewCanvasBlendModes=require('./canUseNewCanvasBlendModes');function mapCanvasBlendModesToPixi(array)
{array=array||[];if(canUseNewCanvasBlendModes())
{array[CONST.BLEND_MODES.NORMAL]='source-over';array[CONST.BLEND_MODES.ADD]='lighter';array[CONST.BLEND_MODES.MULTIPLY]='multiply';array[CONST.BLEND_MODES.SCREEN]='screen';array[CONST.BLEND_MODES.OVERLAY]='overlay';array[CONST.BLEND_MODES.DARKEN]='darken';array[CONST.BLEND_MODES.LIGHTEN]='lighten';array[CONST.BLEND_MODES.COLOR_DODGE]='color-dodge';array[CONST.BLEND_MODES.COLOR_BURN]='color-burn';array[CONST.BLEND_MODES.HARD_LIGHT]='hard-light';array[CONST.BLEND_MODES.SOFT_LIGHT]='soft-light';array[CONST.BLEND_MODES.DIFFERENCE]='difference';array[CONST.BLEND_MODES.EXCLUSION]='exclusion';array[CONST.BLEND_MODES.HUE]='hue';array[CONST.BLEND_MODES.SATURATION]='saturate';array[CONST.BLEND_MODES.COLOR]='color';array[CONST.BLEND_MODES.LUMINOSITY]='luminosity';}
else
{array[CONST.BLEND_MODES.NORMAL]='source-over';array[CONST.BLEND_MODES.ADD]='lighter';array[CONST.BLEND_MODES.MULTIPLY]='source-over';array[CONST.BLEND_MODES.SCREEN]='source-over';array[CONST.BLEND_MODES.OVERLAY]='source-over';array[CONST.BLEND_MODES.DARKEN]='source-over';array[CONST.BLEND_MODES.LIGHTEN]='source-over';array[CONST.BLEND_MODES.COLOR_DODGE]='source-over';array[CONST.BLEND_MODES.COLOR_BURN]='source-over';array[CONST.BLEND_MODES.HARD_LIGHT]='source-over';array[CONST.BLEND_MODES.SOFT_LIGHT]='source-over';array[CONST.BLEND_MODES.DIFFERENCE]='source-over';array[CONST.BLEND_MODES.EXCLUSION]='source-over';array[CONST.BLEND_MODES.HUE]='source-over';array[CONST.BLEND_MODES.SATURATION]='source-over';array[CONST.BLEND_MODES.COLOR]='source-over';array[CONST.BLEND_MODES.LUMINOSITY]='source-over';}
return array;}
module.exports=mapCanvasBlendModesToPixi;},{"../../../const":78,"./canUseNewCanvasBlendModes":112}],114:[function(require,module,exports){var CONST=require('../../const');function TextureGarbageCollector(renderer)
{this.renderer=renderer;this.count=0;this.checkCount=0;this.maxIdle=60*60;this.checkCountMax=60*10;this.mode=CONST.GC_MODES.DEFAULT;}
TextureGarbageCollector.prototype.constructor=TextureGarbageCollector;module.exports=TextureGarbageCollector;TextureGarbageCollector.prototype.update=function()
{this.count++;if(this.mode===CONST.GC_MODES.MANUAL)
{return;}
this.checkCount++;if(this.checkCount>this.checkCountMax)
{this.checkCount=0;this.run();}};TextureGarbageCollector.prototype.run=function()
{var tm=this.renderer.textureManager;var managedTextures=tm._managedTextures;var wasRemoved=false;var i,j;for(i=0;i<managedTextures.length;i++)
{var texture=managedTextures[i];if(!texture._glRenderTargets&&this.count-texture.touched>this.maxIdle)
{tm.destroyTexture(texture,true);managedTextures[i]=null;wasRemoved=true;}}
if(wasRemoved)
{j=0;for(i=0;i<managedTextures.length;i++)
{if(managedTextures[i]!==null)
{managedTextures[j++]=managedTextures[i];}}
managedTextures.length=j;}};TextureGarbageCollector.prototype.unload=function(displayObject)
{var tm=this.renderer.textureManager;if(displayObject._texture)
{tm.destroyTexture(displayObject._texture,true);}
for(var i=displayObject.children.length-1;i>=0;i--){this.unload(displayObject.children[i]);}};},{"../../const":78}],115:[function(require,module,exports){var GLTexture=require('pixi-gl-core').GLTexture,CONST=require('../../const'),RenderTarget=require('./utils/RenderTarget'),utils=require('../../utils');var TextureManager=function(renderer)
{this.renderer=renderer;this.gl=renderer.gl;this._managedTextures=[];};TextureManager.prototype.bindTexture=function()
{};TextureManager.prototype.getTexture=function()
{};TextureManager.prototype.updateTexture=function(texture)
{texture=texture.baseTexture||texture;var isRenderTexture=!!texture._glRenderTargets;if(!texture.hasLoaded)
{return;}
var glTexture=texture._glTextures[this.renderer.CONTEXT_UID];if(!glTexture)
{if(isRenderTexture)
{var renderTarget=new RenderTarget(this.gl,texture.width,texture.height,texture.scaleMode,texture.resolution);renderTarget.resize(texture.width,texture.height);texture._glRenderTargets[this.renderer.CONTEXT_UID]=renderTarget;glTexture=renderTarget.texture;}
else
{glTexture=new GLTexture(this.gl);glTexture.premultiplyAlpha=true;glTexture.upload(texture.source);}
texture._glTextures[this.renderer.CONTEXT_UID]=glTexture;texture.on('update',this.updateTexture,this);texture.on('dispose',this.destroyTexture,this);this._managedTextures.push(texture);if(texture.isPowerOfTwo)
{if(texture.mipmap)
{glTexture.enableMipmap();}
if(texture.wrapMode===CONST.WRAP_MODES.CLAMP)
{glTexture.enableWrapClamp();}
else if(texture.wrapMode===CONST.WRAP_MODES.REPEAT)
{glTexture.enableWrapRepeat();}
else
{glTexture.enableWrapMirrorRepeat();}}
else
{glTexture.enableWrapClamp();}
if(texture.scaleMode===CONST.SCALE_MODES.NEAREST)
{glTexture.enableNearestScaling();}
else
{glTexture.enableLinearScaling();}}
else
{if(isRenderTexture)
{texture._glRenderTargets[this.renderer.CONTEXT_UID].resize(texture.width,texture.height);}
else
{glTexture.upload(texture.source);}}
return glTexture;};TextureManager.prototype.destroyTexture=function(texture,skipRemove)
{texture=texture.baseTexture||texture;if(!texture.hasLoaded)
{return;}
if(texture._glTextures[this.renderer.CONTEXT_UID])
{texture._glTextures[this.renderer.CONTEXT_UID].destroy();texture.off('update',this.updateTexture,this);texture.off('dispose',this.destroyTexture,this);delete texture._glTextures[this.renderer.CONTEXT_UID];if(!skipRemove)
{var i=this._managedTextures.indexOf(texture);if(i!==-1){utils.removeItems(this._managedTextures,i,1);}}}};TextureManager.prototype.removeAll=function()
{for(var i=0;i<this._managedTextures.length;++i)
{var texture=this._managedTextures[i];if(texture._glTextures[this.renderer.CONTEXT_UID])
{delete texture._glTextures[this.renderer.CONTEXT_UID];}}};TextureManager.prototype.destroy=function()
{for(var i=0;i<this._managedTextures.length;++i)
{var texture=this._managedTextures[i];this.destroyTexture(texture,true);texture.off('update',this.updateTexture,this);texture.off('dispose',this.destroyTexture,this);}
this._managedTextures=null;};module.exports=TextureManager;},{"../../const":78,"../../utils":151,"./utils/RenderTarget":128,"pixi-gl-core":7}],116:[function(require,module,exports){var SystemRenderer=require('../SystemRenderer'),MaskManager=require('./managers/MaskManager'),StencilManager=require('./managers/StencilManager'),FilterManager=require('./managers/FilterManager'),RenderTarget=require('./utils/RenderTarget'),ObjectRenderer=require('./utils/ObjectRenderer'),TextureManager=require('./TextureManager'),TextureGarbageCollector=require('./TextureGarbageCollector'),WebGLState=require('./WebGLState'),createContext=require('pixi-gl-core').createContext,mapWebGLDrawModesToPixi=require('./utils/mapWebGLDrawModesToPixi'),validateContext=require('./utils/validateContext'),utils=require('../../utils'),glCore=require('pixi-gl-core'),CONST=require('../../const');var CONTEXT_UID=0;function WebGLRenderer(width,height,options)
{options=options||{};SystemRenderer.call(this,'WebGL',width,height,options);this.type=CONST.RENDERER_TYPE.WEBGL;this.handleContextLost=this.handleContextLost.bind(this);this.handleContextRestored=this.handleContextRestored.bind(this);this.view.addEventListener('webglcontextlost',this.handleContextLost,false);this.view.addEventListener('webglcontextrestored',this.handleContextRestored,false);this._contextOptions={alpha:this.transparent,antialias:options.antialias,premultipliedAlpha:this.transparent&&this.transparent!=='notMultiplied',stencil:true,preserveDrawingBuffer:options.preserveDrawingBuffer};this._backgroundColorRgba[3]=this.transparent?0:1;this.maskManager=new MaskManager(this);this.stencilManager=new StencilManager(this);this.emptyRenderer=new ObjectRenderer(this);this.currentRenderer=this.emptyRenderer;this.initPlugins();if(options.context)
{validateContext(options.context);}
this.gl=options.context||createContext(this.view,this._contextOptions);this.CONTEXT_UID=CONTEXT_UID++;this.state=new WebGLState(this.gl);this.renderingToScreen=true;this._initContext();this.filterManager=new FilterManager(this);this.drawModes=mapWebGLDrawModesToPixi(this.gl);this._activeShader=null;this._activeRenderTarget=null;this._activeTextureLocation=999;this._activeTexture=null;this.setBlendMode(0);}
WebGLRenderer.prototype=Object.create(SystemRenderer.prototype);WebGLRenderer.prototype.constructor=WebGLRenderer;module.exports=WebGLRenderer;utils.pluginTarget.mixin(WebGLRenderer);WebGLRenderer.prototype._initContext=function()
{var gl=this.gl;this.textureManager=new TextureManager(this);this.textureGC=new TextureGarbageCollector(this);this.state.resetToDefault();this.rootRenderTarget=new RenderTarget(gl,this.width,this.height,null,this.resolution,true);this.rootRenderTarget.clearColor=this._backgroundColorRgba;this.bindRenderTarget(this.rootRenderTarget);this.emit('context',gl);this.resize(this.width,this.height);};WebGLRenderer.prototype.render=function(displayObject,renderTexture,clear,transform,skipUpdateTransform)
{this.renderingToScreen=!renderTexture;this.emit('prerender');if(!this.gl||this.gl.isContextLost())
{return;}
if(!renderTexture)
{this._lastObjectRendered=displayObject;}
if(!skipUpdateTransform)
{var cacheParent=displayObject.parent;displayObject.parent=this._tempDisplayObjectParent;displayObject.updateTransform();displayObject.parent=cacheParent;}
this.bindRenderTexture(renderTexture,transform);this.currentRenderer.start();if(clear!==undefined?clear:this.clearBeforeRender)
{this._activeRenderTarget.clear();}
displayObject.renderWebGL(this);this.currentRenderer.flush();this.textureGC.update();this.emit('postrender');};WebGLRenderer.prototype.setObjectRenderer=function(objectRenderer)
{if(this.currentRenderer===objectRenderer)
{return;}
this.currentRenderer.stop();this.currentRenderer=objectRenderer;this.currentRenderer.start();};WebGLRenderer.prototype.flush=function()
{this.setObjectRenderer(this.emptyRenderer);};WebGLRenderer.prototype.resize=function(width,height)
{SystemRenderer.prototype.resize.call(this,width,height);this.rootRenderTarget.resize(width,height);if(this._activeRenderTarget===this.rootRenderTarget)
{this.rootRenderTarget.activate();if(this._activeShader)
{this._activeShader.uniforms.projectionMatrix=this.rootRenderTarget.projectionMatrix.toArray(true);}}};WebGLRenderer.prototype.setBlendMode=function(blendMode)
{this.state.setBlendMode(blendMode);};WebGLRenderer.prototype.clear=function(clearColor)
{this._activeRenderTarget.clear(clearColor);};WebGLRenderer.prototype.setTransform=function(matrix)
{this._activeRenderTarget.transform=matrix;};WebGLRenderer.prototype.bindRenderTexture=function(renderTexture,transform)
{var renderTarget;if(renderTexture)
{var baseTexture=renderTexture.baseTexture;var gl=this.gl;if(!baseTexture._glRenderTargets[this.CONTEXT_UID])
{this.textureManager.updateTexture(baseTexture);gl.bindTexture(gl.TEXTURE_2D,null);}
else
{this._activeTextureLocation=baseTexture._id;gl.activeTexture(gl.TEXTURE0+baseTexture._id);gl.bindTexture(gl.TEXTURE_2D,null);}
renderTarget=baseTexture._glRenderTargets[this.CONTEXT_UID];renderTarget.setFrame(renderTexture.frame);}
else
{renderTarget=this.rootRenderTarget;}
renderTarget.transform=transform;this.bindRenderTarget(renderTarget);return this;};WebGLRenderer.prototype.bindRenderTarget=function(renderTarget)
{if(renderTarget!==this._activeRenderTarget)
{this._activeRenderTarget=renderTarget;renderTarget.activate();if(this._activeShader)
{this._activeShader.uniforms.projectionMatrix=renderTarget.projectionMatrix.toArray(true);}
this.stencilManager.setMaskStack(renderTarget.stencilMaskStack);}
return this;};WebGLRenderer.prototype.bindShader=function(shader)
{if(this._activeShader!==shader)
{this._activeShader=shader;shader.bind();shader.uniforms.projectionMatrix=this._activeRenderTarget.projectionMatrix.toArray(true);}
return this;};WebGLRenderer.prototype.bindTexture=function(texture,location)
{texture=texture.baseTexture||texture;var gl=this.gl;location=location||0;if(this._activeTextureLocation!==location)
{this._activeTextureLocation=location;gl.activeTexture(gl.TEXTURE0+location);}
this._activeTexture=texture;if(!texture._glTextures[this.CONTEXT_UID])
{this.textureManager.updateTexture(texture);}
else
{texture.touched=this.textureGC.count;texture._glTextures[this.CONTEXT_UID].bind();}
return this;};WebGLRenderer.prototype.createVao=function()
{return new glCore.VertexArrayObject(this.gl,this.state.attribState);};WebGLRenderer.prototype.reset=function()
{this.setObjectRenderer(this.emptyRenderer);this._activeShader=null;this._activeRenderTarget=this.rootRenderTarget;this._activeTextureLocation=999;this._activeTexture=null;this.rootRenderTarget.activate();this.state.resetToDefault();return this;};WebGLRenderer.prototype.handleContextLost=function(event)
{event.preventDefault();};WebGLRenderer.prototype.handleContextRestored=function()
{this._initContext();this.textureManager.removeAll();};WebGLRenderer.prototype.destroy=function(removeView)
{this.destroyPlugins();this.view.removeEventListener('webglcontextlost',this.handleContextLost);this.view.removeEventListener('webglcontextrestored',this.handleContextRestored);this.textureManager.destroy();SystemRenderer.prototype.destroy.call(this,removeView);this.uid=0;this.maskManager.destroy();this.stencilManager.destroy();this.filterManager.destroy();this.maskManager=null;this.filterManager=null;this.textureManager=null;this.currentRenderer=null;this.handleContextLost=null;this.handleContextRestored=null;this._contextOptions=null;this.gl.useProgram(null);if(this.gl.getExtension('WEBGL_lose_context'))
{this.gl.getExtension('WEBGL_lose_context').loseContext();}
this.gl=null;};},{"../../const":78,"../../utils":151,"../SystemRenderer":108,"./TextureGarbageCollector":114,"./TextureManager":115,"./WebGLState":117,"./managers/FilterManager":122,"./managers/MaskManager":123,"./managers/StencilManager":124,"./utils/ObjectRenderer":126,"./utils/RenderTarget":128,"./utils/mapWebGLDrawModesToPixi":131,"./utils/validateContext":132,"pixi-gl-core":7}],117:[function(require,module,exports){var mapWebGLBlendModesToPixi=require('./utils/mapWebGLBlendModesToPixi');function WebGLState(gl)
{this.activeState=new Uint8Array(16);this.defaultState=new Uint8Array(16);this.defaultState[0]=1;this.stackIndex=0;this.stack=[];this.gl=gl;this.maxAttribs=gl.getParameter(gl.MAX_VERTEX_ATTRIBS);this.attribState={tempAttribState:new Array(this.maxAttribs),attribState:new Array(this.maxAttribs)};this.blendModes=mapWebGLBlendModesToPixi(gl);this.nativeVaoExtension=(gl.getExtension('OES_vertex_array_object')||gl.getExtension('MOZ_OES_vertex_array_object')||gl.getExtension('WEBKIT_OES_vertex_array_object'));}
WebGLState.prototype.push=function()
{var state=this.stack[++this.stackIndex];if(!state)
{state=this.stack[this.stackIndex]=new Uint8Array(16);}
for(var i=0;i<this.activeState.length;i++)
{this.activeState[i]=state[i];}};var BLEND=0,DEPTH_TEST=1,FRONT_FACE=2,CULL_FACE=3,BLEND_FUNC=4;WebGLState.prototype.pop=function()
{var state=this.stack[--this.stackIndex];this.setState(state);};WebGLState.prototype.setState=function(state)
{this.setBlend(state[BLEND]);this.setDepthTest(state[DEPTH_TEST]);this.setFrontFace(state[FRONT_FACE]);this.setCullFace(state[CULL_FACE]);this.setBlendMode(state[BLEND_FUNC]);};WebGLState.prototype.setBlend=function(value)
{if(this.activeState[BLEND]===value|0){return;}
this.activeState[BLEND]=value|0;var gl=this.gl;if(value)
{gl.enable(gl.BLEND);}
else
{gl.disable(gl.BLEND);}};WebGLState.prototype.setBlendMode=function(value)
{if(value===this.activeState[BLEND_FUNC]){return;}
this.activeState[BLEND_FUNC]=value;this.gl.blendFunc(this.blendModes[value][0],this.blendModes[value][1]);};WebGLState.prototype.setDepthTest=function(value)
{if(this.activeState[DEPTH_TEST]===value|0){return;}
this.activeState[DEPTH_TEST]=value|0;var gl=this.gl;if(value)
{gl.enable(gl.DEPTH_TEST);}
else
{gl.disable(gl.DEPTH_TEST);}};WebGLState.prototype.setCullFace=function(value)
{if(this.activeState[CULL_FACE]===value|0){return;}
this.activeState[CULL_FACE]=value|0;var gl=this.gl;if(value)
{gl.enable(gl.CULL_FACE);}
else
{gl.disable(gl.CULL_FACE);}};WebGLState.prototype.setFrontFace=function(value)
{if(this.activeState[FRONT_FACE]===value|0){return;}
this.activeState[FRONT_FACE]=value|0;var gl=this.gl;if(value)
{gl.frontFace(gl.CW);}
else
{gl.frontFace(gl.CCW);}};WebGLState.prototype.resetAttributes=function()
{var i;for(i=0;i<this.attribState.tempAttribState.length;i++){this.attribState.tempAttribState[i]=0;}
for(i=0;i<this.attribState.attribState.length;i++){this.attribState.attribState[i]=0;}
var gl=this.gl;for(i=1;i<this.maxAttribs;i++)
{gl.disableVertexAttribArray(i);}};WebGLState.prototype.resetToDefault=function()
{if(this.nativeVaoExtension)
{this.nativeVaoExtension.bindVertexArrayOES(null);}
this.resetAttributes();for(var i=0;i<this.activeState.length;i++)
{this.activeState[i]=32;}
var gl=this.gl;gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);this.setState(this.defaultState);};module.exports=WebGLState;},{"./utils/mapWebGLBlendModesToPixi":130}],118:[function(require,module,exports){var extractUniformsFromSrc=require('./extractUniformsFromSrc'),utils=require('../../../utils'),CONST=require('../../../const'),SOURCE_KEY_MAP={};function Filter(vertexSrc,fragmentSrc,uniforms)
{this.vertexSrc=vertexSrc||Filter.defaultVertexSrc;this.fragmentSrc=fragmentSrc||Filter.defaultFragmentSrc;this.blendMode=CONST.BLEND_MODES.NORMAL;this.uniformData=uniforms||extractUniformsFromSrc(this.vertexSrc,this.fragmentSrc,'projectionMatrix|uSampler');this.uniforms={};for(var i in this.uniformData)
{this.uniforms[i]=this.uniformData[i].value;}
this.glShaders=[];if(!SOURCE_KEY_MAP[this.vertexSrc+this.fragmentSrc])
{SOURCE_KEY_MAP[this.vertexSrc+this.fragmentSrc]=utils.uid();}
this.glShaderKey=SOURCE_KEY_MAP[this.vertexSrc+this.fragmentSrc];this.padding=4;this.resolution=1;this.enabled=true;}
module.exports=Filter;Filter.prototype.apply=function(filterManager,input,output,clear)
{filterManager.applyFilter(this,input,output,clear);};Filter.defaultVertexSrc=['attribute vec2 aVertexPosition;','attribute vec2 aTextureCoord;','uniform mat3 projectionMatrix;','uniform mat3 filterMatrix;','varying vec2 vTextureCoord;','varying vec2 vFilterCoord;','void main(void){','   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);','   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;','   vTextureCoord = aTextureCoord ;','}'].join('\n');Filter.defaultFragmentSrc=['varying vec2 vTextureCoord;','varying vec2 vFilterCoord;','uniform sampler2D uSampler;','uniform sampler2D filterSampler;','void main(void){','   vec4 masky = texture2D(filterSampler, vFilterCoord);','   vec4 sample = texture2D(uSampler, vTextureCoord);','   vec4 color;','   if(mod(vFilterCoord.x, 1.0) > 0.5)','   {','     color = vec4(1.0, 0.0, 0.0, 1.0);','   }','   else','   {','     color = vec4(0.0, 1.0, 0.0, 1.0);','   }','   gl_FragColor = mix(sample, masky, 0.5);','   gl_FragColor *= sample.a;','}'].join('\n');},{"../../../const":78,"../../../utils":151,"./extractUniformsFromSrc":119}],119:[function(require,module,exports){var defaultValue=require('pixi-gl-core').shader.defaultValue;function extractUniformsFromSrc(vertexSrc,fragmentSrc,mask)
{var vertUniforms=extractUniformsFromString(vertexSrc,mask);var fragUniforms=extractUniformsFromString(fragmentSrc,mask);return Object.assign(vertUniforms,fragUniforms);}
function extractUniformsFromString(string)
{var maskRegex=new RegExp('^(projectionMatrix|uSampler|filterArea)$');var uniforms={};var nameSplit;var lines=string.replace(/\s+/g,' ').split(/\s*;\s*/);for(var i=0;i<lines.length;i++)
{var line=lines[i].trim();if(line.indexOf('uniform')>-1)
{var splitLine=line.split(' ');var type=splitLine[1];var name=splitLine[2];var size=1;if(name.indexOf('[')>-1)
{nameSplit=name.split(/\[|\]/);name=nameSplit[0];size*=Number(nameSplit[1]);}
if(!name.match(maskRegex))
{uniforms[name]={value:defaultValue(type,size),name:name,type:type};}}}
return uniforms;}
module.exports=extractUniformsFromSrc;},{"pixi-gl-core":7}],120:[function(require,module,exports){var math=require('../../../math');var calculateScreenSpaceMatrix=function(outputMatrix,filterArea,textureSize)
{var mappedMatrix=outputMatrix.identity();mappedMatrix.translate(filterArea.x/textureSize.width,filterArea.y/textureSize.height);mappedMatrix.scale(textureSize.width,textureSize.height);return mappedMatrix;};var calculateNormalizedScreenSpaceMatrix=function(outputMatrix,filterArea,textureSize)
{var mappedMatrix=outputMatrix.identity();mappedMatrix.translate(filterArea.x/textureSize.width,filterArea.y/textureSize.height);var translateScaleX=(textureSize.width/filterArea.width);var translateScaleY=(textureSize.height/filterArea.height);mappedMatrix.scale(translateScaleX,translateScaleY);return mappedMatrix;};var calculateSpriteMatrix=function(outputMatrix,filterArea,textureSize,sprite)
{var worldTransform=sprite.worldTransform.copy(math.Matrix.TEMP_MATRIX),texture=sprite._texture.baseTexture;var mappedMatrix=outputMatrix.identity();var ratio=textureSize.height/textureSize.width;mappedMatrix.translate(filterArea.x/textureSize.width,filterArea.y/textureSize.height);mappedMatrix.scale(1,ratio);var translateScaleX=(textureSize.width/texture.width);var translateScaleY=(textureSize.height/texture.height);worldTransform.tx/=texture.width*translateScaleX;worldTransform.ty/=texture.width*translateScaleX;worldTransform.invert();mappedMatrix.prepend(worldTransform);mappedMatrix.scale(1,1/ratio);mappedMatrix.scale(translateScaleX,translateScaleY);mappedMatrix.translate(sprite.anchor.x,sprite.anchor.y);return mappedMatrix;};module.exports={calculateScreenSpaceMatrix:calculateScreenSpaceMatrix,calculateNormalizedScreenSpaceMatrix:calculateNormalizedScreenSpaceMatrix,calculateSpriteMatrix:calculateSpriteMatrix};},{"../../../math":102}],121:[function(require,module,exports){var Filter=require('../Filter'),math=require('../../../../math');function SpriteMaskFilter(sprite)
{var maskMatrix=new math.Matrix();Filter.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n","#define GLSLIFY 1\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n");sprite.renderable=false;this.maskSprite=sprite;this.maskMatrix=maskMatrix;}
SpriteMaskFilter.prototype=Object.create(Filter.prototype);SpriteMaskFilter.prototype.constructor=SpriteMaskFilter;module.exports=SpriteMaskFilter;SpriteMaskFilter.prototype.apply=function(filterManager,input,output)
{var maskSprite=this.maskSprite;this.uniforms.mask=maskSprite._texture;this.uniforms.otherMatrix=filterManager.calculateSpriteMatrix(this.maskMatrix,maskSprite);this.uniforms.alpha=maskSprite.worldAlpha;filterManager.applyFilter(this,input,output);};},{"../../../../math":102,"../Filter":118}],122:[function(require,module,exports){var WebGLManager=require('./WebGLManager'),RenderTarget=require('../utils/RenderTarget'),Quad=require('../utils/Quad'),math=require('../../../math'),Shader=require('../../../Shader'),filterTransforms=require('../filters/filterTransforms'),bitTwiddle=require('bit-twiddle');var FilterState=function()
{this.renderTarget=null;this.sourceFrame=new math.Rectangle();this.destinationFrame=new math.Rectangle();this.filters=[];this.target=null;this.resolution=1;};function FilterManager(renderer)
{WebGLManager.call(this,renderer);this.gl=this.renderer.gl;this.quad=new Quad(this.gl,renderer.state.attribState);this.shaderCache={};this.pool={};this.filterData=null;}
FilterManager.prototype=Object.create(WebGLManager.prototype);FilterManager.prototype.constructor=FilterManager;module.exports=FilterManager;FilterManager.prototype.pushFilter=function(target,filters)
{var renderer=this.renderer;var filterData=this.filterData;if(!filterData)
{filterData=this.renderer._activeRenderTarget.filterStack;var filterState=new FilterState();filterState.sourceFrame=filterState.destinationFrame=this.renderer._activeRenderTarget.size;filterState.renderTarget=renderer._activeRenderTarget;this.renderer._activeRenderTarget.filterData=filterData={index:0,stack:[filterState]};this.filterData=filterData;}
var currentState=filterData.stack[++filterData.index];if(!currentState)
{currentState=filterData.stack[filterData.index]=new FilterState();}
var resolution=filters[0].resolution;var padding=filters[0].padding;var targetBounds=target.filterArea||target.getBounds(true);var sourceFrame=currentState.sourceFrame;var destinationFrame=currentState.destinationFrame;sourceFrame.x=((targetBounds.x*resolution)|0)/resolution;sourceFrame.y=((targetBounds.y*resolution)|0)/resolution;sourceFrame.width=((targetBounds.width*resolution)|0)/resolution;sourceFrame.height=((targetBounds.height*resolution)|0)/resolution;if(filterData.stack[0].renderTarget.transform)
{}
else
{sourceFrame.fit(filterData.stack[0].destinationFrame);}
sourceFrame.pad(padding);destinationFrame.width=sourceFrame.width;destinationFrame.height=sourceFrame.height;var renderTarget=this.getPotRenderTarget(renderer.gl,sourceFrame.width,sourceFrame.height,resolution);currentState.target=target;currentState.filters=filters;currentState.resolution=resolution;currentState.renderTarget=renderTarget;renderTarget.setFrame(destinationFrame,sourceFrame);renderer.bindRenderTarget(renderTarget);renderer.clear();};FilterManager.prototype.popFilter=function()
{var filterData=this.filterData;var lastState=filterData.stack[filterData.index-1];var currentState=filterData.stack[filterData.index];this.quad.map(currentState.renderTarget.size,currentState.sourceFrame).upload();var filters=currentState.filters;if(filters.length===1)
{filters[0].apply(this,currentState.renderTarget,lastState.renderTarget,false);this.freePotRenderTarget(currentState.renderTarget);}
else
{var flip=currentState.renderTarget;var flop=this.getPotRenderTarget(this.renderer.gl,currentState.sourceFrame.width,currentState.sourceFrame.height,1);flop.setFrame(currentState.destinationFrame,currentState.sourceFrame);for(var i=0;i<filters.length-1;i++)
{filters[i].apply(this,flip,flop,true);var t=flip;flip=flop;flop=t;}
filters[i].apply(this,flip,lastState.renderTarget,false);this.freePotRenderTarget(flip);this.freePotRenderTarget(flop);}
filterData.index--;if(filterData.index===0)
{this.filterData=null;}};FilterManager.prototype.applyFilter=function(filter,input,output,clear)
{var renderer=this.renderer;var shader=filter.glShaders[renderer.CONTEXT_UID];if(!shader)
{if(filter.glShaderKey)
{shader=this.shaderCache[filter.glShaderKey];if(!shader)
{shader=filter.glShaders[renderer.CONTEXT_UID]=this.shaderCache[filter.glShaderKey]=new Shader(this.gl,filter.vertexSrc,filter.fragmentSrc);}}
else
{shader=filter.glShaders[renderer.CONTEXT_UID]=new Shader(this.gl,filter.vertexSrc,filter.fragmentSrc);}
this.quad.initVao(shader);}
renderer.bindRenderTarget(output);if(clear)
{var gl=renderer.gl;gl.disable(gl.SCISSOR_TEST);renderer.clear();gl.enable(gl.SCISSOR_TEST);}
if(output===renderer.maskManager.scissorRenderTarget)
{renderer.maskManager.pushScissorMask(null,renderer.maskManager.scissorData);}
renderer.bindShader(shader);this.syncUniforms(shader,filter);input.texture.bind(0);renderer._activeTextureLocation=0;renderer.state.setBlendMode(filter.blendMode);this.quad.draw();};FilterManager.prototype.syncUniforms=function(shader,filter)
{var uniformData=filter.uniformData;var uniforms=filter.uniforms;var textureCount=1;var currentState;if(shader.uniforms.data.filterArea)
{currentState=this.filterData.stack[this.filterData.index];var filterArea=shader.uniforms.filterArea;filterArea[0]=currentState.renderTarget.size.width;filterArea[1]=currentState.renderTarget.size.height;filterArea[2]=currentState.sourceFrame.x;filterArea[3]=currentState.sourceFrame.y;shader.uniforms.filterArea=filterArea;}
if(shader.uniforms.data.filterClamp)
{currentState=this.filterData.stack[this.filterData.index];var filterClamp=shader.uniforms.filterClamp;filterClamp[0]=0.5/currentState.renderTarget.size.width;filterClamp[1]=0.5/currentState.renderTarget.size.height;filterClamp[2]=(currentState.sourceFrame.width-0.5)/currentState.renderTarget.size.width;filterClamp[3]=(currentState.sourceFrame.height-0.5)/currentState.renderTarget.size.height;shader.uniforms.filterClamp=filterClamp;}
var val;for(var i in uniformData)
{if(uniformData[i].type==='sampler2D')
{shader.uniforms[i]=textureCount;if(uniforms[i].baseTexture)
{this.renderer.bindTexture(uniforms[i].baseTexture,textureCount);}
else
{var gl=this.renderer.gl;this.renderer._activeTextureLocation=gl.TEXTURE0+textureCount;gl.activeTexture(gl.TEXTURE0+textureCount);uniforms[i].texture.bind();}
textureCount++;}
else if(uniformData[i].type==='mat3')
{if(uniforms[i].a!==undefined)
{shader.uniforms[i]=uniforms[i].toArray(true);}
else
{shader.uniforms[i]=uniforms[i];}}
else if(uniformData[i].type==='vec2')
{if(uniforms[i].x!==undefined)
{val=shader.uniforms[i]||new Float32Array(2);val[0]=uniforms[i].x;val[1]=uniforms[i].y;shader.uniforms[i]=val;}
else
{shader.uniforms[i]=uniforms[i];}}
else if(uniformData[i].type==='float')
{if(shader.uniforms.data[i].value!==uniformData[i])
{shader.uniforms[i]=uniforms[i];}}
else
{shader.uniforms[i]=uniforms[i];}}};FilterManager.prototype.getRenderTarget=function(clear,resolution)
{var currentState=this.filterData.stack[this.filterData.index];var renderTarget=this.getPotRenderTarget(this.renderer.gl,currentState.sourceFrame.width,currentState.sourceFrame.height,resolution||currentState.resolution);renderTarget.setFrame(currentState.destinationFrame,currentState.sourceFrame);return renderTarget;};FilterManager.prototype.returnRenderTarget=function(renderTarget)
{return this.freePotRenderTarget(renderTarget);};FilterManager.prototype.calculateScreenSpaceMatrix=function(outputMatrix)
{var currentState=this.filterData.stack[this.filterData.index];return filterTransforms.calculateScreenSpaceMatrix(outputMatrix,currentState.sourceFrame,currentState.renderTarget.size);};FilterManager.prototype.calculateNormalizedScreenSpaceMatrix=function(outputMatrix)
{var currentState=this.filterData.stack[this.filterData.index];return filterTransforms.calculateNormalizedScreenSpaceMatrix(outputMatrix,currentState.sourceFrame,currentState.renderTarget.size,currentState.destinationFrame);};FilterManager.prototype.calculateSpriteMatrix=function(outputMatrix,sprite)
{var currentState=this.filterData.stack[this.filterData.index];return filterTransforms.calculateSpriteMatrix(outputMatrix,currentState.sourceFrame,currentState.renderTarget.size,sprite);};FilterManager.prototype.destroy=function()
{this.shaderCache=[];this.emptyPool();};FilterManager.prototype.getPotRenderTarget=function(gl,minWidth,minHeight,resolution)
{minWidth=bitTwiddle.nextPow2(minWidth*resolution);minHeight=bitTwiddle.nextPow2(minHeight*resolution);var key=((minWidth&0xFFFF)<<16)|(minHeight&0xFFFF);if(!this.pool[key]){this.pool[key]=[];}
var renderTarget=this.pool[key].pop()||new RenderTarget(gl,minWidth,minHeight,null,1);renderTarget.resolution=resolution;renderTarget.defaultFrame.width=renderTarget.size.width=minWidth/resolution;renderTarget.defaultFrame.height=renderTarget.size.height=minHeight/resolution;return renderTarget;};FilterManager.prototype.emptyPool=function()
{for(var i in this.pool)
{var textures=this.pool[i];if(textures)
{for(var j=0;j<textures.length;j++)
{textures[j].destroy(true);}}}
this.pool={};};FilterManager.prototype.freePotRenderTarget=function(renderTarget)
{var minWidth=renderTarget.size.width*renderTarget.resolution;var minHeight=renderTarget.size.height*renderTarget.resolution;var key=((minWidth&0xFFFF)<<16)|(minHeight&0xFFFF);this.pool[key].push(renderTarget);};},{"../../../Shader":77,"../../../math":102,"../filters/filterTransforms":120,"../utils/Quad":127,"../utils/RenderTarget":128,"./WebGLManager":125,"bit-twiddle":30}],123:[function(require,module,exports){var WebGLManager=require('./WebGLManager'),AlphaMaskFilter=require('../filters/spriteMask/SpriteMaskFilter');function MaskManager(renderer)
{WebGLManager.call(this,renderer);this.scissor=false;this.scissorData=null;this.scissorRenderTarget=null;this.enableScissor=true;this.alphaMaskPool=[];this.alphaMaskIndex=0;}
MaskManager.prototype=Object.create(WebGLManager.prototype);MaskManager.prototype.constructor=MaskManager;module.exports=MaskManager;MaskManager.prototype.pushMask=function(target,maskData)
{if(maskData.texture)
{this.pushSpriteMask(target,maskData);}
else
{if(this.enableScissor&&!this.scissor&&!this.renderer.stencilManager.stencilMaskStack.length&&maskData.isFastRect())
{var matrix=maskData.worldTransform;var rot=Math.atan2(matrix.b,matrix.a);rot=Math.round(rot*(180/Math.PI));if(rot%90)
{this.pushStencilMask(maskData);}
else
{this.pushScissorMask(target,maskData);}}
else
{this.pushStencilMask(maskData);}}};MaskManager.prototype.popMask=function(target,maskData)
{if(maskData.texture)
{this.popSpriteMask(target,maskData);}
else
{if(this.enableScissor&&!this.renderer.stencilManager.stencilMaskStack.length)
{this.popScissorMask(target,maskData);}
else
{this.popStencilMask(target,maskData);}}};MaskManager.prototype.pushSpriteMask=function(target,maskData)
{var alphaMaskFilter=this.alphaMaskPool[this.alphaMaskIndex];if(!alphaMaskFilter)
{alphaMaskFilter=this.alphaMaskPool[this.alphaMaskIndex]=[new AlphaMaskFilter(maskData)];}
alphaMaskFilter[0].resolution=this.renderer.resolution;alphaMaskFilter[0].maskSprite=maskData;target.filterArea=maskData.getBounds(true);this.renderer.filterManager.pushFilter(target,alphaMaskFilter);this.alphaMaskIndex++;};MaskManager.prototype.popSpriteMask=function()
{this.renderer.filterManager.popFilter();this.alphaMaskIndex--;};MaskManager.prototype.pushStencilMask=function(maskData)
{this.renderer.currentRenderer.stop();this.renderer.stencilManager.pushStencil(maskData);};MaskManager.prototype.popStencilMask=function()
{this.renderer.currentRenderer.stop();this.renderer.stencilManager.popStencil();};MaskManager.prototype.pushScissorMask=function(target,maskData)
{maskData.renderable=true;var renderTarget=this.renderer._activeRenderTarget;var bounds=maskData.getBounds();bounds.fit(renderTarget.size);maskData.renderable=false;this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);var resolution=this.renderer.resolution;this.renderer.gl.scissor(bounds.x*resolution,(renderTarget.root?renderTarget.size.height-bounds.y-bounds.height:bounds.y)*resolution,bounds.width*resolution,bounds.height*resolution);this.scissorRenderTarget=renderTarget;this.scissorData=maskData;this.scissor=true;};MaskManager.prototype.popScissorMask=function()
{this.scissorRenderTarget=null;this.scissorData=null;this.scissor=false;var gl=this.renderer.gl;gl.disable(gl.SCISSOR_TEST);};},{"../filters/spriteMask/SpriteMaskFilter":121,"./WebGLManager":125}],124:[function(require,module,exports){var WebGLManager=require('./WebGLManager');function StencilManager(renderer)
{WebGLManager.call(this,renderer);this.stencilMaskStack=null;}
StencilManager.prototype=Object.create(WebGLManager.prototype);StencilManager.prototype.constructor=StencilManager;module.exports=StencilManager;StencilManager.prototype.setMaskStack=function(stencilMaskStack)
{this.stencilMaskStack=stencilMaskStack;var gl=this.renderer.gl;if(stencilMaskStack.length===0)
{gl.disable(gl.STENCIL_TEST);}
else
{gl.enable(gl.STENCIL_TEST);}};StencilManager.prototype.pushStencil=function(graphics)
{this.renderer.setObjectRenderer(this.renderer.plugins.graphics);this.renderer._activeRenderTarget.attachStencilBuffer();var gl=this.renderer.gl,sms=this.stencilMaskStack;if(sms.length===0)
{gl.enable(gl.STENCIL_TEST);gl.clear(gl.STENCIL_BUFFER_BIT);gl.stencilFunc(gl.ALWAYS,1,1);}
sms.push(graphics);gl.colorMask(false,false,false,false);gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);this.renderer.plugins.graphics.render(graphics);gl.colorMask(true,true,true,true);gl.stencilFunc(gl.NOTEQUAL,0,sms.length);gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);};StencilManager.prototype.popStencil=function()
{this.renderer.setObjectRenderer(this.renderer.plugins.graphics);var gl=this.renderer.gl,sms=this.stencilMaskStack;var graphics=sms.pop();if(sms.length===0)
{gl.disable(gl.STENCIL_TEST);}
else
{gl.colorMask(false,false,false,false);gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);this.renderer.plugins.graphics.render(graphics);gl.colorMask(true,true,true,true);gl.stencilFunc(gl.NOTEQUAL,0,sms.length);gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);}};StencilManager.prototype.destroy=function()
{WebGLManager.prototype.destroy.call(this);this.stencilMaskStack.stencilStack=null;};},{"./WebGLManager":125}],125:[function(require,module,exports){function WebGLManager(renderer)
{this.renderer=renderer;this.renderer.on('context',this.onContextChange,this);}
WebGLManager.prototype.constructor=WebGLManager;module.exports=WebGLManager;WebGLManager.prototype.onContextChange=function()
{};WebGLManager.prototype.destroy=function()
{this.renderer.off('context',this.onContextChange,this);this.renderer=null;};},{}],126:[function(require,module,exports){var WebGLManager=require('../managers/WebGLManager');function ObjectRenderer(renderer)
{WebGLManager.call(this,renderer);}
ObjectRenderer.prototype=Object.create(WebGLManager.prototype);ObjectRenderer.prototype.constructor=ObjectRenderer;module.exports=ObjectRenderer;ObjectRenderer.prototype.start=function()
{};ObjectRenderer.prototype.stop=function()
{this.flush();};ObjectRenderer.prototype.flush=function()
{};ObjectRenderer.prototype.render=function(object)
{};},{"../managers/WebGLManager":125}],127:[function(require,module,exports){var glCore=require('pixi-gl-core'),createIndicesForQuads=require('../../../utils/createIndicesForQuads');function Quad(gl,state)
{this.gl=gl;this.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]);this.uvs=new Float32Array([0,0,1,0,1,1,0,1]);this.interleaved=new Float32Array(8*2);for(var i=0;i<4;i++){this.interleaved[i*4]=this.vertices[(i*2)];this.interleaved[(i*4)+1]=this.vertices[(i*2)+1];this.interleaved[(i*4)+2]=this.uvs[i*2];this.interleaved[(i*4)+3]=this.uvs[(i*2)+1];}
this.indices=createIndicesForQuads(1);this.vertexBuffer=glCore.GLBuffer.createVertexBuffer(gl,this.interleaved,gl.STATIC_DRAW);this.indexBuffer=glCore.GLBuffer.createIndexBuffer(gl,this.indices,gl.STATIC_DRAW);this.vao=new glCore.VertexArrayObject(gl,state);}
Quad.prototype.constructor=Quad;Quad.prototype.initVao=function(shader)
{this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer,shader.attributes.aVertexPosition,this.gl.FLOAT,false,4*4,0).addAttribute(this.vertexBuffer,shader.attributes.aTextureCoord,this.gl.FLOAT,false,4*4,2*4);};Quad.prototype.map=function(targetTextureFrame,destinationFrame)
{var x=0;var y=0;this.uvs[0]=x;this.uvs[1]=y;this.uvs[2]=x+destinationFrame.width/targetTextureFrame.width;this.uvs[3]=y;this.uvs[4]=x+destinationFrame.width/targetTextureFrame.width;this.uvs[5]=y+destinationFrame.height/targetTextureFrame.height;this.uvs[6]=x;this.uvs[7]=y+destinationFrame.height/targetTextureFrame.height;x=destinationFrame.x;y=destinationFrame.y;this.vertices[0]=x;this.vertices[1]=y;this.vertices[2]=x+destinationFrame.width;this.vertices[3]=y;this.vertices[4]=x+destinationFrame.width;this.vertices[5]=y+destinationFrame.height;this.vertices[6]=x;this.vertices[7]=y+destinationFrame.height;return this;};Quad.prototype.draw=function()
{this.vao.bind().draw(this.gl.TRIANGLES,6,0).unbind();return this;};Quad.prototype.upload=function()
{for(var i=0;i<4;i++){this.interleaved[i*4]=this.vertices[(i*2)];this.interleaved[(i*4)+1]=this.vertices[(i*2)+1];this.interleaved[(i*4)+2]=this.uvs[i*2];this.interleaved[(i*4)+3]=this.uvs[(i*2)+1];}
this.vertexBuffer.upload(this.interleaved);return this;};Quad.prototype.destroy=function()
{var gl=this.gl;gl.deleteBuffer(this.vertexBuffer);gl.deleteBuffer(this.indexBuffer);};module.exports=Quad;},{"../../../utils/createIndicesForQuads":149,"pixi-gl-core":7}],128:[function(require,module,exports){var math=require('../../../math'),CONST=require('../../../const'),GLFramebuffer=require('pixi-gl-core').GLFramebuffer;var RenderTarget=function(gl,width,height,scaleMode,resolution,root)
{this.gl=gl;this.frameBuffer=null;this.texture=null;this.clearColor=[0,0,0,0];this.size=new math.Rectangle(0,0,1,1);this.resolution=resolution||CONST.RESOLUTION;this.projectionMatrix=new math.Matrix();this.transform=null;this.frame=null;this.defaultFrame=new math.Rectangle();this.destinationFrame=null;this.sourceFrame=null;this.stencilBuffer=null;this.stencilMaskStack=[];this.filterData=null;this.scaleMode=scaleMode||CONST.SCALE_MODES.DEFAULT;this.root=root;if(!this.root)
{this.frameBuffer=GLFramebuffer.createRGBA(gl,100,100);if(this.scaleMode===CONST.SCALE_MODES.NEAREST)
{this.frameBuffer.texture.enableNearestScaling();}
else
{this.frameBuffer.texture.enableLinearScaling();}
this.texture=this.frameBuffer.texture;}
else
{this.frameBuffer=new GLFramebuffer(gl,100,100);this.frameBuffer.framebuffer=null;}
this.setFrame();this.resize(width,height);};RenderTarget.prototype.constructor=RenderTarget;module.exports=RenderTarget;RenderTarget.prototype.clear=function(clearColor)
{var cc=clearColor||this.clearColor;this.frameBuffer.clear(cc[0],cc[1],cc[2],cc[3]);};RenderTarget.prototype.attachStencilBuffer=function()
{if(!this.root)
{this.frameBuffer.enableStencil();}};RenderTarget.prototype.setFrame=function(destinationFrame,sourceFrame)
{this.destinationFrame=destinationFrame||this.destinationFrame||this.defaultFrame;this.sourceFrame=sourceFrame||this.sourceFrame||destinationFrame;};RenderTarget.prototype.activate=function()
{var gl=this.gl;this.frameBuffer.bind();this.calculateProjection(this.destinationFrame,this.sourceFrame);if(this.transform)
{this.projectionMatrix.append(this.transform);}
if(this.destinationFrame!==this.sourceFrame)
{gl.enable(gl.SCISSOR_TEST);gl.scissor(this.destinationFrame.x|0,this.destinationFrame.y|0,(this.destinationFrame.width*this.resolution)|0,(this.destinationFrame.height*this.resolution)|0);}
else
{gl.disable(gl.SCISSOR_TEST);}
gl.viewport(this.destinationFrame.x|0,this.destinationFrame.y|0,(this.destinationFrame.width*this.resolution)|0,(this.destinationFrame.height*this.resolution)|0);};RenderTarget.prototype.calculateProjection=function(destinationFrame,sourceFrame)
{var pm=this.projectionMatrix;sourceFrame=sourceFrame||destinationFrame;pm.identity();if(!this.root)
{pm.a=1/destinationFrame.width*2;pm.d=1/destinationFrame.height*2;pm.tx=-1-sourceFrame.x*pm.a;pm.ty=-1-sourceFrame.y*pm.d;}
else
{pm.a=1/destinationFrame.width*2;pm.d=-1/destinationFrame.height*2;pm.tx=-1-sourceFrame.x*pm.a;pm.ty=1-sourceFrame.y*pm.d;}};RenderTarget.prototype.resize=function(width,height)
{width=width|0;height=height|0;if(this.size.width===width&&this.size.height===height)
{return;}
this.size.width=width;this.size.height=height;this.defaultFrame.width=width;this.defaultFrame.height=height;this.frameBuffer.resize(width*this.resolution,height*this.resolution);var projectionFrame=this.frame||this.size;this.calculateProjection(projectionFrame);};RenderTarget.prototype.destroy=function()
{this.frameBuffer.destroy();this.frameBuffer=null;this.texture=null;};},{"../../../const":78,"../../../math":102,"pixi-gl-core":7}],129:[function(require,module,exports){var glCore=require('pixi-gl-core');var fragTemplate=['precision mediump float;','void main(void){','float test = 0.1;','%forloop%','gl_FragColor = vec4(0.0);','}'].join('\n');var checkMaxIfStatmentsInShader=function(maxIfs,gl)
{var createTempContext=!gl;if(createTempContext)
{var tinyCanvas=document.createElement('canvas');tinyCanvas.width=1;tinyCanvas.height=1;gl=glCore.createContext(tinyCanvas);}
var shader=gl.createShader(gl.FRAGMENT_SHADER);while(true)
{var fragmentSrc=fragTemplate.replace(/%forloop%/gi,generateIfTestSrc(maxIfs));gl.shaderSource(shader,fragmentSrc);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))
{maxIfs=(maxIfs/2)|0;}
else
{break;}}
if(createTempContext)
{if(gl.getExtension('WEBGL_lose_context'))
{gl.getExtension('WEBGL_lose_context').loseContext();}}
return maxIfs;};function generateIfTestSrc(maxIfs)
{var src='';for(var i=0;i<maxIfs;i++)
{if(i>0)
{src+='\nelse ';}
if(i<maxIfs-1)
{src+='if(test == '+i+'.0){}';}}
return src;}
module.exports=checkMaxIfStatmentsInShader;},{"pixi-gl-core":7}],130:[function(require,module,exports){var CONST=require('../../../const');function mapWebGLBlendModesToPixi(gl,array)
{array=array||[];array[CONST.BLEND_MODES.NORMAL]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.ADD]=[gl.ONE,gl.DST_ALPHA];array[CONST.BLEND_MODES.MULTIPLY]=[gl.DST_COLOR,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.SCREEN]=[gl.ONE,gl.ONE_MINUS_SRC_COLOR];array[CONST.BLEND_MODES.OVERLAY]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.DARKEN]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.LIGHTEN]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.COLOR_DODGE]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.COLOR_BURN]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.HARD_LIGHT]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.SOFT_LIGHT]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.DIFFERENCE]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.EXCLUSION]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.HUE]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.SATURATION]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.COLOR]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];array[CONST.BLEND_MODES.LUMINOSITY]=[gl.ONE,gl.ONE_MINUS_SRC_ALPHA];return array;}
module.exports=mapWebGLBlendModesToPixi;},{"../../../const":78}],131:[function(require,module,exports){var CONST=require('../../../const');function mapWebGLDrawModesToPixi(gl,object)
{object=object||{};object[CONST.DRAW_MODES.POINTS]=gl.POINTS;object[CONST.DRAW_MODES.LINES]=gl.LINES;object[CONST.DRAW_MODES.LINE_LOOP]=gl.LINE_LOOP;object[CONST.DRAW_MODES.LINE_STRIP]=gl.LINE_STRIP;object[CONST.DRAW_MODES.TRIANGLES]=gl.TRIANGLES;object[CONST.DRAW_MODES.TRIANGLE_STRIP]=gl.TRIANGLE_STRIP;object[CONST.DRAW_MODES.TRIANGLE_FAN]=gl.TRIANGLE_FAN;}
module.exports=mapWebGLDrawModesToPixi;},{"../../../const":78}],132:[function(require,module,exports){function validateContext(gl)
{var attributes=gl.getContextAttributes();if(!attributes.stencil)
{console.warn('Provided WebGL context does not have a stencil buffer, masks may not render correctly');}}
module.exports=validateContext;},{}],133:[function(require,module,exports){var math=require('../math'),Texture=require('../textures/Texture'),Container=require('../display/Container'),utils=require('../utils'),CONST=require('../const'),tempPoint=new math.Point();function Sprite(texture)
{Container.call(this);this.anchor=new math.ObservablePoint(this.onAnchorUpdate,this);this._texture=null;this._width=0;this._height=0;this._tint=null;this._tintRGB=null;this.tint=0xFFFFFF;this.blendMode=CONST.BLEND_MODES.NORMAL;this.shader=null;this.cachedTint=0xFFFFFF;this.texture=texture||Texture.EMPTY;this.vertexData=new Float32Array(8);this.vertexTrimmedData=null;this._transformID=-1;this._textureID=-1;}
Sprite.prototype=Object.create(Container.prototype);Sprite.prototype.constructor=Sprite;module.exports=Sprite;Object.defineProperties(Sprite.prototype,{width:{get:function()
{return Math.abs(this.scale.x)*this.texture.orig.width;},set:function(value)
{var sign=utils.sign(this.scale.x)||1;this.scale.x=sign*value/this.texture.orig.width;this._width=value;}},height:{get:function()
{return Math.abs(this.scale.y)*this.texture.orig.height;},set:function(value)
{var sign=utils.sign(this.scale.y)||1;this.scale.y=sign*value/this.texture.orig.height;this._height=value;}},tint:{get:function()
{return this._tint;},set:function(value)
{this._tint=value;this._tintRGB=(value>>16)+(value&0xff00)+((value&0xff)<<16);}},texture:{get:function()
{return this._texture;},set:function(value)
{if(this._texture===value)
{return;}
this._texture=value;this.cachedTint=0xFFFFFF;this._textureID=-1;if(value)
{if(value.baseTexture.hasLoaded)
{this._onTextureUpdate();}
else
{value.once('update',this._onTextureUpdate,this);}}}}});Sprite.prototype._onTextureUpdate=function()
{this._textureID=-1;if(this._width)
{this.scale.x=utils.sign(this.scale.x)*this._width/this.texture.orig.width;}
if(this._height)
{this.scale.y=utils.sign(this.scale.y)*this._height/this.texture.orig.height;}};Sprite.prototype.onAnchorUpdate=function()
{this._transformID=-1;};Sprite.prototype.calculateVertices=function()
{if(this._transformID===this.transform._worldID&&this._textureID===this._texture._updateID)
{return;}
this._transformID=this.transform._worldID;this._textureID=this._texture._updateID;var texture=this._texture,wt=this.transform.worldTransform,a=wt.a,b=wt.b,c=wt.c,d=wt.d,tx=wt.tx,ty=wt.ty,vertexData=this.vertexData,w0,w1,h0,h1,trim=texture.trim,orig=texture.orig;if(trim)
{w1=trim.x-this.anchor._x*orig.width;w0=w1+trim.width;h1=trim.y-this.anchor._y*orig.height;h0=h1+trim.height;}
else
{w0=orig.width*(1-this.anchor._x);w1=orig.width*-this.anchor._x;h0=orig.height*(1-this.anchor._y);h1=orig.height*-this.anchor._y;}
vertexData[0]=a*w1+c*h1+tx;vertexData[1]=d*h1+b*w1+ty;vertexData[2]=a*w0+c*h1+tx;vertexData[3]=d*h1+b*w0+ty;vertexData[4]=a*w0+c*h0+tx;vertexData[5]=d*h0+b*w0+ty;vertexData[6]=a*w1+c*h0+tx;vertexData[7]=d*h0+b*w1+ty;};Sprite.prototype.calculateTrimmedVertices=function()
{if(!this.vertexTrimmedData)
{this.vertexTrimmedData=new Float32Array(8);}
var texture=this._texture,vertexData=this.vertexTrimmedData,orig=texture.orig;var wt=this.transform.worldTransform,a=wt.a,b=wt.b,c=wt.c,d=wt.d,tx=wt.tx,ty=wt.ty,w0,w1,h0,h1;w0=(orig.width)*(1-this.anchor._x);w1=(orig.width)*-this.anchor._x;h0=orig.height*(1-this.anchor._y);h1=orig.height*-this.anchor._y;vertexData[0]=a*w1+c*h1+tx;vertexData[1]=d*h1+b*w1+ty;vertexData[2]=a*w0+c*h1+tx;vertexData[3]=d*h1+b*w0+ty;vertexData[4]=a*w0+c*h0+tx;vertexData[5]=d*h0+b*w0+ty;vertexData[6]=a*w1+c*h0+tx;vertexData[7]=d*h0+b*w1+ty;};Sprite.prototype._renderWebGL=function(renderer)
{this.calculateVertices();renderer.setObjectRenderer(renderer.plugins.sprite);renderer.plugins.sprite.render(this);};Sprite.prototype._renderCanvas=function(renderer)
{renderer.plugins.sprite.render(this);};Sprite.prototype._calculateBounds=function()
{var trim=this._texture.trim,orig=this._texture.orig;if(!trim||trim.width===orig.width&&trim.height===orig.height){this.calculateVertices();this._bounds.addQuad(this.vertexData);}
else
{this.calculateTrimmedVertices();this._bounds.addQuad(this.vertexTrimmedData);}};Sprite.prototype.getLocalBounds=function(rect)
{if(this.children.length===0)
{this._bounds.minX=-this._texture.orig.width*this.anchor._x;this._bounds.minY=-this._texture.orig.height*this.anchor._y;this._bounds.maxX=this._texture.orig.width;this._bounds.maxY=this._texture.orig.height;if(!rect)
{if(!this._localBoundsRect)
{this._localBoundsRect=new math.Rectangle();}
rect=this._localBoundsRect;}
return this._bounds.getRectangle(rect);}
else
{return Container.prototype.getLocalBounds.call(this,rect);}};Sprite.prototype.containsPoint=function(point)
{this.worldTransform.applyInverse(point,tempPoint);var width=this._texture.orig.width;var height=this._texture.orig.height;var x1=-width*this.anchor.x;var y1;if(tempPoint.x>x1&&tempPoint.x<x1+width)
{y1=-height*this.anchor.y;if(tempPoint.y>y1&&tempPoint.y<y1+height)
{return true;}}
return false;};Sprite.prototype.destroy=function(options)
{Container.prototype.destroy.call(this,options);this.anchor=null;var destroyTexture=typeof options==='boolean'?options:options&&options.texture;if(destroyTexture)
{var destroyBaseTexture=typeof options==='boolean'?options:options&&options.baseTexture;this._texture.destroy(!!destroyBaseTexture);}
this._texture=null;this.shader=null;};Sprite.from=function(source)
{return new Sprite(Texture.from(source));};Sprite.fromFrame=function(frameId)
{var texture=utils.TextureCache[frameId];if(!texture)
{throw new Error('The frameId "'+frameId+'" does not exist in the texture cache');}
return new Sprite(texture);};Sprite.fromImage=function(imageId,crossorigin,scaleMode)
{return new Sprite(Texture.fromImage(imageId,crossorigin,scaleMode));};},{"../const":78,"../display/Container":80,"../math":102,"../textures/Texture":144,"../utils":151}],134:[function(require,module,exports){var CanvasRenderer=require('../../renderers/canvas/CanvasRenderer'),CONST=require('../../const'),math=require('../../math'),canvasRenderWorldTransform=new math.Matrix(),CanvasTinter=require('./CanvasTinter');function CanvasSpriteRenderer(renderer)
{this.renderer=renderer;}
CanvasSpriteRenderer.prototype.constructor=CanvasSpriteRenderer;module.exports=CanvasSpriteRenderer;CanvasRenderer.registerPlugin('sprite',CanvasSpriteRenderer);CanvasSpriteRenderer.prototype.render=function(sprite)
{var texture=sprite._texture,renderer=this.renderer,wt=sprite.transform.worldTransform,dx,dy,width=texture._frame.width,height=texture._frame.height;if(texture.orig.width<=0||texture.orig.height<=0||!texture.baseTexture.source)
{return;}
renderer.setBlendMode(sprite.blendMode);if(texture.valid)
{renderer.context.globalAlpha=sprite.worldAlpha;var smoothingEnabled=texture.baseTexture.scaleMode===CONST.SCALE_MODES.LINEAR;if(renderer.smoothProperty&&renderer.context[renderer.smoothProperty]!==smoothingEnabled)
{renderer.context[renderer.smoothProperty]=smoothingEnabled;}
if(texture.trim){dx=texture.trim.width/2+texture.trim.x-sprite.anchor.x*texture.orig.width;dy=texture.trim.height/2+texture.trim.y-sprite.anchor.y*texture.orig.height;}else{dx=(0.5-sprite.anchor.x)*texture.orig.width;dy=(0.5-sprite.anchor.y)*texture.orig.height;}
if(texture.rotate){wt.copy(canvasRenderWorldTransform);wt=canvasRenderWorldTransform;math.GroupD8.matrixAppendRotationInv(wt,texture.rotate,dx,dy);dx=0;dy=0;}
dx-=width/2;dy-=height/2;if(renderer.roundPixels)
{renderer.context.setTransform(wt.a,wt.b,wt.c,wt.d,(wt.tx*renderer.resolution)|0,(wt.ty*renderer.resolution)|0);dx=dx|0;dy=dy|0;}
else
{renderer.context.setTransform(wt.a,wt.b,wt.c,wt.d,wt.tx*renderer.resolution,wt.ty*renderer.resolution);}
var resolution=texture.baseTexture.resolution;if(sprite.tint!==0xFFFFFF)
{if(sprite.cachedTint!==sprite.tint)
{sprite.cachedTint=sprite.tint;sprite.tintedTexture=CanvasTinter.getTintedTexture(sprite,sprite.tint);}
renderer.context.drawImage(sprite.tintedTexture,0,0,width*resolution,height*resolution,dx*renderer.resolution,dy*renderer.resolution,width*renderer.resolution,height*renderer.resolution);}
else
{renderer.context.drawImage(texture.baseTexture.source,texture._frame.x*resolution,texture._frame.y*resolution,width*resolution,height*resolution,dx*renderer.resolution,dy*renderer.resolution,width*renderer.resolution,height*renderer.resolution);}}};CanvasSpriteRenderer.prototype.destroy=function(){this.renderer=null;};},{"../../const":78,"../../math":102,"../../renderers/canvas/CanvasRenderer":109,"./CanvasTinter":135}],135:[function(require,module,exports){var utils=require('../../utils'),canUseNewCanvasBlendModes=require('../../renderers/canvas/utils/canUseNewCanvasBlendModes');var CanvasTinter=module.exports={getTintedTexture:function(sprite,color)
{var texture=sprite.texture;color=CanvasTinter.roundColor(color);var stringColor='#'+('00000'+(color|0).toString(16)).substr(-6);texture.tintCache=texture.tintCache||{};if(texture.tintCache[stringColor])
{return texture.tintCache[stringColor];}
var canvas=CanvasTinter.canvas||document.createElement('canvas');CanvasTinter.tintMethod(texture,color,canvas);if(CanvasTinter.convertTintToImage)
{var tintImage=new Image();tintImage.src=canvas.toDataURL();texture.tintCache[stringColor]=tintImage;}
else
{texture.tintCache[stringColor]=canvas;CanvasTinter.canvas=null;}
return canvas;},tintWithMultiply:function(texture,color,canvas)
{var context=canvas.getContext('2d');var crop=texture._frame.clone();var resolution=texture.baseTexture.resolution;crop.x*=resolution;crop.y*=resolution;crop.width*=resolution;crop.height*=resolution;canvas.width=crop.width;canvas.height=crop.height;context.fillStyle='#'+('00000'+(color|0).toString(16)).substr(-6);context.fillRect(0,0,crop.width,crop.height);context.globalCompositeOperation='multiply';context.drawImage(texture.baseTexture.source,crop.x,crop.y,crop.width,crop.height,0,0,crop.width,crop.height);context.globalCompositeOperation='destination-atop';context.drawImage(texture.baseTexture.source,crop.x,crop.y,crop.width,crop.height,0,0,crop.width,crop.height);},tintWithOverlay:function(texture,color,canvas)
{var context=canvas.getContext('2d');var crop=texture._frame.clone();var resolution=texture.baseTexture.resolution;crop.x*=resolution;crop.y*=resolution;crop.width*=resolution;crop.height*=resolution;canvas.width=crop.width;canvas.height=crop.height;context.globalCompositeOperation='copy';context.fillStyle='#'+('00000'+(color|0).toString(16)).substr(-6);context.fillRect(0,0,crop.width,crop.height);context.globalCompositeOperation='destination-atop';context.drawImage(texture.baseTexture.source,crop.x,crop.y,crop.width,crop.height,0,0,crop.width,crop.height);},tintWithPerPixel:function(texture,color,canvas)
{var context=canvas.getContext('2d');var crop=texture._frame.clone();var resolution=texture.baseTexture.resolution;crop.x*=resolution;crop.y*=resolution;crop.width*=resolution;crop.height*=resolution;canvas.width=crop.width;canvas.height=crop.height;context.globalCompositeOperation='copy';context.drawImage(texture.baseTexture.source,crop.x,crop.y,crop.width,crop.height,0,0,crop.width,crop.height);var rgbValues=utils.hex2rgb(color);var r=rgbValues[0],g=rgbValues[1],b=rgbValues[2];var pixelData=context.getImageData(0,0,crop.width,crop.height);var pixels=pixelData.data;for(var i=0;i<pixels.length;i+=4)
{pixels[i+0]*=r;pixels[i+1]*=g;pixels[i+2]*=b;}
context.putImageData(pixelData,0,0);},roundColor:function(color)
{var step=CanvasTinter.cacheStepsPerColorChannel;var rgbValues=utils.hex2rgb(color);rgbValues[0]=Math.min(255,(rgbValues[0]/step)*step);rgbValues[1]=Math.min(255,(rgbValues[1]/step)*step);rgbValues[2]=Math.min(255,(rgbValues[2]/step)*step);return utils.rgb2hex(rgbValues);},cacheStepsPerColorChannel:8,convertTintToImage:false,canUseMultiply:canUseNewCanvasBlendModes(),tintMethod:0};CanvasTinter.tintMethod=CanvasTinter.canUseMultiply?CanvasTinter.tintWithMultiply:CanvasTinter.tintWithPerPixel;},{"../../renderers/canvas/utils/canUseNewCanvasBlendModes":112,"../../utils":151}],136:[function(require,module,exports){var Buffer=function(size)
{this.vertices=new ArrayBuffer(size);this.float32View=new Float32Array(this.vertices);this.uint32View=new Uint32Array(this.vertices);};module.exports=Buffer;Buffer.prototype.destroy=function(){this.vertices=null;this.positions=null;this.uvs=null;this.colors=null;};},{}],137:[function(require,module,exports){var ObjectRenderer=require('../../renderers/webgl/utils/ObjectRenderer'),WebGLRenderer=require('../../renderers/webgl/WebGLRenderer'),createIndicesForQuads=require('../../utils/createIndicesForQuads'),generateMultiTextureShader=require('./generateMultiTextureShader'),checkMaxIfStatmentsInShader=require('../../renderers/webgl/utils/checkMaxIfStatmentsInShader'),Buffer=require('./BatchBuffer'),CONST=require('../../const'),glCore=require('pixi-gl-core'),bitTwiddle=require('bit-twiddle');var TICK=0;function SpriteRenderer(renderer)
{ObjectRenderer.call(this,renderer);this.vertSize=5;this.vertByteSize=this.vertSize*4;this.size=CONST.SPRITE_BATCH_SIZE;this.buffers=[];for(var i=1;i<=bitTwiddle.nextPow2(this.size);i*=2){var numVertsTemp=i*4*this.vertByteSize;this.buffers.push(new Buffer(numVertsTemp));}
this.indices=createIndicesForQuads(this.size);this.shaders=null;this.currentIndex=0;TICK=0;this.groups=[];for(var k=0;k<this.size;k++)
{this.groups[k]={textures:[],textureCount:0,ids:[],size:0,start:0,blend:0};}
this.sprites=[];this.vertexBuffers=[];this.vaos=[];this.vaoMax=2;this.vertexCount=0;this.renderer.on('prerender',this.onPrerender,this);}
SpriteRenderer.prototype=Object.create(ObjectRenderer.prototype);SpriteRenderer.prototype.constructor=SpriteRenderer;module.exports=SpriteRenderer;WebGLRenderer.registerPlugin('sprite',SpriteRenderer);SpriteRenderer.prototype.onContextChange=function()
{var gl=this.renderer.gl;this.MAX_TEXTURES=Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),CONST.SPRITE_MAX_TEXTURES);this.MAX_TEXTURES=checkMaxIfStatmentsInShader(this.MAX_TEXTURES,gl);this.shaders=new Array(this.MAX_TEXTURES);this.shaders[0]=generateMultiTextureShader(gl,1);this.shaders[1]=generateMultiTextureShader(gl,2);this.indexBuffer=glCore.GLBuffer.createIndexBuffer(gl,this.indices,gl.STATIC_DRAW);var shader=this.shaders[1];for(var i=0;i<this.vaoMax;i++){this.vertexBuffers[i]=glCore.GLBuffer.createVertexBuffer(gl,null,gl.STREAM_DRAW);this.vaos[i]=this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[i],shader.attributes.aVertexPosition,gl.FLOAT,false,this.vertByteSize,0).addAttribute(this.vertexBuffers[i],shader.attributes.aTextureCoord,gl.UNSIGNED_SHORT,true,this.vertByteSize,2*4).addAttribute(this.vertexBuffers[i],shader.attributes.aColor,gl.UNSIGNED_BYTE,true,this.vertByteSize,3*4).addAttribute(this.vertexBuffers[i],shader.attributes.aTextureId,gl.FLOAT,false,this.vertByteSize,4*4);}
this.vao=this.vaos[0];this.currentBlendMode=99999;};SpriteRenderer.prototype.onPrerender=function()
{this.vertexCount=0;};SpriteRenderer.prototype.render=function(sprite)
{if(this.currentIndex>=this.size)
{this.flush();}
if(!sprite.texture._uvs)
{return;}
this.sprites[this.currentIndex++]=sprite;};SpriteRenderer.prototype.flush=function()
{if(this.currentIndex===0){return;}
var gl=this.renderer.gl;var np2=bitTwiddle.nextPow2(this.currentIndex);var log2=bitTwiddle.log2(np2);var buffer=this.buffers[log2];var sprites=this.sprites;var groups=this.groups;var float32View=buffer.float32View;var uint32View=buffer.uint32View;var index=0;var nextTexture;var currentTexture;var groupCount=1;var textureCount=0;var currentGroup=groups[0];var vertexData;var tint;var uvs;var textureId;var blendMode=sprites[0].blendMode;var shader;currentGroup.textureCount=0;currentGroup.start=0;currentGroup.blend=blendMode;TICK++;for(var i=0;i<this.currentIndex;i++)
{var sprite=sprites[i];nextTexture=sprite._texture.baseTexture;if(blendMode!==sprite.blendMode)
{blendMode=sprite.blendMode;currentTexture=null;textureCount=this.MAX_TEXTURES;TICK++;}
if(currentTexture!==nextTexture)
{currentTexture=nextTexture;if(nextTexture._enabled!==TICK)
{if(textureCount===this.MAX_TEXTURES)
{TICK++;textureCount=0;currentGroup.size=i-currentGroup.start;currentGroup=groups[groupCount++];currentGroup.textureCount=0;currentGroup.blend=blendMode;currentGroup.start=i;}
nextTexture._enabled=TICK;nextTexture._id=textureCount;currentGroup.textures[currentGroup.textureCount++]=nextTexture;textureCount++;}}
vertexData=sprite.vertexData;tint=sprite._tintRGB+(sprite.worldAlpha*255<<24);uvs=sprite._texture._uvs.uvsUint32;textureId=nextTexture._id;if(this.renderer.roundPixels)
{var resolution=this.renderer.resolution;float32View[index]=((vertexData[0]*resolution)|0)/resolution;float32View[index+1]=((vertexData[1]*resolution)|0)/resolution;float32View[index+5]=((vertexData[2]*resolution)|0)/resolution;float32View[index+6]=((vertexData[3]*resolution)|0)/resolution;float32View[index+10]=((vertexData[4]*resolution)|0)/resolution;float32View[index+11]=((vertexData[5]*resolution)|0)/resolution;float32View[index+15]=((vertexData[6]*resolution)|0)/resolution;float32View[index+16]=((vertexData[7]*resolution)|0)/resolution;}
else
{float32View[index]=vertexData[0];float32View[index+1]=vertexData[1];float32View[index+5]=vertexData[2];float32View[index+6]=vertexData[3];float32View[index+10]=vertexData[4];float32View[index+11]=vertexData[5];float32View[index+15]=vertexData[6];float32View[index+16]=vertexData[7];}
uint32View[index+2]=uvs[0];uint32View[index+7]=uvs[1];uint32View[index+12]=uvs[2];uint32View[index+17]=uvs[3];uint32View[index+3]=uint32View[index+8]=uint32View[index+13]=uint32View[index+18]=tint;float32View[index+4]=float32View[index+9]=float32View[index+14]=float32View[index+19]=textureId;index+=20;}
currentGroup.size=i-currentGroup.start;this.vertexCount++;if(this.vaoMax<=this.vertexCount)
{this.vaoMax++;shader=this.shaders[1];this.vertexBuffers[this.vertexCount]=glCore.GLBuffer.createVertexBuffer(gl,null,gl.STREAM_DRAW);this.vaos[this.vertexCount]=this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[this.vertexCount],shader.attributes.aVertexPosition,gl.FLOAT,false,this.vertByteSize,0).addAttribute(this.vertexBuffers[this.vertexCount],shader.attributes.aTextureCoord,gl.UNSIGNED_SHORT,true,this.vertByteSize,2*4).addAttribute(this.vertexBuffers[this.vertexCount],shader.attributes.aColor,gl.UNSIGNED_BYTE,true,this.vertByteSize,3*4).addAttribute(this.vertexBuffers[this.vertexCount],shader.attributes.aTextureId,gl.FLOAT,false,this.vertByteSize,4*4);}
this.vertexBuffers[this.vertexCount].upload(buffer.vertices,0);this.vao=this.vaos[this.vertexCount].bind();for(i=0;i<groupCount;i++){var group=groups[i];var groupTextureCount=group.textureCount;shader=this.shaders[groupTextureCount-1];if(!shader)
{shader=this.shaders[groupTextureCount-1]=generateMultiTextureShader(gl,groupTextureCount);}
this.renderer.bindShader(shader);for(var j=0;j<groupTextureCount;j++)
{this.renderer.bindTexture(group.textures[j],j);}
this.renderer.state.setBlendMode(group.blend);gl.drawElements(gl.TRIANGLES,group.size*6,gl.UNSIGNED_SHORT,group.start*6*2);}
this.currentIndex=0;};SpriteRenderer.prototype.start=function()
{};SpriteRenderer.prototype.stop=function()
{this.flush();this.vao.unbind();};SpriteRenderer.prototype.destroy=function()
{for(var i=0;i<this.vaoMax;i++){this.vertexBuffers[i].destroy();this.vaos[i].destroy();}
this.indexBuffer.destroy();this.renderer.off('prerender',this.onPrerender,this);ObjectRenderer.prototype.destroy.call(this);for(i=0;i<this.shaders.length;i++){if(this.shaders[i])
{this.shaders[i].destroy();}}
this.vertexBuffers=null;this.vaos=null;this.indexBuffer=null;this.indices=null;this.sprites=null;for(i=0;i<this.buffers.length;i++){this.buffers[i].destroy();}};},{"../../const":78,"../../renderers/webgl/WebGLRenderer":116,"../../renderers/webgl/utils/ObjectRenderer":126,"../../renderers/webgl/utils/checkMaxIfStatmentsInShader":129,"../../utils/createIndicesForQuads":149,"./BatchBuffer":136,"./generateMultiTextureShader":138,"bit-twiddle":30,"pixi-gl-core":7}],138:[function(require,module,exports){var Shader=require('../../Shader');var fragTemplate=['varying vec2 vTextureCoord;','varying vec4 vColor;','varying float vTextureId;','uniform sampler2D uSamplers[%count%];','void main(void){','vec4 color;','float textureId = floor(vTextureId+0.5);','%forloop%','gl_FragColor = color * vColor;','}'].join('\n');function generateMultiTextureShader(gl,maxTextures)
{var vertexSrc="#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vTextureId = aTextureId;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n";var fragmentSrc=fragTemplate;fragmentSrc=fragmentSrc.replace(/%count%/gi,maxTextures);fragmentSrc=fragmentSrc.replace(/%forloop%/gi,generateSampleSrc(maxTextures));var shader=new Shader(gl,vertexSrc,fragmentSrc,{aVertexPosition:3,aColor:2,aTextureCoord:1,aTextureId:0});var sampleValues=[];for(var i=0;i<maxTextures;i++)
{sampleValues[i]=i;}
shader.bind();shader.uniforms.uSamplers=sampleValues;return shader;}
function generateSampleSrc(maxTextures)
{var src='';src+='\n';src+='\n';for(var i=0;i<maxTextures;i++)
{if(i>0)
{src+='\nelse ';}
if(i<maxTextures-1)
{src+='if(textureId == '+i+'.0)';}
src+='\n{';src+='\n\tcolor = texture2D(uSamplers['+i+'], vTextureCoord);';src+='\n}';}
src+='\n';src+='\n';return src;}
module.exports=generateMultiTextureShader;},{"../../Shader":77}],139:[function(require,module,exports){var Sprite=require('../sprites/Sprite'),Texture=require('../textures/Texture'),math=require('../math'),utils=require('../utils'),CONST=require('../const'),TextStyle=require('./TextStyle');var defaultDestroyOptions={texture:true,children:false,baseTexture:true};function Text(text,style)
{this.canvas=document.createElement('canvas');this.context=this.canvas.getContext('2d');this.resolution=CONST.RESOLUTION;this._text=null;this._style=null;this._styleListener=null;this._font='';var texture=Texture.fromCanvas(this.canvas);texture.orig=new math.Rectangle();texture.trim=new math.Rectangle();Sprite.call(this,texture);this.text=text;this.style=style;this.localStyleID=-1;}
Text.prototype=Object.create(Sprite.prototype);Text.prototype.constructor=Text;module.exports=Text;Text.fontPropertiesCache={};Text.fontPropertiesCanvas=document.createElement('canvas');Text.fontPropertiesContext=Text.fontPropertiesCanvas.getContext('2d');Object.defineProperties(Text.prototype,{width:{get:function()
{this.updateText(true);return Math.abs(this.scale.x)*this.texture.orig.width;},set:function(value)
{this.updateText(true);var sign=utils.sign(this.scale.x)||1;this.scale.x=sign*value/this.texture.orig.width;this._width=value;}},height:{get:function()
{this.updateText(true);return Math.abs(this.scale.y)*this._texture.orig.height;},set:function(value)
{this.updateText(true);var sign=utils.sign(this.scale.y)||1;this.scale.y=sign*value/this.texture.orig.height;this._height=value;}},style:{get:function()
{return this._style;},set:function(style)
{style=style||{};if(style instanceof TextStyle)
{this._style=style;}
else
{this._style=new TextStyle(style);}
this.localStyleID=-1;this.dirty=true;}},text:{get:function()
{return this._text;},set:function(text){text=text||' ';text=text.toString();if(this._text===text)
{return;}
this._text=text;this.dirty=true;}}});Text.prototype.updateText=function(respectDirty)
{var style=this._style;if(this.localStyleID!==style.styleID)
{this.dirty=true;this.localStyleID=style.styleID;}
if(!this.dirty&&respectDirty){return;}
var fontSizeString=(typeof style.fontSize==='number')?style.fontSize+'px':style.fontSize;this._font=style.fontStyle+' '+style.fontVariant+' '+style.fontWeight+' '+fontSizeString+' '+style.fontFamily;this.context.font=this._font;var outputText=style.wordWrap?this.wordWrap(this._text):this._text;var lines=outputText.split(/(?:\r\n|\r|\n)/);var lineWidths=new Array(lines.length);var maxLineWidth=0;var fontProperties=this.determineFontProperties(this._font);var i;for(i=0;i<lines.length;i++)
{var lineWidth=this.context.measureText(lines[i]).width+((lines[i].length-1)*style.letterSpacing);lineWidths[i]=lineWidth;maxLineWidth=Math.max(maxLineWidth,lineWidth);}
var width=maxLineWidth+style.strokeThickness;if(style.dropShadow)
{width+=style.dropShadowDistance;}
width+=style.padding*2;this.canvas.width=Math.ceil((width+this.context.lineWidth)*this.resolution);var lineHeight=this.style.lineHeight||fontProperties.fontSize+style.strokeThickness;var height=Math.max(lineHeight,fontProperties.fontSize+style.strokeThickness)+(lines.length-1)*lineHeight;if(style.dropShadow)
{height+=style.dropShadowDistance;}
this.canvas.height=Math.ceil((height+this._style.padding*2)*this.resolution);this.context.scale(this.resolution,this.resolution);if(navigator.isCocoonJS)
{this.context.clearRect(0,0,this.canvas.width,this.canvas.height);}
this.context.font=this._font;this.context.strokeStyle=style.stroke;this.context.lineWidth=style.strokeThickness;this.context.textBaseline=style.textBaseline;this.context.lineJoin=style.lineJoin;this.context.miterLimit=style.miterLimit;var linePositionX;var linePositionY;if(style.dropShadow)
{if(style.dropShadowBlur>0){this.context.shadowColor=style.dropShadowColor;this.context.shadowBlur=style.dropShadowBlur;}else{this.context.fillStyle=style.dropShadowColor;}
var xShadowOffset=Math.cos(style.dropShadowAngle)*style.dropShadowDistance;var yShadowOffset=Math.sin(style.dropShadowAngle)*style.dropShadowDistance;for(i=0;i<lines.length;i++)
{linePositionX=style.strokeThickness/2;linePositionY=(style.strokeThickness/2+i*lineHeight)+fontProperties.ascent;if(style.align==='right')
{linePositionX+=maxLineWidth-lineWidths[i];}
else if(style.align==='center')
{linePositionX+=(maxLineWidth-lineWidths[i])/2;}
if(style.fill)
{this.drawLetterSpacing(lines[i],linePositionX+xShadowOffset+style.padding,linePositionY+yShadowOffset+style.padding);if(style.stroke&&style.strokeThickness)
{this.context.strokeStyle=style.dropShadowColor;this.drawLetterSpacing(lines[i],linePositionX+xShadowOffset+style.padding,linePositionY+yShadowOffset+style.padding,true);this.context.strokeStyle=style.stroke;}}}}
this.context.fillStyle=this._generateFillStyle(style,lines);for(i=0;i<lines.length;i++)
{linePositionX=style.strokeThickness/2;linePositionY=(style.strokeThickness/2+i*lineHeight)+fontProperties.ascent;if(style.align==='right')
{linePositionX+=maxLineWidth-lineWidths[i];}
else if(style.align==='center')
{linePositionX+=(maxLineWidth-lineWidths[i])/2;}
if(style.stroke&&style.strokeThickness)
{this.drawLetterSpacing(lines[i],linePositionX+style.padding,linePositionY+style.padding,true);}
if(style.fill)
{this.drawLetterSpacing(lines[i],linePositionX+style.padding,linePositionY+style.padding);}}
this.updateTexture();};Text.prototype.drawLetterSpacing=function(text,x,y,isStroke)
{var style=this._style;var letterSpacing=style.letterSpacing;if(letterSpacing===0)
{if(isStroke)
{this.context.strokeText(text,x,y);}
else
{this.context.fillText(text,x,y);}
return;}
var characters=String.prototype.split.call(text,''),index=0,current,currentPosition=x;while(index<text.length)
{current=characters[index++];if(isStroke)
{this.context.strokeText(current,currentPosition,y);}
else
{this.context.fillText(current,currentPosition,y);}
currentPosition+=this.context.measureText(current).width+letterSpacing;}};Text.prototype.updateTexture=function()
{var texture=this._texture;var style=this._style;texture.baseTexture.hasLoaded=true;texture.baseTexture.resolution=this.resolution;texture.baseTexture.realWidth=this.canvas.width;texture.baseTexture.realHeight=this.canvas.height;texture.baseTexture.width=this.canvas.width/this.resolution;texture.baseTexture.height=this.canvas.height/this.resolution;texture.trim.width=texture._frame.width=this.canvas.width/this.resolution;texture.trim.height=texture._frame.height=this.canvas.height/this.resolution;texture.trim.x=-style.padding;texture.trim.y=-style.padding;texture.orig.width=texture._frame.width-style.padding*2;texture.orig.height=texture._frame.height-style.padding*2;this._onTextureUpdate();texture.baseTexture.emit('update',texture.baseTexture);this.dirty=false;};Text.prototype.renderWebGL=function(renderer)
{if(this.resolution!==renderer.resolution)
{this.resolution=renderer.resolution;this.dirty=true;}
this.updateText(true);Sprite.prototype.renderWebGL.call(this,renderer);};Text.prototype._renderCanvas=function(renderer)
{if(this.resolution!==renderer.resolution)
{this.resolution=renderer.resolution;this.dirty=true;}
this.updateText(true);Sprite.prototype._renderCanvas.call(this,renderer);};Text.prototype.determineFontProperties=function(fontStyle)
{var properties=Text.fontPropertiesCache[fontStyle];if(!properties)
{properties={};var canvas=Text.fontPropertiesCanvas;var context=Text.fontPropertiesContext;context.font=fontStyle;var width=Math.ceil(context.measureText('|MÉq').width);var baseline=Math.ceil(context.measureText('M').width);var height=2*baseline;baseline=baseline*1.4|0;canvas.width=width;canvas.height=height;context.fillStyle='#f00';context.fillRect(0,0,width,height);context.font=fontStyle;context.textBaseline='alphabetic';context.fillStyle='#000';context.fillText('|MÉq',0,baseline);var imagedata=context.getImageData(0,0,width,height).data;var pixels=imagedata.length;var line=width*4;var i,j;var idx=0;var stop=false;for(i=0;i<baseline;i++)
{for(j=0;j<line;j+=4)
{if(imagedata[idx+j]!==255)
{stop=true;break;}}
if(!stop)
{idx+=line;}
else
{break;}}
properties.ascent=baseline-i;idx=pixels-line;stop=false;for(i=height;i>baseline;i--)
{for(j=0;j<line;j+=4)
{if(imagedata[idx+j]!==255)
{stop=true;break;}}
if(!stop)
{idx-=line;}
else
{break;}}
properties.descent=i-baseline;properties.fontSize=properties.ascent+properties.descent;Text.fontPropertiesCache[fontStyle]=properties;}
return properties;};Text.prototype.wordWrap=function(text)
{var result='';var lines=text.split('\n');var wordWrapWidth=this._style.wordWrapWidth;for(var i=0;i<lines.length;i++)
{var spaceLeft=wordWrapWidth;var words=lines[i].split(' ');for(var j=0;j<words.length;j++)
{var wordWidth=this.context.measureText(words[j]).width;if(this._style.breakWords&&wordWidth>wordWrapWidth)
{var characters=words[j].split('');for(var c=0;c<characters.length;c++)
{var characterWidth=this.context.measureText(characters[c]).width;if(characterWidth>spaceLeft)
{result+='\n'+characters[c];spaceLeft=wordWrapWidth-characterWidth;}
else
{if(c===0)
{result+=' ';}
result+=characters[c];spaceLeft-=characterWidth;}}}
else
{var wordWidthWithSpace=wordWidth+this.context.measureText(' ').width;if(j===0||wordWidthWithSpace>spaceLeft)
{if(j>0)
{result+='\n';}
result+=words[j];spaceLeft=wordWrapWidth-wordWidth;}
else
{spaceLeft-=wordWidthWithSpace;result+=' '+words[j];}}}
if(i<lines.length-1)
{result+='\n';}}
return result;};Text.prototype._calculateBounds=function()
{this.updateText(true);this.calculateVertices();this._bounds.addQuad(this.vertexData);};Text.prototype._onStyleChange=function()
{this.dirty=true;};Text.prototype._generateFillStyle=function(style,lines)
{if(!Array.isArray(style.fill))
{return style.fill;}
else
{if(navigator.isCocoonJS){return style.fill[0];}
var i;var gradient;var totalIterations;var currentIteration;var stop;var width=this.canvas.width/this.resolution;var height=this.canvas.height/this.resolution;if(style.fillGradientType===CONST.TEXT_GRADIENT.LINEAR_VERTICAL)
{gradient=this.context.createLinearGradient(width/2,0,width/2,height);totalIterations=(style.fill.length+1)*lines.length;currentIteration=0;for(i=0;i<lines.length;i++)
{currentIteration+=1;for(var j=0;j<style.fill.length;j++)
{stop=(currentIteration/totalIterations);gradient.addColorStop(stop,style.fill[j]);currentIteration++;}}}
else
{gradient=this.context.createLinearGradient(0,height/2,width,height/2);totalIterations=style.fill.length+1;currentIteration=1;for(i=0;i<style.fill.length;i++)
{stop=currentIteration/totalIterations;gradient.addColorStop(stop,style.fill[i]);currentIteration++;}}
return gradient;}};Text.prototype.destroy=function(options)
{if(typeof options==='boolean'){options={children:options};}
options=Object.assign({},defaultDestroyOptions,options);Sprite.prototype.destroy.call(this,options);this.context=null;this.canvas=null;this._style=null;};},{"../const":78,"../math":102,"../sprites/Sprite":133,"../textures/Texture":144,"../utils":151,"./TextStyle":140}],140:[function(require,module,exports){var CONST=require('../const'),utils=require('../utils');function TextStyle(style)
{this.styleID=0;Object.assign(this,this._defaults,style);}
TextStyle.prototype.constructor=TextStyle;module.exports=TextStyle;TextStyle.prototype._defaults={align:'left',breakWords:false,dropShadow:false,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:'#000000',dropShadowDistance:5,fill:'black',fillGradientType:CONST.TEXT_GRADIENT.LINEAR_VERTICAL,fontFamily:'Arial',fontSize:26,fontStyle:'normal',fontVariant:'normal',fontWeight:'normal',letterSpacing:0,lineHeight:0,lineJoin:'miter',miterLimit:10,padding:0,stroke:'black',strokeThickness:0,textBaseline:'alphabetic',wordWrap:false,wordWrapWidth:100};TextStyle.prototype.clone=function()
{var clonedProperties={};for(var key in this._defaults)
{clonedProperties[key]=this[key];}
return new TextStyle(clonedProperties);};TextStyle.prototype.reset=function()
{Object.assign(this,this._defaults);};Object.defineProperties(TextStyle.prototype,{align:{get:function()
{return this._align;},set:function(align)
{if(this._align!==align)
{this._align=align;this.styleID++;}}},breakWords:{get:function()
{return this._breakWords;},set:function(breakWords)
{if(this._breakWords!==breakWords)
{this._breakWords=breakWords;this.styleID++;}}},dropShadow:{get:function()
{return this._dropShadow;},set:function(dropShadow)
{if(this._dropShadow!==dropShadow)
{this._dropShadow=dropShadow;this.styleID++;}}},dropShadowAngle:{get:function()
{return this._dropShadowAngle;},set:function(dropShadowAngle)
{if(this._dropShadowAngle!==dropShadowAngle)
{this._dropShadowAngle=dropShadowAngle;this.styleID++;}}},dropShadowBlur:{get:function()
{return this._dropShadowBlur;},set:function(dropShadowBlur)
{if(this._dropShadowBlur!==dropShadowBlur)
{this._dropShadowBlur=dropShadowBlur;this.styleID++;}}},dropShadowColor:{get:function()
{return this._dropShadowColor;},set:function(dropShadowColor)
{var outputColor=getColor(dropShadowColor);if(this._dropShadowColor!==outputColor)
{this._dropShadowColor=outputColor;this.styleID++;}}},dropShadowDistance:{get:function()
{return this._dropShadowDistance;},set:function(dropShadowDistance)
{if(this._dropShadowDistance!==dropShadowDistance)
{this._dropShadowDistance=dropShadowDistance;this.styleID++;}}},fill:{get:function()
{return this._fill;},set:function(fill)
{var outputColor=getColor(fill);if(this._fill!==outputColor)
{this._fill=outputColor;this.styleID++;}}},fillGradientType:{get:function()
{return this._fillGradientType;},set:function(fillGradientType)
{if(this._fillGradientType!==fillGradientType)
{this._fillGradientType=fillGradientType;this.styleID++;}}},fontFamily:{get:function()
{return this._fontFamily;},set:function(fontFamily)
{if(this.fontFamily!==fontFamily)
{this._fontFamily=fontFamily;this.styleID++;}}},fontSize:{get:function()
{return this._fontSize;},set:function(fontSize)
{if(this._fontSize!==fontSize)
{this._fontSize=fontSize;this.styleID++;}}},fontStyle:{get:function()
{return this._fontStyle;},set:function(fontStyle)
{if(this._fontStyle!==fontStyle)
{this._fontStyle=fontStyle;this.styleID++;}}},fontVariant:{get:function()
{return this._fontVariant;},set:function(fontVariant)
{if(this._fontVariant!==fontVariant)
{this._fontVariant=fontVariant;this.styleID++;}}},fontWeight:{get:function()
{return this._fontWeight;},set:function(fontWeight)
{if(this._fontWeight!==fontWeight)
{this._fontWeight=fontWeight;this.styleID++;}}},letterSpacing:{get:function()
{return this._letterSpacing;},set:function(letterSpacing)
{if(this._letterSpacing!==letterSpacing)
{this._letterSpacing=letterSpacing;this.styleID++;}}},lineHeight:{get:function()
{return this._lineHeight;},set:function(lineHeight)
{if(this._lineHeight!==lineHeight)
{this._lineHeight=lineHeight;this.styleID++;}}},lineJoin:{get:function()
{return this._lineJoin;},set:function(lineJoin)
{if(this._lineJoin!==lineJoin)
{this._lineJoin=lineJoin;this.styleID++;}}},miterLimit:{get:function()
{return this._miterLimit;},set:function(miterLimit)
{if(this._miterLimit!==miterLimit)
{this._miterLimit=miterLimit;this.styleID++;}}},padding:{get:function()
{return this._padding;},set:function(padding)
{if(this._padding!==padding)
{this._padding=padding;this.styleID++;}}},stroke:{get:function()
{return this._stroke;},set:function(stroke)
{var outputColor=getColor(stroke);if(this._stroke!==outputColor)
{this._stroke=outputColor;this.styleID++;}}},strokeThickness:{get:function()
{return this._strokeThickness;},set:function(strokeThickness)
{if(this._strokeThickness!==strokeThickness)
{this._strokeThickness=strokeThickness;this.styleID++;}}},textBaseline:{get:function()
{return this._textBaseline;},set:function(textBaseline)
{if(this._textBaseline!==textBaseline)
{this._textBaseline=textBaseline;this.styleID++;}}},wordWrap:{get:function()
{return this._wordWrap;},set:function(wordWrap)
{if(this._wordWrap!==wordWrap)
{this._wordWrap=wordWrap;this.styleID++;}}},wordWrapWidth:{get:function()
{return this._wordWrapWidth;},set:function(wordWrapWidth)
{if(this._wordWrapWidth!==wordWrapWidth)
{this._wordWrapWidth=wordWrapWidth;this.styleID++;}}}});function getColor(color)
{if(typeof color==='number')
{return utils.hex2string(color);}
else if(Array.isArray(color))
{for(var i=0;i<color.length;++i)
{if(typeof color[i]==='number')
{color[i]=utils.hex2string(color[i]);}}}
return color;}},{"../const":78,"../utils":151}],141:[function(require,module,exports){var BaseTexture=require('./BaseTexture'),CONST=require('../const');function BaseRenderTexture(width,height,scaleMode,resolution)
{BaseTexture.call(this,null,scaleMode);this.resolution=resolution||CONST.RESOLUTION;this.width=width||100;this.height=height||100;this.realWidth=this.width*this.resolution;this.realHeight=this.height*this.resolution;this.scaleMode=scaleMode||CONST.SCALE_MODES.DEFAULT;this.hasLoaded=true;this._glRenderTargets=[];this._canvasRenderTarget=null;this.valid=false;}
BaseRenderTexture.prototype=Object.create(BaseTexture.prototype);BaseRenderTexture.prototype.constructor=BaseRenderTexture;module.exports=BaseRenderTexture;BaseRenderTexture.prototype.resize=function(width,height)
{if(width===this.width&&height===this.height)
{return;}
this.valid=(width>0&&height>0);this.width=width;this.height=height;this.realWidth=this.width*this.resolution;this.realHeight=this.height*this.resolution;if(!this.valid)
{return;}
this.emit('update',this);};BaseRenderTexture.prototype.destroy=function()
{BaseTexture.prototype.destroy.call(this,true);this.renderer=null;};},{"../const":78,"./BaseTexture":142}],142:[function(require,module,exports){var utils=require('../utils'),CONST=require('../const'),EventEmitter=require('eventemitter3'),determineCrossOrigin=require('../utils/determineCrossOrigin'),bitTwiddle=require('bit-twiddle');function BaseTexture(source,scaleMode,resolution)
{EventEmitter.call(this);this.uid=utils.uid();this.touched=0;this.resolution=resolution||CONST.RESOLUTION;this.width=100;this.height=100;this.realWidth=100;this.realHeight=100;this.scaleMode=scaleMode||CONST.SCALE_MODES.DEFAULT;this.hasLoaded=false;this.isLoading=false;this.source=null;this.premultipliedAlpha=true;this.imageUrl=null;this.isPowerOfTwo=false;this.mipmap=CONST.MIPMAP_TEXTURES;this.wrapMode=CONST.WRAP_MODES.DEFAULT;this._glTextures=[];this._enabled=0;this._id=0;if(source)
{this.loadSource(source);}}
BaseTexture.prototype=Object.create(EventEmitter.prototype);BaseTexture.prototype.constructor=BaseTexture;module.exports=BaseTexture;BaseTexture.prototype.update=function()
{this.realWidth=this.source.naturalWidth||this.source.videoWidth||this.source.width;this.realHeight=this.source.naturalHeight||this.source.videoHeight||this.source.height;this.width=this.realWidth/this.resolution;this.height=this.realHeight/this.resolution;this.isPowerOfTwo=bitTwiddle.isPow2(this.realWidth)&&bitTwiddle.isPow2(this.realHeight);this.emit('update',this);};BaseTexture.prototype.loadSource=function(source)
{var wasLoading=this.isLoading;this.hasLoaded=false;this.isLoading=false;if(wasLoading&&this.source)
{this.source.onload=null;this.source.onerror=null;}
this.source=source;if((this.source.complete||this.source.getContext)&&this.source.width&&this.source.height)
{this._sourceLoaded();}
else if(!source.getContext)
{this.isLoading=true;var scope=this;source.onload=function()
{source.onload=null;source.onerror=null;if(!scope.isLoading)
{return;}
scope.isLoading=false;scope._sourceLoaded();scope.emit('loaded',scope);};source.onerror=function()
{source.onload=null;source.onerror=null;if(!scope.isLoading)
{return;}
scope.isLoading=false;scope.emit('error',scope);};if(source.complete&&source.src)
{this.isLoading=false;source.onload=null;source.onerror=null;if(source.width&&source.height)
{this._sourceLoaded();if(wasLoading)
{this.emit('loaded',this);}}
else
{if(wasLoading)
{this.emit('error',this);}}}}};BaseTexture.prototype._sourceLoaded=function()
{this.hasLoaded=true;this.update();};BaseTexture.prototype.destroy=function()
{if(this.imageUrl)
{delete utils.BaseTextureCache[this.imageUrl];delete utils.TextureCache[this.imageUrl];this.imageUrl=null;if(!navigator.isCocoonJS)
{this.source.src='';}}
else if(this.source&&this.source._pixiId)
{delete utils.BaseTextureCache[this.source._pixiId];}
this.source=null;this.dispose();};BaseTexture.prototype.dispose=function()
{this.emit('dispose',this);};BaseTexture.prototype.updateSourceImage=function(newSrc)
{this.source.src=newSrc;this.loadSource(this.source);};BaseTexture.fromImage=function(imageUrl,crossorigin,scaleMode)
{var baseTexture=utils.BaseTextureCache[imageUrl];if(!baseTexture)
{var image=new Image();if(crossorigin===undefined&&imageUrl.indexOf('data:')!==0)
{image.crossOrigin=determineCrossOrigin(imageUrl);}
baseTexture=new BaseTexture(image,scaleMode);baseTexture.imageUrl=imageUrl;image.src=imageUrl;utils.BaseTextureCache[imageUrl]=baseTexture;baseTexture.resolution=utils.getResolutionOfUrl(imageUrl);}
return baseTexture;};BaseTexture.fromCanvas=function(canvas,scaleMode)
{if(!canvas._pixiId)
{canvas._pixiId='canvas_'+utils.uid();}
var baseTexture=utils.BaseTextureCache[canvas._pixiId];if(!baseTexture)
{baseTexture=new BaseTexture(canvas,scaleMode);utils.BaseTextureCache[canvas._pixiId]=baseTexture;}
return baseTexture;};},{"../const":78,"../utils":151,"../utils/determineCrossOrigin":150,"bit-twiddle":30,"eventemitter3":32}],143:[function(require,module,exports){var BaseRenderTexture=require('./BaseRenderTexture'),Texture=require('./Texture');function RenderTexture(baseRenderTexture,frame)
{this.legacyRenderer=null;if(!(baseRenderTexture instanceof BaseRenderTexture))
{var width=arguments[1];var height=arguments[2];var scaleMode=arguments[3]||0;var resolution=arguments[4]||1;console.warn('v4 RenderTexture now expects a new BaseRenderTexture. Please use RenderTexture.create('+width+', '+height+')');this.legacyRenderer=arguments[0];frame=null;baseRenderTexture=new BaseRenderTexture(width,height,scaleMode,resolution);}
Texture.call(this,baseRenderTexture,frame);this.valid=true;this._updateUvs();}
RenderTexture.prototype=Object.create(Texture.prototype);RenderTexture.prototype.constructor=RenderTexture;module.exports=RenderTexture;RenderTexture.prototype.resize=function(width,height,doNotResizeBaseTexture)
{this.valid=(width>0&&height>0);this._frame.width=this.orig.width=width;this._frame.height=this.orig.height=height;if(!doNotResizeBaseTexture)
{this.baseTexture.resize(width,height);}
this._updateUvs();};RenderTexture.create=function(width,height,scaleMode,resolution)
{return new RenderTexture(new BaseRenderTexture(width,height,scaleMode,resolution));};},{"./BaseRenderTexture":141,"./Texture":144}],144:[function(require,module,exports){var BaseTexture=require('./BaseTexture'),VideoBaseTexture=require('./VideoBaseTexture'),TextureUvs=require('./TextureUvs'),EventEmitter=require('eventemitter3'),math=require('../math'),utils=require('../utils');function Texture(baseTexture,frame,orig,trim,rotate)
{EventEmitter.call(this);this.noFrame=false;if(!frame)
{this.noFrame=true;frame=new math.Rectangle(0,0,1,1);}
if(baseTexture instanceof Texture)
{baseTexture=baseTexture.baseTexture;}
this.baseTexture=baseTexture;this._frame=frame;this.trim=trim;this.valid=false;this.requiresUpdate=false;this._uvs=null;this.orig=orig||frame;this._rotate=+(rotate||0);if(rotate===true){this._rotate=2;}else{if(this._rotate%2!==0){throw'attempt to use diamond-shaped UVs. If you are sure, set rotation manually';}}
if(baseTexture.hasLoaded)
{if(this.noFrame)
{frame=new math.Rectangle(0,0,baseTexture.width,baseTexture.height);baseTexture.on('update',this.onBaseTextureUpdated,this);}
this.frame=frame;}
else
{baseTexture.once('loaded',this.onBaseTextureLoaded,this);}
this._updateID=0;}
Texture.prototype=Object.create(EventEmitter.prototype);Texture.prototype.constructor=Texture;module.exports=Texture;Object.defineProperties(Texture.prototype,{frame:{get:function()
{return this._frame;},set:function(frame)
{this._frame=frame;this.noFrame=false;if(frame.x+frame.width>this.baseTexture.width||frame.y+frame.height>this.baseTexture.height)
{throw new Error('Texture Error: frame does not fit inside the base Texture dimensions '+this);}
this.valid=frame&&frame.width&&frame.height&&this.baseTexture.hasLoaded;if(!this.trim&&!this.rotate)
{this.orig=frame;}
if(this.valid)
{this._updateUvs();}}},rotate:{get:function()
{return this._rotate;},set:function(rotate)
{this._rotate=rotate;if(this.valid)
{this._updateUvs();}}},width:{get:function(){return this.orig?this.orig.width:0;}},height:{get:function(){return this.orig?this.orig.height:0;}}});Texture.prototype.update=function()
{this.baseTexture.update();};Texture.prototype.onBaseTextureLoaded=function(baseTexture)
{this._updateID++;if(this.noFrame)
{this.frame=new math.Rectangle(0,0,baseTexture.width,baseTexture.height);}
else
{this.frame=this._frame;}
this.baseTexture.on('update',this.onBaseTextureUpdated,this);this.emit('update',this);};Texture.prototype.onBaseTextureUpdated=function(baseTexture)
{this._updateID++;this._frame.width=baseTexture.width;this._frame.height=baseTexture.height;this.emit('update',this);};Texture.prototype.destroy=function(destroyBase)
{if(this.baseTexture)
{if(destroyBase)
{if(utils.TextureCache[this.baseTexture.imageUrl])
{delete utils.TextureCache[this.baseTexture.imageUrl];}
this.baseTexture.destroy();}
this.baseTexture.off('update',this.onBaseTextureUpdated,this);this.baseTexture.off('loaded',this.onBaseTextureLoaded,this);this.baseTexture=null;}
this._frame=null;this._uvs=null;this.trim=null;this.orig=null;this.valid=false;this.off('dispose',this.dispose,this);this.off('update',this.update,this);};Texture.prototype.clone=function()
{return new Texture(this.baseTexture,this.frame,this.orig,this.trim,this.rotate);};Texture.prototype._updateUvs=function()
{if(!this._uvs)
{this._uvs=new TextureUvs();}
this._uvs.set(this._frame,this.baseTexture,this.rotate);this._updateID++;};Texture.fromImage=function(imageUrl,crossorigin,scaleMode)
{var texture=utils.TextureCache[imageUrl];if(!texture)
{texture=new Texture(BaseTexture.fromImage(imageUrl,crossorigin,scaleMode));utils.TextureCache[imageUrl]=texture;}
return texture;};Texture.fromFrame=function(frameId)
{var texture=utils.TextureCache[frameId];if(!texture)
{throw new Error('The frameId "'+frameId+'" does not exist in the texture cache');}
return texture;};Texture.fromCanvas=function(canvas,scaleMode)
{return new Texture(BaseTexture.fromCanvas(canvas,scaleMode));};Texture.fromVideo=function(video,scaleMode)
{if(typeof video==='string')
{return Texture.fromVideoUrl(video,scaleMode);}
else
{return new Texture(VideoBaseTexture.fromVideo(video,scaleMode));}};Texture.fromVideoUrl=function(videoUrl,scaleMode)
{return new Texture(VideoBaseTexture.fromUrl(videoUrl,scaleMode));};Texture.from=function(source)
{if(typeof source==='string')
{var texture=utils.TextureCache[source];if(!texture)
{var isVideo=source.match(/\.(mp4|webm|ogg|h264|avi|mov)$/)!==null;if(isVideo)
{return Texture.fromVideoUrl(source);}
return Texture.fromImage(source);}
return texture;}
else if(source instanceof HTMLCanvasElement)
{return Texture.fromCanvas(source);}
else if(source instanceof HTMLVideoElement)
{return Texture.fromVideo(source);}
else if(source instanceof BaseTexture)
{return new Texture(BaseTexture);}
else
{return source;}};Texture.addTextureToCache=function(texture,id)
{utils.TextureCache[id]=texture;};Texture.removeTextureFromCache=function(id)
{var texture=utils.TextureCache[id];delete utils.TextureCache[id];delete utils.BaseTextureCache[id];return texture;};Texture.EMPTY=new Texture(new BaseTexture());Texture.EMPTY.destroy=function(){};Texture.EMPTY.on=function(){};Texture.EMPTY.once=function(){};Texture.EMPTY.emit=function(){};},{"../math":102,"../utils":151,"./BaseTexture":142,"./TextureUvs":145,"./VideoBaseTexture":146,"eventemitter3":32}],145:[function(require,module,exports){function TextureUvs()
{this.x0=0;this.y0=0;this.x1=1;this.y1=0;this.x2=1;this.y2=1;this.x3=0;this.y3=1;this.uvsUint32=new Uint32Array(4);}
module.exports=TextureUvs;var GroupD8=require('../math/GroupD8');TextureUvs.prototype.set=function(frame,baseFrame,rotate)
{var tw=baseFrame.width;var th=baseFrame.height;if(rotate)
{var w2=frame.width/2/tw;var h2=frame.height/2/th;var cX=frame.x/tw+w2;var cY=frame.y/th+h2;rotate=GroupD8.add(rotate,GroupD8.NW);this.x0=cX+w2*GroupD8.uX(rotate);this.y0=cY+h2*GroupD8.uY(rotate);rotate=GroupD8.add(rotate,2);this.x1=cX+w2*GroupD8.uX(rotate);this.y1=cY+h2*GroupD8.uY(rotate);rotate=GroupD8.add(rotate,2);this.x2=cX+w2*GroupD8.uX(rotate);this.y2=cY+h2*GroupD8.uY(rotate);rotate=GroupD8.add(rotate,2);this.x3=cX+w2*GroupD8.uX(rotate);this.y3=cY+h2*GroupD8.uY(rotate);}
else
{this.x0=frame.x/tw;this.y0=frame.y/th;this.x1=(frame.x+frame.width)/tw;this.y1=frame.y/th;this.x2=(frame.x+frame.width)/tw;this.y2=(frame.y+frame.height)/th;this.x3=frame.x/tw;this.y3=(frame.y+frame.height)/th;}
this.uvsUint32[0]=(((this.y0*65535)&0xFFFF)<<16)|((this.x0*65535)&0xFFFF);this.uvsUint32[1]=(((this.y1*65535)&0xFFFF)<<16)|((this.x1*65535)&0xFFFF);this.uvsUint32[2]=(((this.y2*65535)&0xFFFF)<<16)|((this.x2*65535)&0xFFFF);this.uvsUint32[3]=(((this.y3*65535)&0xFFFF)<<16)|((this.x3*65535)&0xFFFF);};},{"../math/GroupD8":98}],146:[function(require,module,exports){var BaseTexture=require('./BaseTexture'),utils=require('../utils');function VideoBaseTexture(source,scaleMode)
{if(!source)
{throw new Error('No video source element specified.');}
if((source.readyState===source.HAVE_ENOUGH_DATA||source.readyState===source.HAVE_FUTURE_DATA)&&source.width&&source.height)
{source.complete=true;}
BaseTexture.call(this,source,scaleMode);this.autoUpdate=false;this._onUpdate=this._onUpdate.bind(this);this._onCanPlay=this._onCanPlay.bind(this);if(!source.complete)
{source.addEventListener('canplay',this._onCanPlay);source.addEventListener('canplaythrough',this._onCanPlay);source.addEventListener('play',this._onPlayStart.bind(this));source.addEventListener('pause',this._onPlayStop.bind(this));}
this.__loaded=false;}
VideoBaseTexture.prototype=Object.create(BaseTexture.prototype);VideoBaseTexture.prototype.constructor=VideoBaseTexture;module.exports=VideoBaseTexture;VideoBaseTexture.prototype._onUpdate=function()
{if(this.autoUpdate)
{window.requestAnimationFrame(this._onUpdate);this.update();}};VideoBaseTexture.prototype._onPlayStart=function()
{if(!this.hasLoaded)
{this._onCanPlay();}
if(!this.autoUpdate)
{window.requestAnimationFrame(this._onUpdate);this.autoUpdate=true;}};VideoBaseTexture.prototype._onPlayStop=function()
{this.autoUpdate=false;};VideoBaseTexture.prototype._onCanPlay=function()
{this.hasLoaded=true;if(this.source)
{this.source.removeEventListener('canplay',this._onCanPlay);this.source.removeEventListener('canplaythrough',this._onCanPlay);this.width=this.source.videoWidth;this.height=this.source.videoHeight;this.source.play();if(!this.__loaded)
{this.__loaded=true;this.emit('loaded',this);}}};VideoBaseTexture.prototype.destroy=function()
{if(this.source&&this.source._pixiId)
{delete utils.BaseTextureCache[this.source._pixiId];delete this.source._pixiId;}
BaseTexture.prototype.destroy.call(this);};VideoBaseTexture.fromVideo=function(video,scaleMode)
{if(!video._pixiId)
{video._pixiId='video_'+utils.uid();}
var baseTexture=utils.BaseTextureCache[video._pixiId];if(!baseTexture)
{baseTexture=new VideoBaseTexture(video,scaleMode);utils.BaseTextureCache[video._pixiId]=baseTexture;}
return baseTexture;};VideoBaseTexture.fromUrl=function(videoSrc,scaleMode)
{var video=document.createElement('video');if(Array.isArray(videoSrc))
{for(var i=0;i<videoSrc.length;++i)
{video.appendChild(createSource(videoSrc[i].src||videoSrc[i],videoSrc[i].mime));}}
else
{video.appendChild(createSource(videoSrc.src||videoSrc,videoSrc.mime));}
video.load();video.play();return VideoBaseTexture.fromVideo(video,scaleMode);};VideoBaseTexture.fromUrls=VideoBaseTexture.fromUrl;function createSource(path,type)
{if(!type)
{type='video/'+path.substr(path.lastIndexOf('.')+1);}
var source=document.createElement('source');source.src=path;source.type=type;return source;}},{"../utils":151,"./BaseTexture":142}],147:[function(require,module,exports){var CONST=require('../const'),EventEmitter=require('eventemitter3'),TICK='tick';function Ticker()
{var _this=this;this._tick=function _tick(time){_this._requestId=null;if(_this.started)
{_this.update(time);if(_this.started&&_this._requestId===null&&_this._emitter.listeners(TICK,true))
{_this._requestId=requestAnimationFrame(_this._tick);}}};this._emitter=new EventEmitter();this._requestId=null;this._maxElapsedMS=100;this.autoStart=false;this.deltaTime=1;this.elapsedMS=1/CONST.TARGET_FPMS;this.lastTime=0;this.speed=1;this.started=false;}
Object.defineProperties(Ticker.prototype,{FPS:{get:function()
{return 1000/this.elapsedMS;}},minFPS:{get:function()
{return 1000/this._maxElapsedMS;},set:function(fps)
{var minFPMS=Math.min(Math.max(0,fps)/1000,CONST.TARGET_FPMS);this._maxElapsedMS=1/minFPMS;}}});Ticker.prototype._requestIfNeeded=function _requestIfNeeded()
{if(this._requestId===null&&this._emitter.listeners(TICK,true))
{this.lastTime=performance.now();this._requestId=requestAnimationFrame(this._tick);}};Ticker.prototype._cancelIfNeeded=function _cancelIfNeeded()
{if(this._requestId!==null)
{cancelAnimationFrame(this._requestId);this._requestId=null;}};Ticker.prototype._startIfPossible=function _startIfPossible()
{if(this.started)
{this._requestIfNeeded();}
else if(this.autoStart)
{this.start();}};Ticker.prototype.add=function add(fn,context)
{this._emitter.on(TICK,fn,context);this._startIfPossible();return this;};Ticker.prototype.addOnce=function addOnce(fn,context)
{this._emitter.once(TICK,fn,context);this._startIfPossible();return this;};Ticker.prototype.remove=function remove(fn,context)
{this._emitter.off(TICK,fn,context);if(!this._emitter.listeners(TICK,true))
{this._cancelIfNeeded();}
return this;};Ticker.prototype.start=function start()
{if(!this.started)
{this.started=true;this._requestIfNeeded();}};Ticker.prototype.stop=function stop()
{if(this.started)
{this.started=false;this._cancelIfNeeded();}};Ticker.prototype.update=function update(currentTime)
{var elapsedMS;currentTime=currentTime||performance.now();if(currentTime>this.lastTime)
{elapsedMS=this.elapsedMS=currentTime-this.lastTime;if(elapsedMS>this._maxElapsedMS)
{elapsedMS=this._maxElapsedMS;}
this.deltaTime=elapsedMS*CONST.TARGET_FPMS*this.speed;this._emitter.emit(TICK,this.deltaTime);}
else
{this.deltaTime=this.elapsedMS=0;}
this.lastTime=currentTime;};module.exports=Ticker;},{"../const":78,"eventemitter3":32}],148:[function(require,module,exports){var Ticker=require('./Ticker');var shared=new Ticker();shared.autoStart=true;module.exports={shared:shared,Ticker:Ticker};},{"./Ticker":147}],149:[function(require,module,exports){var createIndicesForQuads=function(size)
{var totalIndices=size*6;var indices=new Uint16Array(totalIndices);for(var i=0,j=0;i<totalIndices;i+=6,j+=4)
{indices[i+0]=j+0;indices[i+1]=j+1;indices[i+2]=j+2;indices[i+3]=j+0;indices[i+4]=j+2;indices[i+5]=j+3;}
return indices;};module.exports=createIndicesForQuads;},{}],150:[function(require,module,exports){var tempAnchor;var _url=require('url');var determineCrossOrigin=function(url,loc){if(url.indexOf('data:')===0){return'';}
loc=loc||window.location;if(!tempAnchor){tempAnchor=document.createElement('a');}
tempAnchor.href=url;url=_url.parse(tempAnchor.href);var samePort=(!url.port&&loc.port==='')||(url.port===loc.port);if(url.hostname!==loc.hostname||!samePort||url.protocol!==loc.protocol){return'anonymous';}
return'';};module.exports=determineCrossOrigin;},{"url":72}],151:[function(require,module,exports){var CONST=require('../const');var utils=module.exports={_uid:0,_saidHello:false,EventEmitter:require('eventemitter3'),pluginTarget:require('./pluginTarget'),uid:function()
{return++utils._uid;},hex2rgb:function(hex,out)
{out=out||[];out[0]=(hex>>16&0xFF)/255;out[1]=(hex>>8&0xFF)/255;out[2]=(hex&0xFF)/255;return out;},hex2string:function(hex)
{hex=hex.toString(16);hex='000000'.substr(0,6-hex.length)+hex;return'#'+hex;},rgb2hex:function(rgb)
{return((rgb[0]*255<<16)+(rgb[1]*255<<8)+rgb[2]*255);},getResolutionOfUrl:function(url)
{var resolution=CONST.RETINA_PREFIX.exec(url);if(resolution)
{return parseFloat(resolution[1]);}
return 1;},sayHello:function(type)
{if(utils._saidHello)
{return;}
if(navigator.userAgent.toLowerCase().indexOf('chrome')>-1)
{var args=['\n %c %c %c Pixi.js '+CONST.VERSION+' - ✰ '+type+' ✰  %c '+' %c '+' http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n','background: #ff66a5; padding:5px 0;','background: #ff66a5; padding:5px 0;','color: #ff66a5; background: #030307; padding:5px 0;','background: #ff66a5; padding:5px 0;','background: #ffc3dc; padding:5px 0;','background: #ff66a5; padding:5px 0;','color: #ff2424; background: #fff; padding:5px 0;','color: #ff2424; background: #fff; padding:5px 0;','color: #ff2424; background: #fff; padding:5px 0;'];}
else if(window.console)
{}
utils._saidHello=true;},isWebGLSupported:function()
{var contextOptions={stencil:true,failIfMajorPerformanceCaveat:true};try
{if(!window.WebGLRenderingContext)
{return false;}
var canvas=document.createElement('canvas'),gl=canvas.getContext('webgl',contextOptions)||canvas.getContext('experimental-webgl',contextOptions);var success=!!(gl&&gl.getContextAttributes().stencil);if(gl)
{var loseContext=gl.getExtension('WEBGL_lose_context');if(loseContext)
{loseContext.loseContext();}}
gl=null;return success;}
catch(e)
{return false;}},sign:function(n)
{return n?(n<0?-1:1):0;},removeItems:function(arr,startIdx,removeCount)
{var length=arr.length;if(startIdx>=length||removeCount===0)
{return;}
removeCount=(startIdx+removeCount>length?length-startIdx:removeCount);for(var i=startIdx,len=length-removeCount;i<len;++i)
{arr[i]=arr[i+removeCount];}
arr.length=len;},TextureCache:{},BaseTextureCache:{}};},{"../const":78,"./pluginTarget":153,"eventemitter3":32}],152:[function(require,module,exports){var Device=require('ismobilejs');var maxRecommendedTextures=function(max)
{if(Device.tablet||Device.phone)
{return 2;}
else
{return max;}};module.exports=maxRecommendedTextures;},{"ismobilejs":33}],153:[function(require,module,exports){function pluginTarget(obj)
{obj.__plugins={};obj.registerPlugin=function(pluginName,ctor)
{obj.__plugins[pluginName]=ctor;};obj.prototype.initPlugins=function()
{this.plugins=this.plugins||{};for(var o in obj.__plugins)
{this.plugins[o]=new(obj.__plugins[o])(this);}};obj.prototype.destroyPlugins=function()
{for(var o in this.plugins)
{this.plugins[o].destroy();this.plugins[o]=null;}
this.plugins=null;};}
module.exports={mixin:function mixin(obj)
{pluginTarget(obj);}};},{}],154:[function(require,module,exports){var core=require('./core'),mesh=require('./mesh'),particles=require('./particles'),extras=require('./extras'),filters=require('./filters');function warn(msg){var stack=new Error().stack;if(typeof stack==='undefined'){console.warn('Deprecation Warning: ',msg);}
else{stack=stack.split('\n').splice(3).join('\n');if(console.groupCollapsed){console.groupCollapsed('%cDeprecation Warning: %c%s','color:#614108;background:#fffbe6','font-weight:normal;color:#614108;background:#fffbe6',msg);console.warn(stack);console.groupEnd();}
else{console.warn('Deprecation Warning: ',msg);console.warn(stack);}}}
core.SpriteBatch=function()
{throw new ReferenceError('SpriteBatch does not exist any more, please use the new ParticleContainer instead.');};core.AssetLoader=function()
{throw new ReferenceError('The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.');};Object.defineProperties(core,{Stage:{get:function()
{warn('You do not need to use a PIXI Stage any more, you can simply render any container.');return core.Container;}},DisplayObjectContainer:{get:function()
{warn('DisplayObjectContainer has been shortened to Container, please use Container from now on.');return core.Container;}},Strip:{get:function()
{warn('The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on.');return mesh.Mesh;}},Rope:{get:function()
{warn('The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on.');return mesh.Rope;}},ParticleContainer:{get:function(){warn('The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on.');return particles.ParticleContainer;}},MovieClip:{get:function()
{warn('The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on.');return extras.MovieClip;}},TilingSprite:{get:function()
{warn('The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on.');return extras.TilingSprite;}},BitmapText:{get:function()
{warn('The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on.');return extras.BitmapText;}},blendModes:{get:function()
{warn('The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on.');return core.BLEND_MODES;}},scaleModes:{get:function()
{warn('The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on.');return core.SCALE_MODES;}},BaseTextureCache:{get:function()
{warn('The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on.');return core.utils.BaseTextureCache;}},TextureCache:{get:function()
{warn('The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on.');return core.utils.TextureCache;}},math:{get:function()
{warn('The math namespace is deprecated, please access members already accessible on PIXI.');return core;}},AbstractFilter:{get:function()
{warn('AstractFilter has been renamed to Filter, please use PIXI.Filter');return core.Filter;}},TransformManual:{get:function()
{warn('TransformManual has been renamed to TransformBase, please update your pixi-spine');return core.TransformBase;}}});core.DisplayObject.prototype.generateTexture=function(renderer,scaleMode,resolution)
{warn('generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)');return renderer.generateTexture(this,scaleMode,resolution);};core.Graphics.prototype.generateTexture=function(scaleMode,resolution)
{warn('graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture');return this.generateCanvasTexture(scaleMode,resolution);};core.RenderTexture.prototype.render=function(displayObject,matrix,clear,updateTransform)
{this.legacyRenderer.render(displayObject,this,clear,matrix,!updateTransform);warn('RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)');};core.RenderTexture.prototype.getImage=function(target)
{warn('RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)');return this.legacyRenderer.extract.image(target);};core.RenderTexture.prototype.getBase64=function(target)
{warn('RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)');return this.legacyRenderer.extract.base64(target);};core.RenderTexture.prototype.getCanvas=function(target)
{warn('RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)');return this.legacyRenderer.extract.canvas(target);};core.RenderTexture.prototype.getPixels=function(target)
{warn('RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)');return this.legacyRenderer.pixels(target);};core.Sprite.prototype.setTexture=function(texture)
{this.texture=texture;warn('setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;');};extras.BitmapText.prototype.setText=function(text)
{this.text=text;warn('setText is now deprecated, please use the text property, e.g : myBitmapText.text = \'my text\';');};core.Text.prototype.setText=function(text)
{this.text=text;warn('setText is now deprecated, please use the text property, e.g : myText.text = \'my text\';');};core.Text.prototype.setStyle=function(style)
{this.style=style;warn('setStyle is now deprecated, please use the style property, e.g : myText.style = style;');};Object.defineProperties(core.TextStyle.prototype,{font:{get:function()
{warn('text style property \'font\' is now deprecated, please use the \'fontFamily\',\'fontSize\',fontStyle\',\'fontVariant\' and \'fontWeight\' properties from now on');var fontSizeString=(typeof this._fontSize==='number')?this._fontSize+'px':this._fontSize;return this._fontStyle+' '+this._fontVariant+' '+this._fontWeight+' '+fontSizeString+' '+this._fontFamily;},set:function(font)
{warn('text style property \'font\' is now deprecated, please use the \'fontFamily\',\'fontSize\',fontStyle\',\'fontVariant\' and \'fontWeight\' properties from now on');if(font.indexOf('italic')>1)
{this._fontStyle='italic';}
else if(font.indexOf('oblique')>-1)
{this._fontStyle='oblique';}
else
{this._fontStyle='normal';}
if(font.indexOf('small-caps')>-1)
{this._fontVariant='small-caps';}
else
{this._fontVariant='normal';}
var splits=font.split(' ');var i;var fontSizeIndex=-1;this._fontSize=26;for(i=0;i<splits.length;++i)
{if(splits[i].match(/(px|pt|em|%)/))
{fontSizeIndex=i;this._fontSize=splits[i];break;}}
this._fontWeight='normal';for(i=0;i<fontSizeIndex;++i)
{if(splits[i].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/))
{this._fontWeight=splits[i];break;}}
if(fontSizeIndex>-1&&fontSizeIndex<splits.length-1)
{this._fontFamily='';for(i=fontSizeIndex+1;i<splits.length;++i)
{this._fontFamily+=splits[i]+' ';}
this._fontFamily=this._fontFamily.slice(0,-1);}
else
{this._fontFamily='Arial';}
this.styleID++;}}});core.Texture.prototype.setFrame=function(frame)
{this.frame=frame;warn('setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;');};Object.defineProperties(filters,{AbstractFilter:{get:function()
{warn('AstractFilter has been renamed to Filter, please use PIXI.Filter');return core.AbstractFilter;}},SpriteMaskFilter:{get:function()
{warn('filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on.');return core.SpriteMaskFilter;}}});core.utils.uuid=function()
{warn('utils.uuid() is deprecated, please use utils.uid() from now on.');return core.utils.uid();};core.utils.canUseNewCanvasBlendModes=function(){warn('utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on');return core.CanvasTinter.canUseMultiply;};},{"./core":97,"./extras":164,"./filters":175,"./mesh":191,"./particles":194}],155:[function(require,module,exports){var core=require('../../core'),tempRect=new core.Rectangle();function CanvasExtract(renderer)
{this.renderer=renderer;renderer.extract=this;}
CanvasExtract.prototype.constructor=CanvasExtract;module.exports=CanvasExtract;CanvasExtract.prototype.image=function(target)
{var image=new Image();image.src=this.base64(target);return image;};CanvasExtract.prototype.base64=function(target)
{return this.canvas(target).toDataURL();};CanvasExtract.prototype.canvas=function(target)
{var renderer=this.renderer;var context;var resolution;var frame;var renderTexture;if(target)
{if(target instanceof core.RenderTexture)
{renderTexture=target;}
else
{renderTexture=renderer.generateTexture(target);}}
if(renderTexture)
{context=renderTexture.baseTexture._canvasRenderTarget.context;resolution=renderTexture.baseTexture._canvasRenderTarget.resolution;frame=renderTexture.frame;}
else
{context=renderer.rootContext;resolution=renderer.rootResolution;frame=tempRect;frame.width=this.renderer.width;frame.height=this.renderer.height;}
var width=frame.width*resolution;var height=frame.height*resolution;var canvasBuffer=new core.CanvasRenderTarget(width,height);var canvasData=context.getImageData(frame.x*resolution,frame.y*resolution,width,height);canvasBuffer.context.putImageData(canvasData,0,0);return canvasBuffer.canvas;};CanvasExtract.prototype.pixels=function(target)
{var renderer=this.renderer;var context;var resolution;var frame;var renderTexture;if(target)
{if(target instanceof core.RenderTexture)
{renderTexture=target;}
else
{renderTexture=renderer.generateTexture(target);}}
if(renderTexture)
{context=renderTexture.baseTexture._canvasRenderTarget.context;resolution=renderTexture.baseTexture._canvasRenderTarget.resolution;frame=renderTexture.frame;}
else
{context=renderer.rootContext;resolution=renderer.rootResolution;frame=tempRect;frame.width=renderer.width;frame.height=renderer.height;}
return context.getImageData(0,0,frame.width*resolution,frame.height*resolution).data;};CanvasExtract.prototype.destroy=function()
{this.renderer.extract=null;this.renderer=null;};core.CanvasRenderer.registerPlugin('extract',CanvasExtract);},{"../../core":97}],156:[function(require,module,exports){module.exports={webGL:require('./webgl/WebGLExtract'),canvas:require('./canvas/CanvasExtract')};},{"./canvas/CanvasExtract":155,"./webgl/WebGLExtract":157}],157:[function(require,module,exports){var core=require('../../core'),tempRect=new core.Rectangle();function WebGLExtract(renderer)
{this.renderer=renderer;renderer.extract=this;}
WebGLExtract.prototype.constructor=WebGLExtract;module.exports=WebGLExtract;WebGLExtract.prototype.image=function(target)
{var image=new Image();image.src=this.base64(target);return image;};WebGLExtract.prototype.base64=function(target)
{return this.canvas(target).toDataURL();};WebGLExtract.prototype.canvas=function(target)
{var renderer=this.renderer;var textureBuffer;var resolution;var frame;var flipY=false;var renderTexture;if(target)
{if(target instanceof core.RenderTexture)
{renderTexture=target;}
else
{renderTexture=this.renderer.generateTexture(target);}}
if(renderTexture)
{textureBuffer=renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];resolution=textureBuffer.resolution;frame=renderTexture.frame;flipY=false;}
else
{textureBuffer=this.renderer.rootRenderTarget;resolution=textureBuffer.resolution;flipY=true;frame=tempRect;frame.width=textureBuffer.size.width;frame.height=textureBuffer.size.height;}
var width=frame.width*resolution;var height=frame.height*resolution;var canvasBuffer=new core.CanvasRenderTarget(width,height);if(textureBuffer)
{renderer.bindRenderTarget(textureBuffer);var webGLPixels=new Uint8Array(4*width*height);var gl=renderer.gl;gl.readPixels(frame.x*resolution,frame.y*resolution,width,height,gl.RGBA,gl.UNSIGNED_BYTE,webGLPixels);var canvasData=canvasBuffer.context.getImageData(0,0,width,height);canvasData.data.set(webGLPixels);canvasBuffer.context.putImageData(canvasData,0,0);if(flipY)
{canvasBuffer.context.scale(1,-1);canvasBuffer.context.drawImage(canvasBuffer.canvas,0,-height);}}
return canvasBuffer.canvas;};WebGLExtract.prototype.pixels=function(target)
{var renderer=this.renderer;var textureBuffer;var resolution;var frame;var renderTexture;if(target)
{if(target instanceof core.RenderTexture)
{renderTexture=target;}
else
{renderTexture=this.renderer.generateTexture(target);}}
if(renderTexture)
{textureBuffer=renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];resolution=textureBuffer.resolution;frame=renderTexture.frame;}
else
{textureBuffer=this.renderer.rootRenderTarget;resolution=textureBuffer.resolution;frame=tempRect;frame.width=textureBuffer.size.width;frame.height=textureBuffer.size.height;}
var width=frame.width*resolution;var height=frame.height*resolution;var webGLPixels=new Uint8Array(4*width*height);if(textureBuffer)
{renderer.bindRenderTarget(textureBuffer);var gl=renderer.gl;gl.readPixels(frame.x*resolution,frame.y*resolution,width,height,gl.RGBA,gl.UNSIGNED_BYTE,webGLPixels);}
return webGLPixels;};WebGLExtract.prototype.destroy=function()
{this.renderer.extract=null;this.renderer=null;};core.WebGLRenderer.registerPlugin('extract',WebGLExtract);},{"../../core":97}],158:[function(require,module,exports){var core=require('../core'),ObservablePoint=require('../core/math/ObservablePoint');function BitmapText(text,style)
{core.Container.call(this);style=style||{};this.textWidth=0;this.textHeight=0;this._glyphs=[];this._font={tint:style.tint!==undefined?style.tint:0xFFFFFF,align:style.align||'left',name:null,size:0};this.font=style.font;this._text=text;this.maxWidth=0;this.maxLineHeight=0;this._anchor=new ObservablePoint(this.makeDirty,this,0,0);this.dirty=false;this.updateText();}
BitmapText.prototype=Object.create(core.Container.prototype);BitmapText.prototype.constructor=BitmapText;module.exports=BitmapText;Object.defineProperties(BitmapText.prototype,{tint:{get:function()
{return this._font.tint;},set:function(value)
{this._font.tint=(typeof value==='number'&&value>=0)?value:0xFFFFFF;this.dirty=true;}},align:{get:function()
{return this._font.align;},set:function(value)
{this._font.align=value||'left';this.dirty=true;}},anchor:{get:function(){return this._anchor;},set:function(value){if(typeof value==='number'){this._anchor.set(value);}
else{this._anchor.copy(value);}}},font:{get:function()
{return this._font;},set:function(value)
{if(!value){return;}
if(typeof value==='string'){value=value.split(' ');this._font.name=value.length===1?value[0]:value.slice(1).join(' ');this._font.size=value.length>=2?parseInt(value[0],10):BitmapText.fonts[this._font.name].size;}
else{this._font.name=value.name;this._font.size=typeof value.size==='number'?value.size:parseInt(value.size,10);}
this.dirty=true;}},text:{get:function()
{return this._text;},set:function(value)
{value=value.toString()||' ';if(this._text===value)
{return;}
this._text=value;this.dirty=true;}}});BitmapText.prototype.updateText=function()
{var data=BitmapText.fonts[this._font.name];var pos=new core.Point();var prevCharCode=null;var chars=[];var lastLineWidth=0;var maxLineWidth=0;var lineWidths=[];var line=0;var scale=this._font.size/data.size;var lastSpace=-1;var lastSpaceWidth=0;var maxLineHeight=0;for(var i=0;i<this.text.length;i++)
{var charCode=this.text.charCodeAt(i);if(/(\s)/.test(this.text.charAt(i))){lastSpace=i;lastSpaceWidth=lastLineWidth;}
if(/(?:\r\n|\r|\n)/.test(this.text.charAt(i)))
{lineWidths.push(lastLineWidth);maxLineWidth=Math.max(maxLineWidth,lastLineWidth);line++;pos.x=0;pos.y+=data.lineHeight;prevCharCode=null;continue;}
if(lastSpace!==-1&&this.maxWidth>0&&pos.x*scale>this.maxWidth)
{core.utils.removeItems(chars,lastSpace,i-lastSpace);i=lastSpace;lastSpace=-1;lineWidths.push(lastSpaceWidth);maxLineWidth=Math.max(maxLineWidth,lastSpaceWidth);line++;pos.x=0;pos.y+=data.lineHeight;prevCharCode=null;continue;}
var charData=data.chars[charCode];if(!charData)
{continue;}
if(prevCharCode&&charData.kerning[prevCharCode])
{pos.x+=charData.kerning[prevCharCode];}
chars.push({texture:charData.texture,line:line,charCode:charCode,position:new core.Point(pos.x+charData.xOffset,pos.y+charData.yOffset)});lastLineWidth=pos.x+(charData.texture.width+charData.xOffset);pos.x+=charData.xAdvance;maxLineHeight=Math.max(maxLineHeight,(charData.yOffset+charData.texture.height));prevCharCode=charCode;}
lineWidths.push(lastLineWidth);maxLineWidth=Math.max(maxLineWidth,lastLineWidth);var lineAlignOffsets=[];for(i=0;i<=line;i++)
{var alignOffset=0;if(this._font.align==='right')
{alignOffset=maxLineWidth-lineWidths[i];}
else if(this._font.align==='center')
{alignOffset=(maxLineWidth-lineWidths[i])/2;}
lineAlignOffsets.push(alignOffset);}
var lenChars=chars.length;var tint=this.tint;for(i=0;i<lenChars;i++)
{var c=this._glyphs[i];if(c)
{c.texture=chars[i].texture;}
else
{c=new core.Sprite(chars[i].texture);this._glyphs.push(c);}
c.position.x=(chars[i].position.x+lineAlignOffsets[chars[i].line])*scale;c.position.y=chars[i].position.y*scale;c.scale.x=c.scale.y=scale;c.tint=tint;if(!c.parent)
{this.addChild(c);}}
for(i=lenChars;i<this._glyphs.length;++i)
{this.removeChild(this._glyphs[i]);}
this.textWidth=maxLineWidth*scale;this.textHeight=(pos.y+data.lineHeight)*scale;if(this.anchor.x!==0||this.anchor.y!==0)
{for(i=0;i<lenChars;i++)
{this._glyphs[i].x-=this.textWidth*this.anchor.x;this._glyphs[i].y-=this.textHeight*this.anchor.y;}}
this.maxLineHeight=maxLineHeight*scale;};BitmapText.prototype.updateTransform=function()
{this.validate();this.containerUpdateTransform();};BitmapText.prototype.getLocalBounds=function()
{this.validate();return core.Container.prototype.getLocalBounds.call(this);};BitmapText.prototype.validate=function()
{if(this.dirty)
{this.updateText();this.dirty=false;}};BitmapText.prototype.makeDirty=function(){this.dirty=true;};BitmapText.fonts={};},{"../core":97,"../core/math/ObservablePoint":100}],159:[function(require,module,exports){var core=require('../core');function MovieClip(textures)
{core.Sprite.call(this,textures[0]instanceof core.Texture?textures[0]:textures[0].texture);this._textures=null;this._durations=null;this.textures=textures;this.animationSpeed=1;this.loop=true;this.onComplete=null;this._currentTime=0;this.playing=false;}
MovieClip.prototype=Object.create(core.Sprite.prototype);MovieClip.prototype.constructor=MovieClip;module.exports=MovieClip;Object.defineProperties(MovieClip.prototype,{totalFrames:{get:function()
{return this._textures.length;}},textures:{get:function()
{return this._textures;},set:function(value)
{if(value[0]instanceof core.Texture)
{this._textures=value;this._durations=null;}
else
{this._textures=[];this._durations=[];for(var i=0;i<value.length;i++)
{this._textures.push(value[i].texture);this._durations.push(value[i].time);}}}},currentFrame:{get:function()
{var currentFrame=Math.floor(this._currentTime)%this._textures.length;if(currentFrame<0)
{currentFrame+=this._textures.length;}
return currentFrame;}}});MovieClip.prototype.stop=function()
{if(!this.playing)
{return;}
this.playing=false;core.ticker.shared.remove(this.update,this);};MovieClip.prototype.play=function()
{if(this.playing)
{return;}
this.playing=true;core.ticker.shared.add(this.update,this);};MovieClip.prototype.gotoAndStop=function(frameNumber)
{this.stop();this._currentTime=frameNumber;this._texture=this._textures[this.currentFrame];this._textureID=-1;};MovieClip.prototype.gotoAndPlay=function(frameNumber)
{this._currentTime=frameNumber;this.play();};MovieClip.prototype.update=function(deltaTime)
{var elapsed=this.animationSpeed*deltaTime;if(this._durations!==null)
{var lag=this._currentTime%1*this._durations[this.currentFrame];lag+=elapsed/60*1000;while(lag<0)
{this._currentTime--;lag+=this._durations[this.currentFrame];}
var sign=Math.sign(this.animationSpeed*deltaTime);this._currentTime=Math.floor(this._currentTime);while(lag>=this._durations[this.currentFrame])
{lag-=this._durations[this.currentFrame]*sign;this._currentTime+=sign;}
this._currentTime+=lag/this._durations[this.currentFrame];}
else
{this._currentTime+=elapsed;}
if(this._currentTime<0&&!this.loop)
{this.gotoAndStop(0);if(this.onComplete)
{this.onComplete();}}
else if(this._currentTime>=this._textures.length&&!this.loop)
{this.gotoAndStop(this._textures.length-1);if(this.onComplete)
{this.onComplete();}}
else
{this._texture=this._textures[this.currentFrame];this._textureID=-1;}};MovieClip.prototype.destroy=function()
{this.stop();core.Sprite.prototype.destroy.call(this);};MovieClip.fromFrames=function(frames)
{var textures=[];for(var i=0;i<frames.length;++i)
{textures.push(core.Texture.fromFrame(frames[i]));}
return new MovieClip(textures);};MovieClip.fromImages=function(images)
{var textures=[];for(var i=0;i<images.length;++i)
{textures.push(core.Texture.fromImage(images[i]));}
return new MovieClip(textures);};},{"../core":97}],160:[function(require,module,exports){var core=require('../core'),tempPoint=new core.Point(),Texture=require('../core/textures/Texture'),CanvasTinter=require('../core/sprites/canvas/CanvasTinter'),TilingShader=require('./webgl/TilingShader'),tempArray=new Float32Array(4);function TilingSprite(texture,width,height)
{core.Sprite.call(this,texture);this.tileScale=new core.Point(1,1);this.tilePosition=new core.Point(0,0);this._width=width||100;this._height=height||100;this._uvs=new core.TextureUvs();this._canvasPattern=null;this._glDatas=[];}
TilingSprite.prototype=Object.create(core.Sprite.prototype);TilingSprite.prototype.constructor=TilingSprite;module.exports=TilingSprite;Object.defineProperties(TilingSprite.prototype,{width:{get:function()
{return this._width;},set:function(value)
{this._width=value;}},height:{get:function()
{return this._height;},set:function(value)
{this._height=value;}}});TilingSprite.prototype._onTextureUpdate=function()
{return;};TilingSprite.prototype._renderWebGL=function(renderer)
{var texture=this._texture;if(!texture||!texture._uvs)
{return;}
renderer.flush();var gl=renderer.gl;var glData=this._glDatas[renderer.CONTEXT_UID];if(!glData)
{glData={shader:new TilingShader(gl),quad:new core.Quad(gl)};this._glDatas[renderer.CONTEXT_UID]=glData;glData.quad.initVao(glData.shader);}
var vertices=glData.quad.vertices;vertices[0]=vertices[6]=(this._width)*-this.anchor.x;vertices[1]=vertices[3]=this._height*-this.anchor.y;vertices[2]=vertices[4]=(this._width)*(1-this.anchor.x);vertices[5]=vertices[7]=this._height*(1-this.anchor.y);glData.quad.upload();renderer.bindShader(glData.shader);var textureUvs=texture._uvs,textureWidth=texture._frame.width,textureHeight=texture._frame.height,textureBaseWidth=texture.baseTexture.width,textureBaseHeight=texture.baseTexture.height;var uPixelSize=glData.shader.uniforms.uPixelSize;uPixelSize[0]=1.0/textureBaseWidth;uPixelSize[1]=1.0/textureBaseHeight;glData.shader.uniforms.uPixelSize=uPixelSize;var uFrame=glData.shader.uniforms.uFrame;uFrame[0]=textureUvs.x0;uFrame[1]=textureUvs.y0;uFrame[2]=textureUvs.x1-textureUvs.x0;uFrame[3]=textureUvs.y2-textureUvs.y0;glData.shader.uniforms.uFrame=uFrame;var uTransform=glData.shader.uniforms.uTransform;uTransform[0]=(this.tilePosition.x%(textureWidth*this.tileScale.x))/this._width;uTransform[1]=(this.tilePosition.y%(textureHeight*this.tileScale.y))/this._height;uTransform[2]=(textureBaseWidth/this._width)*this.tileScale.x;uTransform[3]=(textureBaseHeight/this._height)*this.tileScale.y;glData.shader.uniforms.uTransform=uTransform;glData.shader.uniforms.translationMatrix=this.worldTransform.toArray(true);var color=tempArray;core.utils.hex2rgb(this.tint,color);color[3]=this.worldAlpha;glData.shader.uniforms.uColor=color;renderer.bindTexture(this._texture,0);renderer.state.setBlendMode(this.blendMode);glData.quad.draw();};TilingSprite.prototype._renderCanvas=function(renderer)
{var texture=this._texture;if(!texture.baseTexture.hasLoaded)
{return;}
var context=renderer.context,transform=this.worldTransform,resolution=renderer.resolution,baseTexture=texture.baseTexture,modX=(this.tilePosition.x/this.tileScale.x)%texture._frame.width,modY=(this.tilePosition.y/this.tileScale.y)%texture._frame.height;if(!this._canvasPattern)
{var tempCanvas=new core.CanvasRenderTarget(texture._frame.width,texture._frame.height);if(this.tint!==0xFFFFFF)
{if(this.cachedTint!==this.tint)
{this.cachedTint=this.tint;this.tintedTexture=CanvasTinter.getTintedTexture(this,this.tint);}
tempCanvas.context.drawImage(this.tintedTexture,0,0);}
else
{tempCanvas.context.drawImage(baseTexture.source,-texture._frame.x,-texture._frame.y);}
this._canvasPattern=tempCanvas.context.createPattern(tempCanvas.canvas,'repeat');}
context.globalAlpha=this.worldAlpha;context.setTransform(transform.a*resolution,transform.b*resolution,transform.c*resolution,transform.d*resolution,transform.tx*resolution,transform.ty*resolution);context.scale(this.tileScale.x,this.tileScale.y);context.translate(modX+(this.anchor.x*-this._width),modY+(this.anchor.y*-this._height));var compositeOperation=renderer.blendModes[this.blendMode];if(compositeOperation!==renderer.context.globalCompositeOperation)
{context.globalCompositeOperation=compositeOperation;}
context.fillStyle=this._canvasPattern;context.fillRect(-modX,-modY,this._width/this.tileScale.x,this._height/this.tileScale.y);};TilingSprite.prototype.getBounds=function()
{var width=this._width;var height=this._height;var w0=width*(1-this.anchor.x);var w1=width*-this.anchor.x;var h0=height*(1-this.anchor.y);var h1=height*-this.anchor.y;var worldTransform=this.worldTransform;var a=worldTransform.a;var b=worldTransform.b;var c=worldTransform.c;var d=worldTransform.d;var tx=worldTransform.tx;var ty=worldTransform.ty;var x1=a*w1+c*h1+tx;var y1=d*h1+b*w1+ty;var x2=a*w0+c*h1+tx;var y2=d*h1+b*w0+ty;var x3=a*w0+c*h0+tx;var y3=d*h0+b*w0+ty;var x4=a*w1+c*h0+tx;var y4=d*h0+b*w1+ty;var minX,maxX,minY,maxY;minX=x1;minX=x2<minX?x2:minX;minX=x3<minX?x3:minX;minX=x4<minX?x4:minX;minY=y1;minY=y2<minY?y2:minY;minY=y3<minY?y3:minY;minY=y4<minY?y4:minY;maxX=x1;maxX=x2>maxX?x2:maxX;maxX=x3>maxX?x3:maxX;maxX=x4>maxX?x4:maxX;maxY=y1;maxY=y2>maxY?y2:maxY;maxY=y3>maxY?y3:maxY;maxY=y4>maxY?y4:maxY;var bounds=this._bounds;bounds.x=minX;bounds.width=maxX-minX;bounds.y=minY;bounds.height=maxY-minY;this._currentBounds=bounds;return bounds;};TilingSprite.prototype.containsPoint=function(point)
{this.worldTransform.applyInverse(point,tempPoint);var width=this._width;var height=this._height;var x1=-width*this.anchor.x;var y1;if(tempPoint.x>x1&&tempPoint.x<x1+width)
{y1=-height*this.anchor.y;if(tempPoint.y>y1&&tempPoint.y<y1+height)
{return true;}}
return false;};TilingSprite.prototype.destroy=function(){core.Sprite.prototype.destroy.call(this);this.tileScale=null;this._tileScaleOffset=null;this.tilePosition=null;this._uvs=null;};TilingSprite.from=function(source,width,height)
{return new TilingSprite(Texture.from(source),width,height);};TilingSprite.fromFrame=function(frameId,width,height)
{var texture=core.utils.TextureCache[frameId];if(!texture)
{throw new Error('The frameId "'+frameId+'" does not exist in the texture cache '+this);}
return new TilingSprite(texture,width,height);};TilingSprite.fromImage=function(imageId,width,height,crossorigin,scaleMode)
{return new TilingSprite(core.Texture.fromImage(imageId,crossorigin,scaleMode),width,height);};},{"../core":97,"../core/sprites/canvas/CanvasTinter":135,"../core/textures/Texture":144,"./webgl/TilingShader":165}],161:[function(require,module,exports){var core=require('../core'),DisplayObject=core.DisplayObject,_tempMatrix=new core.Matrix();DisplayObject.prototype._cacheAsBitmap=false;DisplayObject.prototype._cacheData=false;var CacheData=function(){this.originalRenderWebGL=null;this.originalRenderCanvas=null;this.originalCalculateBounds=null;this.originalGetLocalBounds=null;this.originalUpdateTransform=null;this.originalHitTest=null;this.originalDestroy=null;this.originalMask=null;this.originalFilterArea=null;this.sprite=null;};Object.defineProperties(DisplayObject.prototype,{cacheAsBitmap:{get:function()
{return this._cacheAsBitmap;},set:function(value)
{if(this._cacheAsBitmap===value)
{return;}
this._cacheAsBitmap=value;var data;if(value)
{if(!this._cacheData)
{this._cacheData=new CacheData();}
data=this._cacheData;data.originalRenderWebGL=this.renderWebGL;data.originalRenderCanvas=this.renderCanvas;data.originalUpdateTransform=this.updateTransform;data.originalCalculateBounds=this._calculateBounds;data.originalGetLocalBounds=this.getLocalBounds;data.originalDestroy=this.destroy;data.originalContainsPoint=this.containsPoint;data.originalMask=this._mask;data.originalFilterArea=this.filterArea;this.renderWebGL=this._renderCachedWebGL;this.renderCanvas=this._renderCachedCanvas;this.destroy=this._cacheAsBitmapDestroy;}
else
{data=this._cacheData;if(data.sprite)
{this._destroyCachedDisplayObject();}
this.renderWebGL=data.originalRenderWebGL;this.renderCanvas=data.originalRenderCanvas;this._calculateBounds=data.originalCalculateBounds;this.getLocalBounds=data.originalGetLocalBounds;this.destroy=data.originalDestroy;this.updateTransform=data.originalUpdateTransform;this.containsPoint=data.originalContainsPoint;this._mask=data.originalMask;this.filterArea=data.originalFilterArea;}}}});DisplayObject.prototype._renderCachedWebGL=function(renderer)
{if(!this.visible||this.worldAlpha<=0||!this.renderable)
{return;}
this._initCachedDisplayObject(renderer);this._cacheData.sprite._transformID=-1;this._cacheData.sprite.worldAlpha=this.worldAlpha;this._cacheData.sprite._renderWebGL(renderer);};DisplayObject.prototype._initCachedDisplayObject=function(renderer)
{if(this._cacheData&&this._cacheData.sprite)
{return;}
var cacheAlpha=this.alpha;this.alpha=1;renderer.currentRenderer.flush();var bounds=this.getLocalBounds().clone();if(this._filters)
{var padding=this._filters[0].padding;bounds.pad(padding);}
var cachedRenderTarget=renderer._activeRenderTarget;var stack=renderer.filterManager.filterStack;var renderTexture=core.RenderTexture.create(bounds.width|0,bounds.height|0);var m=_tempMatrix;m.tx=-bounds.x;m.ty=-bounds.y;this.transform.worldTransform.identity();this.renderWebGL=this._cacheData.originalRenderWebGL;renderer.render(this,renderTexture,true,m,true);renderer.bindRenderTarget(cachedRenderTarget);renderer.filterManager.filterStack=stack;this.renderWebGL=this._renderCachedWebGL;this.updateTransform=this.displayObjectUpdateTransform;this._mask=null;this.filterArea=null;var cachedSprite=new core.Sprite(renderTexture);cachedSprite.transform.worldTransform=this.transform.worldTransform;cachedSprite.anchor.x=-(bounds.x/bounds.width);cachedSprite.anchor.y=-(bounds.y/bounds.height);cachedSprite.alpha=cacheAlpha;cachedSprite._bounds=this._bounds;this._calculateBounds=this._calculateCachedBounds;this.getLocalBounds=this._getCachedLocalBounds;this._cacheData.sprite=cachedSprite;this.transform._parentID=-1;this.updateTransform();this.containsPoint=cachedSprite.containsPoint.bind(cachedSprite);};DisplayObject.prototype._renderCachedCanvas=function(renderer)
{if(!this.visible||this.worldAlpha<=0||!this.renderable)
{return;}
this._initCachedDisplayObjectCanvas(renderer);this._cacheData.sprite.worldAlpha=this.worldAlpha;this._cacheData.sprite.renderCanvas(renderer);};DisplayObject.prototype._initCachedDisplayObjectCanvas=function(renderer)
{if(this._cacheData&&this._cacheData.sprite)
{return;}
var bounds=this.getLocalBounds();var cacheAlpha=this.alpha;this.alpha=1;var cachedRenderTarget=renderer.context;var renderTexture=new core.RenderTexture.create(bounds.width|0,bounds.height|0);var m=_tempMatrix;this.transform.worldTransform.copy(m);m.invert();m.tx-=bounds.x;m.ty-=bounds.y;this.renderCanvas=this._cacheData.originalRenderCanvas;renderer.render(this,renderTexture,true,m,false);renderer.context=cachedRenderTarget;this.renderCanvas=this._renderCachedCanvas;this._calculateBounds=this._calculateCachedBounds;this._mask=null;this.filterArea=null;var cachedSprite=new core.Sprite(renderTexture);cachedSprite.transform.worldTransform=this.transform.worldTransform;cachedSprite.anchor.x=-(bounds.x/bounds.width);cachedSprite.anchor.y=-(bounds.y/bounds.height);cachedSprite._bounds=this._bounds;cachedSprite.alpha=cacheAlpha;this.updateTransform();this.updateTransform=this.displayObjectUpdateTransform;this._cacheData.sprite=cachedSprite;this.containsPoint=cachedSprite.containsPoint.bind(cachedSprite);};DisplayObject.prototype._calculateCachedBounds=function()
{return this._cacheData.sprite._calculateBounds();};DisplayObject.prototype._getCachedLocalBounds=function()
{return this._cacheData.sprite.getLocalBounds();};DisplayObject.prototype._destroyCachedDisplayObject=function()
{this._cacheData.sprite._texture.destroy(true);this._cacheData.sprite=null;};DisplayObject.prototype._cacheAsBitmapDestroy=function()
{this.cacheAsBitmap=false;this.destroy();};},{"../core":97}],162:[function(require,module,exports){var core=require('../core');core.DisplayObject.prototype.name=null;core.Container.prototype.getChildByName=function(name)
{for(var i=0;i<this.children.length;i++)
{if(this.children[i].name===name)
{return this.children[i];}}
return null;};},{"../core":97}],163:[function(require,module,exports){var core=require('../core');core.DisplayObject.prototype.getGlobalPosition=function(point)
{point=point||new core.Point();if(this.parent)
{this.displayObjectUpdateTransform();point.x=this.worldTransform.tx;point.y=this.worldTransform.ty;}
else
{point.x=this.position.x;point.y=this.position.y;}
return point;};},{"../core":97}],164:[function(require,module,exports){require('./cacheAsBitmap');require('./getChildByName');require('./getGlobalPosition');module.exports={MovieClip:require('./MovieClip'),TilingSprite:require('./TilingSprite'),BitmapText:require('./BitmapText')};},{"./BitmapText":158,"./MovieClip":159,"./TilingSprite":160,"./cacheAsBitmap":161,"./getChildByName":162,"./getGlobalPosition":163}],165:[function(require,module,exports){var Shader=require('../../core/Shader');function TilingShader(gl)
{Shader.call(this,gl,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\n\nuniform vec4 uFrame;\nuniform vec4 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vec2 coord = aTextureCoord;\n    coord -= uTransform.xy;\n    coord /= uTransform.zw;\n    vTextureCoord = coord;\n}\n","#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uFrame;\nuniform vec2 uPixelSize;\n\nvoid main(void)\n{\n\n   \tvec2 coord = mod(vTextureCoord, uFrame.zw);\n   \tcoord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);\n   \tcoord += uFrame.xy;\n\n   \tvec4 sample = texture2D(uSampler, coord);\n  \tvec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n   \tgl_FragColor = sample * color ;\n}\n");}
TilingShader.prototype=Object.create(Shader.prototype);TilingShader.prototype.constructor=TilingShader;module.exports=TilingShader;},{"../../core/Shader":77}],166:[function(require,module,exports){var core=require('../../core'),BlurXFilter=require('./BlurXFilter'),BlurYFilter=require('./BlurYFilter');function BlurFilter(strength,quality,resolution)
{core.Filter.call(this);this.blurXFilter=new BlurXFilter();this.blurYFilter=new BlurYFilter();this.resolution=1;this.padding=0;this.resolution=resolution||1;this.quality=quality||4;this.blur=strength||8;}
BlurFilter.prototype=Object.create(core.Filter.prototype);BlurFilter.prototype.constructor=BlurFilter;module.exports=BlurFilter;BlurFilter.prototype.apply=function(filterManager,input,output)
{var renderTarget=filterManager.getRenderTarget(true);this.blurXFilter.apply(filterManager,input,renderTarget,true);this.blurYFilter.apply(filterManager,renderTarget,output,false);filterManager.returnRenderTarget(renderTarget);};Object.defineProperties(BlurFilter.prototype,{blur:{get:function()
{return this.blurXFilter.blur;},set:function(value)
{this.blurXFilter.blur=this.blurYFilter.blur=value;this.padding=Math.max(Math.abs(this.blurYFilter.strength),Math.abs(this.blurYFilter.strength))*2;}},quality:{get:function()
{return this.blurXFilter.quality;},set:function(value)
{this.blurXFilter.quality=this.blurYFilter.quality=value;}},blurX:{get:function()
{return this.blurXFilter.blur;},set:function(value)
{this.blurXFilter.blur=value;this.padding=Math.max(Math.abs(this.blurYFilter.strength),Math.abs(this.blurYFilter.strength))*2;}},blurY:{get:function()
{return this.blurYFilter.blur;},set:function(value)
{this.blurYFilter.blur=value;this.padding=Math.max(Math.abs(this.blurYFilter.strength),Math.abs(this.blurYFilter.strength))*2;}}});},{"../../core":97,"./BlurXFilter":167,"./BlurYFilter":168}],167:[function(require,module,exports){var core=require('../../core');var generateBlurVertSource=require('./generateBlurVertSource');var generateBlurFragSource=require('./generateBlurFragSource');var getMaxBlurKernelSize=require('./getMaxBlurKernelSize');function BlurXFilter(strength,quality,resolution)
{var vertSrc=generateBlurVertSource(5,true);var fragSrc=generateBlurFragSource(5);core.Filter.call(this,vertSrc,fragSrc);this.resolution=resolution||1;this._quality=0;this.quality=quality||4;this.strength=strength||8;this.firstRun=true;}
BlurXFilter.prototype=Object.create(core.Filter.prototype);BlurXFilter.prototype.constructor=BlurXFilter;module.exports=BlurXFilter;BlurXFilter.prototype.apply=function(filterManager,input,output,clear)
{if(this.firstRun)
{var gl=filterManager.renderer.gl;var kernelSize=getMaxBlurKernelSize(gl);this.vertexSrc=generateBlurVertSource(kernelSize,true);this.fragmentSrc=generateBlurFragSource(kernelSize);this.firstRun=false;}
this.uniforms.strength=(1/output.size.width)*(output.size.width/input.size.width);this.uniforms.strength*=this.strength;this.uniforms.strength/=this.passes;if(this.passes===1)
{filterManager.applyFilter(this,input,output,clear);}
else
{var renderTarget=filterManager.getRenderTarget(true);var flip=input;var flop=renderTarget;for(var i=0;i<this.passes-1;i++)
{filterManager.applyFilter(this,flip,flop,true);var temp=flop;flop=flip;flip=temp;}
filterManager.applyFilter(this,flip,output,clear);filterManager.returnRenderTarget(renderTarget);}};Object.defineProperties(BlurXFilter.prototype,{blur:{get:function()
{return this.strength;},set:function(value)
{this.padding=Math.abs(value)*2;this.strength=value;}},quality:{get:function()
{return this._quality;},set:function(value)
{this._quality=value;this.passes=value;}}});},{"../../core":97,"./generateBlurFragSource":169,"./generateBlurVertSource":170,"./getMaxBlurKernelSize":171}],168:[function(require,module,exports){var core=require('../../core');var generateBlurVertSource=require('./generateBlurVertSource');var generateBlurFragSource=require('./generateBlurFragSource');var getMaxBlurKernelSize=require('./getMaxBlurKernelSize');function BlurYFilter(strength,quality,resolution)
{var vertSrc=generateBlurVertSource(5,false);var fragSrc=generateBlurFragSource(5);core.Filter.call(this,vertSrc,fragSrc);this.resolution=resolution||1;this._quality=0;this.quality=quality||4;this.strength=strength||8;this.firstRun=true;}
BlurYFilter.prototype=Object.create(core.Filter.prototype);BlurYFilter.prototype.constructor=BlurYFilter;module.exports=BlurYFilter;BlurYFilter.prototype.apply=function(filterManager,input,output,clear)
{if(this.firstRun)
{var gl=filterManager.renderer.gl;var kernelSize=getMaxBlurKernelSize(gl);this.vertexSrc=generateBlurVertSource(kernelSize,false);this.fragmentSrc=generateBlurFragSource(kernelSize);this.firstRun=false;}
this.uniforms.strength=(1/output.size.height)*(output.size.height/input.size.height);this.uniforms.strength*=this.strength;this.uniforms.strength/=this.passes;if(this.passes===1)
{filterManager.applyFilter(this,input,output,clear);}
else
{var renderTarget=filterManager.getRenderTarget(true);var flip=input;var flop=renderTarget;for(var i=0;i<this.passes-1;i++)
{filterManager.applyFilter(this,flip,flop,true);var temp=flop;flop=flip;flip=temp;}
filterManager.applyFilter(this,flip,output,clear);filterManager.returnRenderTarget(renderTarget);}};Object.defineProperties(BlurYFilter.prototype,{blur:{get:function()
{return this.strength;},set:function(value)
{this.padding=Math.abs(value)*2;this.strength=value;}},quality:{get:function()
{return this._quality;},set:function(value)
{this._quality=value;this.passes=value;}}});},{"../../core":97,"./generateBlurFragSource":169,"./generateBlurVertSource":170,"./getMaxBlurKernelSize":171}],169:[function(require,module,exports){var GAUSSIAN_VALUES={5:[0.153388,0.221461,0.250301],7:[0.071303,0.131514,0.189879,0.214607],9:[0.028532,0.067234,0.124009,0.179044,0.20236],11:[0.0093,0.028002,0.065984,0.121703,0.175713,0.198596],13:[0.002406,0.009255,0.027867,0.065666,0.121117,0.174868,0.197641],15:[0.000489,0.002403,0.009246,0.02784,0.065602,0.120999,0.174697,0.197448]};var fragTemplate=['varying vec2 vBlurTexCoords[%size%];','uniform sampler2D uSampler;','void main(void)','{',' gl_FragColor = vec4(0.0);',' %blur%','}'].join('\n');var generateFragBlurSource=function(kernelSize)
{var kernel=GAUSSIAN_VALUES[kernelSize];var halfLength=kernel.length;var fragSource=fragTemplate;var blurLoop='';var template='gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;';var value;for(var i=0;i<kernelSize;i++)
{var blur=template.replace('%index%',i);value=i;if(i>=halfLength)
{value=kernelSize-i-1;}
blur=blur.replace('%value%',kernel[value]);blurLoop+=blur;blurLoop+='\n';}
fragSource=fragSource.replace('%blur%',blurLoop);fragSource=fragSource.replace('%size%',kernelSize);return fragSource;};module.exports=generateFragBlurSource;},{}],170:[function(require,module,exports){var vertTemplate=['attribute vec2 aVertexPosition;','attribute vec2 aTextureCoord;','uniform float strength;','uniform mat3 projectionMatrix;','varying vec2 vBlurTexCoords[%size%];','void main(void)','{','gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);','%blur%','}'].join('\n');var generateVertBlurSource=function(kernelSize,x)
{var halfLength=Math.ceil(kernelSize/2);var vertSource=vertTemplate;var blurLoop='';var template;var value;if(x)
{template='vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);';}
else
{template='vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);';}
for(var i=0;i<kernelSize;i++)
{var blur=template.replace('%index%',i);value=i;if(i>=halfLength)
{value=kernelSize-i-1;}
blur=blur.replace('%sampleIndex%',(i-(halfLength-1))+'.0');blurLoop+=blur;blurLoop+='\n';}
vertSource=vertSource.replace('%blur%',blurLoop);vertSource=vertSource.replace('%size%',kernelSize);return vertSource;};module.exports=generateVertBlurSource;},{}],171:[function(require,module,exports){var getMaxKernelSize=function(gl)
{var maxVaryings=(gl.getParameter(gl.MAX_VARYING_VECTORS));var kernelSize=15;while(kernelSize>maxVaryings)
{kernelSize-=2;}
return kernelSize;};module.exports=getMaxKernelSize;},{}],172:[function(require,module,exports){var core=require('../../core');function ColorMatrixFilter()
{core.Filter.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n//    gl_FragColor = vec4(m[0]);\n}\n");this.uniforms.m=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];}
ColorMatrixFilter.prototype=Object.create(core.Filter.prototype);ColorMatrixFilter.prototype.constructor=ColorMatrixFilter;module.exports=ColorMatrixFilter;ColorMatrixFilter.prototype._loadMatrix=function(matrix,multiply)
{multiply=!!multiply;var newMatrix=matrix;if(multiply){this._multiply(newMatrix,this.uniforms.m,matrix);newMatrix=this._colorMatrix(newMatrix);}
this.uniforms.m=newMatrix;};ColorMatrixFilter.prototype._multiply=function(out,a,b)
{out[0]=(a[0]*b[0])+(a[1]*b[5])+(a[2]*b[10])+(a[3]*b[15]);out[1]=(a[0]*b[1])+(a[1]*b[6])+(a[2]*b[11])+(a[3]*b[16]);out[2]=(a[0]*b[2])+(a[1]*b[7])+(a[2]*b[12])+(a[3]*b[17]);out[3]=(a[0]*b[3])+(a[1]*b[8])+(a[2]*b[13])+(a[3]*b[18]);out[4]=(a[0]*b[4])+(a[1]*b[9])+(a[2]*b[14])+(a[3]*b[19]);out[5]=(a[5]*b[0])+(a[6]*b[5])+(a[7]*b[10])+(a[8]*b[15]);out[6]=(a[5]*b[1])+(a[6]*b[6])+(a[7]*b[11])+(a[8]*b[16]);out[7]=(a[5]*b[2])+(a[6]*b[7])+(a[7]*b[12])+(a[8]*b[17]);out[8]=(a[5]*b[3])+(a[6]*b[8])+(a[7]*b[13])+(a[8]*b[18]);out[9]=(a[5]*b[4])+(a[6]*b[9])+(a[7]*b[14])+(a[8]*b[19]);out[10]=(a[10]*b[0])+(a[11]*b[5])+(a[12]*b[10])+(a[13]*b[15]);out[11]=(a[10]*b[1])+(a[11]*b[6])+(a[12]*b[11])+(a[13]*b[16]);out[12]=(a[10]*b[2])+(a[11]*b[7])+(a[12]*b[12])+(a[13]*b[17]);out[13]=(a[10]*b[3])+(a[11]*b[8])+(a[12]*b[13])+(a[13]*b[18]);out[14]=(a[10]*b[4])+(a[11]*b[9])+(a[12]*b[14])+(a[13]*b[19]);out[15]=(a[15]*b[0])+(a[16]*b[5])+(a[17]*b[10])+(a[18]*b[15]);out[16]=(a[15]*b[1])+(a[16]*b[6])+(a[17]*b[11])+(a[18]*b[16]);out[17]=(a[15]*b[2])+(a[16]*b[7])+(a[17]*b[12])+(a[18]*b[17]);out[18]=(a[15]*b[3])+(a[16]*b[8])+(a[17]*b[13])+(a[18]*b[18]);out[19]=(a[15]*b[4])+(a[16]*b[9])+(a[17]*b[14])+(a[18]*b[19]);return out;};ColorMatrixFilter.prototype._colorMatrix=function(matrix)
{var m=new Float32Array(matrix);m[4]/=255;m[9]/=255;m[14]/=255;m[19]/=255;return m;};ColorMatrixFilter.prototype.brightness=function(b,multiply)
{var matrix=[b,0,0,0,0,0,b,0,0,0,0,0,b,0,0,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.greyscale=function(scale,multiply)
{var matrix=[scale,scale,scale,0,0,scale,scale,scale,0,0,scale,scale,scale,0,0,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.grayscale=ColorMatrixFilter.prototype.greyscale;ColorMatrixFilter.prototype.blackAndWhite=function(multiply)
{var matrix=[0.3,0.6,0.1,0,0,0.3,0.6,0.1,0,0,0.3,0.6,0.1,0,0,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.hue=function(rotation,multiply)
{rotation=(rotation||0)/180*Math.PI;var cosR=Math.cos(rotation),sinR=Math.sin(rotation),sqrt=Math.sqrt;var w=1/3,sqrW=sqrt(w);var a00=cosR+(1.0-cosR)*w;var a01=w*(1.0-cosR)-sqrW*sinR;var a02=w*(1.0-cosR)+sqrW*sinR;var a10=w*(1.0-cosR)+sqrW*sinR;var a11=cosR+w*(1.0-cosR);var a12=w*(1.0-cosR)-sqrW*sinR;var a20=w*(1.0-cosR)-sqrW*sinR;var a21=w*(1.0-cosR)+sqrW*sinR;var a22=cosR+w*(1.0-cosR);var matrix=[a00,a01,a02,0,0,a10,a11,a12,0,0,a20,a21,a22,0,0,0,0,0,1,0,];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.contrast=function(amount,multiply)
{var v=(amount||0)+1;var o=-128*(v-1);var matrix=[v,0,0,0,o,0,v,0,0,o,0,0,v,0,o,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.saturate=function(amount,multiply)
{var x=(amount||0)*2/3+1;var y=((x-1)*-0.5);var matrix=[x,y,y,0,0,y,x,y,0,0,y,y,x,0,0,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.desaturate=function()
{this.saturate(-1);};ColorMatrixFilter.prototype.negative=function(multiply)
{var matrix=[0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.sepia=function(multiply)
{var matrix=[0.393,0.7689999,0.18899999,0,0,0.349,0.6859999,0.16799999,0,0,0.272,0.5339999,0.13099999,0,0,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.technicolor=function(multiply)
{var matrix=[1.9125277891456083,-0.8545344976951645,-0.09155508482755585,0,11.793603434377337,-0.3087833385928097,1.7658908555458428,-0.10601743074722245,0,-70.35205161461398,-0.231103377548616,-0.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.polaroid=function(multiply)
{var matrix=[1.438,-0.062,-0.062,0,0,-0.122,1.378,-0.122,0,0,-0.016,-0.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.toBGR=function(multiply)
{var matrix=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.kodachrome=function(multiply)
{var matrix=[1.1285582396593525,-0.3967382283601348,-0.03992559172921793,0,63.72958762196502,-0.16404339962244616,1.0835251566291304,-0.05498805115633132,0,24.732407896706203,-0.16786010706155763,-0.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.browni=function(multiply)
{var matrix=[0.5997023498159715,0.34553243048391263,-0.2708298674538042,0,47.43192855600873,-0.037703249837783157,0.8609577587992641,0.15059552388459913,0,-36.96841498319127,0.24113635128153335,-0.07441037908422492,0.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.vintage=function(multiply)
{var matrix=[0.6279345635605994,0.3202183420819367,-0.03965408211312453,0,9.651285835294123,0.02578397704808868,0.6441188644374771,0.03259127616149294,0,7.462829176470591,0.0466055556782719,-0.0851232987247891,0.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.colorTone=function(desaturation,toned,lightColor,darkColor,multiply)
{desaturation=desaturation||0.2;toned=toned||0.15;lightColor=lightColor||0xFFE580;darkColor=darkColor||0x338000;var lR=((lightColor>>16)&0xFF)/255;var lG=((lightColor>>8)&0xFF)/255;var lB=(lightColor&0xFF)/255;var dR=((darkColor>>16)&0xFF)/255;var dG=((darkColor>>8)&0xFF)/255;var dB=(darkColor&0xFF)/255;var matrix=[0.3,0.59,0.11,0,0,lR,lG,lB,desaturation,0,dR,dG,dB,toned,0,lR-dR,lG-dG,lB-dB,0,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.night=function(intensity,multiply)
{intensity=intensity||0.1;var matrix=[intensity*(-2.0),-intensity,0,0,0,-intensity,0,intensity,0,0,0,intensity,intensity*2.0,0,0,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.predator=function(amount,multiply)
{var matrix=[11.224130630493164*amount,-4.794486999511719*amount,-2.8746118545532227*amount,0*amount,0.40342438220977783*amount,-3.6330697536468506*amount,9.193157196044922*amount,-2.951810836791992*amount,0*amount,-1.316135048866272*amount,-3.2184197902679443*amount,-4.2375030517578125*amount,7.476448059082031*amount,0*amount,0.8044459223747253*amount,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.lsd=function(multiply)
{var matrix=[2,-0.4,0.5,0,0,-0.5,2,-0.4,0,0,-0.4,-0.5,3,0,0,0,0,0,1,0];this._loadMatrix(matrix,multiply);};ColorMatrixFilter.prototype.reset=function()
{var matrix=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(matrix,false);};Object.defineProperties(ColorMatrixFilter.prototype,{matrix:{get:function()
{return this.uniforms.m;},set:function(value)
{this.uniforms.m=value;}}});},{"../../core":97}],173:[function(require,module,exports){var core=require('../../core');function DisplacementFilter(sprite,scale)
{var maskMatrix=new core.Matrix();sprite.renderable=false;core.Filter.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}","#define GLSLIFY 1\nvarying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n");this.maskSprite=sprite;this.maskMatrix=maskMatrix;this.uniforms.mapSampler=sprite.texture;this.uniforms.filterMatrix=maskMatrix.toArray(true);this.uniforms.scale={x:1,y:1};if(scale===null||scale===undefined)
{scale=20;}
this.scale=new core.Point(scale,scale);}
DisplacementFilter.prototype=Object.create(core.Filter.prototype);DisplacementFilter.prototype.constructor=DisplacementFilter;module.exports=DisplacementFilter;DisplacementFilter.prototype.apply=function(filterManager,input,output)
{var ratio=(1/output.destinationFrame.width)*(output.size.width/input.size.width);this.uniforms.filterMatrix=filterManager.calculateSpriteMatrix(this.maskMatrix,this.maskSprite);this.uniforms.scale.x=this.scale.x*ratio;this.uniforms.scale.y=this.scale.y*ratio;filterManager.applyFilter(this,input,output);};Object.defineProperties(DisplacementFilter.prototype,{map:{get:function()
{return this.uniforms.mapSampler;},set:function(value)
{this.uniforms.mapSampler=value;}}});},{"../../core":97}],174:[function(require,module,exports){var core=require('../../core');function FXAAFilter()
{core.Filter.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}","#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it's\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n  \tvec2 fragCoord = vTextureCoord * filterArea.xy;\n\n  \tvec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n  \tgl_FragColor = color;\n}\n");}
FXAAFilter.prototype=Object.create(core.Filter.prototype);FXAAFilter.prototype.constructor=FXAAFilter;module.exports=FXAAFilter;},{"../../core":97}],175:[function(require,module,exports){module.exports={FXAAFilter:require('./fxaa/FXAAFilter'),NoiseFilter:require('./noise/NoiseFilter'),DisplacementFilter:require('./displacement/DisplacementFilter'),BlurFilter:require('./blur/BlurFilter'),BlurXFilter:require('./blur/BlurXFilter'),BlurYFilter:require('./blur/BlurYFilter'),ColorMatrixFilter:require('./colormatrix/ColorMatrixFilter'),VoidFilter:require('./void/VoidFilter')};},{"./blur/BlurFilter":166,"./blur/BlurXFilter":167,"./blur/BlurYFilter":168,"./colormatrix/ColorMatrixFilter":172,"./displacement/DisplacementFilter":173,"./fxaa/FXAAFilter":174,"./noise/NoiseFilter":176,"./void/VoidFilter":177}],176:[function(require,module,exports){var core=require('../../core');function NoiseFilter()
{core.Filter.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n");this.noise=0.5;}
NoiseFilter.prototype=Object.create(core.Filter.prototype);NoiseFilter.prototype.constructor=NoiseFilter;module.exports=NoiseFilter;Object.defineProperties(NoiseFilter.prototype,{noise:{get:function()
{return this.uniforms.noise;},set:function(value)
{this.uniforms.noise=value;}}});},{"../../core":97}],177:[function(require,module,exports){var core=require('../../core');function VoidFilter()
{core.Filter.call(this,"#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n");this.glShaderKey='void';}
VoidFilter.prototype=Object.create(core.Filter.prototype);VoidFilter.prototype.constructor=VoidFilter;module.exports=VoidFilter;},{"../../core":97}],178:[function(require,module,exports){var core=require('../core');function InteractionData()
{this.global=new core.Point();this.target=null;this.originalEvent=null;}
InteractionData.prototype.constructor=InteractionData;module.exports=InteractionData;InteractionData.prototype.getLocalPosition=function(displayObject,point,globalPos)
{return displayObject.worldTransform.applyInverse(globalPos||this.global,point);};},{"../core":97}],179:[function(require,module,exports){var core=require('../core'),InteractionData=require('./InteractionData'),EventEmitter=require('eventemitter3');Object.assign(core.DisplayObject.prototype,require('./interactiveTarget'));function InteractionManager(renderer,options)
{EventEmitter.call(this);options=options||{};this.renderer=renderer;this.autoPreventDefault=options.autoPreventDefault!==undefined?options.autoPreventDefault:true;this.interactionFrequency=options.interactionFrequency||10;this.mouse=new InteractionData();this.mouse.global.set(-999999);this.eventData={stopped:false,target:null,type:null,data:this.mouse,stopPropagation:function(){this.stopped=true;}};this.interactiveDataPool=[];this.interactionDOMElement=null;this.moveWhenInside=false;this.eventsAdded=false;this.onMouseUp=this.onMouseUp.bind(this);this.processMouseUp=this.processMouseUp.bind(this);this.onMouseDown=this.onMouseDown.bind(this);this.processMouseDown=this.processMouseDown.bind(this);this.onMouseMove=this.onMouseMove.bind(this);this.processMouseMove=this.processMouseMove.bind(this);this.onMouseOut=this.onMouseOut.bind(this);this.processMouseOverOut=this.processMouseOverOut.bind(this);this.onMouseOver=this.onMouseOver.bind(this);this.onTouchStart=this.onTouchStart.bind(this);this.processTouchStart=this.processTouchStart.bind(this);this.onTouchEnd=this.onTouchEnd.bind(this);this.processTouchEnd=this.processTouchEnd.bind(this);this.onTouchMove=this.onTouchMove.bind(this);this.processTouchMove=this.processTouchMove.bind(this);this.defaultCursorStyle='inherit';this.currentCursorStyle='inherit';this._tempPoint=new core.Point();this.resolution=1;this.setTargetElement(this.renderer.view,this.renderer.resolution);}
InteractionManager.prototype=Object.create(EventEmitter.prototype);InteractionManager.prototype.constructor=InteractionManager;module.exports=InteractionManager;InteractionManager.prototype.setTargetElement=function(element,resolution)
{this.removeEvents();this.interactionDOMElement=element;this.resolution=resolution||1;this.addEvents();};InteractionManager.prototype.addEvents=function()
{if(!this.interactionDOMElement)
{return;}
core.ticker.shared.add(this.update,this);if(window.navigator.msPointerEnabled)
{this.interactionDOMElement.style['-ms-content-zooming']='none';this.interactionDOMElement.style['-ms-touch-action']='none';}
window.document.addEventListener('mousemove',this.onMouseMove,true);this.interactionDOMElement.addEventListener('mousedown',this.onMouseDown,true);this.interactionDOMElement.addEventListener('mouseout',this.onMouseOut,true);this.interactionDOMElement.addEventListener('mouseover',this.onMouseOver,true);this.interactionDOMElement.addEventListener('touchstart',this.onTouchStart,true);this.interactionDOMElement.addEventListener('touchend',this.onTouchEnd,true);this.interactionDOMElement.addEventListener('touchmove',this.onTouchMove,true);window.addEventListener('mouseup',this.onMouseUp,true);this.eventsAdded=true;};InteractionManager.prototype.removeEvents=function()
{if(!this.interactionDOMElement)
{return;}
core.ticker.shared.remove(this.update);if(window.navigator.msPointerEnabled)
{this.interactionDOMElement.style['-ms-content-zooming']='';this.interactionDOMElement.style['-ms-touch-action']='';}
window.document.removeEventListener('mousemove',this.onMouseMove,true);this.interactionDOMElement.removeEventListener('mousedown',this.onMouseDown,true);this.interactionDOMElement.removeEventListener('mouseout',this.onMouseOut,true);this.interactionDOMElement.removeEventListener('mouseover',this.onMouseOver,true);this.interactionDOMElement.removeEventListener('touchstart',this.onTouchStart,true);this.interactionDOMElement.removeEventListener('touchend',this.onTouchEnd,true);this.interactionDOMElement.removeEventListener('touchmove',this.onTouchMove,true);this.interactionDOMElement=null;window.removeEventListener('mouseup',this.onMouseUp,true);this.eventsAdded=false;};InteractionManager.prototype.update=function(deltaTime)
{this._deltaTime+=deltaTime;if(this._deltaTime<this.interactionFrequency)
{return;}
this._deltaTime=0;if(!this.interactionDOMElement)
{return;}
if(this.didMove)
{this.didMove=false;return;}
this.cursor=this.defaultCursorStyle;this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,true);if(this.currentCursorStyle!==this.cursor)
{this.currentCursorStyle=this.cursor;this.interactionDOMElement.style.cursor=this.cursor;}};InteractionManager.prototype.dispatchEvent=function(displayObject,eventString,eventData)
{if(!eventData.stopped)
{eventData.target=displayObject;eventData.type=eventString;displayObject.emit(eventString,eventData);if(displayObject[eventString])
{displayObject[eventString](eventData);}}};InteractionManager.prototype.mapPositionToPoint=function(point,x,y)
{var rect;if(!this.interactionDOMElement.parentElement)
{rect={x:0,y:0,width:0,height:0};}else{rect=this.interactionDOMElement.getBoundingClientRect();}
point.x=((x-rect.left)*(this.interactionDOMElement.width/rect.width))/this.resolution;point.y=((y-rect.top)*(this.interactionDOMElement.height/rect.height))/this.resolution;};InteractionManager.prototype.processInteractive=function(point,displayObject,func,hitTest,interactive)
{if(!displayObject||!displayObject.visible)
{return false;}
var hit=false,interactiveParent=interactive=displayObject.interactive||interactive;if(displayObject.hitArea)
{interactiveParent=false;}
if(hitTest&&displayObject._mask)
{if(!displayObject._mask.containsPoint(point))
{hitTest=false;}}
if(hitTest&&displayObject.filterArea)
{if(!displayObject.filterArea.contains(point.x,point.y))
{hitTest=false;}}
if(displayObject.interactiveChildren)
{var children=displayObject.children;for(var i=children.length-1;i>=0;i--)
{var child=children[i];if(this.processInteractive(point,child,func,hitTest,interactiveParent))
{if(!child.parent)
{continue;}
hit=true;interactiveParent=false;hitTest=false;}}}
if(interactive)
{if(hitTest&&!hit)
{if(displayObject.hitArea)
{displayObject.worldTransform.applyInverse(point,this._tempPoint);hit=displayObject.hitArea.contains(this._tempPoint.x,this._tempPoint.y);}
else if(displayObject.containsPoint)
{hit=displayObject.containsPoint(point);}}
if(displayObject.interactive)
{func(displayObject,hit);}}
return hit;};InteractionManager.prototype.onMouseDown=function(event)
{this.mouse.originalEvent=event;this.eventData.data=this.mouse;this.eventData.stopped=false;this.mapPositionToPoint(this.mouse.global,event.clientX,event.clientY);if(this.autoPreventDefault)
{this.mouse.originalEvent.preventDefault();}
this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseDown,true);var isRightButton=event.button===2||event.which===3;this.emit(isRightButton?'rightdown':'mousedown',this.eventData);};InteractionManager.prototype.processMouseDown=function(displayObject,hit)
{var e=this.mouse.originalEvent;var isRightButton=e.button===2||e.which===3;if(hit)
{displayObject[isRightButton?'_isRightDown':'_isLeftDown']=true;this.dispatchEvent(displayObject,isRightButton?'rightdown':'mousedown',this.eventData);}};InteractionManager.prototype.onMouseUp=function(event)
{this.mouse.originalEvent=event;this.eventData.data=this.mouse;this.eventData.stopped=false;this.mapPositionToPoint(this.mouse.global,event.clientX,event.clientY);this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseUp,true);var isRightButton=event.button===2||event.which===3;this.emit(isRightButton?'rightup':'mouseup',this.eventData);};InteractionManager.prototype.processMouseUp=function(displayObject,hit)
{var e=this.mouse.originalEvent;var isRightButton=e.button===2||e.which===3;var isDown=isRightButton?'_isRightDown':'_isLeftDown';if(hit)
{this.dispatchEvent(displayObject,isRightButton?'rightup':'mouseup',this.eventData);if(displayObject[isDown])
{displayObject[isDown]=false;this.dispatchEvent(displayObject,isRightButton?'rightclick':'click',this.eventData);}}
else
{if(displayObject[isDown])
{displayObject[isDown]=false;this.dispatchEvent(displayObject,isRightButton?'rightupoutside':'mouseupoutside',this.eventData);}}};InteractionManager.prototype.onMouseMove=function(event)
{this.mouse.originalEvent=event;this.eventData.data=this.mouse;this.eventData.stopped=false;this.mapPositionToPoint(this.mouse.global,event.clientX,event.clientY);this.didMove=true;this.cursor=this.defaultCursorStyle;this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseMove,true);this.emit('mousemove',this.eventData);if(this.currentCursorStyle!==this.cursor)
{this.currentCursorStyle=this.cursor;this.interactionDOMElement.style.cursor=this.cursor;}};InteractionManager.prototype.processMouseMove=function(displayObject,hit)
{this.processMouseOverOut(displayObject,hit);if(!this.moveWhenInside||hit)
{this.dispatchEvent(displayObject,'mousemove',this.eventData);}};InteractionManager.prototype.onMouseOut=function(event)
{this.mouse.originalEvent=event;this.eventData.data=this.mouse;this.eventData.stopped=false;this.mapPositionToPoint(this.mouse.global,event.clientX,event.clientY);this.interactionDOMElement.style.cursor=this.defaultCursorStyle;this.mapPositionToPoint(this.mouse.global,event.clientX,event.clientY);this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,false);this.emit('mouseout',this.eventData);};InteractionManager.prototype.processMouseOverOut=function(displayObject,hit)
{if(hit)
{if(!displayObject._over)
{displayObject._over=true;this.dispatchEvent(displayObject,'mouseover',this.eventData);}
if(displayObject.buttonMode)
{this.cursor=displayObject.defaultCursor;}}
else
{if(displayObject._over)
{displayObject._over=false;this.dispatchEvent(displayObject,'mouseout',this.eventData);}}};InteractionManager.prototype.onMouseOver=function(event)
{this.mouse.originalEvent=event;this.eventData.data=this.mouse;this.eventData.stopped=false;this.emit('mouseover',this.eventData);};InteractionManager.prototype.onTouchStart=function(event)
{if(this.autoPreventDefault)
{event.preventDefault();}
var changedTouches=event.changedTouches;var cLength=changedTouches.length;for(var i=0;i<cLength;i++)
{var touchEvent=changedTouches[i];var touchData=this.getTouchData(touchEvent);touchData.originalEvent=event;this.eventData.data=touchData;this.eventData.stopped=false;this.processInteractive(touchData.global,this.renderer._lastObjectRendered,this.processTouchStart,true);this.emit('touchstart',this.eventData);this.returnTouchData(touchData);}};InteractionManager.prototype.processTouchStart=function(displayObject,hit)
{if(hit)
{displayObject._touchDown=true;this.dispatchEvent(displayObject,'touchstart',this.eventData);}};InteractionManager.prototype.onTouchEnd=function(event)
{if(this.autoPreventDefault)
{event.preventDefault();}
var changedTouches=event.changedTouches;var cLength=changedTouches.length;for(var i=0;i<cLength;i++)
{var touchEvent=changedTouches[i];var touchData=this.getTouchData(touchEvent);touchData.originalEvent=event;this.eventData.data=touchData;this.eventData.stopped=false;this.processInteractive(touchData.global,this.renderer._lastObjectRendered,this.processTouchEnd,true);this.emit('touchend',this.eventData);this.returnTouchData(touchData);}};InteractionManager.prototype.processTouchEnd=function(displayObject,hit)
{if(hit)
{this.dispatchEvent(displayObject,'touchend',this.eventData);if(displayObject._touchDown)
{displayObject._touchDown=false;this.dispatchEvent(displayObject,'tap',this.eventData);}}
else
{if(displayObject._touchDown)
{displayObject._touchDown=false;this.dispatchEvent(displayObject,'touchendoutside',this.eventData);}}};InteractionManager.prototype.onTouchMove=function(event)
{if(this.autoPreventDefault)
{event.preventDefault();}
var changedTouches=event.changedTouches;var cLength=changedTouches.length;for(var i=0;i<cLength;i++)
{var touchEvent=changedTouches[i];var touchData=this.getTouchData(touchEvent);touchData.originalEvent=event;this.eventData.data=touchData;this.eventData.stopped=false;this.processInteractive(touchData.global,this.renderer._lastObjectRendered,this.processTouchMove,this.moveWhenInside);this.emit('touchmove',this.eventData);this.returnTouchData(touchData);}};InteractionManager.prototype.processTouchMove=function(displayObject,hit)
{if(!this.moveWhenInside||hit)
{this.dispatchEvent(displayObject,'touchmove',this.eventData);}};InteractionManager.prototype.getTouchData=function(touchEvent)
{var touchData=this.interactiveDataPool.pop();if(!touchData)
{touchData=new InteractionData();}
touchData.identifier=touchEvent.identifier;this.mapPositionToPoint(touchData.global,touchEvent.clientX,touchEvent.clientY);if(navigator.isCocoonJS)
{touchData.global.x=touchData.global.x/this.resolution;touchData.global.y=touchData.global.y/this.resolution;}
touchEvent.globalX=touchData.global.x;touchEvent.globalY=touchData.global.y;return touchData;};InteractionManager.prototype.returnTouchData=function(touchData)
{this.interactiveDataPool.push(touchData);};InteractionManager.prototype.destroy=function(){this.removeEvents();this.removeAllListeners();this.renderer=null;this.mouse=null;this.eventData=null;this.interactiveDataPool=null;this.interactionDOMElement=null;this.onMouseUp=null;this.processMouseUp=null;this.onMouseDown=null;this.processMouseDown=null;this.onMouseMove=null;this.processMouseMove=null;this.onMouseOut=null;this.processMouseOverOut=null;this.onMouseOver=null;this.onTouchStart=null;this.processTouchStart=null;this.onTouchEnd=null;this.processTouchEnd=null;this.onTouchMove=null;this.processTouchMove=null;this._tempPoint=null;};core.WebGLRenderer.registerPlugin('interaction',InteractionManager);core.CanvasRenderer.registerPlugin('interaction',InteractionManager);},{"../core":97,"./InteractionData":178,"./interactiveTarget":181,"eventemitter3":32}],180:[function(require,module,exports){module.exports={InteractionData:require('./InteractionData'),InteractionManager:require('./InteractionManager'),interactiveTarget:require('./interactiveTarget')};},{"./InteractionData":178,"./InteractionManager":179,"./interactiveTarget":181}],181:[function(require,module,exports){var interactiveTarget={interactive:false,interactiveChildren:true,hitArea:null,buttonMode:false,defaultCursor:'pointer',_over:false,_isLeftDown:false,_isRightDown:false,_touchDown:false};module.exports=interactiveTarget;},{}],182:[function(require,module,exports){var Resource=require('resource-loader').Resource,core=require('../core'),extras=require('../extras'),path=require('path');function parse(resource,texture){var data={};var info=resource.data.getElementsByTagName('info')[0];var common=resource.data.getElementsByTagName('common')[0];data.font=info.getAttribute('face');data.size=parseInt(info.getAttribute('size'),10);data.lineHeight=parseInt(common.getAttribute('lineHeight'),10);data.chars={};var letters=resource.data.getElementsByTagName('char');for(var i=0;i<letters.length;i++)
{var charCode=parseInt(letters[i].getAttribute('id'),10);var textureRect=new core.Rectangle(parseInt(letters[i].getAttribute('x'),10)+texture.frame.x,parseInt(letters[i].getAttribute('y'),10)+texture.frame.y,parseInt(letters[i].getAttribute('width'),10),parseInt(letters[i].getAttribute('height'),10));data.chars[charCode]={xOffset:parseInt(letters[i].getAttribute('xoffset'),10),yOffset:parseInt(letters[i].getAttribute('yoffset'),10),xAdvance:parseInt(letters[i].getAttribute('xadvance'),10),kerning:{},texture:new core.Texture(texture.baseTexture,textureRect)};}
var kernings=resource.data.getElementsByTagName('kerning');for(i=0;i<kernings.length;i++)
{var first=parseInt(kernings[i].getAttribute('first'),10);var second=parseInt(kernings[i].getAttribute('second'),10);var amount=parseInt(kernings[i].getAttribute('amount'),10);if(data.chars[second])
{data.chars[second].kerning[first]=amount;}}
resource.bitmapFont=data;extras.BitmapText.fonts[data.font]=data;}
module.exports=function()
{return function(resource,next)
{if(!resource.data||!resource.isXml)
{return next();}
if(resource.data.getElementsByTagName('page').length===0||resource.data.getElementsByTagName('info').length===0||resource.data.getElementsByTagName('info')[0].getAttribute('face')===null)
{return next();}
var xmlUrl=!resource.isDataUrl?path.dirname(resource.url):'';if(resource.isDataUrl){if(xmlUrl==='.'){xmlUrl='';}
if(this.baseUrl&&xmlUrl){if(this.baseUrl.charAt(this.baseUrl.length-1)==='/'){xmlUrl+='/';}
xmlUrl=xmlUrl.replace(this.baseUrl,'');}}
if(xmlUrl&&xmlUrl.charAt(xmlUrl.length-1)!=='/'){xmlUrl+='/';}
var textureUrl=xmlUrl+resource.data.getElementsByTagName('page')[0].getAttribute('file');if(core.utils.TextureCache[textureUrl]){parse(resource,core.utils.TextureCache[textureUrl]);next();}
else{var loadOptions={crossOrigin:resource.crossOrigin,loadType:Resource.LOAD_TYPE.IMAGE,metadata:resource.metadata.imageMetadata};this.add(resource.name+'_image',textureUrl,loadOptions,function(res){parse(resource,res.texture);next();});}};};},{"../core":97,"../extras":164,"path":60,"resource-loader":69}],183:[function(require,module,exports){module.exports={Loader:require('./loader'),bitmapFontParser:require('./bitmapFontParser'),spritesheetParser:require('./spritesheetParser'),textureParser:require('./textureParser'),Resource:require('resource-loader').Resource};},{"./bitmapFontParser":182,"./loader":184,"./spritesheetParser":185,"./textureParser":186,"resource-loader":69}],184:[function(require,module,exports){var ResourceLoader=require('resource-loader'),textureParser=require('./textureParser'),spritesheetParser=require('./spritesheetParser'),bitmapFontParser=require('./bitmapFontParser');function Loader(baseUrl,concurrency)
{ResourceLoader.call(this,baseUrl,concurrency);for(var i=0;i<Loader._pixiMiddleware.length;++i){this.use(Loader._pixiMiddleware[i]());}}
Loader.prototype=Object.create(ResourceLoader.prototype);Loader.prototype.constructor=Loader;module.exports=Loader;Loader._pixiMiddleware=[ResourceLoader.middleware.parsing.blob,textureParser,spritesheetParser,bitmapFontParser];Loader.addPixiMiddleware=function(fn){Loader._pixiMiddleware.push(fn);};var Resource=ResourceLoader.Resource;Resource.setExtensionXhrType('fnt',Resource.XHR_RESPONSE_TYPE.DOCUMENT);},{"./bitmapFontParser":182,"./spritesheetParser":185,"./textureParser":186,"resource-loader":69}],185:[function(require,module,exports){var Resource=require('resource-loader').Resource,path=require('path'),core=require('../core');var BATCH_SIZE=1000;module.exports=function()
{return function(resource,next)
{var resourcePath;var imageResourceName=resource.name+'_image';if(!resource.data||!resource.isJson||!resource.data.frames||this.resources[imageResourceName])
{return next();}
var loadOptions={crossOrigin:resource.crossOrigin,loadType:Resource.LOAD_TYPE.IMAGE,metadata:resource.metadata.imageMetadata};if(resource.isDataUrl)
{resourcePath=resource.data.meta.image;}
else
{resourcePath=path.dirname(resource.url.replace(this.baseUrl,''))+'/'+resource.data.meta.image;}
this.add(imageResourceName,resourcePath,loadOptions,function(res)
{resource.textures={};var frames=resource.data.frames;var frameKeys=Object.keys(frames);var resolution=core.utils.getResolutionOfUrl(resource.url);var batchIndex=0;function processFrames(initialFrameIndex,maxFrames)
{var frameIndex=initialFrameIndex;while(frameIndex-initialFrameIndex<maxFrames&&frameIndex<frameKeys.length)
{var i=frameKeys[frameIndex];var rect=frames[i].frame;if(rect)
{var frame=null;var trim=null;var orig=new core.Rectangle(0,0,frames[i].sourceSize.w/resolution,frames[i].sourceSize.h/resolution);if(frames[i].rotated){frame=new core.Rectangle(rect.x/resolution,rect.y/resolution,rect.h/resolution,rect.w/resolution);}
else{frame=new core.Rectangle(rect.x/resolution,rect.y/resolution,rect.w/resolution,rect.h/resolution);}
if(frames[i].trimmed)
{trim=new core.Rectangle(frames[i].spriteSourceSize.x/resolution,frames[i].spriteSourceSize.y/resolution,frames[i].spriteSourceSize.w/resolution,frames[i].spriteSourceSize.h/resolution);}
resource.textures[i]=new core.Texture(res.texture.baseTexture,frame,orig,trim,frames[i].rotated?2:0);core.utils.TextureCache[i]=resource.textures[i];}
frameIndex++;}}
function shouldProcessNextBatch()
{return batchIndex*BATCH_SIZE<frameKeys.length;}
function processNextBatch(done)
{processFrames(batchIndex*BATCH_SIZE,BATCH_SIZE);batchIndex++;setTimeout(done,0);}
function iteration(){processNextBatch(function(){if(shouldProcessNextBatch()){iteration();}else{next();}});}
if(frameKeys.length<=BATCH_SIZE)
{processFrames(0,BATCH_SIZE);next();}
else
{iteration();}});};};},{"../core":97,"path":60,"resource-loader":69}],186:[function(require,module,exports){var core=require('../core');module.exports=function()
{return function(resource,next)
{if(resource.data&&resource.isImage)
{var baseTexture=new core.BaseTexture(resource.data,null,core.utils.getResolutionOfUrl(resource.url));baseTexture.imageUrl=resource.url;resource.texture=new core.Texture(baseTexture);core.utils.BaseTextureCache[resource.url]=baseTexture;core.utils.TextureCache[resource.url]=resource.texture;}
next();};};},{"../core":97}],187:[function(require,module,exports){var core=require('../core'),glCore=require('pixi-gl-core'),Shader=require('./webgl/MeshShader'),tempPoint=new core.Point(),tempPolygon=new core.Polygon();function Mesh(texture,vertices,uvs,indices,drawMode)
{core.Container.call(this);this._texture=null;this.uvs=uvs||new Float32Array([0,0,1,0,1,1,0,1]);this.vertices=vertices||new Float32Array([0,0,100,0,100,100,0,100]);this.indices=indices||new Uint16Array([0,1,3,2]);this.dirty=0;this.indexDirty=0;this.blendMode=core.BLEND_MODES.NORMAL;this.canvasPadding=0;this.drawMode=drawMode||Mesh.DRAW_MODES.TRIANGLE_MESH;this.texture=texture;this.shader=null;this.tintRgb=new Float32Array([1,1,1]);this._glDatas=[];}
Mesh.prototype=Object.create(core.Container.prototype);Mesh.prototype.constructor=Mesh;module.exports=Mesh;Object.defineProperties(Mesh.prototype,{texture:{get:function()
{return this._texture;},set:function(value)
{if(this._texture===value)
{return;}
this._texture=value;if(value)
{if(value.baseTexture.hasLoaded)
{this._onTextureUpdate();}
else
{value.once('update',this._onTextureUpdate,this);}}}},tint:{get:function(){return core.utils.rgb2hex(this.tintRgb);},set:function(value){this.tintRgb=core.utils.hex2rgb(value,this.tintRgb);}}});Mesh.prototype._renderWebGL=function(renderer)
{renderer.flush();var gl=renderer.gl;var glData=this._glDatas[renderer.CONTEXT_UID];if(!glData)
{glData={shader:new Shader(gl),vertexBuffer:glCore.GLBuffer.createVertexBuffer(gl,this.vertices,gl.STREAM_DRAW),uvBuffer:glCore.GLBuffer.createVertexBuffer(gl,this.uvs,gl.STREAM_DRAW),indexBuffer:glCore.GLBuffer.createIndexBuffer(gl,this.indices,gl.STATIC_DRAW),vao:new glCore.VertexArrayObject(gl),dirty:this.dirty,indexDirty:this.indexDirty};glData.vao=new glCore.VertexArrayObject(gl).addIndex(glData.indexBuffer).addAttribute(glData.vertexBuffer,glData.shader.attributes.aVertexPosition,gl.FLOAT,false,2*4,0).addAttribute(glData.uvBuffer,glData.shader.attributes.aTextureCoord,gl.FLOAT,false,2*4,0);this._glDatas[renderer.CONTEXT_UID]=glData;}
if(this.dirty!==glData.dirty)
{glData.dirty=this.dirty;glData.uvBuffer.upload();}
if(this.indexDirty!==glData.indexDirty)
{glData.indexDirty=this.indexDirty;glData.indexBuffer.upload();}
glData.vertexBuffer.upload();renderer.bindShader(glData.shader);renderer.bindTexture(this._texture,0);renderer.state.setBlendMode(this.blendMode);glData.shader.uniforms.translationMatrix=this.worldTransform.toArray(true);glData.shader.uniforms.alpha=this.worldAlpha;glData.shader.uniforms.tint=this.tintRgb;var drawMode=this.drawMode===Mesh.DRAW_MODES.TRIANGLE_MESH?gl.TRIANGLE_STRIP:gl.TRIANGLES;glData.vao.bind().draw(drawMode,this.indices.length).unbind();};Mesh.prototype._renderCanvas=function(renderer)
{var context=renderer.context;var transform=this.worldTransform;var res=renderer.resolution;if(renderer.roundPixels)
{context.setTransform(transform.a*res,transform.b*res,transform.c*res,transform.d*res,(transform.tx*res)|0,(transform.ty*res)|0);}
else
{context.setTransform(transform.a*res,transform.b*res,transform.c*res,transform.d*res,transform.tx*res,transform.ty*res);}
if(this.drawMode===Mesh.DRAW_MODES.TRIANGLE_MESH)
{this._renderCanvasTriangleMesh(context);}
else
{this._renderCanvasTriangles(context);}};Mesh.prototype._renderCanvasTriangleMesh=function(context)
{var vertices=this.vertices;var uvs=this.uvs;var length=vertices.length/2;for(var i=0;i<length-2;i++)
{var index=i*2;this._renderCanvasDrawTriangle(context,vertices,uvs,index,(index+2),(index+4));}};Mesh.prototype._renderCanvasTriangles=function(context)
{var vertices=this.vertices;var uvs=this.uvs;var indices=this.indices;var length=indices.length;for(var i=0;i<length;i+=3)
{var index0=indices[i]*2,index1=indices[i+1]*2,index2=indices[i+2]*2;this._renderCanvasDrawTriangle(context,vertices,uvs,index0,index1,index2);}};Mesh.prototype._renderCanvasDrawTriangle=function(context,vertices,uvs,index0,index1,index2)
{var base=this._texture.baseTexture;var textureSource=base.source;var textureWidth=base.width;var textureHeight=base.height;var x0=vertices[index0],x1=vertices[index1],x2=vertices[index2];var y0=vertices[index0+1],y1=vertices[index1+1],y2=vertices[index2+1];var u0=uvs[index0]*base.width,u1=uvs[index1]*base.width,u2=uvs[index2]*base.width;var v0=uvs[index0+1]*base.height,v1=uvs[index1+1]*base.height,v2=uvs[index2+1]*base.height;if(this.canvasPadding>0)
{var paddingX=this.canvasPadding/this.worldTransform.a;var paddingY=this.canvasPadding/this.worldTransform.d;var centerX=(x0+x1+x2)/3;var centerY=(y0+y1+y2)/3;var normX=x0-centerX;var normY=y0-centerY;var dist=Math.sqrt(normX*normX+normY*normY);x0=centerX+(normX/dist)*(dist+paddingX);y0=centerY+(normY/dist)*(dist+paddingY);normX=x1-centerX;normY=y1-centerY;dist=Math.sqrt(normX*normX+normY*normY);x1=centerX+(normX/dist)*(dist+paddingX);y1=centerY+(normY/dist)*(dist+paddingY);normX=x2-centerX;normY=y2-centerY;dist=Math.sqrt(normX*normX+normY*normY);x2=centerX+(normX/dist)*(dist+paddingX);y2=centerY+(normY/dist)*(dist+paddingY);}
context.save();context.beginPath();context.moveTo(x0,y0);context.lineTo(x1,y1);context.lineTo(x2,y2);context.closePath();context.clip();var delta=(u0*v1)+(v0*u2)+(u1*v2)-(v1*u2)-(v0*u1)-(u0*v2);var deltaA=(x0*v1)+(v0*x2)+(x1*v2)-(v1*x2)-(v0*x1)-(x0*v2);var deltaB=(u0*x1)+(x0*u2)+(u1*x2)-(x1*u2)-(x0*u1)-(u0*x2);var deltaC=(u0*v1*x2)+(v0*x1*u2)+(x0*u1*v2)-(x0*v1*u2)-(v0*u1*x2)-(u0*x1*v2);var deltaD=(y0*v1)+(v0*y2)+(y1*v2)-(v1*y2)-(v0*y1)-(y0*v2);var deltaE=(u0*y1)+(y0*u2)+(u1*y2)-(y1*u2)-(y0*u1)-(u0*y2);var deltaF=(u0*v1*y2)+(v0*y1*u2)+(y0*u1*v2)-(y0*v1*u2)-(v0*u1*y2)-(u0*y1*v2);context.transform(deltaA/delta,deltaD/delta,deltaB/delta,deltaE/delta,deltaC/delta,deltaF/delta);context.drawImage(textureSource,0,0,textureWidth*base.resolution,textureHeight*base.resolution,0,0,textureWidth,textureHeight);context.restore();};Mesh.prototype.renderMeshFlat=function(Mesh)
{var context=this.context;var vertices=Mesh.vertices;var length=vertices.length/2;context.beginPath();for(var i=1;i<length-2;i++)
{var index=i*2;var x0=vertices[index],x1=vertices[index+2],x2=vertices[index+4];var y0=vertices[index+1],y1=vertices[index+3],y2=vertices[index+5];context.moveTo(x0,y0);context.lineTo(x1,y1);context.lineTo(x2,y2);}
context.fillStyle='#FF0000';context.fill();context.closePath();};Mesh.prototype._onTextureUpdate=function()
{};Mesh.prototype._calculateBounds=function()
{this._bounds.addVertices(this.transform,this.vertices,0,this.vertices.length);};Mesh.prototype.containsPoint=function(point){if(!this.getBounds().contains(point.x,point.y)){return false;}
this.worldTransform.applyInverse(point,tempPoint);var vertices=this.vertices;var points=tempPolygon.points;var indices=this.indices;var len=this.indices.length;var step=this.drawMode===Mesh.DRAW_MODES.TRIANGLES?3:1;for(var i=0;i+2<len;i+=step){var ind0=indices[i]*2,ind1=indices[i+1]*2,ind2=indices[i+2]*2;points[0]=vertices[ind0];points[1]=vertices[ind0+1];points[2]=vertices[ind1];points[3]=vertices[ind1+1];points[4]=vertices[ind2];points[5]=vertices[ind2+1];if(tempPolygon.contains(tempPoint.x,tempPoint.y)){return true;}}
return false;};Mesh.DRAW_MODES={TRIANGLE_MESH:0,TRIANGLES:1};},{"../core":97,"./webgl/MeshShader":192,"pixi-gl-core":7}],188:[function(require,module,exports){var DEFAULT_BORDER_SIZE=10;var Plane=require('./Plane');function NineSlicePlane(texture,leftWidth,topHeight,rightWidth,bottomHeight)
{Plane.call(this,texture,4,4);var uvs=this.uvs;uvs[6]=uvs[14]=uvs[22]=uvs[30]=1;uvs[25]=uvs[27]=uvs[29]=uvs[31]=1;this._origWidth=texture.width;this._origHeight=texture.height;this._uvw=1/this._origWidth;this._uvh=1/this._origHeight;this.width=texture.width;this.height=texture.height;uvs[2]=uvs[10]=uvs[18]=uvs[26]=this._uvw*leftWidth;uvs[4]=uvs[12]=uvs[20]=uvs[28]=1-this._uvw*rightWidth;uvs[9]=uvs[11]=uvs[13]=uvs[15]=this._uvh*topHeight;uvs[17]=uvs[19]=uvs[21]=uvs[23]=1-this._uvh*bottomHeight;this.leftWidth=typeof leftWidth!=='undefined'?leftWidth:DEFAULT_BORDER_SIZE;this.rightWidth=typeof rightWidth!=='undefined'?rightWidth:DEFAULT_BORDER_SIZE;this.topHeight=typeof topHeight!=='undefined'?topHeight:DEFAULT_BORDER_SIZE;this.bottomHeight=typeof bottomHeight!=='undefined'?bottomHeight:DEFAULT_BORDER_SIZE;}
NineSlicePlane.prototype=Object.create(Plane.prototype);NineSlicePlane.prototype.constructor=NineSlicePlane;module.exports=NineSlicePlane;Object.defineProperties(NineSlicePlane.prototype,{width:{get:function()
{return this._width;},set:function(value)
{this._width=value;this.updateVerticalVertices();}},height:{get:function()
{return this._height;},set:function(value)
{this._height=value;this.updateHorizontalVertices();}},leftWidth:{get:function()
{return this._leftWidth;},set:function(value)
{this._leftWidth=value;var uvs=this.uvs;var vertices=this.vertices;uvs[2]=uvs[10]=uvs[18]=uvs[26]=this._uvw*value;vertices[2]=vertices[10]=vertices[18]=vertices[26]=value;this.dirty=true;}},rightWidth:{get:function()
{return this._rightWidth;},set:function(value)
{this._rightWidth=value;var uvs=this.uvs;var vertices=this.vertices;uvs[4]=uvs[12]=uvs[20]=uvs[28]=1-this._uvw*value;vertices[4]=vertices[12]=vertices[20]=vertices[28]=this._width-value;this.dirty=true;}},topHeight:{get:function()
{return this._topHeight;},set:function(value)
{this._topHeight=value;var uvs=this.uvs;var vertices=this.vertices;uvs[9]=uvs[11]=uvs[13]=uvs[15]=this._uvh*value;vertices[9]=vertices[11]=vertices[13]=vertices[15]=value;this.dirty=true;}},bottomHeight:{get:function()
{return this._bottomHeight;},set:function(value)
{this._bottomHeight=value;var uvs=this.uvs;var vertices=this.vertices;uvs[17]=uvs[19]=uvs[21]=uvs[23]=1-this._uvh*value;vertices[17]=vertices[19]=vertices[21]=vertices[23]=this._height-value;this.dirty=true;}}});NineSlicePlane.prototype.updateHorizontalVertices=function(){var vertices=this.vertices;vertices[9]=vertices[11]=vertices[13]=vertices[15]=this._topHeight;vertices[17]=vertices[19]=vertices[21]=vertices[23]=this._height-this._bottomHeight;vertices[25]=vertices[27]=vertices[29]=vertices[31]=this._height;};NineSlicePlane.prototype.updateVerticalVertices=function(){var vertices=this.vertices;vertices[2]=vertices[10]=vertices[18]=vertices[26]=this._leftWidth;vertices[4]=vertices[12]=vertices[20]=vertices[28]=this._width-this._rightWidth;vertices[6]=vertices[14]=vertices[22]=vertices[30]=this._width;};NineSlicePlane.prototype._renderCanvas=function(renderer)
{var context=renderer.context;context.globalAlpha=this.worldAlpha;var transform=this.worldTransform;var res=renderer.resolution;if(renderer.roundPixels)
{context.setTransform(transform.a*res,transform.b*res,transform.c*res,transform.d*res,(transform.tx*res)|0,(transform.ty*res)|0);}
else
{context.setTransform(transform.a*res,transform.b*res,transform.c*res,transform.d*res,transform.tx*res,transform.ty*res);}
var base=this._texture.baseTexture;var textureSource=base.source;var w=base.width;var h=base.height;this.drawSegment(context,textureSource,w,h,0,1,10,11);this.drawSegment(context,textureSource,w,h,2,3,12,13);this.drawSegment(context,textureSource,w,h,4,5,14,15);this.drawSegment(context,textureSource,w,h,8,9,18,19);this.drawSegment(context,textureSource,w,h,10,11,20,21);this.drawSegment(context,textureSource,w,h,12,13,22,23);this.drawSegment(context,textureSource,w,h,16,17,26,27);this.drawSegment(context,textureSource,w,h,18,19,28,29);this.drawSegment(context,textureSource,w,h,20,21,30,31);};NineSlicePlane.prototype.drawSegment=function(context,textureSource,w,h,x1,y1,x2,y2)
{var uvs=this.uvs;var vertices=this.vertices;var sw=(uvs[x2]-uvs[x1])*w;var sh=(uvs[y2]-uvs[y1])*h;var dw=vertices[x2]-vertices[x1];var dh=vertices[y2]-vertices[y1];if(sw<1){sw=1;}
if(sh<1){sh=1;}
if(dw<1){dw=1;}
if(dh<1){dh=1;}
context.drawImage(textureSource,uvs[x1]*w,uvs[y1]*h,sw,sh,vertices[x1],vertices[y1],dw,dh);};},{"./Plane":189}],189:[function(require,module,exports){var Mesh=require('./Mesh');function Plane(texture,verticesX,verticesY)
{Mesh.call(this,texture);this._ready=true;this.verticesX=verticesX||10;this.verticesY=verticesY||10;this.drawMode=Mesh.DRAW_MODES.TRIANGLES;this.refresh();}
Plane.prototype=Object.create(Mesh.prototype);Plane.prototype.constructor=Plane;module.exports=Plane;Plane.prototype.refresh=function()
{var total=this.verticesX*this.verticesY;var verts=[];var colors=[];var uvs=[];var indices=[];var texture=this.texture;var segmentsX=this.verticesX-1;var segmentsY=this.verticesY-1;var i=0;var sizeX=texture.width/segmentsX;var sizeY=texture.height/segmentsY;for(i=0;i<total;i++){var x=(i%this.verticesX);var y=((i/this.verticesX)|0);verts.push((x*sizeX),(y*sizeY));uvs.push(texture._uvs.x0+(texture._uvs.x1-texture._uvs.x0)*(x/(this.verticesX-1)),texture._uvs.y0+(texture._uvs.y3-texture._uvs.y0)*(y/(this.verticesY-1)));}
var totalSub=segmentsX*segmentsY;for(i=0;i<totalSub;i++){var xpos=i%segmentsX;var ypos=(i/segmentsX)|0;var value=(ypos*this.verticesX)+xpos;var value2=(ypos*this.verticesX)+xpos+1;var value3=((ypos+1)*this.verticesX)+xpos;var value4=((ypos+1)*this.verticesX)+xpos+1;indices.push(value,value2,value3);indices.push(value2,value4,value3);}
this.vertices=new Float32Array(verts);this.uvs=new Float32Array(uvs);this.colors=new Float32Array(colors);this.indices=new Uint16Array(indices);this.indexDirty=true;};Plane.prototype._onTextureUpdate=function()
{Mesh.prototype._onTextureUpdate.call(this);if(this._ready){this.refresh();}};},{"./Mesh":187}],190:[function(require,module,exports){var Mesh=require('./Mesh');var core=require('../core');function Rope(texture,points)
{Mesh.call(this,texture);this.points=points;this.vertices=new Float32Array(points.length*4);this.uvs=new Float32Array(points.length*4);this.colors=new Float32Array(points.length*2);this.indices=new Uint16Array(points.length*2);this._ready=true;this.refresh();}
Rope.prototype=Object.create(Mesh.prototype);Rope.prototype.constructor=Rope;module.exports=Rope;Rope.prototype.refresh=function()
{var points=this.points;if(points.length<1||!this._texture._uvs)
{return;}
var uvs=this.uvs;var indices=this.indices;var colors=this.colors;var textureUvs=this._texture._uvs;var offset=new core.Point(textureUvs.x0,textureUvs.y0);var factor=new core.Point(textureUvs.x2-textureUvs.x0,textureUvs.y2-textureUvs.y0);uvs[0]=0+offset.x;uvs[1]=0+offset.y;uvs[2]=0+offset.x;uvs[3]=1*factor.y+offset.y;colors[0]=1;colors[1]=1;indices[0]=0;indices[1]=1;var total=points.length,point,index,amount;for(var i=1;i<total;i++)
{point=points[i];index=i*4;amount=i/(total-1);uvs[index]=amount*factor.x+offset.x;uvs[index+1]=0+offset.y;uvs[index+2]=amount*factor.x+offset.x;uvs[index+3]=1*factor.y+offset.y;index=i*2;colors[index]=1;colors[index+1]=1;index=i*2;indices[index]=index;indices[index+1]=index+1;}
this.dirty=true;this.indexDirty=true;};Rope.prototype._onTextureUpdate=function()
{Mesh.prototype._onTextureUpdate.call(this);if(this._ready){this.refresh();}};Rope.prototype.updateTransform=function()
{var points=this.points;if(points.length<1)
{return;}
var lastPoint=points[0];var nextPoint;var perpX=0;var perpY=0;var vertices=this.vertices;var total=points.length,point,index,ratio,perpLength,num;for(var i=0;i<total;i++)
{point=points[i];index=i*4;if(i<points.length-1)
{nextPoint=points[i+1];}
else
{nextPoint=point;}
perpY=-(nextPoint.x-lastPoint.x);perpX=nextPoint.y-lastPoint.y;ratio=(1-(i/(total-1)))*10;if(ratio>1)
{ratio=1;}
perpLength=Math.sqrt(perpX*perpX+perpY*perpY);num=this._texture.height/2;perpX/=perpLength;perpY/=perpLength;perpX*=num;perpY*=num;vertices[index]=point.x+perpX;vertices[index+1]=point.y+perpY;vertices[index+2]=point.x-perpX;vertices[index+3]=point.y-perpY;lastPoint=point;}
this.containerUpdateTransform();};},{"../core":97,"./Mesh":187}],191:[function(require,module,exports){module.exports={Mesh:require('./Mesh'),Plane:require('./Plane'),NineSlicePlane:require('./NineSlicePlane'),Rope:require('./Rope'),MeshShader:require('./webgl/MeshShader')};},{"./Mesh":187,"./NineSlicePlane":188,"./Plane":189,"./Rope":190,"./webgl/MeshShader":192}],192:[function(require,module,exports){var Shader=require('../../core/Shader');function MeshShader(gl)
{Shader.call(this,gl,['attribute vec2 aVertexPosition;','attribute vec2 aTextureCoord;','uniform mat3 translationMatrix;','uniform mat3 projectionMatrix;','varying vec2 vTextureCoord;','void main(void){','   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);','   vTextureCoord = aTextureCoord;','}'].join('\n'),['varying vec2 vTextureCoord;','uniform float alpha;','uniform vec3 tint;','uniform sampler2D uSampler;','void main(void){','   gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);','}'].join('\n'));}
MeshShader.prototype=Object.create(Shader.prototype);MeshShader.prototype.constructor=MeshShader;module.exports=MeshShader;},{"../../core/Shader":77}],193:[function(require,module,exports){var core=require('../core');function ParticleContainer(maxSize,properties,batchSize)
{core.Container.call(this);batchSize=batchSize||15000;maxSize=maxSize||15000;var maxBatchSize=16384;if(batchSize>maxBatchSize){batchSize=maxBatchSize;}
if(batchSize>maxSize){batchSize=maxSize;}
this._properties=[false,true,false,false,false];this._maxSize=maxSize;this._batchSize=batchSize;this._glBuffers=[];this._bufferToUpdate=0;this.interactiveChildren=false;this.blendMode=core.BLEND_MODES.NORMAL;this.roundPixels=true;this.baseTexture=null;this.setProperties(properties);}
ParticleContainer.prototype=Object.create(core.Container.prototype);ParticleContainer.prototype.constructor=ParticleContainer;module.exports=ParticleContainer;ParticleContainer.prototype.setProperties=function(properties)
{if(properties){this._properties[0]='scale'in properties?!!properties.scale:this._properties[0];this._properties[1]='position'in properties?!!properties.position:this._properties[1];this._properties[2]='rotation'in properties?!!properties.rotation:this._properties[2];this._properties[3]='uvs'in properties?!!properties.uvs:this._properties[3];this._properties[4]='alpha'in properties?!!properties.alpha:this._properties[4];}};ParticleContainer.prototype.updateTransform=function()
{this.displayObjectUpdateTransform();};ParticleContainer.prototype.renderWebGL=function(renderer)
{if(!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable)
{return;}
if(!this.baseTexture)
{this.baseTexture=this.children[0]._texture.baseTexture;if(!this.baseTexture.hasLoaded)
{this.baseTexture.once('update',function(){this.onChildrenChange(0);},this);}}
renderer.setObjectRenderer(renderer.plugins.particle);renderer.plugins.particle.render(this);};ParticleContainer.prototype.onChildrenChange=function(smallestChildIndex)
{var bufferIndex=Math.floor(smallestChildIndex/this._batchSize);if(bufferIndex<this._bufferToUpdate){this._bufferToUpdate=bufferIndex;}};ParticleContainer.prototype.renderCanvas=function(renderer)
{if(!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable)
{return;}
var context=renderer.context;var transform=this.worldTransform;var isRotated=true;var positionX=0;var positionY=0;var finalWidth=0;var finalHeight=0;var compositeOperation=renderer.blendModes[this.blendMode];if(compositeOperation!==context.globalCompositeOperation)
{context.globalCompositeOperation=compositeOperation;}
context.globalAlpha=this.worldAlpha;this.displayObjectUpdateTransform();for(var i=0;i<this.children.length;++i)
{var child=this.children[i];if(!child.visible)
{continue;}
var frame=child.texture.frame;context.globalAlpha=this.worldAlpha*child.alpha;if(child.rotation%(Math.PI*2)===0)
{if(isRotated)
{context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx*renderer.resolution,transform.ty*renderer.resolution);isRotated=false;}
positionX=((child.anchor.x)*(-frame.width*child.scale.x)+child.position.x+0.5);positionY=((child.anchor.y)*(-frame.height*child.scale.y)+child.position.y+0.5);finalWidth=frame.width*child.scale.x;finalHeight=frame.height*child.scale.y;}
else
{if(!isRotated)
{isRotated=true;}
child.displayObjectUpdateTransform();var childTransform=child.worldTransform;if(renderer.roundPixels)
{context.setTransform(childTransform.a,childTransform.b,childTransform.c,childTransform.d,(childTransform.tx*renderer.resolution)|0,(childTransform.ty*renderer.resolution)|0);}
else
{context.setTransform(childTransform.a,childTransform.b,childTransform.c,childTransform.d,childTransform.tx*renderer.resolution,childTransform.ty*renderer.resolution);}
positionX=((child.anchor.x)*(-frame.width)+0.5);positionY=((child.anchor.y)*(-frame.height)+0.5);finalWidth=frame.width;finalHeight=frame.height;}
var resolution=child.texture.baseTexture.resolution;context.drawImage(child.texture.baseTexture.source,frame.x*resolution,frame.y*resolution,frame.width*resolution,frame.height*resolution,positionX*resolution,positionY*resolution,finalWidth*resolution,finalHeight*resolution);}};ParticleContainer.prototype.destroy=function(){core.Container.prototype.destroy.apply(this,arguments);if(this._buffers){for(var i=0;i<this._buffers.length;++i){this._buffers[i].destroy();}}
this._properties=null;this._buffers=null;};},{"../core":97}],194:[function(require,module,exports){module.exports={ParticleContainer:require('./ParticleContainer'),ParticleRenderer:require('./webgl/ParticleRenderer')};},{"./ParticleContainer":193,"./webgl/ParticleRenderer":196}],195:[function(require,module,exports){var glCore=require('pixi-gl-core'),createIndicesForQuads=require('../../core/utils/createIndicesForQuads');function ParticleBuffer(gl,properties,dynamicPropertyFlags,size)
{this.gl=gl;this.vertSize=2;this.vertByteSize=this.vertSize*4;this.size=size;this.dynamicProperties=[];this.staticProperties=[];for(var i=0;i<properties.length;i++)
{var property=properties[i];property={attribute:property.attribute,size:property.size,uploadFunction:property.uploadFunction,offset:property.offset};if(dynamicPropertyFlags[i])
{this.dynamicProperties.push(property);}
else
{this.staticProperties.push(property);}}
this.staticStride=0;this.staticBuffer=null;this.staticData=null;this.dynamicStride=0;this.dynamicBuffer=null;this.dynamicData=null;this.initBuffers();}
ParticleBuffer.prototype.constructor=ParticleBuffer;module.exports=ParticleBuffer;ParticleBuffer.prototype.initBuffers=function()
{var gl=this.gl;var i;var property;var dynamicOffset=0;this.indices=createIndicesForQuads(this.size);this.indexBuffer=glCore.GLBuffer.createIndexBuffer(gl,this.indices,gl.STATIC_DRAW);this.dynamicStride=0;for(i=0;i<this.dynamicProperties.length;i++)
{property=this.dynamicProperties[i];property.offset=dynamicOffset;dynamicOffset+=property.size;this.dynamicStride+=property.size;}
this.dynamicData=new Float32Array(this.size*this.dynamicStride*4);this.dynamicBuffer=glCore.GLBuffer.createVertexBuffer(gl,this.dynamicData,gl.STREAM_DRAW);var staticOffset=0;this.staticStride=0;for(i=0;i<this.staticProperties.length;i++)
{property=this.staticProperties[i];property.offset=staticOffset;staticOffset+=property.size;this.staticStride+=property.size;}
this.staticData=new Float32Array(this.size*this.staticStride*4);this.staticBuffer=glCore.GLBuffer.createVertexBuffer(gl,this.staticData,gl.STATIC_DRAW);this.vao=new glCore.VertexArrayObject(gl).addIndex(this.indexBuffer);for(i=0;i<this.dynamicProperties.length;i++)
{property=this.dynamicProperties[i];this.vao.addAttribute(this.dynamicBuffer,property.attribute,gl.FLOAT,false,this.dynamicStride*4,property.offset*4);}
for(i=0;i<this.staticProperties.length;i++)
{property=this.staticProperties[i];this.vao.addAttribute(this.staticBuffer,property.attribute,gl.FLOAT,false,this.staticStride*4,property.offset*4);}};ParticleBuffer.prototype.uploadDynamic=function(children,startIndex,amount)
{for(var i=0;i<this.dynamicProperties.length;i++)
{var property=this.dynamicProperties[i];property.uploadFunction(children,startIndex,amount,this.dynamicData,this.dynamicStride,property.offset);}
this.dynamicBuffer.upload();};ParticleBuffer.prototype.uploadStatic=function(children,startIndex,amount)
{for(var i=0;i<this.staticProperties.length;i++)
{var property=this.staticProperties[i];property.uploadFunction(children,startIndex,amount,this.staticData,this.staticStride,property.offset);}
this.staticBuffer.upload();};ParticleBuffer.prototype.bind=function()
{this.vao.bind();};ParticleBuffer.prototype.destroy=function()
{this.dynamicProperties=null;this.dynamicData=null;this.dynamicBuffer.destroy();this.staticProperties=null;this.staticData=null;this.staticBuffer.destroy();};},{"../../core/utils/createIndicesForQuads":149,"pixi-gl-core":7}],196:[function(require,module,exports){var core=require('../../core'),ParticleShader=require('./ParticleShader'),ParticleBuffer=require('./ParticleBuffer');function ParticleRenderer(renderer)
{core.ObjectRenderer.call(this,renderer);this.shader=null;this.indexBuffer=null;this.properties=null;this.tempMatrix=new core.Matrix();this.CONTEXT_UID=0;}
ParticleRenderer.prototype=Object.create(core.ObjectRenderer.prototype);ParticleRenderer.prototype.constructor=ParticleRenderer;module.exports=ParticleRenderer;core.WebGLRenderer.registerPlugin('particle',ParticleRenderer);ParticleRenderer.prototype.onContextChange=function()
{var gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID;this.shader=new ParticleShader(gl);this.properties=[{attribute:this.shader.attributes.aVertexPosition,size:2,uploadFunction:this.uploadVertices,offset:0},{attribute:this.shader.attributes.aPositionCoord,size:2,uploadFunction:this.uploadPosition,offset:0},{attribute:this.shader.attributes.aRotation,size:1,uploadFunction:this.uploadRotation,offset:0},{attribute:this.shader.attributes.aTextureCoord,size:2,uploadFunction:this.uploadUvs,offset:0},{attribute:this.shader.attributes.aColor,size:1,uploadFunction:this.uploadAlpha,offset:0}];};ParticleRenderer.prototype.start=function()
{this.renderer.bindShader(this.shader);};ParticleRenderer.prototype.render=function(container)
{var children=container.children,totalChildren=children.length,maxSize=container._maxSize,batchSize=container._batchSize;if(totalChildren===0)
{return;}
else if(totalChildren>maxSize)
{totalChildren=maxSize;}
var buffers=container._glBuffers[this.renderer.CONTEXT_UID];if(!buffers)
{buffers=container._glBuffers[this.renderer.CONTEXT_UID]=this.generateBuffers(container);}
this.renderer.setBlendMode(container.blendMode);var gl=this.renderer.gl;var m=container.worldTransform.copy(this.tempMatrix);m.prepend(this.renderer._activeRenderTarget.projectionMatrix);this.shader.uniforms.projectionMatrix=m.toArray(true);this.shader.uniforms.uAlpha=container.worldAlpha;var baseTexture=children[0]._texture.baseTexture;this.renderer.bindTexture(baseTexture);for(var i=0,j=0;i<totalChildren;i+=batchSize,j+=1)
{var amount=(totalChildren-i);if(amount>batchSize)
{amount=batchSize;}
var buffer=buffers[j];buffer.uploadDynamic(children,i,amount);if(container._bufferToUpdate===j)
{buffer.uploadStatic(children,i,amount);container._bufferToUpdate=j+1;}
buffer.vao.bind().draw(gl.TRIANGLES,amount*6).unbind();}};ParticleRenderer.prototype.generateBuffers=function(container)
{var gl=this.renderer.gl,buffers=[],size=container._maxSize,batchSize=container._batchSize,dynamicPropertyFlags=container._properties,i;for(i=0;i<size;i+=batchSize)
{buffers.push(new ParticleBuffer(gl,this.properties,dynamicPropertyFlags,batchSize));}
return buffers;};ParticleRenderer.prototype.uploadVertices=function(children,startIndex,amount,array,stride,offset)
{var sprite,texture,trim,orig,sx,sy,w0,w1,h0,h1;for(var i=0;i<amount;i++){sprite=children[startIndex+i];texture=sprite._texture;sx=sprite.scale.x;sy=sprite.scale.y;trim=texture.trim;orig=texture.orig;if(trim)
{w1=trim.x-sprite.anchor.x*orig.width;w0=w1+trim.width;h1=trim.y-sprite.anchor.y*orig.height;h0=h1+trim.height;}
else
{w0=(orig.width)*(1-sprite.anchor.x);w1=(orig.width)*-sprite.anchor.x;h0=orig.height*(1-sprite.anchor.y);h1=orig.height*-sprite.anchor.y;}
array[offset]=w1*sx;array[offset+1]=h1*sy;array[offset+stride]=w0*sx;array[offset+stride+1]=h1*sy;array[offset+stride*2]=w0*sx;array[offset+stride*2+1]=h0*sy;array[offset+stride*3]=w1*sx;array[offset+stride*3+1]=h0*sy;offset+=stride*4;}};ParticleRenderer.prototype.uploadPosition=function(children,startIndex,amount,array,stride,offset)
{for(var i=0;i<amount;i++)
{var spritePosition=children[startIndex+i].position;array[offset]=spritePosition.x;array[offset+1]=spritePosition.y;array[offset+stride]=spritePosition.x;array[offset+stride+1]=spritePosition.y;array[offset+stride*2]=spritePosition.x;array[offset+stride*2+1]=spritePosition.y;array[offset+stride*3]=spritePosition.x;array[offset+stride*3+1]=spritePosition.y;offset+=stride*4;}};ParticleRenderer.prototype.uploadRotation=function(children,startIndex,amount,array,stride,offset)
{for(var i=0;i<amount;i++)
{var spriteRotation=children[startIndex+i].rotation;array[offset]=spriteRotation;array[offset+stride]=spriteRotation;array[offset+stride*2]=spriteRotation;array[offset+stride*3]=spriteRotation;offset+=stride*4;}};ParticleRenderer.prototype.uploadUvs=function(children,startIndex,amount,array,stride,offset)
{for(var i=0;i<amount;i++)
{var textureUvs=children[startIndex+i]._texture._uvs;if(textureUvs)
{array[offset]=textureUvs.x0;array[offset+1]=textureUvs.y0;array[offset+stride]=textureUvs.x1;array[offset+stride+1]=textureUvs.y1;array[offset+stride*2]=textureUvs.x2;array[offset+stride*2+1]=textureUvs.y2;array[offset+stride*3]=textureUvs.x3;array[offset+stride*3+1]=textureUvs.y3;offset+=stride*4;}
else
{array[offset]=0;array[offset+1]=0;array[offset+stride]=0;array[offset+stride+1]=0;array[offset+stride*2]=0;array[offset+stride*2+1]=0;array[offset+stride*3]=0;array[offset+stride*3+1]=0;offset+=stride*4;}}};ParticleRenderer.prototype.uploadAlpha=function(children,startIndex,amount,array,stride,offset)
{for(var i=0;i<amount;i++)
{var spriteAlpha=children[startIndex+i].alpha;array[offset]=spriteAlpha;array[offset+stride]=spriteAlpha;array[offset+stride*2]=spriteAlpha;array[offset+stride*3]=spriteAlpha;offset+=stride*4;}};ParticleRenderer.prototype.destroy=function()
{if(this.renderer.gl){this.renderer.gl.deleteBuffer(this.indexBuffer);}
core.ObjectRenderer.prototype.destroy.apply(this,arguments);this.shader.destroy();this.indices=null;this.tempMatrix=null;};},{"../../core":97,"./ParticleBuffer":195,"./ParticleShader":197}],197:[function(require,module,exports){var Shader=require('../../core/Shader');function ParticleShader(gl)
{Shader.call(this,gl,['attribute vec2 aVertexPosition;','attribute vec2 aTextureCoord;','attribute float aColor;','attribute vec2 aPositionCoord;','attribute vec2 aScale;','attribute float aRotation;','uniform mat3 projectionMatrix;','varying vec2 vTextureCoord;','varying float vColor;','void main(void){','   vec2 v = aVertexPosition;','   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);','   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);','   v = v + aPositionCoord;','   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);','   vTextureCoord = aTextureCoord;','   vColor = aColor;','}'].join('\n'),['varying vec2 vTextureCoord;','varying float vColor;','uniform sampler2D uSampler;','uniform float uAlpha;','void main(void){','  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;','  if (color.a == 0.0) discard;','  gl_FragColor = color;','}'].join('\n'));}
ParticleShader.prototype=Object.create(Shader.prototype);ParticleShader.prototype.constructor=ParticleShader;module.exports=ParticleShader;},{"../../core/Shader":77}],198:[function(require,module,exports){if(!Math.sign)
{Math.sign=function(x){x=+x;if(x===0||isNaN(x))
{return x;}
return x>0?1:-1;};}},{}],199:[function(require,module,exports){if(!Object.assign)
{Object.assign=require('object-assign');}},{"object-assign":59}],200:[function(require,module,exports){require('./Object.assign');require('./requestAnimationFrame');require('./Math.sign');if(!window.ArrayBuffer){window.ArrayBuffer=Array;}
if(!window.Float32Array){window.Float32Array=Array;}
if(!window.Uint32Array){window.Uint32Array=Array;}
if(!window.Uint16Array){window.Uint16Array=Array;}},{"./Math.sign":198,"./Object.assign":199,"./requestAnimationFrame":201}],201:[function(require,module,exports){(function(global){if(!(Date.now&&Date.prototype.getTime)){Date.now=function now(){return new Date().getTime();};}
if(!(global.performance&&global.performance.now)){var startTime=Date.now();if(!global.performance){global.performance={};}
global.performance.now=function(){return Date.now()-startTime;};}
var lastTime=Date.now();var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!global.requestAnimationFrame;++x){global.requestAnimationFrame=global[vendors[x]+'RequestAnimationFrame'];global.cancelAnimationFrame=global[vendors[x]+'CancelAnimationFrame']||global[vendors[x]+'CancelRequestAnimationFrame'];}
if(!global.requestAnimationFrame){global.requestAnimationFrame=function(callback){if(typeof callback!=='function'){throw new TypeError(callback+'is not a function');}
var currentTime=Date.now(),delay=16+lastTime-currentTime;if(delay<0){delay=0;}
lastTime=currentTime;return setTimeout(function(){lastTime=Date.now();callback(performance.now());},delay);};}
if(!global.cancelAnimationFrame){global.cancelAnimationFrame=function(id){clearTimeout(id);};}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],202:[function(require,module,exports){var core=require('../../core');function CanvasPrepare()
{}
CanvasPrepare.prototype.constructor=CanvasPrepare;module.exports=CanvasPrepare;CanvasPrepare.prototype.upload=function(displayObject,done)
{if(typeof displayObject==='function')
{done=displayObject;displayObject=null;}
done();};CanvasPrepare.prototype.register=function()
{return this;};CanvasPrepare.prototype.add=function()
{return this;};CanvasPrepare.prototype.destroy=function()
{};core.CanvasRenderer.registerPlugin('prepare',CanvasPrepare);},{"../../core":97}],203:[function(require,module,exports){module.exports={webGL:require('./webgl/WebGLPrepare'),canvas:require('./canvas/CanvasPrepare')};},{"./canvas/CanvasPrepare":202,"./webgl/WebGLPrepare":204}],204:[function(require,module,exports){var core=require('../../core'),SharedTicker=core.ticker.shared;function WebGLPrepare(renderer)
{this.renderer=renderer;this.queue=[];this.addHooks=[];this.uploadHooks=[];this.completes=[];this.ticking=false;this.register(findBaseTextures,uploadBaseTextures).register(findGraphics,uploadGraphics);}
WebGLPrepare.UPLOADS_PER_FRAME=4;WebGLPrepare.prototype.constructor=WebGLPrepare;module.exports=WebGLPrepare;WebGLPrepare.prototype.upload=function(item,done)
{if(typeof item==='function')
{done=item;item=null;}
if(item)
{this.add(item);}
if(this.queue.length)
{this.numLeft=WebGLPrepare.UPLOADS_PER_FRAME;this.completes.push(done);if(!this.ticking)
{this.ticking=true;SharedTicker.add(this.tick,this);}}
else
{done();}};WebGLPrepare.prototype.tick=function()
{var i,len;while(this.queue.length&&this.numLeft>0)
{var item=this.queue[0];var uploaded=false;for(i=0,len=this.uploadHooks.length;i<len;i++)
{if(this.uploadHooks[i](this.renderer,item))
{this.numLeft--;this.queue.shift();uploaded=true;break;}}
if(!uploaded)
{this.queue.shift();}}
if(this.queue.length)
{this.numLeft=WebGLPrepare.UPLOADS_PER_FRAME;}
else
{this.ticking=false;SharedTicker.remove(this.tick,this);var completes=this.completes.slice(0);this.completes.length=0;for(i=0,len=completes.length;i<len;i++)
{completes[i]();}}};WebGLPrepare.prototype.register=function(addHook,uploadHook)
{if(addHook)
{this.addHooks.push(addHook);}
if(uploadHook)
{this.uploadHooks.push(uploadHook);}
return this;};WebGLPrepare.prototype.add=function(item)
{var i,len;for(i=0,len=this.addHooks.length;i<len;i++)
{if(this.addHooks[i](item,this.queue))
{break;}}
if(item instanceof core.Container)
{for(i=item.children.length-1;i>=0;i--)
{this.add(item.children[i]);}}
return this;};WebGLPrepare.prototype.destroy=function()
{if(this.ticking)
{SharedTicker.remove(this.tick,this);}
this.ticking=false;this.addHooks=null;this.uploadHooks=null;this.renderer=null;this.completes=null;this.queue=null;};function uploadBaseTextures(renderer,item)
{if(item instanceof core.BaseTexture)
{renderer.textureManager.updateTexture(item);return true;}
return false;}
function uploadGraphics(renderer,item)
{if(item instanceof core.Graphics)
{renderer.plugins.graphics.updateGraphics(item);return true;}
return false;}
function findBaseTextures(item,queue)
{if(item instanceof core.BaseTexture)
{if(queue.indexOf(item)===-1)
{queue.push(item);}
return true;}
else if(item._texture&&item._texture instanceof core.Texture)
{var texture=item._texture.baseTexture;if(queue.indexOf(texture)===-1)
{queue.push(texture);}
return true;}
return false;}
function findGraphics(item,queue)
{if(item instanceof core.Graphics)
{queue.push(item);return true;}
return false;}
core.WebGLRenderer.registerPlugin('prepare',WebGLPrepare);},{"../../core":97}],205:[function(require,module,exports){(function(global){require('./polyfill');var core=module.exports=require('./core');core.extras=require('./extras');core.filters=require('./filters');core.interaction=require('./interaction');core.loaders=require('./loaders');core.mesh=require('./mesh');core.particles=require('./particles');core.accessibility=require('./accessibility');core.extract=require('./extract');core.prepare=require('./prepare');core.loader=new core.loaders.Loader();Object.assign(core,require('./deprecation'));global.PIXI=core;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./accessibility":76,"./core":97,"./deprecation":154,"./extract":156,"./extras":164,"./filters":175,"./interaction":180,"./loaders":183,"./mesh":191,"./particles":194,"./polyfill":200,"./prepare":203}]},{},[205])(205)});
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var Animation = (function () {
            function Animation(name, timelines, duration) {
                if (name == null)
                    throw new Error("name cannot be null.");
                if (timelines == null)
                    throw new Error("timelines cannot be null.");
                this.name = name;
                this.timelines = timelines;
                this.duration = duration;
            }
            Animation.prototype.apply = function (skeleton, lastTime, time, loop, events, alpha, setupPose, mixingOut) {
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                if (loop && this.duration != 0) {
                    time %= this.duration;
                    if (lastTime > 0)
                        lastTime %= this.duration;
                }
                var timelines = this.timelines;
                for (var i = 0, n = timelines.length; i < n; i++)
                    timelines[i].apply(skeleton, lastTime, time, events, alpha, setupPose, mixingOut);
            };
            Animation.binarySearch = function (values, target, step) {
                if (step === void 0) { step = 1; }
                var low = 0;
                var high = values.length / step - 2;
                if (high == 0)
                    return step;
                var current = high >>> 1;
                while (true) {
                    if (values[(current + 1) * step] <= target)
                        low = current + 1;
                    else
                        high = current;
                    if (low == high)
                        return (low + 1) * step;
                    current = (low + high) >>> 1;
                }
            };
            Animation.linearSearch = function (values, target, step) {
                for (var i = 0, last = values.length - step; i <= last; i += step)
                    if (values[i] > target)
                        return i;
                return -1;
            };
            return Animation;
        }());
        core.Animation = Animation;
        var TimelineType;
        (function (TimelineType) {
            TimelineType[TimelineType["rotate"] = 0] = "rotate";
            TimelineType[TimelineType["translate"] = 1] = "translate";
            TimelineType[TimelineType["scale"] = 2] = "scale";
            TimelineType[TimelineType["shear"] = 3] = "shear";
            TimelineType[TimelineType["attachment"] = 4] = "attachment";
            TimelineType[TimelineType["color"] = 5] = "color";
            TimelineType[TimelineType["deform"] = 6] = "deform";
            TimelineType[TimelineType["event"] = 7] = "event";
            TimelineType[TimelineType["drawOrder"] = 8] = "drawOrder";
            TimelineType[TimelineType["ikConstraint"] = 9] = "ikConstraint";
            TimelineType[TimelineType["transformConstraint"] = 10] = "transformConstraint";
            TimelineType[TimelineType["pathConstraintPosition"] = 11] = "pathConstraintPosition";
            TimelineType[TimelineType["pathConstraintSpacing"] = 12] = "pathConstraintSpacing";
            TimelineType[TimelineType["pathConstraintMix"] = 13] = "pathConstraintMix";
        })(TimelineType = core.TimelineType || (core.TimelineType = {}));
        var CurveTimeline = (function () {
            function CurveTimeline(frameCount) {
                if (frameCount <= 0)
                    throw new Error("frameCount must be > 0: " + frameCount);
                this.curves = core.Utils.newFloatArray((frameCount - 1) * CurveTimeline.BEZIER_SIZE);
            }
            CurveTimeline.prototype.getFrameCount = function () {
                return this.curves.length / CurveTimeline.BEZIER_SIZE + 1;
            };
            CurveTimeline.prototype.setLinear = function (frameIndex) {
                this.curves[frameIndex * CurveTimeline.BEZIER_SIZE] = CurveTimeline.LINEAR;
            };
            CurveTimeline.prototype.setStepped = function (frameIndex) {
                this.curves[frameIndex * CurveTimeline.BEZIER_SIZE] = CurveTimeline.STEPPED;
            };
            CurveTimeline.prototype.getCurveType = function (frameIndex) {
                var index = frameIndex * CurveTimeline.BEZIER_SIZE;
                if (index == this.curves.length)
                    return CurveTimeline.LINEAR;
                var type = this.curves[index];
                if (type == CurveTimeline.LINEAR)
                    return CurveTimeline.LINEAR;
                if (type == CurveTimeline.STEPPED)
                    return CurveTimeline.STEPPED;
                return CurveTimeline.BEZIER;
            };
            CurveTimeline.prototype.setCurve = function (frameIndex, cx1, cy1, cx2, cy2) {
                var tmpx = (-cx1 * 2 + cx2) * 0.03, tmpy = (-cy1 * 2 + cy2) * 0.03;
                var dddfx = ((cx1 - cx2) * 3 + 1) * 0.006, dddfy = ((cy1 - cy2) * 3 + 1) * 0.006;
                var ddfx = tmpx * 2 + dddfx, ddfy = tmpy * 2 + dddfy;
                var dfx = cx1 * 0.3 + tmpx + dddfx * 0.16666667, dfy = cy1 * 0.3 + tmpy + dddfy * 0.16666667;
                var i = frameIndex * CurveTimeline.BEZIER_SIZE;
                var curves = this.curves;
                curves[i++] = CurveTimeline.BEZIER;
                var x = dfx, y = dfy;
                for (var n = i + CurveTimeline.BEZIER_SIZE - 1; i < n; i += 2) {
                    curves[i] = x;
                    curves[i + 1] = y;
                    dfx += ddfx;
                    dfy += ddfy;
                    ddfx += dddfx;
                    ddfy += dddfy;
                    x += dfx;
                    y += dfy;
                }
            };
            CurveTimeline.prototype.getCurvePercent = function (frameIndex, percent) {
                percent = core.MathUtils.clamp(percent, 0, 1);
                var curves = this.curves;
                var i = frameIndex * CurveTimeline.BEZIER_SIZE;
                var type = curves[i];
                if (type == CurveTimeline.LINEAR)
                    return percent;
                if (type == CurveTimeline.STEPPED)
                    return 0;
                i++;
                var x = 0;
                for (var start = i, n = i + CurveTimeline.BEZIER_SIZE - 1; i < n; i += 2) {
                    x = curves[i];
                    if (x >= percent) {
                        var prevX = void 0, prevY = void 0;
                        if (i == start) {
                            prevX = 0;
                            prevY = 0;
                        }
                        else {
                            prevX = curves[i - 2];
                            prevY = curves[i - 1];
                        }
                        return prevY + (curves[i + 1] - prevY) * (percent - prevX) / (x - prevX);
                    }
                }
                var y = curves[i - 1];
                return y + (1 - y) * (percent - x) / (1 - x);
            };
            return CurveTimeline;
        }());
        CurveTimeline.LINEAR = 0;
        CurveTimeline.STEPPED = 1;
        CurveTimeline.BEZIER = 2;
        CurveTimeline.BEZIER_SIZE = 10 * 2 - 1;
        core.CurveTimeline = CurveTimeline;
        var RotateTimeline = (function (_super) {
            __extends(RotateTimeline, _super);
            function RotateTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount << 1);
                return _this;
            }
            RotateTimeline.prototype.getPropertyId = function () {
                return (TimelineType.rotate << 24) + this.boneIndex;
            };
            RotateTimeline.prototype.setFrame = function (frameIndex, time, degrees) {
                frameIndex <<= 1;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + RotateTimeline.ROTATION] = degrees;
            };
            RotateTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, setupPose, mixingOut) {
                var frames = this.frames;
                var bone = skeleton.bones[this.boneIndex];
                if (time < frames[0]) {
                    if (setupPose)
                        bone.rotation = bone.data.rotation;
                    return;
                }
                if (time >= frames[frames.length - RotateTimeline.ENTRIES]) {
                    if (setupPose)
                        bone.rotation = bone.data.rotation + frames[frames.length + RotateTimeline.PREV_ROTATION] * alpha;
                    else {
                        var r_1 = bone.data.rotation + frames[frames.length + RotateTimeline.PREV_ROTATION] - bone.rotation;
                        r_1 -= (16384 - ((16384.499999999996 - r_1 / 360) | 0)) * 360;
                        bone.rotation += r_1 * alpha;
                    }
                    return;
                }
                var frame = Animation.binarySearch(frames, time, RotateTimeline.ENTRIES);
                var prevRotation = frames[frame + RotateTimeline.PREV_ROTATION];
                var frameTime = frames[frame];
                var percent = this.getCurvePercent((frame >> 1) - 1, 1 - (time - frameTime) / (frames[frame + RotateTimeline.PREV_TIME] - frameTime));
                var r = frames[frame + RotateTimeline.ROTATION] - prevRotation;
                r -= (16384 - ((16384.499999999996 - r / 360) | 0)) * 360;
                r = prevRotation + r * percent;
                if (setupPose) {
                    r -= (16384 - ((16384.499999999996 - r / 360) | 0)) * 360;
                    bone.rotation = bone.data.rotation + r * alpha;
                }
                else {
                    r = bone.data.rotation + r - bone.rotation;
                    r -= (16384 - ((16384.499999999996 - r / 360) | 0)) * 360;
                    bone.rotation += r * alpha;
                }
            };
            return RotateTimeline;
        }(CurveTimeline));
        RotateTimeline.ENTRIES = 2;
        RotateTimeline.PREV_TIME = -2;
        RotateTimeline.PREV_ROTATION = -1;
        RotateTimeline.ROTATION = 1;
        core.RotateTimeline = RotateTimeline;
        var TranslateTimeline = (function (_super) {
            __extends(TranslateTimeline, _super);
            function TranslateTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * TranslateTimeline.ENTRIES);
                return _this;
            }
            TranslateTimeline.prototype.getPropertyId = function () {
                return (TimelineType.translate << 24) + this.boneIndex;
            };
            TranslateTimeline.prototype.setFrame = function (frameIndex, time, x, y) {
                frameIndex *= TranslateTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + TranslateTimeline.X] = x;
                this.frames[frameIndex + TranslateTimeline.Y] = y;
            };
            TranslateTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, setupPose, mixingOut) {
                var frames = this.frames;
                var bone = skeleton.bones[this.boneIndex];
                if (time < frames[0]) {
                    if (setupPose) {
                        bone.x = bone.data.x;
                        bone.y = bone.data.y;
                    }
                    return;
                }
                var x = 0, y = 0;
                if (time >= frames[frames.length - TranslateTimeline.ENTRIES]) {
                    x = frames[frames.length + TranslateTimeline.PREV_X];
                    y = frames[frames.length + TranslateTimeline.PREV_Y];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, TranslateTimeline.ENTRIES);
                    x = frames[frame + TranslateTimeline.PREV_X];
                    y = frames[frame + TranslateTimeline.PREV_Y];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / TranslateTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TranslateTimeline.PREV_TIME] - frameTime));
                    x += (frames[frame + TranslateTimeline.X] - x) * percent;
                    y += (frames[frame + TranslateTimeline.Y] - y) * percent;
                }
                if (setupPose) {
                    bone.x = bone.data.x + x * alpha;
                    bone.y = bone.data.y + y * alpha;
                }
                else {
                    bone.x += (bone.data.x + x - bone.x) * alpha;
                    bone.y += (bone.data.y + y - bone.y) * alpha;
                }
            };
            return TranslateTimeline;
        }(CurveTimeline));
        TranslateTimeline.ENTRIES = 3;
        TranslateTimeline.PREV_TIME = -3;
        TranslateTimeline.PREV_X = -2;
        TranslateTimeline.PREV_Y = -1;
        TranslateTimeline.X = 1;
        TranslateTimeline.Y = 2;
        core.TranslateTimeline = TranslateTimeline;
        var ScaleTimeline = (function (_super) {
            __extends(ScaleTimeline, _super);
            function ScaleTimeline(frameCount) {
                return _super.call(this, frameCount) || this;
            }
            ScaleTimeline.prototype.getPropertyId = function () {
                return (TimelineType.scale << 24) + this.boneIndex;
            };
            ScaleTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, setupPose, mixingOut) {
                var frames = this.frames;
                var bone = skeleton.bones[this.boneIndex];
                if (time < frames[0]) {
                    if (setupPose) {
                        bone.scaleX = bone.data.scaleX;
                        bone.scaleY = bone.data.scaleY;
                    }
                    return;
                }
                var x = 0, y = 0;
                if (time >= frames[frames.length - ScaleTimeline.ENTRIES]) {
                    x = frames[frames.length + ScaleTimeline.PREV_X] * bone.data.scaleX;
                    y = frames[frames.length + ScaleTimeline.PREV_Y] * bone.data.scaleY;
                }
                else {
                    var frame = Animation.binarySearch(frames, time, ScaleTimeline.ENTRIES);
                    x = frames[frame + ScaleTimeline.PREV_X];
                    y = frames[frame + ScaleTimeline.PREV_Y];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / ScaleTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ScaleTimeline.PREV_TIME] - frameTime));
                    x = (x + (frames[frame + ScaleTimeline.X] - x) * percent) * bone.data.scaleX;
                    y = (y + (frames[frame + ScaleTimeline.Y] - y) * percent) * bone.data.scaleY;
                }
                if (alpha == 1) {
                    bone.scaleX = x;
                    bone.scaleY = y;
                }
                else {
                    var bx = 0, by = 0;
                    if (setupPose) {
                        bx = bone.data.scaleX;
                        by = bone.data.scaleY;
                    }
                    else {
                        bx = bone.scaleX;
                        by = bone.scaleY;
                    }
                    if (mixingOut) {
                        x = Math.abs(x) * core.MathUtils.signum(bx);
                        y = Math.abs(y) * core.MathUtils.signum(by);
                    }
                    else {
                        bx = Math.abs(bx) * core.MathUtils.signum(x);
                        by = Math.abs(by) * core.MathUtils.signum(y);
                    }
                    bone.scaleX = bx + (x - bx) * alpha;
                    bone.scaleY = by + (y - by) * alpha;
                }
            };
            return ScaleTimeline;
        }(TranslateTimeline));
        core.ScaleTimeline = ScaleTimeline;
        var ShearTimeline = (function (_super) {
            __extends(ShearTimeline, _super);
            function ShearTimeline(frameCount) {
                return _super.call(this, frameCount) || this;
            }
            ShearTimeline.prototype.getPropertyId = function () {
                return (TimelineType.shear << 24) + this.boneIndex;
            };
            ShearTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, setupPose, mixingOut) {
                var frames = this.frames;
                var bone = skeleton.bones[this.boneIndex];
                if (time < frames[0]) {
                    if (setupPose) {
                        bone.shearX = bone.data.shearX;
                        bone.shearY = bone.data.shearY;
                    }
                    return;
                }
                var x = 0, y = 0;
                if (time >= frames[frames.length - ShearTimeline.ENTRIES]) {
                    x = frames[frames.length + ShearTimeline.PREV_X];
                    y = frames[frames.length + ShearTimeline.PREV_Y];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, ShearTimeline.ENTRIES);
                    x = frames[frame + ShearTimeline.PREV_X];
                    y = frames[frame + ShearTimeline.PREV_Y];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / ShearTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ShearTimeline.PREV_TIME] - frameTime));
                    x = x + (frames[frame + ShearTimeline.X] - x) * percent;
                    y = y + (frames[frame + ShearTimeline.Y] - y) * percent;
                }
                if (setupPose) {
                    bone.shearX = bone.data.shearX + x * alpha;
                    bone.shearY = bone.data.shearY + y * alpha;
                }
                else {
                    bone.shearX += (bone.data.shearX + x - bone.shearX) * alpha;
                    bone.shearY += (bone.data.shearY + y - bone.shearY) * alpha;
                }
            };
            return ShearTimeline;
        }(TranslateTimeline));
        core.ShearTimeline = ShearTimeline;
        var ColorTimeline = (function (_super) {
            __extends(ColorTimeline, _super);
            function ColorTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * ColorTimeline.ENTRIES);
                return _this;
            }
            ColorTimeline.prototype.getPropertyId = function () {
                return (TimelineType.color << 24) + this.slotIndex;
            };
            ColorTimeline.prototype.setFrame = function (frameIndex, time, r, g, b, a) {
                frameIndex *= ColorTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + ColorTimeline.R] = r;
                this.frames[frameIndex + ColorTimeline.G] = g;
                this.frames[frameIndex + ColorTimeline.B] = b;
                this.frames[frameIndex + ColorTimeline.A] = a;
            };
            ColorTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, setupPose, mixingOut) {
                var slot = skeleton.slots[this.slotIndex];
                var frames = this.frames;
                if (time < frames[0]) {
                    if (setupPose)
                        slot.color.setFromColor(slot.data.color);
                    return;
                }
                var r = 0, g = 0, b = 0, a = 0;
                if (time >= frames[frames.length - ColorTimeline.ENTRIES]) {
                    var i = frames.length;
                    r = frames[i + ColorTimeline.PREV_R];
                    g = frames[i + ColorTimeline.PREV_G];
                    b = frames[i + ColorTimeline.PREV_B];
                    a = frames[i + ColorTimeline.PREV_A];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, ColorTimeline.ENTRIES);
                    r = frames[frame + ColorTimeline.PREV_R];
                    g = frames[frame + ColorTimeline.PREV_G];
                    b = frames[frame + ColorTimeline.PREV_B];
                    a = frames[frame + ColorTimeline.PREV_A];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / ColorTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ColorTimeline.PREV_TIME] - frameTime));
                    r += (frames[frame + ColorTimeline.R] - r) * percent;
                    g += (frames[frame + ColorTimeline.G] - g) * percent;
                    b += (frames[frame + ColorTimeline.B] - b) * percent;
                    a += (frames[frame + ColorTimeline.A] - a) * percent;
                }
                if (alpha == 1)
                    slot.color.set(r, g, b, a);
                else {
                    var color = slot.color;
                    if (setupPose)
                        color.setFromColor(slot.data.color);
                    color.add((r - color.r) * alpha, (g - color.g) * alpha, (b - color.b) * alpha, (a - color.a) * alpha);
                }
            };
            return ColorTimeline;
        }(CurveTimeline));
        ColorTimeline.ENTRIES = 5;
        ColorTimeline.PREV_TIME = -5;
        ColorTimeline.PREV_R = -4;
        ColorTimeline.PREV_G = -3;
        ColorTimeline.PREV_B = -2;
        ColorTimeline.PREV_A = -1;
        ColorTimeline.R = 1;
        ColorTimeline.G = 2;
        ColorTimeline.B = 3;
        ColorTimeline.A = 4;
        core.ColorTimeline = ColorTimeline;
        var AttachmentTimeline = (function () {
            function AttachmentTimeline(frameCount) {
                this.frames = core.Utils.newFloatArray(frameCount);
                this.attachmentNames = new Array(frameCount);
            }
            AttachmentTimeline.prototype.getPropertyId = function () {
                return (TimelineType.attachment << 24) + this.slotIndex;
            };
            AttachmentTimeline.prototype.getFrameCount = function () {
                return this.frames.length;
            };
            AttachmentTimeline.prototype.setFrame = function (frameIndex, time, attachmentName) {
                this.frames[frameIndex] = time;
                this.attachmentNames[frameIndex] = attachmentName;
            };
            AttachmentTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, setupPose, mixingOut) {
                var slot = skeleton.slots[this.slotIndex];
                if (mixingOut && setupPose) {
                    var attachmentName_1 = slot.data.attachmentName;
                    slot.setAttachment(attachmentName_1 == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName_1));
                    return;
                }
                var frames = this.frames;
                if (time < frames[0]) {
                    if (setupPose) {
                        var attachmentName_2 = slot.data.attachmentName;
                        slot.setAttachment(attachmentName_2 == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName_2));
                    }
                    return;
                }
                var frameIndex = 0;
                if (time >= frames[frames.length - 1])
                    frameIndex = frames.length - 1;
                else
                    frameIndex = Animation.binarySearch(frames, time, 1) - 1;
                var attachmentName = this.attachmentNames[frameIndex];
                skeleton.slots[this.slotIndex]
                    .setAttachment(attachmentName == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName));
            };
            return AttachmentTimeline;
        }());
        core.AttachmentTimeline = AttachmentTimeline;
        var DeformTimeline = (function (_super) {
            __extends(DeformTimeline, _super);
            function DeformTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount);
                _this.frameVertices = new Array(frameCount);
                return _this;
            }
            DeformTimeline.prototype.getPropertyId = function () {
                return (TimelineType.deform << 24) + this.slotIndex;
            };
            DeformTimeline.prototype.setFrame = function (frameIndex, time, vertices) {
                this.frames[frameIndex] = time;
                this.frameVertices[frameIndex] = vertices;
            };
            DeformTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, setupPose, mixingOut) {
                var slot = skeleton.slots[this.slotIndex];
                var slotAttachment = slot.getAttachment();
                if (!(slotAttachment instanceof core.VertexAttachment) || !slotAttachment.applyDeform(this.attachment))
                    return;
                var frames = this.frames;
                var verticesArray = slot.attachmentVertices;
                if (time < frames[0]) {
                    if (setupPose)
                        core.Utils.setArraySize(verticesArray, 0);
                    return;
                }
                var frameVertices = this.frameVertices;
                var vertexCount = frameVertices[0].length;
                if (verticesArray.length != vertexCount)
                    alpha = 1;
                var vertices = core.Utils.setArraySize(verticesArray, vertexCount);
                if (time >= frames[frames.length - 1]) {
                    var lastVertices = frameVertices[frames.length - 1];
                    if (alpha == 1) {
                        core.Utils.arrayCopy(lastVertices, 0, vertices, 0, vertexCount);
                    }
                    else if (setupPose) {
                        var vertexAttachment = slotAttachment;
                        if (vertexAttachment.bones == null) {
                            var setupVertices = vertexAttachment.vertices;
                            for (var i = 0; i < vertexCount; i++) {
                                var setup = setupVertices[i];
                                vertices[i] = setup + (lastVertices[i] - setup) * alpha;
                            }
                        }
                        else {
                            for (var i = 0; i < vertexCount; i++)
                                vertices[i] = lastVertices[i] * alpha;
                        }
                    }
                    else {
                        for (var i = 0; i < vertexCount; i++)
                            vertices[i] += (lastVertices[i] - vertices[i]) * alpha;
                    }
                    return;
                }
                var frame = Animation.binarySearch(frames, time);
                var prevVertices = frameVertices[frame - 1];
                var nextVertices = frameVertices[frame];
                var frameTime = frames[frame];
                var percent = this.getCurvePercent(frame - 1, 1 - (time - frameTime) / (frames[frame - 1] - frameTime));
                if (alpha == 1) {
                    for (var i = 0; i < vertexCount; i++) {
                        var prev = prevVertices[i];
                        vertices[i] = prev + (nextVertices[i] - prev) * percent;
                    }
                }
                else if (setupPose) {
                    var vertexAttachment = slotAttachment;
                    if (vertexAttachment.bones == null) {
                        var setupVertices = vertexAttachment.vertices;
                        for (var i = 0; i < vertexCount; i++) {
                            var prev = prevVertices[i], setup = setupVertices[i];
                            vertices[i] = setup + (prev + (nextVertices[i] - prev) * percent - setup) * alpha;
                        }
                    }
                    else {
                        for (var i = 0; i < vertexCount; i++) {
                            var prev = prevVertices[i];
                            vertices[i] = (prev + (nextVertices[i] - prev) * percent) * alpha;
                        }
                    }
                }
                else {
                    for (var i = 0; i < vertexCount; i++) {
                        var prev = prevVertices[i];
                        vertices[i] += (prev + (nextVertices[i] - prev) * percent - vertices[i]) * alpha;
                    }
                }
            };
            return DeformTimeline;
        }(CurveTimeline));
        core.DeformTimeline = DeformTimeline;
        var EventTimeline = (function () {
            function EventTimeline(frameCount) {
                this.frames = core.Utils.newFloatArray(frameCount);
                this.events = new Array(frameCount);
            }
            EventTimeline.prototype.getPropertyId = function () {
                return TimelineType.event << 24;
            };
            EventTimeline.prototype.getFrameCount = function () {
                return this.frames.length;
            };
            EventTimeline.prototype.setFrame = function (frameIndex, event) {
                this.frames[frameIndex] = event.time;
                this.events[frameIndex] = event;
            };
            EventTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, setupPose, mixingOut) {
                if (firedEvents == null)
                    return;
                var frames = this.frames;
                var frameCount = this.frames.length;
                if (lastTime > time) {
                    this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha, setupPose, mixingOut);
                    lastTime = -1;
                }
                else if (lastTime >= frames[frameCount - 1])
                    return;
                if (time < frames[0])
                    return;
                var frame = 0;
                if (lastTime < frames[0])
                    frame = 0;
                else {
                    frame = Animation.binarySearch(frames, lastTime);
                    var frameTime = frames[frame];
                    while (frame > 0) {
                        if (frames[frame - 1] != frameTime)
                            break;
                        frame--;
                    }
                }
                for (; frame < frameCount && time >= frames[frame]; frame++)
                    firedEvents.push(this.events[frame]);
            };
            return EventTimeline;
        }());
        core.EventTimeline = EventTimeline;
        var DrawOrderTimeline = (function () {
            function DrawOrderTimeline(frameCount) {
                this.frames = core.Utils.newFloatArray(frameCount);
                this.drawOrders = new Array(frameCount);
            }
            DrawOrderTimeline.prototype.getPropertyId = function () {
                return TimelineType.drawOrder << 24;
            };
            DrawOrderTimeline.prototype.getFrameCount = function () {
                return this.frames.length;
            };
            DrawOrderTimeline.prototype.setFrame = function (frameIndex, time, drawOrder) {
                this.frames[frameIndex] = time;
                this.drawOrders[frameIndex] = drawOrder;
            };
            DrawOrderTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, setupPose, mixingOut) {
                var drawOrder = skeleton.drawOrder;
                var slots = skeleton.slots;
                if (mixingOut && setupPose) {
                    core.Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
                    return;
                }
                var frames = this.frames;
                if (time < frames[0]) {
                    if (setupPose)
                        core.Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
                    return;
                }
                var frame = 0;
                if (time >= frames[frames.length - 1])
                    frame = frames.length - 1;
                else
                    frame = Animation.binarySearch(frames, time) - 1;
                var drawOrderToSetupIndex = this.drawOrders[frame];
                if (drawOrderToSetupIndex == null)
                    core.Utils.arrayCopy(slots, 0, drawOrder, 0, slots.length);
                else {
                    for (var i = 0, n = drawOrderToSetupIndex.length; i < n; i++)
                        drawOrder[i] = slots[drawOrderToSetupIndex[i]];
                }
            };
            return DrawOrderTimeline;
        }());
        core.DrawOrderTimeline = DrawOrderTimeline;
        var IkConstraintTimeline = (function (_super) {
            __extends(IkConstraintTimeline, _super);
            function IkConstraintTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * IkConstraintTimeline.ENTRIES);
                return _this;
            }
            IkConstraintTimeline.prototype.getPropertyId = function () {
                return (TimelineType.ikConstraint << 24) + this.ikConstraintIndex;
            };
            IkConstraintTimeline.prototype.setFrame = function (frameIndex, time, mix, bendDirection) {
                frameIndex *= IkConstraintTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + IkConstraintTimeline.MIX] = mix;
                this.frames[frameIndex + IkConstraintTimeline.BEND_DIRECTION] = bendDirection;
            };
            IkConstraintTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, setupPose, mixingOut) {
                var frames = this.frames;
                var constraint = skeleton.ikConstraints[this.ikConstraintIndex];
                if (time < frames[0]) {
                    if (setupPose) {
                        constraint.mix = constraint.data.mix;
                        constraint.bendDirection = constraint.data.bendDirection;
                    }
                    return;
                }
                if (time >= frames[frames.length - IkConstraintTimeline.ENTRIES]) {
                    if (setupPose) {
                        constraint.mix = constraint.data.mix + (frames[frames.length + IkConstraintTimeline.PREV_MIX] - constraint.data.mix) * alpha;
                        constraint.bendDirection = mixingOut ? constraint.data.bendDirection
                            : frames[frames.length + IkConstraintTimeline.PREV_BEND_DIRECTION];
                    }
                    else {
                        constraint.mix += (frames[frames.length + IkConstraintTimeline.PREV_MIX] - constraint.mix) * alpha;
                        if (!mixingOut)
                            constraint.bendDirection = frames[frames.length + IkConstraintTimeline.PREV_BEND_DIRECTION];
                    }
                    return;
                }
                var frame = Animation.binarySearch(frames, time, IkConstraintTimeline.ENTRIES);
                var mix = frames[frame + IkConstraintTimeline.PREV_MIX];
                var frameTime = frames[frame];
                var percent = this.getCurvePercent(frame / IkConstraintTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + IkConstraintTimeline.PREV_TIME] - frameTime));
                if (setupPose) {
                    constraint.mix = constraint.data.mix + (mix + (frames[frame + IkConstraintTimeline.MIX] - mix) * percent - constraint.data.mix) * alpha;
                    constraint.bendDirection = mixingOut ? constraint.data.bendDirection : frames[frame + IkConstraintTimeline.PREV_BEND_DIRECTION];
                }
                else {
                    constraint.mix += (mix + (frames[frame + IkConstraintTimeline.MIX] - mix) * percent - constraint.mix) * alpha;
                    if (!mixingOut)
                        constraint.bendDirection = frames[frame + IkConstraintTimeline.PREV_BEND_DIRECTION];
                }
            };
            return IkConstraintTimeline;
        }(CurveTimeline));
        IkConstraintTimeline.ENTRIES = 3;
        IkConstraintTimeline.PREV_TIME = -3;
        IkConstraintTimeline.PREV_MIX = -2;
        IkConstraintTimeline.PREV_BEND_DIRECTION = -1;
        IkConstraintTimeline.MIX = 1;
        IkConstraintTimeline.BEND_DIRECTION = 2;
        core.IkConstraintTimeline = IkConstraintTimeline;
        var TransformConstraintTimeline = (function (_super) {
            __extends(TransformConstraintTimeline, _super);
            function TransformConstraintTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * TransformConstraintTimeline.ENTRIES);
                return _this;
            }
            TransformConstraintTimeline.prototype.getPropertyId = function () {
                return (TimelineType.transformConstraint << 24) + this.transformConstraintIndex;
            };
            TransformConstraintTimeline.prototype.setFrame = function (frameIndex, time, rotateMix, translateMix, scaleMix, shearMix) {
                frameIndex *= TransformConstraintTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + TransformConstraintTimeline.ROTATE] = rotateMix;
                this.frames[frameIndex + TransformConstraintTimeline.TRANSLATE] = translateMix;
                this.frames[frameIndex + TransformConstraintTimeline.SCALE] = scaleMix;
                this.frames[frameIndex + TransformConstraintTimeline.SHEAR] = shearMix;
            };
            TransformConstraintTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, setupPose, mixingOut) {
                var frames = this.frames;
                var constraint = skeleton.transformConstraints[this.transformConstraintIndex];
                if (time < frames[0]) {
                    if (setupPose) {
                        var data = constraint.data;
                        constraint.rotateMix = data.rotateMix;
                        constraint.translateMix = data.rotateMix;
                        constraint.scaleMix = data.scaleMix;
                        constraint.shearMix = data.shearMix;
                    }
                    return;
                }
                var rotate = 0, translate = 0, scale = 0, shear = 0;
                if (time >= frames[frames.length - TransformConstraintTimeline.ENTRIES]) {
                    var i = frames.length;
                    rotate = frames[i + TransformConstraintTimeline.PREV_ROTATE];
                    translate = frames[i + TransformConstraintTimeline.PREV_TRANSLATE];
                    scale = frames[i + TransformConstraintTimeline.PREV_SCALE];
                    shear = frames[i + TransformConstraintTimeline.PREV_SHEAR];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, TransformConstraintTimeline.ENTRIES);
                    rotate = frames[frame + TransformConstraintTimeline.PREV_ROTATE];
                    translate = frames[frame + TransformConstraintTimeline.PREV_TRANSLATE];
                    scale = frames[frame + TransformConstraintTimeline.PREV_SCALE];
                    shear = frames[frame + TransformConstraintTimeline.PREV_SHEAR];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / TransformConstraintTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TransformConstraintTimeline.PREV_TIME] - frameTime));
                    rotate += (frames[frame + TransformConstraintTimeline.ROTATE] - rotate) * percent;
                    translate += (frames[frame + TransformConstraintTimeline.TRANSLATE] - translate) * percent;
                    scale += (frames[frame + TransformConstraintTimeline.SCALE] - scale) * percent;
                    shear += (frames[frame + TransformConstraintTimeline.SHEAR] - shear) * percent;
                }
                if (setupPose) {
                    var data = constraint.data;
                    constraint.rotateMix = data.rotateMix + (rotate - data.rotateMix) * alpha;
                    constraint.translateMix = data.translateMix + (translate - data.translateMix) * alpha;
                    constraint.scaleMix = data.scaleMix + (scale - data.scaleMix) * alpha;
                    constraint.shearMix = data.shearMix + (shear - data.shearMix) * alpha;
                }
                else {
                    constraint.rotateMix += (rotate - constraint.rotateMix) * alpha;
                    constraint.translateMix += (translate - constraint.translateMix) * alpha;
                    constraint.scaleMix += (scale - constraint.scaleMix) * alpha;
                    constraint.shearMix += (shear - constraint.shearMix) * alpha;
                }
            };
            return TransformConstraintTimeline;
        }(CurveTimeline));
        TransformConstraintTimeline.ENTRIES = 5;
        TransformConstraintTimeline.PREV_TIME = -5;
        TransformConstraintTimeline.PREV_ROTATE = -4;
        TransformConstraintTimeline.PREV_TRANSLATE = -3;
        TransformConstraintTimeline.PREV_SCALE = -2;
        TransformConstraintTimeline.PREV_SHEAR = -1;
        TransformConstraintTimeline.ROTATE = 1;
        TransformConstraintTimeline.TRANSLATE = 2;
        TransformConstraintTimeline.SCALE = 3;
        TransformConstraintTimeline.SHEAR = 4;
        core.TransformConstraintTimeline = TransformConstraintTimeline;
        var PathConstraintPositionTimeline = (function (_super) {
            __extends(PathConstraintPositionTimeline, _super);
            function PathConstraintPositionTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * PathConstraintPositionTimeline.ENTRIES);
                return _this;
            }
            PathConstraintPositionTimeline.prototype.getPropertyId = function () {
                return (TimelineType.pathConstraintPosition << 24) + this.pathConstraintIndex;
            };
            PathConstraintPositionTimeline.prototype.setFrame = function (frameIndex, time, value) {
                frameIndex *= PathConstraintPositionTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + PathConstraintPositionTimeline.VALUE] = value;
            };
            PathConstraintPositionTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, setupPose, mixingOut) {
                var frames = this.frames;
                var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
                if (time < frames[0]) {
                    if (setupPose)
                        constraint.position = constraint.data.position;
                    return;
                }
                var position = 0;
                if (time >= frames[frames.length - PathConstraintPositionTimeline.ENTRIES])
                    position = frames[frames.length + PathConstraintPositionTimeline.PREV_VALUE];
                else {
                    var frame = Animation.binarySearch(frames, time, PathConstraintPositionTimeline.ENTRIES);
                    position = frames[frame + PathConstraintPositionTimeline.PREV_VALUE];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / PathConstraintPositionTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintPositionTimeline.PREV_TIME] - frameTime));
                    position += (frames[frame + PathConstraintPositionTimeline.VALUE] - position) * percent;
                }
                if (setupPose)
                    constraint.position = constraint.data.position + (position - constraint.data.position) * alpha;
                else
                    constraint.position += (position - constraint.position) * alpha;
            };
            return PathConstraintPositionTimeline;
        }(CurveTimeline));
        PathConstraintPositionTimeline.ENTRIES = 2;
        PathConstraintPositionTimeline.PREV_TIME = -2;
        PathConstraintPositionTimeline.PREV_VALUE = -1;
        PathConstraintPositionTimeline.VALUE = 1;
        core.PathConstraintPositionTimeline = PathConstraintPositionTimeline;
        var PathConstraintSpacingTimeline = (function (_super) {
            __extends(PathConstraintSpacingTimeline, _super);
            function PathConstraintSpacingTimeline(frameCount) {
                return _super.call(this, frameCount) || this;
            }
            PathConstraintSpacingTimeline.prototype.getPropertyId = function () {
                return (TimelineType.pathConstraintSpacing << 24) + this.pathConstraintIndex;
            };
            PathConstraintSpacingTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, setupPose, mixingOut) {
                var frames = this.frames;
                var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
                if (time < frames[0]) {
                    if (setupPose)
                        constraint.spacing = constraint.data.spacing;
                    return;
                }
                var spacing = 0;
                if (time >= frames[frames.length - PathConstraintSpacingTimeline.ENTRIES])
                    spacing = frames[frames.length + PathConstraintSpacingTimeline.PREV_VALUE];
                else {
                    var frame = Animation.binarySearch(frames, time, PathConstraintSpacingTimeline.ENTRIES);
                    spacing = frames[frame + PathConstraintSpacingTimeline.PREV_VALUE];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / PathConstraintSpacingTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintSpacingTimeline.PREV_TIME] - frameTime));
                    spacing += (frames[frame + PathConstraintSpacingTimeline.VALUE] - spacing) * percent;
                }
                if (setupPose)
                    constraint.spacing = constraint.data.spacing + (spacing - constraint.data.spacing) * alpha;
                else
                    constraint.spacing += (spacing - constraint.spacing) * alpha;
            };
            return PathConstraintSpacingTimeline;
        }(PathConstraintPositionTimeline));
        core.PathConstraintSpacingTimeline = PathConstraintSpacingTimeline;
        var PathConstraintMixTimeline = (function (_super) {
            __extends(PathConstraintMixTimeline, _super);
            function PathConstraintMixTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * PathConstraintMixTimeline.ENTRIES);
                return _this;
            }
            PathConstraintMixTimeline.prototype.getPropertyId = function () {
                return (TimelineType.pathConstraintMix << 24) + this.pathConstraintIndex;
            };
            PathConstraintMixTimeline.prototype.setFrame = function (frameIndex, time, rotateMix, translateMix) {
                frameIndex *= PathConstraintMixTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + PathConstraintMixTimeline.ROTATE] = rotateMix;
                this.frames[frameIndex + PathConstraintMixTimeline.TRANSLATE] = translateMix;
            };
            PathConstraintMixTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, setupPose, mixingOut) {
                var frames = this.frames;
                var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
                if (time < frames[0]) {
                    if (setupPose) {
                        constraint.rotateMix = constraint.data.rotateMix;
                        constraint.translateMix = constraint.data.translateMix;
                    }
                    return;
                }
                var rotate = 0, translate = 0;
                if (time >= frames[frames.length - PathConstraintMixTimeline.ENTRIES]) {
                    rotate = frames[frames.length + PathConstraintMixTimeline.PREV_ROTATE];
                    translate = frames[frames.length + PathConstraintMixTimeline.PREV_TRANSLATE];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, PathConstraintMixTimeline.ENTRIES);
                    rotate = frames[frame + PathConstraintMixTimeline.PREV_ROTATE];
                    translate = frames[frame + PathConstraintMixTimeline.PREV_TRANSLATE];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / PathConstraintMixTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintMixTimeline.PREV_TIME] - frameTime));
                    rotate += (frames[frame + PathConstraintMixTimeline.ROTATE] - rotate) * percent;
                    translate += (frames[frame + PathConstraintMixTimeline.TRANSLATE] - translate) * percent;
                }
                if (setupPose) {
                    constraint.rotateMix = constraint.data.rotateMix + (rotate - constraint.data.rotateMix) * alpha;
                    constraint.translateMix = constraint.data.translateMix + (translate - constraint.data.translateMix) * alpha;
                }
                else {
                    constraint.rotateMix += (rotate - constraint.rotateMix) * alpha;
                    constraint.translateMix += (translate - constraint.translateMix) * alpha;
                }
            };
            return PathConstraintMixTimeline;
        }(CurveTimeline));
        PathConstraintMixTimeline.ENTRIES = 3;
        PathConstraintMixTimeline.PREV_TIME = -3;
        PathConstraintMixTimeline.PREV_ROTATE = -2;
        PathConstraintMixTimeline.PREV_TRANSLATE = -1;
        PathConstraintMixTimeline.ROTATE = 1;
        PathConstraintMixTimeline.TRANSLATE = 2;
        core.PathConstraintMixTimeline = PathConstraintMixTimeline;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var AnimationState = (function () {
            function AnimationState(data) {
                this.tracks = new Array();
                this.events = new Array();
                this.listeners = new Array();
                this.queue = new EventQueue(this);
                this.propertyIDs = new core.IntSet();
                this.animationsChanged = false;
                this.timeScale = 1;
                this.trackEntryPool = new core.Pool(function () { return new TrackEntry(); });
                this.data = data;
            }
            AnimationState.prototype.update = function (delta) {
                delta *= this.timeScale;
                var tracks = this.tracks;
                for (var i = 0, n = tracks.length; i < n; i++) {
                    var current = tracks[i];
                    if (current == null)
                        continue;
                    current.animationLast = current.nextAnimationLast;
                    current.trackLast = current.nextTrackLast;
                    var currentDelta = delta * current.timeScale;
                    if (current.delay > 0) {
                        current.delay -= currentDelta;
                        if (current.delay > 0)
                            continue;
                        currentDelta = -current.delay;
                        current.delay = 0;
                    }
                    var next = current.next;
                    if (next != null) {
                        var nextTime = current.trackLast - next.delay;
                        if (nextTime >= 0) {
                            next.delay = 0;
                            next.trackTime = nextTime + delta * next.timeScale;
                            current.trackTime += currentDelta;
                            this.setCurrent(i, next, true);
                            while (next.mixingFrom != null) {
                                next.mixTime += currentDelta;
                                next = next.mixingFrom;
                            }
                            continue;
                        }
                    }
                    else {
                        if (current.trackLast >= current.trackEnd && current.mixingFrom == null) {
                            tracks[i] = null;
                            this.queue.end(current);
                            this.disposeNext(current);
                            continue;
                        }
                    }
                    this.updateMixingFrom(current, delta);
                    current.trackTime += currentDelta;
                }
                this.queue.drain();
            };
            AnimationState.prototype.updateMixingFrom = function (entry, delta) {
                var from = entry.mixingFrom;
                if (from == null)
                    return;
                this.updateMixingFrom(from, delta);
                if (entry.mixTime >= entry.mixDuration && from.mixingFrom != null && entry.mixTime > 0) {
                    entry.mixingFrom = null;
                    this.queue.end(from);
                    return;
                }
                from.animationLast = from.nextAnimationLast;
                from.trackLast = from.nextTrackLast;
                from.trackTime += delta * from.timeScale;
                entry.mixTime += delta * from.timeScale;
            };
            AnimationState.prototype.apply = function (skeleton) {
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                if (this.animationsChanged)
                    this._animationsChanged();
                var events = this.events;
                var tracks = this.tracks;
                for (var i = 0, n = tracks.length; i < n; i++) {
                    var current = tracks[i];
                    if (current == null || current.delay > 0)
                        continue;
                    var mix = current.alpha;
                    if (current.mixingFrom != null)
                        mix *= this.applyMixingFrom(current, skeleton);
                    else if (current.trackTime >= current.trackEnd)
                        mix = 0;
                    var animationLast = current.animationLast, animationTime = current.getAnimationTime();
                    var timelineCount = current.animation.timelines.length;
                    var timelines = current.animation.timelines;
                    if (mix == 1) {
                        for (var ii = 0; ii < timelineCount; ii++)
                            timelines[ii].apply(skeleton, animationLast, animationTime, events, 1, true, false);
                    }
                    else {
                        var firstFrame = current.timelinesRotation.length == 0;
                        if (firstFrame)
                            core.Utils.setArraySize(current.timelinesRotation, timelineCount << 1, null);
                        var timelinesRotation = current.timelinesRotation;
                        var timelinesFirst = current.timelinesFirst;
                        for (var ii = 0; ii < timelineCount; ii++) {
                            var timeline = timelines[ii];
                            if (timeline instanceof core.RotateTimeline) {
                                this.applyRotateTimeline(timeline, skeleton, animationTime, mix, timelinesFirst[ii], timelinesRotation, ii << 1, firstFrame);
                            }
                            else
                                timeline.apply(skeleton, animationLast, animationTime, events, mix, timelinesFirst[ii], false);
                        }
                    }
                    this.queueEvents(current, animationTime);
                    events.length = 0;
                    current.nextAnimationLast = animationTime;
                    current.nextTrackLast = current.trackTime;
                }
                this.queue.drain();
            };
            AnimationState.prototype.applyMixingFrom = function (entry, skeleton) {
                var from = entry.mixingFrom;
                if (from.mixingFrom != null)
                    this.applyMixingFrom(from, skeleton);
                var mix = 0;
                if (entry.mixDuration == 0)
                    mix = 1;
                else {
                    mix = entry.mixTime / entry.mixDuration;
                    if (mix > 1)
                        mix = 1;
                }
                var events = mix < from.eventThreshold ? this.events : null;
                var attachments = mix < from.attachmentThreshold, drawOrder = mix < from.drawOrderThreshold;
                var animationLast = from.animationLast, animationTime = from.getAnimationTime();
                var timelineCount = from.animation.timelines.length;
                var timelines = from.animation.timelines;
                var timelinesFirst = from.timelinesFirst;
                var alpha = from.alpha * entry.mixAlpha * (1 - mix);
                var firstFrame = from.timelinesRotation.length == 0;
                if (firstFrame)
                    core.Utils.setArraySize(from.timelinesRotation, timelineCount << 1, null);
                var timelinesRotation = from.timelinesRotation;
                for (var i = 0; i < timelineCount; i++) {
                    var timeline = timelines[i];
                    var setupPose = timelinesFirst[i];
                    if (timeline instanceof core.RotateTimeline)
                        this.applyRotateTimeline(timeline, skeleton, animationTime, alpha, setupPose, timelinesRotation, i << 1, firstFrame);
                    else {
                        if (!setupPose) {
                            if (!attachments && timeline instanceof core.AttachmentTimeline)
                                continue;
                            if (!drawOrder && timeline instanceof core.DrawOrderTimeline)
                                continue;
                        }
                        timeline.apply(skeleton, animationLast, animationTime, events, alpha, setupPose, true);
                    }
                }
                if (entry.mixDuration > 0)
                    this.queueEvents(from, animationTime);
                this.events.length = 0;
                from.nextAnimationLast = animationTime;
                from.nextTrackLast = from.trackTime;
                return mix;
            };
            AnimationState.prototype.applyRotateTimeline = function (timeline, skeleton, time, alpha, setupPose, timelinesRotation, i, firstFrame) {
                if (firstFrame)
                    timelinesRotation[i] = 0;
                if (alpha == 1) {
                    timeline.apply(skeleton, 0, time, null, 1, setupPose, false);
                    return;
                }
                var rotateTimeline = timeline;
                var frames = rotateTimeline.frames;
                var bone = skeleton.bones[rotateTimeline.boneIndex];
                if (time < frames[0]) {
                    if (setupPose)
                        bone.rotation = bone.data.rotation;
                    return;
                }
                var r2 = 0;
                if (time >= frames[frames.length - core.RotateTimeline.ENTRIES])
                    r2 = bone.data.rotation + frames[frames.length + core.RotateTimeline.PREV_ROTATION];
                else {
                    var frame = core.Animation.binarySearch(frames, time, core.RotateTimeline.ENTRIES);
                    var prevRotation = frames[frame + core.RotateTimeline.PREV_ROTATION];
                    var frameTime = frames[frame];
                    var percent = rotateTimeline.getCurvePercent((frame >> 1) - 1, 1 - (time - frameTime) / (frames[frame + core.RotateTimeline.PREV_TIME] - frameTime));
                    r2 = frames[frame + core.RotateTimeline.ROTATION] - prevRotation;
                    r2 -= (16384 - ((16384.499999999996 - r2 / 360) | 0)) * 360;
                    r2 = prevRotation + r2 * percent + bone.data.rotation;
                    r2 -= (16384 - ((16384.499999999996 - r2 / 360) | 0)) * 360;
                }
                var r1 = setupPose ? bone.data.rotation : bone.rotation;
                var total = 0, diff = r2 - r1;
                if (diff == 0) {
                    total = timelinesRotation[i];
                }
                else {
                    diff -= (16384 - ((16384.499999999996 - diff / 360) | 0)) * 360;
                    var lastTotal = 0, lastDiff = 0;
                    if (firstFrame) {
                        lastTotal = 0;
                        lastDiff = diff;
                    }
                    else {
                        lastTotal = timelinesRotation[i];
                        lastDiff = timelinesRotation[i + 1];
                    }
                    var current = diff > 0, dir = lastTotal >= 0;
                    if (core.MathUtils.signum(lastDiff) != core.MathUtils.signum(diff) && Math.abs(lastDiff) <= 90) {
                        if (Math.abs(lastTotal) > 180)
                            lastTotal += 360 * core.MathUtils.signum(lastTotal);
                        dir = current;
                    }
                    total = diff + lastTotal - lastTotal % 360;
                    if (dir != current)
                        total += 360 * core.MathUtils.signum(lastTotal);
                    timelinesRotation[i] = total;
                }
                timelinesRotation[i + 1] = diff;
                r1 += total * alpha;
                bone.rotation = r1 - (16384 - ((16384.499999999996 - r1 / 360) | 0)) * 360;
            };
            AnimationState.prototype.queueEvents = function (entry, animationTime) {
                var animationStart = entry.animationStart, animationEnd = entry.animationEnd;
                var duration = animationEnd - animationStart;
                var trackLastWrapped = entry.trackLast % duration;
                var events = this.events;
                var i = 0, n = events.length;
                for (; i < n; i++) {
                    var event_1 = events[i];
                    if (event_1.time < trackLastWrapped)
                        break;
                    if (event_1.time > animationEnd)
                        continue;
                    this.queue.event(entry, event_1);
                }
                if (entry.loop ? (trackLastWrapped > entry.trackTime % duration)
                    : (animationTime >= animationEnd && entry.animationLast < animationEnd)) {
                    this.queue.complete(entry);
                }
                for (; i < n; i++) {
                    var event_2 = events[i];
                    if (event_2.time < animationStart)
                        continue;
                    this.queue.event(entry, events[i]);
                }
            };
            AnimationState.prototype.clearTracks = function () {
                var oldDrainDisabled = this.queue.drainDisabled;
                this.queue.drainDisabled = true;
                for (var i = 0, n = this.tracks.length; i < n; i++)
                    this.clearTrack(i);
                this.tracks.length = 0;
                this.queue.drainDisabled = oldDrainDisabled;
                this.queue.drain();
            };
            AnimationState.prototype.clearTrack = function (trackIndex) {
                if (trackIndex >= this.tracks.length)
                    return;
                var current = this.tracks[trackIndex];
                if (current == null)
                    return;
                this.queue.end(current);
                this.disposeNext(current);
                var entry = current;
                while (true) {
                    var from = entry.mixingFrom;
                    if (from == null)
                        break;
                    this.queue.end(from);
                    entry.mixingFrom = null;
                    entry = from;
                }
                this.tracks[current.trackIndex] = null;
                this.queue.drain();
            };
            AnimationState.prototype.setCurrent = function (index, current, interrupt) {
                var from = this.expandToIndex(index);
                this.tracks[index] = current;
                if (from != null) {
                    if (interrupt)
                        this.queue.interrupt(from);
                    current.mixingFrom = from;
                    current.mixTime = 0;
                    from.timelinesRotation.length = 0;
                    if (from.mixingFrom != null && from.mixDuration > 0)
                        current.mixAlpha *= Math.min(from.mixTime / from.mixDuration, 1);
                }
                this.queue.start(current);
            };
            AnimationState.prototype.setAnimation = function (trackIndex, animationName, loop) {
                var animation = this.data.skeletonData.findAnimation(animationName);
                if (animation == null)
                    throw new Error("Animation not found: " + animationName);
                return this.setAnimationWith(trackIndex, animation, loop);
            };
            AnimationState.prototype.setAnimationWith = function (trackIndex, animation, loop) {
                if (animation == null)
                    throw new Error("animation cannot be null.");
                var interrupt = true;
                var current = this.expandToIndex(trackIndex);
                if (current != null) {
                    if (current.nextTrackLast == -1) {
                        this.tracks[trackIndex] = current.mixingFrom;
                        this.queue.interrupt(current);
                        this.queue.end(current);
                        this.disposeNext(current);
                        current = current.mixingFrom;
                        interrupt = false;
                    }
                    else
                        this.disposeNext(current);
                }
                var entry = this.trackEntry(trackIndex, animation, loop, current);
                this.setCurrent(trackIndex, entry, interrupt);
                this.queue.drain();
                return entry;
            };
            AnimationState.prototype.addAnimation = function (trackIndex, animationName, loop, delay) {
                var animation = this.data.skeletonData.findAnimation(animationName);
                if (animation == null)
                    throw new Error("Animation not found: " + animationName);
                return this.addAnimationWith(trackIndex, animation, loop, delay);
            };
            AnimationState.prototype.addAnimationWith = function (trackIndex, animation, loop, delay) {
                if (animation == null)
                    throw new Error("animation cannot be null.");
                var last = this.expandToIndex(trackIndex);
                if (last != null) {
                    while (last.next != null)
                        last = last.next;
                }
                var entry = this.trackEntry(trackIndex, animation, loop, last);
                if (last == null) {
                    this.setCurrent(trackIndex, entry, true);
                    this.queue.drain();
                }
                else {
                    last.next = entry;
                    if (delay <= 0) {
                        var duration = last.animationEnd - last.animationStart;
                        if (duration != 0)
                            delay += duration * (1 + ((last.trackTime / duration) | 0)) - this.data.getMix(last.animation, animation);
                        else
                            delay = 0;
                    }
                }
                entry.delay = delay;
                return entry;
            };
            AnimationState.prototype.setEmptyAnimation = function (trackIndex, mixDuration) {
                var entry = this.setAnimationWith(trackIndex, AnimationState.emptyAnimation, false);
                entry.mixDuration = mixDuration;
                entry.trackEnd = mixDuration;
                return entry;
            };
            AnimationState.prototype.addEmptyAnimation = function (trackIndex, mixDuration, delay) {
                if (delay <= 0)
                    delay -= mixDuration;
                var entry = this.addAnimationWith(trackIndex, AnimationState.emptyAnimation, false, delay);
                entry.mixDuration = mixDuration;
                entry.trackEnd = mixDuration;
                return entry;
            };
            AnimationState.prototype.setEmptyAnimations = function (mixDuration) {
                var oldDrainDisabled = this.queue.drainDisabled;
                this.queue.drainDisabled = true;
                for (var i = 0, n = this.tracks.length; i < n; i++) {
                    var current = this.tracks[i];
                    if (current != null)
                        this.setEmptyAnimation(current.trackIndex, mixDuration);
                }
                this.queue.drainDisabled = oldDrainDisabled;
                this.queue.drain();
            };
            AnimationState.prototype.expandToIndex = function (index) {
                if (index < this.tracks.length)
                    return this.tracks[index];
                core.Utils.ensureArrayCapacity(this.tracks, index - this.tracks.length + 1, null);
                this.tracks.length = index + 1;
                return null;
            };
            AnimationState.prototype.trackEntry = function (trackIndex, animation, loop, last) {
                var entry = this.trackEntryPool.obtain();
                entry.trackIndex = trackIndex;
                entry.animation = animation;
                entry.loop = loop;
                entry.eventThreshold = 0;
                entry.attachmentThreshold = 0;
                entry.drawOrderThreshold = 0;
                entry.animationStart = 0;
                entry.animationEnd = animation.duration;
                entry.animationLast = -1;
                entry.nextAnimationLast = -1;
                entry.delay = 0;
                entry.trackTime = 0;
                entry.trackLast = -1;
                entry.nextTrackLast = -1;
                entry.trackEnd = Number.MAX_VALUE;
                entry.timeScale = 1;
                entry.alpha = 1;
                entry.mixAlpha = 1;
                entry.mixTime = 0;
                entry.mixDuration = last == null ? 0 : this.data.getMix(last.animation, animation);
                return entry;
            };
            AnimationState.prototype.disposeNext = function (entry) {
                var next = entry.next;
                while (next != null) {
                    this.queue.dispose(next);
                    next = next.next;
                }
                entry.next = null;
            };
            AnimationState.prototype._animationsChanged = function () {
                this.animationsChanged = false;
                var propertyIDs = this.propertyIDs;
                var i = 0, n = this.tracks.length;
                propertyIDs.clear();
                for (; i < n; i++) {
                    var entry = this.tracks[i];
                    if (entry == null)
                        continue;
                    this.setTimelinesFirst(entry);
                    i++;
                    break;
                }
                for (; i < n; i++) {
                    var entry = this.tracks[i];
                    if (entry != null)
                        this.checkTimelinesFirst(entry);
                }
            };
            AnimationState.prototype.setTimelinesFirst = function (entry) {
                if (entry.mixingFrom != null) {
                    this.setTimelinesFirst(entry.mixingFrom);
                    this.checkTimelinesUsage(entry, entry.timelinesFirst);
                    return;
                }
                var propertyIDs = this.propertyIDs;
                var timelines = entry.animation.timelines;
                var n = timelines.length;
                var usage = core.Utils.setArraySize(entry.timelinesFirst, n, false);
                for (var i = 0; i < n; i++) {
                    propertyIDs.add(timelines[i].getPropertyId());
                    usage[i] = true;
                }
            };
            AnimationState.prototype.checkTimelinesFirst = function (entry) {
                if (entry.mixingFrom != null)
                    this.checkTimelinesFirst(entry.mixingFrom);
                this.checkTimelinesUsage(entry, entry.timelinesFirst);
            };
            AnimationState.prototype.checkTimelinesUsage = function (entry, usageArray) {
                var propertyIDs = this.propertyIDs;
                var timelines = entry.animation.timelines;
                var n = timelines.length;
                var usage = core.Utils.setArraySize(usageArray, n);
                for (var i = 0; i < n; i++)
                    usage[i] = propertyIDs.add(timelines[i].getPropertyId());
            };
            AnimationState.prototype.getCurrent = function (trackIndex) {
                if (trackIndex >= this.tracks.length)
                    return null;
                return this.tracks[trackIndex];
            };
            AnimationState.prototype.addListener = function (listener) {
                if (listener == null)
                    throw new Error("listener cannot be null.");
                this.listeners.push(listener);
            };
            AnimationState.prototype.removeListener = function (listener) {
                var index = this.listeners.indexOf(listener);
                if (index >= 0)
                    this.listeners.splice(index, 1);
            };
            AnimationState.prototype.clearListeners = function () {
                this.listeners.length = 0;
            };
            AnimationState.prototype.clearListenerNotifications = function () {
                this.queue.clear();
            };
            AnimationState.prototype.setAnimationByName = function (trackIndex, animationName, loop) {
                if (!AnimationState.deprecatedWarning1) {
                    AnimationState.deprecatedWarning1 = true;
                    console.warn("Deprecation Warning: AnimationState.setAnimationByName is deprecated, please use setAnimation from now on.");
                }
                this.setAnimation(trackIndex, animationName, loop);
            };
            AnimationState.prototype.addAnimationByName = function (trackIndex, animationName, loop, delay) {
                if (!AnimationState.deprecatedWarning2) {
                    AnimationState.deprecatedWarning2 = true;
                    console.warn("Deprecation Warning: AnimationState.addAnimationByName is deprecated, please use addAnimation from now on.");
                }
                this.addAnimation(trackIndex, animationName, loop, delay);
            };
            AnimationState.prototype.hasAnimation = function (animationName) {
                var animation = this.data.skeletonData.findAnimation(animationName);
                return animation !== null;
            };
            AnimationState.prototype.hasAnimationByName = function (animationName) {
                if (!AnimationState.deprecatedWarning3) {
                    AnimationState.deprecatedWarning3 = true;
                    console.warn("Deprecation Warning: AnimationState.hasAnimationByName is deprecated, please use hasAnimation from now on.");
                }
                return this.hasAnimation(animationName);
            };
            return AnimationState;
        }());
        AnimationState.emptyAnimation = new core.Animation("<empty>", [], 0);
        AnimationState.deprecatedWarning1 = false;
        AnimationState.deprecatedWarning2 = false;
        AnimationState.deprecatedWarning3 = false;
        core.AnimationState = AnimationState;
        var TrackEntry = (function () {
            function TrackEntry() {
                this.timelinesFirst = new Array();
                this.timelinesRotation = new Array();
            }
            TrackEntry.prototype.reset = function () {
                this.next = null;
                this.mixingFrom = null;
                this.animation = null;
                this.listener = null;
                this.timelinesFirst.length = 0;
                this.timelinesRotation.length = 0;
            };
            TrackEntry.prototype.getAnimationTime = function () {
                if (this.loop) {
                    var duration = this.animationEnd - this.animationStart;
                    if (duration == 0)
                        return this.animationStart;
                    return (this.trackTime % duration) + this.animationStart;
                }
                return Math.min(this.trackTime + this.animationStart, this.animationEnd);
            };
            TrackEntry.prototype.setAnimationLast = function (animationLast) {
                this.animationLast = animationLast;
                this.nextAnimationLast = animationLast;
            };
            TrackEntry.prototype.isComplete = function () {
                return this.trackTime >= this.animationEnd - this.animationStart;
            };
            TrackEntry.prototype.resetRotationDirections = function () {
                this.timelinesRotation.length = 0;
            };
            Object.defineProperty(TrackEntry.prototype, "time", {
                get: function () {
                    if (!TrackEntry.deprecatedWarning1) {
                        TrackEntry.deprecatedWarning1 = true;
                        console.warn("Deprecation Warning: TrackEntry.time is deprecated, please use trackTime from now on.");
                    }
                    return this.trackTime;
                },
                set: function (value) {
                    if (!TrackEntry.deprecatedWarning1) {
                        TrackEntry.deprecatedWarning1 = true;
                        console.warn("Deprecation Warning: TrackEntry.time is deprecated, please use trackTime from now on.");
                    }
                    this.trackTime = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TrackEntry.prototype, "endTime", {
                get: function () {
                    if (!TrackEntry.deprecatedWarning2) {
                        TrackEntry.deprecatedWarning2 = true;
                        console.warn("Deprecation Warning: TrackEntry.endTime is deprecated, please use trackEnd from now on.");
                    }
                    return this.trackTime;
                },
                set: function (value) {
                    if (!TrackEntry.deprecatedWarning2) {
                        TrackEntry.deprecatedWarning2 = true;
                        console.warn("Deprecation Warning: TrackEntry.endTime is deprecated, please use trackEnd from now on.");
                    }
                    this.trackTime = value;
                },
                enumerable: true,
                configurable: true
            });
            TrackEntry.prototype.loopsCount = function () {
                return Math.floor(this.trackTime / this.trackEnd);
            };
            return TrackEntry;
        }());
        TrackEntry.deprecatedWarning1 = false;
        TrackEntry.deprecatedWarning2 = false;
        core.TrackEntry = TrackEntry;
        var EventQueue = (function () {
            function EventQueue(animState) {
                this.objects = [];
                this.drainDisabled = false;
                this.animState = animState;
            }
            EventQueue.prototype.start = function (entry) {
                this.objects.push(EventType.start);
                this.objects.push(entry);
                this.animState.animationsChanged = true;
            };
            EventQueue.prototype.interrupt = function (entry) {
                this.objects.push(EventType.interrupt);
                this.objects.push(entry);
            };
            EventQueue.prototype.end = function (entry) {
                this.objects.push(EventType.end);
                this.objects.push(entry);
                this.animState.animationsChanged = true;
            };
            EventQueue.prototype.dispose = function (entry) {
                this.objects.push(EventType.dispose);
                this.objects.push(entry);
            };
            EventQueue.prototype.complete = function (entry) {
                this.objects.push(EventType.complete);
                this.objects.push(entry);
            };
            EventQueue.prototype.event = function (entry, event) {
                this.objects.push(EventType.event);
                this.objects.push(entry);
                this.objects.push(event);
            };
            EventQueue.prototype.deprecateStuff = function () {
                if (!EventQueue.deprecatedWarning1) {
                    EventQueue.deprecatedWarning1 = true;
                    console.warn("Deprecation Warning: onComplete, onStart, onEnd, onEvent art deprecated, please use listeners from now on. 'state.addListener({ complete: function(track, event) { } })'");
                }
                return true;
            };
            EventQueue.prototype.drain = function () {
                if (this.drainDisabled)
                    return;
                this.drainDisabled = true;
                var objects = this.objects;
                var listeners = this.animState.listeners;
                for (var i = 0; i < objects.length; i += 2) {
                    var type = objects[i];
                    var entry = objects[i + 1];
                    switch (type) {
                        case EventType.start:
                            if (entry.listener != null && entry.listener.start)
                                entry.listener.start(entry);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].start)
                                    listeners[ii].start(entry);
                            entry.onStart && this.deprecateStuff() && entry.onStart(entry.trackIndex);
                            this.animState.onStart && this.deprecateStuff() && this.deprecateStuff && this.animState.onStart(entry.trackIndex);
                            break;
                        case EventType.interrupt:
                            if (entry.listener != null && entry.listener.interrupt)
                                entry.listener.interrupt(entry);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].interrupt)
                                    listeners[ii].interrupt(entry);
                            break;
                        case EventType.end:
                            if (entry.listener != null && entry.listener.end)
                                entry.listener.end(entry);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].end)
                                    listeners[ii].end(entry);
                            entry.onEnd && this.deprecateStuff() && entry.onEnd(entry.trackIndex);
                            this.animState.onEnd && this.deprecateStuff() && this.animState.onEnd(entry.trackIndex);
                        case EventType.dispose:
                            if (entry.listener != null && entry.listener.dispose)
                                entry.listener.dispose(entry);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].dispose)
                                    listeners[ii].dispose(entry);
                            this.animState.trackEntryPool.free(entry);
                            break;
                        case EventType.complete:
                            if (entry.listener != null && entry.listener.complete)
                                entry.listener.complete(entry);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].complete)
                                    listeners[ii].complete(entry);
                            var count = core.MathUtils.toInt(entry.loopsCount());
                            entry.onComplete && this.deprecateStuff() && entry.onComplete(entry.trackIndex, count);
                            this.animState.onComplete && this.deprecateStuff() && this.animState.onComplete(entry.trackIndex, count);
                            break;
                        case EventType.event:
                            var event_3 = objects[i++ + 2];
                            if (entry.listener != null && entry.listener.event)
                                entry.listener.event(entry, event_3);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].event)
                                    listeners[ii].event(entry, event_3);
                            entry.onEvent && this.deprecateStuff() && entry.onEvent(entry.trackIndex, event_3);
                            this.animState.onEvent && this.deprecateStuff() && this.animState.onEvent(entry.trackIndex, event_3);
                            break;
                    }
                }
                this.clear();
                this.drainDisabled = false;
            };
            EventQueue.prototype.clear = function () {
                this.objects.length = 0;
            };
            return EventQueue;
        }());
        EventQueue.deprecatedWarning1 = false;
        core.EventQueue = EventQueue;
        var EventType;
        (function (EventType) {
            EventType[EventType["start"] = 0] = "start";
            EventType[EventType["interrupt"] = 1] = "interrupt";
            EventType[EventType["end"] = 2] = "end";
            EventType[EventType["dispose"] = 3] = "dispose";
            EventType[EventType["complete"] = 4] = "complete";
            EventType[EventType["event"] = 5] = "event";
        })(EventType = core.EventType || (core.EventType = {}));
        var AnimationStateAdapter2 = (function () {
            function AnimationStateAdapter2() {
            }
            AnimationStateAdapter2.prototype.start = function (entry) {
            };
            AnimationStateAdapter2.prototype.interrupt = function (entry) {
            };
            AnimationStateAdapter2.prototype.end = function (entry) {
            };
            AnimationStateAdapter2.prototype.dispose = function (entry) {
            };
            AnimationStateAdapter2.prototype.complete = function (entry) {
            };
            AnimationStateAdapter2.prototype.event = function (entry, event) {
            };
            return AnimationStateAdapter2;
        }());
        core.AnimationStateAdapter2 = AnimationStateAdapter2;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var AnimationStateData = (function () {
            function AnimationStateData(skeletonData) {
                this.animationToMixTime = {};
                this.defaultMix = 0;
                if (skeletonData == null)
                    throw new Error("skeletonData cannot be null.");
                this.skeletonData = skeletonData;
            }
            AnimationStateData.prototype.setMix = function (fromName, toName, duration) {
                var from = this.skeletonData.findAnimation(fromName);
                if (from == null)
                    throw new Error("Animation not found: " + fromName);
                var to = this.skeletonData.findAnimation(toName);
                if (to == null)
                    throw new Error("Animation not found: " + toName);
                this.setMixWith(from, to, duration);
            };
            AnimationStateData.prototype.setMixByName = function (fromName, toName, duration) {
                if (!AnimationStateData.deprecatedWarning1) {
                    AnimationStateData.deprecatedWarning1 = true;
                    console.warn("Deprecation Warning: AnimationStateData.setMixByName is deprecated, please use setMix from now on.");
                }
                this.setMix(fromName, toName, duration);
            };
            AnimationStateData.prototype.setMixWith = function (from, to, duration) {
                if (from == null)
                    throw new Error("from cannot be null.");
                if (to == null)
                    throw new Error("to cannot be null.");
                var key = from.name + to.name;
                this.animationToMixTime[key] = duration;
            };
            AnimationStateData.prototype.getMix = function (from, to) {
                var key = from.name + to.name;
                var value = this.animationToMixTime[key];
                return value === undefined ? this.defaultMix : value;
            };
            return AnimationStateData;
        }());
        AnimationStateData.deprecatedWarning1 = false;
        core.AnimationStateData = AnimationStateData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var AtlasAttachmentLoader = (function () {
            function AtlasAttachmentLoader(atlas) {
                this.atlas = atlas;
            }
            AtlasAttachmentLoader.prototype.newRegionAttachment = function (skin, name, path) {
                var region = this.atlas.findRegion(path);
                if (region == null)
                    throw new Error("Region not found in atlas: " + path + " (region attachment: " + name + ")");
                var attachment = new core.RegionAttachment(name);
                attachment.region = region;
                return attachment;
            };
            AtlasAttachmentLoader.prototype.newMeshAttachment = function (skin, name, path) {
                var region = this.atlas.findRegion(path);
                if (region == null)
                    throw new Error("Region not found in atlas: " + path + " (mesh attachment: " + name + ")");
                var attachment = new core.MeshAttachment(name);
                attachment.region = region;
                return attachment;
            };
            AtlasAttachmentLoader.prototype.newBoundingBoxAttachment = function (skin, name) {
                return new core.BoundingBoxAttachment(name);
            };
            AtlasAttachmentLoader.prototype.newPathAttachment = function (skin, name) {
                return new core.PathAttachment(name);
            };
            return AtlasAttachmentLoader;
        }());
        core.AtlasAttachmentLoader = AtlasAttachmentLoader;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var Attachment = (function () {
            function Attachment(name) {
                if (name == null)
                    throw new Error("name cannot be null.");
                this.name = name;
            }
            return Attachment;
        }());
        core.Attachment = Attachment;
        var VertexAttachment = (function (_super) {
            __extends(VertexAttachment, _super);
            function VertexAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.worldVerticesLength = 0;
                return _this;
            }
            VertexAttachment.prototype.computeWorldVertices = function (slot, worldVertices) {
                this.computeWorldVerticesWith(slot, 0, this.worldVerticesLength, worldVertices, 0);
            };
            VertexAttachment.prototype.computeWorldVerticesWith = function (slot, start, count, worldVertices, offset) {
                count += offset;
                var skeleton = slot.bone.skeleton;
                var deformArray = slot.attachmentVertices;
                var vertices = this.vertices;
                var bones = this.bones;
                if (bones == null) {
                    if (deformArray.length > 0)
                        vertices = deformArray;
                    var bone = slot.bone;
                    var m = bone.matrix;
                    var x = m.tx;
                    var y = m.ty;
                    var a = m.a, b = m.c, c = m.b, d = m.d;
                    for (var v_1 = start, w = offset; w < count; v_1 += 2, w += 2) {
                        var vx = vertices[v_1], vy = vertices[v_1 + 1];
                        worldVertices[w] = vx * a + vy * b + x;
                        worldVertices[w + 1] = vx * c + vy * d + y;
                    }
                    return;
                }
                var v = 0, skip = 0;
                for (var i = 0; i < start; i += 2) {
                    var n = bones[v];
                    v += n + 1;
                    skip += n;
                }
                var skeletonBones = skeleton.bones;
                if (deformArray.length == 0) {
                    for (var w = offset, b = skip * 3; w < count; w += 2) {
                        var wx = 0, wy = 0;
                        var n = bones[v++];
                        n += v;
                        for (; v < n; v++, b += 3) {
                            var bone = skeletonBones[bones[v]];
                            var m = bone.matrix;
                            var vx = vertices[b], vy = vertices[b + 1], weight = vertices[b + 2];
                            wx += (vx * m.a + vy * m.c + m.tx) * weight;
                            wy += (vx * m.b + vy * m.d + m.ty) * weight;
                        }
                        worldVertices[w] = wx;
                        worldVertices[w + 1] = wy;
                    }
                }
                else {
                    var deform = deformArray;
                    for (var w = offset, b = skip * 3, f = skip << 1; w < count; w += 2) {
                        var wx = 0, wy = 0;
                        var n = bones[v++];
                        n += v;
                        for (; v < n; v++, b += 3, f += 2) {
                            var bone = skeletonBones[bones[v]];
                            var m = bone.matrix;
                            var vx = vertices[b] + deform[f], vy = vertices[b + 1] + deform[f + 1], weight = vertices[b + 2];
                            wx += (vx * m.a + vy * m.c + m.tx) * weight;
                            wy += (vx * m.b + vy * m.d + m.ty) * weight;
                        }
                        worldVertices[w] = wx;
                        worldVertices[w + 1] = wy;
                    }
                }
            };
            VertexAttachment.prototype.applyDeform = function (sourceAttachment) {
                return this == sourceAttachment;
            };
            return VertexAttachment;
        }(Attachment));
        core.VertexAttachment = VertexAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var AttachmentType;
        (function (AttachmentType) {
            AttachmentType[AttachmentType["Region"] = 0] = "Region";
            AttachmentType[AttachmentType["BoundingBox"] = 1] = "BoundingBox";
            AttachmentType[AttachmentType["Mesh"] = 2] = "Mesh";
            AttachmentType[AttachmentType["LinkedMesh"] = 3] = "LinkedMesh";
            AttachmentType[AttachmentType["Path"] = 4] = "Path";
        })(AttachmentType = core.AttachmentType || (core.AttachmentType = {}));
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var BoundingBoxAttachment = (function (_super) {
            __extends(BoundingBoxAttachment, _super);
            function BoundingBoxAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.color = new core.Color(1, 1, 1, 1);
                return _this;
            }
            return BoundingBoxAttachment;
        }(core.VertexAttachment));
        core.BoundingBoxAttachment = BoundingBoxAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var MeshAttachment = (function (_super) {
            __extends(MeshAttachment, _super);
            function MeshAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.color = new core.Color(1, 1, 1, 1);
                _this.inheritDeform = false;
                _this.tempColor = new core.Color(0, 0, 0, 0);
                return _this;
            }
            MeshAttachment.prototype.updateWorldVertices = function (slot, premultipliedAlpha) {
                return [];
            };
            MeshAttachment.prototype.updateUVs = function (region, uvs) {
                var regionUVs = this.regionUVs;
                var n = regionUVs.length;
                if (!uvs || uvs.length != n) {
                    uvs = core.Utils.newFloatArray(n);
                }
                if (region == null) {
                    return;
                }
                var texture = region.texture;
                var r = texture._uvs;
                var w1 = region.width, h1 = region.height, w2 = region.originalWidth, h2 = region.originalHeight;
                var x = region.offsetX, y = region.pixiOffsetY;
                for (var i = 0; i < n; i += 2) {
                    var u = this.regionUVs[i], v = this.regionUVs[i + 1];
                    u = (u * w2 - x) / w1;
                    v = (v * h2 - y) / h1;
                    uvs[i] = (r.x0 * (1 - u) + r.x1 * u) * (1 - v) + (r.x3 * (1 - u) + r.x2 * u) * v;
                    uvs[i + 1] = (r.y0 * (1 - u) + r.y1 * u) * (1 - v) + (r.y3 * (1 - u) + r.y2 * u) * v;
                }
                return uvs;
            };
            MeshAttachment.prototype.applyDeform = function (sourceAttachment) {
                return this == sourceAttachment || (this.inheritDeform && this.parentMesh == sourceAttachment);
            };
            MeshAttachment.prototype.getParentMesh = function () {
                return this.parentMesh;
            };
            MeshAttachment.prototype.setParentMesh = function (parentMesh) {
                this.parentMesh = parentMesh;
                if (parentMesh != null) {
                    this.bones = parentMesh.bones;
                    this.vertices = parentMesh.vertices;
                    this.regionUVs = parentMesh.regionUVs;
                    this.triangles = parentMesh.triangles;
                    this.hullLength = parentMesh.hullLength;
                    this.worldVerticesLength = parentMesh.worldVerticesLength;
                }
            };
            return MeshAttachment;
        }(core.VertexAttachment));
        core.MeshAttachment = MeshAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var PathAttachment = (function (_super) {
            __extends(PathAttachment, _super);
            function PathAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.closed = false;
                _this.constantSpeed = false;
                _this.color = new core.Color(1, 1, 1, 1);
                return _this;
            }
            return PathAttachment;
        }(core.VertexAttachment));
        core.PathAttachment = PathAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var RegionAttachment = (function (_super) {
            __extends(RegionAttachment, _super);
            function RegionAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.x = 0;
                _this.y = 0;
                _this.scaleX = 1;
                _this.scaleY = 1;
                _this.rotation = 0;
                _this.width = 0;
                _this.height = 0;
                _this.color = new core.Color(1, 1, 1, 1);
                return _this;
            }
            RegionAttachment.prototype.updateWorldVertices = function (slot, premultipliedAlpha) {
                return [];
            };
            return RegionAttachment;
        }(core.Attachment));
        core.RegionAttachment = RegionAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var BlendMode;
        (function (BlendMode) {
            BlendMode[BlendMode["Normal"] = 0] = "Normal";
            BlendMode[BlendMode["Additive"] = 1] = "Additive";
            BlendMode[BlendMode["Multiply"] = 2] = "Multiply";
            BlendMode[BlendMode["Screen"] = 3] = "Screen";
        })(BlendMode = core.BlendMode || (core.BlendMode = {}));
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var Bone = (function () {
            function Bone(data, skeleton, parent) {
                this.matrix = new PIXI.Matrix();
                this.children = new Array();
                this.x = 0;
                this.y = 0;
                this.rotation = 0;
                this.scaleX = 0;
                this.scaleY = 0;
                this.shearX = 0;
                this.shearY = 0;
                this.ax = 0;
                this.ay = 0;
                this.arotation = 0;
                this.ascaleX = 0;
                this.ascaleY = 0;
                this.ashearX = 0;
                this.ashearY = 0;
                this.appliedValid = false;
                this.sorted = false;
                if (data == null)
                    throw new Error("data cannot be null.");
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                this.data = data;
                this.skeleton = skeleton;
                this.parent = parent;
                this.setToSetupPose();
            }
            Object.defineProperty(Bone.prototype, "worldX", {
                get: function () {
                    return this.matrix.tx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bone.prototype, "worldY", {
                get: function () {
                    return this.matrix.ty;
                },
                enumerable: true,
                configurable: true
            });
            Bone.prototype.update = function () {
                this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
            };
            Bone.prototype.updateWorldTransform = function () {
                this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
            };
            Bone.prototype.updateWorldTransformWith = function (x, y, rotation, scaleX, scaleY, shearX, shearY) {
                this.ax = x;
                this.ay = y;
                this.arotation = rotation;
                this.ascaleX = scaleX;
                this.ascaleY = scaleY;
                this.ashearX = shearX;
                this.ashearY = shearY;
                this.appliedValid = true;
                var parent = this.parent;
                var m = this.matrix;
                if (parent == null) {
                    var rotationY = rotation + 90 + shearY;
                    var la = core.MathUtils.cosDeg(rotation + shearX) * scaleX;
                    var lb = core.MathUtils.cosDeg(rotationY) * scaleY;
                    var lc = core.MathUtils.sinDeg(rotation + shearX) * scaleX;
                    var ld = core.MathUtils.sinDeg(rotationY) * scaleY;
                    var skeleton = this.skeleton;
                    if (skeleton.flipX) {
                        x = -x;
                        la = -la;
                        lb = -lb;
                    }
                    if (skeleton.flipY !== Bone.yDown) {
                        y = -y;
                        lc = -lc;
                        ld = -ld;
                    }
                    m.a = la;
                    m.c = lb;
                    m.b = lc;
                    m.d = ld;
                    m.tx = x + skeleton.x;
                    m.ty = y + skeleton.y;
                    return;
                }
                var pa = parent.matrix.a, pb = parent.matrix.c, pc = parent.matrix.b, pd = parent.matrix.d;
                m.tx = pa * x + pb * y + parent.matrix.tx;
                m.ty = pc * x + pd * y + parent.matrix.ty;
                switch (this.data.transformMode) {
                    case core.TransformMode.Normal: {
                        var rotationY = rotation + 90 + shearY;
                        var la = core.MathUtils.cosDeg(rotation + shearX) * scaleX;
                        var lb = core.MathUtils.cosDeg(rotationY) * scaleY;
                        var lc = core.MathUtils.sinDeg(rotation + shearX) * scaleX;
                        var ld = core.MathUtils.sinDeg(rotationY) * scaleY;
                        m.a = pa * la + pb * lc;
                        m.c = pa * lb + pb * ld;
                        m.b = pc * la + pd * lc;
                        m.d = pc * lb + pd * ld;
                        return;
                    }
                    case core.TransformMode.OnlyTranslation: {
                        var rotationY = rotation + 90 + shearY;
                        m.a = core.MathUtils.cosDeg(rotation + shearX) * scaleX;
                        m.c = core.MathUtils.cosDeg(rotationY) * scaleY;
                        m.b = core.MathUtils.sinDeg(rotation + shearX) * scaleX;
                        m.d = core.MathUtils.sinDeg(rotationY) * scaleY;
                        break;
                    }
                    case core.TransformMode.NoRotationOrReflection: {
                        var s = pa * pa + pc * pc;
                        var prx = 0;
                        if (s > 0.0001) {
                            s = Math.abs(pa * pd - pb * pc) / s;
                            pb = pc * s;
                            pd = pa * s;
                            prx = Math.atan2(pc, pa) * core.MathUtils.radDeg;
                        }
                        else {
                            pa = 0;
                            pc = 0;
                            prx = 90 - Math.atan2(pd, pb) * core.MathUtils.radDeg;
                        }
                        var rx = rotation + shearX - prx;
                        var ry = rotation + shearY - prx + 90;
                        var la = core.MathUtils.cosDeg(rx) * scaleX;
                        var lb = core.MathUtils.cosDeg(ry) * scaleY;
                        var lc = core.MathUtils.sinDeg(rx) * scaleX;
                        var ld = core.MathUtils.sinDeg(ry) * scaleY;
                        m.a = pa * la - pb * lc;
                        m.c = pa * lb - pb * ld;
                        m.b = pc * la + pd * lc;
                        m.d = pc * lb + pd * ld;
                        break;
                    }
                    case core.TransformMode.NoScale:
                    case core.TransformMode.NoScaleOrReflection: {
                        var cos = core.MathUtils.cosDeg(rotation);
                        var sin = core.MathUtils.sinDeg(rotation);
                        var za = pa * cos + pb * sin;
                        var zc = pc * cos + pd * sin;
                        var s = Math.sqrt(za * za + zc * zc);
                        if (s > 0.00001)
                            s = 1 / s;
                        za *= s;
                        zc *= s;
                        s = Math.sqrt(za * za + zc * zc);
                        var r = Math.PI / 2 + Math.atan2(zc, za);
                        var zb = Math.cos(r) * s;
                        var zd = Math.sin(r) * s;
                        var la = core.MathUtils.cosDeg(shearX) * scaleX;
                        var lb = core.MathUtils.cosDeg(90 + shearY) * scaleY;
                        var lc = core.MathUtils.sinDeg(shearX) * scaleX;
                        var ld = core.MathUtils.sinDeg(90 + shearY) * scaleY;
                        m.a = za * la + zb * lc;
                        m.c = za * lb + zb * ld;
                        m.b = zc * la + zd * lc;
                        m.d = zc * lb + zd * ld;
                        if (this.data.transformMode != core.TransformMode.NoScaleOrReflection ? pa * pd - pb * pc < 0 : ((this.skeleton.flipX != this.skeleton.flipY) != Bone.yDown)) {
                            m.c = -m.c;
                            m.d = -m.d;
                        }
                        return;
                    }
                }
                if (this.skeleton.flipX) {
                    m.a = -m.a;
                    m.c = -m.c;
                }
                if (this.skeleton.flipY != Bone.yDown) {
                    m.b = -m.b;
                    m.d = -m.d;
                }
            };
            Bone.prototype.setToSetupPose = function () {
                var data = this.data;
                this.x = data.x;
                this.y = data.y;
                this.rotation = data.rotation;
                this.scaleX = data.scaleX;
                this.scaleY = data.scaleY;
                this.shearX = data.shearX;
                this.shearY = data.shearY;
            };
            Bone.prototype.getWorldRotationX = function () {
                return Math.atan2(this.matrix.b, this.matrix.a) * core.MathUtils.radDeg;
            };
            Bone.prototype.getWorldRotationY = function () {
                return Math.atan2(this.matrix.d, this.matrix.c) * core.MathUtils.radDeg;
            };
            Bone.prototype.getWorldScaleX = function () {
                var m = this.matrix;
                return Math.sqrt(m.a * m.a + m.c * m.c);
            };
            Bone.prototype.getWorldScaleY = function () {
                var m = this.matrix;
                return Math.sqrt(m.b * m.b + m.d * m.d);
            };
            Bone.prototype.worldToLocalRotationX = function () {
                var parent = this.parent;
                if (parent == null)
                    return this.arotation;
                var pm = parent.matrix, m = this.matrix;
                return Math.atan2(pm.a * m.b - pm.b * m.a, pm.d * m.a - pm.c * m.b) * core.MathUtils.radDeg;
            };
            Bone.prototype.worldToLocalRotationY = function () {
                var parent = this.parent;
                if (parent == null)
                    return this.arotation;
                var pm = parent.matrix, m = this.matrix;
                return Math.atan2(pm.a * m.d - pm.b * m.c, pm.d * m.c - pm.c * m.d) * core.MathUtils.radDeg;
            };
            Bone.prototype.rotateWorld = function (degrees) {
                var m = this.matrix;
                var a = this.matrix.a, b = m.c, c = m.b, d = m.d;
                var cos = core.MathUtils.cosDeg(degrees), sin = core.MathUtils.sinDeg(degrees);
                m.a = cos * a - sin * c;
                m.c = cos * b - sin * d;
                m.b = sin * a + cos * c;
                m.d = sin * b + cos * d;
                this.appliedValid = false;
            };
            Bone.prototype.updateAppliedTransform = function () {
                this.appliedValid = true;
                var parent = this.parent;
                var m = this.matrix;
                if (parent == null) {
                    this.ax = m.tx;
                    this.ay = m.ty;
                    this.arotation = Math.atan2(m.b, m.a) * core.MathUtils.radDeg;
                    this.ascaleX = Math.sqrt(m.a * m.a + m.b * m.b);
                    this.ascaleY = Math.sqrt(m.c * m.c + m.d * m.d);
                    this.ashearX = 0;
                    this.ashearY = Math.atan2(m.a * m.c + m.b * m.d, m.a * m.d - m.b * m.c) * core.MathUtils.radDeg;
                    return;
                }
                var pm = parent.matrix;
                var pid = 1 / (pm.a * pm.d - pm.b * pm.c);
                var dx = m.tx - pm.tx, dy = m.ty - pm.ty;
                this.ax = (dx * pm.d * pid - dy * pm.c * pid);
                this.ay = (dy * pm.a * pid - dx * pm.b * pid);
                var ia = pid * pm.d;
                var id = pid * pm.a;
                var ib = pid * pm.c;
                var ic = pid * pm.b;
                var ra = ia * m.a - ib * m.b;
                var rb = ia * m.c - ib * m.d;
                var rc = id * m.b - ic * m.a;
                var rd = id * m.d - ic * m.c;
                this.ashearX = 0;
                this.ascaleX = Math.sqrt(ra * ra + rc * rc);
                if (this.ascaleX > 0.0001) {
                    var det = ra * rd - rb * rc;
                    this.ascaleY = det / this.ascaleX;
                    this.ashearY = Math.atan2(ra * rb + rc * rd, det) * core.MathUtils.radDeg;
                    this.arotation = Math.atan2(rc, ra) * core.MathUtils.radDeg;
                }
                else {
                    this.ascaleX = 0;
                    this.ascaleY = Math.sqrt(rb * rb + rd * rd);
                    this.ashearY = 0;
                    this.arotation = 90 - Math.atan2(rd, rb) * core.MathUtils.radDeg;
                }
            };
            Bone.prototype.worldToLocal = function (world) {
                var m = this.matrix;
                var a = m.a, b = m.c, c = m.b, d = m.d;
                var invDet = 1 / (a * d - b * c);
                var x = world.x - m.tx, y = world.y - m.ty;
                world.x = (x * d * invDet - y * b * invDet);
                world.y = (y * a * invDet - x * c * invDet);
                return world;
            };
            Bone.prototype.localToWorld = function (local) {
                var m = this.matrix;
                var x = local.x, y = local.y;
                local.x = x * m.a + y * m.c + m.tx;
                local.y = x * m.b + y * m.d + m.ty;
                return local;
            };
            return Bone;
        }());
        Bone.yDown = false;
        core.Bone = Bone;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var BoneData = (function () {
            function BoneData(index, name, parent) {
                this.x = 0;
                this.y = 0;
                this.rotation = 0;
                this.scaleX = 1;
                this.scaleY = 1;
                this.shearX = 0;
                this.shearY = 0;
                this.transformMode = TransformMode.Normal;
                if (index < 0)
                    throw new Error("index must be >= 0.");
                if (name == null)
                    throw new Error("name cannot be null.");
                this.index = index;
                this.name = name;
                this.parent = parent;
            }
            return BoneData;
        }());
        core.BoneData = BoneData;
        var TransformMode;
        (function (TransformMode) {
            TransformMode[TransformMode["Normal"] = 0] = "Normal";
            TransformMode[TransformMode["OnlyTranslation"] = 1] = "OnlyTranslation";
            TransformMode[TransformMode["NoRotationOrReflection"] = 2] = "NoRotationOrReflection";
            TransformMode[TransformMode["NoScale"] = 3] = "NoScale";
            TransformMode[TransformMode["NoScaleOrReflection"] = 4] = "NoScaleOrReflection";
        })(TransformMode = core.TransformMode || (core.TransformMode = {}));
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var Event = (function () {
            function Event(time, data) {
                if (data == null)
                    throw new Error("data cannot be null.");
                this.time = time;
                this.data = data;
            }
            return Event;
        }());
        core.Event = Event;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var EventData = (function () {
            function EventData(name) {
                this.name = name;
            }
            return EventData;
        }());
        core.EventData = EventData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var IkConstraint = (function () {
            function IkConstraint(data, skeleton) {
                this.mix = 1;
                this.bendDirection = 0;
                this.level = 0;
                if (data == null)
                    throw new Error("data cannot be null.");
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                this.data = data;
                this.mix = data.mix;
                this.bendDirection = data.bendDirection;
                this.bones = new Array();
                for (var i = 0; i < data.bones.length; i++)
                    this.bones.push(skeleton.findBone(data.bones[i].name));
                this.target = skeleton.findBone(data.target.name);
            }
            IkConstraint.prototype.getOrder = function () {
                return this.data.order;
            };
            IkConstraint.prototype.apply = function () {
                this.update();
            };
            IkConstraint.prototype.update = function () {
                var target = this.target;
                var bones = this.bones;
                switch (bones.length) {
                    case 1:
                        this.apply1(bones[0], target.worldX, target.worldY, this.mix);
                        break;
                    case 2:
                        this.apply2(bones[0], bones[1], target.worldX, target.worldY, this.bendDirection, this.mix);
                        break;
                }
            };
            IkConstraint.prototype.apply1 = function (bone, targetX, targetY, alpha) {
                if (!bone.appliedValid)
                    bone.updateAppliedTransform();
                var pp = bone.parent.matrix;
                var id = 1 / (pp.a * pp.d - pp.b * pp.c);
                var x = targetX - pp.tx, y = targetY - pp.ty;
                var tx = (x * pp.d - y * pp.c) * id - bone.ax, ty = (y * pp.a - x * pp.b) * id - bone.ay;
                var rotationIK = Math.atan2(ty, tx) * core.MathUtils.radDeg - bone.ashearX - bone.arotation;
                if (bone.ascaleX < 0)
                    rotationIK += 180;
                if (rotationIK > 180)
                    rotationIK -= 360;
                else if (rotationIK < -180)
                    rotationIK += 360;
                bone.updateWorldTransformWith(bone.ax, bone.ay, bone.arotation + rotationIK * alpha, bone.ascaleX, bone.ascaleY, bone.ashearX, bone.ashearY);
            };
            IkConstraint.prototype.apply2 = function (parent, child, targetX, targetY, bendDir, alpha) {
                if (alpha == 0) {
                    child.updateWorldTransform();
                    return;
                }
                if (!parent.appliedValid)
                    parent.updateAppliedTransform();
                if (!child.appliedValid)
                    child.updateAppliedTransform();
                var px = parent.ax, py = parent.ay, psx = parent.ascaleX, psy = parent.ascaleY, csx = child.ascaleX;
                var os1 = 0, os2 = 0, s2 = 0;
                if (psx < 0) {
                    psx = -psx;
                    os1 = 180;
                    s2 = -1;
                }
                else {
                    os1 = 0;
                    s2 = 1;
                }
                if (psy < 0) {
                    psy = -psy;
                    s2 = -s2;
                }
                if (csx < 0) {
                    csx = -csx;
                    os2 = 180;
                }
                else
                    os2 = 0;
                var pm = parent.matrix;
                var cx = child.ax, cy = 0, cwx = 0, cwy = 0, a = pm.a, b = pm.c, c = pm.b, d = pm.d;
                var u = Math.abs(psx - psy) <= 0.0001;
                if (!u) {
                    cy = 0;
                    cwx = a * cx + pm.tx;
                    cwy = c * cx + pm.ty;
                }
                else {
                    cy = child.ay;
                    cwx = a * cx + b * cy + pm.tx;
                    cwy = c * cx + d * cy + pm.ty;
                }
                var pp = parent.parent;
                var ppm = parent.parent.matrix;
                a = ppm.a;
                b = ppm.c;
                c = ppm.b;
                d = ppm.d;
                var id = 1 / (a * d - b * c), x = targetX - ppm.tx, y = targetY - ppm.ty;
                var tx = (x * d - y * b) * id - px, ty = (y * a - x * c) * id - py;
                x = cwx - ppm.tx;
                y = cwy - ppm.ty;
                var dx = (x * d - y * b) * id - px, dy = (y * a - x * c) * id - py;
                var l1 = Math.sqrt(dx * dx + dy * dy), l2 = child.data.length * csx, a1 = 0, a2 = 0;
                outer: if (u) {
                    l2 *= psx;
                    var cos = (tx * tx + ty * ty - l1 * l1 - l2 * l2) / (2 * l1 * l2);
                    if (cos < -1)
                        cos = -1;
                    else if (cos > 1)
                        cos = 1;
                    a2 = Math.acos(cos) * bendDir;
                    a = l1 + l2 * cos;
                    b = l2 * Math.sin(a2);
                    a1 = Math.atan2(ty * a - tx * b, tx * a + ty * b);
                }
                else {
                    a = psx * l2;
                    b = psy * l2;
                    var aa = a * a, bb = b * b, dd = tx * tx + ty * ty, ta = Math.atan2(ty, tx);
                    c = bb * l1 * l1 + aa * dd - aa * bb;
                    var c1 = -2 * bb * l1, c2 = bb - aa;
                    d = c1 * c1 - 4 * c2 * c;
                    if (d >= 0) {
                        var q = Math.sqrt(d);
                        if (c1 < 0)
                            q = -q;
                        q = -(c1 + q) / 2;
                        var r0 = q / c2, r1 = c / q;
                        var r = Math.abs(r0) < Math.abs(r1) ? r0 : r1;
                        if (r * r <= dd) {
                            y = Math.sqrt(dd - r * r) * bendDir;
                            a1 = ta - Math.atan2(y, r);
                            a2 = Math.atan2(y / psy, (r - l1) / psx);
                            break outer;
                        }
                    }
                    var minAngle = 0, minDist = Number.MAX_VALUE, minX = 0, minY = 0;
                    var maxAngle = 0, maxDist = 0, maxX = 0, maxY = 0;
                    x = l1 + a;
                    d = x * x;
                    if (d > maxDist) {
                        maxAngle = 0;
                        maxDist = d;
                        maxX = x;
                    }
                    x = l1 - a;
                    d = x * x;
                    if (d < minDist) {
                        minAngle = core.MathUtils.PI;
                        minDist = d;
                        minX = x;
                    }
                    var angle = Math.acos(-a * l1 / (aa - bb));
                    x = a * Math.cos(angle) + l1;
                    y = b * Math.sin(angle);
                    d = x * x + y * y;
                    if (d < minDist) {
                        minAngle = angle;
                        minDist = d;
                        minX = x;
                        minY = y;
                    }
                    if (d > maxDist) {
                        maxAngle = angle;
                        maxDist = d;
                        maxX = x;
                        maxY = y;
                    }
                    if (dd <= (minDist + maxDist) / 2) {
                        a1 = ta - Math.atan2(minY * bendDir, minX);
                        a2 = minAngle * bendDir;
                    }
                    else {
                        a1 = ta - Math.atan2(maxY * bendDir, maxX);
                        a2 = maxAngle * bendDir;
                    }
                }
                var os = Math.atan2(cy, cx) * s2;
                var rotation = parent.arotation;
                a1 = (a1 - os) * core.MathUtils.radDeg + os1 - rotation;
                if (a1 > 180)
                    a1 -= 360;
                else if (a1 < -180)
                    a1 += 360;
                parent.updateWorldTransformWith(px, py, rotation + a1 * alpha, parent.ascaleX, parent.ascaleY, 0, 0);
                rotation = child.arotation;
                a2 = ((a2 + os) * core.MathUtils.radDeg - child.ashearX) * s2 + os2 - rotation;
                if (a2 > 180)
                    a2 -= 360;
                else if (a2 < -180)
                    a2 += 360;
                child.updateWorldTransformWith(cx, cy, rotation + a2 * alpha, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
            };
            return IkConstraint;
        }());
        core.IkConstraint = IkConstraint;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var IkConstraintData = (function () {
            function IkConstraintData(name) {
                this.order = 0;
                this.bones = new Array();
                this.bendDirection = 1;
                this.mix = 1;
                this.name = name;
            }
            return IkConstraintData;
        }());
        core.IkConstraintData = IkConstraintData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var PathConstraint = (function () {
            function PathConstraint(data, skeleton) {
                this.position = 0;
                this.spacing = 0;
                this.rotateMix = 0;
                this.translateMix = 0;
                this.spaces = new Array();
                this.positions = new Array();
                this.world = new Array();
                this.curves = new Array();
                this.lengths = new Array();
                this.segments = new Array();
                if (data == null)
                    throw new Error("data cannot be null.");
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                this.data = data;
                this.bones = new Array();
                for (var i = 0, n = data.bones.length; i < n; i++)
                    this.bones.push(skeleton.findBone(data.bones[i].name));
                this.target = skeleton.findSlot(data.target.name);
                this.position = data.position;
                this.spacing = data.spacing;
                this.rotateMix = data.rotateMix;
                this.translateMix = data.translateMix;
            }
            PathConstraint.prototype.apply = function () {
                this.update();
            };
            PathConstraint.prototype.update = function () {
                var attachment = this.target.getAttachment();
                if (!(attachment instanceof core.PathAttachment))
                    return;
                var rotateMix = this.rotateMix, translateMix = this.translateMix;
                var translate = translateMix > 0, rotate = rotateMix > 0;
                if (!translate && !rotate)
                    return;
                var data = this.data;
                var spacingMode = data.spacingMode;
                var lengthSpacing = spacingMode == core.SpacingMode.Length;
                var rotateMode = data.rotateMode;
                var tangents = rotateMode == core.RotateMode.Tangent, scale = rotateMode == core.RotateMode.ChainScale;
                var boneCount = this.bones.length, spacesCount = tangents ? boneCount : boneCount + 1;
                var bones = this.bones;
                var spaces = core.Utils.setArraySize(this.spaces, spacesCount), lengths = null;
                var spacing = this.spacing;
                if (scale || lengthSpacing) {
                    if (scale)
                        lengths = core.Utils.setArraySize(this.lengths, boneCount);
                    for (var i = 0, n = spacesCount - 1; i < n;) {
                        var bone = bones[i];
                        var m = bone.matrix;
                        var length_1 = bone.data.length, x = length_1 * m.a, y = length_1 * m.b;
                        length_1 = Math.sqrt(x * x + y * y);
                        if (scale)
                            lengths[i] = length_1;
                        spaces[++i] = lengthSpacing ? Math.max(0, length_1 + spacing) : spacing;
                    }
                }
                else {
                    for (var i = 1; i < spacesCount; i++)
                        spaces[i] = spacing;
                }
                var positions = this.computeWorldPositions(attachment, spacesCount, tangents, data.positionMode == core.PositionMode.Percent, spacingMode == core.SpacingMode.Percent);
                var boneX = positions[0], boneY = positions[1], offsetRotation = data.offsetRotation;
                var tip = false;
                if (offsetRotation == 0)
                    tip = rotateMode == core.RotateMode.Chain;
                else {
                    tip = false;
                    var pm = this.target.bone.matrix;
                    offsetRotation *= pm.a * pm.d - pm.b * pm.c > 0 ? core.MathUtils.degRad : -core.MathUtils.degRad;
                }
                for (var i = 0, p = 3; i < boneCount; i++, p += 3) {
                    var bone = bones[i];
                    var m = bone.matrix;
                    m.tx += (boneX - m.tx) * translateMix;
                    m.ty += (boneY - m.ty) * translateMix;
                    var x = positions[p], y = positions[p + 1], dx = x - boneX, dy = y - boneY;
                    if (scale) {
                        var length_2 = lengths[i];
                        if (length_2 != 0) {
                            var s = (Math.sqrt(dx * dx + dy * dy) / length_2 - 1) * rotateMix + 1;
                            m.a *= s;
                            m.b *= s;
                        }
                    }
                    boneX = x;
                    boneY = y;
                    if (rotate) {
                        var a = m.a, b = m.c, c = m.b, d = m.d, r = 0, cos = 0, sin = 0;
                        if (tangents)
                            r = positions[p - 1];
                        else if (spaces[i + 1] == 0)
                            r = positions[p + 2];
                        else
                            r = Math.atan2(dy, dx);
                        r -= Math.atan2(c, a);
                        if (tip) {
                            cos = Math.cos(r);
                            sin = Math.sin(r);
                            var length_3 = bone.data.length;
                            boneX += (length_3 * (cos * a - sin * c) - dx) * rotateMix;
                            boneY += (length_3 * (sin * a + cos * c) - dy) * rotateMix;
                        }
                        else {
                            r += offsetRotation;
                        }
                        if (r > core.MathUtils.PI)
                            r -= core.MathUtils.PI2;
                        else if (r < -core.MathUtils.PI)
                            r += core.MathUtils.PI2;
                        r *= rotateMix;
                        cos = Math.cos(r);
                        sin = Math.sin(r);
                        m.a = cos * a - sin * c;
                        m.c = cos * b - sin * d;
                        m.b = sin * a + cos * c;
                        m.d = sin * b + cos * d;
                    }
                    bone.appliedValid = false;
                }
            };
            PathConstraint.prototype.computeWorldPositions = function (path, spacesCount, tangents, percentPosition, percentSpacing) {
                var target = this.target;
                var position = this.position;
                var spaces = this.spaces, out = core.Utils.setArraySize(this.positions, spacesCount * 3 + 2), world = null;
                var closed = path.closed;
                var verticesLength = path.worldVerticesLength, curveCount = verticesLength / 6, prevCurve = PathConstraint.NONE;
                if (!path.constantSpeed) {
                    var lengths = path.lengths;
                    curveCount -= closed ? 1 : 2;
                    var pathLength_1 = lengths[curveCount];
                    if (percentPosition)
                        position *= pathLength_1;
                    if (percentSpacing) {
                        for (var i = 0; i < spacesCount; i++)
                            spaces[i] *= pathLength_1;
                    }
                    world = core.Utils.setArraySize(this.world, 8);
                    for (var i = 0, o = 0, curve = 0; i < spacesCount; i++, o += 3) {
                        var space = spaces[i];
                        position += space;
                        var p = position;
                        if (closed) {
                            p %= pathLength_1;
                            if (p < 0)
                                p += pathLength_1;
                            curve = 0;
                        }
                        else if (p < 0) {
                            if (prevCurve != PathConstraint.BEFORE) {
                                prevCurve = PathConstraint.BEFORE;
                                path.computeWorldVerticesWith(target, 2, 4, world, 0);
                            }
                            this.addBeforePosition(p, world, 0, out, o);
                            continue;
                        }
                        else if (p > pathLength_1) {
                            if (prevCurve != PathConstraint.AFTER) {
                                prevCurve = PathConstraint.AFTER;
                                path.computeWorldVerticesWith(target, verticesLength - 6, 4, world, 0);
                            }
                            this.addAfterPosition(p - pathLength_1, world, 0, out, o);
                            continue;
                        }
                        for (;; curve++) {
                            var length_4 = lengths[curve];
                            if (p > length_4)
                                continue;
                            if (curve == 0)
                                p /= length_4;
                            else {
                                var prev = lengths[curve - 1];
                                p = (p - prev) / (length_4 - prev);
                            }
                            break;
                        }
                        if (curve != prevCurve) {
                            prevCurve = curve;
                            if (closed && curve == curveCount) {
                                path.computeWorldVerticesWith(target, verticesLength - 4, 4, world, 0);
                                path.computeWorldVerticesWith(target, 0, 4, world, 4);
                            }
                            else
                                path.computeWorldVerticesWith(target, curve * 6 + 2, 8, world, 0);
                        }
                        this.addCurvePosition(p, world[0], world[1], world[2], world[3], world[4], world[5], world[6], world[7], out, o, tangents || (i > 0 && space == 0));
                    }
                    return out;
                }
                if (closed) {
                    verticesLength += 2;
                    world = core.Utils.setArraySize(this.world, verticesLength);
                    path.computeWorldVerticesWith(target, 2, verticesLength - 4, world, 0);
                    path.computeWorldVerticesWith(target, 0, 2, world, verticesLength - 4);
                    world[verticesLength - 2] = world[0];
                    world[verticesLength - 1] = world[1];
                }
                else {
                    curveCount--;
                    verticesLength -= 4;
                    world = core.Utils.setArraySize(this.world, verticesLength);
                    path.computeWorldVerticesWith(target, 2, verticesLength, world, 0);
                }
                var curves = core.Utils.setArraySize(this.curves, curveCount);
                var pathLength = 0;
                var x1 = world[0], y1 = world[1], cx1 = 0, cy1 = 0, cx2 = 0, cy2 = 0, x2 = 0, y2 = 0;
                var tmpx = 0, tmpy = 0, dddfx = 0, dddfy = 0, ddfx = 0, ddfy = 0, dfx = 0, dfy = 0;
                for (var i = 0, w = 2; i < curveCount; i++, w += 6) {
                    cx1 = world[w];
                    cy1 = world[w + 1];
                    cx2 = world[w + 2];
                    cy2 = world[w + 3];
                    x2 = world[w + 4];
                    y2 = world[w + 5];
                    tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
                    tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
                    dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
                    dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
                    ddfx = tmpx * 2 + dddfx;
                    ddfy = tmpy * 2 + dddfy;
                    dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
                    dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
                    pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
                    dfx += ddfx;
                    dfy += ddfy;
                    ddfx += dddfx;
                    ddfy += dddfy;
                    pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
                    dfx += ddfx;
                    dfy += ddfy;
                    pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
                    dfx += ddfx + dddfx;
                    dfy += ddfy + dddfy;
                    pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
                    curves[i] = pathLength;
                    x1 = x2;
                    y1 = y2;
                }
                if (percentPosition)
                    position *= pathLength;
                if (percentSpacing) {
                    for (var i = 0; i < spacesCount; i++)
                        spaces[i] *= pathLength;
                }
                var segments = this.segments;
                var curveLength = 0;
                for (var i = 0, o = 0, curve = 0, segment = 0; i < spacesCount; i++, o += 3) {
                    var space = spaces[i];
                    position += space;
                    var p = position;
                    if (closed) {
                        p %= pathLength;
                        if (p < 0)
                            p += pathLength;
                        curve = 0;
                    }
                    else if (p < 0) {
                        this.addBeforePosition(p, world, 0, out, o);
                        continue;
                    }
                    else if (p > pathLength) {
                        this.addAfterPosition(p - pathLength, world, verticesLength - 4, out, o);
                        continue;
                    }
                    for (;; curve++) {
                        var length_5 = curves[curve];
                        if (p > length_5)
                            continue;
                        if (curve == 0)
                            p /= length_5;
                        else {
                            var prev = curves[curve - 1];
                            p = (p - prev) / (length_5 - prev);
                        }
                        break;
                    }
                    if (curve != prevCurve) {
                        prevCurve = curve;
                        var ii = curve * 6;
                        x1 = world[ii];
                        y1 = world[ii + 1];
                        cx1 = world[ii + 2];
                        cy1 = world[ii + 3];
                        cx2 = world[ii + 4];
                        cy2 = world[ii + 5];
                        x2 = world[ii + 6];
                        y2 = world[ii + 7];
                        tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
                        tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
                        dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.006;
                        dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.006;
                        ddfx = tmpx * 2 + dddfx;
                        ddfy = tmpy * 2 + dddfy;
                        dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
                        dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
                        curveLength = Math.sqrt(dfx * dfx + dfy * dfy);
                        segments[0] = curveLength;
                        for (ii = 1; ii < 8; ii++) {
                            dfx += ddfx;
                            dfy += ddfy;
                            ddfx += dddfx;
                            ddfy += dddfy;
                            curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                            segments[ii] = curveLength;
                        }
                        dfx += ddfx;
                        dfy += ddfy;
                        curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                        segments[8] = curveLength;
                        dfx += ddfx + dddfx;
                        dfy += ddfy + dddfy;
                        curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                        segments[9] = curveLength;
                        segment = 0;
                    }
                    p *= curveLength;
                    for (;; segment++) {
                        var length_6 = segments[segment];
                        if (p > length_6)
                            continue;
                        if (segment == 0)
                            p /= length_6;
                        else {
                            var prev = segments[segment - 1];
                            p = segment + (p - prev) / (length_6 - prev);
                        }
                        break;
                    }
                    this.addCurvePosition(p * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents || (i > 0 && space == 0));
                }
                return out;
            };
            PathConstraint.prototype.addBeforePosition = function (p, temp, i, out, o) {
                var x1 = temp[i], y1 = temp[i + 1], dx = temp[i + 2] - x1, dy = temp[i + 3] - y1, r = Math.atan2(dy, dx);
                out[o] = x1 + p * Math.cos(r);
                out[o + 1] = y1 + p * Math.sin(r);
                out[o + 2] = r;
            };
            PathConstraint.prototype.addAfterPosition = function (p, temp, i, out, o) {
                var x1 = temp[i + 2], y1 = temp[i + 3], dx = x1 - temp[i], dy = y1 - temp[i + 1], r = Math.atan2(dy, dx);
                out[o] = x1 + p * Math.cos(r);
                out[o + 1] = y1 + p * Math.sin(r);
                out[o + 2] = r;
            };
            PathConstraint.prototype.addCurvePosition = function (p, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents) {
                if (p == 0 || isNaN(p))
                    p = 0.0001;
                var tt = p * p, ttt = tt * p, u = 1 - p, uu = u * u, uuu = uu * u;
                var ut = u * p, ut3 = ut * 3, uut3 = u * ut3, utt3 = ut3 * p;
                var x = x1 * uuu + cx1 * uut3 + cx2 * utt3 + x2 * ttt, y = y1 * uuu + cy1 * uut3 + cy2 * utt3 + y2 * ttt;
                out[o] = x;
                out[o + 1] = y;
                if (tangents)
                    out[o + 2] = Math.atan2(y - (y1 * uu + cy1 * ut * 2 + cy2 * tt), x - (x1 * uu + cx1 * ut * 2 + cx2 * tt));
            };
            PathConstraint.prototype.getOrder = function () {
                return this.data.order;
            };
            return PathConstraint;
        }());
        PathConstraint.NONE = -1;
        PathConstraint.BEFORE = -2;
        PathConstraint.AFTER = -3;
        core.PathConstraint = PathConstraint;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var PathConstraintData = (function () {
            function PathConstraintData(name) {
                this.order = 0;
                this.bones = new Array();
                this.name = name;
            }
            return PathConstraintData;
        }());
        core.PathConstraintData = PathConstraintData;
        var PositionMode;
        (function (PositionMode) {
            PositionMode[PositionMode["Fixed"] = 0] = "Fixed";
            PositionMode[PositionMode["Percent"] = 1] = "Percent";
        })(PositionMode = core.PositionMode || (core.PositionMode = {}));
        var SpacingMode;
        (function (SpacingMode) {
            SpacingMode[SpacingMode["Length"] = 0] = "Length";
            SpacingMode[SpacingMode["Fixed"] = 1] = "Fixed";
            SpacingMode[SpacingMode["Percent"] = 2] = "Percent";
        })(SpacingMode = core.SpacingMode || (core.SpacingMode = {}));
        var RotateMode;
        (function (RotateMode) {
            RotateMode[RotateMode["Tangent"] = 0] = "Tangent";
            RotateMode[RotateMode["Chain"] = 1] = "Chain";
            RotateMode[RotateMode["ChainScale"] = 2] = "ChainScale";
        })(RotateMode = core.RotateMode || (core.RotateMode = {}));
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var Skeleton = (function () {
            function Skeleton(data) {
                this._updateCache = new Array();
                this.updateCacheReset = new Array();
                this.time = 0;
                this.flipX = false;
                this.flipY = false;
                this.x = 0;
                this.y = 0;
                if (data == null)
                    throw new Error("data cannot be null.");
                this.data = data;
                this.bones = new Array();
                for (var i = 0; i < data.bones.length; i++) {
                    var boneData = data.bones[i];
                    var bone = void 0;
                    if (boneData.parent == null)
                        bone = new core.Bone(boneData, this, null);
                    else {
                        var parent_1 = this.bones[boneData.parent.index];
                        bone = new core.Bone(boneData, this, parent_1);
                        parent_1.children.push(bone);
                    }
                    this.bones.push(bone);
                }
                this.slots = new Array();
                this.drawOrder = new Array();
                for (var i = 0; i < data.slots.length; i++) {
                    var slotData = data.slots[i];
                    var bone = this.bones[slotData.boneData.index];
                    var slot = new core.Slot(slotData, bone);
                    this.slots.push(slot);
                    this.drawOrder.push(slot);
                }
                this.ikConstraints = new Array();
                for (var i = 0; i < data.ikConstraints.length; i++) {
                    var ikConstraintData = data.ikConstraints[i];
                    this.ikConstraints.push(new core.IkConstraint(ikConstraintData, this));
                }
                this.transformConstraints = new Array();
                for (var i = 0; i < data.transformConstraints.length; i++) {
                    var transformConstraintData = data.transformConstraints[i];
                    this.transformConstraints.push(new core.TransformConstraint(transformConstraintData, this));
                }
                this.pathConstraints = new Array();
                for (var i = 0; i < data.pathConstraints.length; i++) {
                    var pathConstraintData = data.pathConstraints[i];
                    this.pathConstraints.push(new core.PathConstraint(pathConstraintData, this));
                }
                this.color = new core.Color(1, 1, 1, 1);
                this.updateCache();
            }
            Skeleton.prototype.updateCache = function () {
                var updateCache = this._updateCache;
                updateCache.length = 0;
                this.updateCacheReset.length = 0;
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++)
                    bones[i].sorted = false;
                var ikConstraints = this.ikConstraints;
                var transformConstraints = this.transformConstraints;
                var pathConstraints = this.pathConstraints;
                var ikCount = ikConstraints.length, transformCount = transformConstraints.length, pathCount = pathConstraints.length;
                var constraintCount = ikCount + transformCount + pathCount;
                outer: for (var i = 0; i < constraintCount; i++) {
                    for (var ii = 0; ii < ikCount; ii++) {
                        var constraint = ikConstraints[ii];
                        if (constraint.data.order == i) {
                            this.sortIkConstraint(constraint);
                            continue outer;
                        }
                    }
                    for (var ii = 0; ii < transformCount; ii++) {
                        var constraint = transformConstraints[ii];
                        if (constraint.data.order == i) {
                            this.sortTransformConstraint(constraint);
                            continue outer;
                        }
                    }
                    for (var ii = 0; ii < pathCount; ii++) {
                        var constraint = pathConstraints[ii];
                        if (constraint.data.order == i) {
                            this.sortPathConstraint(constraint);
                            continue outer;
                        }
                    }
                }
                for (var i = 0, n = bones.length; i < n; i++)
                    this.sortBone(bones[i]);
            };
            Skeleton.prototype.sortIkConstraint = function (constraint) {
                var target = constraint.target;
                this.sortBone(target);
                var constrained = constraint.bones;
                var parent = constrained[0];
                this.sortBone(parent);
                if (constrained.length > 1) {
                    var child = constrained[constrained.length - 1];
                    if (!(this._updateCache.indexOf(child) > -1))
                        this.updateCacheReset.push(child);
                }
                this._updateCache.push(constraint);
                this.sortReset(parent.children);
                constrained[constrained.length - 1].sorted = true;
            };
            Skeleton.prototype.sortPathConstraint = function (constraint) {
                var slot = constraint.target;
                var slotIndex = slot.data.index;
                var slotBone = slot.bone;
                if (this.skin != null)
                    this.sortPathConstraintAttachment(this.skin, slotIndex, slotBone);
                if (this.data.defaultSkin != null && this.data.defaultSkin != this.skin)
                    this.sortPathConstraintAttachment(this.data.defaultSkin, slotIndex, slotBone);
                for (var ii = 0, nn = this.data.skins.length; ii < nn; ii++)
                    this.sortPathConstraintAttachment(this.data.skins[ii], slotIndex, slotBone);
                var attachment = slot.getAttachment();
                if (attachment instanceof core.PathAttachment)
                    this.sortPathConstraintAttachmentWith(attachment, slotBone);
                var constrained = constraint.bones;
                var boneCount = constrained.length;
                for (var ii = 0; ii < boneCount; ii++)
                    this.sortBone(constrained[ii]);
                this._updateCache.push(constraint);
                for (var ii = 0; ii < boneCount; ii++)
                    this.sortReset(constrained[ii].children);
                for (var ii = 0; ii < boneCount; ii++)
                    constrained[ii].sorted = true;
            };
            Skeleton.prototype.sortTransformConstraint = function (constraint) {
                this.sortBone(constraint.target);
                var constrained = constraint.bones;
                var boneCount = constrained.length;
                for (var ii = 0; ii < boneCount; ii++)
                    this.sortBone(constrained[ii]);
                this._updateCache.push(constraint);
                for (var ii = 0; ii < boneCount; ii++)
                    this.sortReset(constrained[ii].children);
                for (var ii = 0; ii < boneCount; ii++)
                    constrained[ii].sorted = true;
            };
            Skeleton.prototype.sortPathConstraintAttachment = function (skin, slotIndex, slotBone) {
                var attachments = skin.attachments[slotIndex];
                if (!attachments)
                    return;
                for (var key in attachments) {
                    this.sortPathConstraintAttachmentWith(attachments[key], slotBone);
                }
            };
            Skeleton.prototype.sortPathConstraintAttachmentWith = function (attachment, slotBone) {
                if (!(attachment instanceof core.PathAttachment))
                    return;
                var pathBones = attachment.bones;
                if (pathBones == null)
                    this.sortBone(slotBone);
                else {
                    var bones = this.bones;
                    var i = 0;
                    while (i < pathBones.length) {
                        var boneCount = pathBones[i++];
                        for (var n = i + boneCount; i < n; i++) {
                            var boneIndex = pathBones[i];
                            this.sortBone(bones[boneIndex]);
                        }
                    }
                }
            };
            Skeleton.prototype.sortBone = function (bone) {
                if (bone.sorted)
                    return;
                var parent = bone.parent;
                if (parent != null)
                    this.sortBone(parent);
                bone.sorted = true;
                this._updateCache.push(bone);
            };
            Skeleton.prototype.sortReset = function (bones) {
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    if (bone.sorted)
                        this.sortReset(bone.children);
                    bone.sorted = false;
                }
            };
            Skeleton.prototype.updateWorldTransform = function () {
                var updateCacheReset = this.updateCacheReset;
                for (var i = 0, n = updateCacheReset.length; i < n; i++) {
                    var bone = updateCacheReset[i];
                    bone.ax = bone.x;
                    bone.ay = bone.y;
                    bone.arotation = bone.rotation;
                    bone.ascaleX = bone.scaleX;
                    bone.ascaleY = bone.scaleY;
                    bone.ashearX = bone.shearX;
                    bone.ashearY = bone.shearY;
                    bone.appliedValid = true;
                }
                var updateCache = this._updateCache;
                for (var i = 0, n = updateCache.length; i < n; i++)
                    updateCache[i].update();
            };
            Skeleton.prototype.setToSetupPose = function () {
                this.setBonesToSetupPose();
                this.setSlotsToSetupPose();
            };
            Skeleton.prototype.setBonesToSetupPose = function () {
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++)
                    bones[i].setToSetupPose();
                var ikConstraints = this.ikConstraints;
                for (var i = 0, n = ikConstraints.length; i < n; i++) {
                    var constraint = ikConstraints[i];
                    constraint.bendDirection = constraint.data.bendDirection;
                    constraint.mix = constraint.data.mix;
                }
                var transformConstraints = this.transformConstraints;
                for (var i = 0, n = transformConstraints.length; i < n; i++) {
                    var constraint = transformConstraints[i];
                    var data = constraint.data;
                    constraint.rotateMix = data.rotateMix;
                    constraint.translateMix = data.translateMix;
                    constraint.scaleMix = data.scaleMix;
                    constraint.shearMix = data.shearMix;
                }
                var pathConstraints = this.pathConstraints;
                for (var i = 0, n = pathConstraints.length; i < n; i++) {
                    var constraint = pathConstraints[i];
                    var data = constraint.data;
                    constraint.position = data.position;
                    constraint.spacing = data.spacing;
                    constraint.rotateMix = data.rotateMix;
                    constraint.translateMix = data.translateMix;
                }
            };
            Skeleton.prototype.setSlotsToSetupPose = function () {
                var slots = this.slots;
                core.Utils.arrayCopy(slots, 0, this.drawOrder, 0, slots.length);
                for (var i = 0, n = slots.length; i < n; i++)
                    slots[i].setToSetupPose();
            };
            Skeleton.prototype.getRootBone = function () {
                if (this.bones.length == 0)
                    return null;
                return this.bones[0];
            };
            Skeleton.prototype.findBone = function (boneName) {
                if (boneName == null)
                    throw new Error("boneName cannot be null.");
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    if (bone.data.name == boneName)
                        return bone;
                }
                return null;
            };
            Skeleton.prototype.findBoneIndex = function (boneName) {
                if (boneName == null)
                    throw new Error("boneName cannot be null.");
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++)
                    if (bones[i].data.name == boneName)
                        return i;
                return -1;
            };
            Skeleton.prototype.findSlot = function (slotName) {
                if (slotName == null)
                    throw new Error("slotName cannot be null.");
                var slots = this.slots;
                for (var i = 0, n = slots.length; i < n; i++) {
                    var slot = slots[i];
                    if (slot.data.name == slotName)
                        return slot;
                }
                return null;
            };
            Skeleton.prototype.findSlotIndex = function (slotName) {
                if (slotName == null)
                    throw new Error("slotName cannot be null.");
                var slots = this.slots;
                for (var i = 0, n = slots.length; i < n; i++)
                    if (slots[i].data.name == slotName)
                        return i;
                return -1;
            };
            Skeleton.prototype.setSkinByName = function (skinName) {
                var skin = this.data.findSkin(skinName);
                if (skin == null)
                    throw new Error("Skin not found: " + skinName);
                this.setSkin(skin);
            };
            Skeleton.prototype.setSkin = function (newSkin) {
                if (newSkin != null) {
                    if (this.skin != null)
                        newSkin.attachAll(this, this.skin);
                    else {
                        var slots = this.slots;
                        for (var i = 0, n = slots.length; i < n; i++) {
                            var slot = slots[i];
                            var name_1 = slot.data.attachmentName;
                            if (name_1 != null) {
                                var attachment = newSkin.getAttachment(i, name_1);
                                if (attachment != null)
                                    slot.setAttachment(attachment);
                            }
                        }
                    }
                }
                this.skin = newSkin;
            };
            Skeleton.prototype.getAttachmentByName = function (slotName, attachmentName) {
                return this.getAttachment(this.data.findSlotIndex(slotName), attachmentName);
            };
            Skeleton.prototype.getAttachment = function (slotIndex, attachmentName) {
                if (attachmentName == null)
                    throw new Error("attachmentName cannot be null.");
                if (this.skin != null) {
                    var attachment = this.skin.getAttachment(slotIndex, attachmentName);
                    if (attachment != null)
                        return attachment;
                }
                if (this.data.defaultSkin != null)
                    return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
                return null;
            };
            Skeleton.prototype.setAttachment = function (slotName, attachmentName) {
                if (slotName == null)
                    throw new Error("slotName cannot be null.");
                var slots = this.slots;
                for (var i = 0, n = slots.length; i < n; i++) {
                    var slot = slots[i];
                    if (slot.data.name == slotName) {
                        var attachment = null;
                        if (attachmentName != null) {
                            attachment = this.getAttachment(i, attachmentName);
                            if (attachment == null)
                                throw new Error("Attachment not found: " + attachmentName + ", for slot: " + slotName);
                        }
                        slot.setAttachment(attachment);
                        return;
                    }
                }
                throw new Error("Slot not found: " + slotName);
            };
            Skeleton.prototype.findIkConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var ikConstraints = this.ikConstraints;
                for (var i = 0, n = ikConstraints.length; i < n; i++) {
                    var ikConstraint = ikConstraints[i];
                    if (ikConstraint.data.name == constraintName)
                        return ikConstraint;
                }
                return null;
            };
            Skeleton.prototype.findTransformConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var transformConstraints = this.transformConstraints;
                for (var i = 0, n = transformConstraints.length; i < n; i++) {
                    var constraint = transformConstraints[i];
                    if (constraint.data.name == constraintName)
                        return constraint;
                }
                return null;
            };
            Skeleton.prototype.findPathConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var pathConstraints = this.pathConstraints;
                for (var i = 0, n = pathConstraints.length; i < n; i++) {
                    var constraint = pathConstraints[i];
                    if (constraint.data.name == constraintName)
                        return constraint;
                }
                return null;
            };
            Skeleton.prototype.getBounds = function (offset, size) {
                if (offset == null)
                    throw new Error("offset cannot be null.");
                if (size == null)
                    throw new Error("size cannot be null.");
                var drawOrder = this.drawOrder;
                var minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
                for (var i = 0, n = drawOrder.length; i < n; i++) {
                    var slot = drawOrder[i];
                    var vertices = null;
                    var attachment = slot.getAttachment();
                    if (attachment instanceof core.RegionAttachment)
                        vertices = attachment.updateWorldVertices(slot, false);
                    else if (attachment instanceof core.MeshAttachment)
                        vertices = attachment.updateWorldVertices(slot, true);
                    if (vertices != null) {
                        for (var ii = 0, nn = vertices.length; ii < nn; ii += 8) {
                            var x = vertices[ii], y = vertices[ii + 1];
                            minX = Math.min(minX, x);
                            minY = Math.min(minY, y);
                            maxX = Math.max(maxX, x);
                            maxY = Math.max(maxY, y);
                        }
                    }
                }
                offset.set(minX, minY);
                size.set(maxX - minX, maxY - minY);
            };
            Skeleton.prototype.update = function (delta) {
                this.time += delta;
            };
            return Skeleton;
        }());
        core.Skeleton = Skeleton;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var SkeletonBounds = (function () {
            function SkeletonBounds() {
                this.minX = 0;
                this.minY = 0;
                this.maxX = 0;
                this.maxY = 0;
                this.boundingBoxes = new Array();
                this.polygons = new Array();
                this.polygonPool = new core.Pool(function () {
                    return core.Utils.newFloatArray(16);
                });
            }
            SkeletonBounds.prototype.update = function (skeleton, updateAabb) {
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                var boundingBoxes = this.boundingBoxes;
                var polygons = this.polygons;
                var polygonPool = this.polygonPool;
                var slots = skeleton.slots;
                var slotCount = slots.length;
                boundingBoxes.length = 0;
                polygonPool.freeAll(polygons);
                polygons.length = 0;
                for (var i = 0; i < slotCount; i++) {
                    var slot = slots[i];
                    var attachment = slot.getAttachment();
                    if (attachment instanceof core.BoundingBoxAttachment) {
                        var boundingBox = attachment;
                        boundingBoxes.push(boundingBox);
                        var polygon = polygonPool.obtain();
                        if (polygon.length != boundingBox.worldVerticesLength) {
                            polygon = core.Utils.newFloatArray(boundingBox.worldVerticesLength);
                        }
                        polygons.push(polygon);
                        boundingBox.computeWorldVertices(slot, polygon);
                    }
                }
                if (updateAabb)
                    this.aabbCompute();
            };
            SkeletonBounds.prototype.aabbCompute = function () {
                var minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
                var polygons = this.polygons;
                for (var i = 0, n = polygons.length; i < n; i++) {
                    var polygon = polygons[i];
                    var vertices = polygon;
                    for (var ii = 0, nn = polygon.length; ii < nn; ii += 2) {
                        var x = vertices[ii];
                        var y = vertices[ii + 1];
                        minX = Math.min(minX, x);
                        minY = Math.min(minY, y);
                        maxX = Math.max(maxX, x);
                        maxY = Math.max(maxY, y);
                    }
                }
                this.minX = minX;
                this.minY = minY;
                this.maxX = maxX;
                this.maxY = maxY;
            };
            SkeletonBounds.prototype.aabbContainsPoint = function (x, y) {
                return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
            };
            SkeletonBounds.prototype.aabbIntersectsSegment = function (x1, y1, x2, y2) {
                var minX = this.minX;
                var minY = this.minY;
                var maxX = this.maxX;
                var maxY = this.maxY;
                if ((x1 <= minX && x2 <= minX) || (y1 <= minY && y2 <= minY) || (x1 >= maxX && x2 >= maxX) || (y1 >= maxY && y2 >= maxY))
                    return false;
                var m = (y2 - y1) / (x2 - x1);
                var y = m * (minX - x1) + y1;
                if (y > minY && y < maxY)
                    return true;
                y = m * (maxX - x1) + y1;
                if (y > minY && y < maxY)
                    return true;
                var x = (minY - y1) / m + x1;
                if (x > minX && x < maxX)
                    return true;
                x = (maxY - y1) / m + x1;
                if (x > minX && x < maxX)
                    return true;
                return false;
            };
            SkeletonBounds.prototype.aabbIntersectsSkeleton = function (bounds) {
                return this.minX < bounds.maxX && this.maxX > bounds.minX && this.minY < bounds.maxY && this.maxY > bounds.minY;
            };
            SkeletonBounds.prototype.containsPoint = function (x, y) {
                var polygons = this.polygons;
                for (var i = 0, n = polygons.length; i < n; i++)
                    if (this.containsPointPolygon(polygons[i], x, y))
                        return this.boundingBoxes[i];
                return null;
            };
            SkeletonBounds.prototype.containsPointPolygon = function (polygon, x, y) {
                var vertices = polygon;
                var nn = polygon.length;
                var prevIndex = nn - 2;
                var inside = false;
                for (var ii = 0; ii < nn; ii += 2) {
                    var vertexY = vertices[ii + 1];
                    var prevY = vertices[prevIndex + 1];
                    if ((vertexY < y && prevY >= y) || (prevY < y && vertexY >= y)) {
                        var vertexX = vertices[ii];
                        if (vertexX + (y - vertexY) / (prevY - vertexY) * (vertices[prevIndex] - vertexX) < x)
                            inside = !inside;
                    }
                    prevIndex = ii;
                }
                return inside;
            };
            SkeletonBounds.prototype.intersectsSegment = function (x1, y1, x2, y2) {
                var polygons = this.polygons;
                for (var i = 0, n = polygons.length; i < n; i++)
                    if (this.intersectsSegmentPolygon(polygons[i], x1, y1, x2, y2))
                        return this.boundingBoxes[i];
                return null;
            };
            SkeletonBounds.prototype.intersectsSegmentPolygon = function (polygon, x1, y1, x2, y2) {
                var vertices = polygon;
                var nn = polygon.length;
                var width12 = x1 - x2, height12 = y1 - y2;
                var det1 = x1 * y2 - y1 * x2;
                var x3 = vertices[nn - 2], y3 = vertices[nn - 1];
                for (var ii = 0; ii < nn; ii += 2) {
                    var x4 = vertices[ii], y4 = vertices[ii + 1];
                    var det2 = x3 * y4 - y3 * x4;
                    var width34 = x3 - x4, height34 = y3 - y4;
                    var det3 = width12 * height34 - height12 * width34;
                    var x = (det1 * width34 - width12 * det2) / det3;
                    if (((x >= x3 && x <= x4) || (x >= x4 && x <= x3)) && ((x >= x1 && x <= x2) || (x >= x2 && x <= x1))) {
                        var y = (det1 * height34 - height12 * det2) / det3;
                        if (((y >= y3 && y <= y4) || (y >= y4 && y <= y3)) && ((y >= y1 && y <= y2) || (y >= y2 && y <= y1)))
                            return true;
                    }
                    x3 = x4;
                    y3 = y4;
                }
                return false;
            };
            SkeletonBounds.prototype.getPolygon = function (boundingBox) {
                if (boundingBox == null)
                    throw new Error("boundingBox cannot be null.");
                var index = this.boundingBoxes.indexOf(boundingBox);
                return index == -1 ? null : this.polygons[index];
            };
            SkeletonBounds.prototype.getWidth = function () {
                return this.maxX - this.minX;
            };
            SkeletonBounds.prototype.getHeight = function () {
                return this.maxY - this.minY;
            };
            return SkeletonBounds;
        }());
        core.SkeletonBounds = SkeletonBounds;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var SkeletonData = (function () {
            function SkeletonData() {
                this.bones = new Array();
                this.slots = new Array();
                this.skins = new Array();
                this.events = new Array();
                this.animations = new Array();
                this.ikConstraints = new Array();
                this.transformConstraints = new Array();
                this.pathConstraints = new Array();
                this.fps = 0;
            }
            SkeletonData.prototype.findBone = function (boneName) {
                if (boneName == null)
                    throw new Error("boneName cannot be null.");
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    if (bone.name == boneName)
                        return bone;
                }
                return null;
            };
            SkeletonData.prototype.findBoneIndex = function (boneName) {
                if (boneName == null)
                    throw new Error("boneName cannot be null.");
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++)
                    if (bones[i].name == boneName)
                        return i;
                return -1;
            };
            SkeletonData.prototype.findSlot = function (slotName) {
                if (slotName == null)
                    throw new Error("slotName cannot be null.");
                var slots = this.slots;
                for (var i = 0, n = slots.length; i < n; i++) {
                    var slot = slots[i];
                    if (slot.name == slotName)
                        return slot;
                }
                return null;
            };
            SkeletonData.prototype.findSlotIndex = function (slotName) {
                if (slotName == null)
                    throw new Error("slotName cannot be null.");
                var slots = this.slots;
                for (var i = 0, n = slots.length; i < n; i++)
                    if (slots[i].name == slotName)
                        return i;
                return -1;
            };
            SkeletonData.prototype.findSkin = function (skinName) {
                if (skinName == null)
                    throw new Error("skinName cannot be null.");
                var skins = this.skins;
                for (var i = 0, n = skins.length; i < n; i++) {
                    var skin = skins[i];
                    if (skin.name == skinName)
                        return skin;
                }
                return null;
            };
            SkeletonData.prototype.findEvent = function (eventDataName) {
                if (eventDataName == null)
                    throw new Error("eventDataName cannot be null.");
                var events = this.events;
                for (var i = 0, n = events.length; i < n; i++) {
                    var event_4 = events[i];
                    if (event_4.name == eventDataName)
                        return event_4;
                }
                return null;
            };
            SkeletonData.prototype.findAnimation = function (animationName) {
                if (animationName == null)
                    throw new Error("animationName cannot be null.");
                var animations = this.animations;
                for (var i = 0, n = animations.length; i < n; i++) {
                    var animation = animations[i];
                    if (animation.name == animationName)
                        return animation;
                }
                return null;
            };
            SkeletonData.prototype.findIkConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var ikConstraints = this.ikConstraints;
                for (var i = 0, n = ikConstraints.length; i < n; i++) {
                    var constraint = ikConstraints[i];
                    if (constraint.name == constraintName)
                        return constraint;
                }
                return null;
            };
            SkeletonData.prototype.findTransformConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var transformConstraints = this.transformConstraints;
                for (var i = 0, n = transformConstraints.length; i < n; i++) {
                    var constraint = transformConstraints[i];
                    if (constraint.name == constraintName)
                        return constraint;
                }
                return null;
            };
            SkeletonData.prototype.findPathConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var pathConstraints = this.pathConstraints;
                for (var i = 0, n = pathConstraints.length; i < n; i++) {
                    var constraint = pathConstraints[i];
                    if (constraint.name == constraintName)
                        return constraint;
                }
                return null;
            };
            SkeletonData.prototype.findPathConstraintIndex = function (pathConstraintName) {
                if (pathConstraintName == null)
                    throw new Error("pathConstraintName cannot be null.");
                var pathConstraints = this.pathConstraints;
                for (var i = 0, n = pathConstraints.length; i < n; i++)
                    if (pathConstraints[i].name == pathConstraintName)
                        return i;
                return -1;
            };
            return SkeletonData;
        }());
        core.SkeletonData = SkeletonData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var SkeletonJson = (function () {
            function SkeletonJson(attachmentLoader) {
                this.scale = 1;
                this.linkedMeshes = new Array();
                this.attachmentLoader = attachmentLoader;
            }
            SkeletonJson.prototype.readSkeletonData = function (json) {
                var scale = this.scale;
                var skeletonData = new core.SkeletonData();
                var root = typeof (json) === "string" ? JSON.parse(json) : json;
                var skeletonMap = root.skeleton;
                if (skeletonMap != null) {
                    skeletonData.hash = skeletonMap.hash;
                    skeletonData.version = skeletonMap.spine;
                    skeletonData.width = skeletonMap.width;
                    skeletonData.height = skeletonMap.height;
                    skeletonData.fps = skeletonMap.fps;
                    skeletonData.imagesPath = skeletonMap.images;
                }
                if (root.bones) {
                    for (var i = 0; i < root.bones.length; i++) {
                        var boneMap = root.bones[i];
                        var parent_2 = null;
                        var parentName = this.getValue(boneMap, "parent", null);
                        if (parentName != null) {
                            parent_2 = skeletonData.findBone(parentName);
                            if (parent_2 == null)
                                throw new Error("Parent bone not found: " + parentName);
                        }
                        var data = new core.BoneData(skeletonData.bones.length, boneMap.name, parent_2);
                        data.length = this.getValue(boneMap, "length", 0) * scale;
                        data.x = this.getValue(boneMap, "x", 0) * scale;
                        data.y = this.getValue(boneMap, "y", 0) * scale;
                        data.rotation = this.getValue(boneMap, "rotation", 0);
                        data.scaleX = this.getValue(boneMap, "scaleX", 1);
                        data.scaleY = this.getValue(boneMap, "scaleY", 1);
                        data.shearX = this.getValue(boneMap, "shearX", 0);
                        data.shearY = this.getValue(boneMap, "shearY", 0);
                        if (boneMap.hasOwnProperty("inheritScale") || boneMap.hasOwnProperty("inheritRotation")) {
                            data.transformMode = SkeletonJson.transformModeLegacy(this.getValue(boneMap, "inheritRotation", true), this.getValue(boneMap, "inheritScale", true));
                        }
                        else {
                            data.transformMode = SkeletonJson.transformModeFromString(this.getValue(boneMap, "transform", "normal"));
                        }
                        skeletonData.bones.push(data);
                    }
                }
                if (root.slots) {
                    for (var i = 0; i < root.slots.length; i++) {
                        var slotMap = root.slots[i];
                        var slotName = slotMap.name;
                        var boneName = slotMap.bone;
                        var boneData = skeletonData.findBone(boneName);
                        if (boneData == null)
                            throw new Error("Slot bone not found: " + boneName);
                        var data = new core.SlotData(skeletonData.slots.length, slotName, boneData);
                        var color = this.getValue(slotMap, "color", null);
                        if (color != null)
                            data.color.setFromString(color);
                        data.attachmentName = this.getValue(slotMap, "attachment", null);
                        data.blendMode = SkeletonJson.blendModeFromString(this.getValue(slotMap, "blend", "normal"));
                        skeletonData.slots.push(data);
                    }
                }
                if (root.ik) {
                    for (var i = 0; i < root.ik.length; i++) {
                        var constraintMap = root.ik[i];
                        var data = new core.IkConstraintData(constraintMap.name);
                        data.order = this.getValue(constraintMap, "order", 0);
                        for (var j = 0; j < constraintMap.bones.length; j++) {
                            var boneName = constraintMap.bones[j];
                            var bone = skeletonData.findBone(boneName);
                            if (bone == null)
                                throw new Error("IK bone not found: " + boneName);
                            data.bones.push(bone);
                        }
                        var targetName = constraintMap.target;
                        data.target = skeletonData.findBone(targetName);
                        if (data.target == null)
                            throw new Error("IK target bone not found: " + targetName);
                        data.bendDirection = this.getValue(constraintMap, "bendPositive", true) ? 1 : -1;
                        data.mix = this.getValue(constraintMap, "mix", 1);
                        skeletonData.ikConstraints.push(data);
                    }
                }
                if (root.transform) {
                    for (var i = 0; i < root.transform.length; i++) {
                        var constraintMap = root.transform[i];
                        var data = new core.TransformConstraintData(constraintMap.name);
                        data.order = this.getValue(constraintMap, "order", 0);
                        for (var j = 0; j < constraintMap.bones.length; j++) {
                            var boneName = constraintMap.bones[j];
                            var bone = skeletonData.findBone(boneName);
                            if (bone == null)
                                throw new Error("Transform constraint bone not found: " + boneName);
                            data.bones.push(bone);
                        }
                        var targetName = constraintMap.target;
                        data.target = skeletonData.findBone(targetName);
                        if (data.target == null)
                            throw new Error("Transform constraint target bone not found: " + targetName);
                        data.offsetRotation = this.getValue(constraintMap, "rotation", 0);
                        data.offsetX = this.getValue(constraintMap, "x", 0) * scale;
                        data.offsetY = this.getValue(constraintMap, "y", 0) * scale;
                        data.offsetScaleX = this.getValue(constraintMap, "scaleX", 0);
                        data.offsetScaleY = this.getValue(constraintMap, "scaleY", 0);
                        data.offsetShearY = this.getValue(constraintMap, "shearY", 0);
                        data.rotateMix = this.getValue(constraintMap, "rotateMix", 1);
                        data.translateMix = this.getValue(constraintMap, "translateMix", 1);
                        data.scaleMix = this.getValue(constraintMap, "scaleMix", 1);
                        data.shearMix = this.getValue(constraintMap, "shearMix", 1);
                        skeletonData.transformConstraints.push(data);
                    }
                }
                if (root.path) {
                    for (var i = 0; i < root.path.length; i++) {
                        var constraintMap = root.path[i];
                        var data = new core.PathConstraintData(constraintMap.name);
                        data.order = this.getValue(constraintMap, "order", 0);
                        for (var j = 0; j < constraintMap.bones.length; j++) {
                            var boneName = constraintMap.bones[j];
                            var bone = skeletonData.findBone(boneName);
                            if (bone == null)
                                throw new Error("Transform constraint bone not found: " + boneName);
                            data.bones.push(bone);
                        }
                        var targetName = constraintMap.target;
                        data.target = skeletonData.findSlot(targetName);
                        if (data.target == null)
                            throw new Error("Path target slot not found: " + targetName);
                        data.positionMode = SkeletonJson.positionModeFromString(this.getValue(constraintMap, "positionMode", "percent"));
                        data.spacingMode = SkeletonJson.spacingModeFromString(this.getValue(constraintMap, "spacingMode", "length"));
                        data.rotateMode = SkeletonJson.rotateModeFromString(this.getValue(constraintMap, "rotateMode", "tangent"));
                        data.offsetRotation = this.getValue(constraintMap, "rotation", 0);
                        data.position = this.getValue(constraintMap, "position", 0);
                        if (data.positionMode == core.PositionMode.Fixed)
                            data.position *= scale;
                        data.spacing = this.getValue(constraintMap, "spacing", 0);
                        if (data.spacingMode == core.SpacingMode.Length || data.spacingMode == core.SpacingMode.Fixed)
                            data.spacing *= scale;
                        data.rotateMix = this.getValue(constraintMap, "rotateMix", 1);
                        data.translateMix = this.getValue(constraintMap, "translateMix", 1);
                        skeletonData.pathConstraints.push(data);
                    }
                }
                if (root.skins) {
                    for (var skinName in root.skins) {
                        var skinMap = root.skins[skinName];
                        var skin = new core.Skin(skinName);
                        for (var slotName in skinMap) {
                            var slotIndex = skeletonData.findSlotIndex(slotName);
                            if (slotIndex == -1)
                                throw new Error("Slot not found: " + slotName);
                            var slotMap = skinMap[slotName];
                            for (var entryName in slotMap) {
                                var attachment = this.readAttachment(slotMap[entryName], skin, slotIndex, entryName);
                                if (attachment != null)
                                    skin.addAttachment(slotIndex, entryName, attachment);
                            }
                        }
                        skeletonData.skins.push(skin);
                        if (skin.name == "default")
                            skeletonData.defaultSkin = skin;
                    }
                }
                for (var i = 0, n = this.linkedMeshes.length; i < n; i++) {
                    var linkedMesh = this.linkedMeshes[i];
                    var skin = linkedMesh.skin == null ? skeletonData.defaultSkin : skeletonData.findSkin(linkedMesh.skin);
                    if (skin == null)
                        throw new Error("Skin not found: " + linkedMesh.skin);
                    var parent_3 = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
                    if (parent_3 == null)
                        throw new Error("Parent mesh not found: " + linkedMesh.parent);
                    linkedMesh.mesh.setParentMesh(parent_3);
                }
                this.linkedMeshes.length = 0;
                if (root.events) {
                    for (var eventName in root.events) {
                        var eventMap = root.events[eventName];
                        var data = new core.EventData(eventName);
                        data.intValue = this.getValue(eventMap, "int", 0);
                        data.floatValue = this.getValue(eventMap, "float", 0);
                        data.stringValue = this.getValue(eventMap, "string", "");
                        skeletonData.events.push(data);
                    }
                }
                if (root.animations) {
                    for (var animationName in root.animations) {
                        var animationMap = root.animations[animationName];
                        this.readAnimation(animationMap, animationName, skeletonData);
                    }
                }
                return skeletonData;
            };
            SkeletonJson.prototype.readAttachment = function (map, skin, slotIndex, name) {
                var scale = this.scale;
                name = this.getValue(map, "name", name);
                var type = this.getValue(map, "type", "region");
                switch (type) {
                    case "region": {
                        var path = this.getValue(map, "path", name);
                        var region = this.attachmentLoader.newRegionAttachment(skin, name, path);
                        if (region == null)
                            return null;
                        region.path = path;
                        region.x = this.getValue(map, "x", 0) * scale;
                        region.y = this.getValue(map, "y", 0) * scale;
                        region.scaleX = this.getValue(map, "scaleX", 1);
                        region.scaleY = this.getValue(map, "scaleY", 1);
                        region.rotation = this.getValue(map, "rotation", 0);
                        region.width = map.width * scale;
                        region.height = map.height * scale;
                        var color = this.getValue(map, "color", null);
                        if (color != null)
                            region.color.setFromString(color);
                        return region;
                    }
                    case "boundingbox": {
                        var box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
                        if (box == null)
                            return null;
                        this.readVertices(map, box, map.vertexCount << 1);
                        var color = this.getValue(map, "color", null);
                        if (color != null)
                            box.color.setFromString(color);
                        return box;
                    }
                    case "weightedmesh":
                    case "skinnedmesh":
                    case "mesh":
                    case "linkedmesh": {
                        var path = this.getValue(map, "path", name);
                        var mesh = this.attachmentLoader.newMeshAttachment(skin, name, path);
                        if (mesh == null)
                            return null;
                        mesh.path = path;
                        var color = this.getValue(map, "color", null);
                        if (color != null)
                            mesh.color.setFromString(color);
                        var parent_4 = this.getValue(map, "parent", null);
                        if (parent_4 != null) {
                            mesh.inheritDeform = this.getValue(map, "deform", true);
                            this.linkedMeshes.push(new LinkedMesh(mesh, this.getValue(map, "skin", null), slotIndex, parent_4));
                            return mesh;
                        }
                        var uvs = map.uvs;
                        this.readVertices(map, mesh, uvs.length);
                        mesh.triangles = map.triangles;
                        mesh.regionUVs = uvs;
                        mesh.hullLength = this.getValue(map, "hull", 0) * 2;
                        return mesh;
                    }
                    case "path": {
                        var path = this.attachmentLoader.newPathAttachment(skin, name);
                        if (path == null)
                            return null;
                        path.closed = this.getValue(map, "closed", false);
                        path.constantSpeed = this.getValue(map, "constantSpeed", true);
                        var vertexCount = map.vertexCount;
                        this.readVertices(map, path, vertexCount << 1);
                        var lengths = core.Utils.newArray(vertexCount / 3, 0);
                        for (var i = 0; i < map.lengths.length; i++)
                            lengths[i++] = map.lengths[i] * scale;
                        path.lengths = lengths;
                        var color = this.getValue(map, "color", null);
                        if (color != null)
                            path.color.setFromString(color);
                        return path;
                    }
                }
                return null;
            };
            SkeletonJson.prototype.readVertices = function (map, attachment, verticesLength) {
                var scale = this.scale;
                attachment.worldVerticesLength = verticesLength;
                var vertices = map.vertices;
                if (verticesLength == vertices.length) {
                    if (scale != 1) {
                        for (var i = 0, n = vertices.length; i < n; i++)
                            vertices[i] *= scale;
                    }
                    attachment.vertices = core.Utils.toFloatArray(vertices);
                    return;
                }
                var weights = new Array();
                var bones = new Array();
                for (var i = 0, n = vertices.length; i < n;) {
                    var boneCount = vertices[i++];
                    bones.push(boneCount);
                    for (var nn = i + boneCount * 4; i < nn; i += 4) {
                        bones.push(vertices[i]);
                        weights.push(vertices[i + 1] * scale);
                        weights.push(vertices[i + 2] * scale);
                        weights.push(vertices[i + 3]);
                    }
                }
                attachment.bones = bones;
                attachment.vertices = core.Utils.toFloatArray(weights);
            };
            SkeletonJson.prototype.readAnimation = function (map, name, skeletonData) {
                var scale = this.scale;
                var timelines = new Array();
                var duration = 0;
                if (map.slots) {
                    for (var slotName in map.slots) {
                        var slotMap = map.slots[slotName];
                        var slotIndex = skeletonData.findSlotIndex(slotName);
                        if (slotIndex == -1)
                            throw new Error("Slot not found: " + slotName);
                        for (var timelineName in slotMap) {
                            var timelineMap = slotMap[timelineName];
                            if (timelineName == "color") {
                                var timeline = new core.ColorTimeline(timelineMap.length);
                                timeline.slotIndex = slotIndex;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    var color = new core.Color();
                                    color.setFromString(valueMap.color);
                                    timeline.setFrame(frameIndex, valueMap.time, color.r, color.g, color.b, color.a);
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.ColorTimeline.ENTRIES]);
                            }
                            else if (timelineName = "attachment") {
                                var timeline = new core.AttachmentTimeline(timelineMap.length);
                                timeline.slotIndex = slotIndex;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    timeline.setFrame(frameIndex++, valueMap.time, valueMap.name);
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
                            }
                            else
                                throw new Error("Invalid timeline type for a slot: " + timelineName + " (" + slotName + ")");
                        }
                    }
                }
                if (map.bones) {
                    for (var boneName in map.bones) {
                        var boneMap = map.bones[boneName];
                        var boneIndex = skeletonData.findBoneIndex(boneName);
                        if (boneIndex == -1)
                            throw new Error("Bone not found: " + boneName);
                        for (var timelineName in boneMap) {
                            var timelineMap = boneMap[timelineName];
                            if (timelineName === "rotate") {
                                var timeline = new core.RotateTimeline(timelineMap.length);
                                timeline.boneIndex = boneIndex;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    timeline.setFrame(frameIndex, valueMap.time, valueMap.angle);
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.RotateTimeline.ENTRIES]);
                            }
                            else if (timelineName === "translate" || timelineName === "scale" || timelineName === "shear") {
                                var timeline = null;
                                var timelineScale = 1;
                                if (timelineName === "scale")
                                    timeline = new core.ScaleTimeline(timelineMap.length);
                                else if (timelineName === "shear")
                                    timeline = new core.ShearTimeline(timelineMap.length);
                                else {
                                    timeline = new core.TranslateTimeline(timelineMap.length);
                                    timelineScale = scale;
                                }
                                timeline.boneIndex = boneIndex;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    var x = this.getValue(valueMap, "x", 0), y = this.getValue(valueMap, "y", 0);
                                    timeline.setFrame(frameIndex, valueMap.time, x * timelineScale, y * timelineScale);
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.TranslateTimeline.ENTRIES]);
                            }
                            else
                                throw new Error("Invalid timeline type for a bone: " + timelineName + " (" + boneName + ")");
                        }
                    }
                }
                if (map.ik) {
                    for (var constraintName in map.ik) {
                        var constraintMap = map.ik[constraintName];
                        var constraint = skeletonData.findIkConstraint(constraintName);
                        var timeline = new core.IkConstraintTimeline(constraintMap.length);
                        timeline.ikConstraintIndex = skeletonData.ikConstraints.indexOf(constraint);
                        var frameIndex = 0;
                        for (var i = 0; i < constraintMap.length; i++) {
                            var valueMap = constraintMap[i];
                            timeline.setFrame(frameIndex, valueMap.time, this.getValue(valueMap, "mix", 1), this.getValue(valueMap, "bendPositive", true) ? 1 : -1);
                            this.readCurve(valueMap, timeline, frameIndex);
                            frameIndex++;
                        }
                        timelines.push(timeline);
                        duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.IkConstraintTimeline.ENTRIES]);
                    }
                }
                if (map.transform) {
                    for (var constraintName in map.transform) {
                        var constraintMap = map.transform[constraintName];
                        var constraint = skeletonData.findTransformConstraint(constraintName);
                        var timeline = new core.TransformConstraintTimeline(constraintMap.length);
                        timeline.transformConstraintIndex = skeletonData.transformConstraints.indexOf(constraint);
                        var frameIndex = 0;
                        for (var i = 0; i < constraintMap.length; i++) {
                            var valueMap = constraintMap[i];
                            timeline.setFrame(frameIndex, valueMap.time, this.getValue(valueMap, "rotateMix", 1), this.getValue(valueMap, "translateMix", 1), this.getValue(valueMap, "scaleMix", 1), this.getValue(valueMap, "shearMix", 1));
                            this.readCurve(valueMap, timeline, frameIndex);
                            frameIndex++;
                        }
                        timelines.push(timeline);
                        duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.TransformConstraintTimeline.ENTRIES]);
                    }
                }
                if (map.paths) {
                    for (var constraintName in map.paths) {
                        var constraintMap = map.paths[constraintName];
                        var index = skeletonData.findPathConstraintIndex(constraintName);
                        if (index == -1)
                            throw new Error("Path constraint not found: " + constraintName);
                        var data = skeletonData.pathConstraints[index];
                        for (var timelineName in constraintMap) {
                            var timelineMap = constraintMap[timelineName];
                            if (timelineName === "position" || timelineName === "spacing") {
                                var timeline = null;
                                var timelineScale = 1;
                                if (timelineName === "spacing") {
                                    timeline = new core.PathConstraintSpacingTimeline(timelineMap.length);
                                    if (data.spacingMode == core.SpacingMode.Length || data.spacingMode == core.SpacingMode.Fixed)
                                        timelineScale = scale;
                                }
                                else {
                                    timeline = new core.PathConstraintPositionTimeline(timelineMap.length);
                                    if (data.positionMode == core.PositionMode.Fixed)
                                        timelineScale = scale;
                                }
                                timeline.pathConstraintIndex = index;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    timeline.setFrame(frameIndex, valueMap.time, this.getValue(valueMap, timelineName, 0) * timelineScale);
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.PathConstraintPositionTimeline.ENTRIES]);
                            }
                            else if (timelineName === "mix") {
                                var timeline = new core.PathConstraintMixTimeline(timelineMap.length);
                                timeline.pathConstraintIndex = index;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    timeline.setFrame(frameIndex, valueMap.time, this.getValue(valueMap, "rotateMix", 1), this.getValue(valueMap, "translateMix", 1));
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.PathConstraintMixTimeline.ENTRIES]);
                            }
                        }
                    }
                }
                if (map.deform) {
                    for (var deformName in map.deform) {
                        var deformMap = map.deform[deformName];
                        var skin = skeletonData.findSkin(deformName);
                        if (skin == null)
                            throw new Error("Skin not found: " + deformName);
                        for (var slotName in deformMap) {
                            var slotMap = deformMap[slotName];
                            var slotIndex = skeletonData.findSlotIndex(slotName);
                            if (slotIndex == -1)
                                throw new Error("Slot not found: " + slotMap.name);
                            for (var timelineName in slotMap) {
                                var timelineMap = slotMap[timelineName];
                                var attachment = skin.getAttachment(slotIndex, timelineName);
                                if (attachment == null)
                                    throw new Error("Deform attachment not found: " + timelineMap.name);
                                var weighted = attachment.bones != null;
                                var vertices = attachment.vertices;
                                var deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
                                var timeline = new core.DeformTimeline(timelineMap.length);
                                timeline.slotIndex = slotIndex;
                                timeline.attachment = attachment;
                                var frameIndex = 0;
                                for (var j = 0; j < timelineMap.length; j++) {
                                    var valueMap = timelineMap[j];
                                    var deform = void 0;
                                    var verticesValue = this.getValue(valueMap, "vertices", null);
                                    if (verticesValue == null)
                                        deform = weighted ? core.Utils.newFloatArray(deformLength) : vertices;
                                    else {
                                        deform = core.Utils.newFloatArray(deformLength);
                                        var start = this.getValue(valueMap, "offset", 0);
                                        core.Utils.arrayCopy(verticesValue, 0, deform, start, verticesValue.length);
                                        if (scale != 1) {
                                            for (var i = start, n = i + verticesValue.length; i < n; i++)
                                                deform[i] *= scale;
                                        }
                                        if (!weighted) {
                                            for (var i = 0; i < deformLength; i++)
                                                deform[i] += vertices[i];
                                        }
                                    }
                                    timeline.setFrame(frameIndex, valueMap.time, deform);
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
                            }
                        }
                    }
                }
                var drawOrderNode = map.drawOrder;
                if (drawOrderNode == null)
                    drawOrderNode = map.draworder;
                if (drawOrderNode != null) {
                    var timeline = new core.DrawOrderTimeline(drawOrderNode.length);
                    var slotCount = skeletonData.slots.length;
                    var frameIndex = 0;
                    for (var j = 0; j < drawOrderNode.length; j++) {
                        var drawOrderMap = drawOrderNode[j];
                        var drawOrder = null;
                        var offsets = this.getValue(drawOrderMap, "offsets", null);
                        if (offsets != null) {
                            drawOrder = core.Utils.newArray(slotCount, -1);
                            var unchanged = core.Utils.newArray(slotCount - offsets.length, 0);
                            var originalIndex = 0, unchangedIndex = 0;
                            for (var i = 0; i < offsets.length; i++) {
                                var offsetMap = offsets[i];
                                var slotIndex = skeletonData.findSlotIndex(offsetMap.slot);
                                if (slotIndex == -1)
                                    throw new Error("Slot not found: " + offsetMap.slot);
                                while (originalIndex != slotIndex)
                                    unchanged[unchangedIndex++] = originalIndex++;
                                drawOrder[originalIndex + offsetMap.offset] = originalIndex++;
                            }
                            while (originalIndex < slotCount)
                                unchanged[unchangedIndex++] = originalIndex++;
                            for (var i = slotCount - 1; i >= 0; i--)
                                if (drawOrder[i] == -1)
                                    drawOrder[i] = unchanged[--unchangedIndex];
                        }
                        timeline.setFrame(frameIndex++, drawOrderMap.time, drawOrder);
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
                }
                if (map.events) {
                    var timeline = new core.EventTimeline(map.events.length);
                    var frameIndex = 0;
                    for (var i = 0; i < map.events.length; i++) {
                        var eventMap = map.events[i];
                        var eventData = skeletonData.findEvent(eventMap.name);
                        if (eventData == null)
                            throw new Error("Event not found: " + eventMap.name);
                        var event_5 = new core.Event(eventMap.time, eventData);
                        event_5.intValue = this.getValue(eventMap, "int", eventData.intValue);
                        event_5.floatValue = this.getValue(eventMap, "float", eventData.floatValue);
                        event_5.stringValue = this.getValue(eventMap, "string", eventData.stringValue);
                        timeline.setFrame(frameIndex++, event_5);
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
                }
                if (isNaN(duration)) {
                    throw new Error("Error while parsing animation, duration is NaN");
                }
                skeletonData.animations.push(new core.Animation(name, timelines, duration));
            };
            SkeletonJson.prototype.readCurve = function (map, timeline, frameIndex) {
                if (!map.curve)
                    return;
                if (map.curve === "stepped")
                    timeline.setStepped(frameIndex);
                else if (Object.prototype.toString.call(map.curve) === '[object Array]') {
                    var curve = map.curve;
                    timeline.setCurve(frameIndex, curve[0], curve[1], curve[2], curve[3]);
                }
            };
            SkeletonJson.prototype.getValue = function (map, prop, defaultValue) {
                return map[prop] !== undefined ? map[prop] : defaultValue;
            };
            SkeletonJson.blendModeFromString = function (str) {
                if (str === 'multiply')
                    return PIXI.BLEND_MODES.MULTIPLY;
                if (str === 'additive')
                    return PIXI.BLEND_MODES.ADD;
                if (str === 'screen')
                    return PIXI.BLEND_MODES.SCREEN;
                if (str === 'normal')
                    return PIXI.BLEND_MODES.NORMAL;
                throw new Error("Unknown blend mode: " + str);
            };
            SkeletonJson.positionModeFromString = function (str) {
                str = str.toLowerCase();
                if (str == "fixed")
                    return core.PositionMode.Fixed;
                if (str == "percent")
                    return core.PositionMode.Percent;
                throw new Error("Unknown position mode: " + str);
            };
            SkeletonJson.spacingModeFromString = function (str) {
                str = str.toLowerCase();
                if (str == "length")
                    return core.SpacingMode.Length;
                if (str == "fixed")
                    return core.SpacingMode.Fixed;
                if (str == "percent")
                    return core.SpacingMode.Percent;
                throw new Error("Unknown position mode: " + str);
            };
            SkeletonJson.rotateModeFromString = function (str) {
                str = str.toLowerCase();
                if (str == "tangent")
                    return core.RotateMode.Tangent;
                if (str == "chain")
                    return core.RotateMode.Chain;
                if (str == "chainscale")
                    return core.RotateMode.ChainScale;
                throw new Error("Unknown rotate mode: " + str);
            };
            SkeletonJson.transformModeFromString = function (str) {
                str = str.toLowerCase();
                if (str == "normal")
                    return core.TransformMode.Normal;
                if (str == "onlytranslation")
                    return core.TransformMode.OnlyTranslation;
                if (str == "norotationorreflection")
                    return core.TransformMode.NoRotationOrReflection;
                if (str == "noscale")
                    return core.TransformMode.NoScale;
                if (str == "noscaleorreflection")
                    return core.TransformMode.NoScaleOrReflection;
                throw new Error("Unknown transform mode: " + str);
            };
            SkeletonJson.transformModeLegacy = function (inheritRotation, inheritScale) {
                console.log("Deprecation Warning: re-export your model with spine 3.5, or downgrade to pixi-spine 1.1 branch. There were many breaking changes, place breakpoint here if you want to know which model is broken");
                if (inheritRotation && inheritScale) {
                    return core.TransformMode.Normal;
                }
                else if (inheritRotation) {
                    return core.TransformMode.NoScaleOrReflection;
                }
                else if (inheritScale) {
                    return core.TransformMode.NoRotationOrReflection;
                }
                else {
                    return core.TransformMode.OnlyTranslation;
                }
            };
            return SkeletonJson;
        }());
        core.SkeletonJson = SkeletonJson;
        var LinkedMesh = (function () {
            function LinkedMesh(mesh, skin, slotIndex, parent) {
                this.mesh = mesh;
                this.skin = skin;
                this.slotIndex = slotIndex;
                this.parent = parent;
            }
            return LinkedMesh;
        }());
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var Skin = (function () {
            function Skin(name) {
                this.attachments = new Array();
                if (name == null)
                    throw new Error("name cannot be null.");
                this.name = name;
            }
            Skin.prototype.addAttachment = function (slotIndex, name, attachment) {
                if (attachment == null)
                    throw new Error("attachment cannot be null.");
                var attachments = this.attachments;
                if (slotIndex >= attachments.length)
                    attachments.length = slotIndex + 1;
                if (!attachments[slotIndex])
                    attachments[slotIndex] = {};
                attachments[slotIndex][name] = attachment;
            };
            Skin.prototype.getAttachment = function (slotIndex, name) {
                var dictionary = this.attachments[slotIndex];
                return dictionary ? dictionary[name] : null;
            };
            Skin.prototype.attachAll = function (skeleton, oldSkin) {
                var slotIndex = 0;
                for (var i = 0; i < skeleton.slots.length; i++) {
                    var slot = skeleton.slots[i];
                    var slotAttachment = slot.getAttachment();
                    if (slotAttachment && slotIndex < oldSkin.attachments.length) {
                        var dictionary = oldSkin.attachments[slotIndex];
                        for (var key in dictionary) {
                            var skinAttachment = dictionary[key];
                            if (slotAttachment == skinAttachment) {
                                var attachment = this.getAttachment(slotIndex, name);
                                if (attachment != null)
                                    slot.setAttachment(attachment);
                                break;
                            }
                        }
                    }
                    slotIndex++;
                }
            };
            return Skin;
        }());
        core.Skin = Skin;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var Slot = (function () {
            function Slot(data, bone) {
                this.attachmentVertices = new Array();
                if (data == null)
                    throw new Error("data cannot be null.");
                if (bone == null)
                    throw new Error("bone cannot be null.");
                this.data = data;
                this.bone = bone;
                this.color = new core.Color();
                this.blendMode = data.blendMode;
                this.setToSetupPose();
            }
            Slot.prototype.getAttachment = function () {
                return this.attachment;
            };
            Slot.prototype.setAttachment = function (attachment) {
                if (this.attachment == attachment)
                    return;
                this.attachment = attachment;
                this.attachmentTime = this.bone.skeleton.time;
                this.attachmentVertices.length = 0;
            };
            Slot.prototype.setAttachmentTime = function (time) {
                this.attachmentTime = this.bone.skeleton.time - time;
            };
            Slot.prototype.getAttachmentTime = function () {
                return this.bone.skeleton.time - this.attachmentTime;
            };
            Slot.prototype.setToSetupPose = function () {
                this.color.setFromColor(this.data.color);
                if (this.data.attachmentName == null)
                    this.attachment = null;
                else {
                    this.attachment = null;
                    this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName));
                }
            };
            return Slot;
        }());
        core.Slot = Slot;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var SlotData = (function () {
            function SlotData(index, name, boneData) {
                this.color = new core.Color(1, 1, 1, 1);
                if (index < 0)
                    throw new Error("index must be >= 0.");
                if (name == null)
                    throw new Error("name cannot be null.");
                if (boneData == null)
                    throw new Error("boneData cannot be null.");
                this.index = index;
                this.name = name;
                this.boneData = boneData;
            }
            return SlotData;
        }());
        core.SlotData = SlotData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var Texture = (function () {
            function Texture(image) {
                this._image = image;
            }
            Texture.prototype.getImage = function () {
                return this._image;
            };
            Texture.filterFromString = function (text) {
                switch (text.toLowerCase()) {
                    case "nearest": return TextureFilter.Nearest;
                    case "linear": return TextureFilter.Linear;
                    case "mipmap": return TextureFilter.MipMap;
                    case "mipmapnearestnearest": return TextureFilter.MipMapNearestNearest;
                    case "mipmaplinearnearest": return TextureFilter.MipMapLinearNearest;
                    case "mipmapnearestlinear": return TextureFilter.MipMapNearestLinear;
                    case "mipmaplinearlinear": return TextureFilter.MipMapLinearLinear;
                    default: throw new Error("Unknown texture filter " + text);
                }
            };
            Texture.wrapFromString = function (text) {
                switch (text.toLowerCase()) {
                    case "mirroredtepeat": return TextureWrap.MirroredRepeat;
                    case "clamptoedge": return TextureWrap.ClampToEdge;
                    case "repeat": return TextureWrap.Repeat;
                    default: throw new Error("Unknown texture wrap " + text);
                }
            };
            return Texture;
        }());
        core.Texture = Texture;
        var TextureFilter;
        (function (TextureFilter) {
            TextureFilter[TextureFilter["Nearest"] = 9728] = "Nearest";
            TextureFilter[TextureFilter["Linear"] = 9729] = "Linear";
            TextureFilter[TextureFilter["MipMap"] = 9987] = "MipMap";
            TextureFilter[TextureFilter["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
            TextureFilter[TextureFilter["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
            TextureFilter[TextureFilter["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
            TextureFilter[TextureFilter["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear";
        })(TextureFilter = core.TextureFilter || (core.TextureFilter = {}));
        var TextureWrap;
        (function (TextureWrap) {
            TextureWrap[TextureWrap["MirroredRepeat"] = 33648] = "MirroredRepeat";
            TextureWrap[TextureWrap["ClampToEdge"] = 33071] = "ClampToEdge";
            TextureWrap[TextureWrap["Repeat"] = 10497] = "Repeat";
        })(TextureWrap = core.TextureWrap || (core.TextureWrap = {}));
        var TextureRegion = (function () {
            function TextureRegion() {
                this.size = null;
            }
            Object.defineProperty(TextureRegion.prototype, "width", {
                get: function () {
                    var tex = this.texture;
                    if (PIXI.VERSION[0] == '3') {
                        return tex.crop.width;
                    }
                    if (tex.trim) {
                        return tex.trim.width;
                    }
                    return tex.orig.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "height", {
                get: function () {
                    var tex = this.texture;
                    if (PIXI.VERSION[0] == '3') {
                        return tex.crop.height;
                    }
                    if (tex.trim) {
                        return tex.trim.height;
                    }
                    return tex.orig.height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "u", {
                get: function () {
                    return this.texture._uvs.x0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "v", {
                get: function () {
                    return this.texture._uvs.y0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "u2", {
                get: function () {
                    return this.texture._uvs.x2;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "v2", {
                get: function () {
                    return this.texture._uvs.y2;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "offsetX", {
                get: function () {
                    var tex = this.texture;
                    return tex.trim ? tex.trim.x : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "offsetY", {
                get: function () {
                    console.warn("Deprecation Warning: @Hackerham: I guess, if you are using PIXI-SPINE ATLAS region.offsetY, you want a texture, right? Use region.texture from now on.");
                    return this.spineOffsetY;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "pixiOffsetY", {
                get: function () {
                    var tex = this.texture;
                    return tex.trim ? tex.trim.y : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "spineOffsetY", {
                get: function () {
                    var tex = this.texture;
                    return this.originalHeight - this.height - (tex.trim ? tex.trim.y : 0);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "originalWidth", {
                get: function () {
                    var tex = this.texture;
                    if (PIXI.VERSION[0] == '3') {
                        if (tex.trim) {
                            return tex.trim.width;
                        }
                        return tex.crop.width;
                    }
                    return tex.orig.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "originalHeight", {
                get: function () {
                    var tex = this.texture;
                    if (PIXI.VERSION[0] == '3') {
                        if (tex.trim) {
                            return tex.trim.height;
                        }
                        return tex.crop.height;
                    }
                    return tex.orig.height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "x", {
                get: function () {
                    return this.texture.frame.x;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "y", {
                get: function () {
                    return this.texture.frame.y;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "rotate", {
                get: function () {
                    return this.texture.rotate !== 0;
                },
                enumerable: true,
                configurable: true
            });
            return TextureRegion;
        }());
        core.TextureRegion = TextureRegion;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var TextureAtlas = (function () {
            function TextureAtlas(atlasText, textureLoader, callback) {
                this.pages = new Array();
                this.regions = new Array();
                if (atlasText) {
                    this.addSpineAtlas(atlasText, textureLoader, callback);
                }
            }
            TextureAtlas.prototype.addTexture = function (name, texture) {
                var pages = this.pages;
                var page = null;
                for (var i = 0; i < pages.length; i++) {
                    if (pages[i].baseTexture === texture.baseTexture) {
                        page = pages[i];
                        break;
                    }
                }
                if (page === null) {
                    page = new TextureAtlasPage();
                    page.name = 'texturePage';
                    var baseTexture = texture.baseTexture;
                    page.width = baseTexture.realWidth;
                    page.height = baseTexture.realHeight;
                    page.baseTexture = baseTexture;
                    page.minFilter = page.magFilter = core.TextureFilter.Nearest;
                    page.uWrap = core.TextureWrap.ClampToEdge;
                    page.vWrap = core.TextureWrap.ClampToEdge;
                    pages.push(page);
                }
                var region = new TextureAtlasRegion();
                region.name = name;
                region.page = page;
                region.texture = texture;
                region.index = -1;
                this.regions.push(region);
                return region;
            };
            TextureAtlas.prototype.addTextureHash = function (textures, stripExtension) {
                for (var key in textures) {
                    if (textures.hasOwnProperty(key)) {
                        this.addTexture(stripExtension && key.indexOf('.') !== -1 ? key.substr(0, key.lastIndexOf('.')) : key, textures[key]);
                    }
                }
            };
            TextureAtlas.prototype.addSpineAtlas = function (atlasText, textureLoader, callback) {
                return this.load(atlasText, textureLoader, callback);
            };
            TextureAtlas.prototype.load = function (atlasText, textureLoader, callback) {
                var _this = this;
                if (textureLoader == null)
                    throw new Error("textureLoader cannot be null.");
                var reader = new TextureAtlasReader(atlasText);
                var tuple = new Array(4);
                var page = null;
                var iterateParser = function () {
                    while (true) {
                        var line = reader.readLine();
                        if (line == null) {
                            return callback && callback(_this);
                        }
                        line = line.trim();
                        if (line.length == 0)
                            page = null;
                        else if (!page) {
                            page = new TextureAtlasPage();
                            page.name = line;
                            if (reader.readTuple(tuple) == 2) {
                                page.width = parseInt(tuple[0]);
                                page.height = parseInt(tuple[1]);
                                reader.readTuple(tuple);
                            }
                            reader.readTuple(tuple);
                            page.minFilter = core.Texture.filterFromString(tuple[0]);
                            page.magFilter = core.Texture.filterFromString(tuple[1]);
                            var direction = reader.readValue();
                            page.uWrap = core.TextureWrap.ClampToEdge;
                            page.vWrap = core.TextureWrap.ClampToEdge;
                            if (direction == "x")
                                page.uWrap = core.TextureWrap.Repeat;
                            else if (direction == "y")
                                page.vWrap = core.TextureWrap.Repeat;
                            else if (direction == "xy")
                                page.uWrap = page.vWrap = core.TextureWrap.Repeat;
                            textureLoader(line, function (texture) {
                                page.baseTexture = texture;
                                if (!texture.hasLoaded) {
                                    texture.width = page.width;
                                    texture.height = page.height;
                                }
                                _this.pages.push(page);
                                page.setFilters();
                                if (!page.width || !page.height) {
                                    page.width = texture.realWidth;
                                    page.height = texture.realHeight;
                                    if (!page.width || !page.height) {
                                        console.log("ERROR spine atlas page " + page.name + ": meshes wont work if you dont specify size in atlas (http://www.html5gamedevs.com/topic/18888-pixi-spines-and-meshes/?p=107121)");
                                    }
                                }
                                iterateParser();
                            });
                            _this.pages.push(page);
                            break;
                        }
                        else {
                            var region = new TextureAtlasRegion();
                            region.name = line;
                            region.page = page;
                            var rotate = reader.readValue() == "true" ? 6 : 0;
                            reader.readTuple(tuple);
                            var x = parseInt(tuple[0]);
                            var y = parseInt(tuple[1]);
                            reader.readTuple(tuple);
                            var width = parseInt(tuple[0]);
                            var height = parseInt(tuple[1]);
                            var resolution = page.baseTexture.resolution;
                            x /= resolution;
                            y /= resolution;
                            width /= resolution;
                            height /= resolution;
                            var frame = new PIXI.Rectangle(x, y, rotate ? height : width, rotate ? width : height);
                            if (reader.readTuple(tuple) == 4) {
                                if (reader.readTuple(tuple) == 4) {
                                    reader.readTuple(tuple);
                                }
                            }
                            var originalWidth = parseInt(tuple[0]) / resolution;
                            var originalHeight = parseInt(tuple[1]) / resolution;
                            reader.readTuple(tuple);
                            var offsetX = parseInt(tuple[0]) / resolution;
                            var offsetY = parseInt(tuple[1]) / resolution;
                            var orig = new PIXI.Rectangle(0, 0, originalWidth, originalHeight);
                            var trim = new PIXI.Rectangle(offsetX, originalHeight - height - offsetY, width, height);
                            if (PIXI.VERSION[0] == '4') {
                                region.texture = new PIXI.Texture(region.page.baseTexture, frame, orig, trim, rotate);
                            }
                            else {
                                var frame2 = new PIXI.Rectangle(x, y, width, height);
                                var crop = frame2.clone();
                                trim.width = originalWidth;
                                trim.height = originalHeight;
                                region.texture = new PIXI.Texture(region.page.baseTexture, frame2, crop, trim, rotate);
                            }
                            region.index = parseInt(reader.readValue());
                            region.texture._updateUvs();
                            _this.regions.push(region);
                        }
                    }
                };
                iterateParser();
            };
            TextureAtlas.prototype.findRegion = function (name) {
                for (var i = 0; i < this.regions.length; i++) {
                    if (this.regions[i].name == name) {
                        return this.regions[i];
                    }
                }
                return null;
            };
            TextureAtlas.prototype.dispose = function () {
                for (var i = 0; i < this.pages.length; i++) {
                    this.pages[i].baseTexture.dispose();
                }
            };
            return TextureAtlas;
        }());
        core.TextureAtlas = TextureAtlas;
        var TextureAtlasReader = (function () {
            function TextureAtlasReader(text) {
                this.index = 0;
                this.lines = text.split(/\r\n|\r|\n/);
            }
            TextureAtlasReader.prototype.readLine = function () {
                if (this.index >= this.lines.length)
                    return null;
                return this.lines[this.index++];
            };
            TextureAtlasReader.prototype.readValue = function () {
                var line = this.readLine();
                var colon = line.indexOf(":");
                if (colon == -1)
                    throw new Error("Invalid line: " + line);
                return line.substring(colon + 1).trim();
            };
            TextureAtlasReader.prototype.readTuple = function (tuple) {
                var line = this.readLine();
                var colon = line.indexOf(":");
                if (colon == -1)
                    throw new Error("Invalid line: " + line);
                var i = 0, lastMatch = colon + 1;
                for (; i < 3; i++) {
                    var comma = line.indexOf(",", lastMatch);
                    if (comma == -1)
                        break;
                    tuple[i] = line.substr(lastMatch, comma - lastMatch).trim();
                    lastMatch = comma + 1;
                }
                tuple[i] = line.substring(lastMatch).trim();
                return i + 1;
            };
            return TextureAtlasReader;
        }());
        var TextureAtlasPage = (function () {
            function TextureAtlasPage() {
            }
            TextureAtlasPage.prototype.setFilters = function () {
                var tex = this.baseTexture;
                var filter = this.minFilter;
                if (filter == core.TextureFilter.Linear) {
                    tex.scaleMode = PIXI.SCALE_MODES.LINEAR;
                }
                else if (this.minFilter == core.TextureFilter.Nearest) {
                    tex.scaleMode = PIXI.SCALE_MODES.NEAREST;
                }
                else {
                    tex.mipmap = true;
                    if (filter == core.TextureFilter.MipMapNearestNearest) {
                        tex.scaleMode = PIXI.SCALE_MODES.NEAREST;
                    }
                    else {
                        tex.scaleMode = PIXI.SCALE_MODES.LINEAR;
                    }
                }
            };
            return TextureAtlasPage;
        }());
        core.TextureAtlasPage = TextureAtlasPage;
        var TextureAtlasRegion = (function (_super) {
            __extends(TextureAtlasRegion, _super);
            function TextureAtlasRegion() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TextureAtlasRegion;
        }(core.TextureRegion));
        core.TextureAtlasRegion = TextureAtlasRegion;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var TransformConstraint = (function () {
            function TransformConstraint(data, skeleton) {
                this.rotateMix = 0;
                this.translateMix = 0;
                this.scaleMix = 0;
                this.shearMix = 0;
                this.temp = new core.Vector2();
                if (data == null)
                    throw new Error("data cannot be null.");
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                this.data = data;
                this.rotateMix = data.rotateMix;
                this.translateMix = data.translateMix;
                this.scaleMix = data.scaleMix;
                this.shearMix = data.shearMix;
                this.bones = new Array();
                for (var i = 0; i < data.bones.length; i++)
                    this.bones.push(skeleton.findBone(data.bones[i].name));
                this.target = skeleton.findBone(data.target.name);
            }
            TransformConstraint.prototype.apply = function () {
                this.update();
            };
            TransformConstraint.prototype.update = function () {
                var rotateMix = this.rotateMix, translateMix = this.translateMix, scaleMix = this.scaleMix, shearMix = this.shearMix;
                var target = this.target;
                var ta = target.matrix.a, tb = target.matrix.c, tc = target.matrix.b, td = target.matrix.d;
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    var m = bone.matrix;
                    var modified = false;
                    if (rotateMix != 0) {
                        var a = m.a, b = m.c, c = m.b, d = m.d;
                        var r = Math.atan2(tc, ta) - Math.atan2(c, a) + this.data.offsetRotation * core.MathUtils.degRad;
                        if (r > core.MathUtils.PI)
                            r -= core.MathUtils.PI2;
                        else if (r < -core.MathUtils.PI)
                            r += core.MathUtils.PI2;
                        r *= rotateMix;
                        var cos = Math.cos(r), sin = Math.sin(r);
                        m.a = cos * a - sin * c;
                        m.c = cos * b - sin * d;
                        m.b = sin * a + cos * c;
                        m.d = sin * b + cos * d;
                        modified = true;
                    }
                    if (translateMix != 0) {
                        var temp = this.temp;
                        target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
                        m.tx += (temp.x - m.tx) * translateMix;
                        m.ty += (temp.y - m.ty) * translateMix;
                        modified = true;
                    }
                    if (scaleMix > 0) {
                        var s = Math.sqrt(m.a * m.a + m.b * m.b);
                        var ts = Math.sqrt(ta * ta + tc * tc);
                        if (s > 0.00001)
                            s = (s + (ts - s + this.data.offsetScaleX) * scaleMix) / s;
                        m.a *= s;
                        m.b *= s;
                        s = Math.sqrt(m.c * m.c + m.d * m.d);
                        ts = Math.sqrt(tb * tb + td * td);
                        if (s > 0.00001)
                            s = (s + (ts - s + this.data.offsetScaleY) * scaleMix) / s;
                        m.c *= s;
                        m.d *= s;
                        modified = true;
                    }
                    if (shearMix > 0) {
                        var b = m.c, d = m.d;
                        var by = Math.atan2(d, b);
                        var r = Math.atan2(td, tb) - Math.atan2(tc, ta) - (by - Math.atan2(m.b, m.a));
                        if (r > core.MathUtils.PI)
                            r -= core.MathUtils.PI2;
                        else if (r < -core.MathUtils.PI)
                            r += core.MathUtils.PI2;
                        r = by + (r + this.data.offsetShearY * core.MathUtils.degRad) * shearMix;
                        var s = Math.sqrt(b * b + d * d);
                        m.c = Math.cos(r) * s;
                        m.d = Math.sin(r) * s;
                        modified = true;
                    }
                    if (modified)
                        bone.appliedValid = false;
                }
            };
            TransformConstraint.prototype.getOrder = function () {
                return this.data.order;
            };
            return TransformConstraint;
        }());
        core.TransformConstraint = TransformConstraint;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var TransformConstraintData = (function () {
            function TransformConstraintData(name) {
                this.order = 0;
                this.bones = new Array();
                this.rotateMix = 0;
                this.translateMix = 0;
                this.scaleMix = 0;
                this.shearMix = 0;
                this.offsetRotation = 0;
                this.offsetX = 0;
                this.offsetY = 0;
                this.offsetScaleX = 0;
                this.offsetScaleY = 0;
                this.offsetShearY = 0;
                if (name == null)
                    throw new Error("name cannot be null.");
                this.name = name;
            }
            return TransformConstraintData;
        }());
        core.TransformConstraintData = TransformConstraintData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    var core;
    (function (core) {
        var IntSet = (function () {
            function IntSet() {
                this.array = new Array();
            }
            IntSet.prototype.add = function (value) {
                var contains = this.contains(value);
                this.array[value | 0] = value | 0;
                return !contains;
            };
            IntSet.prototype.contains = function (value) {
                return this.array[value | 0] != undefined;
            };
            IntSet.prototype.remove = function (value) {
                this.array[value | 0] = undefined;
            };
            IntSet.prototype.clear = function () {
                this.array.length = 0;
            };
            return IntSet;
        }());
        core.IntSet = IntSet;
        var Color = (function () {
            function Color(r, g, b, a) {
                if (r === void 0) { r = 0; }
                if (g === void 0) { g = 0; }
                if (b === void 0) { b = 0; }
                if (a === void 0) { a = 0; }
                this.r = r;
                this.g = g;
                this.b = b;
                this.a = a;
            }
            Color.prototype.set = function (r, g, b, a) {
                this.r = r;
                this.g = g;
                this.b = b;
                this.a = a;
                this.clamp();
                return this;
            };
            Color.prototype.setFromColor = function (c) {
                this.r = c.r;
                this.g = c.g;
                this.b = c.b;
                this.a = c.a;
                return this;
            };
            Color.prototype.setFromString = function (hex) {
                hex = hex.charAt(0) == '#' ? hex.substr(1) : hex;
                this.r = parseInt(hex.substr(0, 2), 16) / 255.0;
                this.g = parseInt(hex.substr(2, 2), 16) / 255.0;
                this.b = parseInt(hex.substr(4, 2), 16) / 255.0;
                this.a = (hex.length != 8 ? 255 : parseInt(hex.substr(6, 2), 16)) / 255.0;
                return this;
            };
            Color.prototype.add = function (r, g, b, a) {
                this.r += r;
                this.g += g;
                this.b += b;
                this.a += a;
                this.clamp();
                return this;
            };
            Color.prototype.clamp = function () {
                if (this.r < 0)
                    this.r = 0;
                else if (this.r > 1)
                    this.r = 1;
                if (this.g < 0)
                    this.g = 0;
                else if (this.g > 1)
                    this.g = 1;
                if (this.b < 0)
                    this.b = 0;
                else if (this.b > 1)
                    this.b = 1;
                if (this.a < 0)
                    this.a = 0;
                else if (this.a > 1)
                    this.a = 1;
                return this;
            };
            return Color;
        }());
        Color.WHITE = new Color(1, 1, 1, 1);
        Color.RED = new Color(1, 0, 0, 1);
        Color.GREEN = new Color(0, 1, 0, 1);
        Color.BLUE = new Color(0, 0, 1, 1);
        Color.MAGENTA = new Color(1, 0, 1, 1);
        core.Color = Color;
        var MathUtils = (function () {
            function MathUtils() {
            }
            MathUtils.clamp = function (value, min, max) {
                if (value < min)
                    return min;
                if (value > max)
                    return max;
                return value;
            };
            MathUtils.cosDeg = function (degrees) {
                return Math.cos(degrees * MathUtils.degRad);
            };
            MathUtils.sinDeg = function (degrees) {
                return Math.sin(degrees * MathUtils.degRad);
            };
            MathUtils.signum = function (value) {
                return value > 0 ? 1 : value < 0 ? -1 : 0;
            };
            MathUtils.toInt = function (x) {
                return x > 0 ? Math.floor(x) : Math.ceil(x);
            };
            MathUtils.cbrt = function (x) {
                var y = Math.pow(Math.abs(x), 1 / 3);
                return x < 0 ? -y : y;
            };
            return MathUtils;
        }());
        MathUtils.PI = 3.1415927;
        MathUtils.PI2 = MathUtils.PI * 2;
        MathUtils.radiansToDegrees = 180 / MathUtils.PI;
        MathUtils.radDeg = MathUtils.radiansToDegrees;
        MathUtils.degreesToRadians = MathUtils.PI / 180;
        MathUtils.degRad = MathUtils.degreesToRadians;
        core.MathUtils = MathUtils;
        var Utils = (function () {
            function Utils() {
            }
            Utils.arrayCopy = function (source, sourceStart, dest, destStart, numElements) {
                for (var i = sourceStart, j = destStart; i < sourceStart + numElements; i++, j++) {
                    dest[j] = source[i];
                }
            };
            Utils.setArraySize = function (array, size, value) {
                if (value === void 0) { value = 0; }
                var oldSize = array.length;
                if (oldSize == size)
                    return array;
                array.length = size;
                if (oldSize < size) {
                    for (var i = oldSize; i < size; i++)
                        array[i] = value;
                }
                return array;
            };
            Utils.ensureArrayCapacity = function (array, size, value) {
                if (value === void 0) { value = 0; }
                if (array.length >= size)
                    return array;
                return Utils.setArraySize(array, size, value);
            };
            Utils.newArray = function (size, defaultValue) {
                var array = new Array(size);
                for (var i = 0; i < size; i++)
                    array[i] = defaultValue;
                return array;
            };
            Utils.newFloatArray = function (size) {
                if (Utils.SUPPORTS_TYPED_ARRAYS) {
                    return new Float32Array(size);
                }
                else {
                    var array = new Array(size);
                    for (var i = 0; i < array.length; i++)
                        array[i] = 0;
                    return array;
                }
            };
            Utils.toFloatArray = function (array) {
                return Utils.SUPPORTS_TYPED_ARRAYS ? new Float32Array(array) : array;
            };
            return Utils;
        }());
        Utils.SUPPORTS_TYPED_ARRAYS = typeof (Float32Array) !== "undefined";
        core.Utils = Utils;
        var DebugUtils = (function () {
            function DebugUtils() {
            }
            DebugUtils.logBones = function (skeleton) {
                for (var i = 0; i < skeleton.bones.length; i++) {
                    var bone = skeleton.bones[i];
                    var mat = bone.matrix;
                    console.log(bone.data.name + ", " + mat.a + ", " + mat.b + ", " + mat.c + ", " + mat.d + ", " + mat.tx + ", " + mat.ty);
                }
            };
            return DebugUtils;
        }());
        core.DebugUtils = DebugUtils;
        var Pool = (function () {
            function Pool(instantiator) {
                this.items = new Array();
                this.instantiator = instantiator;
            }
            Pool.prototype.obtain = function () {
                return this.items.length > 0 ? this.items.pop() : this.instantiator();
            };
            Pool.prototype.free = function (item) {
                if (item.reset)
                    item.reset();
                this.items.push(item);
            };
            Pool.prototype.freeAll = function (items) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].reset)
                        items[i].reset();
                    this.items[i] = items[i];
                }
            };
            Pool.prototype.clear = function () {
                this.items.length = 0;
            };
            return Pool;
        }());
        core.Pool = Pool;
        var Vector2 = (function () {
            function Vector2(x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                this.x = x;
                this.y = y;
            }
            Vector2.prototype.set = function (x, y) {
                this.x = x;
                this.y = y;
                return this;
            };
            Vector2.prototype.length = function () {
                var x = this.x;
                var y = this.y;
                return Math.sqrt(x * x + y * y);
            };
            Vector2.prototype.normalize = function () {
                var len = this.length();
                if (len != 0) {
                    this.x /= len;
                    this.y /= len;
                }
                return this;
            };
            return Vector2;
        }());
        core.Vector2 = Vector2;
        var TimeKeeper = (function () {
            function TimeKeeper() {
                this.maxDelta = 0.064;
                this.framesPerSecond = 0;
                this.delta = 0;
                this.totalTime = 0;
                this.lastTime = Date.now() / 1000;
                this.frameCount = 0;
                this.frameTime = 0;
            }
            TimeKeeper.prototype.update = function () {
                var now = Date.now() / 1000;
                this.delta = now - this.lastTime;
                this.frameTime += this.delta;
                this.totalTime += this.delta;
                if (this.delta > this.maxDelta)
                    this.delta = this.maxDelta;
                this.lastTime = now;
                this.frameCount++;
                if (this.frameTime > 1) {
                    this.framesPerSecond = this.frameCount / this.frameTime;
                    this.frameTime = 0;
                    this.frameCount = 0;
                }
            };
            return TimeKeeper;
        }());
        core.TimeKeeper = TimeKeeper;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    function isJson(resource) {
        var TYPE = PIXI.loaders.Resource.TYPE;
        if (TYPE) {
            return resource.type === TYPE.JSON;
        }
        return resource.isJson;
    }
    function atlasParser() {
        return function (resource, next) {
            if (!resource.data ||
                !isJson(resource) ||
                !resource.data.bones) {
                return next();
            }
            var metadataSkeletonScale = resource.metadata ? resource.metadata.spineSkeletonScale : null;
            var metadataAtlas = resource.metadata ? resource.metadata.spineAtlas : null;
            if (metadataAtlas === false) {
                return next();
            }
            if (metadataAtlas && metadataAtlas.pages) {
                var spineJsonParser = new pixi_spine.core.SkeletonJson(new pixi_spine.core.AtlasAttachmentLoader(metadataAtlas));
                var skeletonData = spineJsonParser.readSkeletonData(resource.data);
                resource.spineData = skeletonData;
                resource.spineAtlas = metadataAtlas;
                return next();
            }
            var metadataAtlasSuffix = '.atlas';
            if (resource.metadata && resource.metadata.spineAtlasSuffix) {
                metadataAtlasSuffix = resource.metadata.spineAtlasSuffix;
            }
            var atlasPath = resource.url.substr(0, resource.url.lastIndexOf('.')) + metadataAtlasSuffix;
            atlasPath = atlasPath.replace(this.baseUrl, '');
            var atlasOptions = {
                crossOrigin: resource.crossOrigin,
                xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.TEXT,
                metadata: resource.metadata ? resource.metadata.spineMetadata : null,
                parentResource: resource
            };
            var imageOptions = {
                crossOrigin: resource.crossOrigin,
                metadata: resource.metadata ? resource.metadata.imageMetadata : null,
                parentResource: resource
            };
            var baseUrl = resource.url.substr(0, resource.url.lastIndexOf('/') + 1);
            baseUrl = baseUrl.replace(this.baseUrl, '');
            var adapter = imageLoaderAdapter(this, resource.name + '_atlas_page_', baseUrl, imageOptions);
            this.add(resource.name + '_atlas', atlasPath, atlasOptions, function (atlasResource) {
                new pixi_spine.core.TextureAtlas(atlasResource.xhr.responseText, adapter, function (spineAtlas) {
                    var spineJsonParser = new pixi_spine.core.SkeletonJson(new pixi_spine.core.AtlasAttachmentLoader(spineAtlas));
                    if (metadataSkeletonScale) {
                        spineJsonParser.scale = metadataSkeletonScale;
                    }
                    var skeletonData = spineJsonParser.readSkeletonData(resource.data);
                    resource.spineData = skeletonData;
                    resource.spineAtlas = spineAtlas;
                    next();
                });
            });
        };
    }
    pixi_spine.atlasParser = atlasParser;
    function imageLoaderAdapter(loader, namePrefix, baseUrl, imageOptions) {
        if (baseUrl && baseUrl.lastIndexOf('/') !== (baseUrl.length - 1)) {
            baseUrl += '/';
        }
        return function (line, callback) {
            var name = namePrefix + line;
            var url = baseUrl + line;
            loader.add(name, url, imageOptions, function (resource) {
                callback(resource.texture.baseTexture);
            });
        };
    }
    pixi_spine.imageLoaderAdapter = imageLoaderAdapter;
    function syncImageLoaderAdapter(baseUrl, crossOrigin) {
        if (baseUrl && baseUrl.lastIndexOf('/') !== (baseUrl.length - 1)) {
            baseUrl += '/';
        }
        return function (line, callback) {
            callback(PIXI.BaseTexture.fromImage(line, crossOrigin));
        };
    }
    pixi_spine.syncImageLoaderAdapter = syncImageLoaderAdapter;
    PIXI.loaders.Loader.addPixiMiddleware(atlasParser);
    PIXI.loader.use(atlasParser());
})(pixi_spine || (pixi_spine = {}));
(function (pixi_spine) {
    pixi_spine.core.Bone.yDown = true;
    var tempRgb = [0, 0, 0];
    var SpineSprite = (function (_super) {
        __extends(SpineSprite, _super);
        function SpineSprite(tex) {
            return _super.call(this, tex) || this;
        }
        return SpineSprite;
    }(PIXI.Sprite));
    pixi_spine.SpineSprite = SpineSprite;
    var SpineMesh = (function (_super) {
        __extends(SpineMesh, _super);
        function SpineMesh(texture, vertices, uvs, indices, drawMode) {
            return _super.call(this, texture, vertices, uvs, indices, drawMode) || this;
        }
        return SpineMesh;
    }(PIXI.mesh.Mesh));
    pixi_spine.SpineMesh = SpineMesh;
    var Spine = (function (_super) {
        __extends(Spine, _super);
        function Spine(spineData) {
            var _this = _super.call(this) || this;
            _this.hackTextureBySlotName = function (slotName, texture, size) {
                if (texture === void 0) { texture = null; }
                if (size === void 0) { size = null; }
                var index = this.skeleton.findSlotIndex(slotName);
                if (index == -1) {
                    return false;
                }
                return this.hackTextureBySlotIndex(index, texture, size);
            };
            if (!spineData) {
                throw new Error('The spineData param is required.');
            }
            if ((typeof spineData) === "string") {
                throw new Error('spineData param cant be string. Please use spine.Spine.fromAtlas("YOUR_RESOURCE_NAME") from now on.');
            }
            _this.spineData = spineData;
            _this.skeleton = new pixi_spine.core.Skeleton(spineData);
            _this.skeleton.updateWorldTransform();
            _this.stateData = new pixi_spine.core.AnimationStateData(spineData);
            _this.state = new pixi_spine.core.AnimationState(_this.stateData);
            _this.slotContainers = [];
            for (var i = 0, n = _this.skeleton.slots.length; i < n; i++) {
                var slot = _this.skeleton.slots[i];
                var attachment = slot.attachment;
                var slotContainer = new PIXI.Container();
                _this.slotContainers.push(slotContainer);
                _this.addChild(slotContainer);
                if (attachment instanceof pixi_spine.core.RegionAttachment) {
                    var spriteName = attachment.region.name;
                    var sprite = _this.createSprite(slot, attachment, spriteName);
                    slot.currentSprite = sprite;
                    slot.currentSpriteName = spriteName;
                    slotContainer.addChild(sprite);
                }
                else if (attachment instanceof pixi_spine.core.MeshAttachment) {
                    var mesh = _this.createMesh(slot, attachment);
                    slot.currentMesh = mesh;
                    slot.currentMeshName = attachment.name;
                    slotContainer.addChild(mesh);
                }
                else {
                    continue;
                }
            }
            _this.autoUpdate = true;
            _this.tintRgb = new Float32Array([1, 1, 1]);
            return _this;
        }
        Object.defineProperty(Spine.prototype, "autoUpdate", {
            get: function () {
                return (this.updateTransform === Spine.prototype.autoUpdateTransform);
            },
            set: function (value) {
                this.updateTransform = value ? Spine.prototype.autoUpdateTransform : PIXI.Container.prototype.updateTransform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Spine.prototype, "tint", {
            get: function () {
                return PIXI.utils.rgb2hex(this.tintRgb);
            },
            set: function (value) {
                this.tintRgb = PIXI.utils.hex2rgb(value, this.tintRgb);
            },
            enumerable: true,
            configurable: true
        });
        Spine.prototype.update = function (dt) {
            this.state.update(dt);
            this.state.apply(this.skeleton);
            this.skeleton.updateWorldTransform();
            var drawOrder = this.skeleton.drawOrder;
            var slots = this.skeleton.slots;
            for (var i = 0, n = drawOrder.length; i < n; i++) {
                this.children[i] = this.slotContainers[drawOrder[i].data.index];
            }
            var r0 = this.tintRgb[0];
            var g0 = this.tintRgb[1];
            var b0 = this.tintRgb[2];
            for (i = 0, n = slots.length; i < n; i++) {
                var slot = slots[i];
                var attachment = slot.attachment;
                var slotContainer = this.slotContainers[i];
                if (!attachment) {
                    slotContainer.visible = false;
                    continue;
                }
                var attColor = attachment.color;
                if (attachment instanceof pixi_spine.core.RegionAttachment) {
                    var region = attachment.region;
                    if (region) {
                        if (slot.currentMesh) {
                            slot.currentMesh.visible = false;
                            slot.currentMesh = null;
                            slot.currentMeshName = undefined;
                        }
                        var ar = region;
                        if (!slot.currentSpriteName || slot.currentSpriteName !== ar.name) {
                            var spriteName = ar.name;
                            if (slot.currentSprite) {
                                slot.currentSprite.visible = false;
                            }
                            slot.sprites = slot.sprites || {};
                            if (slot.sprites[spriteName] !== undefined) {
                                slot.sprites[spriteName].visible = true;
                            }
                            else {
                                var sprite = this.createSprite(slot, attachment, spriteName);
                                slotContainer.addChild(sprite);
                            }
                            slot.currentSprite = slot.sprites[spriteName];
                            slot.currentSpriteName = spriteName;
                        }
                    }
                    if (slotContainer.transform) {
                        var transform = slotContainer.transform;
                        var transAny = transform;
                        var lt_1 = void 0;
                        if (transAny.matrix2d) {
                            lt_1 = transAny.matrix2d;
                            transAny._dirtyVersion++;
                            transAny.version = transAny._dirtyVersion;
                            transAny.isStatic = true;
                            transAny.operMode = 0;
                        }
                        else {
                            if (transAny.position) {
                                transform = new PIXI.TransformBase();
                                slotContainer.transform = transform;
                            }
                            lt_1 = transform.localTransform;
                        }
                        slot.bone.matrix.copy(lt_1);
                    }
                    else {
                        var lt = slotContainer.localTransform || new PIXI.Matrix();
                        slot.bone.matrix.copy(lt);
                        slotContainer.localTransform = lt;
                        slotContainer.displayObjectUpdateTransform = SlotContainerUpdateTransformV3;
                    }
                    tempRgb[0] = r0 * slot.color.r * attColor.r;
                    tempRgb[1] = g0 * slot.color.g * attColor.g;
                    tempRgb[2] = b0 * slot.color.b * attColor.b;
                    slot.currentSprite.tint = PIXI.utils.rgb2hex(tempRgb);
                    slot.currentSprite.blendMode = slot.blendMode;
                }
                else if (attachment instanceof pixi_spine.core.MeshAttachment) {
                    if (slot.currentSprite) {
                        slot.currentSprite.visible = false;
                        slot.currentSprite = null;
                        slot.currentSpriteName = undefined;
                        if (slotContainer.transform) {
                            slotContainer.transform = new PIXI.TransformStatic();
                        }
                        else {
                            slotContainer.localTransform = new PIXI.Matrix();
                            slotContainer.displayObjectUpdateTransform = PIXI.DisplayObject.prototype.updateTransform;
                        }
                    }
                    if (!slot.currentMeshName || slot.currentMeshName !== attachment.name) {
                        var meshName = attachment.name;
                        if (slot.currentMesh) {
                            slot.currentMesh.visible = false;
                        }
                        slot.meshes = slot.meshes || {};
                        if (slot.meshes[meshName] !== undefined) {
                            slot.meshes[meshName].visible = true;
                        }
                        else {
                            var mesh = this.createMesh(slot, attachment);
                            slotContainer.addChild(mesh);
                        }
                        slot.currentMesh = slot.meshes[meshName];
                        slot.currentMeshName = meshName;
                    }
                    attachment.computeWorldVertices(slot, slot.currentMesh.vertices);
                    if (PIXI.VERSION[0] !== '3') {
                        var tintRgb = slot.currentMesh.tintRgb;
                        tintRgb[0] = r0 * slot.color.r * attColor.r;
                        tintRgb[1] = g0 * slot.color.g * attColor.g;
                        tintRgb[2] = b0 * slot.color.b * attColor.b;
                    }
                    slot.currentMesh.blendMode = slot.blendMode;
                }
                else {
                    slotContainer.visible = false;
                    continue;
                }
                slotContainer.visible = true;
                slotContainer.alpha = slot.color.a;
            }
        };
        ;
        Spine.prototype.setSpriteRegion = function (attachment, sprite, region) {
            sprite.region = region;
            sprite.texture = region.texture;
            if (!region.size) {
                sprite.scale.x = attachment.scaleX * attachment.width / region.originalWidth;
                sprite.scale.y = -attachment.scaleY * attachment.height / region.originalHeight;
            }
            else {
                sprite.scale.x = region.size.width / region.originalWidth;
                sprite.scale.y = -region.size.height / region.originalHeight;
            }
        };
        Spine.prototype.setMeshRegion = function (attachment, mesh, region) {
            mesh.region = region;
            mesh.texture = region.texture;
            attachment.updateUVs(region, mesh.uvs);
            mesh.dirty++;
        };
        Spine.prototype.autoUpdateTransform = function () {
            if (Spine.globalAutoUpdate) {
                this.lastTime = this.lastTime || Date.now();
                var timeDelta = (Date.now() - this.lastTime) * 0.001;
                this.lastTime = Date.now();
                this.update(timeDelta);
            }
            else {
                this.lastTime = 0;
            }
            PIXI.Container.prototype.updateTransform.call(this);
        };
        ;
        Spine.prototype.createSprite = function (slot, attachment, defName) {
            var region = attachment.region;
            if (slot.tempAttachment === attachment) {
                region = slot.tempRegion;
                slot.tempAttachment = null;
                slot.tempRegion = null;
            }
            var texture = region.texture;
            var sprite = new SpineSprite(texture);
            sprite.rotation = attachment.rotation * pixi_spine.core.MathUtils.degRad;
            sprite.anchor.x = 0.5;
            sprite.anchor.y = 0.5;
            sprite.position.x = attachment.x;
            sprite.position.y = attachment.y;
            sprite.alpha = attachment.color.a;
            sprite.region = attachment.region;
            this.setSpriteRegion(attachment, sprite, attachment.region);
            slot.sprites = slot.sprites || {};
            slot.sprites[defName] = sprite;
            return sprite;
        };
        ;
        Spine.prototype.createMesh = function (slot, attachment) {
            var region = attachment.region;
            if (slot.tempAttachment === attachment) {
                region = slot.tempRegion;
                slot.tempAttachment = null;
                slot.tempRegion = null;
            }
            var strip = new SpineMesh(region.texture, new Float32Array(attachment.regionUVs.length), new Float32Array(attachment.regionUVs.length), new Uint16Array(attachment.triangles), PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
            strip.canvasPadding = 1.5;
            strip.alpha = attachment.color.a;
            strip.region = attachment.region;
            this.setMeshRegion(attachment, strip, region);
            slot.meshes = slot.meshes || {};
            slot.meshes[attachment.name] = strip;
            return strip;
        };
        ;
        Spine.prototype.hackTextureBySlotIndex = function (slotIndex, texture, size) {
            if (texture === void 0) { texture = null; }
            if (size === void 0) { size = null; }
            var slot = this.skeleton.slots[slotIndex];
            if (!slot) {
                return false;
            }
            var attachment = slot.attachment;
            var region = attachment.region;
            if (texture) {
                region = new pixi_spine.core.TextureRegion();
                region.texture = texture;
                region.size = size;
            }
            if (slot.currentSprite && slot.currentSprite.region != region) {
                this.setSpriteRegion(attachment, slot.currentSprite, region);
                slot.currentSprite.region = region;
            }
            else if (slot.currentMesh && slot.currentMesh.region != region) {
                this.setMeshRegion(attachment, slot.currentMesh, region);
            }
            else {
                slot.tempRegion = region;
                slot.tempAttachment = attachment;
            }
            return true;
        };
        return Spine;
    }(PIXI.Container));
    Spine.globalAutoUpdate = true;
    pixi_spine.Spine = Spine;
    function SlotContainerUpdateTransformV3() {
        var pt = this.parent.worldTransform;
        var wt = this.worldTransform;
        var lt = this.localTransform;
        wt.a = lt.a * pt.a + lt.b * pt.c;
        wt.b = lt.a * pt.b + lt.b * pt.d;
        wt.c = lt.c * pt.a + lt.d * pt.c;
        wt.d = lt.c * pt.b + lt.d * pt.d;
        wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
        wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
        this.worldAlpha = this.alpha * this.parent.worldAlpha;
        this._currentBounds = null;
    }
})(pixi_spine || (pixi_spine = {}));
PIXI.spine = pixi_spine;

PIXI.DISPLAY_FLAG = {
    AUTO_CHILDREN: 0,
    AUTO_CONTAINER: 1,
    AUTO_OBJECT: 2,
    MANUAL_CONTAINER: 3
};
var WebGLRenderer = PIXI.WebGLRenderer;
var CanvasRenderer = PIXI.CanvasRenderer;
Object.assign(PIXI.Container.prototype, {
    displayList: null,
    displayChildren: null,
    displayParent: null,
    updateTransform: function () {
        if (!this.visible) {
            return;
        }
        this.containerUpdateTransform();
        if (this.displayList) {
            this.displayList.update(this);
        }
    },
    renderCanvas: function (renderer) {
        if (!this.visible) {
            this.displayOrder = 0;
            return;
        }
        this.displayOrder = renderer.incDisplayOrder();
        if (this.worldAlpha <= 0 || !this.renderable) {
            return;
        }
        if (this.displayList) {
            this.displayList.renderCanvas(this, renderer);
            return;
        }
        this.containerRenderCanvas(renderer);
    },
    renderWebGL: function (renderer) {
        if (!this.visible) {
            this.displayOrder = 0;
            return;
        }
        this.displayOrder = renderer.incDisplayOrder();
        if (this.worldAlpha <= 0 || !this.renderable) {
            return;
        }
        if (this.displayList) {
            this.displayList.renderWebGL(this, renderer);
            return;
        }
        this.containerRenderWebGL(renderer);
    },
    containerRenderWebGL: PIXI.Container.prototype.renderWebGL,
    containerRenderCanvas: PIXI.Container.prototype.renderCanvas
});
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pixi_display;
(function (pixi_display) {
    var utils = PIXI.utils;
    var DisplayGroup = (function (_super) {
        __extends(DisplayGroup, _super);
        function DisplayGroup(zIndex, sorting) {
            _super.call(this);
            this.currentIndex = 0;
            this.zIndex = 0;
            this.enableSort = false;
            this.computedChildren = [];
            this.currentDisplayList = null;
            this.currentIndex = 0;
            this.zIndex = zIndex || 0;
            this.enableSort = !!sorting;
            if (typeof sorting === 'function') {
                this.on('add', sorting);
            }
        }
        DisplayGroup.compareZOrder = function (a, b) {
            if (a.zOrder < b.zOrder) {
                return 1;
            }
            if (a.zOrder > b.zOrder) {
                return -1;
            }
            return a.updateOrder - b.updateOrder;
        };
        DisplayGroup.prototype.clear = function () {
            var list = this.computedChildren;
            for (var i = 0; i < list.length; i++) {
                var children = list[i].displayChildren;
                if (children && children.length > 0) {
                    for (var j = 0; j < children.length; j++) {
                        children[j].displayParent = null;
                    }
                    children.length = 0;
                }
                list[i].displayParent = null;
            }
            list.length = 0;
            this.currentDisplayList = null;
            this.currentIndex = 0;
        };
        DisplayGroup.prototype.add = function (displayObject) {
            displayObject.displayOrder = this.computedChildren.length;
            this.emit('add', displayObject);
            this.computedChildren.push(displayObject);
        };
        DisplayGroup.prototype.update = function () {
            // console.log("DisplayGroup:Update");
            this.emit('update');
            if (this.enableSort && this.computedChildren.length > 1) {
                this.computedChildren.sort(DisplayGroup.compareZOrder);
            }
        };
        DisplayGroup.prototype.renderWebGL = function (parentContainer, renderer) {
            var list = this.computedChildren;
            for (var j = 0; j < list.length; j++) {
                var container = list[j];
                if (container.displayFlag) {
                    container.renderWebGL(renderer);
                }
                else {
                    container.displayOrder = renderer.incDisplayOrder();
                    container._renderWebGL(renderer);
                    var children = container.displayChildren;
                    if (children && children.length) {
                        for (var k = 0; k < children.length; k++) {
                            var child = children[k];
                            child.displayOrder = renderer.incDisplayOrder();
                            if (child.displayFlag) {
                                child.renderWebGL(renderer);
                            }
                            else {
                                child._renderWebGL(renderer);
                            }
                        }
                    }
                }
            }
        };
        DisplayGroup.prototype.renderCanvas = function (parentContainer, renderer) {
            var list = this.computedChildren;
            for (var j = 0; j < list.length; j++) {
                var container = list[j];
                if (container.displayFlag) {
                    container.renderCanvas(renderer);
                }
                else {
                    container.displayOrder = renderer.incDisplayOrder();
                    container._renderCanvas(renderer);
                    var children = container.displayChildren;
                    if (children && children.length) {
                        for (var k = 0; k < children.length; k++) {
                            var child = children[k];
                            child.displayOrder = renderer.incDisplayOrder();
                            if (child.displayFlag) {
                                child.renderCanvas(renderer);
                            }
                            else {
                                child._renderCanvas(renderer);
                            }
                        }
                    }
                }
            }
        };
        return DisplayGroup;
    }(utils.EventEmitter));
    pixi_display.DisplayGroup = DisplayGroup;
})(pixi_display || (pixi_display = {}));
var pixi_display;
(function (pixi_display) {
    var utils = PIXI.utils;
    var DisplayList = (function (_super) {
        __extends(DisplayList, _super);
        function DisplayList() {
            _super.call(this);
            this.container = null;
            this.totalElements = 0;
            this.displayGroups = [];
            this.defaultDisplayGroup = new pixi_display.DisplayGroup(0, false);
        }
        DisplayList.prototype.clear = function () {
            var list = this.displayGroups;
            for (var i = 0; i < list.length; i++) {
                list[i].clear();
            }
            list.length = 0;
            this.totalElements = 0;
            this.container = null;
        };
        DisplayList.prototype.destroy = function () {
            this.clear();
        };
        DisplayList.compareZIndex = function (a, b) {
            if (a.zIndex !== b.zIndex) {
                return a.zIndex - b.zIndex;
            }
            return a.currentIndex - b.currentIndex;
        };
        DisplayList.prototype._addRecursive = function (displayObject, parent) {
            var container = displayObject;
            if (!container.visible || !container.renderable) {
                return;
            }
            var groups = this.displayGroups;
            var group = parent.displayGroup;
            container.updateOrder = this.totalElements++;
            if (container.displayGroup) {
                group = container.displayGroup;
                if (!group.currentDisplayList) {
                    group.currentDisplayList = this;
                    group.currentIndex = groups.length;
                    groups.push(group);
                }
                group.add(container);
                container.displayParent = container;
            }
            else {
                container.displayParent = parent;
                if (!parent.displayChildren) {
                    parent.displayChildren = [];
                }
                parent.displayChildren.push(container);
            }
            if (container.displayFlag !== PIXI.DISPLAY_FLAG.MANUAL_CONTAINER) {
                var children = container.children;
                if (children && children.length > 0) {
                    if (container._mask || container._filters && container._filters.length || container.displayList) {
                        container.displayFlag = PIXI.DISPLAY_FLAG.AUTO_CONTAINER;
                    }
                    else {
                        container.displayFlag = PIXI.DISPLAY_FLAG.AUTO_CHILDREN;
                        for (var i = 0; i < children.length; i++) {
                            this._addRecursive(children[i], container.displayParent);
                        }
                    }
                }
                else {
                    container.displayFlag = PIXI.DISPLAY_FLAG.AUTO_OBJECT;
                }
            }
        };
        DisplayList.prototype.update = function (parentContainer) {
            // console.log("DisplayList:Update");
            this.clear();
            var tempGroup = parentContainer.displayGroup;
            this.displayGroups.push(this.defaultDisplayGroup);
            this.defaultDisplayGroup.add(parentContainer);
            this.container = parentContainer;
            var children = parentContainer.children;
            var i = 0;
            for (i = 0; i < children.length; i++) {
                this._addRecursive(children[i], parentContainer);
            }
            var groups = this.displayGroups;
            groups.sort(DisplayList.compareZIndex);
            for (i = 0; i < groups.length; i++) {
                groups[i].currentIndex = i;
                groups[i].update();
            }
            this.emit('afterUpdate');
        };
        DisplayList.prototype.renderWebGL = function (parentContainer, renderer) {
            parentContainer.displayFlag = PIXI.DISPLAY_FLAG.AUTO_CHILDREN;
            var groups = this.displayGroups;
            for (var i = 0; i < groups.length; i++) {
                var group = groups[i];
                group.renderWebGL(parentContainer, renderer);
            }
        };
        DisplayList.prototype.renderCanvas = function (parentContainer, renderer) {
            var groups = this.displayGroups;
            for (var i = 0; i < groups.length; i++) {
                var group = groups[i];
                group.renderCanvas(parentContainer, renderer);
            }
        };
        return DisplayList;
    }(utils.EventEmitter));
    pixi_display.DisplayList = DisplayList;
})(pixi_display || (pixi_display = {}));
Object.assign(PIXI.DisplayObject.prototype, {
    displayGroup: null,
    displayFlag: PIXI.DISPLAY_FLAG.AUTO_CHILDREN,
    displayParent: null,
    zOrder: 0,
    updateOrder: 0,
    displayOrder: 0
});
var pixi_display;
(function (pixi_display) {
    var InteractionManager = PIXI.interaction.InteractionManager;
    Object.assign(InteractionManager.prototype, {
        _queue: [[], []],
        _displayProcessInteractive: function (point, displayObject, hitTestOrder, interactive) {
            if (!displayObject || !displayObject.visible) {
                return 0;
            }
            var hit = 0, interactiveParent = interactive = displayObject.interactive || interactive;
            if (displayObject.hitArea) {
                interactiveParent = false;
            }
            var mask = displayObject._mask;
            if (hitTestOrder < Infinity && mask) {
                if (!mask.containsPoint(point)) {
                    hitTestOrder = Infinity;
                }
            }
            if (hitTestOrder < Infinity && displayObject.filterArea) {
                if (!displayObject.filterArea.contains(point.x, point.y)) {
                    hitTestOrder = Infinity;
                }
            }
            var children = displayObject.children;
            if (displayObject.interactiveChildren && children) {
                for (var i = children.length - 1; i >= 0; i--) {
                    var child = children[i];
                    var hitChild = this._displayProcessInteractive(point, child, hitTestOrder, interactiveParent);
                    if (hitChild) {
                        if (!child.parent) {
                            continue;
                        }
                        hit = hitChild;
                        hitTestOrder = hitChild;
                    }
                }
            }
            if (interactive) {
                if (hitTestOrder < displayObject.displayOrder) {
                    if (displayObject.hitArea) {
                        displayObject.worldTransform.applyInverse(point, this._tempPoint);
                        if (displayObject.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) {
                            hit = displayObject.displayOrder;
                        }
                    }
                    else if (displayObject.containsPoint) {
                        if (displayObject.containsPoint(point)) {
                            hit = displayObject.displayOrder;
                        }
                    }
                }
                if (displayObject.interactive) {
                    this._queueAdd(displayObject, hit);
                }
            }
            return hit;
        },
        processInteractive: function (strangeStuff, displayObject, func, hitTest, interactive) {
            var interactionEvent = null;
            var point = null;
            if (strangeStuff.data &&
                strangeStuff.data.global) {
                interactionEvent = strangeStuff;
                point = interactionEvent.data.global;
            }
            else {
                point = strangeStuff;
            }
            this._startInteractionProcess();
            this._displayProcessInteractive(point, displayObject, hitTest ? 0 : Infinity, false);
            this._finishInteractionProcess(interactionEvent, func);
        },
        _startInteractionProcess: function () {
            this._eventDisplayOrder = 1;
            if (!this._queue) {
                this._queue = [[], []];
            }
            this._queue[0].length = 0;
            this._queue[1].length = 0;
        },
        _queueAdd: function (displayObject, order) {
            var queue = this._queue;
            if (order < this._eventDisplayOrder) {
                queue[0].push(displayObject);
            }
            else {
                if (order > this._eventDisplayOrder) {
                    this._eventDisplayOrder = order;
                    var q = queue[1];
                    for (var i = 0; i < q.length; i++) {
                        queue[0].push(q[i]);
                    }
                    queue[1].length = 0;
                }
                queue[1].push(displayObject);
            }
        },
        _finishInteractionProcess: function (event, func) {
            var queue = this._queue;
            var q = queue[0];
            var i = 0;
            for (; i < q.length; i++) {
                if (event) {
                    func(event, q[i], false);
                }
                else {
                    func(q[i], false);
                }
            }
            q = queue[1];
            for (i = 0; i < q.length; i++) {
                if (event) {
                    if (!event.target) {
                        event.target = q[i];
                    }
                    func(event, q[i], true);
                }
                else {
                    func(q[i], true);
                }
            }
        }
    });
})(pixi_display || (pixi_display = {}));
Object.assign(WebGLRenderer.prototype, {
    _lastDisplayOrder: 0,
    incDisplayOrder: function () {
        return ++this._lastDisplayOrder;
    },
    _oldRender: WebGLRenderer.prototype.render,
    render: function (displayObject, renderTexture, clear, transform, skipUpdateTransform) {
        if (!renderTexture) {
            this._lastDisplayOrder = 0;
        }
        this._oldRender(displayObject, renderTexture, clear, transform, skipUpdateTransform);
    }
});
Object.assign(CanvasRenderer.prototype, {
    _lastDisplayOrder: 0,
    incDisplayOrder: function () {
        return ++this._lastDisplayOrder;
    },
    _oldRender: CanvasRenderer.prototype.render,
    render: function (displayObject, renderTexture, clear, transform, skipUpdateTransform) {
        if (!renderTexture) {
            this._lastDisplayOrder = 0;
        }
        this._oldRender(displayObject, renderTexture, clear, transform, skipUpdateTransform);
    }
});
Object.assign(PIXI, {
    display: pixi_display,
    DisplayGroup: pixi_display.DisplayGroup,
    DisplayList: pixi_display.DisplayList
});
/**
 * @license
 * pixi-multistyle-text - v0.1.1
 * Copyright (c) 2014, Tommy Leunen <tommy.leunen@gmail.com> (http://tommyleunen.com/)
 * Released under the MIT license
 * See https://github.com/tleunen/pixi-multistyle-text for more details
 */
(function(){
    var root = this;
    var PIXI = root.PIXI;

if(!PIXI) return;

/**
 * A Multi-Style Text Object will create a line or multiple lines of text, using tags to specify different styles.
 * A tag is similar to an html tag, except you can use whatever keyword you want. (e.g. <myTag>My text</myTag>)
 *
 * @class MultiStyleText
 * @extends Text
 * @constructor
 * @param text {String} The copy that you would like the text to display
 * @param [textStyles] {Object.<string, Style>} The text styles object parameters. A key of this object is a tag name, and the content must be a style object. The key `def` specifies the default styles. The style object is the same as the one in Pixi.Text.
 * @param [alignmentStyle] {Object} The global style parameters
 * @param [alignmentStyle.align='left'] {String} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 * @param [alignmentStyle.wordWrap=false] {Boolean} Indicates if word wrap should be used
 * @param [alignmentStyle.wordWrapWidth=100] {Number} The width at which text will wrap, it needs wordWrap to be set to true
 */
var MultiStyleText = function(text, textStyles, alignmentStyle)
{
    PIXI.Text.call(this, text, alignmentStyle);

    this.setTextStyles(textStyles);
    this.prev_text = undefined;
};

// constructor
MultiStyleText.prototype = Object.create(PIXI.Text.prototype);
MultiStyleText.prototype.constructor = MultiStyleText;

/**
 * Set the global alignment style of the text
 *
 * @method setAlignmentStyle
 * @param [style] {Object} The global alignment style parameters
 * @param [style.align='left'] {String} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 * @param [style.wordWrap=false] {Boolean} Indicates if word wrap should be used
 * @param [style.wordWrapWidth=100] {Number} The width at which text will wrap
 */
MultiStyleText.prototype.setAlignmentStyle =
MultiStyleText.prototype.setStyle = function(style)
{
    style = style || {};
    style.align = style.align || 'left';
    style.wordWrap = style.wordWrap || false;
    style.wordWrapWidth = style.wordWrapWidth || 100;

    this.style = style;
    this.dirty = true;
};

function setDefaultTextStyle(style) {
    style = style || {};
    style.font = style.font || 'bold 20pt Arial';
    style.fill = style.fill || 'black';
    style.stroke = style.stroke || 'black'; //provide a default, see: https://github.com/GoodBoyDigital/pixi.js/issues/136
    style.strokeThickness = style.strokeThickness || 0;

    style.dropShadow = style.dropShadow || false;
    style.dropShadowAngle = style.dropShadowAngle || Math.PI / 6;
    style.dropShadowDistance = style.dropShadowDistance || 4;
    style.dropShadowColor = style.dropShadowColor || 'black';
}

/**
 * Set the text styles for each tag
 * Use the key `def` to specify the default styles
 *
 * @method setTextStyles
 * @param [styles] {Object.<string,Style>} The style map where the key is the tag name.
 */
MultiStyleText.prototype.setTextStyles = function(styles)
{
    for(var styleId in styles) {
        if(styles.hasOwnProperty(styleId)) {
            setDefaultTextStyle(styles[styleId]);
        }
    }

    // we need a `def` style
    if(!styles.def) {
        styles.def = {};
        setDefaultTextStyle(styles.def);
    }

    this.textStyles = styles;
    this.dirty = true;
};

/**
 * Get the text data with each text group using specific styles
 *
 * @private
 * @method _getTextDataPerLine
 * @param [lines] {Array} The lines of text
 */
MultiStyleText.prototype._getTextDataPerLine = function(lines) {
    var outputTextData = [];

    var re = /<\/?([a-z]+)>/g;
    var currentStyle = this.textStyles.def;

    // determine the group of word for each line
    for(var i=0; i<lines.length; i++) {
        var lineTextData = [];

        // find tags inside the string
        var matches = [];
        var matchArray;
        while ( (matchArray = re.exec(lines[i])) !== null && matches.push(matchArray));

        // if there is no match, we still need to add the line with the default style
        if(!matches.length) {
            lineTextData.push({
                text: lines[i],
                style: currentStyle
            });
        }
        else {
            // We got a match! add the text with the needed style
            var currentSearchIdx = 0;
            for(var j=0; j<matches.length; j++) {
                if(matches[j].index > currentSearchIdx) {
                    lineTextData.push({
                        text: lines[i].substring(currentSearchIdx, matches[j].index),
                        style: currentStyle
                    });
                }

                // reset the style if end of tag
                if(matches[j][0][1] == '/') currentStyle = this.textStyles.def;
                // set the current style
                else currentStyle = this.textStyles[matches[j][1]] || this.textStyles.def;

                // update the current search index
                currentSearchIdx = matches[j].index + matches[j][0].length;
            }

            // is there any character left?
            if(currentSearchIdx < lines[i].length) {
                lineTextData.push({
                    text: lines[i].substring(currentSearchIdx),
                    style: this.textStyles.def
                });
            }
        }

        outputTextData.push(lineTextData);
    }

    return outputTextData;
};


/**
 * Renders text and updates it when needed
 *
 * @method updateText
 * @private
 */
 
MultiStyleText.prototype.updateText = function()
{
    if(this.prev_text === this.text) {
        return;
    }

    this.prev_text = this.text;
    this.texture.baseTexture.resolution = this.resolution;
    var outputText = this.text;
    var textStyles = this.textStyles;
    var i, j;
    
    // word wrap
    // preserve original text
    if(this.style.wordWrap) outputText = this.wordWrap(this.text);

    //split text into lines
    var lines = outputText.split(/(?:\r\n|\r|\n)/);

    // get the text data with specific styles
    var outputTextData = this._getTextDataPerLine(lines);

    // calculate text width and height
    var lineWidths = [];
    var lineHeights = [];
    var maxLineWidth = 0;
    for(i=0; i<lines.length; i++) {
        var lineWidth = 0;
        var lineHeight = 0;
        for(j=0; j<outputTextData[i].length; j++) {
            this.context.font = outputTextData[i][j].style.font;

            // add lineWidth inside the text data
            outputTextData[i][j].width = this.context.measureText(outputTextData[i][j].text).width;
            lineWidth += outputTextData[i][j].width;

            // add the fontProperties inside the text data
            outputTextData[i][j].fontProperties = this.determineFontProperties(outputTextData[i][j].style.font);
            lineHeight = Math.max(lineHeight, outputTextData[i][j].fontProperties.fontSize + outputTextData[i][j].style.strokeThickness);
        }

        lineWidths[i] = lineWidth;
        lineHeights[i] = lineHeight;
        maxLineWidth = Math.max(maxLineWidth, lineWidth);
    }

    // transform styles in array
    var stylesArray = Object.keys(textStyles).map(function(k) {
        return textStyles[k];
    });


    var maxStrokeThickness = stylesArray.reduce(function(prev, curr) {
        return Math.max(prev, curr.strokeThickness);
    }, 0);
    var maxDropShadowDistance = stylesArray.reduce(function(prev, curr) {
        var value = curr.dropShadow ? curr.dropShadowDistance : 0;
        return Math.max(prev, value);
    }, 0);

    // define the right width and height
    var width = maxLineWidth + maxStrokeThickness + maxDropShadowDistance;
    var height = (Math.max.apply(null, lineHeights) * lines.length) + maxDropShadowDistance;

    this.canvas.width = ( width + this.context.lineWidth ) * this.resolution;
    this.canvas.height = height * this.resolution;

    this.context.scale( this.resolution, this.resolution);

    if(navigator.isCocoonJS) this.context.clearRect(0,0,this.canvas.width,this.canvas.height);


    this.context.textBaseline = 'alphabetic';
    this.context.lineJoin = 'round';

    // Draw the text
    var linePositionX;
    var linePositionY;
    for(i=0; i<outputTextData.length; i++) {
        var line = outputTextData[i];
        linePositionX = 0;

        for(j=0; j<line.length; j++) {
            var textStyle = line[j].style;
            var text = line[j].text;
            var fontProperties = line[j].fontProperties;

            this.context.font = textStyle.font;
            this.context.strokeStyle = textStyle.stroke;
            this.context.lineWidth = textStyle.strokeThickness;

            linePositionX += maxStrokeThickness / 2;
            linePositionY = (maxStrokeThickness / 2 + i * lineHeights[i]) + fontProperties.ascent;

            if(this.style.align === 'right')
            {
                linePositionX += maxLineWidth - lineWidths[i];
            }
            else if(this.style.align === 'center')
            {
                linePositionX += (maxLineWidth - lineWidths[i]) / 2;
            }

            // draw shadow
            if(textStyle.dropShadow) {
                this.context.fillStyle = textStyle.dropShadowColor;

                var xShadowOffset = Math.sin(textStyle.dropShadowAngle) * textStyle.dropShadowDistance;
                var yShadowOffset = Math.cos(textStyle.dropShadowAngle) * textStyle.dropShadowDistance;

                if(textStyle.fill)
                {
                    this.context.fillText(text, linePositionX + xShadowOffset, linePositionY + yShadowOffset);
                }
            }

            // set canvas text styles
            this.context.fillStyle = textStyle.fill;

            // draw lines
            if(textStyle.stroke && textStyle.strokeThickness)
            {
                this.context.strokeText(text, linePositionX, linePositionY);
            }

            if(textStyle.fill)
            {
                this.context.fillText(text, linePositionX, linePositionY);
            }

            // set Position X to the line width
            // remove the strokeThickness otherwise the text will be to far from the previous group
            linePositionX += line[j].width;
            linePositionX -= maxStrokeThickness / 2;
        }
    }

    this.updateTexture();
};


PIXI.MultiStyleText = MultiStyleText;

}).call(this);
////////////////////////////ver.0.0.1//////////////////////////////////////////
////////This script need pixi.js library(ver 3.x) and TweenMax library/////////
////////////////////////////ver.0.0.2//////////////////////////////////////////
////////1) button : add scale type - "scaleDown", "scaleUp", "none"(defaut)////
///////////////////////////////////////////////////////////////////////////////
////////////////////////////ver.0.0.3//////////////////////////////////////////
////////1) buttonManager : deprecated//////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var GUMA = GUMA || {};

GUMA.txt2JsonConverter = function(){
	this.fileReader = new XMLHttpRequest();
	
	this.files = [];
	
	this.jsonObjects = {};
	
	this.state = undefined;
	
	this.onceCallBack = null;
	
	this._onUpdate = this.onUpdate.bind(this);

	this.onUpdate();
};

GUMA.txt2JsonConverter.constructor = GUMA.txt2JsonConverter;

GUMA.txt2JsonConverter.prototype.add = function(key, url){
	var fileKeyPath = {};
	fileKeyPath.key = key;
	fileKeyPath.url = url;
	
	this.files.push(fileKeyPath);
};

GUMA.txt2JsonConverter.prototype.load = function(){	
	if(this.files.length <= 0){
		this.state = "loadComplete";
		return;
	}
	
	var self = this;
	var fileReader = this.fileReader;
	var file = this.files.shift();
	
	this.fileReader.open("GET", file.url, true);
	this.fileReader.onreadystatechange = txt2JsonObj;
	this.fileReader.send(null);
	function txt2JsonObj(){
		if (fileReader.readyState === 4) {
			if (fileReader.status === 200 || this.target.status == 0) {
				var jsonText = fileReader.responseText;
				var jsonObj = JSON.parse(jsonText);
				var keyName = file.key;
				self.jsonObjects[keyName] = jsonObj;
				self.load();
			}
		}
	}
};

GUMA.txt2JsonConverter.prototype.once = function(funcName){
	this.onceCallBack = funcName;
};

GUMA.txt2JsonConverter.prototype.onUpdate = function(){
	if(this.state !== "loadComplete")
		window.requestAnimationFrame(this._onUpdate);
	else {
		this.onceCallBack.apply();
	}
};

GUMA.txtJsonConverter = new GUMA.txt2JsonConverter();
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Button///////////////////////////////////////////////////////////
GUMA.button = function(parent, url, px, py, str_scaleType, ax, ay, sx, sy){
	if(str_scaleType === undefined) str_scaleType = "none";//"scaleDown", "scaleUp", "none"
	if(ax === undefined) ax = 0.5;
	if(ay === undefined) ay = 0.5;
	if(sx === undefined) sx = 1;
	if(sy === undefined) sy = 1;

	this.sprite = PIXI.Sprite.fromFrame(url);
	this.sprite.position.set(px, py);
	this.sprite.anchor.set(ax, ay);
	this.sprite.scale.set(sx, sy);
	this.sprite.interactive = true;
	
	parent.addChild(this.sprite);
	
	this.tweenTime = 0.1;
	this.scaleDown_x = this.sprite.scale.x - 0.1;//default minimum scale
	this.scaleDown_y = this.sprite.scale.x - 0.1;
	this.scaleUp_x = this.sprite.scale.x + 0.2;
	this.scaleUp_y = this.sprite.scale.y + 0.2;
	this.effTint = 0x808080;
	this.originTint = this.sprite.tint;
	this.originScaleX = this.sprite.scale.x;
	this.originScaleY = this.sprite.scale.y;
	
	if(this.originScaleX < 0)
		this.scaleDown_x = this.originScaleX + 0.1;	
	else
		this.scaleDown_x = this.originScaleX - 0.1;

	if(this.originScaleY < 0)
		this.scaleDown_y = this.originScaleY + 0.1;
	else
		this.scaleDown_y = this.originScaleY - 0.1;

	this.timeLine = new TimelineLite();

	this.scale_type = str_scaleType;
	
	this.init();
};

GUMA.button.constructor = GUMA.button;

GUMA.button.prototype.setScaleType = function(str_scaleType){
	this.scale_type = str_scaleType;
};

GUMA.button.prototype.setOriginScale = function(x, y){
	if(x === undefined) x = this.originScaleX;
	if(y === undefined) y = x;
	this.sprite.scale.set(x, y);
	this.originScaleX = x;
	this.originScaleY = y;


	if(this.originScaleX < 0)
		this.scaleDown_x = this.originScaleX + 0.1;	
	else
		this.scaleDown_x = this.originScaleX - 0.1;

	if(this.originScaleY < 0)
		this.scaleDown_y = this.originScaleY + 0.1;
	else
		this.scaleDown_y = this.originScaleY - 0.1;
};

GUMA.button.prototype.setOriginTint = function(tint_value){
	this.originTint = tint_value;
	this.sprite.tint = tint_value;
};

GUMA.button.prototype.setCallback = function(callBack, THIS){
	if(callBack === undefined) return;
	if(THIS !== undefined)
		callBack = callBack.bind(THIS);
	
	this.sprite.on("click", callBack);
	this.sprite.on("tap", callBack);
};

GUMA.button.prototype.init = function(){
	var self = this;
	this.sprite.interactive = true;
	
	this.sprite.on("mousedown", function(){
		if(self.scale_type === "scaleDown")
			TweenLite.to(this, self.tweenTime, {scaleX:self.scaleDown_x, scaleY:self.scaleDown_y, ease:Power1.easeOut});
		else if(self.scale_type === "scaleUp")
			TweenLite.to(this, self.tweenTime, {scaleX:self.scaleUp_x, scaleY:self.scaleUp_y, ease:Power1.easeOut});

		this.tint = self.effTint;
	});
	
	this.sprite.on("mouseup", function(e){
		this.tint = self.originTint;
		TweenLite.to(this, self.tweenTime, {scaleX:self.originScaleX, scaleY:self.originScaleY, ease:Power1.easeOut});
	});
	
	this.sprite.on("mouseupoutside", function(e){
		this.tint = self.originTint;
		TweenLite.to(this, self.tweenTime, {scaleX:self.originScaleX, scaleY:self.originScaleY, ease:Power1.easeOut});
	});
	
	this.sprite.on("touchstart", function(){
		if(self.scale_type === "scaleDown")
			TweenLite.to(this, self.tweenTime, {scaleX:self.scaleDown_x, scaleY:self.scaleDown_y, ease:Power1.easeOut});
		else if(self.scale_type === "scaleUp")
			TweenLite.to(this, self.tweenTime, {scaleX:self.scaleUp_x, scaleY:self.scaleUp_y, ease:Power1.easeOut});
		this.tint = self.effTint;
	});
	
	this.sprite.on("touchend", function(e){
		TweenLite.to(this, self.tweenTime, {scaleX:self.originScaleX, scaleY:self.originScaleY, ease:Power1.easeOut});
		this.tint = self.originTint;
	});
	
	this.sprite.on("touchendoutside", function(e){
		TweenLite.to(this, self.tweenTime, {scaleX:self.originScaleX, scaleY:self.originScaleY, ease:Power1.easeOut});
		this.tint = self.originTint;
	});
};

Object.defineProperties(GUMA.button.prototype, {
	visible: {
		get: function(){return this.sprite.visible;},
		set: function(value){this.sprite.visible = value}
	},
	position: {
		get: function(){return this.sprite.position;}
	},
	scale: {
		get: function(){return this.sprite.scale;}
	}
});

GUMA.button.prototype.setDownAction = function(callBack, THIS){
	if(callBack === undefined) return;
	if(THIS !== undefined)
		callBack = callBack.bind(THIS);

	this.sprite.on("mousedown", callBack);
	this.sprite.on("touchstart", callBack);
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Scroll View///////////////////////////////////////////////////////////
/**
 * 17.05.25
 * anchor는 x, y 0.5를 기준으로 함.
 * 9slice 도 쓸 수 있도록 적용.
 * 굳이 slot class(GUMA.scrollSlot)를 쓸 필요 없음.
 * scrollView 인스턴스의 viewList에 slot으로 쓰고 싶은 애들을 넣어줘야 함.
 * 행, 열 숫자 설정할 수 있도록 업데이트.
 * */
GUMA.scrollView = function(parent, width, height, x, y, scroll_type){
	var self = this;
	/////explain////////
	//type: horizontal///
	//limitPos             this.position.x
	//|   <------>scroll move    |
	//|==========================|======render area=======
	//|                          |
	////////////////////
	this.position = {x:0, y:0};
	this.position.x = x;
	this.position.y = y;
	
	this.width = width;
	this.height = height;

	this.scrollContainer = new PIXI.Container();
	this.scrollContainer.position.set(this.position.x, this.position.y);

	this.viewArea = new PIXI.Graphics();
	this.viewArea.beginFill(0x808080, 0.8);
	this.viewArea.drawRect(this.position.x, this.position.y, width, height);
	this.viewArea.endFill();
	
	this.scrollContainer.mask = this.viewArea;
	
	parent.addChild(this.scrollContainer);
	parent.addChild(this.viewArea);

	this.scrollContainer.interactive = true;

	this.viewLists = [];
	if(scroll_type === undefined) scroll_type = this.scrollType.Horizontal;
	else{
		if(scroll_type === "Vertical" || scroll_type === "vertical")
			scroll_type = this.scrollType.Vertical;
		else
			scroll_type = this.scrollType.Horizontal;
	}
	this.type = scroll_type;
	this.center_point = (this.type === this.scrollType.Horizontal) ? this.position.x + width : this.position.y + height;
	this.limitPos = 0;
	
	this.vector = {x:0, y:0};
	this.interval_x = 0;
	this.interval_y = 0;
	
	this.padding = 0;
	this.padded_width = 0;
	this.padded_height = 0;

	this.moveCall_horizontal = {right: false, left: false};//움직였니 아니니.
	this.moveCall_vertical = {up: false, down: false};//움직였니 아니니.
	
	this.scrollContainer.on("mousedown", onDragStart);
	this.scrollContainer.on("touchstart", onDragStart);
	this.scrollContainer.on("mouseup", onDragEnd);
	this.scrollContainer.on("touchend", onDragEnd);
	this.scrollContainer.on("mouseupoutside", onDragEnd);
    this.scrollContainer.on("touchendoutside", onDragEnd);
    this.scrollContainer.on("mousemove", onDragMove);
    this.scrollContainer.on("touchmove", onDragMove);

    this.moveDist = 0;

	function onDragStart(event){
    	this.data = event.data;

    	this.dragging = true;

    	self.vector = {x:this.position.x-this.data.global.x, y:this.position.y-this.data.global.y};
	}

	function onDragEnd(){
	    this.dragging = false;
	    this.data = null;
	    self.bMove = false;
    }

	var prev_pos = 0; var cur_pos = 0; var pixel = 0;
	function onDragMove(){
	    if (this.dragging){
	        switch(self.type){
	        	case self.scrollType.Horizontal:
	        		this.position.x = this.data.global.x + self.vector.x;
	        		if(this.position.x < self.limitPos) this.position.x = self.limitPos;
	        		if(this.position.x > self.position.x) this.position.x = self.position.x;
	        		cur_pos = this.position.x;
                    pixel = cur_pos - prev_pos;
	        		if(pixel*pixel>10*10) self.bMove = true;
	        		prev_pos = cur_pos;
	        		break;
	    		case self.scrollType.Vertical:
	        		this.position.y = this.data.global.y + self.vector.y;
	        		if(this.position.y < self.limitPos) this.position.y = self.limitPos;
	        		if(this.position.y > self.position.y) this.position.y = self.position.y;
                    cur_pos = this.position.y;
                    pixel = cur_pos - prev_pos;
                    if(pixel*pixel>10*10) self.bMove = true;
                    prev_pos = cur_pos;
	        		break;
	        }
	    }
	}
};

GUMA.scrollView.constructor = GUMA.scrollView;

GUMA.scrollView.prototype.scrollType = {
	Vertical : 0,
	Horizontal : 1
};

GUMA.scrollView.prototype.setList = function(_interval_x, _interval_y, _fixNum, _padding, _fixX, _fixY){
	if(this.viewLists.length === 0) return;
	var i = 0;
	var length = this.viewLists.length;
    var flag_x = (_fixX===undefined) ? (this.viewLists[0].width/2)|0:_fixX;
    var flag_y = (_fixY===undefined) ? (this.viewLists[0].height/2)|0:_fixY;
    var start_x = flag_x; var start_y = flag_y;

	var width = 0;
	var height = 0;

	this.padding = _padding;

	if(length !== 0){
		this.interval_x = this.viewLists[0].width+_interval_x;
		this.interval_y = this.viewLists[0].height+_interval_y;

		switch(this.type){
		case this.scrollType.Horizontal:
			for(i=0;i<length;++i){
                this.viewLists[i].position.x = start_x;
                this.viewLists[i].position.y = start_y;
                width = this.viewLists[i].width;

                start_y += this.interval_y;

				if((i+1)%_fixNum === 0){
                    start_x += (this.interval_x);
                    start_y = flag_y;
                }
			}

			if(this.viewArea.width < this.scrollContainer.width){
				var minus = this.scrollContainer.width - this.width;
				this.limitPos = this.position.x - minus - this.padding;
			} else 
				this.limitPos = this.position.x;
		break;
		case this.scrollType.Vertical:
			for(i=0;i<length;++i){
                this.viewLists[i].position.x = start_x;
                this.viewLists[i].position.y = start_y;
                height = this.viewLists[i].height;

                start_x += this.interval_x;

				if((i+1)%_fixNum === 0){
                    start_x = flag_x;
                    start_y += (this.interval_y);
                }
			}

			if(this.viewArea.height < this.scrollContainer.height){
				var minus = this.scrollContainer.height - this.height;
				this.limitPos = this.position.y - minus - this.padding;
			} else 
				this.limitPos = this.position.y;
		break;
		}
	}

    this.scrollContainer.position.set(this.position.x, this.position.y);
};

GUMA.scrollView.prototype.pushList = function(listObject){
	if(listObject.constructor !== GUMA.scrollSlot) throw "Unvaliable child type. Check its type is GUMA.scrollSlot";
	this.viewLists.push(listObject);
};

GUMA.scrollView.prototype.calculatePadding = function(padding){
	if(this.viewLists.length === 0) return;

    var width = this.viewLists[0].width;
    var height = this.viewLists[0].height;
	
	this.padded_width = (width-padding*2)/width;
	if(this.padded_width>1) this.padded_width = 1;
	this.padded_height = (height-padding*2)/height;
	if(this.padded_height>1) this.padded_height = 1;
};

GUMA.scrollView.prototype.scrollMove = function(dir, moveDist){
	switch(this.type){
		case this.scrollType.Horizontal:
		if(dir === "right"){
			this.scrollContainer.position.x -= moveDist;
			if(this.scrollContainer.position.x < this.limitPos) this.scrollContainer.position.x = this.limitPos;
			if(this.scrollContainer.position.x > this.position.x) this.scrollContainer.position.x = this.position.x;
		} else if(dir === "left"){
			this.scrollContainer.position.x += moveDist;
			if(this.scrollContainer.position.x < this.limitPos) this.scrollContainer.position.x = this.limitPos;
			if(this.scrollContainer.position.x > this.position.x) this.scrollContainer.position.x = this.position.x;
		}
		break;
		case this.scrollType.Vertical:
		if(dir === "up"){
			this.scrollContainer.position.y += moveDist;
			if(this.scrollContainer.position.y < this.limitPos) this.scrollContainer.position.y = this.limitPos;
			if(this.scrollContainer.position.y > this.position.y) this.scrollContainer.position.y = this.position.y;
		} else if(dir === "down"){
			this.scrollContainer.position.y -= moveDist;
			if(this.scrollContainer.position.y < this.limitPos) this.scrollContainer.position.y = this.limitPos;
			if(this.scrollContainer.position.y > this.position.y) this.scrollContainer.position.y = this.position.y;
		}
		break;
	}
};

GUMA.scrollView.prototype.moveCheck = function(){
	switch(this.type){
		case this.scrollType.Horizontal:
		if(this.scrollContainer.position.x === this.limitPos){
			this.moveCall_horizontal.left = false;
			this.moveCall_horizontal.right = true;
			return this.moveCall_horizontal;
		} else if(this.scrollContainer.position.x === this.position.x){
			this.moveCall_horizontal.left = true;
			this.moveCall_horizontal.right = false;
			return this.moveCall_horizontal;
		} else {
			this.moveCall_horizontal.left = true;
			this.moveCall_horizontal.right = true;
			return this.moveCall_horizontal;
		}
		break;

		case this.scrollType.Vertical:
		if(this.scrollContainer.position.y === this.limitPos){
			this.moveCall_vertical.up = false;
			this.moveCall_vertical.down = true;
			return this.moveCall_vertical;
		} else if(this.scrollContainer.position.y === this.position.y){
			this.moveCall_vertical.up = true;
			this.moveCall_vertical.down = false;
			return this.moveCall_vertical;
		} else {
			this.moveCall_vertical.up = true;
			this.moveCall_vertical.down = true;
			return this.moveCall_vertical;
		}
		break;
	}
};

GUMA.scrollView.prototype.setCenterSlot = function(slot_id){
	switch(this.type){
		case this.scrollType.Horizontal:
		
		break;

		case this.scrollType.Vertical:
		break;
	}
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////scroll slot///////////////////////////////////////////////////////////
GUMA.scrollSlot = function(parent, url){
	if(parent.constructor !== GUMA.scrollView) throw "Unvaliable parent type. Check its type is GUMA.scrollView";

	this.sprite = new PIXI.Sprite.fromFrame(url);//슬롯의 배경이 되는 스프라이트.
	this.sprite.anchor.set(0.5, 0.5);
	
	parent.scrollContainer.addChild(this.sprite);
	parent.pushList(this);
};

GUMA.scrollSlot.constructor = GUMA.scrollSlot;
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////new Scroll////////////////////////////////////////////////////////////
GUMA.scrollView_2 = function(parent, width, height, x, y, scroll_type){
    var self = this;
    /////explain////////
    //type: horizontal///
    //limitPos             this.position.x
    //|   <------>scroll move    |
    //|==========================|======render area=======
    //|                          |
    ////////////////////
    this.position = {x:0, y:0};
    this.position.x = x;
    this.position.y = y;

    this.width = width;
    this.height = height;

    // this.scrollContainer = new PIXI.Container();
    // this.scrollContainer.position.set(this.position.x, this.position.y);
    this.scroll = new PIXI.Graphics();
    this.scroll.beginFill(0x808080, 0.8);
    this.scroll.drawRect(this.position.x, this.position.y, width, height);
    this.scroll.endFill();
    this.scroll.interactive = true;

    this.viewArea = new PIXI.Graphics();
    this.viewArea.beginFill(0x808080, 0.8);
    this.viewArea.drawRect(this.position.x, this.position.y, width, height);
    this.viewArea.endFill();

    this.scrollContainer.mask = this.viewArea;

    parent.addChild(this.scrollContainer);
    parent.addChild(this.viewArea);

    this.scrollContainer.interactive = true;

    this.viewLists = [];
    if(scroll_type === undefined) scroll_type = this.scrollType.Horizontal;
    else{
        if(scroll_type === "Vertical" || scroll_type === "vertical")
            scroll_type = this.scrollType.Vertical;
        else
            scroll_type = this.scrollType.Horizontal;
    }
    this.type = scroll_type;
    this.center_point = (this.type === this.scrollType.Horizontal) ? this.position.x + width : this.position.y + height;
    this.limitPos = 0;

    this.vector = {x:0, y:0};
    this.interval_x = 0;
    this.interval_y = 0;

    this.padding = 0;
    this.padded_width = 0;
    this.padded_height = 0;

    this.moveCall_horizontal = {right: false, left: false};//움직였니 아니니.
    this.moveCall_vertical = {up: false, down: false};//움직였니 아니니.

    this.scroll.on("mousedown", onDragStart);
    this.scroll.on("touchstart", onDragStart);
    this.scroll.on("mouseup", onDragEnd);
    this.scroll.on("touchend", onDragEnd);
    this.scroll.on("mouseupoutside", onDragEnd);
    this.scroll.on("touchendoutside", onDragEnd);
    this.scroll.on("mousemove", onDragMove);
    this.scroll.on("touchmove", onDragMove);

    function onDragStart(event){
        this.data = event.data;

        this.dragging = true;

        self.vector = {x:this.position.x-this.data.global.x, y:this.position.y-this.data.global.y};
    }

    function onDragEnd(){
        this.dragging = false;
        this.data = null;
    }

    function onDragMove(){
        if (this.dragging){
            switch(self.type){
                case self.scrollType.Horizontal:
                    this.position.x = this.data.global.x + self.vector.x;
                    if(this.position.x < self.limitPos) this.position.x = self.limitPos;
                    if(this.position.x > self.position.x) this.position.x = self.position.x;
                    break;
                case self.scrollType.Vertical:
                    this.position.y = this.data.global.y + self.vector.y;
                    if(this.position.y < self.limitPos) this.position.y = self.limitPos;
                    if(this.position.y > self.position.y) this.position.y = self.position.y;
                    break;
            }
        }
    }
};

GUMA.scrollView_2.prototype.setList = function(_interval_x, _interval_y, _fixNum, _padding){
    if(this.viewLists.length === 0) return;
    var i = 0;
    var length = this.viewLists.length;
    var flag_x = this.viewLists[0].width/2;
    var flag_y = this.viewLists[0].height/2;
    var start_x = flag_x; var start_y = flag_y;

    var width = 0;
    var height = 0;

    this.padding = _padding;

    if(length !== 0){
        // this.interval_x = _interval_x;
        // this.interval_y = _interval_y;

        switch(this.type){
            case this.scrollType.Horizontal:
                for(i=0;i<length;++i){
                    this.viewLists[i].position.x = start_x;
                    this.viewLists[i].position.y = start_y;
                    width = this.viewLists[i].width;

                    start_y += _interval_y;

                    if((i+1)%_fixNum === 0){
                        start_x += (width+_interval_x);
                        start_y = flag_y;
                    }
                }

                if(this.viewArea.width < this.scrollContainer.width){
                    var minus = this.scrollContainer.width - this.width;
                    this.limitPos = this.position.x - minus - this.padding;
                } else
                    this.limitPos = this.position.x;
                break;
            case this.scrollType.Vertical:
                for(i=0;i<length;++i){
                    this.viewLists[i].position.x = start_x;
                    this.viewLists[i].position.y = start_y;
                    height = this.viewLists[i].height;

                    start_x += _interval_x;

                    if((i+1)%_fixNum === 0){
                        start_x = flag_x;
                        start_y += (height+_interval_y);
                    }
                }

                if(this.viewArea.height < this.scrollContainer.height){
                    var minus = this.scrollContainer.height - this.height;
                    this.limitPos = this.position.y - minus - this.padding;
                } else
                    this.limitPos = this.position.y;
                break;
        }
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////about PIXI////////////////////////////////////////////////////////////
Object.defineProperties(PIXI.Sprite.prototype, {
	scaleX: {
	     get: function () { return this.scale.x; },
	     set: function (v) { this.scale.x = v; }
	},
	scaleY: {
	     get: function () { return this.scale.y; },
	     set: function (v) { this.scale.y = v; }
	}
});//pixi.js의 sprite에 greensock tweenmax scale을 적용하기 위한 프로퍼티 설정.

Object.defineProperties(PIXI.Container.prototype, {
	scaleX: {
		get: function () { return this.scale.x; },
		set: function (v) { this.scale.x = v; }
	},
	scaleY: {
	    get: function () { return this.scale.y; },
	    set: function (v) { this.scale.y = v; }
	}
});//container 용

PIXI.extras.BitmapText.prototype.updateTextDefault = PIXI.extras.BitmapText.prototype.updateText;
PIXI.extras.BitmapText.prototype.updateText = function(){
    this.updateTextDefault();
    switch(this.align) {
        case 'center':
            this.pivot.x = this.textWidth * 0.5;
        break;
        case 'right':
            this.pivot.x = this.textWidth;
        break;
        default:
            this.pivot.x = 0;
        break;
    }
};//bitmapFont

createBitmapFont = function ( fontszname, text, pos, aligns ){
    if(aligns==undefined) aligns  = 'center';
    var tx1 = new PIXI.extras.BitmapText(text, { font:fontszname, align: aligns});
    tx1.position.set(pos.x,pos.y);
    return tx1;
};
////////////////////////add/////////////////////////////////
Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function distance2D(x1,y1,x2,y2){ //거리구하기
  if(!x2) x2=0; 
  if(!y2) y2=0;
  return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)); 
}
//Math.dist(0,0, 3,4); //the output will be 5
//Math.dist(1,1, 4,5); //the output will be 5
//Math.dist(3,4); //the output will be 5

function randRangeFromInt(low, high) // Get a random int between low and high, inclusive
{
    return Math.floor(low + Math.random()*(high-low+1));
}


//--------------------------공A중심xy, 공A반지름, 공B중심xy, 공B반지름
function circleIntersectionFromPos(x1, y1, r1, x2, y2, r2) {
    // Calculate the distance between the centers
    var dx = x1 - x2;
    var dy = y1 - y2;
    var len = Math.sqrt(dx * dx + dy * dy);

    if (len < r1 + r2) {
        // Circles intersect
        return true;
    }

    return false;
}

function radToDegFromAngle(angle) // Convert radians to degrees //포지션에서 각도를 계산할 때
{
    return angle * (180 / Math.PI);
}


function degToRadFromPI(angle) // Convert degrees to radians //각도에서 포지션을 계산할 때
{ 
    return angle * (Math.PI / 180);
}

function moveToAngle( angle, dist ) //각도로 거리만큼 이동(로컬좌표리턴)
{
    var ret = [0,0];
    ret[0] = dist * Math.cos(degToRadFromPI(angle));
    ret[1] = dist * -1*Math.sin(degToRadFromPI(angle));
    return ret;
}

function rotateFromPos(cx, cy, x, y, angle) //지정위치에서 회전함수
{
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

function getAngleFromPos( centerX, centerY, X, Y)
{
//   html screen
//   (0,0)+---+
//        |   |
//        +---+(625,625)
    var mouseangle = radToDeg(Math.atan2(centerY-Y, X-centerX));
//              (90)
//          179  |   1 
//      (-180)--중심--(0)
//          -179 |  359
//             (-90)
     while(mouseangle < 0)   { mouseangle = mouseangle+360; }           
     while(mouseangle > 360) { mouseangle = mouseangle-360; }           
//               (90)
//                 |    
//         (180)--중심--(0) Math.floor(mouseangle)시
//                 |
//               (270)
        
    return mouseangle;
}
function cropAngleWith180(angle, min, max)
{
//               (90)
//                 |    
//         (180)--중심--(0) 좌표계
//                 |
//               (270)    
    if (angle > 90 && angle < 270) // Left
    {
        if (angle > max)
        {
            angle = max;
        }
    }
    else // Right
    {
        if (angle < min || angle >= 270)
        {
            angle = min;
        }
    }
    return angle;
}
// 부모, 주소, 포지션x, 포지션y, 스케일타입, 스케일x, 스케일y, 앵커x, 앵커y, 
function Button(parent, url, px, py, str_scaleType, sx, sy, ax, ay/*, _slice*/){
	if(str_scaleType === undefined) str_scaleType = "none";//"scaleDown", "scaleUp", "none"
	if(ax === undefined) ax = 0.5;
	if(ay === undefined) ay = 0.5;
	if(sx === undefined) sx = 1;
	if(sy === undefined) sy = 1;
	this.tweenTime = 0.2;
	// this.slice = _slice;
    this.bSlice = false;
	
	this.main = new PIXI.Container();

    if(typeof url === "string"){
        this.sprite = PIXI.Sprite.fromFrame(url);
        this.sprite.anchor.set(ax, ay);
        this.originTint = this.sprite.tint;
    } else {
        this.sprite = url;
        // this.sprite.pivot.set(ax, ay);
        this.main = url;
        this.originTint = 0xffffff;
        this.bSlice = true;
    }

	this.main.position.set(px, py);
	this.main.scale.set(sx, sy);
	this.originScaleX = sx;
	this.originScaleY = sy;
	
	if(this.originScaleX < 0){
		this.addScaleX = 0.1;
	}
	else{
		this.addScaleX = -0.1;
	}
	if(this.originScaleY < 0){
		this.addScaleY = 0.1;
	}
	else{
		this.addScaleY = -0.1;
	}
	this.main.addChild(this.sprite);
	parent.addChild(this.main);
	this.effTint = 0x808080;
	this.scale_type = str_scaleType;

	this.init();
}

Button.prototype.setScaleType = function(str_scaleType){
	this.scale_type = str_scaleType;
};

// Button.prototype.setOriginScale = function(x, y){
// 	if(x === undefined) x = this.originScaleX;
// 	if(y === undefined) y = x;
// 	this.sprite.scale.set(x, y);
// 	this.originScaleX = x;
// 	this.originScaleY = y;

// 	if(this.originScaleX < 0)	this.scaleDown_x = this.originScaleX + 0.1;	
// 	else						this.scaleDown_x = this.originScaleX - 0.1;
// 	if(this.originScaleY < 0)	this.scaleDown_y = this.originScaleY + 0.1;
// 	else						this.scaleDown_y = this.originScaleY - 0.1;
// }
Button.prototype.setOriginTint = function(tint_value){
	this.originTint = tint_value;
	this.sprite.tint = tint_value;
};

Button.prototype.setCallback = function(callBack, THIS){
	if(callBack === undefined) return;
	if(THIS !== undefined)
		callBack = callBack.bind(THIS);
	
	this.main.on("click", callBack);
	this.main.on("tap", callBack);
};

Button.prototype.setCallback_once = function(callBack, THIS){
    if(callBack === undefined) return;
    if(THIS !== undefined)
        callBack = callBack.bind(THIS);

    this.main.once("click", callBack);
    this.main.once("tap", callBack);
};

Button.prototype.init = function(){
	var self = this;
	this.main.interactive = true;
	
	this.main.on("mousedown", function(){
		var THIS = self;
		if(THIS.scale_type === "scaleDown")
			TweenLite.to(this, THIS.tweenTime, {scaleX:THIS.originScaleX+THIS.addScaleX, scaleY:THIS.originScaleY+THIS.addScaleY, ease:Power1.easeOut});
		else if(THIS.scale_type === "scaleUp")
			TweenLite.to(this, THIS.tweenTime, {scaleX:THIS.originScaleX-THIS.addScaleX, scaleY:THIS.originScaleY-THIS.addScaleY, ease:Power1.easeOut});

		/**
         * 아래 주석처리된 코드는 자식으로 Spine이 붙었을 때 대등이 안됨.
         * */
		// if(!THIS.bSlice)
		// 	THIS.sprite.tint = THIS.effTint;
		// else
		// {
		// 	for(var i=0;i<THIS.sprite.children.length;++i)
		// 		THIS.sprite.children[i].tint = THIS.effTint;
		// }

        THIS.sprite.tint = THIS.effTint;
        for(var i=0;i<THIS.sprite.children.length;++i)
        	THIS.sprite.children[i].tint = THIS.effTint;
	});
	
	this.main.on("mouseup", function(e){
		var THIS = self;
		TweenLite.to(this, THIS.tweenTime, {scaleX:THIS.originScaleX, scaleY:THIS.originScaleY, ease:Power1.easeOut});

        THIS.sprite.tint = THIS.originTint;
        for(var i=0;i<THIS.sprite.children.length;++i)
            THIS.sprite.children[i].tint = THIS.originTint;
	});
	
	this.main.on("mouseupoutside", function(e){
		var THIS = self;
		TweenLite.to(this, THIS.tweenTime, {scaleX:THIS.originScaleX, scaleY:THIS.originScaleY, ease:Power1.easeOut});

        THIS.sprite.tint = THIS.originTint;
        for(var i=0;i<THIS.sprite.children.length;++i)
            THIS.sprite.children[i].tint = THIS.originTint;
	});
	
	this.main.on("touchstart", function(){
		var THIS = self;
		if(THIS.scale_type === "scaleDown")
			TweenLite.to(this, THIS.tweenTime, {scaleX:THIS.originScaleX+THIS.addScaleX, scaleY:THIS.originScaleY+THIS.addScaleY, ease:Power1.easeOut});
		else if(THIS.scale_type === "scaleUp")
			TweenLite.to(this, THIS.tweenTime, {scaleX:THIS.originScaleX-THIS.addScaleX, scaleY:THIS.originScaleY-THIS.addScaleY, ease:Power1.easeOut});

        THIS.sprite.tint = THIS.effTint;
        for(var i=0;i<THIS.sprite.children.length;++i)
            THIS.sprite.children[i].tint = THIS.effTint;
	});
	
	this.main.on("touchend", function(e){
		var THIS = self;
		TweenLite.to(this, THIS.tweenTime, {scaleX:THIS.originScaleX, scaleY:THIS.originScaleY, ease:Power1.easeOut});

        THIS.sprite.tint = THIS.originTint;
        for(var i=0;i<THIS.sprite.children.length;++i)
            THIS.sprite.children[i].tint = THIS.originTint;
	});
	
	this.main.on("touchendoutside", function(e){
		var THIS = self;
		TweenLite.to(this, THIS.tweenTime, {scaleX:THIS.originScaleX, scaleY:THIS.originScaleY, ease:Power1.easeOut});

        THIS.sprite.tint = THIS.originTint;
        for(var i=0;i<THIS.sprite.children.length;++i)
            THIS.sprite.children[i].tint = THIS.originTint;
	});
};

Object.defineProperties(Button.prototype, {
	visible: {
		get: function(){return this.main.visible;},
		set: function(value){this.main.visible = value}
	},
	position: {
		get: function(){return this.main.position;}
	},
	scale: {
		get: function(){return this.main.scale;}
	}
});

Button.prototype.setDownAction = function(callBack, THIS){
	if(callBack === undefined) return;
	if(THIS !== undefined)
		callBack = callBack.bind(THIS);

	this.main.on("mousedown", callBack);
	this.main.on("touchstart", callBack);
};