<template lang="pug">
- var s_center="text-align: center;";
.wrapper(style=s_center)
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
    console.log('======  ',this.$route)
    const item = items.find(el => el.alias === alias)
    if (item) {
      this.item = item;
      document.title = `${site.title} - ${item.title}`;
    } else {window.location.href = '/404';}

  },


}
</script>

<style lang="scss" scoped>
    .card-stats {
     margin: 30px 0;
     border-radius: 14px;
    }
    .title {
      color: #ffffff;
      opacity: 0.8;
    }

</style>