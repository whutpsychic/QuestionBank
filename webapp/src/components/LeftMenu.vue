<template>
  <el-menu class="left-menu" default-active="1" :collapse="isCollapse">
    <div class="top-btn">
      <el-button class="collapse-btn" :icon="Fold" @click="toggleCollapse" />
    </div>
    <el-menu-item index="1" @click="onChooseMenu">
      <el-icon>
        <SuitcaseLine />
      </el-icon>
      <template #title>冶金安全员</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, unref } from 'vue'
import { SuitcaseLine, Fold, Expand } from '@element-plus/icons-vue'

const isCollapse = ref(false)

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