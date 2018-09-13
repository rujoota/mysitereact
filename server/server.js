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
        "img": "../imgs/projects/website.png",
        "name": "Web Development",
        "order": 3,
        "desc": "5 years of experience as full-stack web developer",
        "htmlDetails": `<div id="work-details">
        <div class="modal-header project-center">
            <h2>Work Experience in Web Development</h2>
        </div>
        <p>
            I've worked for 5 years as full-stack web developer in companies like Infosys, CGI
            and Amdocs.
            During my internship, I worked on creating a website to display analytics of
            test-cases for QA team using Testrail’s APIs and enhanced page loading performance
            by 90% using caching.

            In India, my work mostly focused on building asp.net websites using Microsoft's
            SharePoint platform.
            I've worked on back-end, front-end, admin etc almost all aspects of development.</p>
        <p>
            I've built and deployed enterprise level distributed system of intranet web portals
            for employee collaboration with Infosys.</p>

        <p>With Amdocs, I worked as full stack web developer on their global website Amdocs.com
            and AmdocsBlogs-internal blog system used by employees and especially higher
            management to publish company related updates.</p>
    </div>

    <div id="mysite-details">
        <div class="modal-header project-center">
            <h2>My Portfolio Website</h2>
            <p class="item-intro text-muted">built in AngularJS</p>
            <a href="https://github.com/rujoota/MySite" target="_blank">Github Project</a>
        </div>
        <p>Its the current website which you are browsing!</p>
        <p>Its developed using AngularJS, bootstrap, html, javascript, jQuery and node</p>
        <p>Its fully deployed using Amazon Web Services(AWS). Main website is deployed on EC2
            instance with auto-scaling enabled.</p>
        <p>In background, it runs basic node server with express which handles basic
            request-response features.</p>
        <p>The site is fully mobile-responsive</p>
        <p> Checkout the <a href="https://github.com/rujoota/MySite" target="_blank">github
            link</a> for this project.</p>
    </div>`
    },
    {
        "name": "Game development",
        "order": 2,
        "img": "../imgs/projects/game.png",
        "desc": "Desktop and online multiplayer games with Game Server",
        "htmlDetails":` <div id="cow-details">
        <div class="modal-header project-center">
            <h2>Cards of Wild</h2>
            <h3 class="section-subheading text-muted">Multiplayer online card game</h3>
            <a href="https://github.com/worldofbalance/wiki/wiki/15.-Cards-of-Wild" target="_blank">Github
                Wiki</a>
        </div>
        <br>
        <div class="project-center embed-responsive embed-responsive-16by9">
            <iframe width="660" height="415" src="https://www.youtube.com/embed/mrQJwGOfIVo"
                    frameborder="0" allowfullscreen></iframe>
        </div>
        <br>
        <p>This was a team project with almost 20 people. Mini-teams were created based on each game.
        Cards of Wild was 6 people team and I was the team-lead.</p>
        <p>
            'World of balance' is a gaming solution which includes lots of single-player and
            multiplayer games. The theme of 'world of balance' is animals and their food chain
            and all games are conceptualized using that theme. The game lobby is used to login
            and interact with other players or join their game-rooms.</p>
        <p>
            Cards of wild is part of bunch of mini-games from 'world of balance' game stack. Its
            a 2-player game where both players are given deck of animal-cards to play with. The
            cards can attack opponent's card as well as his/her tree('tree of life'). Each card
            and tree has specific health points and using animal food chaining rules one has to
            attack opponent. Whomsoever kills the tree, wins the game.</p>
        <p>
            We have a game-lobby server which is common for all the games and Cards of wild has
            its independent server which receives all requests related to our game. We used
            unity as game-client and Java for server development. Our game runs on android
            devices as well.</p>
        <p> Following are relevant links:</p>
        <ul>
            <li><a href="https://github.com/worldofbalance/wiki/wiki/15.-Cards-of-Wild" target="_blank">Github
                wiki </a></li>

            <li><a href="https://github.com/worldofbalance">Github organization</a>

            <li>
                <a href="https://github.com/worldofbalance/wiki/wiki/15.-Cards-of-Wild#game-overview" target="_blank">Rules
                    for playing Cards of wild</a></li>

            <li><a href="https://slack-files.com/T0MJR5JMN-F1A84GJ1Z-7e30545b88" target="_blank">Android apk</a>
            </li>

        </ul>
    </div>`
    },
    {
        "img": "../imgs/projects/mobile.png",
        "name": "Mobile App Development",
        "order": 1,
        "desc": "Development experience in both Android and iOS(swift)",
        "htmlDetails": `<div class="modal-header project-center">
        <h2>SuperCaly</h2>
        <p class="item-intro text-muted">iOS smart calendar app</p>
        <a href="https://bitbucket.org/rujoota/supercalyios/wiki/Home" target="_blank">Bitbucket Project</a>
    </div>
    <img class="img-responsive img-centered" src="../imgs/projects/proj_supercaly.png" alt="">
    <p>
        This app is an extension to Google/Apple calendar and makes the regular calendar easy-to-use, intuitive and fun. This app
        is mainly used for analyzing your day-to-day lifecycle and present your daily routine and life-patterns in a way
        so that you can understand your life well. It helps users to organize their events better and manage its attendees,
        location, chats and media efficiently. Better yet, it automatically creates events for users from user’s location
        and associates additional information with it. This app presents all this information to users in normal calendar
        views as well as map-views so that users get a feel of time-line. Also, this app auto-syncs all the events with apple/google
        calendar on cloud so that user’s privacy is maintained and information is not lost even when the phone is dead. This
        app proves one-stop shop for all kinds of event organization.</p>
        <p>
            This version is specifically built for iPhone users. So it uses iOS swift as programming language. It uses google places
            api to get detailed information about a specific location. Most of the data is stored internally using Apple's
            core-data or iCloud.</p>`
    },
    {
        "img": "../imgs/projects/os.png",
        "name": "System programming",
        "order": 3,
        "desc": "Operating system and network programming in C",
        "htmlDetails": `
        <div class="modal-header project-center">
            <h2>Train Operating System(TOS)</h2>
        </div>
        <br>
        <div class="project-center embed-responsive embed-responsive-16by9">
            <iframe width="660" height="415"
                    src="https://www.youtube.com/embed/videoseries?list=PLTtH4ZWJ07JiNLzUTCVZOzULIc4AGdVO-"
                    frameborder="0" allowfullscreen></iframe>
        </div>
        <br>
        <p>
            Coded in C actual operating system process management, scheduling and interrupts
            handling to operate a real train.</p>
        <p>The operating system includes memory-mapped screen with window rendering, process
            management, context switch, interrupt management for timer and network.
            It uses linkedlist as fundamental data structure to manage all operations. OS also
            provides piping methods for inter-process communication.</p>`
    }
    ]);
});
// http.createServer(app).listen(app.get('port'), function () {
//     console.log('myApp server listening on port ' + app.get('port'));
// });