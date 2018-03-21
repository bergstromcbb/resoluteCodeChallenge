Hello and Welcome to the Foosball Scores Repo!!



To use the app you can visit us online at:

	https://foosball-scores.herokuapp.com/

Once there you can go the games section to see all the games played and entered.  

In the ranking section you can see all the players who have won and the games played.  The players are also ranked in order of won games.

In the add games section you can enter the date of the game, the score of the game and who won the game.  Once entered it is loaded into the database and pushes into the results of winners.


Within the app, there is a MongoDB database which contains all the games entered.  

The database contains a json object that contains all the items used in the form.  Once entered, the information is then queried to get the counts for the ranking page.  

An axios ajax component powers the search field and once you have entered a month containing 
an entry the drop down shows you the dates in that month or tells you that there aren’t any available.  

The app has been deployed to heroku so that the server can run and app be viewed and used.

There is also a mocha test that can be run if you download the app and run it locally.  

In response to code challenge:

 The scores persist to a mongoDB database.
 The search in the header uses an axios ajax component.
 There is a Mocha unit test that runs in the terminal.
 Version Control was used and there is a repo you can go and clone on Github at 
https://github.com/bergstromcbb/resoluteCodeChallenge

The added bonuses met are:

The app has been deployed to heroku
The app was created using templating language Pug.


If you want to run the app locally you can clone the project.

Navigate to project.  
Navigate to directory with the package.json
Run npm install
Run npm start
navigate to localhost:7777

