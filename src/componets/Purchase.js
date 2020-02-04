import React, { useState } from 'react'

export default function Purchase() {
    const [purchases, setPurchases] = useState([
    {id:1, category: 'food', amount:999},
    {id:2, category: 'moto', amount:1000},
    {id:3, category: 'auto', amount:3000},
    {id:4, category: 'beauty', amount:99},
    {id:5, category: 'food', amount:10000},
]);
   
    const [sortField, setSortField] = useState('id');
    const [reversed, setReversed] = useState(false);
    const [filterValue, setFilterValue] = useState('');

    const handleResetSort = () => {
        setReversed(false);
        setSortField('id');
    };

    const handleSortByPriceAsc = () => {
            setReversed(false);
        setSortField('amount');
    };

    const handleSortByPriceDesc = () => {
        setReversed(true);
        setSortField('amount');
    };

    const sortBy = (a, b) => {
        const result = a[sortField] - b[sortField];
        return reversed ? -result : result; 
    };


    return (
        <>
            <div>
                <button onClick={handleResetSort}>reset sort</button>
                <button onClick={handleSortByPriceAsc}>sort by price (asc)</button>
                <button onClick={handleSortByPriceDesc}>sort by price (desc)</button>

                {/* //ДЗ
                <button onClick={handleResetFilter}>filter reset</button>
                <button onClick={handleFilterByFood}>filter food</button>
                <button onClick={handleFilterByAuto}>filter auto</button>
                <button onClick={handleFilterByBeauty}>filter beauty</button> */}

             </div>
                   {[...purchases]//копия
                    .sort(sortBy)//отсортиров
                     .map(o => <div>#{o.id}, категория: {o.category}, стоимость: {o.amount}</div>)}
         </>
    )
}
