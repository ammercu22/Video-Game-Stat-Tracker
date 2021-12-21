# Video-Game-Stat-Tracker
An web application that track a player's stats in the video game 'Apex Legends'. To develop this app, I used React for the front-end and Express/Node.js for the backend.
For the backend, I created an API that recieves GET requests for specified player (ex: /api/v1/profile/:platform/:gamertag). My API then requests a JSON file containing all
player's stats using the Tracker Network API (https://tracker.gg/developers). This JSON response was then parsed and displayed 
on the front-end.

Inspiration: [Apex Legends Tracker App | Full Stack Node & Vue.js](https://www.youtube.com/watch?v=8z2qRln9tnc)

## Running Application
In the root folder, run **npm run dev** to start the app in development mode. Make sure to add your own API key to the config.env file

# Frameworks/Dependencies Used
- React
- Express/Node.js
- React Router Dom
- Axios
- React Context
- React Icons

# Screenshots
<img src='/images/apex_legends_2.gif' />
<img src='/images/homepage.png' />
<img src='/images/profile.png' />
