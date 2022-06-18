import React, {Component} from "react";

// components
import ProductListingPage from "./ProductListingPage";

// assets


class HomePage extends Component {
    render () {
        return (
            <main className="container">
                <ProductListingPage/>
            </main>
        );
    }
}

export default HomePage;
