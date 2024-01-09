import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useViewAnswer = defineStore('viewAnswer', () => {
  // 默认显示答案
  const viewable = ref(true)

  function toggle() {
    viewable.value = !viewable.value
  }

  function setup(v) {
    viewable.value = v ? true : false
  }

  return { viewable, toggle, setup }
})
