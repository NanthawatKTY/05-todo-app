import {db} from "~~/server/db";
import {createError, sendError} from "h3"

export default defineEventHandler(async (e) => {
    const method = e.req.method
    const context = e.context
    const {
        id
    } = context.params

    const findTodoById = (todoId) => {
        let index
        const todo = db.todos.find((todo, i) => {
            if (todo.id === todoId) {
                index = i
                return true
            }
            return false
        })

        if (!todo){
            const TodoNotFoundError = createError({
                statusCode: 404,
                statusMessage: 'Todo not found',
                data: {}
            })

            sendError(e, TodoNotFoundError)
        }

        return {todo, index}
    }

    //if the method is PUT
    if (method === 'PUT') {
        const {todo, index} = findTodoById(id)
        const updatedTodo = {
            ...todo,
            completed: !todo.completed,
        }

        db.todos[index] = updatedTodo

        // 5) Return the updated todo
        return updatedTodo

    }


    //if the method is DELETE
    if (method === 'DELETE') {
        const {todo, index} = findTodoById(id)
        db.todos.splice(index, 1)
        return {
            message: 'Todo deleted'
        }
    }
})