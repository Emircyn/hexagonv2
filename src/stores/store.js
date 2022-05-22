import { defineStore } from 'pinia'

export const UseMainStore = defineStore({
  id: 'mainStore',
  state() {
    return {
      active:true
    }
  }
})