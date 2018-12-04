<template>
    <div id='discordServer'>
        <h3 id='serverName'>{{botInfo.botName}}</h3>
        <p id= 'serverDescription'>{{botInfo.botDescription}}</p>
        <div id='controlBar'>
            <i class='controls fas fa-play-circle' v-bind:style="[botRunning ? {color: 'grey'} : {color: 'green'}]" @click='startBot'><span class='controlstext'>Start bot</span></i>
            <i class='controls fas fa-stop-circle' v-bind:style="[botRunning ? {color: 'red'} : {color: 'grey'}]" @click='stopBot'><span class='controlstext'>Stop bot</span></i>
            <i class='controls fas fa-edit' style="color: grey" @click='editBot'><span class='controlstext'>Edit bot</span></i>
        </div>
    </div>
</template>
<script>
const DiscordMethods = require('../../bothandlers/discord');

export default {
    props: ['botInfo'],
    data() {
        return {
            botRunning: false,
        }
    },
    methods: {
        startBot() {
            if (!this.botRunning) {
                this.botRunning = true;
                console.log(DiscordMethods.runBot(this.botInfo.botName));
                console.log('Bot ' + this.botInfo.botName + ' started');
            }
        },
        stopBot() {
            if (this.botRunning) {
                this.botRunning = false;
                console.log('Bot ' + this.botInfo.botName + ' stopped');
            }
        },
        editBot() {
            console.log('Bot ' + this.botInfo.botName + ' editing');
        }
    }
}
</script>
<style>
#discordServer {
    width: 400px;
    height: 200px;
    background-color: lightgray;
    margin: 8px 8px 8px 8px;
    display: inline-block;
    color: black;
    -webkit-box-shadow: 5px 5px 16px -2px rgba(0,0,0,0.72); 
    box-shadow: 5px 5px 16px -2px rgba(0,0,0,0.72);
    position: relative;
    padding: 8px 8px 8px 8px;
}

#serverName {
    font-size: 25px;
    
}

#controlBar {
    left:5px;
    bottom:0;
    position: absolute;
}

.controls{
    font-size: 25px;
    cursor: pointer;
    margin: 4px 4px 4px 4px;
}

.controls .controlstext {
    visibility: hidden;
    width: 60px;
    background-color: #F0F0F0;
    color: #000000;
    text-align: center;
    padding: 5px 0;
    font-size: 12px;
    position: absolute;
    top: 30px;
    z-index: 1;
}

.controls:hover .controlstext {
    visibility: visible;
}
</style>