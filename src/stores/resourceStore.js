import axios from "axios/index";

const server_url = "http://127.0.0.1:5000/";

export default {
  namespaced: true,
  state: {
    itemList: [],
    genreList: [],
    alertMessage: {
      category: '',
      message: ''
    }
  },
  mutations: {
    async get(state, payload) {
      await axios
        .get(server_url + payload + "/get_list")
        .then(response => {
          state[payload + "List"] = response.data;
        });
    },
    async put(state, payload) {
      await axios
        .put(server_url + payload.apiName + "/update", payload.item, {
          headers: {"Content-Type": "application/json"}
        })
        .then(response => {
          state.alertMessage.message = response.data.message;

          if(response.data.status === 'OK') {
            state.alertMessage.category = 'primary';

          } else if(response.data.status === 'NG') {
            state.alertMessage.category = 'danger';
          }
          state[payload.apiName + "List"][response.data.updated_data.id - 1] = response.data.updated_data;
        });
    },
    async post(state, payload) {
      await axios
        .post(server_url + payload.apiName + "/add", payload.item, {
          headers: {"Content-Type": "application/json"}
        })
        .then(response => {
          state.alertMessage.message = response.data.message;

          if(response.data.status === 'OK') {
            state.alertMessage.category = 'primary';
          } else if(response.data.status === 'NG') {
            state.alertMessage.category = 'danger';
          }
          // console.log(typeof state[payload + "List"]);
          state[payload.apiName + "List"].push(response.data.new_data);
        });
    },
    async delete(state, payload) {
      await axios
        .delete(server_url + payload.apiName + "/delete", {data: payload.item}, {
          headers: {"Content-Type": "application/json"}
        })
        .then(response => {
          state.alertMessage.message = response.data.message;

          if(response.data.status === 'OK') {
            state.alertMessage.category = 'primary';
          } else if(response.data.status === 'NG') {
            state.alertMessage.category = 'danger';
          }
        });
    },
    messageInitializing(state) {
      state.alertMessage.category = '';
      state.alertMessage.message = '';
    }
  },
  actions: {
    initialGetList({state, commit}) {
      let apiList = ["item", "genre"];
      apiList.map(api => {
        commit("get", api);
      });
    },
    updateItem({state, commit}, payload) {
      commit("messageInitializing");
      commit("put", payload);
    },
    addItem({state, commit}, payload) {
      commit("messageInitializing");
      commit("post", payload);
    },
    deleteItem({state, commit}, payload) {
      commit("messageInitializing");
      commit("delete", payload);
    }
  },
  getters: {
    alert(state) {
      return state.alertMessage;
    },
    item(state) {
      return state.itemList;
    },
    genre(state) {
      return state.genreList;
    }
  }
};
