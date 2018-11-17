const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help | Dark server`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});









client.on('ready', async() => {
var server = "505417459369508884"; // ايدي السررفر
var channel = "508038901789884416";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**dark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3fdl serverdark server 3f**')
    },305);
})





client.login(process.env.BOT_TOKEN);
