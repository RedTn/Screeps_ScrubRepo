function generateRandomValue() {
    var values = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    return values[Math.floor(Math.random() * 64)];
}

function generateRandomId() {
    return "@" + generateRandomValue() + generateRandomValue() + generateRandomValue();
}

function getHarvestersFinished() {
    return(_.filter(Game.creeps, (creep) => (creep.memory.role == 'harvester' && _.sum(creep.carry) >= 150)));
}

function getHarvesters() {
    return(_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'));
}

module.exports = {
    generateRandomId() {
        return generateRandomId();
    },
    getHarvestersFinished() {
        return getHarvestersFinished();
    },
    getHarvesters() {
        return getHarvesters();
    }
    
};