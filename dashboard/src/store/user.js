import { reactive } from 'vue'

const state = reactive({
  currentUser: {}
})

export function clearCurrentUser () {
  state.currentUser = { }
}

export function setCurrent (user) {
  state.currentUser = user
}

export function setApiKey (apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
