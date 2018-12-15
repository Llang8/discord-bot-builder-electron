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
/*         switch(action.type) {
          case 'Reply to User':
            msg.reply( action.response);
            break;
          case 'Message Server':
            msg.channel.send( action.response);
            break;
          case 'Send Image':
            console.log(action.filePath)
            msg.channel.send('Test', {
              files: ['./Capture.png']
            }).then(console.log);
            break;
          case 'Reply in DMs':
            msg.author.send(action.response);
            break;
        } */
        runAction(action, msg, msg.channel);
      })
    }
  });

});

function runAction(action, msg, channel) {
  switch(action.type) {
    case 'Reply to User':
      msg.reply( action.response);
      break;
    case 'Message Server':
      channel.send( action.response);
      break;
    case 'Send Image':
      console.log(action.filePath)
      channel.send('Test', {
        files: ['./Capture.png']
      }).then(console.log);
      break;
    case 'Reply in DMs':
      msg.author.send(action.response);
      break;
  }
}

function events(events, client) {
  events.forEach((event) => {
      switch (event.eventType) {
          case 'User Joins Server':
              client.on('guildMemberAdd', member => {
                  event.actions.forEach(action => {
                    runAction(action, null,  member.guild.channels.get('520386682315472907'));
                  })
              });
              break;
      }
  });
}  

module.exports = {
  login: function(botName) {
    config = require(__dirname + '/../../local/discord/' + botName + '/config.json')
    client.login(config.token);
    events(config.events, client);
  },
  logout: function() {
    client.destroy(function(err) {
      (err) ? console.log(err) : console.log(config.botName + ' is logged out.');
    });
  }
}
