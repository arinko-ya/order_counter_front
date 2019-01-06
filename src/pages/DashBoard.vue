<template>
<div>
  <h2>ダッシュボード</h2>
  <div class="container">
    <p>DashBoard</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      field: [
        {
          "key": "name",
          "column": "ジャンル名",
          "type": "text"
        }
      ],
      apiName: "genre"
    }
  },
  computed: {
    genreList () {
      return this.$store.getters["resourceStore/resource"].genre;
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
