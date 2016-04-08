// Generated by Creer at 05:20PM on April 08, 2016 UTC, git hash: 'e7ec4e35c89d7556b9e07d4331ac34052ac011bd'
// This is a simple class to represent the Player object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A player in this game. Every AI controls one player.
 * @extends GameObject
 */
var Player = Class(GameObject, {
    /**
     * initializes a Player with basic logic as provided by the Creer code generator
     *
     * @memberof Player
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * This player's BroodMother. If it dies they lose the game.
         *
         * @name Player#broodMother
         * @type BroodMother
         */
        this.broodMother = null;

        /**
         * What type of client this is, e.g. 'Python', 'JavaScript', or some other language. For potential data mining purposes.
         *
         * @name Player#clientType
         * @type string
         */
        this.clientType = "";

        /**
         * If the player lost the game or not.
         *
         * @name Player#lost
         * @type boolean
         */
        this.lost = false;

        /**
         * The name of the player.
         *
         * @name Player#name
         * @type string
         */
        this.name = "";

        /**
         * This player's opponent in the game.
         *
         * @name Player#otherPlayer
         * @type Player
         */
        this.otherPlayer = null;

        /**
         * The reason why the player lost the game.
         *
         * @name Player#reasonLost
         * @type string
         */
        this.reasonLost = "";

        /**
         * The reason why the player won the game.
         *
         * @name Player#reasonWon
         * @type string
         */
        this.reasonWon = "";

        /**
         * All the Spiders owned by this player.
         *
         * @name Player#spiders
         * @type Array.<Spider>
         */
        this.spiders = [];

        /**
         * The amount of time (in ns) remaining for this AI to send commands.
         *
         * @name Player#timeRemaining
         * @type number
         */
        this.timeRemaining = 0;

        /**
         * If the player won the game or not.
         *
         * @name Player#won
         * @type boolean
         */
        this.won = false;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Player;
