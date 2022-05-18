<template lang="pug">
.card-stats
  .one-third(v-for="(stat, index) in stats" :key="index")
    .stat-value {{ stat.value }}
    .stat {{ stat.title }}
</template>

<script>
export default {
  name: "CardStat",
  props: {
    stats: {
      type: Object,
    },
  },
}
</script>

<style scoped>

</style>