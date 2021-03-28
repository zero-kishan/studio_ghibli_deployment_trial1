import React, { Component } from 'react';

import axios from 'axios';
import CharacterComponent from '../components/CharacterComponent';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
import VideoComponent from '../components/VideoComponent'
const characters_url = 'https://ghibli-json-server.herokuapp.com/characters';


class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: '',
      id: this.props.match.params.id
    }
  }

  async getCharacterDetails() {
    const { data: resp } = await axios.get(`${characters_url}/${this.props.match.params.id}`)
    this.setState({ character: resp })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
      <Header />
      <SideBar/>
        {/* <Logout history={this.props.history} /> */}
        <CharacterComponent characterdetails={this.state.character} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getCharacterDetails()
  }

}

export default Character;