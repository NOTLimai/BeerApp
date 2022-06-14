import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            beers: []
        }
    }

    render () {
        return (
            <div className='d-flex justify-content-around pt-3 header'>
                <Link to="/" className='linkHead'>
                    <h1 className='textHeader'>{this.props.name}</h1>
                </Link>
                <Link to={'/carts'}>
                    <p className='textHeader'>
                        <img className='cartImg' src={process.env.PUBLIC_URL + '/images/cart.png'}></img>
                    </p>
                </Link>
            </div>
        )
    }
}

export default Header;