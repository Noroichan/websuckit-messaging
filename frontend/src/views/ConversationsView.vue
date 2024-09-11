<script setup lang="ts">
    import { ref } from 'vue'

    const testMessages = ref([] as string[])
    let testMessage = 'test'

    for (let i=0; i<10; i++) {
        testMessages.value.push(testMessage)
        testMessage += ' and another hell of a long sentence which defenetly will reach to the other side of the screen after a while'
    }
</script>

<template>
    <!-- TODO smooth profile pic animation, rethink color scheme -->
    <!-- Chat bubbles -->
    <section class="float-left bg-blue-950 w-1/12 h-screen border-r-4 border-solid border-indigo-950">
        <div class="flex flex-col items-center">
            <img src="../assets/pictures/profile-pic-default.png.png" class="w-16 h-16 m-4 rounded-full hover:rounded-lg" v-for="i in 10" :key="i"/>
        </div>
    </section>
    <!-- Messages -->
    <section class="float-right flex flex-col items-center h-screen w-11/12">
        <div class="flex flex-col justify-items-stretch bg-sky-800 flex-grow w-full">
            <div class="flex" :class="index % 2 ? 'flex-row' : 'flex-row-reverse'" v-for="(msg, index) in testMessages" :key="msg">
                <div class="text-white py-2 px-3 w-fit max-w-4/5 mx-2 mt-2 rounded-lg" :class="index % 2 ? 'bg-indigo-950' : 'bg-gray-800'">{{ msg }}</div>
            </div>
        </div>
        <div class="flex flex-row items-center justify-items-center bg-blue-950 h-32 w-full border-t-4 border-solid border-indigo-950">
            <textarea class="flex-grow bg-sky-900 m-4 rounded-lg"></textarea>
        </div>
    </section>
</template>