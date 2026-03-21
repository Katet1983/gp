// ******************************
// Tingly Builder JavaScript file
// ******************************

//Publisher.js file Example.
//Last Update: November 2015

//First, let’s describe the game a bit. These are the variables
//you should reference in your Booster API initialization in
//your index.html
var publisher = {

    gameName: "My Awesome Game",
    gameVersion: "1.02",
    gameCategory: "Puzzle",
    developerId: "0120", //Provided by Booster
    gameCode: "game_code", //Provided by Booster
    gameAnalyticsId: "",

    //Now, on to advertising settings.  Please leave these
    //placeholder values as-is when implementing.

    adChannel: 0,

    enableAds: false,
    adFreq: "60",
    firstAd: "60",

    //Controlling More Games behavior…
    moreGames: false,
    moreGamesURL: "http://www.coolgames.com",

    yahoo: false,

    //Reward Video Ids
    desktopRewardId: 0,
    mobileRewardId: 0
};

window.RewardedVideoConfig = {
    AdTech: {
        adtechZones: {
            mobile: 4103,
            desktop: 4102
        }
    },
    HyperMx: {
        descriptor: {
            frameClass: "adFrame",
            adClass: "hypermx",
            width: 800,
            height: 540
        },
        distId: 80801202,
        siteId: "jewel_academy_prod"
    }
};