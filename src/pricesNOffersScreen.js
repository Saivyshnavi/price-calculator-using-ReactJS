import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class pricesNOffersScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log("these are the prices", this.props, this.itemsInStore);
    }

    render() {
        return (
            <div>
                <Link to="/">Place New Orders</Link>
                <h1>Individual Items Prices</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        {this.props.itemsInStore.map((priceItem) => {
                            return (
                                <tr key={priceItem.name}>
                                    <td>{priceItem.name}</td>
                                    <td>{priceItem.qty}</td>
                                    <td>{priceItem.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <h1>Offers of Items</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        {this.props.itemsInStore.length ? this.props.itemsInStore.map((priceItem) => {
                            return (
                                priceItem.offer.avlbl ? <tr key={priceItem.name}>
                                    <td>{priceItem.name}</td>
                                    <td>{priceItem.offer.offerQty}</td>
                                    <td>{priceItem.offer.offerPrice}</td>
                                </tr> : null
                            )
                        }) : <h2>No offers currently available</h2>}
                    </tbody>
                </table>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemsInStore: state.itemsInStore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(pricesNOffersScreen);