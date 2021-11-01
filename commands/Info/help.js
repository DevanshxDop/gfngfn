const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "help",
     aliases: ["h"],
       run: async (client, message, args ) => {
             //--------------------------------------S T A R T---------------------------------------
        const embed = new Discord.MessageEmbed()
                .setTitle('')
                        .setFooter("Page Home\n"+ client.user.username + " | Made by: Devansh", client.user.displayAvatarURL())
                                .setImage(`https://media.discordapp.net/attachments/902432061229506630/903218667209257020/standard.gif`)
                                        .addField("🌟 **__My Features__**",
                                        `>>> One of the best 🏹 **all-in-one** Discord Bot! Moderation, Info, Utility, Ticket, and also a new awesome __**Uptimer+**__ System!
 ▫️ Many **Fun** Commands (50+)
 ▫️ **Admin** and **Auto-Moderation** and way much more!
 ▫️ **\`${Math.floor(client.ws.ping)}ms\` Ping**`)
                                                .addField(" 🌟 **__Uptimer+__**",">>> Uptimer Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online __24/7__ Just By Using A **Single** Command.\n__Uptimer+ Commands__\n`add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`",)
                                                        .addField("🌟 __How to use:__",">>> __Add the bot__ to your discord server\n Type `!howtouse` and get information")
                                                                .setColor(colors.uptime);
        const embed1 = new Discord.MessageEmbed()
                .setTitle('🛡️ Admin, 🔨 Moderation & ⚔️ Auto-Moderation')
                        .addField("ㅤ⠀⠀⠀ \n🛡️ **Admin**",
                                  "> `addemoji`, `addrole`, `auditlog`, `ban`, `dm`, `embedsay`, `hackban`, `kick`, `lock`, `nuke`, `removerole`, `unban`, `unlock`\n\n🔨 **Moderation**\n> `lock`, `mute`, `purge`, `reset-warns`, `say`, `slowmode`, `unlock`, `unmute`, `warn`, `warning`\n\n⚔️ **Auto-Moderation**\n> `anti-alt`, `autonick`, `auto-official-role`, `auto-official-role-disable`, `autorole`, `roleall`"
                                          )
                                                .setThumbnail(client.user.displayAvatarURL())
                                                      .setColor(colors.uptime);
        const embed2 = new Discord.MessageEmbed()
              .setTitle('📜 Info, 🔮 Aura & 📘 General')
                    .addField("⠀⠀⠀ \n📜 **Info**",
                            "> `botinfo`, `bugreport`, `developer`, `djs`, `feedback`, `github`, `help`, `roleinfo`, `serverinfo`, `uptimer`, `userinfo`\n\n🔮 **Aura**\n> `addword`, `blacklist-server`, `blacklist-user`, `delword`, `whitelist-add`, `whitelist-delete`, `whitelist`, `wordlist`\n\n📘 **General**\n> `akinator`, `ascii`, `avatar`, `calculator`, `choose`, `colour`, `country`, `emojify`, `firstmessage`, `invite`, `reverse`, `servericon`, `weather`"
                                  )
                                        .setThumbnail(client.user.displayAvatarURL())
                                              .setColor(colors.uptime);
        const embed3 = new Discord.MessageEmbed()
              .setTitle('🤣 Fun & 🖼️ Images')
                    .addField("ㅤ⠀⠀⠀ \n🤣 **Fun**","> `battleship`, `coinflip`, `coronavirus`, `deepfry`, `drake`, `eightball`, `flipcoin`, `hack`, `hangman`, `joke`, `meme`, `snipe`, `sudo`, `tictactoe`, `trivia`, `yt`\n\n🖼️ **Image**\n> `dog`, `fire`, `fox`, `gay`, `jail`, `kangaroo`, `tweet`, `neko`, `nekogif`, `holo`, `cuddle`, `foxgirl`, `waifu`, `smug`, `baka`, `slap`, `poke`, `feed`, `pat`, `hug`, `kemonomimi`, `kiss`, `tickle`")
                          .setThumbnail(client.user.displayAvatarURL())
                                .setColor(colors.uptime);
       const embed4 = new Discord.MessageEmbed()
             .setTitle('👑 Owner, 💬 ChatBot & ⚙️ Utility')
                   .addField("ㅤ⠀⠀⠀ \n👑 **Owner**",
                           "> `eval`, `reloadcmd`, `serverlist`, `bot-token`\n\n💬 ChatBot\n> `remove-channel`, `set-channel`\n\n⚙️ **Utility**\n> `advice`, `announce`, `binary`, `minecraft`, `membercount`, `members`, `serverinfo`"
                                 )
                                       .setThumbnail(client.user.displayAvatarURL())
                                             .setColor(colors.uptime);

       const embed5 = new Discord.MessageEmbed()
             .setTitle('🎟️ Ticket, 🎉 Giveaways & 🤖 Uptimer')
                   .addField("ㅤ⠀⠀⠀ \n🎟️ **Ticket**",
                           "> `tadd`, `tclose`, `tnew`, `tremove`\n\n🎉 **Giveaways**\n> `gstart [channel] [time] [winners] [prize]`,\n> `gend [giveaway-id]`,\n> `greroll [giveaway-id]`\n\n🤖 **Uptimer **\n> `add`, `ping`, `projects`, `remove`, `stats`, `total`, `uptime`, `howtouse`")
                                 .setThumbnail(client.user.displayAvatarURL())
                                       .setColor(colors.uptime);
        //-----------------------------OPTIONS----------------------
        let option1 = new MessageMenuOption()
                .setLabel('🛡️ Admin, 🔨 Moderation & ⚔️ Auto-Moderation')
                        .setEmoji('898223278005571614')
                                .setValue('option1')
                                
        let option2 = new MessageMenuOption()
                .setLabel('📜 Info, 🔮 Aura & 📘 General')
                        .setEmoji('898223316106641488')
                                .setValue('option2')
                                
        let option3 = new MessageMenuOption()
                .setLabel('🤣 Fun & 🖼️ Images')
                        .setEmoji('898223347383566406')
                                .setValue('option3')
                                
        let option4 = new MessageMenuOption()
                .setLabel('👑 Owner, 💬 ChatBot & ⚙️ Utility')
                        .setEmoji('898223364143972403')
                                .setValue('option4')
                                
        let option5 = new MessageMenuOption()
                .setLabel('🎫 Ticket, 🎉 Giveaways & 🤖 Uptimer')
                        .setEmoji('898223378362695722')
                                .setValue('option5')
                                
    let select = new MessageMenu()
            .setID('selector')
                    .setPlaceholder('Click here to view the help menu!')
                            .setMaxValues(1)
                                    .setMinValues(1)
                                            .addOptions(option1, option2, option3, option4, option5)
        //-----------------------------OPTIONS----------------------
    const Sendmenu = await message.channel.send(embed, select);
    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
        let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });
    collector.on("collect" , (b) => {
            if(b.values[0] == "option1") {
                        Sendmenu.edit(embed1, select)
                                }
        if(b.values[0] == "option2") {
                    Sendmenu.edit(embed2, select)
                            }
        if(b.values[0] == "option3") {
                    Sendmenu.edit(embed3, select)
                            }
        if(b.values[0] == "option4") {
                    Sendmenu.edit(embed4, select)
                            }
        if(b.values[0] == "option5") {
                    Sendmenu.edit(embed5, select)
                            }
        if(b.values[0] == "option6") {
                    Sendmenu.edit(embed6, select)
                            }
        b.reply.defer();
            })
    collector.on("end", (b) => {
            Sendmenu.edit("❌ This help menu is expired! Please retype the command to view again.")
                })
    }
      };

/**
 * @INFO
 *  * Bot Coded by Devansh#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 *  * @INFO
 * Please mention Him , when using this Code!
 *  * @INFO
 */