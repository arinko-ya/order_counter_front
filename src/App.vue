<template>
  <div id="wrapper">
    <b-alert :show="dismissCountDown"
             dismissible
             :variant="alertCategory"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged"
             class="alert"
    >
      {{ alertMessage }}
    </b-alert>
    <b-navbar toggleable="md" type="dark" class="bg-theme">
      <b-navbar-brand href="#">Order Counter</b-navbar-brand>
    </b-navbar>

    <nav class="menu d-flex justify-content-around">
      <router-link to="/">ダッシュボード</router-link>
      <router-link to="/order-counter">オーダーカウンター</router-link>
      <!--<router-link to="/order-history">注文履歴</router-link>-->
      <router-link to="/item">商品</router-link>
      <router-link to="/genre">ジャンル</router-link>
    </nav>
    <div class="main-content">
      <transition name="view">
        <router-view/>
      </transition>
      <LoadingOverlay/>
    </div>
  </div>
</template>

<script>
  import LoadingOverlay from "./components/LoadingOverlay";

  export default {
    components: {
      LoadingOverlay
    },
    data() {
      return {
        genreList: [],
        dismissSecs: 5,
        dismissCountDown: 0
      }
    },
    mounted() {
      this.$store.dispatch("resourceStore/initialGetList");
    },
    computed: {
      alertMessage() {
        return this.$store.getters["resourceStore/alert"].message
      },
      alertCategory() {
        return this.$store.getters["resourceStore/alert"].category
      }
    },
    watch: {
      alertMessage() {
        this.dismissCountDown = this.dismissSecs
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      }
    }
  }
</script>

<style lang="scss" scoped>
  #wrapper {
    min-width: 800px;
    height: 100%;
    .alert {
      position: absolute;
      width: 100%;
      z-index: 1;
    }
  }

  .bg-theme {
    background: #fea804;
  }

  .main-content {
    position: relative;
  }

  .menu {
    a {
      background: #f9d6bc;
      border: solid 1px #8a4513;
      border-radius: 3px;
      color: #000;
      cursor: pointer;
      flex: 1;
      font-size: .8rem;
      margin: 20px 10px 0;
      padding: 10px;
      text-align: center;
      &:hover {
        text-decoration: none;
      }
      &.router-link-exact-active {
        background: #fea804;
        color: #fff;
      }
    }
  }

  #contents {
    margin-top: 20px;
    padding: 0 10px;
  }

</style>
