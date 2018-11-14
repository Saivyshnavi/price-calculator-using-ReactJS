import React, { Component } from 'react';
import Items from './items/items';
import { connect } from 'react-redux';
import { tempList } from './pricesNOffers';
import pricesNOffersScreen from './pricesNOffersScreen';
import { Router, Route, hashHistory } from 'react-router';
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Items} />
        <Route path="/pricesNOffers" component={pricesNOffersScreen} />        
      </Router>
      // <Items></Items>
    );
  }
}

export default connect()(App);
