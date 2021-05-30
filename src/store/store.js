import Vue from 'vue'
import Vuex from 'vuex'

//use : vue plug in - 전역으로 특정 기능을 사용하고 싶을때
Vue.use(Vuex);
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    arr.push(
                        JSON.parse(localStorage.getItem(localStorage.key(i)))
                    );
                }
            }
        }
        return arr;
    }
};
export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it!',
        todoItems: storage.fetch()
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        }
    },
    mutations: {
        addOneItem(state, todoItem) {
            // 저장하는 로직
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            // 로컬 스토리지 데이터 갱신
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});  