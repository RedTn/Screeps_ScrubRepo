/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.transporter');
 * mod.thing == 'a thing'; // true
 */
 var helpers = require('helpers');
 
 var roleTransporter = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var currentCarry = _.sum(creep.carry);
        if (currentCarry < 150) {
            var harvesters = helpers.getHarvesters();
            if(harvesters != null) {
                if(creep.withdraw(harvesters[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(harvesters[0]);
                }
            }
        }
        else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};

module.exports = roleTransporter;