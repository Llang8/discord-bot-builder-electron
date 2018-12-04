
var DiscordBot = require('../botcode/discord/main')
var fs = require('fs');
export function createBot(botObject) {

    // Create local file directory and store config as JSON
    fs.mkdir(__dirname + '/../local', function(err, result) {
        if(err) console.log(err);  
        fs.appendFile(__dirname + '/../local/bots.txt', botObject.botName + ',', function(err, result) {
            if(err) console.log(err);
        });
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
    var data = fs.readFileSync(__dirname + '/../local/bots.txt', 'utf8');
    var dataArr = data.split(',');
    dataArr.pop();
    return (dataArr);
}