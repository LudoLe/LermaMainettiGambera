# CLUP - CUSTOMER LINE UP

## Scope: description of the given problem

In these trying times of global pandemic, such a common matter as going grocery shopping has become
a relevant threat to public health. Nethertheless, grocery shopping still remains an essential need which
has to be carried out: being so, avoiding crowding up either inside and outside of grocery shops to avoid
any source of hazards uprises as a new main issue to focus on.

CLup is a software application that will be implemented in order to face this issue. The application
proposes itself to help either the grocery shop owners to adequate to the new governmental rules and
grocery shop customers to protect their own health.

In fact, Clup allows customers to book online their shopping sessions when and for how long they
desire, letting them even specify the categories of items they are willing to buy: in this way the system
will be able to grant the rules of social distancing more accurately and let the clients have an even safer
experience through their shopping session.

Clup also allows those clients who are not much of a planner to join virtual queues, which are meant
to substitute the physical ones, for their last minute shopping sessions. The system will permit them to
monitor the queue and will even alert them when it’s time to leave in order to reach the shop in time for
their turn.

Finally, CLup will be of great help to grocery shop owners in regulating the incoming influx of people
in their shop. As a matter of fact, CLup implements a QR-code based system of monitoring accesses to
the shops that will decide to adherit to our service.

Also, CLup will be a convinient way to keep up with the evolving rules and law, giving managers the
possibility to immediately customize every aspect of a shop.

## REQUIREMENT ANALYSIS AND SPECIFICATION DOCUMENT (RASD)

link here: [RASD.pdf](https://github.com/LudoLe/LermaMainettiGambera/blob/master/delivery/RASD.pdf)

## DESIGN DOCUMENT (DD)

link here: [DD.pdf](https://github.com/LudoLe/LermaMainettiGambera/blob/master/delivery/DD2.pdf)

## IMPLEMENTATION AND TESTING DOCUMENT (I&T)

link here: [I&T.pdf](https://github.com/LudoLe/LermaMainettiGambera/blob/master/delivery/I%26T.pdf)

## Installation instructions

### Server

[Instructions for a windows machine]

1. Install Java 15 (or higher).
2. Open a powershell window with admin privileges and navigate to the folder
containing this file (cd repo_location\LermaMainettiGambera\delivery)
3. Go to /backend (cd backend) and run the clup.bat script (.\clup.bat).
Now a lot of terminal should open, let them do (you can tell they have finished when
the last word printed is “milliseconds”).
At this point the server is running on your machine and should be reachable at the
addresses:
  a. http://localhost:8082/
  b. http://localhost:8081/
  c. http://localhost:8089/
Also the script should have started an SQL server at the port 3306
4. To see if the services have been correctly started run swagger.bat script
(.\swagger.bat). It will open three swagger pages, one for each service, on your
predefined browser.
Please ensure that you have no other processes at localhost holding the ports: 8080, 8081,
8089, 8005, 8006, 8007, 8443, 8444.
Please be sure no other SQL service is running gon port 3306.

### Web app

1. Be sure to have npm and node.js installed.

2. Open a powershell window with admin privileges and navigate to the folder
containing this file (cd repo_location\LermaMainettiGambera\delivery)

3. Go to /frontend (cd frontend) and run the downloadLiveServer.bat script
(.\downloadLiveServer.bat). This script will run the npm install -g serve
command, that install the serve package, a static file serving and directory listing.

4. In the same folder you now have to run the liveserver.bat script
(.\liveserver.bat). This script will open a live server on http://localhost:5000/ (if
the port 5000 is free, otherwise you can see in the console where the web app is
hosted) that you can visit on the browser to see the React web app.

5. The web app was build for mobile, so we encourage to use it with smartphone
screen sizes. There are two options:
  a. [for google chrome]: open the developer tools (three dots in the top
  right corner > other instruments > developer tool) and click on the
  “smartphone/tablet” icon:
  Also from the drop down menu select the “iphone x” option:
  b. Just resize the browser window to be smartphone-like.
