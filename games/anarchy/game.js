// Generated by Creer at 03:23PM on November 14, 2015 UTC, git hash: '1b69e788060071d644dd7b8745dca107577844e1'
// This is a simple class to represent the Game object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var BaseGame = require(__basedir + "/joueur/baseGame");

// game object classes
var Warehouse = require("./warehouse");
var WeatherStation = require("./weatherStation");
var Forecast = require("./forecast");
var GameObject = require("./gameObject");
var FireDepartment = require("./fireDepartment");
var PoliceDepartment = require("./policeDepartment");
var Player = require("./player");
var Building = require("./building");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc Two player grid based game where each player tries to burn down the other player's buildings. Let it burn!
 * @extends BaseGame
 */
var Game = Class(BaseGame, {
    /**
     * initializes a Game with basic logic as provided by the Creer code generator
     *
     * @memberof Game
     */
    init: function() {
        BaseGame.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

        /**
         * The name of the game.
         */
        this.name = "Anarchy";


        /**
         * How many bribes players get at the beginning of their turn, not counting their burned down Buildings.
         *
         * @name Game#baseBribesPerTurn
         * @type number
         */
        this.baseBribesPerTurn = 0;

        /**
         * All the buildings in the game.
         *
         * @name Game#buildings
         * @type Array.<Building>
         */
        this.buildings = [];

        /**
         * The current Forecast, which will be applied at the end of the turn.
         *
         * @name Game#currentForecast
         * @type Forecast
         */
        this.currentForecast = null;

        /**
         * The player whose turn it is currently. That player can send commands. Other players cannot.
         *
         * @name Game#currentPlayer
         * @type Player
         */
        this.currentPlayer = null;

        /**
         * The current turn number, starting at 0 for the first player's turn
         *
         * @name Game#currentTurn
         * @type number
         */
        this.currentTurn = 0;

        /**
         * All the forecasts in the game, indexed by turn number.
         *
         * @name Game#forecasts
         * @type Array.<Forecast>
         */
        this.forecasts = [];

        /**
         * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
         *
         * @name Game#gameObjects
         * @type Object.<string, GameObject>
         */
        this.gameObjects = {};

        /**
         * The width of the entire map along the vertical (y) axis.
         *
         * @name Game#mapHeight
         * @type number
         */
        this.mapHeight = 0;

        /**
         * The width of the entire map along the horizontal (x) axis.
         *
         * @name Game#mapWidth
         * @type number
         */
        this.mapWidth = 0;

        /**
         * The maximum amount of fire value for any Building.
         *
         * @name Game#maxFire
         * @type number
         */
        this.maxFire = 0;

        /**
         * The maximum amount of intensity value for any Forecast.
         *
         * @name Game#maxForecastIntensity
         * @type number
         */
        this.maxForecastIntensity = 0;

        /**
         * The maximum number of turns before the game will automatically end.
         *
         * @name Game#maxTurns
         * @type number
         */
        this.maxTurns = 0;

        /**
         * The next Forecast, which will be applied at the end of your opponent's turn. This is also the Forecast WeatherStations can control this turn.
         *
         * @name Game#nextForecast
         * @type Forecast
         */
        this.nextForecast = null;

        /**
         * List of all the players in the game.
         *
         * @name Game#players
         * @type Array.<Player>
         */
        this.players = [];

        /**
         * A unique identifier for the game instance that is being played.
         *
         * @name Game#session
         * @type string
         */
        this.session = "";


        this._gameObjectClasses = {
            "Warehouse": Warehouse,
            "WeatherStation": WeatherStation,
            "Forecast": Forecast,
            "GameObject": GameObject,
            "FireDepartment": FireDepartment,
            "PoliceDepartment": PoliceDepartment,
            "Player": Player,
            "Building": Building,
        };

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Game;
