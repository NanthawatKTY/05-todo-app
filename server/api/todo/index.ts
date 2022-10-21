import {db} from "@/server/db"
import {v4 as uuid} from "uuid"
import {createError, sendError} from "h3"

//defineEventHandlers() is a function that takes a socket and a todoService and returns an object with the event handlers
//Allow us to implement pur API 
export default defineEventHandler(async (e) => {
    const method = e.req.method

    //if the method is GET
    if (method === 'GET') {
        console.log(db.todos);
        
        return db.todos
    }

    //if the method is POST
    if (method === 'POST') {
        const body = await useBody(e)
        
        if(!body.item){
            const TodoItemRequiredError = createError({
                statusCode: 400,
                statusMessage: 'Todo item is required',
                data: {}
            })

            sendError(e, TodoItemRequiredError)
        }
        
        const newTodo = {
            id: uuid(),
            item: body.item,
            completed: false,
        }

        db.todos.push(newTodo)
        return newTodo
    }

    //if the method is PUT


    //if the method is DELETE
   
})