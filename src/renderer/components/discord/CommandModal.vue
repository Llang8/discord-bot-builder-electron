<template>
    <div class="bg-modal">
        <div class="modal-content">
            <button class="btn close-modal" @click='close'><i class="fas fa-times"></i></button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        close() {
            this.$store.state.showCommandCreation = false;
        }
    }
}
</script>
<style>
.bg-modal {
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
}

.close-modal {
    right: 5px;
    top: 5px;
    position: absolute;
    cursor: pointer;
}
</style>