import { createStore } from 'vuex'
import todo from './modules/todo'
import mutations from './mutations'
import actions from './actions'

export default createStore({
    mutations,
    actions,
    modules: {
        todo,
    }

})