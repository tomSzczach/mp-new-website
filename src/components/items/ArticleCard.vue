<template>
    <router-link class="card" :to="{ name: 'Home' }">
        <div class="card-image">
            <img :src="imageUrl" :alt="altText">
        </div>
        <div class="card-data">
            <p class="article-type">kind of an article</p>
            <h3>a very long title of an article that is sooo boring</h3>
            <p class="article-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati quam mollitia voluptates maiores beatae aliquam atque, dolores, eaque consectetur repellat nihil soluta distinctio dignissimos voluptatibus maxime perspiciatis, blanditiis error!</p>
        </div>
    </router-link>
</template>

<script>
 import { ref } from 'vue'

export default {
    setup(){
        const imageUrl = ref('')
        const altText = ref('')

        imageUrl.value = 'photos/article-photo.png'
        altText.value = 'Tu powinno być tytułowe zdjęcie do artykułu.'

        return { imageUrl, altText }
    }
}
</script>

<style scoped>
img {
        align-self: center;

        width: 100%;
    }
.article-type {
        color: var(--blue);
        font-family: var(--title);
        font-weight: 400;
        text-transform: uppercase;
    }
h3 {
        font-weight: 500;
        text-transform: uppercase;
    }

@media screen and (max-width: 1023px) {
    .card {
        display: grid;
        /* flex-direction: row; */
        grid-template-columns: repeat(2, 1fr);
        column-gap: 21px;

        background: #FFFFFF;
        border-bottom: 1px solid rgba(var(--dark-in-rgb), 0.1);
        box-sizing: border-box;
        height: 37.7vw;
        padding: 9px 0;
    }
    .card-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: flex-start;
        gap: 5px;

        background: #FFFFFF;
        padding: 8px 0;
    }
    .article-type {
        font-size: 3.16vw;
        letter-spacing: 1px;
        line-height: 4.62vw;
    }
    h3 {
        font-size: 5.11vw;
        line-height: 7.54vw;
    }
    .article-description {
        display: none;
    }
}

@media screen and (min-width: 1024px) {
    .card {
        display: flex;
        flex-direction: column;

        background: #FFFFFF;
        border: 1px solid rgba(var(--dark-in-rgb), 0.1);
        box-sizing: border-box;
        height: 31.77vw;
    }
    .card-image {
        display: flex;
        flex-direction: row;
        align-self: flex-start;

        overflow: hidden;
    }
    .card-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: flex-end;
        gap: 5px;

        background: #FFFFFF;
        padding: 1.56vw;        
    }
    .article-type {
        font-size: 0.83vw;
        letter-spacing: 2px;
        line-height: 1.25vw;
    }
    h3 {
        font-size: 1.56vw;
        line-height: 2.29vw;
    }
    .article-description {
        font-size: 0.68vw;
        line-height: 0.99vw;
    }
}

</style>