# Video-Game-Stat-Tracker
Link to App: https://video-game-stat-tracker.herokuapp.com/

An web application that track a player's stats in the video game 'Apex Legends'. To develop this app, I used React for the front-end and Express/Node.js for the backend. For the backend, I created an API that recieves GET requests for a specified player (ex: /api/v1/profile/:platform/:gamertag) and then sends a GET requests to the [Tracker Network API](https://tracker.gg/developers) given the parameters from the request sent to my API. The Tracker Network then responds with a JSON response containing the player's stats. This JSON response was then parsed and displayed on the front-end.

Inspiration: [Apex Legends Tracker App | Full Stack Node & Vue.js](https://www.youtube.com/watch?v=8z2qRln9tnc)

## Running Application
In the root folder, run **'npm run dev'** to start the app in development mode. Make sure to add your own API key to the config.env file

## Frameworks/Dependencies Used
- React
- Express/Node.js
- React Router Dom
- Axios
- React Context

# Screenshots
<img src='/images/apex_legends_2.gif' />
<img src='/images/homepage.png' />
<img src='/images/profile.png' />
