var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var spawnController = require('spawn.controller');
var cleanUp = require('cleanup');
var helpers = require('helpers');

module.exports.loop = function () {

    cleanUp.cleanCreepMemory();
    
    spawnController.spawnLoop();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        switch(creep.memory.role) {
            case 'harvester':
                roleHarvester.run(creep);
                break;
            case 'upgrader':
                roleUpgrader.run(creep);
                break;
            case 'builder':
                roleBuilder.run(creep);
                break;
            default:
        }
    }
}