<script>
export default {
    props: {
        event: {
            name: String,
            date: String,
            location: String,
            poster: String,
            price: Number

        },
    }


}


</script>

<template>
    <ul>
        <li>{{ event.name }}</li>


        <li>{{ event.date }}</li>


        <li>{{ event.location }}</li>


        <li>{{ event.price }}</li>


        <li>{{ event }}</li>
    </ul>
</template>



