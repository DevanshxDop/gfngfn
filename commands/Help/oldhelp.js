const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "oldhelp",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("🌟 Here are my commands")
      .setDescription("➡️ ** *Uptimer* Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online 24/7 Just By Using A Single Command.**")
      .addField(
        "👑 **ADMIN**",
        "`addrole` `auditlog` `ban` `dm` `embed` `hackban` `kick` `lock` `nuke` `removerole` `addemoji` `unban` `unlock`"
      )
      .addField(
        "💬 **CHATBOT**",
        "`chatbot-disable` `chatbot-set`"
      )
      .addField(
        "🤣 **FUN**",
        "`deepfry` `coinflip` `corona` `drake` `eightball` `flipcoin` `hack` `hangman` `hug` `joke` `meme` `ship` `slap` `snake` `snipe` `sudo` `tictactoe` `triggered` `trivia` `tictactoe` `youtube`"
      )
      .addField(
        "🔧 **GENERAL**",
        "`servericon` `akinator` `ascii` `avatar` `base64` `battleship` `calculator` `calc` `choose` `color` `country` `emojify` `firstmsg` `invite` `reverse` `rps` `support` `trivia` `weather`"
      )
      .addField(
        "🎉 **GIVEAWAY**",
        "`gstart` `gend` `greroll`"
      )
      .addField(
        "🖼️ **IMAGE**",
        "`3000years` `affect` `beautiful` `dog` `facepalm` `fire` `fox` `gay` `glass` `jail` `kangaroo` `shit` `tweet`"
      )
      .addField(
        "📜 **INFO**",
        "`botinfo` `botinvite` `report-bug` `commandscount` `developer` `djs` `feedback` `github` `help` `info` `roleinfo` `serverinfo` `userinfo`"
      )
      .addField(
        "🔨 **MODERATION**",
        "`purge` `resetwarns` `Userid` `lockchannel` `mute` `purge` `say` `setchat` `slowmode` `unlockchannel` `unmute` `warn` `warnings` `Userinfo`"
      )
      .addField(
        "⚔️ **AUTOMODERATION**",
        "`anti-alt` `antilink` `autonick` `autoofficial` `autoofficiald` `autorole` `roleall`"
      )
      .addField(
        "🔮 **AURA**",
        "`addword` `blacklist-server` `blacklist-user` `delword` `whitelist-add` `whitelist-delete` `whitelist` `wordlist`"
      )
     
      .addField(
        "👑 **OWNER**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`"
      )
      .addField(
        "🎟️ **TICKET**",
        "`tadd`, `tclose`,`tdelete`, `tnew`,`topen`, `tremove`"
      )
      .addField(
        "⚙️ **ULTILITY**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`"
      )
      .addField(
        "🤖 **UPTIMER**",
        "`add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("BOT DEVELOPERS: RogmitOp | Prefix: !")


      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Support Server') 
      .setURL("https://discord.gg/FvcT7xBXuD");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Tutorial Video') 
      .setURL("https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ");


      return message.channel.send(helpEmbed,{
        button: [button2,button3],
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