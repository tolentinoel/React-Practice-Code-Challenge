import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, moreSushi, eatSushi, eatenSushi}) => {


  return (

    <Fragment>
      <div className="belt">
        {/* _____________mapping through all the sushis(based on state) making a component out of each one */}
        {sushis.map(eachSushi => <Sushi key={eachSushi.id} sushi={eachSushi} eatSushi={eatSushi} eatenSushi={eatenSushi} /> )}

        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer