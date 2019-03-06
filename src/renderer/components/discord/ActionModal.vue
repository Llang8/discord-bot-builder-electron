<template>
    <div class="bg-modal">
        <div class="modal-content">
            <button type="button" class="btn close-modal" @click='close'><i class="fas fa-times"></i></button>
            <div>
                <form>
                    <div class="form-group">
                        <label>Action Name</label>
                        <input type="text" class="form-control" placeholder="Name" v-model="name">
                    </div>
                    <div class="form-group">
                        <label for="description">Action Description</label>
                        <input type="text" class="form-control" id="description" placeholder="Description" v-model="description">
                    </div>
                    <label for="selActionType">Select Action Type</label>
                    <select class="form-control" id="selActionType" v-model="type">
                        <option>Message Server</option>
                        <option>Reply to User</option>
                        <option>Reply in DMs</option>
                        <option>Send Image</option>
                    </select>
                </form>
                <br>
                <form v-if="type === 'Send Image'">
                    <button type="button" class="btn" @click="chooseFile" id="fileUpload">Upload Image</button>
                    <p id="filePathDisplay"></p>
                    <p style="color: red">This action type is not working yet.</p>
                </form>
                <form v-if="type === 'Reply to User' || type === 'Message Server'">
                    <label for="description">Response</label>
                    <input type="text" class="form-control" id="description" placeholder="Response" v-model="response">
                    <label for="channelID" v-if="modalType === 'event'">Channel ID: </label>
                    <input type="text" class="form-control" id="channelID" placeholder="ChannelID" v-model="channelID" v-if="modalType === 'event'">
                </form>
                <form v-if="type === 'Reply in DMs'">
                    <label for="description">Response</label>
                    <input type="text" class="form-control" id="description" placeholder="Response" v-model="response">
                </form>
                <br>
                <button type="button" @click="close" class="btn">Save Action</button>
            </div>
        </div>
    </div>
</template>
<script>
const {dialog} = require('electron').remote;
const path = require('path');
export default {
    props: ['index', 'modalType'],
    data() {
        return {
            name: '',
            description: '',
            type: '',
            filePath: '',
            response: '',
            channelID: '',
        }
    },
    created() {
        console.log(this.index)
        /* If action already exists pull information from the global store */
        if (!this.$store.state.isNewAction) {
            if (this.modalType === 'command') {
                var currCommand = this.$store.state.botConfig.commands[this.index];
                var currAction = currCommand.actions[currCommand.actionIndex];
                this.name = currAction.name;
                this.description = currAction.description;
                this.type = currAction.type;
                this.response = currAction.response;
            } else if (this.modalType === 'event') {
                var currEvent = this.$store.state.botConfig.events[this.index];
                var currAction = currEvent.actions[currEvent.actionIndex];
                this.name = currAction.name;
                this.description = currAction.description;
                this.type = currAction.type;
                this.response = currAction.response;
                this.channelID = currAction.channelID;
            }
        }
    },
    methods: {
        // Saves the information from the current action in the global store on close
        close() {
            this.$store.state.showActionCreation = false;
            console.log(this.modalType);

            // If the modalType is set to 'command' the info must be pushed to the current command
            if (this.modalType === 'command') {
                if (this.$store.state.isNewAction) {
                    this.$store.state.botConfig.commands[this.index].actions.push({name: this.name, description: this.description, response: this.response, type: this.type, filePath: this.filePath});
                } else {
                    var currCommand = this.$store.state.botConfig.commands[this.index];
                    currCommand.actions[currCommand.actionIndex] = {name: this.name, description: this.description, response: this.response, type: this.type, filePath: this.filePath};
                }
            // If the modalType is set to 'event' the info must be pushed to the current event
            } else if (this.modalType === 'event') {
                if (this.$store.state.isNewAction) {
                    console.log(this.index);
                    console.log(this.$store.state.botConfig.events[this.index]);
                    this.$store.state.botConfig.events[this.index].actions.push({name: this.name, description: this.description, response: this.response, type: this.type, filePath: this.filePath, channelID: this.channelID});
                } else {
                    var currEvent = this.$store.state.botConfig.events[this.index];
                    currEvent.actions[currEvent.actionIndex] = {name: this.name, description: this.description, response: this.response, type: this.type, filePath: this.filePath, channelID: this.channelID};
                }                
            }
        },
        // This method is for selecting the file path for images to send to the discord server
        chooseFile() {
            console.log(__dirname + '/../../../../');
            this.filePath = path.relative(__dirname + '/../../../../', dialog.showOpenDialog({properties: ['openFile']})[0]);
            //console.log(this.filePath);
            return false;
        }
    },
}

</script>
<style>
.bg-modal {
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

.modal-content {
    z-index: 10;
    width: 500px !important;
    height: 500px !important;
    position: relative;
    background-color: var(--main-bg-color) !important;
    border-radius: 5px;
    border-color: white !important;
    border-width: 1px;
    padding: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.close-modal {
    right: 5px;
    top: 5px;
    position: absolute;
    cursor: pointer;
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover {
    cursor: pointer;
}
</style>