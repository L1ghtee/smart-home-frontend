<script setup>
</script>

<template>
    <div class="setting-card">
        <img class="setting-card_icon" src="/src/assets/Light.svg" alt="">
        <p class="setting-txt">Lightning</p>
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
        aspect-ratio: 1/1;
        .setting-card_icon{
            max-width: 2.75rem;
        }
        .setting-txt{
            font-size: 0.875rem;
        }
    }
</style>