import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Counter extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {

    super(props);
    this.state = {

      counter: 1,
      list: [0]


    }


  }
  compute = (op) => {

    let signe=op==='+'?1:-1;


    if(this.state.counter===1&&op==='-'){
      signe=0;

    }

    let c = this.state.counter + signe;

   


    this.setState({

      counter: c,
      list: new Array(c).fill(0)
    }


    );




  }

  render() {

    return (
      <div className='card m-3' >

        <div className='card-header'>
          <strong>
            {this.props.title?this.props.title:'Default Title'} : {this.state.counter}
          </strong>
          <div className='ml-auto'>
            <button onClick={() => this.compute('+')} className='btn btn-primary m-2' >+</button>
            <button onClick={() => this.compute('-')} className='btn btn-primary m-2' >-</button>

          </div>
          <div className='card-body'>

            {
              this.state.list.map((v, index) =>
                <span  key={index}>{index}
                  <img width={100} src={this.props.image?this.props.image:'images/profile.png'} alt="" />

                </span>

              )

            }
            {/* <img width={100} src={this.props.image} /> */}
          </div>
        </div>

      </div>
    );
  }
}

export default Counter;
