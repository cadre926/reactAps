import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HitIem extends Component {

    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className={this.props.details === false ? 'col-md-4 mt-2' : 'm-2'} key={this.props.hit.id}>
                <div className='card'>
                    <div className='card-header'>{this.props.details === false ? this.props.hit.tags:'Details'}|{this.props.hit.webformatWidth}x{this.props.hit.webformatHeight}</div>
                    <div className='card-body'>

                        {

                            (this.props.details === false) ?
                                <img src={this.props.hit.webformatURL} className='card-img' height={200} alt="hit" /> :
                                <img src={this.props.hit.largeImageURL} alt="hit" />
                        }

                    </div>

                    {

                        (this.props.details === false) ?
                            <div className='m-2'>

                                <Link className='btn btn-success' to={'/HitDetails/' + this.props.hit.id}>Hit Details</Link>

                            </div>
                            : 
                        <div>
                            <div className='row p-2'>
                                <div className="col-auto">
                                    <img src={this.props.hit.userImageURL} className="img-thumbnail" alt='ImageURL' />
                                </div>
                                <div>
                                    <ul className='nav nav-pills'>
                                        <li className="list-group-item">Views:<strong>{this.props.hit.views}</strong></li>
                                        <li className='list-group-item'>Comments:<strong>{this.props.hit.comments}</strong></li>
                                        <li className='list-group-item'>Downloads:<strong>{this.props.hit.downloads}</strong></li>
                                        <li className='list-group-item'>Favorites:<strong>{this.props.hit.favorites}</strong></li>
                                        <li className='list-group-item'>Likes:<strong>{this.props.hit.likes}</strong></li>
                                    </ul>
                                    <Link className='btn btn-primary' to={'/galery'}>Back</Link>
                                </div>
                            </div>
                            </div>

                    }

                </div>
            </div>
        );
    }
}

export default HitIem;