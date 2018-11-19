import React, { Component } from 'react';
import { Well, Button, Row, Col } from 'react-bootstrap';

class ProductItem extends Component {

    render() {
        const { product } = this.props;
        return (
            <Col xs={12} sm={6} md={4} lg={3} className="product-item">
                <Well>
                    <Row>
                        <Col xs={12}>
                            <h4>{product.name}</h4>
                            <p>Price: {product.price}</p>
                            <Button bsStyle="primary" onClick={() => this.props.handleOnAdd(product)}>Add</Button>
                        </Col>
                    </Row>
                </Well>
            </Col>
        );
    }
}

export default ProductItem;
