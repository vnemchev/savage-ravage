<template>
    <nav>
        <NuxtLink to="/">home</NuxtLink>
        <NuxtLink to="/about">about</NuxtLink>
        <NuxtLink to="/abosut">lyrics</NuxtLink>
        <NuxtLink to="/about">shop</NuxtLink>


        <iframe src="https://open.spotify.com/embed/album/08rh65uhEk1ub59qLVLCrs?utm_source=generator" frameBorder="0"
            height="80px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>

    </nav>
</template>

<style>
nav {
    background-color: red;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div.container {}

iframe {
    border-radius: 12px;
    /* height: auto; */
}
</style>
