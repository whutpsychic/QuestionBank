<template>
  <div class="page-container">
    <div class="top-searcher">
      <el-input v-model="inputText" placeholder="请输入搜索内容" class="input-with-select">
        <template #append>
          <el-button :icon="Search" @click="onSearch" />
        </template>
      </el-input>
    </div>
    <div class="data-contents">
      <el-tabs v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane label="复习题" name="review">
          <div class="paper-wrapper">
            <QuestionItem v-for="(ques, i) in reviewQues" :index="i + 1" :data="ques" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="知识题库" name="repository">知识题库</el-tab-pane>
        <el-tab-pane label="试题" name="exam">试题</el-tab-pane>
        <el-tab-pane label="题库" name="questionBank">题库</el-tab-pane>
        <el-tab-pane label="搜索结果" name="searchResult">搜索结果</el-tab-pane>
        <el-tab-pane label="模拟考" name="training">模拟考</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, unref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import QuestionItem from '../../components/QuestionItem.vue'
import reviewQues from '$/data/冶金安全员/review.json'

const inputText = ref('')
const activeName = ref('review')

const handleClickTab = () => {

}

const onSearch = () => {

}

</script>

<style scoped>
.page-container {
  padding-top: 20px;
}

.top-searcher {
  width: 300px;
  margin-bottom: 20px;
}
</style>
