<template lang="pug">
- var m_top="margin-top: 20px; text-align: center; max-width: 700px;";
.wrapper(style=m_top)
  div(v-if="item" style=m_top)
    img(:src="item.img" :alt="item.title")
    h1.title {{ item.title }}
    p {{ item.descr }}
    cardStat(:stats="item.info")
    div(style=m_top)
      router-link(to="/" class="btn btnPrimary") Вернуться на главную
</template>

<script>
import items from "@/seeders/items";
import {site} from "@/_config";
import CardStat from "@/components/UI/CardStat";
export default {
  name: "_itemAlias",
  components: {CardStat},
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find(el => el.alias === alias)
    this.item = item;
    document.title = `${site.title} - ${item.title}`;
  },


}
</script>

<style scoped>
      .card-stats {
      margin: 30px 0;
      border-radius: 14px;
    }


</style>