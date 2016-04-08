// Generated by Creer at 05:20PM on April 08, 2016 UTC, git hash: 'e7ec4e35c89d7556b9e07d4331ac34052ac011bd'
// This is a simple class to represent the BroodMother object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var Spider = require("./spider");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc The Spider Queen. She alone can spawn Spiderlings for each Player, and if she dies the owner loses.
 * @extends Spider
 */
var BroodMother = Class(Spider, {
    /**
     * initializes a BroodMother with basic logic as provided by the Creer code generator
     *
     * @memberof BroodMother
     * @private
     */
    init: function() {
        Spider.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * How many eggs the BroodMother has to spawn Spiderlings this turn.
         *
         * @name BroodMother#eggs
         * @type number
         */
        this.eggs = 0;

        /**
         * How much health this BroodMother has left. When it reaches 0, she dies and her owner loses.
         *
         * @name BroodMother#health
         * @type number
         */
        this.health = 0;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },


    /**
     * Consumes a Spiderling of the same owner to regain some eggs to spawn more Spiderlings.
     *
     * @memberof BroodMother
     * @instance
     * @param {Spiderling} spiderling - The Spiderling to consume. It must be on the same Nest as this BroodMother.
     * @returns {boolean} - True if the Spiderling was consumed. False otherwise.
     */
    consume: function(spiderling) {
        return client.runOnServer(this, "consume", {
            spiderling: spiderling,
        });
    },

    /**
     * Spawns a new Spiderling on the same Nest as this BroodMother, consuming an egg.
     *
     * @memberof BroodMother
     * @instance
     * @param {string} spiderlingType - The string name of the Spiderling class you want to Spawn. Must be 'Spitter', 'Weaver', or 'Cutter'.
     * @returns {Spiderling} - The newly spwaned Spiderling if successful. Null otherwise.
     */
    spawn: function(spiderlingType) {
        return client.runOnServer(this, "spawn", {
            spiderlingType: spiderlingType,
        });
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = BroodMother;
