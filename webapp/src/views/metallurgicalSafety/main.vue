<template>
  <div class="page-container">
    <div class="top-searcher">
      <el-input v-model="inputText" placeholder="请输入搜索内容" class="input-with-select">
        <template #append>
          <el-button :icon="Search" @click="onSearch" />
        </template>
      </el-input>
    </div>
  </div>
</template>

<script setup>
import { ref, unref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const inputText = ref('')


const onSearch = () => {

}


</script>

<style scoped>
.page-container {
  padding-top: 20px;
}

.top-searcher {
  width: 300px;
}
</style>
