const Discord = require("discord.js")
const db = require("quick.db")
const colors = require('./../../colors.json')
module.exports = {
name: "whitelist",
run: async (client, message, args) => {
let guild = message.guild.iconURL()
if(!message.author.id === message.guild.ownerID) return;
let wordlist = new Discord.MessageEmbed()
.setThumbnail(guild)
.setColor(colors.uptime)
.setTitle("Trusted Users List 🛡️")
.setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
let database = await db.get(`trustedusers_${message.guild.id}`)
if(database && database.length) {
let array =[];
database.forEach(m => {
array.push(`- Member: <@${m.user}> | ID ${m.user} ✅`)
 });wordlist.setDescription(`${array.join("\n")}`)
}return message.channel.send(wordlist);
}}

/**
 * @INFO
 * Bot Coded by ! GWΣ メDevanshInsaan#0142 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */