export const Item = props => {
    
    const { item, onDelete, onDone, onChangeCheckbox } = props;
    
    const handleDeleteClick = () => onDelete(item.id);
    const handleDoneClick = () => onDone(item.id);
    const handleChange = () => onChangeCheckbox(item.id);

    return (
        <li>
            <label className={ item.done ? 'done' : '' }>
                <input type="checkbox" checked={ item.isChecked } onChange={ handleChange }/>
                { item.value }
            </label>
            <button type="button" onClick={ handleDoneClick }>done</button>
            <button type="button" onClick={ handleDeleteClick } >delete</button>
        </li>
    )
}
   