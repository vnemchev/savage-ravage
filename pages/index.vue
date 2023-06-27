<script>

import EventList from '~/components/EventList.vue'
export default {
    components: {
        EventList
    }
}
</script>

<template>
    <div>
        <NuxtLink to="/about">
            <h1>Hello from here!</h1>
        </NuxtLink>
        <EventList></EventList>
    </div>
</template>

