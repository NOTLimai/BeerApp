import React, { Profiler } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { withRouter } from './index';
import Loader from './Loader';


class Results extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            beers: this.props.beers,
            loading: true,
        }
    }

    componentDidMount() {

        if ( !localStorage.getItem('beer') ) {
            axios.get('https://api.punkapi.com/v2/beers/').then(response => {
                this.setState({ beers: response.data, loading: false})
                localStorage.setItem( 'beer' , JSON.stringify(response.data) );
            }) 
        }
        else {
            this.setState({ beers: JSON.parse(localStorage.getItem('beer')), loading: false})
        }
    }

    componentDidUpdate(prevProps) {
        if ( this.props.router.params.search && prevProps.router != this.props.router  ) {
            axios.get(`https://api.punkapi.com/v2/beers/?beer_name=${this.props.router.params.search}`).then(response => {
                this.setState({ beers: response.data})
            })  
        }
        else if ( prevProps.router != this.props.router ) {
            axios.get(`https://api.punkapi.com/v2/beers/`).then(response => {
                this.setState({ beers: response.data})
            })  
        }
    }


    render () {

        if (this.state.loading) {
            return <Loader />
        }

        return (
            <div className='row trans'>
                {this.state.beers.map(beer =>
                <div key={beer.id} className='col-lg-4 mb-3 beerHover trans'>
                    <div className='bgCard mx-0 pb-3'>
                        <Link className='textdeco' to={'/biere-seule/' + beer.id + '/' + beer.name} >
                            <div className='bgRed mx-0 p-0'></div>
                            <h1 className='beerName'>{ beer.name }</h1>
                            <img className='beerImg' src={beer.image_url}></img>
                        </Link>
                    </div>
                </div>
            )}
            </div>
        )
    }
}

export default withRouter(Results);