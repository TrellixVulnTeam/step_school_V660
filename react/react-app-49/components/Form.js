import { useState } from 'react';
import { getId } from '../functions/getId';

export const Form = ({ onAddItem }) => {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const obj = { id: getId(value), value, done: false, isChecked: false }
        value && onAddItem(obj);
        value && setValue('');
    }

    const handleChange = e => setValue( e.target.value );

    return (
        <form action="#" onSubmit={ handleSubmit }>
            <input type="text" value={ value } onChange={ handleChange }/>
            <button type="submit">add to list</button>
        </form>
    )
}