import React, { Fragment } from 'react'

const Table = (props) => {
  let array = props.eatenSushi
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div key="table" className="table">
        <div key= "stack" className="stack">
          {renderPlates(array)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table