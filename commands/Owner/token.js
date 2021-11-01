const discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "bot-token",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`🏹 Discord Bot Token`)
    .setDescription('```ODY1Nzc2NTMzMzA0NDkwMg==.WolwWe.tIXkVxbH0PpVs3UPkkoGAwt44PE``` \n ||Note: This token is Propabbly Fake!||||🤣||')
    .setColor(colors.uptime)
    .setFooter(`Made by Devansh `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
    
  
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