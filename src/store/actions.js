export const INITIALIZE_PRICES_N_OFFERS = "InitializePricesNOffers";
export const UPDATE_CURRENT_SHOPPING_LIST = "updateCurrentShoppingList";

export const updateCurrentShoppingList = data => ({
    type: UPDATE_CURRENT_SHOPPING_LIST,
    payload: data,
  })

export const initializePricesNOffers = (data) => {
    console.log("I am being called");
    return {
        type: INITIALIZE_PRICES_N_OFFERS,
        payload: data
    }
};