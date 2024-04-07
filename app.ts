import express from 'express'
import {router as UserRoute} from "./user/user.route"
import {router as BooksRoute} from "./books/books.route"
import {router as CategporyRoute} from "./categories/category.route"

const app = express()

app.use(express.json())
app.use('/users',UserRoute)
app.use('/books',BooksRoute)
app.use('/categories',CategporyRoute)

export {app}