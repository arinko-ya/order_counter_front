<template>
<div>
  <h2>オーダーカウンター</h2>
  <div class="container">
    <p>OrderCounter</p>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      apiName: "counter"
    }
  },
  computed: {
    itemList () {
      return this.$store.getters["resourceStore/resource"].item;
    }
  },
  methods: {}
}

</script>

<style lang="scss" scoped>
.container {
  max-width: 95%;
  table {
    th {
      background: #fffccf;
    }
    .active {
      color: coral;
    }
    .inactive {
      color: cornflowerblue;
    }
  }
}
@media (max-width: 768px) {
  .container {
    max-width: 100%;
    width: 100%;
  }
}

</style>
