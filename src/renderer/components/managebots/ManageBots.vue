<template> 
    <div>
        <h1>Manage Bots</h1>
        <br>
        <div class='nobots' v-if='this.botNames == null'>
            <i class="fas fa-frown" style="font-size: 100px;"></i>
            <br><br>
            <p>There are no bots to display</p>
        </div>
        <div v-for="(name, index) in botNames" style='display: inline;'>
            <discord-server :botInfo='botConfigs[index]'></discord-server>
        </div>
    </div>
</template>
<script>
import DiscordServer from './DiscordServer'
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
    created() {
        this.botNames = DiscordMethods.getBots();
        for( var i = 0; i < this.botNames.length; i++) {
            var file = fs.readFileSync(__dirname + '/../../local/discord/' + this.botNames[i] + '/config.json', 'utf8');
            this.botConfigs[i] = JSON.parse(file);
        }
        if ( this.botNames.length == 0) {
            this.botNames = null;
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
</style>