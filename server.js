var express = require('express');
var http = require('http');
var app = express();

// pinging
app.use(express.static('public'));
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
    response.send('Join our discord server at \`https://discordapp.com/invite/BTckadf\` if you need help about using this api [ by: Sharif#2769 ]');
  });


// listen for requests :)
 var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
 });


setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 28000);
 
// image sakura
let bw = require('./src/image/sakura.json') 
var recursive = function () {
    app.get('/api/image/sakura', function (req, res) {
    let rstatus = bw[Math.floor(Math.random() * bw.length)]
      
        //Some other function call in callabck
        res.send(({image:rstatus})  )    
    
    })
    setTimeout(recursive, 100000);
}
recursive();

// 8 ball
let hm = require('./src/json/8-ball.json');
var magicballs = function () {
  app.get('/api/8ball', function (req, res) {
    let rhang = hm[Math.floor(Math.random () * hm.length)]
    
    res.send(({response: rhang}))
  }) 
  setTimeout(magicballs, 100000)
}
magicballs();

// cat fact
let cf = require('./src/json/cat-fact.json');
var catfacts = function () {
    app.get('/api/catfact', function (req, res) {
    let rcf = cf[Math.floor(Math.random() * cf.length)]
      
        //Some other function call in callabck
        res.send(({response:rcf}))    
    
    })
    setTimeout(catfacts, 100000);
}
catfacts();

// joke
let joke = require('./src/json/joke.json');
var jokes = function () {
    app.get('/api/joke', function (req, res) {
    let rstatus = joke[Math.floor(Math.random() * joke.length)]
      
        //Some other function call in callabck
        res.send(({response:rstatus}))    
    
    })
    setTimeout(jokes, 100000);
}
jokes();

// roast
let roast = require('./src/json/roast.json');
var roasts = function () {
  app.get('/api/roast', function (req, res) {
    let rRoasts = roast[Math.floor(Math.random() * roast.length)]
    res.send(({response: rRoasts}))
  })
  setTimeout(roasts, 100000);
} 
roasts();

// pun 
let pun = require('./src/json/pun.json');
var puns = function () {
  app.get('/api/pun', function (req, res) {
    let rPun = pun[Math.floor(Math.random() * pun.length)]
    res.send(({response: rPun}))
  }) 
  setTimeout(puns, 100000);
} 
puns();

// be like bill
let blb = require('./src/json/belike-bill.json');
var blbl = function () {
  app.get('/api/belikebill',function (req, res) {
    let rblbb = blb[Math.floor(Math.random() * blb.length)]
    res.send(({response: rblbb}))
  }) 
  setTimeout(blbl, 100000);
} 
blbl();

// fortune
let fort = require('./src/json/fortune.json');
var forts = function () {
  app.get('/api/fortune', function (req, res) {
    let fortunes = fort[Math.floor(Math.random() * fort.length)]
    res.send(({response: fortunes}))
  }) 
  setTimeout(forts, 100000);
} 
forts();

// discord email fun fact
let dis = require('./src/json/discord-email-fun-fact.json');
var discords = function () {
  app.get('/api/discord-email-funfact', function (req, res) {
    let funfact = dis[Math.floor(Math.random() * dis.length)]
    res.send(({response: funfact}))
  })
  setTimeout(discords, 100000);
} 
discords();