import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()

    this.state={
      allStocks: [],
      myPortfolio: [],
      sort: {},
      filter: ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:4000/stocks")
    .then(response => response.json())
    .then(stocksArr => this.setState({
      allStocks: stocksArr
      })
    )
  }

  addToPortfolio = (obj) => {
    if(this.state.myPortfolio.includes(obj))
    {
      alert("Stock already purchased")
    }
    else {
    let newPort = [...this.state.myPortfolio]
    this.setState({
      myPortfolio: [...newPort, obj]
    })
    }
  }

  removePortfolio = (obj) => {
    let soldStock = this.state.myPortfolio.filter(stock => stock.id !== obj.id)
    this.setState({
      myPortfolio: soldStock
    })
  }

  sortStocks = (sortOn, sort) => {
    if (sortOn) {
      this.setState({
        sort: {...this.state.sort, [sort]:sortOn}
      }, () => console.log(this.state.sort))
    }
    else {
      this.setState({
        sort: {...this.state.sort, [sort]:sortOn}
      }, () => console.log(this.state.sort))
    }
  }

  updateFilter = (event) => {
    this.setState({
      filter: event.target.value
    }, () => console.log(this.state.filter))
  }

  passCorrectStocks = () => {
    let adjustedStocks = [...this.state.allStocks]
    if(this.state.sort["Alphabetically"]) {
      adjustedStocks.sort((stockA, stockB) => {
        return stockA.name > stockB.name ? 1 : -1
      })
    }
    if(this.state.sort["Price"]) {
      adjustedStocks.sort((stockA, stockB) => {
        return stockB.price - stockA.price
      })
    }
    if(this.state.filter !== "") {
      adjustedStocks = adjustedStocks.filter(stock => stock.type === this.state.filter)
    }
    return adjustedStocks
  }


  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} updateFilter={this.updateFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.passCorrectStocks()} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myPortfolio} removePortfolio={this.removePortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
