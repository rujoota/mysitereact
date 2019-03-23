var AWS = require("aws-sdk");
var fs = require('fs');
var path=require('path');
var projdata = require('./projdata')
var dynamoStore = require('./dynamoStore')

console.log("Importing data into DynamoDB. Please wait.");
function loadProjectData() {
    // var allProjs = JSON.parse(fs.readFileSync(path.join(__dirname, './projdata.json')));
    // allProjs=JSON.parse(projdata.data);
    console.log("inside load project")
    projdata.data.forEach(function(proj) {
        dynamoStore.putItem("Projects", proj);
    });
}
module.exports.loadProjectData = loadProjectData;