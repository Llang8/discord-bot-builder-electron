<template>
    <div class="bg-permissions-modal">
        <div class="modal-permissions-content">
            <button class="btn close-modal" @click='close'><i class="fas fa-times"></i></button>
            <div>
                <form>
                                                                                                                                                                                                                                                                                   
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

    },
    methods: {
        close() {
        }
    },
}
</script>
<style>
.bg-permissions-modal {
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

.permissions-modal-content {
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

.close-permissions-modal {
    right: 5px;
    top: 5px;
    position: absolute;
    cursor: pointer;
}
</style>