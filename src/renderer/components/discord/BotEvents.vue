<template>
    <div class="form-group">
        <h3>Create Event Listener</h3>
        <button type="button" class="btn" @click="createEvent">Create Event</button>
        <button type="button" class="btn" @click="deleteEvent" style="margin-left: 5px;">Delete Event</button>
        <br><br>
        <select class="form-control select col-sm-4" id="selEvent" size="25">
            <option v-for="(event, index) in events" @click="selectedEvent = index">{{event.eventName}}</option>
        </select>
        <!-- Show list of events and allow user to select one to edit -->
        <div v-for="(event, index) in events">
                <event-setup v-if="selectedEvent == index" :eventIndex='index'></event-setup>
        </div>
        <!-- Show action modal if needed -->
        <action-modal v-if='showModal == true' :index='selectedEvent' :modalType="'event'"></action-modal>
        </div>
    </div>
</template>
<script>
import ActionModal from './ActionModal.vue' 
import EventSetup from './EventSetup.vue'

export default {
    data() {
        return {
            /* Controls which event index is being edited */
            selectedEvent: 0,
            /* List of events from global store */
            events: this.$store.state.botConfig.events
        }
    },
    computed: {
        /* Checks if action creation modal should be shown */
        showModal() {
            return this.$store.state.showActionCreation;
        },
    },
    methods: {
        /* Pushes a new event to the store's array */
        createEvent() {
            // console.log(this.$store.state.botConfig);
            this.$store.state.botConfig.events.push({
                eventName: 'NewEvent', 
                eventType: '',
                actionIndex: 0,
                actions: []
            });
        },
        /* Removes event from the store's array */
        deleteEvent() {
            if(this.selectedEvent != null) {
                this.$store.state.botConfig.events.splice(this.selectedEvent, 1)
            }
        }
    },
    components: {
        ActionModal,
        EventSetup
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