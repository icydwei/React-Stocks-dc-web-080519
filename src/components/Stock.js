import React from 'react'

const Stock = (props) => {
  let {id, name, price, ticker} = props.stock
  return (
  <div>

    <div className={props.color} key={id} onClick={() => {props.handleClick(props.stock)}}>
      <div className="card-body">
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">{
            `${ticker}: ${price}`
          }</p>
      </div>
    </div>


  </div>
)
}

export default Stock
