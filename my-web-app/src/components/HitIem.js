import React, { Component } from 'react';

class HitIem extends Component {

    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className='col-md-4' key={this.props.hit.id}>
                <div className='card'>
                    <div className='card-header'>{this.props.hit.tags}|{this.props.hit.webformatWidth}x{this.props.hit.webformatHeight}</div>
                    <div className='card-body'>
                        <img src={this.props.hit.webformatURL} className='card-img' height={200} alt="hit" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HitIem;