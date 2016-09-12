/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn.controller');
 * mod.thing == 'a thing'; // true
 */
var harvesterName = 0;
var upgraderName = 0;

function spawnLoop() {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(upgraders.length < 10 && Game.spawns['MainSpawn'].energy > 200) {
        var newName = Game.spawns['MainSpawn'].createCreep([WORK,CARRY,MOVE], 'upgrader' + upgraderName, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
        upgraderName++;
    }

    if(harvesters.length < 10 && Game.spawns['MainSpawn'].energy > 200) {
        var newName = Game.spawns['MainSpawn'].createCreep([WORK,CARRY,MOVE], 'harvester' + harvesterName, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
        harvesterName++;
    }
}


module.exports = {
    spawnLoop() {
        spawnLoop();
    }
};