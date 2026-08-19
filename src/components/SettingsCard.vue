<script setup>
defineProps({
    title: String,
    icon: String
})
</script>

<template>
    <div class="setting-card">
        <img class="setting-card_icon" :src="icon" :alt="title">
        <p class="setting-txt">{{ title }}</p>
    </div>
</template>

<style lang="scss" scoped>
    .setting-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.75rem;
        gap: 0.5rem;
        border-radius: 1.25rem;
        border:1px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(5px);
        aspect-ratio: 1/1;
        cursor: pointer;
        .setting-card_icon{
            max-width: 2.75rem;
        }
        .setting-txt{
            font-size: 0.875rem;
        }
    }
</style>