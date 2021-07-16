import React from 'react';
import { useHistory } from 'react-router-dom';
import './Product.css'

const Product = ({pd}) => {
    console.log(pd.name.price)
    // const handleBuyNow = pd;

    const history = useHistory()
    const navigateToCheckout = ()=>{
        history.push('/checkOut')
    }
    return (
        <div className="col-md-3 p-3 m-3 text-center product">
            <div className="product-details">
                <div className="pdImage p-3">
                    <img style={{height: '250px'}} src={pd.imageURL} alt={pd} />
                </div>
                <div className="pdPrice d-flex justify-content-around">
                    <span className="price">
                        <p>${pd.name.price}</p>
                    </span>
                    <span>
                        <button onClick={navigateToCheckout} className="button">Buy Now</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Product;