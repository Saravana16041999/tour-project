import React from 'react'

const MainTour = ({tours, Deletetours}) => {
    
  return (
    tours.map((tour)=>{
        const {image,id,name,info,price} = tour
        return(
            <div className = 'container' key= {id}>
                <div className= 'imgContainer' >
                <img src={image} alt=""/>
                </div>
                <div className = 'subOne'>
                    <div className= 'subTwo'>
                        <h4 className = 'nametour'>{name}</h4> <h4 className = 'price'>{price}</h4>
                    </div>
                    <p>
                        {info}
                    </p>
                </div>
                <button type="button" className= 'deleteUser' onClick={()=>{Deletetours(id)}}>Delete</button>
            </div>
        )
    })
  )
}

export default MainTour