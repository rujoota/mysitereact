const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

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
app.get('/allProjects',function(req, res){
    /*DynamoStore.getAllItems("Projects",function (err,data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            // print all the projects
            console.log("Scan succeeded.Data returned:"+JSON.stringify(data.Items));
            return res.json(data.Items);
        }
    });*/
    return res.json([
    {
        "img": "../imgs/projects/os.png",
        "name": "System programming",
        "order": 3,
        "desc": "Operating system and network programming in C"
    },
    {
        "img": "../imgs/projects/website.png",
        "name": "Web Development",
        "order": 2,
        "desc": "5 years of experience as full-stack web developer"
    },
    {
        "name": "Game development",
        "order": 4,
        "img": "../imgs/projects/game.png",
        "desc": "Desktop and online multiplayer games with Game Server"
    },
    {
        "img": "../imgs/projects/mobile.png",
        "name": "Mobile App Development",
        "order": 1,
        "desc": "Development experience in both Android and iOS(swift)"
    },
    {
        "img": "../imgs/projects/server.png",
        "name": "Server development",
        "order": 5,
        "desc": "Worked on creating web-server and game-server"
    }
    ]);
});
// http.createServer(app).listen(app.get('port'), function () {
//     console.log('myApp server listening on port ' + app.get('port'));
// });