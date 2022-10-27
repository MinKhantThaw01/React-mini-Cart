import React from 'react';

import Master from './Layout/Master';

const Cart = (props) => {

    const renderReduce = (product) => {
        return (
            props.setCart(prevState => {
                return prevState.map(d => {
                    if (d.name === product.name) {
                        var updateQty = d.qty - 1;
                        if (d.qty === 1) {

                            const newItem = prevState.filter((d) =>
                                d.id !== product.id)

                            return props.setCart(newItem);

                        }
                        return { ...d, qty: updateQty }
                    }
                    return d;
                })
            })
        )
    }
    const renderAdd = (product) => {
        return (
            props.setCart(prevState => {
                return prevState.map(d => {
                    if (d.name === product.name) {
                        var updateQty = d.qty + 1;
                        return { ...d, qty: updateQty }
                    }
                    return d;
                })
            })
        )
    }
    return (
        <Master {...props}>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col-2">Option</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.cart.map(d => {

                                return (

                                    <tr>
                                        <td>{d.name}</td>
                                        <td>{d.price}</td>
                                        <td>{d.qty}</td>
                                        <td><button onClick={() => renderReduce(d)} className='btn btn-danger px-5'>-</button> <button onClick={() => renderAdd(d)} className='btn btn-danger px-5'>+</button></td>
                                    </tr>

                                )
                            })
                        }


                    </tbody>
                </table>
            </div>

        </Master>
    );
}

export default Cart;
