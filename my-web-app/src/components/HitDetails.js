import axios from 'axios';
import React, { Component } from 'react';
import HitIem from './HitIem';

class HitDetails extends Component {


    constructor(props) {
        super(props);

        this.state = {

            hit: null

        }

    }




    gethits(id) {
        let url = "https://pixabay.com/api/?key=35787024-3a9fb8dab374cee651d238a1a&id="+id;

        axios.get(url).then((resp) => {

            this.setState({
                hit: resp.data.hits[0]

            })

        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount() {
       this.gethits(this.props.match.params.id);

    }
    render() {

        if (this.state.hit != null)
            return (
                <HitIem hit={this.state.hit} details={true}/>

            );
            else{

                return <div></div>;
                
            }
    }
}

export default HitDetails;