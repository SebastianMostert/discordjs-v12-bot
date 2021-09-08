const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission checking
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to ban members.")
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I do not have permission to ban members.")
    
    //Variables
    let reason = args.slice(1).join(" ");
    let userID = args[0]

    //Input checking
    if(!reason) reason = "No reason given";
    if (!args[0]) return message.channel.send("You need to state a user to Ban. \`!unban ID reason\`")
    if(isNaN(args[0])) return message.channel.send("The ID stated is not a number.\`!unban ID reason\`")

    //executing
    message.guild.fetchBans().then(async bans => {
      if(bans.size == 0) return message.channel.send("This server does not have anyone banned");
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return message.channel.send("The user ID stated is not banned");
      await message.guild.members.unban(bUser.user, reason).catch(err => {
        console.log(err);
        return message.channel.send("Something went wrong, while unbanning the ID.")
      }).then(() => {
        message.channel.send("Successfully unbanned " + args[0])
      });
    });
  }
}