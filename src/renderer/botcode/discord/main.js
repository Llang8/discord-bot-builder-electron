const Discord = require('discord.js');


class Bot {
    // Sets up the discord bot
    constructor(config) {
        this.client = new Discord.Client();
        this.config = config;

        this.client.on('ready', () => {
            console.log(config.botName + ' is logged in.');
        });

        this.client.on('message', msg => {
            const args = msg.content.slice(config.commandIdentifier.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            // Check that the message is a command, if not return
            if ( msg.content.indexOf(config.commandIdentifier) !== 0) return;
        
            // Return from function if author is a bot. Ignore other bots.
            if ( msg.author.bot) return;
        
            config.commands.forEach(presetCommand => {
              if (presetCommand.commandName.toLowerCase() == command) {
                presetCommand.actions.forEach(action => {
                  this.runAction(action, msg, msg.channel);
                })
              }
            });
        });
    }

    get BotName() {
        return this.config.botName;
    }

    // Logs the discord bot in
    login() {
        this.client.login(this.config.token);
    }

    // Logs the discord bot out
    logout() {
        this.client.destroy(function(err) {
            (err) ? console.log(err) : console.log(this.config.botName + ' is logged out.');
        });
    }

    runAction(action, msg, channel) {
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

    events(events) {
        events.forEach((event) => {
            switch (event.eventType) {
                case 'User Joins Server':
                    this.client.on('guildMemberAdd', member => {
                        event.actions.forEach(action => {
                          runAction(action, null,  member.guild.channels.get('520386682315472907'));
                        })
                    });
                    break;
            }
        });
    }
}

export default { 
  Bot
};