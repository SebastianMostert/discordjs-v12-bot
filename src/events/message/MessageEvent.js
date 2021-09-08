const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;

    var badWords = ["sussy", "baka", "amogus", "amongus", "among us"];


    if(badWords.some(word => ` ${message.content.toLowerCase()} `.includes(` ${word} `))){
        let errorLogChannel = "885163082878419015"
        if (!message.guild.me.permissionsIn(message.channel).has("MANAGE_MESSAGES")){s
            client.channels.cache.get(errorLogChannel).send(`I do not have \`MANAGE_MESSAGES\` permission, in the <#${message.channel.id}>`)
        } 
        else {
            message.delete();
        }
        
        if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES")) {
            client.channels.cache.get(errorLogChannel).send(`I do not have \`SEND_MESSAGES\` permission, in the <#${message.channel.id}>`);
        }
        else 
        {
            message.channel.send(`You're not funny ${message.author.username}.`)
        }
    }

    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .toLowerCase()
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}