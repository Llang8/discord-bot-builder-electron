
var DiscordBot = require('../botcode/discord/main')
var fs = require('fs');
export function createBot(botObject) {

    // Create local file directory and store config as JSON
    fs.mkdir(__dirname + '/../local', function(err, result) {
        if(err) console.log(err);  
        fs.mkdir(__dirname + '/../local/discord', function(err, result) {
            if(err) console.log(err);  
            fs.mkdir(__dirname + '/../local/discord/' + botObject.botName, function(err, result) {
                if(err) console.log(err);  
                fs.writeFile(__dirname + '/../local/discord/' + botObject.botName + '/config.json', JSON.stringify(botObject), function(err, result) {
                    if(err) console.log(err);
                });
            });
        }); 
    }); 

    console.log(botObject);   
}

export function runBot(botName){
    DiscordBot.login(botName);
}

export function stopBot() {
    DiscordBot.logout();
}

export function getBots() {
    var files = fs.readdirSync(__dirname + '/../local/discord', (err) => {
        if(err) console.log(err);
    });
    console.log(files);
    return (files);
}

export function deleteBot(botName) {
    fs.unlink(__dirname + '/../local/discord/' + botName + '/config.json', function(err, result) {
        if(err) console.log(err);
        fs.rmdir(__dirname + '/../local/discord/' + botName, function(err) {
            if(err) console.log(err);
        })
    });
}