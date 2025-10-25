require('dotenv').config()  // this line is used to load environment variables from a .env file into process.env
const express = require('express')
// import express from "express"  ----> both are same one common js another is Module js 
const app = express()   // app is a very powerful variable which holds the different framework like express, koa etc.
const port = 3000     // there are different ports like usb,type-c etc. here we are using virtual port for server and it has more than 65000 ports in it. so it can any number from 0 to 65535.


const githubData = {
  "login": "BeingRoaster-Raj",
  "id": 180921397,
  "node_id": "U_kgDOCsikNQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/180921397?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/BeingRoaster-Raj",
  "html_url": "https://github.com/BeingRoaster-Raj",
  "followers_url": "https://api.github.com/users/BeingRoaster-Raj/followers",
  "following_url": "https://api.github.com/users/BeingRoaster-Raj/following{/other_user}",
  "gists_url": "https://api.github.com/users/BeingRoaster-Raj/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/BeingRoaster-Raj/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/BeingRoaster-Raj/subscriptions",
  "organizations_url": "https://api.github.com/users/BeingRoaster-Raj/orgs",
  "repos_url": "https://api.github.com/users/BeingRoaster-Raj/repos",
  "events_url": "https://api.github.com/users/BeingRoaster-Raj/events{/privacy}",
  "received_events_url": "https://api.github.com/users/BeingRoaster-Raj/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-09-09T06:43:45Z",
  "updated_at": "2025-09-22T08:13:48Z"
}

app.get('/', (req, res) => {           // here we are using get method to get the data from server. '/' means home route. req means request and res means response.
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {    // here we are using get method to get the data from server. '/twitter' means twitter route. req means request and res means response. 
  // when we type localhost:3000/twitter in browser it will show Hello Twitter!       and        () => {} this is a call back function.
    res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {      // here we are using get method to get the data from server. '/login' means login route. req means request and res means response. 
  // when we type localhost:3000/login in browser it will show Hello Login!       and        () => {} this is a call back function.
    res.send('<h1>please login to continue</h1>')
})
 // getting /login route from server it shows "Cannot GET /login" -> jab tum react mai padhte ho hot reloading hota hai to wo server ko baar baar restart karta hai. 
 // to jab tumne server start kiya tha tab tumne /login route nahi banaya tha. isliye jab tumne /login route access kiya to wo "Cannot GET /login" show kar raha tha. ab jab tumne /login route bana liya hai to ab wo sahi se kaam karega restart karne ke baad.
app.get('/instagram', (req, res) => {   // here we are using get method to get the data from server. '/instagram' means instagram route. req means request and res means response. 
  // when we type localhost:3000/instagram in browser it will show Hello Instagram!       and        () => {} this is a call back function.
    res.send('<h2>Welcome to Instagram</h2>')
})
// app.listen(port, () => {                        // here we are using listen method to listen the port. port means 3000. () => {} this is a call back function.
//   console.log(`Example app listening on port ${port}`)
// })

// jaise maine isko github mai dala toh ye code publicaly accessible ho gaya. toh isliye maine isme koi bhi sensitive information nahi dala hai. jaise ki database ka password ya api key wagaira.
// jaise ki mai kisi aur ke computer pe jaake ye code run karunga toh ye port 3000 free na ho toh hum kya kerenge?
// jab hum production grid application deploy karte hain toh hum environment variable ka use karte hain. jisme hum port number ko define karte hain. 
// aur agar wo port number free nahi hota toh hum ek default port number use kar lete hain. jaise ki 3000 ya 8000 wagaira.
 
app.listen(process.env.PORT, () => {                        // here we are using listen method to listen the port. port means 3000. () => {} this is a call back function.
  console.log(`Example app listening on port ${port}`)
})


app.get('/github', (req, res) => {   // here we are using get method to get the data from server. '/github' means github route. req means request and res means response. 
  // when we type localhost:3000/github in browser it will show githubData in json format.       and        () => {} this is a call back function.
    res.json(githubData)
})