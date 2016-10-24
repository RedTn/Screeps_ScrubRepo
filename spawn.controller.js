/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.controller');
 * mod.thing == 'a thing'; // true
 */
var helpers = require('helpers');
var spawnName = "MainSpawn";

function spawnLoop() {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');

    // if(builders.length < 5 && Game.spawns['MainSpawn'].energy > 200) {
    //     var builderId = helpers.generateRandomId();
    //     var newName = Game.spawns['MainSpawn'].createCreep([WORK,CARRY,MOVE], 'builder' + builderId, {role: 'builder'});
    //     console.log('Spawning new builder: ' + newName);
    // }

    // if(upgraders.length < 5 && Game.spawns['MainSpawn'].energy > 200) {
    //     var upgraderId = helpers.generateRandomId();
    //     var newName = Game.spawns['MainSpawn'].createCreep([WORK,CARRY,MOVE], 'upgrader' + upgraderId, {role: 'upgrader'});
    //     console.log('Spawning new upgrader: ' + newName);
    // }

    if(harvesters.length < 2 && Game.spawns[spawnName].energy >= 300) {
        var harvesterId = helpers.generateRandomId();
        var newName = Game.spawns[spawnName].createCreep([WORK,CARRY,CARRY,CARRY,MOVE], 'harvester' + harvesterId, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
        return;
    }
    
    if(transporters.length < 1 && Game.spawns[spawnName].energy >= 300) {
        var creepId = helpers.generateRandomId();
        var newName = Game.spawns[spawnName].createCreep([WORK,CARRY,CARRY,CARRY,MOVE], 'transporter' + creepId, {role: 'transporter'});
        console.log('Spawning new harvester: ' + newName);
        return;
    }
}


module.exports = {
    spawnLoop() {
        spawnLoop();
    }
};