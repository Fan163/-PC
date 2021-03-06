// initial state

const state = {
  curTab: 0,
  curMenu: 0,
  curMenuText: '家列表',
  menuList: [
    {
      'tit': '家管理',
      'menu': [
        {'icon': 'md-home', 'text': '家列表'}
      ]
    },
    {
      'tit': '设备管理',
      'menu': [
        {'icon': 'md-cube', 'text': '所有设备'},
        {'icon': 'md-home', 'text': '房间'},
        {'icon': 'md-list', 'text': '类别'}
      ]
    },
    {
      'tit': '设置',
      'menu': [
        {'icon': 'ios-mail', 'text': '意见反馈'},
        // {'icon': 'md-cloud-upload', 'text': '固件升级'},
        {'icon': 'md-help', 'text': '常见问题'}
      ]
    }
  ]
}

// getters
const getters = {
  // productCount: (state) => {
  //   return state.count
  // },
  // doneTodos: state => {
  //   return state.todos.filter(todo => todo.done)
  // }
}

// actions
const actions = {
  changeCurTab ({commit, state}, CURTAB) {
    if (state.curTab === CURTAB) {
      return false
    } else {
      commit('setCurTab', CURTAB)
      commit('setCurMenuText', state.menuList[CURTAB].menu[state.curMenu].text)
    }
  },
  changeCurMenu ({commit, state}, CURMENU) {
    commit('setCurMenu', CURMENU)
    commit('setCurMenuText', state.menuList[state.curTab].menu[CURMENU].text)
  }
}

// mutations

const mutations = {
  setCurTab (state, CURTAB) {
    state.curTab = CURTAB
    state.curMenu = 0
  },
  setCurMenu (state, CURMENU) {
    state.curMenu = CURMENU
  },
  setCurMenuText (state, CURMENUTEXT) {
    state.curMenuText = CURMENUTEXT
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
