<template>
<transition name="loading">
  <div class="loading" v-if="loading"><font-awesome-icon icon="spinner" class="fa-3x fa-spin icon" /></div>
</transition>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.state.view.loading;
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  background: #fff;
  display: flex;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  img {
    width: 100px;
    height: 100px;
  }
}
.loading-enter-active {
  transition: all 1s;
}
.loading-leave-active {
  transition: all .5s ease .5s;
}
.icon {
  color: $orange;
  margin-top: 30px;
}
</style>
