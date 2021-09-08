const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  async run(client, message, args) {
    const messageToSay = args.join(" ")
    if(messageToSay) return message.channel.send("Youre message is too long, please shorten it.")
    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag} says: ${messageToSay}`)
      .setFooter(message.author.tag ,message.author.displayAvatarURL())
      .setColor("#84daf8")
      .setTimestamp();
      try {
        message.channel.send(sayEmbed)
        message.delete();
      } catch (err) {
        console.log(err);
        message.channel.send("I am not able to say that message.")
      }
  }
}