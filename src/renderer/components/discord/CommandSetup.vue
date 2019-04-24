<template>
<!-- BEGIN COMMAND MENU -->
<div class="col-sm-8" id="command-menu">
    <div class="form-group">

        <!-- Command Name -->
        <label for="commandName">Command Name</label>
        <input type="text" class="form-control" id="commandName" placeholder="Command Name" v-model="command.commandName">
        <br>

        <!-- Command Restrictions -->
        <label for="commandRestrictions">Command Restrictions</label>
        <select type="text" class="form-control" style="color: white;" id="commandRestrictions" v-model="command.restrictions">
            <option>None</option>
            <option>Server Only</option>
            <option>Owner Only</option>
            <option>DM Only</option>
        </select>
        <br>

        <!-- Necessary User Permissions -->
        <label for="userPermissions">Necessary Permission</label>
        <select type="text" class="form-control" style="color: white;" id="commandRestrictions" v-model="command.userPermissions">
            <!-- Make this a popup modal with checkboxes for each permission -->
        </select>

        <!-- Action Toolbar -->
        <div class="btn-group" id="action-toolbar">
            <button class="btn" id="createAction" @click='createAction'><i class="far fa-plus-square"></i>  Create</button>
            <button class="btn" id="editAction" @click='editAction'><i class="fas fa-edit"></i>  Edit</button>
            <button class="btn" id="deleteAction" @click='deleteAction'><i class="far fa-trash-alt"></i>  Delete</button>
        </div>
        <label for="selAction" style="margin-top: 47px;">Actions</label>
        <!-- Displays actions in order and allows user to select action for editing or deletion -->
        <select class="form-control select col-sm-8" id="selAction" size="8">
            <option v-for="(action, index) in command.actions" @click="command.actionIndex = index">
                <span>#{{index}}</span>
                <span>{{action.name}} - </span>
                <span>{{action.description}}</span>
            </option>
        </select>
    </div>
</div> <!-- END COMMAND MENU -->
</template>
<script>
export default {
    /* Index of current command */
    props: ['index'],
    data() {
        return {
        }
    },
    computed: {
        /* Gets the current command being setup */
        command() {
            return this.$store.state.botConfig.commands[this.index];
        }
    },
    methods: {
        /* Sets global store to show Permissions Modal */
        openPermissions() {
            this.$store.state.showPermissionsModal = false;
        },
        /* Sets global store to show Action Modal with a new Modal setup */
        createAction() {
            this.$store.state.isNewAction = true;
            this.$store.state.showActionCreation = true;
        },
        /* Sets global store to show Action Modal, pulls action information for editing */
        editAction() {
            this.$store.state.isNewAction = false;
            this.$store.state.showActionCreation = true;
        },
        /* Deletes an action from the global store */
        deleteAction() {
            var actionIndex = this.$store.state.botConfig.commands[this.index].actionIndex
            if(actionIndex != null)
                this.$store.state.botConfig.commands[this.index].actions.splice(actionIndex, 1);
        }
    }
}
</script>
<style>
#action-toolbar{
    padding-top: 25px;
    position: absolute;
    right: 15px;
}

#selAction {
    margin-top: 0px;
    width: 100%
}
</style>