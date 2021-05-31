import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

//use : vue plug in - 전역으로 특정 기능을 사용하고 싶을때
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});  