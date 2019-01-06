<template>
<div>
  <h2>注文履歴</h2>
  <div class="container">
    <p>OrderHistory</p>
  </div>
</div>
</template>

<script>
import Cols from "../components/Rows.vue";

export default {
  data () {
    return {
      options: [],
      field: [
        {
          "key": "name",
          "column": "商品名",
          "type": "text"
        },
        {
          "key": "genre",
          "column": "ジャンル",
          "type": "select"
        },
        {
          "key": "price",
          "column": "価格",
          "type": "text"
        },
        {
          "key": "is_active",
          "column": "有効／無効",
          "type": "check"
        },
        {
          "key": "is_high_priority",
          "column": "優先度",
          "type": "check"
        }
      ],
      apiName: "item"
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
