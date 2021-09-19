<template>
  <h2>{{ text }}</h2>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    props: ['smallHeaderText'],
    setup(props){
        const text = ref('')

        text.value = props.smallHeaderText

        return { text }
    }

}
</script>

<style scoped>
h2 {
    color: rgba(var(--dark-in-rgb), 0.55);

    font-weight: 300;
    letter-spacing: -0.03em;

    margin-bottom: 3px;
    padding-left: 1.56vw;
    position: relative;
}
h2:after {
    border-top: 1px solid rgba(var(--dark-in-rgb), 0.34);
    
    bottom: -3px;
    content: "";
    left: 0;
    position: absolute;
}

@media screen and (min-width: 1024px) {
    h2 {
        font-size: 1.09vw;
        line-height: 1.61vw;
    }
    h2:after {
        width: calc(50% - 1.43vw);
    }
}

@media screen and (max-width: 1023px) {
    h2{
        font-size: 5.1vw;
        line-height: 7.54vw;
    }
    h2:after {
        width: 100%;
    }
}

</style>