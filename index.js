require('dotenv').config()  // this line is used to load environment variables from a .env file into process.env
const express = require('express')
// import express from "express"  ----> both are same one common js another is Module js 
const app = express()   // app is a very powerful variable which holds the different framework like express, koa etc.
const port = 3000     // there are different ports like usb,type-c etc. here we are using virtual port for server and it has more than 65000 ports in it. so it can any number from 0 to 65535.

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