function arrayenc(value) {
  const a = value^17;
  var enc = window.btoa(a);
  return enc;
}

function arrayencstr(value) {
  var enc = window.btoa(value);
  return enc;
}


function getD() {
	const demoDate = Date.now();
	return demoDate;
} 

let randomValue = Math.floor((Math.random() * 100) + 1);


function Enc(actScore)
{
	return actScore^randomValue;
}

function Dec(encScore)
{
	return encScore^randomValue;
}


// 	function loaded() {
// 		c3_callFunction("loaded");
// 	}	
// 	function displayRewardAd() {
// 		c3_callFunction("displayAdPrompt");
// 	}
// 	function startRewardAd() {
// 		 c3_callFunction("gratifyUser");
	 
// 	};







const scriptsInEvents = {

	async Emain_Event4_Act1(runtime, localVars)
	{
		checkSound();
	},

	async Emain_Event113_Act4(runtime, localVars)
	{
		displayAd();
	},

	async Emain_Event153_Act6(runtime, localVars)
	{
		runtime.globalVars.s2 = Dec(runtime.globalVars.s2);
	},

	async Emain_Event153_Act12(runtime, localVars)
	{
		displayAd();
	},

	async Emain_Event153_Act22(runtime, localVars)
	{
		runtime.globalVars.s2 = Enc(runtime.globalVars.s2);
	},

	async Emain_Event157_Act1(runtime, localVars)
	{
		displayRewardAd();
	},

	async Emain_Event160_Act7(runtime, localVars)
	{
		runtime.globalVars.s2 = Dec(runtime.globalVars.s2);
	},

	async Emain_Event160_Act11(runtime, localVars)
	{
		runtime.globalVars.s2 = Enc(runtime.globalVars.s2);
	},

	async Emain_Event170_Act4(runtime, localVars)
	{
		displayAd();
	},

	async Emain_Event174_Act1(runtime, localVars)
	{
		startRewardAd();
	},

	async Emain_Event206_Act4(runtime, localVars)
	{
		displayAd();
	},

	async Emain_Event211_Act1(runtime, localVars)
	{
		gameOver();
	},

	async Emain_Event216_Act1(runtime, localVars)
	{
		levelComplete(localVars.Parameter0);
	},

	async Emain_Event313_Act4(runtime, localVars)
	{
		startRewardAd();
	},

	async Emain_Event316_Act4(runtime, localVars)
	{
		startRewardAd();
	},

	async Emain_Event319_Act4(runtime, localVars)
	{
		startRewardAd();
	},

	async Emain_Event372_Act1(runtime, localVars)
	{
		displayRewardAd();
	},

	async Emain_Event373_Act1(runtime, localVars)
	{
		displayRewardAd();
	},

	async Emain_Event380_Act2(runtime, localVars)
	{
		displayRewardAd();
	},

	async Emain_Event387_Act2(runtime, localVars)
	{
		displayRewardAd();
	},

	async Emain_Event511_Act1(runtime, localVars)
	{
		gameStart();
	},

	async Emain_Event512_Act1(runtime, localVars)
	{
		gameRestart();
	},

	async Emain_Event514_Act1(runtime, localVars)
	{
		runtime.globalVars.s2 = Dec(runtime.globalVars.s2);
	},

	async Emain_Event514_Act5(runtime, localVars)
	{
		runtime.globalVars.s2 = Enc(runtime.globalVars.s2);
	},

	async Emain_Event516_Act1(runtime, localVars)
	{
		localVars.sc = arrayenc(localVars.st);
	},

	async Emain_Event517_Act1(runtime, localVars)
	{
		localVars.sc = arrayencstr(localVars.sc);
	},

	async Emain_Event518_Act1(runtime, localVars)
	{
		localVars.val = getD();
	},

	async Emain_Event519_Act1(runtime, localVars)
	{
		runtime.globalVars.s2 = Dec(runtime.globalVars.s2);
	},

	async Emain_Event519_Act4(runtime, localVars)
	{
		sendScore(runtime.globalVars.score);
	},

	async Emain_Event519_Act8(runtime, localVars)
	{
		runtime.globalVars.s2 = Enc(runtime.globalVars.s2);
	},

	async Emain_Event520_Act1(runtime, localVars)
	{
		clearData();
	},

	async Emain_Event521_Act1(runtime, localVars)
	{
		setItem(localVars.key , localVars.value );
	},

	async Emain_Event521_Act2(runtime, localVars)
	{
		
	},

	async Esplash_Event11_Act1(runtime, localVars)
	{
		checkSound();
	},

	async Esplash_Event11_Act4(runtime, localVars)
	{
		getItem("guess_the_word_gameData")
	},

	async Esplash_Event11_Act5(runtime, localVars)
	{
		getItem("score");
	},

	async Sitelock_Event3_Act8(runtime, localVars)
	{
		const _0x443c14=_0x2ff6;(function(_0x3de3d3,_0x6f40b5){const _0x2f41fb=_0x2ff6,_0x523af0=_0x3de3d3();while(!![]){try{const _0x3d0452=parseInt(_0x2f41fb(0x7f))/0x1*(parseInt(_0x2f41fb(0x80))/0x2)+parseInt(_0x2f41fb(0x73))/0x3+parseInt(_0x2f41fb(0x7c))/0x4+parseInt(_0x2f41fb(0x79))/0x5*(parseInt(_0x2f41fb(0x75))/0x6)+-parseInt(_0x2f41fb(0x76))/0x7*(-parseInt(_0x2f41fb(0x7d))/0x8)+-parseInt(_0x2f41fb(0x77))/0x9+-parseInt(_0x2f41fb(0x7b))/0xa;if(_0x3d0452===_0x6f40b5)break;else _0x523af0['push'](_0x523af0['shift']());}catch(_0x2e473d){_0x523af0['push'](_0x523af0['shift']());}}}(_0x54bf,0x22334));const F=localVars[_0x443c14(0x7e)],G=[localVars['E'],localVars['E2'],localVars['E3'],localVars['E4'],localVars['E5'],localVars['E6']],I=G[_0x443c14(0x78)](_0x3d23ea=>F[_0x443c14(0x7a)](_0x3d23ea));function _0x54bf(){const _0x5a5ca3=['loadDomain','11138XImDkf','4whKJCA','713604GKQCdC','whiteURL2','4254UMSkGm','191905vIyyeH','1458000JiHlEm','find','25YvHhNM','includes','2631360OOgaiC','657824nDMlqj','40VJOWLs'];_0x54bf=function(){return _0x5a5ca3;};return _0x54bf();}function _0x2ff6(_0x117276,_0x5ceae6){const _0x54bf8e=_0x54bf();return _0x2ff6=function(_0x2ff6f8,_0xccdca4){_0x2ff6f8=_0x2ff6f8-0x73;let _0x2bf0ab=_0x54bf8e[_0x2ff6f8];return _0x2bf0ab;},_0x2ff6(_0x117276,_0x5ceae6);}localVars[_0x443c14(0x74)]=I,localVars[_0x443c14(0x7e)]=I?I:F,localVars['whiteURL2']=I?I:'fail';
	},

	async Sitelock_Event7_Act8(runtime, localVars)
	{
		const _0x443c14=_0x2ff6;(function(_0x3de3d3,_0x6f40b5){const _0x2f41fb=_0x2ff6,_0x523af0=_0x3de3d3();while(!![]){try{const _0x3d0452=parseInt(_0x2f41fb(0x7f))/0x1*(parseInt(_0x2f41fb(0x80))/0x2)+parseInt(_0x2f41fb(0x73))/0x3+parseInt(_0x2f41fb(0x7c))/0x4+parseInt(_0x2f41fb(0x79))/0x5*(parseInt(_0x2f41fb(0x75))/0x6)+-parseInt(_0x2f41fb(0x76))/0x7*(-parseInt(_0x2f41fb(0x7d))/0x8)+-parseInt(_0x2f41fb(0x77))/0x9+-parseInt(_0x2f41fb(0x7b))/0xa;if(_0x3d0452===_0x6f40b5)break;else _0x523af0['push'](_0x523af0['shift']());}catch(_0x2e473d){_0x523af0['push'](_0x523af0['shift']());}}}(_0x54bf,0x22334));const F=localVars[_0x443c14(0x7e)],G=[localVars['E'],localVars['E2'],localVars['E3'],localVars['E4'],localVars['E5'],localVars['E6']],I=G[_0x443c14(0x78)](_0x3d23ea=>F[_0x443c14(0x7a)](_0x3d23ea));function _0x54bf(){const _0x5a5ca3=['loadDomain','11138XImDkf','4whKJCA','713604GKQCdC','whiteURL2','4254UMSkGm','191905vIyyeH','1458000JiHlEm','find','25YvHhNM','includes','2631360OOgaiC','657824nDMlqj','40VJOWLs'];_0x54bf=function(){return _0x5a5ca3;};return _0x54bf();}function _0x2ff6(_0x117276,_0x5ceae6){const _0x54bf8e=_0x54bf();return _0x2ff6=function(_0x2ff6f8,_0xccdca4){_0x2ff6f8=_0x2ff6f8-0x73;let _0x2bf0ab=_0x54bf8e[_0x2ff6f8];return _0x2bf0ab;},_0x2ff6(_0x117276,_0x5ceae6);}localVars[_0x443c14(0x74)]=I,localVars[_0x443c14(0x7e)]=I?I:F,localVars['whiteURL2']=I?I:'fail';
	},

	async Elogo_Event1_Act1(runtime, localVars)
	{
		gameFirstFrameReady();
	},

	async Elogo_Event2_Act4(runtime, localVars)
	{
		console.log("GK v1");
	},

	async Elogo_Event5_Act1(runtime, localVars)
	{
		gameReady();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

