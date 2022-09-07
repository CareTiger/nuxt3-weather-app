<template>
    <div>
        <h1>Vue Transition Animation</h1>
        <button class="btn btn-primary" @click="open = !open">Toggle Animation</button>
        <Transition
        enter-active-class="animate__animated animate__fadeInRight zoomIn"
        leave-active-class="animate__animated animate__fadeOutRight zoomOut">
            <p v-if="open" class="text-4xl">Hello World</p>
        </Transition>        
    </div>
</template>
<script setup>
    const open = ref(false)
</script>