data = [
    {
        "img": "../imgs/projects/website.png",
        "name": "Web Development",
        "order": 3,
        "desc": "5 years of experience as full-stack web developer",
        "htmlDetails": `
        <div id="tableforyou-details">
            <div class="project-center">
                <h2>Table for You</h2>
                <p class="item-intro text-muted">Restaurant reservation system</p>
                <a href="https://drive.google.com/file/d/0ByNL4eD4rWkhVVNCWllzZEZIOUk/view" target="_blank">Detailed
                    project report</a>
            </div>
            <img class="img-fluid" src="../imgs/projects/proj_tableforyou.png"
                    alt="">
            <p>
                This a website is developed in php, html5, bootstrap and MySQL. This website can be
                used to search restaurants and reserve
                tables with specified date and time and number of people. I lead the team of 5
                people working in this project and we followed agile methodology.
                It has modules for different kinds of users like host/hostess, restaurant owner and
                admin.
            <ul>
                <li>General user can search for tables, view details of a restaurant and reserve it
                    and provide review about a restaurant.
                </li>
                <li>Host/hostess: can check reservation list and mark a particular reservation. Only
                    guests who has made reservation and has
                    been marked can provide review for that restaurant.
                </li>
                <li>Restaurant owner: can submit content about their restaurant</li>
                <li>Admin: can approve restaurant content, update users and their reviews</li>
            </ul>


            <p>Detailed project report is available <a
                    href="https://drive.google.com/file/d/0ByNL4eD4rWkhVVNCWllzZEZIOUk/view"
                    target="_blank">
                here
            </a>
        </div>
        <div id="work-details">
        <div class="project-center">
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
        <div class="project-center">
            <h2>My Portfolio Website</h2>
            <p class="item-intro text-muted">built in AngularJS</p>
            <a href="https://github.com/rujoota/MySite" target="_blank">Github Project</a>
        </div>
        <p>Its the current website which you are browsing!</p>
        <p>Its developed using React, bootstrap, html, javascript and node</p>
        <p>Its fully deployed using Amazon Web Services(AWS). Main website is deployed on EC2
            instance with auto-scaling enabled.</p>
        <p>In background, it runs basic node server with express which handles basic
            request-response features.</p>
        <p>The site is fully mobile-responsive</p>
        <p> Checkout the <a href="https://github.com/rujoota/mysitereact" target="_blank">github
            link</a> for this project.</p>
    </div>`
    },
    {
        "name": "Game development",
        "order": 2,
        "img": "../imgs/projects/game.png",
        "desc": "Desktop and online multiplayer games with Game Server",
        "htmlDetails":` <div id="cow-details">
        <div class="project-center">
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
        "htmlDetails": `<div class="project-center">
        <h2>SuperCaly</h2>
        <p class="item-intro text-muted">iOS smart calendar app</p>
        <a href="https://bitbucket.org/rujoota/supercalyios/wiki/Home" target="_blank">Bitbucket Project</a>
    </div>
    <div class="text-center">
    <img class="img-fluid" src="../imgs/projects/proj_supercaly.png" alt="">
    </div>
    <p>
    This app is an extension to Google/Apple calendar and makes the regular calendar easy-to-use, intuitive and fun. This app
    is mainly used for analyzing your day-to-day lifecycle and present your daily routine and life-patterns in a way
    so that you can understand your life well. It helps users to organize their events better and manage its attendees,
    location, chats and media efficiently. Better yet, it automatically creates events for users from user’s location
    and associates additional information with it. This app presents all this information to users in normal calendar
    views as well as map-views so that users get a feel of time-line. Also, this app auto-syncs all the events with apple/google
    calendar on cloud so that user’s privacy is maintained and information is not lost even when the phone is dead. This
    app proves one-stop shop for all kinds of event organization.
    <p>
        This version is specifically built for iPhone users. So it uses iOS swift as programming language. It uses google places
        api to get detailed information about a specific location. Most of the data is stored internally using Apple's
        core-data or iCloud.

        <div id="attendance-details">
        <div class="project-center">
            <h2>Attendance App</h2>
            <p class="item-intro text-muted">Android App for taking attendance</p>
            <a href="https://play.google.com/store/apps/details?id=att.attendanceapp"
               target="_blank">Google Playstore link</a>
            | <a href="https://github.com/rujoota/Attendance" target="_blank">Github project</a>
        </div>
        <img class="img-fluid" src="../imgs/projects/proj_attendance.png"
             alt="">
        <p>
            This app is built in Android which lets facilitator take attendance for students or
            attendees. Both facilitator and attendees will install this app. Facilitator can set
            up
            lectures according to their timetable in their app. To make the initial setup easy,
            facilitator can directly import file from their mobile.(Here is the
            format:https://github.com/rujoota/CSC780_Attendance/blob/master/students.txt)
            Facilitator can scan NFC tag first which allows some data relavant to current
            lecture
            transferred to the tag and then students can fill attendance by just scanning these
            tags
            with their mobile. Facilitator can view and export the reports about the students.
            Students can only view their report.
        <p>
            MySQL database for this app is hosted at Amazone Cloud. Data retrieval is done by
            simple
            php pages. Basic database schema and requirements are
            <a href="https://github.com/rujoota/Attendance/blob/master/Attendance%20App.docx"
               target="_blank">here.</a>
            View initial screen design
            <a href="https://github.com/rujoota/CSC780_Attendance/blob/master/CSC780_Attendance%20App.pdf"
               target="_blank">here</a>
            Some features of Android which this app uses
        <ul>
            <li>Recycler view</li>
            <li>Remotely hosted API utilization for connecting to database on cloud</li>
            <li>Customized color-coded calendar</li>
            <li>File import-export from phone</li>
            <li>Common branding and coloring</li>
            <li>Checkbox drawable state selectors</li>
            <li>NFC communication with custom mime-type</li>
        </ul>

        If you want to try this app, you need to do followin data setup:
        <ul>
            <li>Create an account as facilitator and login</li>
            <li>Have attendees install this app and let them create their accounts.</li>
            <li>Add few courses</li>
            <li>Upload attendees in those courses(You need to have file manager for this. <a
                    href="https://github.com/rujoota/CSC780_Attendance/blob/master/students.txt"
                    target="_blank">Sample file</a></li>
            <li>Add a new schedule from My Schedule</li>
            <li>Try taking attendance from 'Start taking attendance now' and scan NFC</li>
            <li>Attendees should scan the same NFC tag - they don't need to open the app(they
                should
                have logged in before)
            </li>
            <li>After all attendees are done, facilitator hits refresh button and then saves the
                attendance.
            </li>
            <li>Facilitator can also view past classes in which attendance is not filled by
                going
                through My Attendance Calendar and fill that attendance as well.
            </li>
            <li>Facilitator can also view and export attendance report for all attendees for all
                courses, attendees can only view their report.
            </li>
        </ul>
    </div>
    
    <div id="medicine-selling-details">
        <div class="project-center">
            <h2>Medicine selling app</h2>
            <p class="item-intro text-muted">built in Android</p>
            <a href="https://github.com/rujoota/Inviks1" target="_blank">Github project</a>
            | <a href="https://github.com/jethvarajan/Healthkart" target="_blank">REST APIs</a>
        </div>

        <p>
            This is a starter app for selling medicine online built in Android.
        <p>
            The user can search the medicine and order it for cash on delivery. Only after
            uploading prescription image from doctor, user will be able to receieve his/her
            order.
        <p>
            This app was inspired from 1mg App:
            https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus&hl=en

            This app features following functionality:
        <ul>
            <li>Medicine search based on name or content</li>
            <li>Ordering in multiple medicines with multiple quatities</li>
            <li>Showing details about a medicine along with available substitutes for that
                medicine
            </li>
            <li>Complete login funtionality</li>
            <li>Shopping cart</li>
            <li>Sharing the app</li>
            <li>View orders and tracking info</li>
        </ul>

        <p>


            For connecting to MySQL database, this app uses REST API hosted on localhost, built
            in Java. More details about this API is
            <a href="https://github.com/jethvarajan/Healthkart" target="_blank">here</a>
        <p>
            Some technical aspects:
        <ul>
            <li>Common burger menu i.e. left slide menu/navigation drawer</li>
            <li>Common settings menu</li>
            <li>Common ActionBar with logo display and back button</li>
            <li>Integration of sending email from this app</li>
            <li>Same branding across all the activities</li>
        </ul>


    </div>
        `
    },
    {
        "img": "../imgs/projects/os.png",
        "name": "System programming",
        "order": 4,
        "desc": "Operating system and network programming in C",
        "htmlDetails": `
        <div class="project-center">
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
]

exports.data=data;