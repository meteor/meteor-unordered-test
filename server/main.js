console.log("Loading server/main.js");
console.log("ModularClass defined: " + (typeof ModularClass))

Meteor.startup(function(){
    console.log("Running server/main.js Meteor.startup");
    console.log("ModularClass defined: " + (typeof ModularClass))
});
