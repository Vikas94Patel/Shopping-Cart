export const reducer = (state, action) => {

    if(action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            items: state.items.filter( item => {
                return item.id !== action.payload;
            })
        };
    }

    if (action.type === 'INCREASE_ITEM') {
        const updatedCartItems = state.items.map( item => {
            if (item.id ===action.payload){
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
           return item;
        });

        return {
            ...state,
            items: updatedCartItems
        };
    };

    if (action.type === 'DECREASE_ITEM') {
        const updatedCartItems = state.items.map( item => {
            if (item.id ===action.payload){
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
           return item;
        });

        return {
            ...state,
            items: updatedCartItems
        };
    };

    if (action.type === 'GET_TOTAL') {
        let {totalItems, totalAmount} = state.items.reduce((accumulator, curItemData) => {
            let {price, quantity} = curItemData;
            let updatedTotalAmount = price * quantity;
            accumulator.totalAmount += updatedTotalAmount
            accumulator.totalItems += quantity;
            return accumulator;
        }, 
        {
            totalItems: 0,
            totalAmount: 0
        });
    return {...state, totalItems, totalAmount };
    }

    return state;
};