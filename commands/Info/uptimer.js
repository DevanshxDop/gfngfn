const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "howtouse",
   aliases: ["howtouse"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setFooter("Page Home\n"+ client.user.username + " | Made by: Devansh", client.user.displayAvatarURL())
        .setImage(`https://cdn.discordapp.com/attachments/903679223603019777/903680066473586708/unknown.png`)
        .setColor(colors.uptime);

        const embed1 = new Discord.MessageEmbed()
        .setTitle(':clock: How to Use Uptimer!')
        .addField(":clock: **Get the link**",
          "Our first step is to get the webpage link. You can find the code in the bottom or side of you repl.it(see screenshot below)! If you do not have this link, copy paste this code at the top of your `index.js` and run it again. \n ```https://pastebin.com/HJGhAUZf```"
        )
        .setImage(`https://cdn.discordapp.com/attachments/842006438817824778/903676742613479424/unknown.png`)
      .setColor(colors.uptime);

        const embed2 = new Discord.MessageEmbed()
      .setTitle(':clock: How to Use Uptimer!n')
      .addField(":clock: **Run the command**",
        "Our next step is to runn the command. The syntax of this command is `*add <repl_url>.` If done correcty the bot should give embed saying: \n ```Added Succesfully```"
      )
      .setImage(`https://cdn.discordapp.com/attachments/842006438817824778/903677507134439434/unknown.png`)
      .setColor(colors.uptime);

        const embed3 = new Discord.MessageEmbed()
      .setTitle(':clock: How to Use Uptimer!n')
      .addField("ㅤ:clock: **Other Commands**","Now that we have added your project, you can use other command such as `projects` `remove` `stats` and `total`. Below Is an image of the remove command")
      .setImage(`https://cdn.discordapp.com/attachments/842006438817824778/903677844117389333/unknown.png`)
      .setColor(colors.uptime);

        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Step 1')
        .setEmoji('880786952205529169')
        .setValue('option1')

        let option2 = new MessageMenuOption()
        .setLabel('Step 2')
        .setEmoji('880786952205529169')
        .setValue('option2')

        let option3 = new MessageMenuOption()
        .setLabel('Step 3')
        .setEmoji('880786952205529169')
        .setValue('option3')
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click here to view the help menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3)

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

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit(":x: This help menu is expired! Please retype the command to view again.")
    })

    }
  };


/**
 * @INFO
 * Bot Coded by ! GWΣ メ♛MAARI ᴮᴴᴬᴵ♛乛ᴳᵂᴹ#0142 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */