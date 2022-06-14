import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div className='d-flex justify-content-around pt-3 header'>
                <h1 className='textHeader'>{this.props.name}</h1>
                <Link to={'/carts'}>
                    <p className='textHeader'>
                        <img className='cartImg' src='/images/cart.png'></img>
                    </p>
                </Link>
            </div>
        )
    }
}

export default Header;