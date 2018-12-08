<template>
    <div class="bg-modal">
        <div class="modal-content">
            <button class="btn close-modal" @click='close'><i class="fas fa-times"></i></button>
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
                    </select>
                </form>
                <span style='color: lightgray;'>Press 'X' in top right to save action</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['commandIndex'],
    data() {
        return {
            name: '',
            description: '',
            type: '',
        }
    },
    created() {
        console.log(this.commandIndex)
        if (!this.$store.state.isNewAction) {
            var currCommand = this.$store.state.botConfig.commands[this.commandIndex];
            var currAction = currCommand.actions[currCommand.actionIndex];
            this.name = currAction.name;
            this.description = currAction.description;
            this.type = currAction.type;
        }
    },
    methods: {
        close() {
            this.$store.state.showActionCreation = false;
            if (this.$store.state.isNewAction) {
                this.$store.state.botConfig.commands[this.commandIndex].actions.push({name: this.name, description: this.description, type: this.type});
            } else {
                var currCommand = this.$store.state.botConfig.commands[this.commandIndex];
                currCommand.actions[currCommand.actionIndex] = {name: this.name, description: this.description, type: this.type};
/*              this.$set(currCommand.actions[currCommand.actionIndex], 'name', this.name);
                this.$set(currCommand.actions[currCommand.actionIndex], 'description', this.description);
                this.$set(currCommand.actions[currCommand.actionIndex], 'type', this.type); */
            }
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
</style>