const userInfo = require("./information");

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Bonjour voici le test avec les Template literals, je m'appelle ${userInfo.name} et je suis du campus ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));
