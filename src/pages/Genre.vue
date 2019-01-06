<template>
  <div>
    <h2>ジャンル</h2>
    <div class="container">
      <Edit
        :idx="1"
        :item="defaultValue"
        :field="field"
        :apiName="apiName"
        flag="add"
      >
        <button slot-scope="props" @click="props.toggle" type="button" class="add-button">追加</button>
      </Edit>
      <ItemTable
        :field="field"
        :apiName="apiName"
        can_delete="true"
      />
    </div>
  </div>
</template>

<script>
  import ItemTable from "../components/ItemTable.vue";
  import Rows from "../components/Rows.vue";
  import Edit from "../components/Edit.vue";

  export default {
    data() {
      return {
        defaultValue: {
          "name": ""
        },
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
    components: {
      ItemTable,
      Rows,
      Edit
    }
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
