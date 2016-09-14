function generateRandomValue() {
    var values = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    return values[Math.floor(Math.random() * 64)];
}

function generateRandomId() {
    return "@" + generateRandomValue() + generateRandomValue() + generateRandomValue();
}

module.exports = {
    generateRandomId() {
        return generateRandomId();
    }
};