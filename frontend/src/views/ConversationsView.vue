<script setup lang="ts"></script>

<template>
    <!-- TODO smooth profile pic animation, rethink color scheme, add messages -->
    <!-- Chat bubbles -->
    <section class="float-left bg-blue-950 w-1/12 h-screen border-r-4 border-solid border-indigo-950">
        <div class="flex flex-col items-center">
            <img src="../assets/pictures/profile-pic-default.png.png" class="w-16 h-16 m-4 rounded-full hover:rounded-lg" v-for="i in 10" :key="i"/>
        </div>
    </section>
    <!-- Messages -->
    <section class="float-right flex flex-col items-center h-screen w-11/12">
        <div class="bg-sky-800 flex-grow w-full"></div>
        <div class="flex flex-row items-center justify-items-center bg-blue-950 h-32 w-full border-t-4 border-solid border-indigo-950">
            <textarea class="flex-grow bg-sky-900 m-4 rounded-lg"></textarea>
        </div>
    </section>
</template>