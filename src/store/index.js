import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions.js"
import mutations from "./mutations.js"
import getters from "./getters.js"

Vue.use(Vuex);

const note = [{
    title: '撒撒娇',
    contain: '你是猪吗',
    love: false
}, {
    title: '世界的哈卡上的',
    contain: 'kldasjaasdn',
    love: true
}, {
    title: '是第八讲啊多少',
    contain: '睡觉啊看打瞌睡',
    love: false
}]

const state = {
    notes: note,
    activeNote: note[0],
    show: 'all'
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})