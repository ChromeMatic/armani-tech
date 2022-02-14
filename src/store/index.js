import { createStore } from "vuex";

const store = createStore({

    state: {
        isDark: false
    },

    getters: {
        getTheme: (state) => state.isDark
    },

    actions: {
        changeTheme({ commit }) {
            commit('setIsDark');
        },
    },


    mutations: {
        setIsDark: (state) => (state.isDark = !state.isDark)
    }
})

export default store;