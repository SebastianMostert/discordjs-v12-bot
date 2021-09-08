const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SlowmodeCommand extends BaseCommand {
  constructor() {
    super('slowmode', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You cannot use this command.")
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I do not have the manage channels permission.")
  
    const value = Number(args[0]);

    if(!args[0]) return message.channel.send("You need to state a number in which, how long you would like the slowmode to be set too.")
    if(!value || value < 5 || value > 21600) return message.channel.send("You need to state a number between 5 and 21600, which represents the seconds the slowmode will be")
    try {
      await message.channel.setRateLimitPerUser(value);
      message.channel.send(`The slowmode for ${message.channel} is set to ${value} seconds`)
    } catch (err) {
      console.log(err)
      message.channel.send("An error occured while setting the slowmode.")
    }
  }
}