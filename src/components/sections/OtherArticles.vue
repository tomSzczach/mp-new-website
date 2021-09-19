<template>
    <section class="other-articles">
        <div>
            <SmallHeader :smallHeaderText="smallHeaderText[0]" />
            <div class="other-articles-cards">
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
        <div>
            <SmallHeader :smallHeaderText="smallHeaderText[1]" />
            <div class="other-articles-cards">
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    </section>
</template>

<script>
import ArticleCard from '@/components/items/ArticleCard'
import SmallHeader from '@/components/items/SmallHeader'

export default {
    components: {
        ArticleCard,
        SmallHeader
    },
    data(){
        const smallHeaderText = [
            'O tym co w pogodzie',
            'Najnowsze artykuły'
        ]
        const articleCardData = []

        return { smallHeaderText }
    }
}
</script>

<style scoped>
@media screen and (min-width: 1024px) {
    .other-articles {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2.86vw;

        margin: 0 55px;
    }
    .other-articles-cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2.86vw;

        margin-top: 2.86vw;
    }
}

@media screen and (max-width: 1023px) {
    .other-articles {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 34px;

        margin: 89px 21px 55px;
    }
    .other-articles-cards {
        display: grid;
        grid-template-rows: repeat(2, 1fr);

        margin-top: 34px;
    }
}

</style>