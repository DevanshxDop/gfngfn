const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "developer",
  description: "Shows all commands of the bot",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("🤔🤔🤔")
      
      .addField(
        "About Me:",
        "Hi I am Devansh! I am a bot developer.Some of my hobbies are playing video games and coding! ",
      )
      .setThumbnail("https://cdn.discordapp.com/avatars/813890066781962271/1224647ef75999e8308f476e5b1658f5.png?size=1024")
      .setFooter("Make sure to show your support by subbing to my youtube(linked below)! If you have any questions about the bot, join support server linked below or send me a DM at ! GWΣ メDevanshInsaan#0142! ")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Invite Me') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=903179130961547284&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Support Server') 
      .setURL("https://discord.gg/pZgSKRxnJa");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Youtube Channel') 
      .setURL("https://www.youtube.com/channel/UCeBm3f4bkbbPI0Ll5PZYGfw");



      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};



/**
 * @INFO
 * Bot Coded by ! GWΣ メDevanshInsaan#0142 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */