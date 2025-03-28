import { defineStore } from 'pinia'
import { reactive } from 'vue'

const useUser = defineStore('user', () => {
  const defaultUser = {
    isLogin: false,
    username: '',
    avatar: ''
  }
  const user = reactive(Object.assign({}, defaultUser))
  const updateUser = options => {
    Object.assign(user, options)
    return user
  }
  const removeUser = () => {
    Object.assign(user, defaultUser)
    return user
  }
  return { user, updateUser, removeUser }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage
      }
    ]
  }
})
export default useUser