const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const fetchP = import('node-fetch').then(mod => mod.default)
const fetch = (...args) => fetchP.then(fn => fn(...args))

module.exports = class MemeCommand extends BaseCommand {
  
  constructor() {
    super('meme', 'fun', []);
  }

  async run(client, message, args) {
    fetch("https://meme-api.herokuapp.com/gimme")
      .then(res => res.json())
      .then(async json => {
        const memeEmbed = new Discord.MessageEmbed()
          .setTitle(json.title)
          .setImage(json.url)
          .setFooter(`${json.subreddit} ${json.postLink}`)
  
        let msg = await message.channel.send("Fetching a meme from Reddit...")
        msg.edit(memeEmbed)
      });
    }
}