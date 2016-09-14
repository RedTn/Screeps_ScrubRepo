/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.controller');
 * mod.thing == 'a thing'; // true
 */
var helpers = require('helpers');

function spawnLoop() {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(upgraders.length < 10 && Game.spawns['MainSpawn'].energy > 200) {
        var upgraderId = helpers.generateRandomId();
        var newName = Game.spawns['MainSpawn'].createCreep([WORK,CARRY,MOVE], 'upgrader' + upgraderId, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }

    if(harvesters.length < 10 && Game.spawns['MainSpawn'].energy > 200) {
        var harvesterId = helpers.generateRandomId();
        var newName = Game.spawns['MainSpawn'].createCreep([WORK,CARRY,MOVE], 'harvester' + harvesterId, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
}


module.exports = {
    spawnLoop() {
        spawnLoop();
    }
};