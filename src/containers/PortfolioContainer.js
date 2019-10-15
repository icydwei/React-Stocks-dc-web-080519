import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.myStocks.map(stockObj => {
              return <Stock stock={stockObj} key={stockObj.id} handleClick={this.props.removePortfolio} color="card portfolio"/>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
