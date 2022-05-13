<template lang="pug">
.card__wrapper(v-for="item in items" :key="item.id")
  card(:title="item.title" :name="`${item.lvl} lvl`" :imgUrl="item.img") {{ item.descr }}
    //template(v-slot:body) {{ item.descr }}

</template>

<script>
import {contentHome} from "@/_config";
import card from "@/components/UI/Card"
import items from "@/seeders/items"

export default {
  name: "HomePage",
  components: {card},
  data() {
    return {
      content: contentHome,
      items: items
    }
  },

}
</script>

<style lang="scss" scoped>

</style>