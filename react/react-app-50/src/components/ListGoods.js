export const ListGoods = ({ goods, onAddToCard }) => {

    const handleClick = id => onAddToCard(id);

     return (
        <ul className='goods__list'>
            { goods.map(item => 
                <li className='goods__item' key={ item.id }>
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">{ item.title }</p>
                        </header>
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={ item.thumbnail } alt="image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content">{ item.description }</div>
                            <div className="content">{ item.price }&nbsp;(discount:{ item.discountPercentage }%)</div>
                        </div>
                        <footer className="card-footer">
                            <button className="button is-medium is-fullwidth is-link" onClick={() => handleClick(item.id) }>add to card</button>
                        </footer>
                    </div>
                </li>
            )}
        </ul>
    )
}