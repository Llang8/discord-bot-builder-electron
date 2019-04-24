<template> <!-- Event setup page for bot creation -->
        <div class="col-sm-8" id="event-menu">
            <div class="form-group">
                <!-- EVENT NAME -->
                <label for="eventName">Event Name</label>
                <input type="text" class="form-control" id="eventName" placeholder="Event Name" v-model="event.eventName">
                <br>

                <!-- EVENT TYPE -->
                <label for="eventType">Event Type</label>
                <select type="text" class="form-control" style="color: white;" id="eventType" v-model="event.eventType">
                    <option>User Joins Server</option>
                </select>

                <!-- ACTION TOOLBAR -->
                <div class="btn-group" id="action-toolbar">
                    <button class="btn" id="createAction" @click='createAction'><i class="far fa-plus-square"></i>  Create</button>
                    <button class="btn" id="editAction" @click='editAction'><i class="fas fa-edit"></i>  Edit</button>
                    <button class="btn" id="deleteAction" @click='deleteAction'><i class="far fa-trash-alt"></i>  Delete</button>
                </div>

                <!-- ACTIONS LIST -->
                <label for="selAction" style="margin-top: 47px;">Actions</label>
                <select class="form-control select col-sm-8" id="selAction" size="8">
                    <option v-for="(action, index) in event.actions" @click="event.actionIndex = index">
                        <span>#{{index}}</span>
                        <span>{{action.name}} - </span>
                        <span>{{action.description}}</span>
                    </option>
                </select>
            </div>
        </div>
        </template>
        <script>
        export default {
            /* Index of the current event being edited */
            props: ['eventIndex'],
            data() {
                return {
                }
            },
            /* Gets config for current event */
            computed: {
                event() {
                    return this.$store.state.botConfig.events[this.eventIndex];
                }
            },
            methods: {
                /* Creates a new action */
                createAction() {
                    this.$store.state.isNewAction = true;
                    this.$store.state.showActionCreation = true;
                    console.log(this.event)
                },
                /* Edits an existing action */
                editAction() {
                    this.$store.state.isNewAction = false;
                    this.$store.state.showActionCreation = true;
                },
                /* Deletes an existing action */
                deleteAction() {
                    var actionIndex = this.$store.state.botConfig.events[this.eventIndex].actionIndex;
                    console.log(actionIndex);
                    if(actionIndex != null)
                        this.$store.state.botConfig.events[this.eventIndex].actions.splice(actionIndex, 1);
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