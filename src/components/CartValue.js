import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    let { expenses,Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total,item)=>{
        return (total = total + (item.unitPrice * item.quantity));
    },0);

    return(
        <div className='alert alert-primary'>
            <span>Cart Value: {Location}{totalExpenses}</span> 
        </div>
    )
};

export default CartValue;
