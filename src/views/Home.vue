<template>
  <div class="header">
    <h1>Meteo Pomorze</h1>
  <p>Hello</p>
  </div>
  <OtherArticles />
  <Footer />
</template>

<script>
import OtherArticles from '@/components/sections/OtherArticles'
import Footer from '@/components/sections/Footer'


export default {
  components: {
    OtherArticles,
    Footer
  }
}
</script>

<style>
@media screen and (min-width: 1024px) {
    
    p {
        font-size: 20px;
        line-height: 30px;
    }
}

@media screen and (max-width: 1023px) {
    
    p {
        font-size: 13px;
        line-height: 19px;
    
    }
}

.header {
  grid-column: 1 / end;
}
</style>