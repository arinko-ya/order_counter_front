<template>
  <table class="table table-striped">
    <tr>
      <th v-for="columnName in field">{{ columnName.column }}</th>
      <th class="button_column">Edit</th>
      <th class="button_column" v-if="can_delete">delete</th>
    </tr>
    <Rows
      v-for="(item, idx) in itemList"
      :key="item.id"
      :idx="idx"
      :item="item"
      :field="field"
      :options="options"
      :apiName="apiName"
      :can_delete="can_delete"
    />
  </table>
</template>

<script>
  import Edit from "../components/Edit.vue";
  import Rows from "../components/Rows.vue";

  export default {
    props: [
      "field",
      "options",
      "apiName",
      "can_delete"
    ],
    data() {
      return {}
    },
    computed: {
      itemList() {
        return this.$store.getters["resourceStore/resource"][this.apiName]
      }
    },
    components: {
      Edit,
      Rows
    }
  }

</script>

<style lang="scss" scoped>
  table {
    th {
      background: #fffccf;
      &.button_column {
        width: 50px;
      }
    }
    .active {
      color: coral;
    }
    .inactive {
      color: cornflowerblue;
    }
  }
</style>