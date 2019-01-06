<template>
  <div>
    <h2>商品登録</h2>
    <div class="container">
      <Edit
        :idx="1"
        :item="defaultValue"
        :field="field"
        :options="options"
        :apiName="apiName"
        flag="add"
      >
        <button slot-scope="props" @click="props.toggle" type="button" class="add-button">追加</button>
      </Edit>
      <ItemTable
        :field="field"
        :options="options"
        :apiName="apiName"
      />
    </div>
  </div>
</template>

<script>
  import ItemTable from "../components/ItemTable.vue";
  import Edit from "../components/Edit.vue";

  export default {
    data() {
      return {
        defaultValue: {
          "name": "",
          "genre": "アルコール",
          "price": "",
          "is_active": true,
          "is_high_priority": false
        },
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
    components: {
      Edit,
      ItemTable
    },
    computed: {
      // itemList() {
      //   return this.$store.getters["resourceStore/resource"].item
      // },
      options() {
        let options = [];
        this.$store.getters["resourceStore/resource"].genre.forEach(genre => {
          options.push(genre.name);
        });
        return options
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    max-width: 95%;
    .add-button {
      background: #ED5D47;
      border: solid 2px #d15000;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
      margin-bottom: 20px;
      padding: 5px 0;
      transition: .2s;
      width: 100%;
      &:focus {
        outline: none;
      }
      &:hover {
        opacity: .8;
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
