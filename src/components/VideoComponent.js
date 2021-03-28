import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { HashLink } from 'react-router-hash-link';

class VideoComponent extends Component {

  constructor() {
    super()

    this.state = {
      video_url: '',
      movie_url: '',
      allow_modal_1: false,
      allow_modal_2: false,
      allow_movie: false
    }


  }
  handleMovie = () => {
    this.setState({ movie_url: this.props.movie, allow_modal_2: true, allow_modal_1: false })
  }
  handleCloseMovie = () => {
    this.setState({ movie_url: '', allow_modal_2: false })
  }

  handleVideo = () => {
    this.setState({ video_url: this.props.video, allow_modal_1: true, allow_modal_2: false })
  }
  handleCloseVideo = () => {
    this.setState({ video_url: '', allow_modal_1: false })
  }
  handleStartOver = () => {

    this.setState({ movie_url: '' })
    this.setState({ movie_url: this.props.movie })
  }
  handleStop = () => {
    this.setState({ movie_url: '' })
  }

  render() {

    return (
      <>
        <div className="VideoComponent" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#111', padding: '20px' }}>
          <div style={{ display: 'inline-block', justifyContent: 'right', backgroundColor: '#111', padding: '20px', color: '#cccdb4' }}>
            <a href='#exampleModal'><button onClick={this.handleVideo} type="button" class="btn " style={{ backgroundColor: '#1278a8', color: '#cccdb4', padding: '10px 30px 10px 30px', fontFamily: 'Lora', margin: '10px' }}>
              Watch Trailer
            </button></a>
            {
              this.state.allow_movie ?
              <a href='#exampleModalTwo'><button onClick={this.handleMovie} type="button" class="btn  " style={{ backgroundColor: '#1278a8', color: '#cccdb4', padding: '10px 30px 10px 30px', fontFamily: 'Lora', margin: '10px' }}>
                Watch Movie
              </button></a>
              : 
              <h4>First become a Ghiblian to stream and watch the movie!</h4>
            }



          </div></div>

        {
          this.state.allow_modal_1 ?
            <div id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
              <div class="modal-dialog modal-xl" >
                <div class="modal-content" style={{ backgroundColor: 'black' }}>
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" style={{ color: 'white' }}>{this.props.name}    Trailer</h5>
                    <button onClick={this.handleCloseVideo} type="button" class="close" data-dismiss="modal" aria-label="Close" style={{ color: 'white' }}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="VideoComponent" style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', padding: '20px' }}>

                      <ReactPlayer controls width='800px' url={this.props.video} /></div>

                  </div>
                </div>
              </div>
            </div> : null
        }



        {
          this.state.allow_modal_2 ?
            <div id="exampleModalTwo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
              <div class="modal-dialog modal-xl" >
                <div class="modal-content" style={{ backgroundColor: 'black' }}>
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabelTwo" style={{ color: 'white' }}>{this.props.name}       Movie</h5>
                    <button onClick={this.handleCloseMovie} type="button" class="close" data-dismiss="modal" aria-label="Close" style={{ color: 'white' }}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="VideoComponent" style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', padding: '20px' }}>

                      <ReactPlayer light={this.props.thumbnail} controls='true' width='800px' onEnded={() => { alert("Sorry for the inconvinience; we are expanding our cloud storage; please give us some time; we will get back with the whole movie soon!") }} url={this.state.movie_url} />

                    </div>
                  </div>
                </div>
              </div>
              <center><button onClick={this.handleStartOver} type="button" class="btn btn-info">Start Over</button> <button onClick={this.handleStop} type="button" class="btn btn-danger">Stop Before Start Over</button></center>

            </div>


            : null
        }

      </>
    );
  }
  componentDidMount() {
    if (sessionStorage.getItem('role') == 'admin' || sessionStorage.getItem('role') == 'ghiblian') {
      this.setState({ allow_movie: true })
    }
  }
}

export default VideoComponent;