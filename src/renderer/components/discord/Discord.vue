<template> 
    <div>
        <h1>Build a Discord Chat Bot</h1>
        <p>To manage already existing Discord bots visit the 'Manage Bots' page.</p>
        <bot-info v-if='discordPageNum == 1'></bot-info>
        <bot-commands v-if='discordPageNum == 2' style='max-height: 250px;'></bot-commands>
        <button @click='prevPage' class='btn btn-secondary pageControl' id='previous' v-if='discordPageNum != 1'>Previous</button>  
        <button @click='nextPage' class='btn btn-secondary pageControl' id='next' v-if='discordPageNum != 3'>Next</button>
        <button @click='createBot' class='btn btn-secondary pageControl' id='createBot'><i class="far fa-save"></i> Save Bot</button>
    </div>
</template>
<script>
import BotInfo from './BotInfo'
import BotCommands from './BotCommands'
import {createBot} from '../../bothandlers/discord'

export default {
    data() {
        return {
        }
    },
    components: {
        BotInfo,
        BotCommands
    },
    methods: {
        nextPage() {
            this.$store.state.discordPageNum++;
        },
        prevPage() {
            this.$store.state.discordPageNum--;
        },
        createBot() {
            createBot(this.$store.state.botConfig);
        }
    },
    computed: {
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