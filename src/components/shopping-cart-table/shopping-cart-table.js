import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIcrease, onDecrease, onDelete }) => {

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
        Total: $201
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
      items: cartItems,
      total: orderTotal
  }
}

const mapDispatchToProps = () => {
  return {
    onIcrease: (id) => {
      console.log('+  ' + id)
    },
    onDecrease: (id) => {
      console.log('-  ' + id)
    },
    onDelete: (id) => {
      console.log('del  ' + id)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
