const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'information', []);
  }

  run(client, message, args) {
    const sectionEmbed = new Discord.MessageEmbed()
   .setTitle('Bot Help Sections')
   .setDescription('Use !help sectionName to access another section.\nSections:\ninformation\nfun\nmoderation\ntool')
   .addField('Fun Commands', 'Commands that all users can user that are for fun and have no purpose.')
   .addField('Information commands', 'Commands that return some form of important imformation.')
   .addField('Moderation commands', 'Commands that are for moderation purposes within a server.')
   .addField('Tool commands', 'Commands that add features to a server.')
   .setFooter(client.user.tag, client.user.displayAvatarURL());
 
const infoEmbed = new Discord.MessageEmbed()  
   .setTitle('Information Commands.')
   .addField('Help Commands', 'This commands shows the user all the commands possable.')
 
const funEmbed = new Discord.MessageEmbed()
   .setTitle('Fun Commands.')
   .addField('Avatar Command', 'Returns a users avatar.')
   .addField('Meme Commands', 'Returns a Meme to the channel.')
   .addField('Say Command', 'Make the bot say a message to the channel.')
   .addField('Snipe Command', 'Returns the last deleted message within a channel.');
 
const moderationEmbed = new Discord.MessageEmbed()
   .setTitle('Moderation Commands.')
   .addField('Ban Command', 'Bans a member from the server')
   .addField('Kick Command', 'Kicks a member from the server')
   .addField('Nuke Command', 'Clones a channel and deletes the old one.')
   .addField('Purge Command', 'Purges messages within a channel')
   .addField('Unban Command', 'Unbans a member from the server')
 

if (!args[0]) return message.channel.send(sectionEmbed);
if (args[0] == 'information') return message.channel.send(infoEmbed);
else if (args[0] == 'fun') return message.channel.send(funEmbed);
else if (args[0] == 'moderation') return message.channel.send(moderationEmbed);
  }
}