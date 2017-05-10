<template lang="html">
  <div class="">
    <h1>Todos</h1>

    <el-row>
      <el-col :span="8">
        <h3>รายการ</h3>
        <el-input v-model="todoText" type="text"></el-input>
        <h3>จำนวนเงิน</h3>
        <el-input v-model="todoAmount" type="text"></el-input>
      </el-col>
    </el-row>


    <br><br>
    <el-button @click="todoAdd(todoText, todoAmount)" type="success">Add</el-button>

    <el-button :disabled="selection.length === 0" @click="deleteAllSelected" type="danger">Delete All</el-button>

    <br><br>

    {{ selection }}

    <el-table :data="todos" border style="width: 100%" @select="todoSelect" @select-all="todoSelect">
      <el-table-column type="selection" width="55">
      </el-table-column>

      <el-table-column fixed prop="text" label="รายการ">
      </el-table-column>

      <el-table-column label="จำนวนเงิน">
        <template scope="scope">
          {{ numberFormat(scope.row.amount) }}
        </template>
      </el-table-column>

      <el-table-column label="Action">
        <template scope="scope">
          <el-button size="small" type="danger" @click="todoDelete(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <h1>{{ numberFormat(sum) }}</h1>

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
  computed: {
    sum () {
      return this.todos.reduce(function (sum, todo) {
        return sum + todo.amount
      }, 0)
    }
  },
  methods: {
    numberFormat (number) {
      return (number) ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0
    },
    todoSelect (selection, row) {
      this.selection = selection
    },
    todoAdd (todoText, todoAmount) {
      let newTodo = {
        id: Date.now(),
        text: todoText,
        amount: parseInt(todoAmount)
      }
      this.todos.push(newTodo)
      this.todoText = ''
      this.todoAmount = ''
    },
    todoDelete (row) {
      let index = this.todos.findIndex(todo => todo.id === row.id)
      this.todos.splice(index, 1)
    },
    deleteAllSelected () {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.selection.forEach(s => {
          this.todoDelete(s)
        })
        this.$message({
          type: 'success',
          message: 'Delete completed'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    }
  }
}
</script>

<style lang="css">
</style>
