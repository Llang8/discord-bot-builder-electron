<template>
    <form>
        <div class="form-group">
            <label for="botName">Bot Name</label>
            <input type="text" class="form-control" id="botName" placeholder="Name" v-model="botConfig.botName">
            <label for="botDescription">Bot Description</label>
            <input type="text" class="form-control" id="botDescription" placeholder="Bot Description" v-model="botConfig.botDescription">
            <label for="token">Token</label>
            <input type="text" class="form-control" id="apiKey" placeholder="Token" v-model="botConfig.token">
            <label for="commandIdentifier">Command Identifier</label>
            <input type="text" class="form-control" id="commandIdentifier" placeholder="This is the character or string that identifies that a message is a command." v-model="botConfig.commandIdentifier">
      </div>
    </form>
</template>
<script>
const Discord = require('../../bothandlers/discord')
export default {
    data() {
        return {
        }
    },
    methods: {
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