<template lang="pug">

carousel(:settings="settings" :breakpoints="breakpoints" style:car)
  slide.card__wrapper(v-for="item in items" :key="item.id")
    card(:title="item.title"
         :name="`${item.lvl}`"
         :imgUrl="item.img"
         :link="`${item.alias}`")
         template(v-slot:body) {{secDescr(item.descr)}}
         template(v-slot:footer)
          cardStat(:stats="item.info")
  template(#addons)
   navigation

</template>

<script>
import card from "@/components/UI/Card"
import cardStat from "@/components/UI/CardStat";
import items from "@/seeders/items"
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  name: "HomePage",
  components: {card, cardStat, Carousel, Slide, Navigation},
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center'
      }
    }
  },
  breakpoints: {
    300: {
      itemsToShow: 1
    },
    700: {
      itemsToShow: 2
    }
  },

  methods: {
    secDescr(str) {
      return  `${str.substring(0,35)} ...`;
    }
  },
}
</script>

<style lang="scss" scoped>

</style>