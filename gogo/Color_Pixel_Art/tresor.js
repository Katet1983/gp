window["TRESOR"] = (

	function () {

		const CONFIG = {
			autoInit: false,
			verboseLogging: false,
			verboseDebugging: false,
			storageType: "gamesnacks", // sessionstorage || localstorage || famobi || gamesnacks || ytgame
			compression: null // null || lz-string
		};

		const VARS = {
			VERSION: "0.4",
			isInitialized: false
		};

		let LZString = null;

		const STORAGE = {

			savegame: {},
			storageType: null,

			init: function() {
				return new Promise(resolve => {
					this.storageType = CONFIG.storageType;
					CONFIG.verboseLogging && console.log("[tresor v%s] init... (%s) - compression: %s", VARS.VERSION, this.storageType, CONFIG.compression || "no");

					switch(CONFIG.compression) {
						case "lz-string":
							/**
							 * lz-string 1.5.0 (https://github.com/pieroxy/lz-string/)
							 **/
							LZString=function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(r,o){if(!e[r]){e[r]={};for(var n=0;n<r.length;n++)e[r][r.charAt(n)]=n}return e[r][o]}var i={compressToBase64:function(r){if(null==r)return"";var n=i._compress(r,6,function(r){return o.charAt(r)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(n){return t(o,r.charAt(n))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(r){return null==r?"":""==r?null:i._decompress(r.length,16384,function(o){return r.charCodeAt(o)-32})},compressToUint8Array:function(r){for(var o=i.compress(r),n=new Uint8Array(2*o.length),e=0,t=o.length;e<t;e++){var s=o.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null==o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;e<t;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(o){return t(n,r.charAt(o))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(r,o,n){if(null==r)return"";var e,t,i,s={},u={},a="",p="",c="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<r.length;i+=1)if(a=r.charAt(i),Object.prototype.hasOwnProperty.call(s,a)||(s[a]=f++,u[a]=!0),p=c+a,Object.prototype.hasOwnProperty.call(s,p))c=p;else{if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),s[p]=f++,c=String(a)}if(""!==c){if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==o-1){d.push(n(m));break}v++}return d.join("")},decompress:function(r){return null==r?"":""==r?null:i._decompress(r.length,32768,function(o){return r.charCodeAt(o)})},_decompress:function(o,n,e){var t,i,s,u,a,p,c,l=[],f=4,h=4,d=3,m="",v=[],g={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)l[t]=t;for(s=0,a=Math.pow(2,2),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 2:return""}for(l[3]=c,i=c,v.push(c);;){if(g.index>o)return"";for(s=0,a=Math.pow(2,d),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(c=s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[c])m=l[c];else{if(c!==h)return null;m=i+i.charAt(0)}v.push(m),l[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,d),d++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module?module.exports=LZString:"undefined"!=typeof angular&&null!=angular&&angular.module("LZString",[]).factory("LZString",function(){return LZString});
						default:
							// do nothing
					}
						
					try {
						this.load().then(result => {
							if(result["err"]) {
								resolve(result);
							} else {
								if(typeof result["savegame"] === "string") {
									this.savegame = JSON.parse(this.decompress(result["savegame"]));
								}
								VARS.isInitialized = true;
								resolve({"savegame": this.savegame});
							}
						}).catch(e => {
							resolve({"err": e, "savegame": this.savegame});
						});
					} catch(e) {
						VARS.isInitialized = false;
						resolve({"err": e, "savegame": this.savegame});
					}
				});
			},
			setItem: function(key, value) {
				this.savegame[key] = value;
				return this.save();
			},
			getItem: function(key) {
				return Promise.resolve({value: this.savegame[key] || null});
			},
			removeItem: function(key) {
				delete this.savegame[key];
				return this.save();
			},
			keys: function() {
				return Promise.resolve({keys: Object.keys(this.savegame)});
			},
			clear: function() {
				this.savegame = {};
				return this.save();
			},
			compress(str) {
				switch(CONFIG.compression) {
					case "lz-string":
						try {
							CONFIG.verboseDebugging && console.log("before compression", str);
							str = LZString.compressToUTF16(str);
							CONFIG.verboseDebugging && console.log("after compression", str);
						} catch(e) {

						}
						
					default:
						return str;
				}
			},
			decompress(str) {

				let _str = str;

				if(CONFIG.compression === "lz-string") {
					CONFIG.verboseDebugging && console.log("before decompression", str);
					_str = LZString.decompressFromUTF16(str);
					CONFIG.verboseDebugging && console.log("after decompression", _str);

					try {
						JSON.parse(_str);
						str = _str;
					} catch(e) {
					}
				}

				try {
					JSON.parse(str);
				} catch(e) {
					str = "{}";
				}
				return str;
			},
			load: function() {
				return new Promise(resolve => {
					switch(this.storageType.toLowerCase()) {
						case "famobi":
							try {
								return resolve({savegame: window["famobi"]["localStorage"]["getItem"]("savegame")});
							} catch(e) {
								return resolve({"err": e});
							}
						case "ytgame":
							return window["ytgame"]["game"]["loadData"]().then(data => {
								resolve({savegame: data});
							});
						case "localstorage":
							return resolve({savegame: window["localStorage"]["getItem"]("savegame")});
						case "gamesnacks":
							SDK_INTERFACE_HELPERS["GameSnacks"]["storage"]["getItem"]("savegame");
							return resolve({savegame: SDK_INTERFACE_HELPERS["GameSnacks"]["storage"]["getItem"]("savegame")});
						case "sessionstorage":
						default:
							return resolve({savegame: "{}"});
					}
				});
			},
			save: function() {
				return new Promise(resolve => {

					let savegame = this.compress(JSON.stringify(this.savegame));

					switch(this.storageType.toLowerCase()) {
						case "famobi":
							try {
								if(Object.keys(this.savegame).length) {
									window["famobo"]["localStorage"]["setItem"]("savegame", savegame);
								} else {
									window["famobi"]["localStorage"]["removeItem"]("savegame");
								}
								return resolve({});
							} catch(e) {
								return resolve({"err": e});
							}
							
						case "ytgame":
							return window["ytgame"]["game"]["saveData"](savegame).then(
								() => {resolve()},
								e => {resolve({"err": e})}
							);
						case "gamesnacks":
							if(Object.keys(this.savegame).length) {
								SDK_INTERFACE_HELPERS["GameSnacks"]["storage"]["setItem"]("savegame", savegame);
							} else {
								SDK_INTERFACE_HELPERS["GameSnacks"]["storage"]["removeItem"]("savegame");
							}
							return resolve({});
						case "localstorage":
							if(Object.keys(this.savegame).length) {
								window["localStorage"]["setItem"]("savegame", savegame);
							} else {
								window["localStorage"]["removeItem"]("savegame");
							}
							return resolve({});
						case "sessionstorage":
						default:
							return resolve({});
					};
				});
				
			}
		};

		function init() {
			return STORAGE.init();
		};

		function setItem(key, value, callback) {
			STORAGE.setItem(key, value).then(result => {
				if(typeof callback === "function") {
					callback(result["err"] || false, value);
				}
			});
		};

		function getItem(key, callback) {
			STORAGE.getItem(key).then(result => {
				if(typeof callback === "function") {
					callback(result["err"] || false, result["value"]);
				}
			});
		};

		function removeItem(key, callback) {
			STORAGE.removeItem(key).then(result => {
				if(typeof callback === "function") {
					callback(result["err"] || false);
				}
			});
		};

		function keys(callback) {
			STORAGE.keys().then(result => {
				if(typeof callback === "function") {
					callback(result["err"] || false, result["keys"]);
				}
			});
		};

		function clear(callback) {
			STORAGE.clear().then(result => {
				if(typeof callback === "function") {
					callback(result["err"] || false);
				}
			});
		};

		if(CONFIG.autoInit) {
			init().then(
				result => console.log(result, TRESOR.isInitialized)
			);
		}

		return {
			init,
			setItem,
			getItem,
			removeItem,
			keys,
			clear,
			get isInitialized() {
		        return VARS.isInitialized;
		    }
		};
	}
)();