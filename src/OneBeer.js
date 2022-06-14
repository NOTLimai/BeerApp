import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { withRouter } from './index';
import Header from './Header';
import Loader from './Loader';

class OneBeer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            beers: [],
            carts: [],
            loading: true,
        }
    }

    componentDidMount(id) {
        axios.get(`https://api.punkapi.com/v2/beers/${this.props.router.params.id}`).then(response => {
            this.setState({ beers: response.data, loading: false})
        })  
        axios.get(`http://localhost:3001/carts`).then(response => {
            this.setState({ carts: response.data, loading: false})
        }) 
    }

    sendToCart = () => {
        //Requête Ajax pour insérer la phrase dans l'API
        axios.post('http://localhost:3001/carts', {
            beers: this.state.beers,
        }).then(response => {
            this.setState({ beer: response.data })
            axios.get('http://localhost:3001/carts').then(response => {
                this.setState({ beer: response.data})
            })
        })
    }

    render () {

        if (this.state.loading) {
            return <Loader />
        }

        function entierAleatoire(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let entier = entierAleatoire(1, 12);

        return (
            <div className='row container pt-5 pb-5'>
                <Header name="Une seule bière 🍻" />
                {this.state.beers.map(beer =>
                <div key={beer.id} className='col-lg-12 mb-3'>
                    <div className='bgRed'></div>
                    <div className='bgCard mx-0 pb-3'>
                        <div className='d-flex'>
                            <div className='col-lg-4'>
                                <img className='oneBeerImg pt-3' src={beer.image_url}></img>
                            </div>
                            <div className='col-lg-7'>
                                <h1 className='beerName text-start fs-3'>{ beer.name }</h1>
                                <p className='fs-5 text-start'>{ beer.description }</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='col-lg-6'>
                                <div >
                                    <p className='pt-5 ps-3 text-start'> Alc. <b>{ beer.abv }%</b></p>
                                </div>
                                <div >
                                    <h2 className='ps-3 text-start fs-4'><b>Food Pairing</b> </h2>
                                    { beer.food_pairing.map(beer =>
                                        <ul key={beer} className='ps-4 text-start'>
                                            <li>{ beer }</li>
                                        </ul>
                                    )}
                                </div>
                                <div >
                                    <p className='ps-3 text-start fs-5'><b>Ibu { beer.ibu }</b></p>
                                    <div className='ps-3 text-start fs-5'>
                                        <svg className='me-2' xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                                            </metadata>
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M6125 12794 c-27 -2 -120 -8 -205 -14 -957 -68 -1973 -394 -2829 -908 -1759 -1055 -2891 -2894 -3073 -4992 -16 -187 -16 -773 0 -960 89 -1022 397 -1978 918 -2841 1056 -1754 2890 -2879 4984 -3061 187 -16 773 -16 960 0 1016 88 1973 396 2829 910 1759 1055 2891 2894 3073 4992 16 187 16 773 0 960 -118 1362 -635 2623 -1495 3648 -1071 1277 -2647 2092 -4347 2248 -154 14 -704 26 -815 18z"/>
                                            </g>
                                        </svg>
                                        <svg className='me-2' xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                                            </metadata>
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M6125 12794 c-27 -2 -120 -8 -205 -14 -957 -68 -1973 -394 -2829 -908 -1759 -1055 -2891 -2894 -3073 -4992 -16 -187 -16 -773 0 -960 89 -1022 397 -1978 918 -2841 1056 -1754 2890 -2879 4984 -3061 187 -16 773 -16 960 0 1016 88 1973 396 2829 910 1759 1055 2891 2894 3073 4992 16 187 16 773 0 960 -118 1362 -635 2623 -1495 3648 -1071 1277 -2647 2092 -4347 2248 -154 14 -704 26 -815 18z"/>
                                            </g>
                                        </svg>
                                        <svg className='me-2' xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                                            </metadata>
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M6125 12794 c-27 -2 -120 -8 -205 -14 -957 -68 -1973 -394 -2829 -908 -1759 -1055 -2891 -2894 -3073 -4992 -16 -187 -16 -773 0 -960 89 -1022 397 -1978 918 -2841 1056 -1754 2890 -2879 4984 -3061 187 -16 773 -16 960 0 1016 88 1973 396 2829 910 1759 1055 2891 2894 3073 4992 16 187 16 773 0 960 -118 1362 -635 2623 -1495 3648 -1071 1277 -2647 2092 -4347 2248 -154 14 -704 26 -815 18z"/>
                                            </g>
                                        </svg>
                                        <svg className='me-2' xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                                            </metadata>
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M6125 12794 c-27 -2 -120 -8 -205 -14 -957 -68 -1973 -394 -2829 -908 -1759 -1055 -2891 -2894 -3073 -4992 -16 -187 -16 -773 0 -960 89 -1022 397 -1978 918 -2841 1056 -1754 2890 -2879 4984 -3061 187 -16 773 -16 960 0 1016 88 1973 396 2829 910 1759 1055 2891 2894 3073 4992 16 187 16 773 0 960 -118 1362 -635 2623 -1495 3648 -1071 1277 -2647 2092 -4347 2248 -154 14 -704 26 -815 18z"/>
                                            </g>
                                        </svg>
                                        <svg className='me-2' xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                                            <metadata>
                                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                                            </metadata>
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M6125 12794 c-27 -2 -120 -8 -205 -14 -957 -68 -1973 -394 -2829 -908 -1759 -1055 -2891 -2894 -3073 -4992 -16 -187 -16 -773 0 -960 89 -1022 397 -1978 918 -2841 1056 -1754 2890 -2879 4984 -3061 187 -16 773 -16 960 0 1016 88 1973 396 2829 910 1759 1055 2891 2894 3073 4992 16 187 16 773 0 960 -118 1362 -635 2623 -1495 3648 -1071 1277 -2647 2092 -4347 2248 -154 14 -704 26 -815 18z"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 imgGlassBeer'>
                                <img className='imgGlass pt-5' src={process.env.PUBLIC_URL + '/images/glass-' + entier +'.jpg'}></img>
                                <p className='fs-5 pt-3'><b>EBC { beer.ebc } Glass ({entier})</b></p>
                            </div>
                        </div>
                        <Link to={'/carts'} >
                            <button type="button" className='btnCommande text-center mt-5' onClick={this.sendToCart}>Commander</button>
                        </Link>
                    </div>

                    
                    

                </div>
            )}
            </div>
        )
    }
}

export default withRouter(OneBeer);