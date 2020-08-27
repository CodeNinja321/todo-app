import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ImageIcon } from '@material-ui/core';
import './Todo.css';

const Todo = ({ todo, deadline }) => {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText primary={todo} secondary={`⏰  deadline: ${deadline}`} />
            </ListItem>
        </List>
    )
}

export default Todo
