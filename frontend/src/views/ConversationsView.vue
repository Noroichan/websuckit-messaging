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
    <!-- TODO smooth profile pic animation, add send button -->
    <!-- Chat bubbles -->
    <section class="float-left bg-slate-925 w-1/20 h-screen">
        <div class="flex flex-col items-center h-4/6 overflow-y-auto">
            <img src="../assets/pictures/profile-pic-default.png.png" class="w-4/6 max-w-14 m-4 rounded-full hover:rounded-lg" v-for="i in 10" :key="i"/>
        </div>
    </section>
    <!-- Messages -->
    <section class="float-right flex flex-col items-center bg-slate-900 h-screen w-19/20">
        <div class="flex flex-col justify-items-stretch flex-grow w-full overflow-y-auto">
            <div class="flex" :class="index % 2 ? 'flex-row' : 'flex-row-reverse'" v-for="(msg, index) in testMessages" :key="msg">
                <div class="text-white py-2 px-3 w-fit max-w-4/5 mx-2 mt-2 rounded-lg" :class="index % 2 ? 'bg-indigo-1000' : 'bg-gray-800'">{{ msg }}</div>
            </div>
        </div>
        <div class="flex flex-row items-center justify-items-center h-1/12 w-full px-4 rounded-sm">
            <textarea class="flex-grow bg-slate-700 m-4 rounded-lg"></textarea>
        </div>
    </section>
</template>