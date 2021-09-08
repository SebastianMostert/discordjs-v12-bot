const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot use this command");
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("I do not have \`KICK_MEMBERS\` permission.");

    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given";
    const KickEmbed = new Discord.MessageEmbed()
      .setTitle(`You where kicked from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor("#5708ab")
      .setTimestamp()
      .setFooter(client.user.tag ,client.user.displayAvatarURL());

      if (!args[0]) return message.channel.send("You need to state a user to kick. \`!Kick @user reason\`")
      if(!mentionedMember) return message.channel.send("The member mentioned, is not in the server.");
      if(!mentionedMember.kickable) return message.channel.send("I cannot kick that member");
      try {
        await mentionedMember.send(KickEmbed);
      } catch (err) {
        console.log("I was unable to message the member.")
      }

      try {
        await mentionedMember.kick(reason)
        message.channel.send("User was kicked")
      } catch (err) {
        console.log(err);
        return message.channel.send("I was unable to kick the mentioned user. \n This is likely because theire role is higher in the server hierarchy!")
      }
  }
}