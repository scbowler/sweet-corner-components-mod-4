import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import ProductList from './product-list';

const App = () => (
    <div>
        <div className="container">
            <Route path="/" exact component={ProductList} />
        </div>
    </div>
);

export default App;
