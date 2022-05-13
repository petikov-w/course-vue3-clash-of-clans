<template lang="pug">
.card__wrapper(v-for="item in items" :key="item.id")
  card(:title="item.title" :name="`${item.lvl} lvl`") {{ item.descr }}
    //template(v-slot:body) {{ item.descr }}

</template>

<script>
import {contentHome} from "@/_config";
import card from "@/components/UI/Card"
export default {
  name: "HomePage",
  components: {card},
  data() {
    return {
      content: contentHome,
      items: [
        {
          id: 1,
          alias: 'barbarian',
          title: 'The Barbarian',
          descr: 'The Barbarian is a kilt-clad Scottish warrior',
          lvl: 4
        },
        {
          id: 2,
          alias: 'archer',
          title: 'The Archer',
          descr: 'The Archer is a female warrior with sharp eyes.',
          lvl: 4
        },
        {
          id: 3,
          alias: 'giant',
          title: 'The Giant',
          descr: 'Giants are massive warriors that soak up huge amounts of damage.',
          lvl: 4
        },
        {
          id: 4,
          alias: 'goblin',
          title: 'The Goblin',
          descr: 'These pesky little creatures only have eyes for one thing: LOOT!',
          lvl: 6
        },
        {
          id: 5,
          alias: 'wizard',
          title: 'The Wizard',
          descr: 'The Wizard is a terrifying presence on the battlefield',
          lvl: 5
        }
      ]

    }
  },

}
</script>

<style lang="scss" scoped>

</style>