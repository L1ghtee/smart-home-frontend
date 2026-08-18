<script setup>
defineProps({
    show: {
        type: Boolean,
        default: false
    }
})

defineEmits(['close'])
</script>

<template>
    <div class="popup_wrp" v-if="show" @click.self="$emit('close')">
        <div class="popup">
            <slot />

            <button
                class="close-btn"
                @click="$emit('close')"
            >
                OK
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.popup_wrp {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background-color: rgb(0 0 0 / 50%);
     backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;

    .popup {
        width: 37.5rem;
        height: 90%;
        background-color: #fff;
        border-radius: 1.5rem;
        padding: 1rem;
        color: $background-color;
    }
}
</style>