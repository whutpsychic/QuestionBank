<template>
  <div class="question-item-wrapper">
    <!-- 概念题 -->
    <div v-if="question.type === 'concept'" class="inner-qb">
      <p>
        <span class="index">{{ props.index }}.</span>
        <span class="qtype">【概念题】</span>
        <span class="question-body">{{ question.question }}</span>
      </p>
      <p v-if="viewAnswer" class="answer">【答】{{ question.answer }}</p>
    </div>
    <!-- 单选题 -->
    <div v-if="question.type === 'select'" class="inner-qb">
      <p>
        <span class="index">{{ props.index }}.</span>
        <span class="qtype">【单选题】</span>
        <span class="question-body">{{ question.question }}</span>
      </p>
      <el-radio-group v-model="value" :class="`options-wrapper force-wrap${viewAnswer ? ' viewAnswer' : ''}`">
        <el-radio v-for="(item, i) in question.options" :label="i" :disabled="viewAnswer">
          <div>
            <span>{{ renderOptionChar(i) }}.</span>
            {{ item }}
          </div>
        </el-radio>
      </el-radio-group>
      <p v-if="viewAnswer" class="answer">【答】{{ question.answer }}</p>
    </div>
    <!-- 填空题 -->
    <div v-if="question.type === 'blanks'" class="inner-qb">
      <p>
        <span class="index">{{ props.index }}.</span>
        <span class="qtype">【填空题】</span>
        <span class="question-body">{{ question.question }}</span>
      </p>
      <p v-if="viewAnswer" class="answer">【答】<span v-for="(a) in question.answer">{{ a }}；</span></p>
    </div>
    <!-- 判断题 -->
    <div v-if="question.type === 'judgement'" class="inner-qb">
      <p>
        <span class="index">{{ props.index }}.</span>
        <span class="qtype">【判断题】</span>
        <span class="question-body">{{ question.question }}</span>
      </p>
      <el-radio-group v-model="value" :class="`options-wrapper${viewAnswer ? ' viewAnswer' : ''}`">
        <span v-if="viewAnswer" class="answer">【答】</span>
        <el-radio :label="0" :disabled="viewAnswer">错误</el-radio>
        <el-radio :label="1" :disabled="viewAnswer">正确</el-radio>
      </el-radio-group>
    </div>
    <!-- 简答题 -->
    <div v-if="question.type === 'talk'" class="inner-qb">
      <p>
        <span class="index">{{ props.index }}.</span>
        <span class="qtype">【简答题】</span>
        <span class="question-body">{{ question.question }}</span>
      </p>
      <p v-if="viewAnswer" class="answer">
        【答】
        <span v-if="typeof (question.answer) === 'string'">{{ question.answer }}</span>
      </p>
      <ul v-if="viewAnswer && (question.answer instanceof Array)">
        <li v-for="(a, i) in question.answer" class="answer"><span>{{ `（${i + 1}）${a}` }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, unref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  // 题号索引
  index: { type: [Number, String], default: "???" },
  // 题数据
  data: { type: Object, default: () => ({}) },
  // 是否显示正确答案
  viewAnswer: { type: Boolean, default: true },
})

const question = computed(() => { return props.data })

const value = ref(null)

const renderOptionChar = (i) => {
  let _i = parseInt(i)
  let result = String.fromCharCode(65 + _i)
  return `${result}`
}

watch(() => props.viewAnswer, (newv) => {
  // 如果切换为不显示答案则重置当前value
  if (!newv) {
    value.value = null
  } else {
    loadAnswer()
  }
})

const loadAnswer = () => {
  const _question = unref(question)
  // 单选题
  if (_question.type === 'select') {
    const { answer } = _question
    let index
    if (typeof (answer) === 'string') {
      index = answer.charCodeAt(answer)
    }
    if (typeof (answer) === 'number') {
      index = answer
    }

    index = index - 65
    if (index > 31) {
      index = index - 32
    }
    value.value = index;
  }
  // 判断题
  if (_question.type === 'judgement') {
    const { answer } = _question
    value.value = answer ? 1 : 0;
  }
}

// 加载后初始化函数
onMounted(() => {
  // 如果显示答案
  if (props.viewAnswer) {
    loadAnswer()
  }
})


</script>

<style scoped>
.question-item-wrapper {
  margin-bottom: 3em;
}

p {
  margin-bottom: 1em;
}

p.answer {
  margin-top: 2em;
}

.answer {
  font-weight: bold;
  color: green;
}

span.answer {
  margin-top: 0;
  margin-right: 1em;
}

span.index {
  font-weight: bold;
}

.options-wrapper.force-wrap>* {
  width: 100%;
}

li {
  margin-bottom: 0.5em;
}
</style>