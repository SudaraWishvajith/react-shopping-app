import React, { createContext, useReducer } from 'react';

// The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) =>{
    let new_expenses = [];
    switch(action.type){
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.expenses.map((expense) =>{
                if(expense.name === action.payload.name) {
                    expense.quantity = expense.quantity + action.payload.quantity;
                    updatedqty = true;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = 'DONE';
            return {
                ...state,
            };
        
        case 'RED_QUANTITY':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name){
                    expense.quantity = expense.quantity - payload.quantity;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = 'DONE';
            return {
                ...state,
            }
        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name){
                    expense.quantity = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expense = new_expenses;
            action.type = 'DONE';
            return {
                ...state,
            }
        case 'CHG_LOCATION':
            action.tyep = 'DONE';
            state.Location = action.payload;
            return {
                ...state
            }
    }
       
};

const initialState = {
    expenses: [
        { id: "Shirt", name: "Shirt", quantity: 0, unitPrice: 500 },
        { id: "Jeans", name: "Jeans", quantity: 0, unitPrice: 300 },
        { id: "Dress", name: "Dress", quantity: 0, unitPrice: 400 },
        { id: "Dinner set", name: "Dinner set", quantity: 0, unitPrice: 600 },
        { id: "Bags", name: "Bags", quantity: 0, unitPrice: 200},
    ],
    Location: '$'
};

// create context - this is the thing components import and use to get the state
export const AppContext = createContext();

export const AppProvider = (props)=> {
    // sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppContext,initialState);

    const totalExpenses = state.expenses.reduce((total,item)=>{
        return (total = total + (item.unitPrice * item.unitPrice));
    },0);

    state.CartValue = totalExpenses;

    return(
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                CartValue: state. CartValue,
                dispatch,
                Location: state.Location
            }}>
                {props.children}
            </AppContext.Provider>
    );
};
