<template>
  <div>
    <slot :toggle="toggle">
      <button @click="toggle" type="button" class="btn btn-primary">Edit</button>
    </slot>
    <div class="edit_modal" v-show="displayEdit" @click.self="toggle">
      <div class="edit" v-show="displayEdit">
        <h2>Edit</h2>
        <div class="alert alert-danger" role="alert" v-for="message in messages" v-if="messages.length > 0">
          {{ message }}
        </div>
        <table class="table">
          <tr v-for="column in field">
            <th><label>{{ column.column }}</label></th>
            <td>
              <select :name="column.key" v-if="column.type === 'select'" v-model="item[column.key]">
                <option v-for="option in options" :value="option">{{ option }}</option>
              </select>
              <input :name="column.key" type="checkbox" v-model="item[column.key]" v-else-if="column.type === 'check'">
              <input :name="column.key" type="text" v-model="item[column.key]" v-else/>
            </td>
          </tr>
        </table>
        <button @click="confirm(flag)" type="button" class="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: [
      "idx",
      "item",
      "field",
      "options",
      "apiName",
      "flag",
    ],
    data() {
      return {
        displayEdit: false,
        messages: []
      }
    },
    methods: {
      confirm(flag = "edit") {
        if (!this.validation()) {
          return
        }
        if (flag === "edit") {
          this.$store.dispatch("resourceStore/updateItem", {
            idx: this.idx,
            apiName: this.apiName,
            item: this.item
          });
          this.toggle()
        } else if (flag === "add") {
          this.$store.dispatch("resourceStore/addItem", {
            apiName: this.apiName,
            item: this.item
          });
          this.toggle()
        }
      },
      validation() {
        this.messages = [];
        for (let key in this.item) {
          if (typeof this.item[key] === "boolean") {
            continue
          }
          if (this.item[key] == null) {
            this.messages.push(key + " が未入力です")
          }
        }
        return !this.messages.length
      },
      toggle() {
        this.messages = [];
        this.displayEdit = !this.displayEdit
      }
    }
  }

</script>

<style lang="scss" scoped>
  .edit_modal {
    align-items: center;
    background: rgba(204, 204, 204, .6);
    display: flex;
    height: 100%;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    .edit {
      background: #fff;
      border: solid 1px #ccc;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      min-height: 500px;
      padding: 15px;
      width: 50%;
      table {
        width: 100%;
        td {
          select, input {
            width: 100%;
          }
        }
      }
    }
  }
</style>
