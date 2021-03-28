import React, { Component } from 'react';
import './CharacterComponent.css';
import { HashLink } from 'react-router-hash-link';



const MyPlanComponent = (props) => {
  console.log(props, "props passed")



  const order_info = (orderdetails) => {
    let count = 10000
    if (orderdetails) {
      console.log(orderdetails, 'orderdetails')
     return orderdetails.map((item, index) => {
        console.log(item.email)
        if (item.email==sessionStorage.getItem("email")){
          
          if (index > count){
            return null
          }
          else {
            count = index
            return (
              <>
                {/* <div className='backgroundWall' style={{ backgroundImage: `url(${characterdetails.image_url})` }} ></div> */}
      
                <div className='container-fluid'>
      
                  <div style={{ margin: '80px 0px 80px 0px', color: '#1daeed' }}>
                  <h2>My Current Plan Expiration Date : </h2>
                    <div className="col-xs-6 col-sm-8 col-lg-4">
                    
                      <div ><br />
                      
                        <div style={{ textAlign: 'left' }}>{item.expiration_date} </div>
                      </div>
      
                    </div>
                  </div>
                </div>
              </>
            )
            

          }
          

          
          

        }
       

      })
    

     
    }
  }

  
  console.log(props.orderdetails, 'orderdetails2')



  return (
    <>
    
      <div className='main'>{order_info(props.orderdetails)}</div>
      

      <div style={{ margin: '10px' }}>


            </div>

            
    </>
  )
}

export default MyPlanComponent;