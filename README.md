# Friend-Finder

This is the compatibility-based "FriendFinder" application, a mentorship-matching app. The app will take in results from a user's response to 10 survey quesstions, tracking whether the user agrees or disagrees with a question on a scale of 1 to 5.  The app compares the answers with those from other users also seeking a mentor/mentee, and then displays the name and picture of the user with the best overall match.

Express to handle routing. It is deployed to Heroku so other users can fill it out.
Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.


Your htmlRoutes.js file should include two routes:

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.



Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.



You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.


{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}

Nester Forloop? sorting data comparing it to others. 

Determine the user's most compatible friend using the following as a guide:

Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5





Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.



Once you've found the current user's most compatible friend, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.

Hosting on Heroku

### Technology Used
* [Heroku] (https://www.heroku.com/about)
* [Express.js] (http://expressjs.com/en/guide/routing.html)
* [NODE.js](https://nodejs.org/en/about/) 
* [My SQL](https://www.mysql.com/about/)
* [Javascript (JS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



### Author
* Joey Badua* - [Friend-Finder](https://github.com/joannebadua)