import React, { Fragment } from 'react'
// {
//   "id": 1,
//   "name": "Maguro Magic",
//   "img_url": "./sushi/maguro.png",
//   "price": 20,
//   "created_at": "2018-07-27T18:53:16.241Z"
//   }

const Sushi = (props) => {
  return (

    <div className="sushi">
      <div className="plate" onClick={(e) => props.eatSushi(e, props.sushi)}>
        {/* ________on click, the function above will fire & will take in 2 args w.c is the sushi itself and the event if needed */}
        {/* __________Below is a check is props.sushi(each sushi) is in the state of eatenSushi array. */}
        {props.eatenSushi.includes(props.sushi) ? null : <img src={props.sushi.img_url} width="100%" /> }
      </div>

      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>

    </div>
  )
}

export default Sushi