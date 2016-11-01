<template>
	<div id="todo-list">
		<input type="text" v-model.trim="newTodo" @keyup.enter="addTodo" placeholder="Add a todo"></input>
		<ul>
			<li 
				v-for=" (todo, index) in todoList" 
				:index="index" 
				:class="{finish : finishList.indexOf(index) !== -1}" 
				@click="finishTask(index)"
			>
				<span>{{ todo.text }}<span>
				<!-- <button @click="removeTodo(index)">x</button> -->
			<!-- 	<button @click="finishTask(index)">c</button> -->
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		data () {
			return {
				newTodo: '',
				todoList : [],
				finishList: []
			}
		},
		methods: {
			addTodo: function(){
				if(this.newTodo){
					this.todoList.unshift({
						text: this.newTodo
					})

					this.newTodo = ''
				}
			},
			removeTodo: function(index){

				this.todoList.splice(index, 1)

				//删除对应的完成事件
				var finishIdx = this.finishList.indexOf(index)
				if(finishIdx !== -1){
					this.finishList.splice(finishIdx, 1)
				}
			},
			finishTask: function(index){
				//处理对应的todo

				//样式变更
				this.finishList.unshift(index)

			}
		}
	}
</script>