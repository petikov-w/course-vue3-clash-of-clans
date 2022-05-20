<template lang="pug">
.wrapper
  Header
  .wrapper-content
    .container
      .view-sm.isCenter
        router-view
  Footer
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {contentHome} from "@/_config";

export default {
    components: { Header, Footer},
  data() {
    return {
      content: contentHome
    }
  },
  }
</script>

<style lang="scss">
</style>
