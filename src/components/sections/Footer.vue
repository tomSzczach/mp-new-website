<template>
  <div class="footer">
      <div class="footer-links">
          <router-link class="btn" :to="{ name: 'Contact' }">Kontakt</router-link>
          <router-link class="btn" :to="{ name: 'PrivacyPolicy' }">Polityka prywatności</router-link>
          <router-link class="btn" :to="{ name: 'Foundation' }">Fundacja</router-link>
      </div>
      <div class="copyright-info">
          <p>&copy; {{ new Date().getFullYear() }} Meteo Pomorze</p>
          <p>From none to done - by <a href="https://github.com/tomSzczach">Tomasz Szcząchor</a></p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
    color: rgba(255, 255, 255, 0.8);

    font-size: 21px;
}
.footer {
    background: var(--dark);
}
p {
    color: rgba(255, 255, 255, 0.3);

    font-family: var(--title);
    font-weight: 300;
    text-align: center;
}
p:last-child, p:last-child a {
    color: rgba(255, 255, 255, 0.2);
}
p:last-child a:hover {
    color: rgba(255, 255, 255, 0.3);
}

@media screen and (min-width: 1024px) {
    .footer {
        height: 220px;
        margin-top: 89px;
    }
    .footer-links {
        display: flex;
        justify-content: center;
        gap: 89px;

        padding: 55px 0px;
    }
    p {
        font-size: 16px;
        line-height: 24px;
    }
}

@media screen and (max-width: 1023px) {
    .btn {
        text-align: center;
    }
    .footer {
        height: 364px;
        margin-top: 55px;
    }
    .footer-links {
        display: flex;
        flex-direction: column;
        gap: 34px;

        padding-top: 55px;
        padding-bottom: 89px;
    }
    p {
        font-size: 13px;
        line-height: 19px;
    }
}

</style>