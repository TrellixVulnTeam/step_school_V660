export const ListCard = ({ card, onChangeAmount}) => {


    const handleClick = (id, oper) =>  onChangeAmount(id, oper);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>title</th>
                    <th>coast</th>
                    <th>amount</th>
                    <th>total</th>
                </tr>
            </thead>
            <tbody >
                { card.map(item => <tr key={item.id}>
                    <td>{ item.title }</td>
                    <td>{ item.coast }</td>
                    <td>
                        <button className="button is-small mr-2" onClick={() => handleClick(item.id, '-')}>-</button>
                        { item.amount }
                        <button className="button is-small ml-2" onClick={() => handleClick(item.id, '+')}>+</button>
                        </td>
                    <td>{ item.total }</td>
                </tr>) }
                <tr><td colSpan="3"></td><td>{(card.reduce((sum, item) => sum + +item.total, 0)).toFixed(2)}</td></tr>
            </tbody>
        </table>
    )
}