import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedToCart, allBooksAddedToCart } from '../../actions';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, allTotal, onIcrease, onDecrease, onDelete }) => {

  const renderRow = (item, num) => {

    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{num+1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button onClick={() => onIcrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    )
  }
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${allTotal}
      </div>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: { cartItems, orderTotal }}) => {

  return {
      items: cartItems,
      allTotal: orderTotal
  }
}

const mapDispatchToProps = {
  onIcrease: bookAddedToCart,
  onDecrease: bookRemovedToCart,
  onDelete: allBooksAddedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
