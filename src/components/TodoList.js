import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';


const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

const TodoList = () => {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map((item)=> <TodoItem text={item.text} done={item.done} key={item.id} id={item.id} />)}
        </TodoListBlock>
    );
};

export default TodoList;