const Discord = module.require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
   name: "unlock",
   description: "Unlocks a Channel",
    usage: "unlock <channel>",
  args: true,
    permissions: "MANAGE_CHANNELS",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("❌ You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔓 ${message.channel}  has been Unlocked`)
   .setColor(colors.uptime)
   await message.channel.send(embed);
   message.delete();
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