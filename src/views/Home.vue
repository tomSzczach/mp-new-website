<template>
  <h1>Meteo Pomorze</h1>
  <p>Hello</p>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer'

export default {
  components: {
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
</style>