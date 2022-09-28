import { useState, useEffect, Fragment } from 'react';
import { ListGoods } from './ListGoods';
import { ListCard } from './ListCard';


export const Store = () => {

    const [goods, setGoods] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {

        const getListGoods = async url => {
            const response = await fetch(url);
            const { products } = await response.json();
            setGoods(products);
        }

        getListGoods('https://dummyjson.com/products/?skip=0&limit=6');

    }, [])

    const handleAddToCard = id => {
        const oldItemCard = card.find(item => item.id === id);

        if(oldItemCard) {
            oldItemCard.amount ++;
            oldItemCard.total = (+oldItemCard.total + +oldItemCard.coast).toFixed(2);
            const newCard = card.map(item => item.id === id ? oldItemCard : item);
            setCard(newCard);
        } else {
            const { title, price, discountPercentage } = goods.find(item => item.id === id);
            const coast = (price * (100 - discountPercentage) / 100).toFixed(2);
            const newCard = {id, title, coast, amount: 1, total: coast };
            setCard([newCard, ...card]);
        }
    };

    const handleChangeAmount = (id, oper) => {
        oper === '+' &&  handleAddToCard(id);

        if(oper === '-') {
            const oldItemCard = card.find(item => item.id === id);
            oldItemCard.amount --;

            if(oldItemCard.amount === 0) {
                setCard(card.filter(item => item.id !== id ));
            } else {
                oldItemCard.total = (oldItemCard.total - oldItemCard.coast).toFixed(2);
                const newCard = card.map(item => item.id === id ? oldItemCard : item);
                setCard(newCard);
            }
        }
    }

    return (
        <Fragment>
            { card.length > 0 &&<ListCard card={ card }  onChangeAmount={ handleChangeAmount }/> }
            <ListGoods goods={ goods } onAddToCard={ handleAddToCard }/>
        </Fragment>
    )
}