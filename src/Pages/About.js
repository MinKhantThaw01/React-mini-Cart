import React from 'react';
import Master from './Layout/Master';

const About = (props) => {
    return (
        <Master cart={props.cart} setCart={props.setCart}>
            <h1>Hello</h1>
        </Master>


    );
}

export default About;
