import React, { Component } from 'react'
import axios from 'axios'
import HitIem from './HitIem';
import SearchHitForm from './SearchHitForm';
 
 

class Galery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      curentPage: 1,
      pageSize: 10,
      curentKeyWord: '',
      totalPage: 1,
      pages: []
    }
  }
  componentDidMount() {
    // this.githit();
  }

  githit() {
    let url = "https://pixabay.com/api/?key=35787024-3a9fb8dab374cee651d238a1a&q="
      + this.state.curentKeyWord
      + "&page=" + this.state.curentPage
      + "&per_page=" + this.state.pageSize;
    axios.get(url).then((resp) => {
      let totalP = (resp.data.totalHits % this.state.pageSize === 0)
        ? resp.data.totalHits / this.state.pageSize : 1 + resp.data.totalHits / this.state.pageSize


      this.setState({
        hits: resp.data.hits,
        totalPage: totalP,
        pages: new Array(totalP).fill(0)

      })

    }).catch((err) => {
      console.log(err)
    })
  }


 

  search = (keyword) => {
    this.githit();
    
  }


  gotoPage = (page) => {
    this.setState({
      curentPage: page
    }, () => {

      this.githit();
    });


  }
  render() {
    return (
      <div>
        <div>
          <ul className='nav nav-pills'>
            {
              this.state.pages.map((v, index) =>

                <li key={index}>
                  <button className={this.state.curentPage === index + 1 ? 'btn btn-primary' : 'btn btn-link'} onClick={() => this.gotoPage(index + 1)}>{index + 1}</button>
                </li>
              )
            }
          </ul>
        </div>

        <SearchHitForm onSearch={this.search()}></SearchHitForm>
        
        <div className='row'>
          {
            this.state.hits.map(hit =>

                <HitIem hit={hit} details={false}></HitIem>
            
            )
          }
        </div>

      </div>
    )
  }
}
export default Galery;