const Discord = require('discord.js');
var config;
const client = new Discord.Client();

client.on('ready', () => {
  console.log(config.botName + ' is logged in.');
});

client.on('message', msg => {

 
  const args = msg.content.slice(config.commandIdentifier.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // Check that the message is a command, if not return
  if ( msg.content.indexOf(config.commandIdentifier) !== 0) return;

  // Return from function if author is a bot. Ignore other bots.
  if ( msg.author.bot) return;

  config.commands.forEach(presetCommand => {
    if (presetCommand.commandName.toLowerCase() == command) {
      presetCommand.actions.forEach(action => {
        (action.type === "Reply to User") ? msg.reply( action.description) : msg.channel.send(action.description);
      })
    }
  });

});

module.exports = {
  login: function(botName) {
    config = require(__dirname + '/../../local/discord/' + botName + '/config.json')
    client.login(config.token);
  },
  logout: function() {
    client.destroy(function(err) {
      (err) ? console.log(err) : console.log(config.botName + ' is logged out.');
    });
  }
}
