import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductList } from '../actions';

class ProductList extends Component {
    componentDidMount(){
        this.props.getProductList();
    }

    ProductItem({ cost, id, name }){
        return (
            <Link to={`/product/${id}`} className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{name}</h5>
                </div>
                <p className="mb-1">{cost}</p>
            </Link>
        );
    }

    render(){
        const { props: { products }, ProductItem } = this;

        return (
            <div>
                <h1 className="text-center">Products</h1>

                <div className="list-group">
                    {products.map(p => <ProductItem key={p.id} {...p} />)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({products}) => ({products: products.list})

export default connect(mapStateToProps, { getProductList })(ProductList);
