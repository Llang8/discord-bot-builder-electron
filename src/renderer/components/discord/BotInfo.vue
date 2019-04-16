<template>
    <form>
        <div class="form-group">
            <label class="info-label" for="botName">Bot Name</label>
            <input type="text" class="form-control" id="botName" placeholder="Name" v-model="botConfig.botName">
            <label class="info-label" for="botDescription">Bot Description</label>
            <input type="text" class="form-control" id="botDescription" placeholder="Bot Description" v-model="botConfig.botDescription">
            <label class="info-label" for="token">Token</label>
            <input type="text" class="form-control" id="apiKey" placeholder="Token" v-model="botConfig.token">
            <label class="info-label" for="commandIdentifier">Command Identifier</label>
            <input type="text" class="form-control" id="commandIdentifier" placeholder="This is the character or string that identifies that a message is a command." v-model="botConfig.commandIdentifier">
            <span id="backup-span"><input type="checkbox" id="backup" @click="checkLogin" v-model="botConfig.backup">  Save bot to cloud</span>
            <p style="color: red" v-if="backupError">You must be logged in to save to cloud!</p>
      </div> 
    </form>
</template>
<script>
const Discord = require('../../bothandlers/discord')
export default {
    data() {
        return {
            backupError: false
        }
    },
    methods: {
        checkLogin() {
            if (!this.$store.state.isUser) {
                document.getElementById("backup").checked = false;
                this.$store.state.botConfig.backup = false;
                this.backupError = true;
                console.log('test');
            }
            
        }
    },
    components: {
    },
    computed: {
        botConfig() {
            return this.$store.state.botConfig
        }
    }
}
</script>
<style>
.info-label {
    padding-top: 5px;
}

#backup {
    height: 15px;
    width: 15px;
}
#backup-span {
    padding: 10px;
    margin-top: 0px;
}
</style>