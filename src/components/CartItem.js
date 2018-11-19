import React, { Component } from 'react';
import { Col, Row, Panel, Button, Badge } from 'react-bootstrap';

class CartItem extends Component {

    render() {
        const { cart } = this.props;
        return (
            <Panel className='cart-item'>
                <Row style={{ margin: '15px' }}>
                    <Col xs={12} sm={6}>
                        <h5>{cart.name} <Badge pullRight>Price: {cart.price}</Badge></h5>
                    </Col>
                    <Col xs={6} sm={4}>

                        <div className="input-group">
                            <p>Quantity:&nbsp;
                                <Button bsSize='small' onClick={() => this.props.onPlusQty()}> + </Button>
                                <span style={{ padding: '2px 10px' }}>{cart.quantity}</span>
                                <Button bsSize='small' onClick={() => this.props.onMinusQty()}> - </Button>
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} sm={2}>
                        <Button bsSize='small' bsStyle='danger' onClick={() => this.props.handleDeleteItem()}>Delete</Button>
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default CartItem;
