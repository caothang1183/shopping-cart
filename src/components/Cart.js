import React, { Component } from 'react';
import CartItem from './CartItem';
import { Panel, Badge, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { deleteItem, updateQuantity } from '../actions/CartAction';

class Cart extends Component {

    handleDeleteItem(_id) {
        this.props.deleteItem({ _id })
    }

    handlePlusQty(_id) {
        let quantity = 1;
        this.props.updateQuantity({ _id, quantity })
    }

    handleMinusQty(_id) {
        let quantity = -1;
        this.props.updateQuantity({ _id, quantity })
    }

    renderCart() {
        const { cart } = this.props;
        return (
            cart.map(item => {
                return (
                    <CartItem
                        cart={item}
                        key={item._id}
                        onPlusQty={() => this.handlePlusQty(item._id)}
                        onMinusQty={() => this.handleMinusQty(item._id)}
                        handleDeleteItem={() => this.handleDeleteItem(item._id)}
                    />
                );
            })
        );
    }

    render() {
        const { cart } = this.props;
        if (cart.length !== 0) {
            return (
                <aside className='cart'>
                    <Panel className='cart-list' header='Cart' bsStyle='primary'>
                        <legend><h1>Cart ({cart.length})</h1></legend>
                        {this.renderCart()}
                    </Panel>
                    <Panel>
                        <Row style={{ margin: '15px' }}>
                            <Col xs={12} sm={6}>
                                <h4>TOTAL: <Badge pullRight>Price: {this.totalAmount(cart)}</Badge></h4>
                            </Col>
                        </Row>
                    </Panel>
                </aside>
            );
        } else {
            return (
                <aside className='cart' style={{ margin: '15px' }}>Cart Empty</aside>
            );
        }
    }

    totalAmount(cartItems) {
        return cartItems.reduce((total, item) => {
            total += item.price * item.quantity;
            return total;
        }, 0);
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteItem,
        updateQuantity
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);