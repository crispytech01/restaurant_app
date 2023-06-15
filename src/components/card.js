import React from 'react'

const Card = ({id, name, desc}) =>{
  
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?00*200`} alt='roboinage' />
            <div>
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card