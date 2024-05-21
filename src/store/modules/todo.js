// initial state
const state = () => ({
    todos: []
})

// getters
const getters = {}

// actions
const actions = {
    addTodo ({commit}, todo) {
        commit('addTodo', todo)
    },

    removeTodo({commit}, index) {
        commit('removeTodo', index)
    }
}

// mutations
const mutations = {
    addTodo (state, todo) {
        state.todos.push(todo)
    },

    removeTodo(state, index) {
        state.todos.splice(index, 1)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}