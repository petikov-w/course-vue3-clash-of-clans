<template lang="pug">
.card
  .card-img__wrapper(v-if="imgUrl")
    img.card-img(:src="imgUrl" :alt="title")
  span.card-name {{name}}
  span.card-title {{title}}
  .card-body
    slot
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
    }
  },

}
</script>

<style scoped>

</style>