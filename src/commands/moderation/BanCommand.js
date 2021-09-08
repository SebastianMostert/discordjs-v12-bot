const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission checking
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to ban members.")
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I do not have permission to ban members.")
    
    //Variables
    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();

    //Input checking
    if(!reason) reason = "No reason given";
    if (!args[0]) return message.channel.send("You need to state a user to Ban. \`!ban @user reason\`")
    if(!mentionedMember) return message.channel.send("The member mentioned, is not in the server.");
    if(!mentionedMember.bannable) return message.channel.send("I cannot ban that member");

    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been Banned from ${message.guild.name}`)
      .setDescription(`Reason for being banned: ${reason}`)
      .setColor("#5708ab")
      .setTimestamp()
      .setFooter(client.user.tag ,client.user.displayAvatarURL());

      await mentionedMember.send(banEmbed).catch(err => console.log(err))
      await mentionedMember.ban({
        days: 7,
        reason: reason
      }).catch(err => console.log(err)).then(() => message.channel.send("Successfully banned " + mentionedMember.user.tag))
  }
}