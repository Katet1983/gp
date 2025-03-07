var CANVAS_WIDTH = 960;
var CANVAS_HEIGHT = 540;

var EDGEBOARD_X = 128;
var EDGEBOARD_Y = 60;

var FPS = 30;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE = false;
var FONT_GAME = "space_marine";

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_MENU_LEVEL    = 2;
var STATE_MODE_MENU = 3;
var STATE_MENU_DIFFICULTY = 4;
var STATE_MENU_SELECT_CAR = 5;
var STATE_GAME    = 6;

var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP   = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT  = 3;
var ON_DRAG_START = 4;
var ON_DRAG_END   = 5;
var ON_MSG_BOX_LEFT_BUT = 6;
var ON_MSG_BOX_CENTER_BUT = 7;
var ON_MSG_BOX_RIGHT_BUT = 8;
var ON_BUT_YES_DOWN = 9;
var ON_CAR_SELECTION_RIGHT = 10;
var ON_CAR_SELECTION_LEFT = 11;

var STATE_GAME_START = 0;
var STATE_GAME_MOVE     = 1;
var STATE_GAME_OVER = 2;

var DIFFICULT_EASY = 0;
var DIFFICULT_MEDIUM = 1;
var DIFFICULT_HARD = 2;
var DIFFICULT_EXTREME = 3;

var STEP_LENGTH = 0.2;
var ACCELLERATION_STEP;
var DECELLERATION_STEP;
var MAX_SPEED;
var NUM_CARS = 2;
var NUM_CAR_SPRITE = 9;
var DIFFICULTY_VALUES = [0.3,0.5,0.68,0.7];
var DIFFICULTY_MULTIPLIER = [1,2,3,4];
var MAX_SPEED;

var RAIL_SEQUENCE_PER_CAR = new Array();
RAIL_SEQUENCE_PER_CAR[0] = [0,1];
RAIL_SEQUENCE_PER_CAR[1] = [1,0];

var NUM_LEVELS;
var OUT_OF_TRACK_DIST = 100;
var STEP_CURVE_SAMPLE = 150;
var MIN_ANGLE_SAMPLE = 5;
var RADIUS_CAR_COLLISION = 12;
var DIST_TRACKS = 16;
var AI_COUNTER_UPDATE = 0;
var KEYCODE_CAR1;
var KEYCODE_CAR2;
var START_COUNTDOWN = 3000;
var NUM_LAPS;
var MAX_SCORE_PER_TRACK = 120000; //TOTAL TIME FOR GAINING POINTS MUST NOT EXCEED 2 mins
const DEBUG_DRAW = false;

var NUM_ROWS_PAGE_LEVEL = 2;
var NUM_COLS_PAGE_LEVEL = 4;

var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;