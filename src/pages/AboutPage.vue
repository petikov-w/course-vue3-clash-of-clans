<template lang="pug">

h1.article-title {{ content.article01.title }}
p {{ content.article01.text }}

</template>

<script>
import {contentAbout} from "@/_config";
export default {
  name: "AboutPage",
  data() {
    return {
      content: contentAbout
    }
  },
}
</script>

<style lang="scss" scoped>

</style>