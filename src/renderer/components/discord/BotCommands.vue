<template>
    <div class="form-group">
    <label for="commands">Create commands</label>
    <div id="commands" v-for="(command, index) in botConfig.commands">
        <div>
            <ul>
            <li><input type="text" class="form-control" placeholder="Enter Command" v-model="command.command"></li>
            <li><input type="text" class="form-control" placeholder="Enter Response Text" v-model="command.response"></li>
            <li><label class="form-check-label" for="replyOpt">Send response as reply?</label>&nbsp;&nbsp;<input type="checkbox" class="form-check-input" v-model="command.reply" id="replyOpt"></li>
            </ul>
        </div>
    </div>
    <button @click="botConfig.commands.push({reply: false}); return false;" class="btn" style="color:black">Add command</button>
    </div>
</template>
<script>
export default {
    computed: {
        botConfig() {
            return this.$store.state.botConfig
        }
    }
}
</script>