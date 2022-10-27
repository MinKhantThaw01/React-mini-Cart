import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Master from './Layout/Master';

// https://fake-movie-database-api.herokuapp.com
const Home = (props) => {
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://ig-food-menus.herokuapp.com/burgers").then((res) => {
            setData(res.data);
            console.log(res.data)


            setLoader(false);
        })
    });
    const buyNow = (product) => {
        var findFood = props.cart.find(d => {
            return d.name === product.name;
        });
        if (findFood) {
            findFood.qty += 1;
        }
        else {
            product.price = 5000;
            product.qty = 1;
            props.setCart([...props.cart, product])

        }

    }

    return (
        <Master cart={props.cart} setCart={props.setCart}>

            {loader ?
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :
                <div className='d-flex flex-wrap'>
                    {
                        data.map((d) =>
                        (
                            < div className="card m-3" style={{ width: "18rem" }} key={d.name}>
                                <img src={d.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{d.name}</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                    <div>
                                        <button className='btn btn-info me-3'>5000</button>
                                        <button className="btn btn-warning" onClick={() => buyNow(d)}>
                                            <i class="bi bi-cart2"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )


                        )
                    }

                </div>

            }



        </Master >

    );
}

export default Home;
