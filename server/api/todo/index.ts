import {db} from "@/server/db"
import {v4 as uuid} from "uuid"


//defineEventHandlers() is a function that takes a socket and a todoService and returns an object with the event handlers
//Allow us to implement pur API 
export default defineEventHandler(async (e) => {
    const method = e.req.method

    if (method === 'GET') {
        return db.todos
    }

    if (method === 'POST') {
        const body = await useBody(e)
        
        if(!body.item) throw new Error()
        
        const newTodo = {
            id: uuid(),
            item: body.item,
            completed: false,
        }

        db.todos.push(newTodo)
        return newTodo
    }
   
})