const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const  ProjectLoadData = require('./data/ProjectLoadData');
const projectData = require('./data/projectData');
const DynamoStore = require('./data/dynamoStore');
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/allBlogs',function(req, res){
        DynamoStore.getAllItems("Blogs",function (err,data) {
         if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
         }
         else {
         // print all the projects
            console.log("Scan succeeded.Data returned:"+JSON.stringify(data.Items));
            return res.json(data.Items);
         }
    });
});
app.get('/loadProject',function(req, res){
    ProjectLoadData.loadProjectData();
});
app.get('/allProjects',function(req, res){
    console.log('in allProjects');
    DynamoStore.getAllItems("Projects", function (err,data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            // print all the projects
            console.log("Scan succeeded.Data returned:"+JSON.stringify(data.Items));
            return res.json(data.Items);
        }
    });
   
    // return res.json(projectData.data);
});
// http.createServer(app).listen(app.get('port'), function () {
//     console.log('myApp server listening on port ' + app.get('port'));
// });