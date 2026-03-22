<template>
  <div class="con">
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <span>数据展示（TypeScript + Pinia）</span>
        </div>
      </template>
      <!-- 加载状态 -->
      <el-skeleton v-if="loading" :rows="5"/>
      <!-- 异常提示 -->
      <el-alert v-else-if="error" :title="error" show-icon type="error"/>
      <!-- 数据列表 -->
      <el-table v-else :data="todoList" border stripe>
        <el-table-column type="index"/>
        <el-table-column label="已完成" prop="completed" width="120">
          <template #default="scope">
            <el-checkbox :checked="scope.row.completed"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column label="用户ID" prop="userId" width="120"/>
        <el-table-column label="描述" prop="title"/>
      </el-table>
      <!--      <el-list v-else :data="todoList" border>-->
      <!--        <el-list-item v-for="item in todoList" :key="item.id">-->
      <!--          <el-checkbox :checked="item.completed">{{item.title}}</el-checkbox>-->
      <!--        </el-list-item>-->
      <!--      </el-list>-->
      <!-- 加载更多按钮 -->
      <el-button style="margin-top: 10px;" type="default" @click="loadMore">加载更多</el-button>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue'
import {useTodoStore} from "../stores/todo";
import api from '../api/apiSet.js'
import {ElMessage} from 'element-plus'

interface TodoItem {
    id: number
    title: string
    completed: boolean
}

const todoStore = useTodoStore()
const loading = ref(true)
const error = ref('')
const todoList = ref<TodoItem[]>([])

const fetchTodoList = async (page = 1) => {
    try {
        loading.value = true
        const res = await api.get('https://jsonplaceholder.typicode.com/todos', {
            params: {_page: page, _limit: 10}
        })
        const data = res as TodoItem[]
        if (page === 1) {
            todoList.value = data
            todoStore.setTodos(data)
        } else {
            todoList.value = [...todoList.value, ...data]
            todoStore.addTodos(data)
        }
    } catch (err) {
        error.value = '数据请求失败：' + (err as Error).message
        ElMessage.error(error.value)
    } finally {
        loading.value = false
    }
}

const loadMore = () => {
    fetchTodoList(Math.ceil(todoList.value.length / 10) + 1)
}

onMounted(() => {
    fetchTodoList()
})
</script>

<style scoped>
</style>