var game = {
	var : {},

	object : {},

	level : {},

	state : {},

	util : {},

	collisionTypes : me.collision.types,

	onload : function () {
		// Initialize the video.
		if (!me.video.init(540, 1170, {wrapper : "screen", scale : "auto", scaleMethod: "flex-width" , antiAlias: true, doubleBuffering: false, subpixel: false, transparent: false, powerPreference: 'default'})) {
			alert("Your browser does not support HTML5 canvas.");
			return;
		}
		me.audio.init("mp3,ogg");

		// set and load all resources.
		// (this will also automatically switch to the loading screen)
		me.loader.preload(game.resources, this.loaded.bind(this));
	},

	// Run on game resources loaded.
	loaded : function () {
		game.state.DayZero = "DayZero";
		me.state.set("DayZero", new game.level.DayZero());
		game.state.level1 = "level1";
		me.state.set("level1", new game.level.level1());
		game.state.mainmenu = "mainmenu";
		me.state.set("mainmenu", new game.level.mainmenu());
		game.state.Shop = "Shop";
		me.state.set("Shop", new game.level.Shop());
		game.state.splashscreen = "splashscreen";
		me.state.set("splashscreen", new game.level.splashscreen());
		game.state.temp = "temp";
		me.state.set("temp", new game.level.temp());

		me.pool.register('boardList', game.object.boardList);
		me.pool.register('garisboard', game.object.garisboard);
		me.pool.register('ButtonBase', game.object.ButtonBase);
		me.pool.register('buttonEnd', game.object.buttonEnd);
		me.pool.register('ButtonHook', game.object.ButtonHook);
		me.pool.register('buttonOption', game.object.buttonOption);
		me.pool.register('ButtonPlay', game.object.ButtonPlay);
		me.pool.register('buttonPlayOn', game.object.buttonPlayOn);
		me.pool.register('buttonShop', game.object.buttonShop);
		me.pool.register('trash', game.object.trash);
		me.pool.register('Day0Container', game.object.Day0Container);
		me.pool.register('Day0Tap', game.object.Day0Tap);
		me.pool.register('Tutor1', game.object.Tutor1);
		me.pool.register('Tutor2', game.object.Tutor2);
		me.pool.register('Tutor3', game.object.Tutor3);
		me.pool.register('Tutor4', game.object.Tutor4);
		me.pool.register('Tutor5', game.object.Tutor5);
		me.pool.register('Tutor6', game.object.Tutor6);
		me.pool.register('Tutor7', game.object.Tutor7);
		me.pool.register('addToBankEffect', game.object.addToBankEffect);
		me.pool.register('angryEffect1', game.object.angryEffect1);
		me.pool.register('angryEffect2', game.object.angryEffect2);
		me.pool.register('angryEffect3', game.object.angryEffect3);
		me.pool.register('angryEffect4', game.object.angryEffect4);
		me.pool.register('buffParticle', game.object.buffParticle);
		me.pool.register('coin', game.object.coin);
		me.pool.register('coinEffect', game.object.coinEffect);
		me.pool.register('magicHandEff', game.object.magicHandEff);
		me.pool.register('particle1', game.object.particle1);
		me.pool.register('particle2', game.object.particle2);
		me.pool.register('smoker', game.object.smoker);
		me.pool.register('timeBarEffect', game.object.timeBarEffect);
		me.pool.register('bannerBtnHome', game.object.bannerBtnHome);
		me.pool.register('bannerBtnRestart', game.object.bannerBtnRestart);
		me.pool.register('bannerBtnShop', game.object.bannerBtnShop);
		me.pool.register('bannerBuffFrame', game.object.bannerBuffFrame);
		me.pool.register('bannerHighScore', game.object.bannerHighScore);
		me.pool.register('bannerNewHighScore', game.object.bannerNewHighScore);
		me.pool.register('bannerScore', game.object.bannerScore);
		me.pool.register('bannerSign', game.object.bannerSign);
		me.pool.register('bannerTarget', game.object.bannerTarget);
		me.pool.register('bgCoklat', game.object.bgCoklat);
		me.pool.register('endBanner', game.object.endBanner);
		me.pool.register('bannerScoreTarget', game.object.bannerScoreTarget);
		me.pool.register('buffStrenghtLogo', game.object.buffStrenghtLogo);
		me.pool.register('celengan_babi', game.object.celengan_babi);
		me.pool.register('costumerPlate', game.object.costumerPlate);
		me.pool.register('gamePlay', game.object.gamePlay);
		me.pool.register('gamePlayHighScore', game.object.gamePlayHighScore);
		me.pool.register('gameScreen', game.object.gameScreen);
		me.pool.register('gameScreenMeja', game.object.gameScreenMeja);
		me.pool.register('handKlik', game.object.handKlik);
		me.pool.register('hook', game.object.hook);
		me.pool.register('score', game.object.score);
		me.pool.register('spawnerSushiContainer', game.object.spawnerSushiContainer);
		me.pool.register('timerGame', game.object.timerGame);
		me.pool.register('buffBase', game.object.buffBase);
		me.pool.register('I000', game.object.I000);
		me.pool.register('I001', game.object.I001);
		me.pool.register('I002', game.object.I002);
		me.pool.register('I003', game.object.I003);
		me.pool.register('I004', game.object.I004);
		me.pool.register('I005', game.object.I005);
		me.pool.register('kucingLogo', game.object.kucingLogo);
		me.pool.register('karakter01', game.object.karakter01);
		me.pool.register('karakter02', game.object.karakter02);
		me.pool.register('karakter03', game.object.karakter03);
		me.pool.register('karakter04', game.object.karakter04);
		me.pool.register('karakter05', game.object.karakter05);
		me.pool.register('karakter06', game.object.karakter06);
		me.pool.register('karakter07', game.object.karakter07);
		me.pool.register('karakter08', game.object.karakter08);
		me.pool.register('karakter09', game.object.karakter09);
		me.pool.register('karakter10', game.object.karakter10);
		me.pool.register('karakter11', game.object.karakter11);
		me.pool.register('karakter12', game.object.karakter12);
		me.pool.register('karakter13', game.object.karakter13);
		me.pool.register('karakter14', game.object.karakter14);
		me.pool.register('karakter15', game.object.karakter15);
		me.pool.register('karakter16', game.object.karakter16);
		me.pool.register('karakter17', game.object.karakter17);
		me.pool.register('karakter18', game.object.karakter18);
		me.pool.register('karakter19', game.object.karakter19);
		me.pool.register('karakter20', game.object.karakter20);
		me.pool.register('karakter21', game.object.karakter21);
		me.pool.register('karakterBarTimer', game.object.karakterBarTimer);
		me.pool.register('karakterBase', game.object.karakterBase);
		me.pool.register('babi', game.object.babi);
		me.pool.register('highscore', game.object.highscore);
		me.pool.register('homeBg', game.object.homeBg);
		me.pool.register('menustore', game.object.menustore);
		me.pool.register('angrytutorial', game.object.angrytutorial);
		me.pool.register('BackTutorBtn', game.object.BackTutorBtn);
		me.pool.register('BarCharTutor', game.object.BarCharTutor);
		me.pool.register('BoxTutor', game.object.BoxTutor);
		me.pool.register('BtnExit', game.object.BtnExit);
		me.pool.register('BtnHookTutor', game.object.BtnHookTutor);
		me.pool.register('BtnPlayTutor', game.object.BtnPlayTutor);
		me.pool.register('BtnPlayTutorAnim', game.object.BtnPlayTutorAnim);
		me.pool.register('BtnUpgradeTutor', game.object.BtnUpgradeTutor);
		me.pool.register('Centang', game.object.Centang);
		me.pool.register('CloseTutorBtn', game.object.CloseTutorBtn);
		me.pool.register('CoinTutor', game.object.CoinTutor);
		me.pool.register('EffBarTutor', game.object.EffBarTutor);
		me.pool.register('Hand', game.object.Hand);
		me.pool.register('HandEff', game.object.HandEff);
		me.pool.register('HookTutor', game.object.HookTutor);
		me.pool.register('KarakterTutor', game.object.KarakterTutor);
		me.pool.register('NextTutorBtn', game.object.NextTutorBtn);
		me.pool.register('NextTutorial', game.object.NextTutorial);
		me.pool.register('SushiTableTutor', game.object.SushiTableTutor);
		me.pool.register('SushiTutor', game.object.SushiTutor);
		me.pool.register('SushiTutor2', game.object.SushiTutor2);
		me.pool.register('TimeBarTutor', game.object.TimeBarTutor);
		me.pool.register('TutorialContainer', game.object.TutorialContainer);
		me.pool.register('TutorialContainerAnim', game.object.TutorialContainerAnim);
		me.pool.register('BgmBar', game.object.BgmBar);
		me.pool.register('BGPause', game.object.BGPause);
		me.pool.register('BtnClosePause', game.object.BtnClosePause);
		me.pool.register('BtnContinue', game.object.BtnContinue);
		me.pool.register('BtnHelp', game.object.BtnHelp);
		me.pool.register('BtnPause', game.object.BtnPause);
		me.pool.register('BtnRestart', game.object.BtnRestart);
		me.pool.register('BtnToHome', game.object.BtnToHome);
		me.pool.register('BtnTutor', game.object.BtnTutor);
		me.pool.register('PauseContainer', game.object.PauseContainer);
		me.pool.register('PauseFrame', game.object.PauseFrame);
		me.pool.register('PauseIcon', game.object.PauseIcon);
		me.pool.register('SettingsFrame', game.object.SettingsFrame);
		me.pool.register('SpeakerBar', game.object.SpeakerBar);
		me.pool.register('SpeakerBarGelap', game.object.SpeakerBarGelap);
		me.pool.register('SpeakerIcon', game.object.SpeakerIcon);
		me.pool.register('testarrow', game.object.testarrow);
		me.pool.register('BGShop', game.object.BGShop);
		me.pool.register('BtnCloseShop', game.object.BtnCloseShop);
		me.pool.register('BtnNext', game.object.BtnNext);
		me.pool.register('BtnPlayShop', game.object.BtnPlayShop);
		me.pool.register('BuyBtn', game.object.BuyBtn);
		me.pool.register('CoinPlate', game.object.CoinPlate);
		me.pool.register('Item', game.object.Item);
		me.pool.register('LvlCounter', game.object.LvlCounter);
		me.pool.register('Panah', game.object.Panah);
		me.pool.register('RadioBtnShop', game.object.RadioBtnShop);
		me.pool.register('ShopContainer', game.object.ShopContainer);
		me.pool.register('delivery', game.object.delivery);
		me.pool.register('popUpSushiTarget', game.object.popUpSushiTarget);
		me.pool.register('sushiBase', game.object.sushiBase);
		me.pool.register('sushibenar', game.object.sushibenar);
		me.pool.register('sushimenuBase', game.object.sushimenuBase);
		me.pool.register('sushisalah', game.object.sushisalah);
		me.pool.register('sushi_00', game.object.sushi_00);
		me.pool.register('sushi_01', game.object.sushi_01);
		me.pool.register('sushi_02', game.object.sushi_02);
		me.pool.register('sushi_03', game.object.sushi_03);
		me.pool.register('sushi_04', game.object.sushi_04);
		me.pool.register('sushi_05', game.object.sushi_05);
		me.pool.register('sushi_06', game.object.sushi_06);
		me.pool.register('sushi_07', game.object.sushi_07);
		me.pool.register('sushi_08', game.object.sushi_08);
		me.pool.register('sushi_09', game.object.sushi_09);
		me.pool.register('sushi_10', game.object.sushi_10);
		me.pool.register('sushi_11', game.object.sushi_11);
		me.pool.register('sushi_12', game.object.sushi_12);
		me.pool.register('sushi_13', game.object.sushi_13);
		me.pool.register('sushi_14', game.object.sushi_14);
		me.pool.register('sushi_15', game.object.sushi_15);
		me.pool.register('sushi_16', game.object.sushi_16);
		me.pool.register('sushi_17', game.object.sushi_17);
		me.pool.register('sushi_18', game.object.sushi_18);
		me.pool.register('sushi_19', game.object.sushi_19);
		me.pool.register('sushi_20', game.object.sushi_20);
		me.pool.register('sushi_21', game.object.sushi_21);
		me.pool.register('sushi_22', game.object.sushi_22);
		me.pool.register('sushi_23', game.object.sushi_23);
		me.pool.register('sushi_24', game.object.sushi_24);
		me.pool.register('sushi_25', game.object.sushi_25);
		me.pool.register('sushi_26', game.object.sushi_26);
		me.pool.register('sushi_27', game.object.sushi_27);
		me.pool.register('sushi_28', game.object.sushi_28);
		me.pool.register('sushi_29', game.object.sushi_29);
		me.pool.register('sushi_30', game.object.sushi_30);
		me.pool.register('sushi_31', game.object.sushi_31);
		me.pool.register('sushi_32', game.object.sushi_32);
		me.pool.register('audioAPICheck', game.object.audioAPICheck);
		me.pool.register('RadioBtn', game.object.RadioBtn);
		me.pool.register('tutupTemp', game.object.tutupTemp);
		me.pool.register('webBgKanan', game.object.webBgKanan);
		me.pool.register('webBgKiri', game.object.webBgKiri);

		game.textureMap = new Map();
		game.textureMap.set("dayZero", new me.video.renderer.Texture([
			me.loader.getJSON("texture_dayZero_0")
		], undefined, false));

		game.textureMap.set("font", new me.video.renderer.Texture([
			me.loader.getJSON("texture_font_0")
		], undefined, false));

		game.textureMap.set("gameplay", new me.video.renderer.Texture([
			me.loader.getJSON("texture_gameplay_0"),
			me.loader.getJSON("texture_gameplay_1"),
			me.loader.getJSON("texture_gameplay_2"),
			me.loader.getJSON("texture_gameplay_3"),
			me.loader.getJSON("texture_gameplay_4")
		], undefined, false));

		game.textureMap.set("hook", new me.video.renderer.Texture([
			me.loader.getJSON("texture_hook_0")
		], undefined, false));

		game.textureMap.set("image", new me.video.renderer.Texture([
			me.loader.getJSON("texture_image_0")
		], undefined, false));

		game.textureMap.set("Shop", new me.video.renderer.Texture([
			me.loader.getJSON("texture_Shop_0")
		], undefined, false));

		game.imageLocation = {
			"level0_g": "dayZero",
			"level0_tutor a": "dayZero",
			"level0_tutor b": "dayZero",
			"level0_tutor c": "dayZero",
			"level0_tutor d": "dayZero",
			"level0_tutor e": "dayZero",
			"level0_tutor f": "dayZero",
			"level0_tutorbackground": "dayZero",
			"fontSushiKotak": "font",
			"fontSushiKotak_White": "font",
			"sushi_font": "font",
			"sushi_font_White": "font",
			"addToBank - 00": "gameplay",
			"addToBank - 01": "gameplay",
			"addToBank - 02": "gameplay",
			"addToBank - 03": "gameplay",
			"addToBank - 04": "gameplay",
			"addToBank - 05": "gameplay",
			"addToBank - 06": "gameplay",
			"addToBank - 07": "gameplay",
			"addToBank - 08": "gameplay",
			"addToBank - 09": "gameplay",
			"addToBank - 10": "gameplay",
			"addToBank - 11": "gameplay",
			"addToBank - 12": "gameplay",
			"addToBankSpark - 00": "gameplay",
			"addToBankSpark - 01": "gameplay",
			"addToBankSpark - 02": "gameplay",
			"addToBankSpark - 03": "gameplay",
			"addToBankSpark - 04": "gameplay",
			"addToBankSpark - 05": "gameplay",
			"angryEffect-1": "gameplay",
			"angryEffect-2": "gameplay",
			"angryEffect-3": "gameplay",
			"angryEffect-3tutorial": "gameplay",
			"angryEffect-dog": "gameplay",
			"arrow_glow_01": "gameplay",
			"arrow_glow_02": "gameplay",
			"arrow_glow_03": "gameplay",
			"arrow_glow_04": "gameplay",
			"arrow_glow_05": "gameplay",
			"arrow_glow_flip_01": "gameplay",
			"arrow_glow_flip_02": "gameplay",
			"arrow_glow_flip_03": "gameplay",
			"arrow_glow_flip_04": "gameplay",
			"arrow_glow_flip_05": "gameplay",
			"auto satisfaction": "gameplay",
			"background": "gameplay",
			"Back_to_home": "gameplay",
			"bg-pause": "gameplay",
			"boxanim_1": "gameplay",
			"boxanim_2": "gameplay",
			"boxanim_3": "gameplay",
			"boxanim_4": "gameplay",
			"Buff magic effect_0000": "gameplay",
			"Buff magic effect_0001": "gameplay",
			"Buff magic effect_0002": "gameplay",
			"Buff magic effect_0003": "gameplay",
			"Buff magic effect_0004": "gameplay",
			"Buff magic effect_0005": "gameplay",
			"Buff magic effect_0006": "gameplay",
			"Buff magic effect_0007": "gameplay",
			"Buff magic effect_0008": "gameplay",
			"Buff magic effect_0009": "gameplay",
			"Buff magic effect_0010": "gameplay",
			"Buff magic effect_0011": "gameplay",
			"Buff magic effect_0012": "gameplay",
			"Buff magic effect_0013": "gameplay",
			"Buff magic effect_0014": "gameplay",
			"Buff particle_0000": "gameplay",
			"Buff particle_0001": "gameplay",
			"Buff particle_0002": "gameplay",
			"Buff particle_0003": "gameplay",
			"Buff particle_0004": "gameplay",
			"Buff particle_0005": "gameplay",
			"Buff particle_0006": "gameplay",
			"buff_clock": "gameplay",
			"buff_desert": "gameplay",
			"buff_magic": "gameplay",
			"buff_magic_small": "gameplay",
			"buff_money": "gameplay",
			"buff_rainbow": "gameplay",
			"buff_strength": "gameplay",
			"buletan glow": "gameplay",
			"buletan": "gameplay",
			"button_continue": "gameplay",
			"button_play": "gameplay",
			"button_play_000": "gameplay",
			"button_play_001": "gameplay",
			"button_play_small": "gameplay",
			"ceiling": "gameplay",
			"close": "gameplay",
			"coint down_0000": "gameplay",
			"coint down_0001": "gameplay",
			"coint down_0002": "gameplay",
			"coint down_0003": "gameplay",
			"coint down_0004": "gameplay",
			"coint down_0005": "gameplay",
			"coint down_0006": "gameplay",
			"coint down_0007": "gameplay",
			"coint down_0008": "gameplay",
			"coint down_0009": "gameplay",
			"coint down_0010": "gameplay",
			"coin_down-00": "gameplay",
			"coin_down-01": "gameplay",
			"coin_down-02": "gameplay",
			"coin_down-03": "gameplay",
			"coin_down-04": "gameplay",
			"coin_down-05": "gameplay",
			"coin_effect-00": "gameplay",
			"coin_effect-01": "gameplay",
			"coin_effect-02": "gameplay",
			"coin_effect-03": "gameplay",
			"coin_effect-04": "gameplay",
			"coin_effect-05": "gameplay",
			"coin_up-00": "gameplay",
			"coin_up-01": "gameplay",
			"coin_up-02": "gameplay",
			"coin_up-03": "gameplay",
			"coin_up-04": "gameplay",
			"coin_up-05": "gameplay",
			"coin_up-06": "gameplay",
			"coin_up-07": "gameplay",
			"coin_up-08": "gameplay",
			"coin_up-09": "gameplay",
			"conveyor_slide": "gameplay",
			"Crane moves faster": "gameplay",
			"customer_plate": "gameplay",
			"day_buff_crane": "gameplay",
			"day_deco_closed": "gameplay",
			"day_frame_highscore-00": "gameplay",
			"day_frame_highscore-01": "gameplay",
			"day_frame_highscore-02": "gameplay",
			"day_frame_highscore-03": "gameplay",
			"day_frame_highscore-04": "gameplay",
			"day_frame_highscore-05": "gameplay",
			"day_frame_highscore-06": "gameplay",
			"day_frame_highscore-07": "gameplay",
			"day_frame_highscore-08": "gameplay",
			"day_frame_highscore-09": "gameplay",
			"day_frame_highscore-10": "gameplay",
			"day_frame_highscore-11": "gameplay",
			"day_frame_highscore-12": "gameplay",
			"day_frame_highscore-13": "gameplay",
			"day_frame_highscore-14": "gameplay",
			"day_frame_highscore": "gameplay",
			"day_frame_target": "gameplay",
			"double money earnings": "gameplay",
			"end_button_shop": "gameplay",
			"end_frame": "gameplay",
			"end_frame_highscore": "gameplay",
			"filtergelap": "gameplay",
			"frame_highscore": "gameplay",
			"frame_order": "gameplay",
			"frame_piggy": "gameplay",
			"FX TIME BAR_00000": "gameplay",
			"FX TIME BAR_00001": "gameplay",
			"FX TIME BAR_00002": "gameplay",
			"FX TIME BAR_00003": "gameplay",
			"FX TIME BAR_00004": "gameplay",
			"FX TIME BAR_00005": "gameplay",
			"FX TIME BAR_00006": "gameplay",
			"FX TIME BAR_00007": "gameplay",
			"FX TIME BAR_00008": "gameplay",
			"FX TIME BAR_00009": "gameplay",
			"FX TIME BAR_00010": "gameplay",
			"FX TIME BAR_00011": "gameplay",
			"FX TIME BAR_00012": "gameplay",
			"FX TIME BAR_00013": "gameplay",
			"FX TIME BAR_00014": "gameplay",
			"FX TIME BAR_00015": "gameplay",
			"FX TIME BAR_00016": "gameplay",
			"FX TIME BAR_00017": "gameplay",
			"FX TIME BAR_00018": "gameplay",
			"FX TIME BAR_00019": "gameplay",
			"fx_timeBarAnim - 00": "gameplay",
			"fx_timeBarAnim - 01": "gameplay",
			"fx_timeBarAnim - 02": "gameplay",
			"fx_timeBarAnim - 03": "gameplay",
			"fx_timeBarAnim - 04": "gameplay",
			"fx_timeBarAnim - 05": "gameplay",
			"fx_timeBarAnim - 06": "gameplay",
			"fx_timeBarAnim - 07": "gameplay",
			"fx_timeBarAnim - 08": "gameplay",
			"game screen meja": "gameplay",
			"game screen": "gameplay",
			"hand fx_0000": "gameplay",
			"hand fx_0001": "gameplay",
			"hand fx_0002": "gameplay",
			"hand fx_0003": "gameplay",
			"hand fx_0004": "gameplay",
			"hand fx_0005": "gameplay",
			"home_bg": "gameplay",
			"home_button_setting": "gameplay",
			"home_button_shop": "gameplay",
			"home_frame_bank": "gameplay",
			"home_frame_score": "gameplay",
			"karakter01_angry": "gameplay",
			"karakter01_basic": "gameplay",
			"karakter01_basic_kanan": "gameplay",
			"karakter01_basic_kiri": "gameplay",
			"karakter01_happy": "gameplay",
			"karakter01_sad": "gameplay",
			"karakter02_angry": "gameplay",
			"karakter02_basic": "gameplay",
			"karakter02_basic_blink": "gameplay",
			"karakter02_happy": "gameplay",
			"karakter02_sad": "gameplay",
			"karakter03_angry": "gameplay",
			"karakter03_basic": "gameplay",
			"karakter03_basic_kanan": "gameplay",
			"karakter03_basic_kiri": "gameplay",
			"karakter03_happy": "gameplay",
			"karakter03_sad": "gameplay",
			"karakter04_angry": "gameplay",
			"karakter04_basic": "gameplay",
			"karakter04_basic_blink": "gameplay",
			"karakter04_happy": "gameplay",
			"karakter04_sad": "gameplay",
			"karakter06_angry": "gameplay",
			"karakter06_basic": "gameplay",
			"karakter06_basic_blink": "gameplay",
			"karakter06_happy": "gameplay",
			"karakter06_sad": "gameplay",
			"karakter07_angry": "gameplay",
			"karakter07_basic": "gameplay",
			"karakter07_basic_blink": "gameplay",
			"karakter07_happy": "gameplay",
			"karakter07_sad": "gameplay",
			"karakter08_angry": "gameplay",
			"karakter08_basic": "gameplay",
			"karakter08_basic_kanan": "gameplay",
			"karakter08_basic_kiri": "gameplay",
			"karakter08_happy": "gameplay",
			"karakter08_sad": "gameplay",
			"karakter09_angry": "gameplay",
			"karakter09_basic": "gameplay",
			"karakter09_basic_blink": "gameplay",
			"karakter09_happy": "gameplay",
			"karakter09_sad": "gameplay",
			"karakter10_angry": "gameplay",
			"karakter10_basic": "gameplay",
			"karakter10_basic_kanan": "gameplay",
			"karakter10_basic_kiri": "gameplay",
			"karakter10_happy": "gameplay",
			"karakter10_sad": "gameplay",
			"karakter11_angry": "gameplay",
			"karakter11_basic": "gameplay",
			"karakter11_basic_blink": "gameplay",
			"karakter11_happy": "gameplay",
			"karakter11_sad": "gameplay",
			"karakter12_angry": "gameplay",
			"karakter12_basic": "gameplay",
			"karakter12_basic_blink": "gameplay",
			"karakter12_happy": "gameplay",
			"karakter12_sad": "gameplay",
			"karakter13_angry": "gameplay",
			"karakter13_basic": "gameplay",
			"karakter13_basic_kanan": "gameplay",
			"karakter13_basic_kiri": "gameplay",
			"karakter13_happy": "gameplay",
			"karakter13_sad": "gameplay",
			"karakter14_angry": "gameplay",
			"karakter14_basic": "gameplay",
			"karakter14_basic_blink": "gameplay",
			"karakter14_happy": "gameplay",
			"karakter14_sad": "gameplay",
			"karakter15_angry": "gameplay",
			"karakter15_basic": "gameplay",
			"karakter15_basic_kanan": "gameplay",
			"karakter15_basic_kiri": "gameplay",
			"karakter15_happy": "gameplay",
			"karakter15_sad": "gameplay",
			"karakter17_angry": "gameplay",
			"karakter17_basic": "gameplay",
			"karakter17_basic_kanan": "gameplay",
			"karakter17_basic_kiri": "gameplay",
			"karakter17_happy": "gameplay",
			"karakter17_sad": "gameplay",
			"karakter18_angry": "gameplay",
			"karakter18_basic": "gameplay",
			"karakter18_basic_blink": "gameplay",
			"karakter18_happy": "gameplay",
			"karakter18_sad": "gameplay",
			"karakter20_angry": "gameplay",
			"karakter20_basic": "gameplay",
			"karakter20_basic_blink": "gameplay",
			"karakter20_happy": "gameplay",
			"karakter20_sad": "gameplay",
			"karakter21_angry": "gameplay",
			"karakter21_basic": "gameplay",
			"karakter21_basic_blink": "gameplay",
			"karakter21_happy": "gameplay",
			"karakter21_sad": "gameplay",
			"Klik fx_0000": "gameplay",
			"Klik fx_0001": "gameplay",
			"Klik fx_0002": "gameplay",
			"Klik fx_0003": "gameplay",
			"Klik fx_0004": "gameplay",
			"Klik fx_0005": "gameplay",
			"Klik fx_0006": "gameplay",
			"Klik fx_0007": "gameplay",
			"Klik fx_0008": "gameplay",
			"Klik fx_0009": "gameplay",
			"logo": "gameplay",
			"mid_ground": "gameplay",
			"page_radio_big": "gameplay",
			"page_radio_small": "gameplay",
			"particle-1-00": "gameplay",
			"particle-1-01": "gameplay",
			"particle-1-02": "gameplay",
			"particle-1-03": "gameplay",
			"particle-1-04": "gameplay",
			"particle-1-05": "gameplay",
			"particle-1-06": "gameplay",
			"particle-1-07": "gameplay",
			"particle-1-08": "gameplay",
			"particle-1-09": "gameplay",
			"particle-1-10": "gameplay",
			"particle-1-11": "gameplay",
			"particle-1-12": "gameplay",
			"particle-1-13": "gameplay",
			"particle-1-14": "gameplay",
			"particle-1-15": "gameplay",
			"particle-1-16": "gameplay",
			"particle-1-17": "gameplay",
			"particle-1-18": "gameplay",
			"particle-1-19": "gameplay",
			"particle-2-00": "gameplay",
			"particle-2-01": "gameplay",
			"particle-2-02": "gameplay",
			"particle-2-03": "gameplay",
			"particle-2-04": "gameplay",
			"particle-2-05": "gameplay",
			"particle-2-06": "gameplay",
			"particle-2-07": "gameplay",
			"particle-2-08": "gameplay",
			"particle-2-09": "gameplay",
			"particle-2-10": "gameplay",
			"particle-2-11": "gameplay",
			"particle-2-12": "gameplay",
			"particle-2-13": "gameplay",
			"particle-2-14": "gameplay",
			"particle-2-15": "gameplay",
			"particle-2-16": "gameplay",
			"particle-2-17": "gameplay",
			"particle-2-18": "gameplay",
			"particle-2-19": "gameplay",
			"particle-2-20": "gameplay",
			"particle-2-21": "gameplay",
			"particle-2-22": "gameplay",
			"particle-2-23": "gameplay",
			"particle-2-24": "gameplay",
			"particle-2-25": "gameplay",
			"pause pressed": "gameplay",
			"pause": "gameplay",
			"Pause_button_help": "gameplay",
			"Pause_button_help_pressed": "gameplay",
			"Pause_button_home": "gameplay",
			"Pause_button_restart-OFF": "gameplay",
			"Pause_button_restart": "gameplay",
			"Pause_button_restart_pressed": "gameplay",
			"Pause_button_sfx off": "gameplay",
			"Pause_button_sfx on": "gameplay",
			"Pause_button_soundOff": "gameplay",
			"Pause_button_soundON": "gameplay",
			"Pause_frame": "gameplay",
			"score": "gameplay",
			"settings_freame": "gameplay",
			"smoke effect_0000": "gameplay",
			"smoke effect_0001": "gameplay",
			"smoke effect_0002": "gameplay",
			"smoke effect_0003": "gameplay",
			"smoke effect_0004": "gameplay",
			"smoke effect_0005": "gameplay",
			"smoke effect_0006": "gameplay",
			"smoke effect_0007": "gameplay",
			"smoke effect_0008": "gameplay",
			"smoke effect_0009": "gameplay",
			"smoke effect_0010": "gameplay",
			"smoke effect_0011": "gameplay",
			"smoke effect_0012": "gameplay",
			"smoke effect_0013": "gameplay",
			"smoke effect_0014": "gameplay",
			"smoke effect_0015": "gameplay",
			"smoke effect_0016": "gameplay",
			"smoke effect_0017": "gameplay",
			"smoke effect_0018": "gameplay",
			"smoke effect_0019": "gameplay",
			"smoke effect_0020": "gameplay",
			"smoke effect_0021": "gameplay",
			"store_000": "gameplay",
			"store_001": "gameplay",
			"suhsi_font_0": "gameplay",
			"sushi_tutor_1": "gameplay",
			"sushi_tutor_2": "gameplay",
			"sushi_tutor_3": "gameplay",
			"switch all sushi": "gameplay",
			"timeBarTutor1": "gameplay",
			"timeBarTutor2": "gameplay",
			"timer_00": "gameplay",
			"timer_01": "gameplay",
			"timer_02": "gameplay",
			"timer_03": "gameplay",
			"timer_04": "gameplay",
			"time_counter": "gameplay",
			"time_frame": "gameplay",
			"time_frame_back": "gameplay",
			"trophy": "gameplay",
			"tutorial_Page_1-2": "gameplay",
			"tutorkarakter": "gameplay",
			"tutorKarakter2": "gameplay",
			"tutorKarakterBar": "gameplay",
			"tutorKarakter_1": "gameplay",
			"tutorKarakter_2": "gameplay",
			"tutorPage_1": "gameplay",
			"tutorPage_2": "gameplay",
			"tutorPage_3": "gameplay",
			"tutorPage_4": "gameplay",
			"tutor_anim_1": "gameplay",
			"tutor_anim_2": "gameplay",
			"tutor_anim_3": "gameplay",
			"tutor_anim_4": "gameplay",
			"tutor_anim_5": "gameplay",
			"tutor_anim_6": "gameplay",
			"tutor_anim_7": "gameplay",
			"tutor_anim_btn": "gameplay",
			"tutor_button_back": "gameplay",
			"tutor_button_back_pressed": "gameplay",
			"tutor_button_next": "gameplay",
			"tutor_button_next_pressed": "gameplay",
			"tutor_button_upgrade": "gameplay",
			"tutor_how_to_play": "gameplay",
			"tutor_next": "gameplay",
			"wall": "gameplay",
			"webScreeKanan": "gameplay",
			"webScreeKiri": "gameplay",
			"correct": "hook",
			"false": "hook",
			"hook": "image",
			"hook_1": "hook",
			"hook_close": "hook",
			"hook_open": "hook",
			"sushi_00": "hook",
			"sushi_00_hook": "hook",
			"sushi_00_menu": "hook",
			"sushi_01": "hook",
			"sushi_01_hook": "hook",
			"sushi_01_menu": "hook",
			"sushi_02": "hook",
			"sushi_02_hook": "hook",
			"sushi_02_menu": "hook",
			"sushi_03": "hook",
			"sushi_03_hook": "hook",
			"sushi_03_menu": "hook",
			"sushi_04": "hook",
			"sushi_04_hook": "hook",
			"sushi_04_menu": "hook",
			"sushi_05": "hook",
			"sushi_05_hook": "hook",
			"sushi_05_menu": "hook",
			"sushi_06": "hook",
			"sushi_06_hook": "hook",
			"sushi_06_menu": "hook",
			"sushi_07": "hook",
			"sushi_07_hook": "hook",
			"sushi_07_menu": "hook",
			"sushi_08": "hook",
			"sushi_08_hook": "hook",
			"sushi_08_menu": "hook",
			"sushi_09": "hook",
			"sushi_09_hook": "hook",
			"sushi_09_menu": "hook",
			"sushi_10": "hook",
			"sushi_10_hook": "hook",
			"sushi_10_menu": "hook",
			"sushi_11": "hook",
			"sushi_11_hook": "hook",
			"sushi_11_menu": "hook",
			"sushi_12": "hook",
			"sushi_12_hook": "hook",
			"sushi_12_menu": "hook",
			"sushi_13": "hook",
			"sushi_13_hook": "hook",
			"sushi_13_menu": "hook",
			"sushi_14": "hook",
			"sushi_14_hook": "hook",
			"sushi_14_menu": "hook",
			"sushi_15": "hook",
			"sushi_15_hook": "hook",
			"sushi_15_menu": "hook",
			"sushi_16": "hook",
			"sushi_16_hook": "hook",
			"sushi_16_menu": "hook",
			"sushi_17": "hook",
			"sushi_17_hook": "hook",
			"sushi_17_menu": "hook",
			"sushi_18": "hook",
			"sushi_18_hook": "hook",
			"sushi_18_menu": "hook",
			"sushi_19": "hook",
			"sushi_19_hook": "hook",
			"sushi_19_menu": "hook",
			"sushi_20": "hook",
			"sushi_20_hook": "hook",
			"sushi_20_menu": "hook",
			"sushi_21": "hook",
			"sushi_21_hook": "hook",
			"sushi_21_menu": "hook",
			"sushi_22": "hook",
			"sushi_22_hook": "hook",
			"sushi_22_menu": "hook",
			"sushi_23": "hook",
			"sushi_23_hook": "hook",
			"sushi_23_menu": "hook",
			"sushi_24": "hook",
			"sushi_24_hook": "hook",
			"sushi_24_menu": "hook",
			"sushi_25": "hook",
			"sushi_25_hook": "hook",
			"sushi_25_menu": "hook",
			"sushi_26": "hook",
			"sushi_26_hook": "hook",
			"sushi_26_menu": "hook",
			"sushi_27": "hook",
			"sushi_27_hook": "hook",
			"sushi_27_menu": "hook",
			"sushi_28": "hook",
			"sushi_28_hook": "hook",
			"sushi_28_menu": "hook",
			"sushi_29": "hook",
			"sushi_29_hook": "hook",
			"sushi_29_menu": "hook",
			"sushi_30": "hook",
			"sushi_30_hook": "hook",
			"sushi_30_menu": "hook",
			"sushi_31": "hook",
			"sushi_31_hook": "hook",
			"sushi_31_menu": "hook",
			"sushi_32": "hook",
			"sushi_32_hook": "hook",
			"sushi_32_menu": "hook",
			"sushi_a": "hook",
			"sushi_a_hook": "hook",
			"sushi_a_menu": "hook",
			"sushi_b": "hook",
			"sushi_b_hook": "hook",
			"sushi_b_menu": "hook",
			"sushi_c": "hook",
			"sushi_c_hook": "hook",
			"sushi_c_menu": "hook",
			"sushi_d": "hook",
			"sushi_d_hook": "hook",
			"sushi_d_menu": "hook",
			"sushi_e": "hook",
			"sushi_e_hook": "hook",
			"sushi_e_menu": "hook",
			"sushi_I001_hook": "hook",
			"sushi_I002_hook": "hook",
			"sushi_I003_hook": "hook",
			"sushi_I004_hook": "hook",
			"sushi_I005_hook": "hook",
			"sushi_menu_base": "hook",
			"penutup": "image",
			"arrow small": "Shop",
			"shope_frame_time_locked": "Shop",
			"Shop_background": "Shop",
			"shop_button_buy pressed": "Shop",
			"shop_button_buy": "Shop",
			"shop_button_sold": "Shop",
			"shop_button_unavailable": "Shop",
			"shop_button_upgrade": "Shop",
			"shop_button_upgrade_pressed": "Shop",
			"shop_frame_cake": "Shop",
			"shop_frame_cat": "Shop",
			"shop_frame_crane": "Shop",
			"shop_frame_money": "Shop",
			"shop_frame_rainbow": "Shop",
			"shop_frame_time": "Shop",
			"shop_radio_fill": "Shop",
		};


		game.util.__populateAtlasIndices = function(animationKeys, settings){
			let tpAtlas = [], indices = {},
				width = 0, height = 0,
				texture = game.textureMap.get(settings.texture);
			for (let i = 0; i < animationKeys.length; i++) {
				let region = texture.getRegion(animationKeys[i]);
				if (region == null) {
					// throw an error
					throw new me.video.renderer.Texture.Error(
						"Texture - region for " + animationKeys[i] + " not found");
				}
				tpAtlas[i] = region;
				indices[animationKeys[i]] = i;
				width = Math.max(region.width, width);
				height = Math.max(region.height, height);
			}
			settings.framewidth = width;
			settings.frameheight = height;
			settings.atlas = tpAtlas;
			settings.atlasIndices = indices;
		}

		game.object.__spriteTP = me.Sprite.extend({
			init: function(x, y, settings = {}){
				settings.image = (settings.texture) ? game.textureMap.get(settings.texture) : settings.region;
				settings.anchorPoint = settings.anchorPoint || {
					x : 0.5,
					y: 0.5
				}
			this._super(me.Sprite, 'init', [x, y, settings]);

			this.alpha = 1;
			this.floating = false;
			this.alwaysUpdate = false;
			this.updateWhenPaused = false;
			this.isPersistent = false;

			this.imageName = settings.region;

			},
		});

		game.object.__collisionTP = me.Entity.extend({
			init: function(x, y, settings = {}) {
				this._super(me.Entity, 'init', [x, y, {width:settings.width, height:settings.height}]);

				this.anchorPoint.set(0, 0);
				this.name = settings.name;
				this.type = settings.type;
				// for backward compatibility
				this.class = settings.class || settings.type;
				this.id = settings.id;

				this.body.collisionType = me.collision.types.WORLD_SHAPE;

				// configure the body accordingly
				if(settings.collisionType != undefined) {
					this.body.collisionType = (game.collisionTypes[settings.collisionType]) ? game.collisionTypes[settings.collisionType] : me.collision.types[settings.collisionType];
				}
			}
		});

        // Put user code here //
        
        //  End of user code  //
		me.pool.register('spriteTP', game.object.__spriteTP);
		me.pool.register('collisionTP', game.object.__collisionTP);
		me.state.change("splashscreen");
	}
};
