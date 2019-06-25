import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductDetails } from 'actions';
import { money } from 'helpers';
import './details.scss';

class ProductDetails extends Component {
    state = {
        quantity: 1
    }

    decrease = () => {
        const { quantity } = this.state;

        if(quantity > 1){
            this.setState({
                quantity: quantity - 1
            });
        }
    }

    increase = () => {
        this.setState({
            quantity: this.state.quantity + 1
        });
    }

    componentDidMount(){
        const { getProductDetails, match: { params } } = this.props;

        getProductDetails(params.product_id);
    }
    
    render(){
        const { details } = this.props;
        const { quantity } = this.state;

        return (
            <div className="jumbotron my-5 product-details">
                <h1 className="display-4">{details.name}</h1>
                <p className="lead">{details.description}</p>
                <hr className="my-4"/>
                <div className="lead text-right">
                    <p>{money(details.cost)} each</p>
                    <div className="mb-4 quantity">
                        <i className="fas fa-minus" onClick={this.decrease} />
                        <span className="amount">{quantity}</span>
                        <i className="fas fa-plus" onClick={this.increase} />
                    </div>
                    <div className="total mb-4">{money(details.cost * quantity)} TOTAL</div>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Add to cart</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({products: {details}}) => ({details});

export default connect(mapStateToProps, { getProductDetails })(ProductDetails);
