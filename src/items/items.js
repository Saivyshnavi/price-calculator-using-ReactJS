import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import { connect } from 'react-redux';
// import { tempList } from './../pricesNOffers';
import { updateCurrentShoppingList } from './../store/actions';
import { Link } from 'react-router';

class Items extends Component {

  rawInput = "";
  constructor(props) {
    super(props);
  }

  buyNow = () => {
    let parsedItems = this.parseItems();
    let finalItems = this.computePrice(parsedItems);
    this.props.updateCurrentShoppingList(finalItems);
  }

  computePrice = (items) => {
    let itemsInStore = this.props.itemsInStore;
    for (let i = 0; i < items.length; i++) {
      let currentItemBeingConsidered = items[i];
      let matchingItemInStore = itemsInStore.filter((item) => {
        return item.name == currentItemBeingConsidered.name;
      })[0];
      if (matchingItemInStore) {
        currentItemBeingConsidered.pricePerPiece = matchingItemInStore.price;
        if (matchingItemInStore.offer.avlbl) {
          let temp = currentItemBeingConsidered.qty % matchingItemInStore.offer.offerQty;
          currentItemBeingConsidered.qtyOnOffer = currentItemBeingConsidered.qty - temp;
          currentItemBeingConsidered.totalPrice = (currentItemBeingConsidered.qtyOnOffer / matchingItemInStore.offer.offerQty) * matchingItemInStore.offer.offerPrice + (currentItemBeingConsidered.qty - currentItemBeingConsidered.qtyOnOffer) * matchingItemInStore.price
          currentItemBeingConsidered.saved = (currentItemBeingConsidered.qty * currentItemBeingConsidered.pricePerPiece) - currentItemBeingConsidered.totalPrice
        } else {
          currentItemBeingConsidered.totalPrice = currentItemBeingConsidered.qty * matchingItemInStore.price;
        }
      } else {
        currentItemBeingConsidered.status = false;
      }
    }

    return items;
  }

  parseItems = () => {
    let parsedInput = this.rawInput.split(",");
    let items = {};
    for (let i = 0; i < parsedInput.length; i++) {
      let currentItemInConsideration = parsedInput[i].trim().toLowerCase(),
        currentlyInStore = items[currentItemInConsideration];
      if (currentlyInStore) {
        items[currentItemInConsideration] = currentlyInStore + 1;
      } else {
        items[currentItemInConsideration] = 1;
      }
    }

    let parsedArr = [], itemsTmp = Object.keys(items);
    for (let j = 0; j < itemsTmp.length; j++) {
      parsedArr.push({
        "name": itemsTmp[j],
        "qty": items[itemsTmp[j]],
        "pricePerPiece": 0,
        "qtyOnOffer": 0,
        "totalPrice": 0,
        "saved": 0,
        "status": true
      });
    }

    return parsedArr;
  }

  updateState = (e) => {
    this.rawInput = e.target.value
  }

  // navigateToPricesNOffers = () => {
  //   browserHistory.push("/#/pricesNOffers");
  // }

  render() {
    return (
      <div>
        <div>
          {/* <button onClick={this.navigateToPricesNOffers}>View Current Prices and offers</button> */}
          <Link to="/pricesNOffers">View Current Prices and offers</Link>
        </div>
        <div>
          <p>Please enter all the items purchased separated by a comma</p>
          <input type="text" onChange={this.updateState} />
          <button onClick={this.buyNow}>Buy Now</button>
        </div>

        {/* <div>
          {
            tempList.map((item) => {
              return (
                <div key={item.item}>
                  <p>Name: {item.item}</p>
                  <p>qty: {item.qty}</p>
                  <br/>
                </div>
              ) 
            })
          }
        </div> */}
        <div>
          <h1>Your purchase order is</h1>
          <table>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price per 1</th>
                <th>Quantity on offer</th>
                <th>Remaining</th>
                <th>Price</th>
                <th>Saved</th>
              </tr>
              {this.props.items.length ? this.props.items.map((priceItem) => {
                return (
                  <tr key={priceItem.name} className={!priceItem.status ? "no-item-found" : ""}>
                    <td>{priceItem.name}</td>
                    <td>{priceItem.qty}</td>
                    <td>{priceItem.pricePerPiece}</td>
                    <td>{priceItem.qtyOnOffer}</td>
                    <td>{priceItem.qty - priceItem.qtyOnOffer}</td>
                    <td>{priceItem.totalPrice}</td>
                    <td>{priceItem.saved}</td>
                  </tr>
                )
              }) : null}
            </tbody>
          </table>

          {!this.props.items.length ? <h2>No items purchased yet.. !!</h2> : (
            <div>
              <p>Total price : {this.props.items.map((item) => item.totalPrice).reduce((runningTotal, currentItemPrice) => {
                return runningTotal + currentItemPrice
              })}</p>
              <p>You saved $ {this.props.items.map((item) => item.saved).reduce((runningTotal, currentItemSaved) => {
                return runningTotal + currentItemSaved
              })} today.</p>
              <p>Items currently not available in store {this.props.items.filter((item) => !item.status).length}</p>
            </div>
          )}

        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.currentShoppingList,
    itemsInStore: state.itemsInStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentShoppingList: (data) => { dispatch(updateCurrentShoppingList(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);

// export default Items;