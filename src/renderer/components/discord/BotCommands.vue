<template>
    <div class="form-group">
    <label for="commands">Create commands</label>
    <br><br>
    <button class="btn" @click="createCommand">Create Command</button>
    <!-- <button @click="toggleShowCommandCreation" class="btn"><i class="fas fa-plus"></i>  Add action</button> -->
    <br><br>
    <select class="form-control select col-sm-4" id="selCommand" size="25">
        <option v-for="(command, index) in commands" @click="selectedCommand = index">{{command.commandName}}</option>
    </select>
    <div v-for="(command, index) in commands">
        <command-setup v-if="selectedCommand == index"></command-setup>
    </div>
    <command-modal v-if='showCommandCreation == true'></command-modal>
    </div>
</template>
<script>
import CommandModal from './CommandModal.vue' 
import CommandSetup from './CommandSetup.vue'
const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow


export default {
    data() {
        return {
            showModal: false,
            selectedCommand: null,
            commands: this.$store.state.botConfig.commands
        }
    },
    computed: {
        botConfig() {
            return this.$store.state.botConfig
        },
        showCommandCreation() {
            return this.$store.state.showCommandCreation
        }
    },
    methods: {
        toggleShowCommandCreation() {
            this.$store.state.showCommandCreation = !this.$store.state.showCommandCreation
        },
        createCommand() {
            this.$store.state.botConfig.commands.push({
                commandName: 'Test Command', 
                actions: [{name: 'Test', description: 'TEST DESCRIPTION ASDASD'}]
            });
        },
        test() {
            console.log(this.selectedCommand)
        }
    },
    components: {
        CommandModal,
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
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}
/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

</style>