<template>
  <el-menu class="left-menu" default-active="1" :collapse="isCollapse">
    <div class="top-btn">
      <el-button class="collapse-btn" :icon="isCollapse ? Expand : Fold" @click="toggleCollapse" />
    </div>
    <el-menu-item index="1" @click="onChooseMenu">
      <el-icon>
        <SuitcaseLine />
      </el-icon>
      <template #title>冶金安全员</template>
    </el-menu-item>
    <div style="margin-left: 20px;">
      <el-switch v-model="viewingAnswers" size="large" active-text="显示答案" />
    </div>
  </el-menu>
</template>

<script setup>
import { ref, unref, watch } from 'vue'
import { SuitcaseLine, Fold, Expand } from '@element-plus/icons-vue'
import { useViewAnswer } from '@/stores/viewAnswer'

const store1 = useViewAnswer();

const isCollapse = ref(false)

const viewingAnswers = ref(store1.viewable)

watch(viewingAnswers, (newv) => {
  store1.setup(newv)
})

const toggleCollapse = () => {
  if (unref(isCollapse)) {
    isCollapse.value = false
  } else {
    isCollapse.value = true
  }
}

const onChooseMenu = (arg) => {
  const { index } = arg
  // 冶金安全员
  if (index === '1') {

  }
}

</script>

<style scoped>
.top-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.collapse-btn,
.collapse-btn:hover {
  border: none;
}

.left-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>