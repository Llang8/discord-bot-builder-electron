<template>
    <div class="form-group">
        <h3>Create Commands</h3>
        <!-- Command list controls -->
        <button type="button" class="btn" @click="createCommand">Create Command</button>
        <button type="button" class="btn" @click="deleteCommand" style="margin-left: 5px;">Delete Command</button>
        <br><br>
        <!-- List of commands -->
        <select class="form-control select col-sm-4" id="selCommand" size="25">
            <option v-for="(command, index) in commands" @click="selectedCommand = index">{{command.commandName}}</option>
        </select>
        <!-- Creates command-setup instances for each command in list, shows only active instance -->
        <div v-for="(command, index) in commands">
            <command-setup v-if="selectedCommand == index" :index='index'></command-setup>
        </div>
        <!-- Shows action modal when an action command is selected -->
        <action-modal v-if='showModal == true' :index='selectedCommand' :modalType="'command'"></action-modal>
    </div>
</template>
<script>
import ActionModal from './ActionModal.vue' 
import CommandSetup from './CommandSetup.vue'

export default {
    data() {
        return {
            /* The index of the current selected command for displaying command-setup */
            selectedCommand: 0,
            /* Array of commands in store for bot */
            commands: this.$store.state.botConfig.commands
        }
    },
    computed: {
        showModal() {
            return this.$store.state.showActionCreation;
        }
    },
    methods: {
        /* Pushes a new command to the bot's store */
        createCommand() {
            this.$store.state.botConfig.commands.push({
                commandName: 'NewCommand', 
                restrictions: '',
                userPermissions: '',
                actionIndex: 0,
                actions: []
            });
            
        },
        /* Deletes selected command from bot's store */
        deleteCommand() {
            if(this.selectedCommand != null) {
                this.$store.state.botConfig.commands.splice(this.selectedCommand, 1)
            }
        }
    },
    components: {
        ActionModal,
        CommandSetup
    }
}
</script>
<style>

.select { 
    display:inline-block; 
    vertical-align:top; 
    overflow:hidden; 
    color: white;
    width: 30%;
}
.select select { 
    padding:10px; 
    margin:-5px -20px -5px -5px; 
}

</style>