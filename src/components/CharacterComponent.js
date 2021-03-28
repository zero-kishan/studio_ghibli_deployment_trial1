import React, { Component } from 'react';
import './CharacterComponent.css';
import { HashLink } from 'react-router-hash-link';



const CharacterComponent = (props) => {
  console.log(props, "props passed")



  const character_info = ({ characterdetails }) => {
    if (characterdetails) {


      return (
        <>
          {/* <div className='backgroundWall' style={{ backgroundImage: `url(${characterdetails.image_url})` }} ></div> */}

          <div className='container'>

            <div className="row " style={{ margin: '80px 0px 80px 0px', color: '#1daeed' }}>
              <div className="col-xs-5 col-sm-6 col-lg-3">
                <div ><img className='character_banner' src={characterdetails.image_url} alt='character_poster' style={{ border: '3px solid #1daeed ' }}></img><br />
                  <div style={{ textAlign: 'left' }}>{characterdetails.name}</div>
                </div>

              </div>

              <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
                <p>Disclosed Information about <b>{characterdetails.name} </b></p>
                <hr style={{ backgroundColor: '#687693', height: '0.01px' }}></hr>

                <br />
                <small>
                  Gender : <b> {characterdetails.gender} </b><br />
                  Age : <b> {characterdetails.age} </b> <br />
                  Eye Color : <b> {characterdetails.eye_color} </b> <br />
                  Hair Color : <b> {characterdetails.hair_color} </b><br />
                  Species : <b> {characterdetails.species} </b>
                </small>

              </div>
            </div>
          </div>
        </>
      )
    }
  }

  const character_tile = (characterdetails) => {
      if (characterdetails) {
          return characterdetails.films.map((item) => {
              const film_route = '/films/'+ item.id + '#top'
     
              return (
                  <>
                      <div className='character_p_c'><HashLink to={film_route}><img className='character_film' src={item.image_url} alt='film_poster'></img></HashLink><br /><center>{item.name}</center></div>
                     
                  </>
              )
          })
      }
  }



  return (
    <>
      <div className='main'>{character_info(props)}</div>

      <div style={{ margin: '10px' }}>






            </div>

            <div className="chatacter_tile main" id='character _page_character'>
                <h4 style={{ marginLeft: '20px' }}>Performed In </h4>
                <hr style={{ backgroundColor: '#687693', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>
                {character_tile(props.characterdetails)}
            </div>

          



    </>
  )
}

export default CharacterComponent;