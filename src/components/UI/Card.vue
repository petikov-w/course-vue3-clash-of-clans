<template lang="pug">
- var link_pos="margin:-20px 0 20px 0; display: block; font-weight:600;";
.card
  .card-img__wrapper(v-if="imgUrl")
    img.card-img(:src="imgUrl" :alt="title")
  span.card-name {{name}}
  span.card-title {{title}}
  .card-body
    slot(name="body")
  router-link(:to="link"
              v-if="link"
              class="link" style=link_pos) Показать больше...
  slot(name="footer")
</template>

<script>
export default {
  name: "uiCard",
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String
    },
    link: {
      type: String
    }
  },

}
</script>

<style scoped>

</style>