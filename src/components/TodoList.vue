<template lang="html">
  <div class="">
    <h1>Todos</h1>

    <el-input v-model="todoText" @keyup.13="todoAdd(todoText)" type="text"></el-input>
    <br><br>
    <el-button @click="todoAdd(todoText)" type="success">Add</el-button>

    <el-button :disabled="selection.length === 0" @click="deleteAllSelected" type="danger">Delete All</el-button>

    <br><br>

    {{ selection }}

    <el-table :data="todos" border style="width: 100%" @select="todoSelect" @select-all="todoSelect">
      <el-table-column type="selection" width="55">
      </el-table-column>

      <el-table-column fixed prop="text" label="Todo">
      </el-table-column>

      <el-table-column label="Action">
        <template scope="scope">
          <el-button size="small" type="danger" @click="todoDelete(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      todoText: '',
      todos: [],
      selection: []
    }
  },
  methods: {
    todoSelect (selection, row) {
      this.selection = selection
    },
    todoAdd (todoText) {
      let newTodo = {
        id: Date.now(),
        text: todoText
      }
      this.todos.push(newTodo)
      this.todoText = ''
    },
    todoDelete (row) {
      let index = this.todos.findIndex(todo => todo.id === row.id)
      this.todos.splice(index, 1)
    },
    deleteAllSelected () {
      this.selection.forEach(s => {
        this.todoDelete(s)
      })
    }
  }
}
</script>

<style lang="css">
</style>
