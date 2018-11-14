export let pricesOld = {
    "milk": 3.97,
    "bread": 2.17,
    "banana": 0.99,
    "apple": 0.89
}

export let itemsInStore = [{
    name: "milk",
    qty: 1,
    price: 3.97,
    offer: {
        avlbl: true,
        offerQty: 2,
        offerPrice: 5
    }
}, {
    name: "bread",
    qty: 1,
    price: 2.17,
    offer: {
        avlbl: true,
        offerQty: 3,
        offerPrice: 6
    }
}, {
    name: "banana",
    qty: 1,
    price: 0.99,
    offer: {
        avlbl: false
    }
}, {
    name: "apple",
    qty: 1,
    price: 0.89,
    offer: {
        avlbl: false
    }
}];

// export let offers = [
//     {
//         name: "milk",
//         qty: 2,
//         price: 5
//     },
//     {
//         name: "bread",
//         qty: 3,
//         price: 6
//     }
// ]

export let offersOld = {
    "milk": {
        qty: 2,
        price: 5
    },
    "bread": {
        qty: 3,
        price: 6
    },
    "banana": {
        qty: 0,
        price: 0
    },
    "apple": {
        qty: 0,
        price: 0
    }
}

export let tempList = [
    {
        "item": "apple",
        "qty": 3
    },
    {
        "item": "banana",
        "qty": 4,
    },
    {
        "item": "bread",
        "qty": 1,
    },
    {
        "item": "milk",
        "qty": 2,
    }
];