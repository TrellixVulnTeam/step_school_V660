export const Controls = props => {
    const { isChecked, list, onChangeList } = props;

    const deleteAll = list => list.filter(item => !item.isChecked);

    const chooseAll = list => {
        return list.map(item => {
            if (!item.isChecked) {
                item.isChecked = true;
                return item;
            }
            return item;
        })
    };

    const doneAll = list => {
        return list.map(item => {
            if (item.isChecked) {
                item.done = true;
                return item;
            }
            return item;
        })
    };
    
    const clearAll = list => {
        return list.map(item => {
            if (item.isChecked) {
                item.isChecked = false;
                item.done = false;
                return item;
            }
            return item;
        })
    };

    const handleChooseAll = () => onChangeList(chooseAll(list));
    const handleDoneAll = () => onChangeList(doneAll(list));
    const handleDeleteAll = () => onChangeList(deleteAll(list));
    const handleClearAll = () => onChangeList(clearAll(list));

    return (
        <div className="controls">
            <button type="button" onClick={ handleChooseAll } >choose all</button>
            { isChecked ? <button type="button" onClick={ handleDoneAll } >done all</button> : '' }
            { isChecked ? <button type="button" onClick={ handleDeleteAll } >delete all</button> : '' }
            { isChecked ? <button type="button" onClick={ handleClearAll } >clear all</button> : '' }
        </div>
    )
}