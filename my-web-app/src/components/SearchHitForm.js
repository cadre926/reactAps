import React, { Component } from 'react';

class SearchHitForm extends Component {


    constructor(props) {
        super(props);

        this.state={

            keyWordValue:"paris"


        }
        
    }

    setKeyword = (event) => {
        this.setState({
            keyWordValue: event.target.value
        })
      }


      doSearch = (event) => {
        
        event.preventDefault();
        this.props.onSearch(this.state.keyWordValue);
      }
    
    render() {
        return (
            <div>
                <form onSubmit={this.doSearch}>
                    <div className='row m-2 p-2'>
                        <div className='col'>
                            <input type='text' className='form-control' placeholder='keyword'
                                value={this.state.keyWordValue}
                                onChange={this.setKeyword} />
                        </div>
                        <div className='col col-auto'>
                            <button className='btn btn-success' type='submit'>Chercher</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchHitForm;