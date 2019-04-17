import firebase from 'firebase'
import DiscordBot from '../botcode/discord/main';
var fs = require('fs');
var appConfig = require('../../../config.json');
export function createBot(botObject, userId) {
    // If the bot is supposed to be saved to database
    console.log(botObject);
    if( botObject.backup) {
        firebase.database().ref('users/' + userId + '/bots/').update({
            [botObject.botName]: botObject
        });
    } else {
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
    }
}
 
export function runBot(botName, isLocal, userId){
    if ( isLocal) {
        config = require(__dirname + '/../local/discord/' + botName + '/config.json')
        var bot = new DiscordBot();
        bot.login();
        return bot;
    // If bot isn't locally stored it should be run by the backend.
    } else {
        // Tell the backend server to run the bot
        var request = new XMLHttpRequest();
        request.onreadystatechange=function(){
            if (request.readyState==4 && request.status==200){
                alert(request.status);
                // To get the response use request.responseText;
            }
        }
        console.log(appConfig);
        request.open("GET", `${appConfig.backendUrl}startBot/${userId}/${botName}`);
        request.send(null);
    }
}

export function stopBot(botName, bot, userId) {
    // If bot is defined it is a local bot so log it out
    if ( bot) {
        bot.logout();
    } else {
        // Tell the backend server to run the bot
        var request = new XMLHttpRequest();
        request.onreadystatechange=function(){
            if (request.readyState==4 && request.status==200){
                alert(request.status);
                // To get the response use request.responseText;
            }
        }
        request.open("GET", `${appConfig.backendUrl}stopBot/${userId}/${botName}`);
        request.send(null);
    }
}

export function getBots() {
    var files = fs.readdirSync(__dirname + '/../local/discord', (err) => {
        if(err) console.log(err);
    });
    return files;
}

export function deleteBot(botName, isLocal, userId) {
    if(isLocal) {
        fs.unlink(__dirname + '/../local/discord/' + botName + '/config.json', function(err, result) {
            if(err) console.log(err);
            fs.rmdir(__dirname + '/../local/discord/' + botName, function(err) {
                if(err) console.log(err);
            })
        }); 
    } else {
        firebase.database().ref('users/' + userId + '/bots/' + botName).remove();
    }

}