import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from './index';
import axios from 'axios';

class Search extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            search: '',
        }
    }

    hello = () => {
        this.props.router.navigate(`/search/${this.state.search}`);
        this.setState({search: ''})
    }

    render () {
        return (
            <div className='search'>
                <input value={this.state.search} onChange={(event) => this.setState({ search: event.target.value })} className='inputHeader' autoFocus placeholder='Hoppys, Malt, Angry, New...'></input>
                <button className='btnHeader ms-2' onClick={this.hello}>→</button>
            </div>
        )
    }
}

export default withRouter(Search);