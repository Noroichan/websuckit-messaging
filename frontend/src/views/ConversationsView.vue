<script setup lang="ts">
    import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue'

    const testMessages = ref([] as string[])
    let testMessage = 'test'
    const isSmall = ref(false)

    for (let i=0; i<10; i++) {
        testMessages.value.push(testMessage)
        testMessage += ' and another hell of a long sentence which defenetly will reach to the other side of the screen after a while'
    }

    const toggleChats = () => {
        isSmall.value = !isSmall.value
    }

    const checkSize = () => {
        if (window.innerWidth <= 750) {
            isSmall.value = true
            return
        }
        isSmall.value = false
    }

    onBeforeMount(checkSize)

    onMounted(() => {
        window.addEventListener('resize', checkSize)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', checkSize)
    })

</script>

<template>
    <!-- TODO smooth profile pic animation, prevent profiles from too much shrinking -->
     <div class="flex flex-col h-screen">
        <header class="h-16 bg-slate-925">
            <svg @click="toggleChats" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 float-left ml-3 mt-1 stroke-indigo-800 hover:fill-indigo-800 hover:stroke-slate-900 hover:stroke-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <div class="float-right text-center text-indigo-800 text-2xl mr-3 mt-3 hover:font-medium hover:text-indigo-500">Logout</div>
        </header>
        <div class="flex flex-row flex-grow">
            <!-- Chat bubbles -->
            <section v-show="!isSmall" class="bg-slate-925 min-w-20">
                <div class="flex flex-col items-center h-4/6 overflow-y-auto">
                    <img src="../assets/pictures/profile-pic-default.png.png" class="w-12 m-4 rounded-full hover:rounded-lg" v-for="i in 10" :key="i"/>
                </div>
            </section>
            <!-- Messages -->
            <section class="flex flex-col flec-grow items-center bg-slate-900">
                <div class="flex flex-col justify-items-stretch flex-grow w-full overflow-y-auto">
                    <div class="flex" :class="index % 2 ? 'flex-row' : 'flex-row-reverse'" v-for="(msg, index) in testMessages" :key="msg">
                        <div class="text-white py-2 px-3 w-fit max-w-4/5 mx-2 mt-2 rounded-lg" :class="index % 2 ? 'bg-indigo-1000' : 'bg-gray-800'">{{ msg }}</div>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-items-center h-1/12 w-full px-4 rounded-sm">
                    <textarea class="flex-grow bg-slate-700 m-4 rounded-lg"></textarea>
                    <!-- stolen from https://heroicons.com/ -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-indigo-800 hover:fill-indigo-800 hover:stroke-slate-900 hover:stroke-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
             </div>
            </section>
        </div>
    </div>
</template>