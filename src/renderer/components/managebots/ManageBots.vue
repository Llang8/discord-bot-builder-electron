<template> 
    <div>
        <h1>Manage Bots</h1>
        <br>
        <div class='nobots' v-if='this.botNames.length == 0'>
            <i class="fas fa-frown" style="font-size: 100px;"></i>
            <br><br>
            <p>There are no bots to display</p>
        </div>
        <div v-for="(name, index) in botNames" style='display: inline;'>
            <discord-server :botInfo='botConfigs[index]'></discord-server>
        </div>
        <div class="bg-del-modal" v-if="showDeleteModal">
            <div class="modal-del-content">
                <p>Are you sure you want to delete this bot?</p>
                <button class="btn" style="width: 100px; margin-right: 20px" @click="deleteBot">Yes</button>
                <button class="btn" style="width: 100px;" @click="keepBot">No</button>
            </div>
        </div>
    </div>
</template>
<script>
import DiscordServer from './DiscordServer'
import firebase from 'firebase'
var fs = require('fs');
const DiscordMethods = require('../../bothandlers/discord');

export default {
    data() {
        return {
            botNames: [],
            botConfigs: []
        }
    },
    components: {
        DiscordServer,
    },
    computed: {
        showDeleteModal() {
            return this.$store.state.manageBots.showDeleteModal;
        }
    },
    methods: {
        deleteBot() {
            DiscordMethods.deleteBot(this.$store.state.manageBots.currentBot, !this.$store.state.botConfig.backup, this.$store.state.user.uid);
            // Delete bot from botNames array so that dashboard is reloaded without switching pages
            var index = this.botNames.indexOf(this.$store.state.manageBots.currentBot);
            this.botNames.splice(index, 1);
            this.botConfigs.splice(index, 1);
            this.$store.state.manageBots.showDeleteModal = false;

        },
        keepBot() {
            this.$store.state.manageBots.showDeleteModal = false;
        }
    },
    created() {
        this.botNames = DiscordMethods.getBots(this.$store.state.user.uid);
        for( var i = 0; i < this.botNames.length; i++) {
            var file = fs.readFileSync(__dirname + '/../../local/discord/' + this.botNames[i] + '/config.json', 'utf8');
            this.botConfigs[i] = JSON.parse(file);
        }
        var ctx = this;
        if (this.$store.state.isUser) {
            firebase.database().ref('/users/' + this.$store.state.user.uid + '/bots').once('value').then(function(snapshot) {
                console.log(snapshot.val());
                ctx.botNames = ctx.botNames.concat(Object.keys(snapshot.val()));
                Object.keys(snapshot.val()).forEach((key) => {
                    console.log(key);
                    ctx.botConfigs.push(snapshot.val()[key]);
                });
            });
        }
        if ( this.botNames.length == 0) {
            this.botNames = [];
        }
    }
}
</script>
<style>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.select-page {
  position: absolute;
  height: 40px;
  width: 80px;
  margin: -20px 0 0 -10px;
}
.nobots {
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30%;
    width: 50%;
    margin: -15% 0 0 -25%;
    text-align: center;
}

.bg-del-modal {
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.modal-del-content {
    width: 300px !important;
    height: 100px !important;
    position: relative;
    background-color: var(--main-bg-color) !important;
    border-radius: 5px;
    border-width: 1px;
    padding: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>