<template>
    <div id='discordServer'>
        <h3 id='serverName'>{{botInfo.botName}}</h3>
        <p id= 'serverDescription'>{{botInfo.botDescription}}</p>
        <div id='controlBar'>
            <i class='controls fas fa-play-circle' v-bind:style="[botRunning ? {color: 'grey'} : {color: 'green'}]" @click='startBot'><span class='controlstext'>Start bot</span></i>
            <i class='controls fas fa-stop-circle' v-bind:style="[botRunning ? {color: 'red'} : {color: 'grey'}]" @click='stopBot'><span class='controlstext'>Stop bot</span></i>
            <i class='controls fas fa-edit' style="color: grey" @click='editBot'><span class='controlstext'>Edit bot</span></i>
            <i class='controls fas fa-trash' style="color: red;" id="deleteBot" @click='deleteBot'><span class='controlstext'>Delete bot</span></i>
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
            console.log('Bot ' + this.botInfo);
            this.$store.state.botConfig = this.botInfo;
            // Switch page to discord
            this.$router.push({path: 'discord'})
        },
        deleteBot() {
            this.$store.state.manageBots.showDeleteModal = true;
            this.$store.state.manageBots.currentBot = this.botInfo.botName;
        }
    }
}
</script>
<style>
#discordServer {
    width: 400px;
    height: 200px;
    background-color: var(--form-background-color);
    border-color: white;
    border-radius: 5px;
    border: solid;
    border-width: 1px;
    margin: 10px;
    display: inline-block;
    color: white;
    position: relative;
    padding: 2px 10px;
}

#serverName {
    font-size: 25px;
    
}

#controlBar {
    left:0;
    bottom:0;
    position: absolute;
    width: 100%;
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

#deleteBot {
    float:right;
}

</style>