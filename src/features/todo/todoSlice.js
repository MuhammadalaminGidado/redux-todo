import { createSlice, nanoid } from "@reduxjs/toolkit";

const id = nanoid()

const initialState = [{
    id: id,
    content: 'Buy groceries',
    checked: false
  },
  {
    id: id,
    content: 'Walk the dog',
    checked: true
  },
  {
    id: id,
    content: 'Do laundry',
    checked: false
  },
  {
    id: id,
    content: 'Clean the house',
    checked: true
  },
  {
    id: id,
    content: 'Mow the lawn',
    checked: false
  }]

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {}
})

export default todoSlice.reducer
export const selectTodos = (state) => state.todos
