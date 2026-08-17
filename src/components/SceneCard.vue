<script setup>

</script>

<template>
    <div class="scene-card">
        <div class="scene-card_bg">
            <img src="/src/assets/card.png" alt="" class="bg-image">
            <div class="bg-gradient"></div>
        </div>

        <div class="scene-card_content">
            <img src="/src/assets/icon-heart.svg" alt="" class="scene-card_icon">
            <div class="scene-card_txt">Romantic</div>
            <button class="scene-card_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-play-icon lucide-play">
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.scene-card {

    padding: 1.125rem;
    border-radius: 1.5rem;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    aspect-ratio: 1 / 1;
    border: 1px solid #ffffff49;

    .scene-card_content {
        display: flex;
        flex-direction: column;
        align-items: start;
        position: relative;
        gap: 0.75rem;
        width: 100%;
        height: 100%;
        .scene-card_btn{
            margin-top: auto;
            margin-left: auto;
            width: 3.125rem;
        }
    }

    .scene-card_bg {
        position: absolute;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        .bg-image {
            position: absolute;
            width: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        .bg-gradient {
            position: absolute;
            width: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(45deg, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%);
        }
    }
}
</style>