const colors = require('./../../colors.json')
const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "tickle",
  aliases: [],
  description: "Return A Random shit!",
  usage: "tickle",
  run: async (client, message, args) => {

    const Data = await Random.GetAnimeImage({ Anime: 'tickle', Color: Color });
    
    return message.channel.send(Data);
  }
};


/**
 * @INFO
 * Bot Coded by ! GWΣ メDevanshInsaan#0142 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */