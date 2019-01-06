<template>
  <tr>
    <td v-for="(item, idx) in item_list" v-if="!field[idx].key.startsWith('is_')">{{ item }}</td>
    <td v-if="active">
      <p v-if="item.is_active" class="active">有効</p>
      <p v-else-if="!item.is_active" class="inactive">無効</p>
    </td>
    <td v-if="high_priority">
      <p v-if="item.is_high_priority">高</p>
    </td>
    <td>
      <Edit
        :idx="idx"
        :item="item"
        :field="field"
        :options="options"
        :apiName="apiName"
        flag="edit"
      />
    </td>
    <td v-if="canDelete">
      <button @click="itemDelete(item)" type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
  import Edit from "./Edit.vue"

  export default {
    props: [
      "idx",
      "item",
      "field",
      "optionName",
      "apiName",
      "canDelete"
    ],
    data() {
      return {
        active: false,
        high_priority: false,
        displayEdit: false
      }
    },
    components: {
      Edit
    },
    mounted() {
      if ("is_active" in this.item) {
        this.active = true
      }
      if ("is_high_priority" in this.item) {
        this.high_priority = true
      }
    },
    computed: {
      item_list() {
        let item = this.item;
        return this.field.map(function (x) {
          return item[x.key];
        });
      },
      options() {
        if(this.optionName == null) {
          return
        }
        let options = [];
        this.$store.getters["resourceStore/" + this.optionName].forEach(option => {
          options.push(option.name);
        });
        return options
      }
    },
    methods: {
      itemDelete(item) {
        this.$store.dispatch("resourceStore/deleteItem", {
          apiName: this.apiName,
          item: this.item
        });
      }
    }
  }

</script>

<style lang="scss" scoped>
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

</style>
