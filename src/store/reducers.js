import { combineReducers } from 'redux';
import { itemsInStore } from './../pricesNOffers';

import { UPDATE_CURRENT_SHOPPING_LIST } from './actions';

const itemsInStoreReducer = (state = itemsInStore, action) => {
    return state
}

// const offerReducer = (state = offers, action) => {
//     return state
// }

const currentShoppingListReducer = (state = [], action) => {
    if (action.type == UPDATE_CURRENT_SHOPPING_LIST) {
        return [...action.payload];
    } else {
        return state;
    }
}

const reducer = combineReducers({
    itemsInStore: itemsInStoreReducer,
    // offers: offerReducer,
    currentShoppingList: currentShoppingListReducer,
});

export default reducer;