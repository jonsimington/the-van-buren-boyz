// Generated by Creer at 05:20PM on April 08, 2016 UTC, git hash: 'e7ec4e35c89d7556b9e07d4331ac34052ac011bd'
// This is a simple class to represent the Nest object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A location (node) connected to other Nests via Webs (edges) in the game that Spiders can converge on, regardless of owner.
 * @extends GameObject
 */
var Nest = Class(GameObject, {
    /**
     * initializes a Nest with basic logic as provided by the Creer code generator
     *
     * @memberof Nest
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * All the Spiders currently located on this Nest.
         *
         * @name Nest#spiders
         * @type Array.<Spider>
         */
        this.spiders = [];

        /**
         * Webs that connect to this Nest.
         *
         * @name Nest#webs
         * @type Array.<Web>
         */
        this.webs = [];

        /**
         * The X coordinate of the Nest. Used for distance calculations.
         *
         * @name Nest#x
         * @type number
         */
        this.x = 0;

        /**
         * The Y coordinate of the Nest. Used for distance calculations.
         *
         * @name Nest#y
         * @type number
         */
        this.y = 0;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Nest;
