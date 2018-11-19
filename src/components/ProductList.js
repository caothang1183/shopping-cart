import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initProduct } from '../actions/ProductAction'
import { addToCart } from '../actions/CartAction';
import ProductItem from './ProductItem';
import Cart from './Cart';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            page: 1,
            totalPages: null,
            perPage: 20,
            scrolling: false
        }
    }

    componentDidMount() {
        this.mounted = true;
        this.loadProduct();
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e);
        });
    }

    loadProduct = () => {
        const { page, perPage, products } = this.state;
        fetch(`https://nncthang-shopping-api.herokuapp.com/api/products?page=${page}&perPage=${perPage}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    products: [...products, ...json.docs],
                    scrolling: false,
                    totalPages: json.totalPages
                })
                this.props.initProduct(json);
            });
    }

    handleScroll = (e) => {
        const { scrolling, totalPages, page } = this.state;
        if (scrolling) return
        if (totalPages <= page) return
        const lastProduct = document.querySelector('.product-item:last-child');
        const lastProductOffset = lastProduct.offsetTop + lastProduct.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = 20
        if (pageOffset > lastProductOffset - bottomOffset) this.loadMore();
    }

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
            scrolling: true,
        }), this.loadProduct);
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    dispachAddToCart(product) {
        this.props.addToCart(product);
    }

    renderProducts() {
        const { products } = this.state;
        return (
            products.map(product => {
                return (
                    <ProductItem product={product} handleOnAdd={() => this.dispachAddToCart(product)} key={product._id} />
                );
            })
        );
    }

    render() {
        return (
            <Grid>
                <Row><h2>ReactJS - Shopping Cart</h2></Row>
                <Row><Cart /></Row>
                <Row>
                    <Col xs={12} md={12} style={{ margin: '15px' }}>
                        {this.renderProducts()}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapActionsToProps(dispatch) {
    return bindActionCreators({
        initProduct,
        addToCart
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(ProductList);
