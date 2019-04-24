<template> 
    <div> <!-- MAIN DISCORD CHAT BOT CREATION PAGE -->
        <h1>Build a Discord Chat Bot</h1>
        <p>To manage already existing Discord bots visit the 'Manage Bots' page.</p>
        <!-- Change component based on current page -->
        <bot-info v-if='discordPageNum == 1'></bot-info>
        <bot-commands v-if='discordPageNum == 2' style='max-height: 250px;'></bot-commands>
        <bot-events v-if='discordPageNum == 3' style='max-height: 250px'></bot-events>

        <!-- Navigation for bot creation -->
        <button @click='prevPage' class='btn btn-secondary pageControl' id='previous' v-if='discordPageNum != 1'>Previous</button>  
        <button @click='nextPage' class='btn btn-secondary pageControl' id='next' v-if='discordPageNum != 3'>Next</button>
        <button @click='createBot' class='btn btn-secondary pageControl' id='createBot'><i class="far fa-save"></i> Save Bot</button>
    </div>
</template>
<script>
import BotInfo from './BotInfo'
import BotCommands from './BotCommands'
import BotEvents from './BotEvents'
import {createBot} from '../../bothandlers/discord'

export default {
    data() {
        return {
        }
    },
    components: {
        BotInfo,
        BotCommands,
        BotEvents
    },
    methods: {
        /* Switches to next component */
        nextPage() {
            this.$store.state.discordPageNum++;
        },
        /* Switches to last component */
        prevPage() {
            this.$store.state.discordPageNum--;
        },
        /* Creates a new bot using function pulled in from bothandlers/discord.js */
        createBot() {
            createBot(this.$store.state.botConfig, this.$store.state.user.uid);
        }
    },
    computed: {
        /* Keeps track of current page number saved in global store */
        discordPageNum() {
            return this.$store.state.discordPageNum;
        }
    }
}
</script>
<style>
.btn {
    color: black;
}
#next {
    right: 10px;
    display: inline;
    text-align: right;
}

.form-control {
    background-color: var(--form-background-color);
    color: white;
}

.pageControl {
    position: absolute;
    top: 700px;
    width: 100px;
    text-align: center !important;
}
#createBot {
    right: 25px;
    margin-right: 72px;
}
#next {
    right: 25%;
}
#previous {
    left: 25%;
}

</style>