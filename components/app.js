import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import ProductList from './product-list';
import ProductDetails from './product-details';

const App = () => (
    <div>
        <div className="container">
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:product_id" component={ProductDetails} />
        </div>
    </div>
);

export default App;
