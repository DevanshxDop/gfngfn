const Discord = require('discord.js')
const { MessageButton } = require('discord-buttons');
const colors = require('./../../colors.json')
const {MessageActionRow} = require('discord-buttons');


module.exports = {
    name: "invite",
    description: "invite command!",
    aliases: ["invite"],
    async run (client, message, args) {


      //code
let embed = new Discord.MessageEmbed()
.setTitle('Invite Me / Support Me.')
.setDescription('**Uptimer** Is a open-source, free discord bot that allows you to make your projects online 24/7 just by using a single cmd.')
.setColor(colors.uptime)
.addField('**:link: Invite Me**','\n [Click here](https://discord.com/api/oauth2/authorize?client_id=903179130961547284&permissions=8&scope=bot) To Invite Me To Your Server.', true)
.addField(':link: **Support Server**','\n [Click here](https://discord.gg/wZ3JEST3uz) To Join Our Support Server.', true)
.setTimestamp()
.setFooter(`Requested by ${message.author.tag}`)

const support = new MessageButton()
.setID('support')
.setLabel('Support!')
.setStyle('green')
.setEmoji('💎')

const button = new MessageButton()
    .setStyle('url')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=903179130961547284&permissions=8&scope=bot')
    .setLabel('Invite!')
 
 
let row = new MessageActionRow();
row.addComponent(button);
row.addComponent(support);


//Do same for all buttons

message.channel.send("", {
  embed : embed,
  component: row
})


    }
}




/**
 * @INFO
 * Bot Coded by ! GWΣ メDevanshInsaan#0142 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */