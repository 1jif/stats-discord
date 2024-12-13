const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1315742429462265907')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/apparentlyjack_rl') 
    .setState('# f9 525')
    .setName('quaaxz')
    .setDetails(`#f9 525`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/avatars/1276453933442662441/52f6b7b38d8324954bcb46e33bc5c51d.png?size=1024') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('# I'm Here gg/0v') 
    .setAssetsSmallImage('https://cdn.discordapp.com/avatars/1276453933442662441/52f6b7b38d8324954bcb46e33bc5c51d.png?size=1024') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('Google', 'https://google.com');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
