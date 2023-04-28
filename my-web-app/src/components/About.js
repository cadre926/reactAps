import React, { Component } from 'react'

class About extends Component {


  constructor(props) {
    super(props);

    this.state = {

      skillvalue: 'ddddd ddd',
      title: "Give your smile",

      contact: {
        name: "Mohammed Youssfi",
        profile: 'images/profile.png',
        email: 'assaby4@gmail.com'
      },
      skills: [

        { id: 1, skill: 'software enginning' },
        { id: 2, skill: 'ui design' },
        { id: 3, skill: 'MACHINES learning' }
      ]
    }
  }


  setSkill = (event) => {
    this.setState({

      skillvalue: event.target.value
    })

  }

  addSkill = (event) => {
    event.preventDefault()
    let skill = {
      id: [...this.state.skills].pop().id + 1,
      skill: this.state.skillvalue
    }
    this.setState({
      skills: [...this.state.skills, skill]
    })

  }



  onDelete = (skill) => {
    let index = this.state.skills.indexOf(skill)
    let listSkills = [...this.state.skills]
    listSkills.splice(index, 1);

    this.setState({

      skills: listSkills
    })

  }


  render() {
    return (
      <div>

        <div className='card'>
          <div className='card-header'>
            <strong><label>{this.state.title}</label></strong>
          </div>
          <div className='row p-2'>
            <div className='col col-auto'>
              <img width={100} src={this.state.contact.profile} alt="" />

            </div>
            <div className='col'>
              <ul className='list-group'>
                <li className='list-group-item'>{this.state.contact.name} </li>
                <li className='list-group-item'>{this.state.contact.email} </li>
              </ul>
            </div>

          </div>

        </div>

        <div className='card m-2'>
          <div className='card-header'>Skills</div>
          <div className='card-body'>
            <form onSubmit={this.addSkill}>
              <div className='row mb-2'>
                <div className='col'>
                  <input type='text' name='skill' placeholder='New Skill' className='p-1'
                    value={this.state.skillvalue}
                    onChange={this.setSkill} />
                </div>
                <div className='col col-auto'>
                  <button className='btn btn-primary' type='submit'>Add</button>
                </div>
              </div>
            </form>
            <table className='table'>

              <thead>
                <tr>
                  <th>ID</th><th>Skill</th><th></th>
                </tr></thead>
              <tbody>
                {
                  this.state.skills.map((s, index) =>
                    <tr key={s.div}>
                      <td>{s.id}</td>
                      <td>{s.skill}</td>
                      <td>  <button className='btn btn-danger' onClick={() => this.onDelete(s)}>X</button></td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default About;
