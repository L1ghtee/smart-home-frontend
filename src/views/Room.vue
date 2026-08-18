<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
import SceneCard from '../components/SceneCard.vue';
import SettingsCard from '../components/SettingsCard.vue';
const showModal = ref(false)

</script>

<template>
    <section class="room">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="content">
                <div class="logo">
                    <img src="/src/assets/logo.png" alt="Logo" width="48" />
                </div>
                <div class="header">
                    <div class="greatings">
                        <h1>Good evening!</h1>
                        <p>Welcome Home!</p>
                    </div>
                    <div class="weather">
                        <img src="/src/assets/weather-cloud.svg" alt="Weather" />
                        <p>25°C</p>
                    </div>
                </div>

                <div class="scenes">
                    <SceneCard/>
                    <SceneCard/>
                    <SceneCard/>
                    <SceneCard/>
                </div>
                <div class="settings">
                    <SettingsCard  @click="showModal=true"/>
                    <SettingsCard/>
                    <SettingsCard/>
                    <SettingsCard/>
                </div>
                <Modal :show="showModal" @close = "showModal= false">
                    <H1> This is popup</H1>
                </Modal>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .room{
         
        background-image: url("/src/assets/Room_bg.png");
        background-size: cover;
        background-position: center;
        width: 100dvw;
        height: 100dvh;
        position: relative;
        .bg-overlay{
            position:absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color:rgb(0 0 0 / 30%);
            z-index: 0;
        }
    }
    .content{
        display: flex;
        flex-direction:column;
        gap: 2.5rem;
        align-items: center;
        justify-content:space-between;
        width: 100%;
        position: relative;
        z-index: 1;
        
    }
    .header{
        width: 100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .greatings{
            display:flex;
            flex-direction:column;
            gap:0.5rem;
        }
        .weather{
            display:flex;
            align-items:center;
            gap:0.5rem;
            p{
                font-size: 1.5rem;
            }
        }
    }
    .scenes{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        gap: 1.5rem;
    }
    .settings{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.25rem;

    }
    
</style>
