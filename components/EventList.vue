<script>

import eventsJSON from '~/assets/data/events.json'

export default {
    components: {
        Event
    },
    data() {
        return {
            events: eventsJSON
        }
    }

}
</script>

<template>
    <li v-for="event in events">
        <Event :event="event" />
    </li>
</template >




