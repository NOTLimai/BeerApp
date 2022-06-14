import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from './index';
import axios from 'axios';
import Header from './Header';

class Panier extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            carts: [],
            beers : [],
            loading: true,
        }
    }

    componentDidMount() {
        axios.get(`https://api.punkapi.com/v2/beers`).then(response => {
            this.setState({ beers: response.data, loading: false})
        }) 
        axios.get(`http://localhost:3001/carts`).then(response => {
            this.setState({ carts: response.data, loading: false})
        }) 
    }


    render () {

        function entierAleatoire(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let entier = entierAleatoire(1, 12);

        return (
            <div className=' container pt-5 '>
                <Header name="Panier de bière 🍻" />
                <div className='row pt-5 pb-5'>
                        { this.state.carts.map(cart =>
                            <div key={cart.id} className='col-lg-12'>
                                { cart.beers.map(beer =>
                                    <div key={beer.id} className=' mb-3 beerHover trans'>
                                        <div className='bgCard mx-0 pb-3'>
                                            <div className='bgRed'></div>
                                            <div className='row'>
                                                <div className='col-lg-4'>
                                                    <img className='beerImg ms-0 pt-5' src={beer.image_url}></img>
                                                </div>
                                                <div className='col-lg-7'>
                                                    <h1 className='beerName pt-5'>{ beer.name }</h1>
                                                    <p >{ beer.description }</p>
                                                    <p className='fs-4'>Price: {beer.srm} €</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}  
                </div>
            </div>
        )
    }
}

export default Panier;