<template lang="pug">
- var inline = "display: inline;";
- var sad = "margin-right: 50px;margin-bottom: 50px;";

.card__wrapper(v-for="item in items" :key="item.id" style=inline)
  card(:title="item.title"
       :name="`${item.lvl} lvl`"
       :imgUrl="item.img"
       :link="`${item.alias}`"
       style=sad)
       template(v-slot:body) {{secDescr(item.descr)}}
       template(v-slot:footer)
        cardStat(:stats="item.info")

</template>

<script>
import {contentHome} from "@/_config";
import card from "@/components/UI/Card"
import cardStat from "@/components/UI/CardStat";
import items from "@/seeders/items"

export default {
  name: "HomePage",
  components: {card, cardStat},
  data() {
    return {
      content: contentHome,
      items: items
    }
  },
  mounted() {
    const alias = this.$route.params.itemAlias;
    const item = items.find(el => el.alias === alias)
    localStorage.setItem('currentAlias', item);
    //console.log(alias);
    //this.item = item;
    // console.log(item);
  },
  methods: {
    secDescr(str) {
      return  `${str.substring(0,48)} ...`;
    }
  },

}
</script>

<style lang="scss" scoped>

</style>