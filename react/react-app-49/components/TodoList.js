import { Fragment, useState } from 'react';
import { Form } from './Form';
import { Item } from './Item';
import { Controls } from './Controls';

export const TodoList = () => {

    const [list, setList] = useState([]);

    const handleAddItem = obj => setList([obj, ...list]);

    const handleDelete = id => setList(list.filter(item => item.id !== id));

    const handleDone = id => {
        const newList = list.map(item => {
            if(item.id === id) {
                item.done = !item.done;
                return item;
            }
            return item;
        });
        setList(newList);
    };

    const handleChangeCheckbox = id => {
        const newList = list.map(item => {
            if(item.id === id) {
                item.isChecked = !item.isChecked;
                return item;
            }
            return item;
        });
        setList(newList);
    };


    const getItem = item => {

        return (<Item
                    key = { item.id }
                    onDelete = { handleDelete }
                    onDone = { handleDone }
                    onChangeCheckbox = { handleChangeCheckbox }
                    item = { item }
                />)
    }

    const handleChangeList = list => setList(list);

    return (
        <Fragment>
            <Form onAddItem = { handleAddItem }/>
            <Controls 
                isChecked = { list.some(item => item.isChecked) }
                list = { list }
                onChangeList = { handleChangeList }
                /> 
            <ul>{ list.map(getItem) }</ul>
        </Fragment>
    )
}